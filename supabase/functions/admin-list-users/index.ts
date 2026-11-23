import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Sessão não autorizada.");

    const authClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } } });
    const { data: { user }, error: userError } = await authClient.auth.getUser();
    if (userError || !user || user.app_metadata?.role !== "admin") {
      return new Response(JSON.stringify({ error: "Acesso reservado à administração." }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const admin = createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
    const { data, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
    if (error) throw error;

    const clients = data.users
      .filter((u) => u.app_metadata?.role !== "admin")
      .map((u) => ({
        id: u.id,
        nome: u.user_metadata?.full_name || u.user_metadata?.name || "",
        email: u.email || "",
        whatsapp: u.user_metadata?.whatsapp || "",
        criado_em: u.created_at,
        email_confirmado: Boolean(u.email_confirmed_at),
        estado: u.app_metadata?.intereuropa_status || "active",
      }));

    return new Response(JSON.stringify({ success: true, clients }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Erro interno." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
