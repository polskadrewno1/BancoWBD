-- Audit trail for financing requests entered by an administrator on behalf of an existing client.
-- Run this migration in the production Supabase SQL Editor before using the new admin form.

ALTER TABLE public.demandes_financement
  ADD COLUMN IF NOT EXISTS saisie_par_admin boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS admin_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS admin_saisie_at timestamptz,
  ADD COLUMN IF NOT EXISTS consentimento_cliente_confirmado boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS demandes_financement_admin_user_idx
  ON public.demandes_financement (admin_user_id)
  WHERE saisie_par_admin = true;
