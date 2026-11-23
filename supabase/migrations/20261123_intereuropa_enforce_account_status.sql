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

-- Replace the existing client INSERT policy while preserving its original rule.
DO $$
DECLARE
  existing_policy text;
BEGIN
  SELECT policyname
    INTO existing_policy
  FROM pg_policies
  WHERE schemaname = 'public'
    AND tablename = 'demandes_financement'
    AND cmd = 'INSERT'
    AND with_check LIKE '%aguarda_admin%'
  ORDER BY policyname
  LIMIT 1;

  IF existing_policy IS NOT NULL THEN
    EXECUTE format(
      'DROP POLICY %I ON public.demandes_financement',
      existing_policy
    );
  END IF;
END;
$$;

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
