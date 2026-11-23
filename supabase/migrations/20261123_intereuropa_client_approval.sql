
-- New self-registered accounts wait for manual approval.
-- Existing accounts remain unchanged.
-- Administrator accounts are excluded.

CREATE OR REPLACE FUNCTION public.intereuropa_set_pending_status()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  IF COALESCE(NEW.raw_app_meta_data ->> 'role', '') <> 'admin' THEN
    NEW.raw_app_meta_data :=
      COALESCE(NEW.raw_app_meta_data, '{}'::jsonb)
      || pg_catalog.jsonb_build_object(
        'intereuropa_status',
        'pending'
      );
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS intereuropa_new_user_pending
ON auth.users;

CREATE TRIGGER intereuropa_new_user_pending
BEFORE INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.intereuropa_set_pending_status();
