import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const respond = (data: object, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return respond({ error: "Método não autorizado." }, 405);
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !anonKey || !serviceKey) {
      return respond({ error: "Configuração do servidor incompleta." }, 500);
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return respond({ error: "Sessão não autorizada." }, 401);
    }

    const authClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const {
      data: { user },
      error: userError,
    } = await authClient.auth.getUser();

    if (userError || !user || user.app_metadata?.role !== "admin") {
      return respond({ error: "Acesso reservado à administração." }, 403);
    }

    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { data: identifierRows, error: identifierError } = await adminClient
      .from("client_demo_identifiers")
      .select("user_id, identifier");
    if (identifierError) {
      return respond({ error: "Não foi possível carregar os identificadores internos: " + identifierError.message }, 500);
    }
    const identifiersByUser = new Map(
      (identifierRows || []).map((row) => [row.user_id, row.identifier])
    );

    const clients = [];
    let page = 1;
    const perPage = 1000;

    while (true) {
      const { data, error } = await adminClient.auth.admin.listUsers({
        page,
        perPage,
      });

      if (error) {
        return respond({ error: error.message }, 500);
      }

      for (const listedUser of data.users) {
        if (listedUser.app_metadata?.role === "admin") continue;

        clients.push({
          id: listedUser.id,
          nome:
            listedUser.user_metadata?.full_name ||
            listedUser.user_metadata?.name ||
            "",
          email: listedUser.email || "",
          whatsapp: listedUser.user_metadata?.whatsapp || "",
          criado_em: listedUser.created_at,
          email_confirmado: Boolean(listedUser.email_confirmed_at),
          estado: listedUser.app_metadata?.intereuropa_status || "active",
          identificador_ficticio: identifiersByUser.get(listedUser.id) || "",
        });
      }

      if (data.users.length < perPage) break;
      page++;
    }

    return respond({
      success: true,
      total: clients.length,
      clients,
    });
  } catch (error) {
    return respond(
      {
        error:
          error instanceof Error
            ? error.message
            : "Erro interno do servidor.",
      },
      500
    );
  }
});
