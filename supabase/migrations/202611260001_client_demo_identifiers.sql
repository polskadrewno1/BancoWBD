-- INTEREUROPA: identifiant interne fictif attribué automatiquement à chaque utilisateur.
-- Cet identifiant ressemble visuellement à un IBAN portugais, mais n'est PAS un IBAN
-- et ne permet aucun virement, dépôt, retrait ou opération bancaire.
create table if not exists public.client_demo_identifiers (
  user_id uuid primary key references auth.users(id) on delete cascade,
  identifier text not null unique,
  created_at timestamptz not null default now(),
  constraint client_demo_identifier_format check (identifier ~ '^PT50[0-9]{21}$')
);

create or replace function public.generate_client_demo_identifier()
returns text
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  candidate text;
begin
  loop
    candidate := 'PT50' ||
      lpad((floor(random() * 1000000000)::bigint)::text, 9, '0') ||
      lpad((floor(random() * 1000000000)::bigint)::text, 9, '0') ||
      lpad((floor(random() * 1000)::bigint)::text, 3, '0');
    exit when not exists (
      select 1 from public.client_demo_identifiers
      where identifier = candidate
    );
  end loop;
  return candidate;
end;
$$;

create or replace function public.assign_client_demo_identifier()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.raw_app_meta_data ->> 'role' = 'admin' then
    return new;
  end if;

  insert into public.client_demo_identifiers (user_id, identifier)
  values (new.id, public.generate_client_demo_identifier())
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists assign_client_demo_identifier_after_signup on auth.users;
create trigger assign_client_demo_identifier_after_signup
after insert on auth.users
for each row execute function public.assign_client_demo_identifier();

-- Backfill des comptes déjà créés : chaque compte existant reçoit aussi son identifiant.
insert into public.client_demo_identifiers (user_id, identifier)
select u.id, public.generate_client_demo_identifier()
from auth.users u
where coalesce(u.raw_app_meta_data ->> 'role', '') <> 'admin'
and not exists (
  select 1 from public.client_demo_identifiers d where d.user_id = u.id
)
on conflict (user_id) do nothing;

alter table public.client_demo_identifiers enable row level security;

drop policy if exists "Clients can read own fictitious identifier" on public.client_demo_identifiers;
create policy "Clients can read own fictitious identifier"
on public.client_demo_identifiers
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Admins can read all fictitious identifiers" on public.client_demo_identifiers;
create policy "Admins can read all fictitious identifiers"
on public.client_demo_identifiers
for select
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

grant select on public.client_demo_identifiers to authenticated;
