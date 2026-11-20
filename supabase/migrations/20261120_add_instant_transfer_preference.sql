ALTER TABLE public.demandes_virement
ADD COLUMN IF NOT EXISTS virement_instantane_demande boolean NOT NULL DEFAULT false;
