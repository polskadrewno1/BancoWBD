-- Audit trail for financing requests entered by an administrator on behalf of an existing client.
-- Run this migration in the production Supabase SQL Editor before using the new admin form.

ALTER TABLE public.demandes_financement
  ADD COLUMN IF NOT EXISTS saisie_par_admin boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS admin_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS admin_email text,
  ADD COLUMN IF NOT EXISTS admin_saisie_at timestamptz,
  ADD COLUMN IF NOT EXISTS consentimento_cliente_confirmado boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS demandes_financement_admin_user_idx
  ON public.demandes_financement (admin_user_id)
  WHERE saisie_par_admin = true;

-- Only the trusted service-role Edge Function may set administrator audit fields.
CREATE OR REPLACE FUNCTION public.protect_financing_admin_audit()
RETURNS trigger
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = ''
AS $$
BEGIN
  IF auth.role() IS DISTINCT FROM 'service_role' THEN
    NEW.saisie_par_admin := false;
    NEW.admin_user_id := NULL;
    NEW.admin_email := NULL;
    NEW.admin_saisie_at := NULL;
    NEW.consentimento_cliente_confirmado := false;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_financing_admin_audit_trigger
  ON public.demandes_financement;

CREATE TRIGGER protect_financing_admin_audit_trigger
BEFORE INSERT ON public.demandes_financement
FOR EACH ROW
EXECUTE FUNCTION public.protect_financing_admin_audit();
