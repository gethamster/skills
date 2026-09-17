# SQL Queries for Sync Testing

All queries use `mcp__supabase__query` or direct Postgres. Replace placeholder values.

## Active Sync Connection

```sql
select id, account_id, provider, sync_enabled, deleted_at, updated_at,
       reauth_required,
       webhook_secret_id,
       webhook_id, webhook_url,
       provider_config->'config'->>'workspace_id' as workspace_id,
       provider_config->'config'->>'team_id' as team_id,
       provider_config->'config'->>'cloud_id' as cloud_id,
       provider_config->'config'->>'project_id' as project_id,
       provider_config->'config'->>'space_id' as space_id,
       provider_config->'config'->>'space_key' as space_key,
       provider_config->'config'->>'root_page_id' as root_page_id,
       provider_config->'config'->>'site_url' as site_url,
       provider_config->'config'->'granted_scope_names' as granted_scope_names,
       provider_config->'config'->'webhook_state'->>'secret_id' as webhook_state_secret_id
from sync_connections
where account_id = '<account-id>'
order by updated_at desc;
```

## Grouped Mapping Invariant Check

Use this after reconnect/delete-create tests. Any row returned here deserves investigation.

```sql
select hamster_entity_type,
       external_entity_type,
       external_id,
       count(*) as mapping_rows,
       count(distinct hamster_id) as distinct_hamster_ids
from sync_entity_mappings
where sync_connection_id in (
  select id
  from sync_connections
  where account_id = '<account-id>'
)
group by hamster_entity_type, external_entity_type, external_id
having count(distinct hamster_id) > 1
order by hamster_entity_type, external_entity_type, external_id;
```

## Entity Mappings for a Connection

```sql
select external_entity_type, external_id, external_identifier,
       hamster_entity_type, hamster_id, is_deleted, in_scope,
       last_synced_at, last_sync_origin, last_sync_applied_at, updated_at
from sync_entity_mappings
where sync_connection_id = '<sync-connection-id>'
order by updated_at desc;
```

## Recent Sync Logs for One Entity

Use when tmux shows a specific hamster ID or external ID and you want the DB-side sync
outcome immediately.

```sql
select direction, operation, status, entity_type,
       hamster_id, external_id, error_message,
       started_at, created_at, duration_ms
from sync_logs
where sync_connection_id = '<sync-connection-id>'
  and (
    hamster_id = '<hamster-id>'
    or external_id = '<external-id>'
  )
order by created_at desc
limit 20;
```

## Local Tasks

```sql
select id, display_id, title, parent_task_id, sync_connection_id, updated_at
from tasks
where account_id = '<account-id>'
order by display_id;
```

## Local Briefs

```sql
select b.id, b.status, b.sync_connection_id, b.updated_at,
       d.title, d.description
from brief b
join document d on d.id = b.document_id
where b.account_id = '<account-id>'
order by b.updated_at desc;
```

## Local Initiatives

```sql
select i.id, i.status, i.target_date, i.updated_at,
       d.title, d.description
from initiatives i
join document d on d.id = i.document_id
where i.account_id = '<account-id>'
order by i.updated_at desc;
```

## Local Initiative Links

```sql
select ib.initiative_id, ib.brief_id, ib.relationship_type,
       d.title as brief_title
from initiative_briefs ib
join brief b on b.id = ib.brief_id
join document d on d.id = b.document_id
where b.account_id = '<account-id>'
order by ib.initiative_id, d.title;
```

## Confluence Blueprint Mappings for a Connection

Confluence pages map to `document` rows of type `'blueprint'`. The mapping row carries
`hamster_entity_type='blueprint'` and `external_entity_type='page'`. `external_version`
holds the Confluence page version number for conflict detection.

```sql
select sem.external_id, sem.external_identifier, sem.external_version, sem.external_status,
       sem.hamster_id, sem.in_scope, sem.out_of_scope_reason, sem.is_deleted,
       sem.last_sync_origin, sem.last_synced_at, sem.updated_at,
       d.title, d.type as document_type
from sync_entity_mappings sem
left join document d on d.id = sem.hamster_id
where sem.sync_connection_id = '<sync-connection-id>'
  and sem.external_entity_type = 'page'
order by sem.updated_at desc;
```

## Confluence Same-Page-Id Duplicate Check

After a Confluence delete-recreate or same-space reconnect, this must return zero rows.

```sql
select external_id, count(*) as mapping_rows,
       count(distinct hamster_id) as distinct_document_ids
from sync_entity_mappings
where external_entity_type = 'page'
  and sync_connection_id in (
    select id from sync_connections
    where account_id = '<account-id>' and provider = 'confluence'
  )
group by external_id
having count(distinct hamster_id) > 1
order by external_id;
```

## Confluence Tombstoned Connections for Same Space

The retained-identity revive path looks here. The newest tombstoned row for the same
`cloud_id + space_id` is the candidate for revival on reconnect.

```sql
select id, deleted_at, updated_at,
       provider_config->'config'->>'cloud_id' as cloud_id,
       provider_config->'config'->>'space_id' as space_id,
       provider_config->'config'->>'root_page_id' as root_page_id
from sync_connections
where account_id = '<account-id>'
  and provider = 'confluence'
  and deleted_at is not null
order by updated_at desc;
```

## Confluence Outbox Events for a Document

Verify the `enqueue_blueprint_confluence_page_change` trigger fired after a local mutation.

```sql
select id, sync_connection_id, entity_type, entity_id, operation,
       claimed_at, processed_at, error_message, created_at
from sync_outbound_events
where entity_id = '<document-id>'
order by created_at desc
limit 20;
```

## Confluence Reauth State Audit

A quick filter for "any active Confluence connection that needs user reconnect".

```sql
select id, account_id, sync_enabled, reauth_required,
       provider_config->'config'->>'space_id' as space_id,
       provider_config->'config'->'granted_scope_names' as granted_scope_names,
       updated_at
from sync_connections
where provider = 'confluence'
  and deleted_at is null
  and reauth_required = true
order by updated_at desc;
```