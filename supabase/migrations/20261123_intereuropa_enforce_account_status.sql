-- Enforce account status from auth.users on every RLS evaluation.
-- Existing accounts with no intereuropa_status remain active.
-- No customer rows, financing requests, or transfer requests are modified.

CREATE OR REPLACE FUNCTION public.intereuropa_is_account_active()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT COALESCE(
    (
      SELECT u.raw_app_meta_data ->> 'intereuropa_status'
      FROM auth.users AS u
      WHERE u.id = auth.uid()
    ),
    'active'
  ) = 'active';
$$;

REVOKE ALL ON FUNCTION public.intereuropa_is_account_active() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.intereuropa_is_account_active() TO authenticated;

DROP POLICY IF EXISTS "Clients consultent leurs demandes"
  ON public.demandes_financement;

CREATE POLICY "Clients consultent leurs demandes"
ON public.demandes_financement
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id
  AND statut <> 'aguarda_admin'
  AND public.intereuropa_is_account_active()
);

DROP POLICY IF EXISTS "Clients podem depositar suas demandas"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients podem depositar seus pedidos"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients podem depositar suas demandes"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients podem depositar seus pedidos de financiamento"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients podem depositar suas demandes de financement"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients podem depositar leurs demandes"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients peuvent déposer leurs demandes"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients podem depositar suas demandas"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients podem depositar leurs demandes de financement"
  ON public.demandes_financement;

DROP POLICY IF EXISTS "Clients peuvent déposer leurs demandes"
  ON public.demandes_financement;

CREATE POLICY "Clients peuvent déposer leurs demandes"
ON public.demandes_financement
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id
  AND statut = 'aguarda_admin'
  AND public.intereuropa_is_account_active()
);

DROP POLICY IF EXISTS client_insert_own_transfer_request
  ON public.demandes_virement;

CREATE POLICY client_insert_own_transfer_request
ON public.demandes_virement
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id
  AND statut = 'en_attente_examen'
  AND public.intereuropa_is_account_active()
);

DROP POLICY IF EXISTS client_read_own_transfer_requests
  ON public.demandes_virement;

CREATE POLICY client_read_own_transfer_requests
ON public.demandes_virement
FOR SELECT
TO authenticated
USING (
  (
    auth.uid() = user_id
    AND public.intereuropa_is_account_active()
  )
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);
