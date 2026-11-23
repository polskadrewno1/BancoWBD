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
    const { data: { user: adminUser }, error: authError } = await authClient.auth.getUser();
    if (authError || !adminUser || adminUser.app_metadata?.role !== "admin") {
      return new Response(JSON.stringify({ error: "Acesso reservado à administração." }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const { user_id, action } = await req.json();
    if (typeof user_id !== "string" || !["approve", "block", "unblock"].includes(action)) {
      return new Response(JSON.stringify({ error: "Ação ou cliente inválido." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const admin = createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
    const { data: targetData, error: targetError } = await admin.auth.admin.getUserById(user_id);
    if (targetError || !targetData.user) throw new Error("Cliente não encontrado.");
    if (targetData.user.app_metadata?.role === "admin") throw new Error("Não é permitido alterar uma conta de administração.");

    const currentMeta = targetData.user.app_metadata || {};
    const nextStatus = action === "approve" ? "active" : action === "block" ? "blocked" : "active";
    const ban_duration = action === "block" ? "876000h" : "none";

    const { error: updateError } = await admin.auth.admin.updateUserById(user_id, {
      app_metadata: { ...currentMeta, intereuropa_status: nextStatus },
      ban_duration,
    });
    if (updateError) throw updateError;

    return new Response(JSON.stringify({ success: true, status: nextStatus }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Erro interno." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
