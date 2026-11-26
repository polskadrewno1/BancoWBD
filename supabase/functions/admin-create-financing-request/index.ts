import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const respond = (data: object, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return respond({ error: "Método não autorizado." }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !anonKey || !serviceKey) {
      return respond({ error: "Configuração do servidor incompleta." }, 500);
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return respond({ error: "Sessão não autorizada." }, 401);

    const authClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: authData, error: authError } = await authClient.auth.getUser();
    const adminUser = authData?.user;
    if (authError || !adminUser || adminUser.app_metadata?.role !== "admin") {
      return respond({ error: "Acesso reservado à administração." }, 403);
    }

    const payload = await req.json();
    const userId = text(payload.user_id, 64);
    const nome = text(payload.nome_completo, 150);
    const pais = text(payload.pais, 100);
    const cidade = text(payload.cidade, 100);
    const profissao = text(payload.profissao, 150);
    const email = text(payload.email_contacto, 200).toLowerCase();
    const telefone = text(payload.telefone, 40);
    const finalidade = text(payload.objet_demande, 3000);
    const iban = text(payload.iban, 34).replace(/\\s+/g, "").toUpperCase();
    const bic = text(payload.bic, 11).toUpperCase();
    const banco = text(payload.nome_banco, 150);
    const idade = Number(payload.idade);
    const rendimento = Number(payload.rendimento_mensal);
    const montante = Number(payload.montant_demande);
    const prazo = Number(payload.prazo_reembolso);

    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(userId)) {
      return respond({ error: "Selecione um cliente registado válido." }, 400);
    }
    if (!nome || !pais || !cidade || !profissao || !email || !telefone || !finalidade || !banco) {
      return respond({ error: "Preencha todos os campos obrigatórios." }, 400);
    }
    if (!Number.isInteger(idade) || idade < 18 || idade > 120 ||
        !Number.isFinite(rendimento) || rendimento < 0 ||
        !Number.isFinite(montante) || montante <= 0 ||
        !Number.isInteger(prazo) || prazo < 1 || prazo > 600) {
      return respond({ error: "Verifique a idade, os rendimentos, o montante e o prazo." }, 400);
    }
    if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/.test(iban)) {
      return respond({ error: "IBAN inválido." }, 400);
    }
    if (!/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(bic)) {
      return respond({ error: "Código BIC / SWIFT inválido." }, 400);
    }
    if (payload.consentimento_cliente_confirmado !== true) {
      return respond({ error: "Confirme que o cliente autorizou esta submissão." }, 400);
    }

    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: selected, error: selectedError } =
      await adminClient.auth.admin.getUserById(userId);
    if (selectedError || !selected?.user || selected.user.app_metadata?.role === "admin") {
      return respond({ error: "O cliente selecionado não existe ou não é elegível." }, 404);
    }

    const { data: inserted, error: insertError } = await adminClient
      .from("demandes_financement")
      .insert({
        user_id: userId,
        nome_completo: nome,
        idade,
        pais,
        cidade,
        profissao,
        rendimento_mensal: rendimento,
        montant_demande: montante,
        prazo_reembolso: prazo,
        email_contacto: email,
        telefone,
        objet_demande: finalidade,
        iban,
        bic,
        nome_banco: banco,
        statut: "reçue",
        saisie_par_admin: true,
        admin_user_id: adminUser.id,
        admin_email: adminUser.email || null,
        admin_saisie_at: new Date().toISOString(),
        consentimento_cliente_confirmado: true,
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("admin-create-financing-request insert:", insertError.message);
      return respond({ error: "Não foi possível registar o pedido. " + insertError.message }, 500);
    }

    return respond({ success: true, request_id: inserted.id, user_id: userId });
  } catch (error) {
    return respond({
      error: error instanceof Error ? error.message : "Erro interno do servidor.",
    }, 500);
  }
});
