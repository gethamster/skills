# Auth and Token Setup

## Get a Local JWT

Known seeded credentials:

- email: `owner@tryhamster.com`
- password: `testingpassword`

### Step 1: Get local Supabase env

```bash
pnpm --filter web supabase status -o env
```

You need: `ANON_KEY`, `API_URL`, `REST_URL`

### Step 2: Get the JWT

```bash
curl -s \
  "http://127.0.0.1:54321/auth/v1/token?grant_type=password" \
  -H "apikey: <ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"email":"owner@tryhamster.com","password":"testingpassword"}'
```

## Get the Provider OAuth Token

### Step 1: Find the active sync connection

```sql
select id, account_id, context_connection_id, credentials_secret_id,
       webhook_secret_id,
       provider, sync_enabled, deleted_at, updated_at,
       reauth_required,
       provider_config->'config'->>'workspace_id' as workspace_id,
       provider_config->'config'->>'team_id' as team_id,
       provider_config->'config'->>'workspace_name' as workspace_name,
       provider_config->'config'->>'cloud_id' as cloud_id,
       provider_config->'config'->>'project_id' as project_id,
       provider_config->'config'->>'space_id' as space_id,
       provider_config->'config'->>'space_key' as space_key,
       provider_config->'config'->>'root_page_id' as root_page_id,
       provider_config->'config'->>'site_url' as site_url,
       provider_config->'config'->'granted_scope_names' as granted_scope_names,
       provider_config->'config'->'webhook_state'->>'secret_id' as webhook_state_secret_id
from sync_connections
where deleted_at is null
order by updated_at desc;
```

### Step 2: If you need the related context connection

```sql
select id, account_id, credentials_secret_id, metadata, updated_at
from context_connections
order by updated_at desc
limit 10;
```

### Step 3: Read the decrypted secret

```sql
select id, name, decrypted_secret
from vault.decrypted_secrets
where id = '<credentials_secret_id>';
```

Use `decrypted_secret.access_token` as the provider access token for Linear, Jira, or Confluence.

For Jira local webhook simulation, read the webhook token from `webhook_secret_id` when present,
or fall back to `provider_config.config.webhook_state.secret_id`.

Confluence has no webhook token to retrieve — it has no webhook channel.

## Shell Variables

Set these for the session:

```bash
JWT='<owner-jwt>'
ACCOUNT_ID='<team-account-uuid>'
SYNC_CONNECTION_ID='<sync-connection-uuid>'

# Linear
LINEAR_TOKEN='lin_oauth_...'
LINEAR_API='https://api.linear.app/graphql'

# Jira
JIRA_TOKEN='<jira-oauth-access-token>'
JIRA_CLOUD_ID='<jira-cloud-id>'
JIRA_PROJECT_ID='<jira-project-id>'
JIRA_SITE_URL='https://your-site.atlassian.net'
JIRA_API_BASE="https://api.atlassian.com/ex/jira/$JIRA_CLOUD_ID/rest/api/3"
JIRA_WEBHOOK_TOKEN='<jira-webhook-token>'

# Confluence
CONFLUENCE_TOKEN='<confluence-oauth-access-token>'
CONFLUENCE_CLOUD_ID='<atlassian-cloud-id>'
CONFLUENCE_SPACE_ID='<numeric-space-id>'
CONFLUENCE_SPACE_KEY='<short-space-key-eg-HAM>'
CONFLUENCE_SITE_URL='https://your-site.atlassian.net/wiki'
CONFLUENCE_API_BASE="https://api.atlassian.com/ex/confluence/$CONFLUENCE_CLOUD_ID"
```

Confluence does not store a webhook token (no webhook channel). The full required OAuth
scope set is `read:page:confluence write:page:confluence delete:page:confluence
read:space:confluence read:content.metadata:confluence offline_access`. Verify
`provider_config.config.granted_scope_names` matches this set after each reconnect — a
mismatch is a bug, even if the connection looks active.

## Headers for API Calls

Always include both headers on sync API calls:

```
Authorization: Bearer <JWT>
x-account-id: <ACCOUNT_ID>
```