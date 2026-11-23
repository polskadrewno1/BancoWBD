import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] || character);

async function sendApprovalEmail(email: string, name: string) {
  const apiKey = Deno.env.get("BREVO_API_KEY");
  const senderEmail = Deno.env.get("BREVO_SENDER_EMAIL");
  const senderName = Deno.env.get("BREVO_SENDER_NAME") || "INTEREUROPA";

  if (!apiKey || !senderEmail) {
    throw new Error(
      "O envio do e-mail ainda não está configurado. Configure BREVO_API_KEY e BREVO_SENDER_EMAIL nos segredos das Edge Functions."
    );
  }

  const safeName = escapeHtml(name || "Cliente");
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email }],
      subject: "A sua conta INTEREUROPA foi aberta com sucesso",
      textContent:
        "Olá " + (name || "Cliente") + ",\n\n" +
        "A sua inscrição foi confirmada pela administração. A sua conta INTEREUROPA foi aberta com sucesso e já pode aceder à sua área de cliente.\n\n" +
        "Com os melhores cumprimentos,\nINTEREUROPA — Soluções Financeiras",
      htmlContent:
        "<div style='font-family:Arial,sans-serif;color:#1e293b;line-height:1.6'>" +
        "<h2 style='color:#12365e'>INTEREUROPA</h2>" +
        "<p>Olá " + safeName + ",</p>" +
        "<p>A sua inscrição foi confirmada pela administração. A sua conta INTEREUROPA foi aberta com sucesso e já pode aceder à sua área de cliente.</p>" +
        "<p>Com os melhores cumprimentos,<br><strong>INTEREUROPA — Soluções Financeiras</strong></p>" +
        "</div>",
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error("O serviço de e-mail recusou o envio: " + details.slice(0, 500));
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const authHeader = req.headers.get("Authorization");

    if (!supabaseUrl || !anonKey || !serviceKey) {
      throw new Error("Configuração Supabase incompleta nas Edge Functions.");
    }
    if (!authHeader) throw new Error("Sessão não autorizada.");

    const authClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user: adminUser }, error: authError } = await authClient.auth.getUser();

    if (authError || !adminUser || adminUser.app_metadata?.role !== "admin") {
      return json({ error: "Acesso reservado à administração." }, 403);
    }

    const payload = await req.json();
    const user_id = payload?.user_id;
    const action = payload?.action;

    if (typeof user_id !== "string" ||
        !["approve", "block", "unblock"].includes(action)) {
      return json({ error: "Ação ou cliente inválido." }, 400);
    }

    const admin = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: targetData, error: targetError } =
      await admin.auth.admin.getUserById(user_id);

    if (targetError || !targetData.user) throw new Error("Cliente não encontrado.");
    const target = targetData.user;

    if (target.app_metadata?.role === "admin") {
      throw new Error("Não é permitido alterar uma conta de administração.");
    }

    const currentMeta = target.app_metadata || {};
    const currentStatus = currentMeta.intereuropa_status || "active";

    // Não alterar por engano contas antigas nem os seus estados existentes.
    if (action === "approve" && currentStatus !== "pending") {
      throw new Error("Só é possível confirmar uma inscrição que esteja pendente.");
    }
    if (action === "unblock" && currentStatus !== "blocked") {
      throw new Error("Esta conta não está bloqueada.");
    }
    if (action === "block" && currentStatus === "blocked") {
      throw new Error("Esta conta já está bloqueada.");
    }

    const nextStatus = action === "block" ? "blocked" : "active";
    const banDuration = action === "block" ? "876000h" : "none";

    const { error: updateError } = await admin.auth.admin.updateUserById(user_id, {
      app_metadata: { ...currentMeta, intereuropa_status: nextStatus },
      ban_duration: banDuration,
    });
    if (updateError) throw updateError;

    if (action === "approve") {
      try {
        await sendApprovalEmail(
          target.email || "",
          target.user_metadata?.full_name || target.user_metadata?.name || ""
        );
      } catch (emailError) {
        // Reverter a aprovação se o e-mail obrigatório não puder ser enviado.
        const { error: rollbackError } = await admin.auth.admin.updateUserById(user_id, {
          app_metadata: { ...currentMeta, intereuropa_status: currentStatus },
          ban_duration: "none",
        });
        if (rollbackError) {
          throw new Error(
            "O e-mail falhou e não foi possível reverter o estado da conta. Contacte o suporte técnico imediatamente. " +
            (emailError instanceof Error ? emailError.message : "")
          );
        }
        throw emailError;
      }
    }

    return json({
      success: true,
      status: nextStatus,
      email_sent: action === "approve",
    });
  } catch (error) {
    return json({
      error: error instanceof Error ? error.message : "Erro interno.",
    }, 400);
  }
});
