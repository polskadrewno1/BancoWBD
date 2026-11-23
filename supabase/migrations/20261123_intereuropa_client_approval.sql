-- New self-registered accounts wait for manual approval.
-- Existing accounts are deliberately left unchanged and remain active by default.
create or replace function public.intereuropa_mark_new_user_pending()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.raw_app_meta_data :=
    coalesce(new.raw_app_meta_data, '{}'::jsonb)
    || jsonb_build_object('intereuropa_status', 'pending');
  return new;
end;
$$;

drop trigger if exists intereuropa_new_user_pending on auth.users;
create trigger intereuropa_new_user_pending
before insert on auth.users
for each row execute function public.intereuropa_mark_new_user_pending();
