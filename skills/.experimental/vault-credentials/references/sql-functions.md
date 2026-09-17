# SQL Vault Helper Functions

Complete templates for Supabase Vault integration.

## Store Credentials Function

```sql
-- Store credentials in vault (returns secret_id)
-- p_user_id required because this is called via service_role where auth.uid() is unavailable
create or replace function public.store_[feature]_credentials(
  p_user_id uuid,
  p_account_id uuid,
  p_credential_data text
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_secret_id uuid;
  v_secret_name text;
begin
  -- Defense-in-depth: verify permission (also restricted via GRANT)
  if not public.has_permission(p_user_id, p_account_id, 'settings.manage'::public.app_permissions) then
    raise exception 'Access denied: insufficient permissions to store credentials';
  end if;

  -- Create unique name for the secret
  v_secret_name := '[feature]_' || gen_random_uuid()::text;

  -- Store in vault with descriptive name and description
  v_secret_id := vault.create_secret(
    p_credential_data,
    v_secret_name,
    'Credentials for [feature]'
  );

  return v_secret_id;
end;
$$;
```

## Get Credentials Function

```sql
-- Retrieve decrypted credentials
-- Access controlled via GRANT - only service_role can execute
create or replace function public.get_[feature]_credentials(
  p_secret_id uuid
)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_secret text;
begin
  select decrypted_secret into v_secret
  from vault.decrypted_secrets
  where id = p_secret_id;

  return v_secret;
end;
$$;
```

## Delete Credentials Function

```sql
-- Delete credentials from vault
-- Access controlled via GRANT - only service_role can execute
create or replace function public.delete_[feature]_credentials(
  p_secret_id uuid
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  delete from vault.secrets where id = p_secret_id;
  return found;
end;
$$;
```

## Grant Permissions

```sql
-- Grant execute to service_role only (security requirement)
grant execute on function public.store_[feature]_credentials(uuid, uuid, text) to service_role;
grant execute on function public.get_[feature]_credentials(uuid) to service_role;
grant execute on function public.delete_[feature]_credentials(uuid) to service_role;
```

## Simpler Pattern (No Permission Check)

For cases where RLS already provides sufficient access control:

```sql
-- Store connection credentials in vault (simpler version)
create or replace function public.store_connection_credentials(
  p_connection_type text,
  p_credential_data text
)
returns uuid
language plpgsql
security definer
set search_path = '' as $$
declare
  v_secret_id uuid;
  v_secret_name text;
begin
  v_secret_name := 'connection_' || p_connection_type || '_' || gen_random_uuid()::text;

  v_secret_id := vault.create_secret(
    p_credential_data,
    v_secret_name,
    'Connection credentials for ' || p_connection_type
  );

  return v_secret_id;
end;
$$;

-- With current_user check for get function
create or replace function public.get_connection_credentials(
  p_secret_id uuid
)
returns text
language plpgsql
security definer
set search_path = '' as $$
declare
  v_secret text;
begin
  -- Only service_role can call this function
  if current_user != 'service_role' then
    raise exception 'Access denied: only service_role can retrieve credentials';
  end if;

  select decrypted_secret into v_secret
  from vault.decrypted_secrets
  where id = p_secret_id;

  return v_secret;
end;
$$;
```

## Important Notes

- **SECURITY DEFINER** is required to access `vault.decrypted_secrets`
- **`set search_path = ''`** prevents SQL injection via search path manipulation
- **GRANT to service_role only** ensures only the API backend can access credentials
- Vault uses AEAD encryption (AES-256-GCM) provided by Supabase