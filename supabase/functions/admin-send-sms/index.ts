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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Método não autorizado." }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const smsApiKey = Deno.env.get("BREVO_SMS_API_KEY");

    if (!supabaseUrl || !anonKey || !smsApiKey) {
      return json({ error: "Configuração incompleta. Verifique BREVO_SMS_API_KEY nos segredos Supabase." }, 500);
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return json({ error: "Sessão não autorizada." }, 401);

    const authClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: { user }, error: authError } = await authClient.auth.getUser();

    if (authError || !user || user.app_metadata?.role !== "admin") {
      return json({ error: "Acesso reservado à administração." }, 403);
    }

    const payload = await req.json();
    const rawRecipient = typeof payload?.recipient === "string" ? payload.recipient.trim() : "";
    const content = typeof payload?.content === "string" ? payload.content.trim() : "";
    const recipient = rawRecipient.replace(/[\s().-]/g, "");

    if (!/^\+?[1-9]\d{5,14}$/.test(recipient)) {
      return json({ error: "Número internacional inválido. Inclua o indicativo do país." }, 400);
    }
    if (!content || content.length > 1000) {
      return json({ error: "A mensagem deve conter entre 1 e 1000 caracteres." }, 400);
    }

    const response = await fetch("https://api.brevo.com/v3/transactionalSMS/send", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": smsApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: "INTEREUROPA",
        recipient,
        content,
        type: "transactional",
      }),
    });

    const responseText = await response.text();
    let result: Record<string, unknown> = {};
    try {
      result = responseText ? JSON.parse(responseText) : {};
    } catch {
      result = {};
    }

    if (!response.ok) {
      const detail = typeof result.message === "string"
        ? result.message
        : "Brevo não aceitou o envio. Verifique saldo, país de destino e remetente autorizado.";
      return json({ error: detail }, response.status >= 400 && response.status < 500 ? 400 : 502);
    }

    return json({ success: true, messageId: result.messageId || null });
  } catch (error) {
    return json({
      error: error instanceof Error ? error.message : "Erro interno do servidor.",
    }, 500);
  }
});
