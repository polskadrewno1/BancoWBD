-- INTEREUROPA: demandes de transfert (enregistrement d'une demande uniquement)
-- Cette migration ne déclenche et n'exécute aucun virement bancaire.

create table if not exists public.demandes_virement (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  nom_beneficiaire text not null check (char_length(trim(nom_beneficiaire)) between 2 and 160),
  iban_beneficiaire text not null check (char_length(regexp_replace(iban_beneficiaire, '\s', '', 'g')) between 15 and 34),
  montant numeric(14,2) not null check (montant > 0),
  banque_beneficiaire text not null check (char_length(trim(banque_beneficiaire)) between 2 and 160),
  statut text not null default 'en_attente_examen'
    check (statut in ('en_attente_examen', 'en_examen', 'acceptee', 'refusee')),
  date_creation timestamptz not null default now()
);

alter table public.demandes_virement enable row level security;

drop policy if exists "client_insert_own_transfer_request" on public.demandes_virement;
create policy "client_insert_own_transfer_request"
on public.demandes_virement
for insert
to authenticated
with check (auth.uid() = user_id and statut = 'en_attente_examen');

drop policy if exists "client_read_own_transfer_requests" on public.demandes_virement;
create policy "client_read_own_transfer_requests"
on public.demandes_virement
for select
to authenticated
using (
  auth.uid() = user_id
  or (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

revoke all on public.demandes_virement from anon;
grant select, insert on public.demandes_virement to authenticated;

create index if not exists demandes_virement_user_date_idx
on public.demandes_virement (user_id, date_creation desc);
