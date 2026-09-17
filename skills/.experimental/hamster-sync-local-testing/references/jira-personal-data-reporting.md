# Jira Personal Data Reporting — Local Test Recipes

Concrete recipes for exercising the Atlassian personal data reporting cycle
(`POST /app/report-accounts/`) against the real local stack. Use with
Scenario 11 in `SKILL.md`.

## Spec invariants this runbook defends

- Endpoint: `POST https://api.atlassian.com/app/report-accounts/` with an app
  bearer token acquired via `client_credentials` against
  `https://auth.atlassian.com/oauth/token`
- Batch size per request: ≤ 90 accounts
- Request body shape: `{ accounts: [{ accountId, updatedAt }] }`, `updatedAt`
  in RFC 3339 with offset
- Cadence: default 7 days, or `Cycle-Period` response header (in days),
  clamped to ≤ 365 days
- `Retry-After` on 429: in seconds or HTTP-date, clamped to 60s–24h
- Response `status` values: `closed` (erase PII, mark inactive) or `updated`
  (erase PII so next refresh re-fetches)
- Reserved `unknown` accountId: never store PII for, never report on

## Feature flags

These come from `.env.1p`, not a local `.env.local`:

- `SYNC_ENGINE_ENABLED=true`
- `SYNC_JIRA_PERSONAL_DATA_REPORTING_ENABLED=true`
- `ENABLE_JIRA_TWO_WAY_SYNC=true`

If you need to temporarily shrink the cadence for local iteration,
`SYNC_JIRA_PERSONAL_DATA_REPORTING_INTERVAL_MS` overrides the schedule tick
length; default is once per day.

**Do not override the three gating flags locally.** They are already set in
`.env.1p` and the running process reads them from there. If you think they
are disabled, check the sync app's tmux pane at startup for
`"Skipping Jira personal data reporting job"` with a reason, and fix the
root cause.

## Baseline state queries

Pick a real Jira connection and its mappings/state rows.

```sql
-- Active Jira connection on this account
select id as sync_connection_id, account_id, provider,
       provider_config->'config'->>'cloud_id' as cloud_id,
       provider_config->'config'->>'project_id' as project_id
from sync_connections
where provider = 'jira' and sync_enabled and deleted_at is null
  and account_id = '<account-id>';

-- Mappings for that connection that are candidates for reporting
select external_user_id, external_email, external_display_name,
       external_is_active, personal_data_retrieved_at,
       created_at, updated_at
from sync_user_mappings
where sync_connection_id = '<sync-connection-id>'
  and external_user_id <> 'unknown'
  and (external_email is not null or external_display_name is not null)
order by updated_at desc
limit 50;

-- Current reporting cadence state
select atlassian_account_id, oldest_personal_data_retrieved_at,
       last_reported_at, next_report_at, cycle_period_seconds,
       last_atlassian_status, retry_after_until, last_error
from sync_jira_personal_data_reporting_state
where sync_connection_id = '<sync-connection-id>'
order by next_report_at asc;
```

## Recipe A: Force a fresh first-time report

First-time mappings have no state row yet. Any mapping with PII counts as
due on the first cycle.

```sql
-- Clear all cadence state for the connection (next run will report every
-- eligible mapping in order of `created_at` fallback). Use this when you
-- want to exercise the full happy path end-to-end.
delete from sync_jira_personal_data_reporting_state
where sync_connection_id = '<sync-connection-id>';
```

Then trigger (Recipe D) and verify (Recipe F).

## Recipe B: Force an existing state row to be due now

Keeps history but jumps one account to the front of the queue.

```sql
update sync_jira_personal_data_reporting_state
set next_report_at = now() - interval '1 minute',
    retry_after_until = null,
    last_error = null
where sync_connection_id = '<sync-connection-id>'
  and atlassian_account_id = '<atlassian-account-id>';
```

## Recipe C: Seed a due row for a specific account without mutating existing history

```sql
insert into sync_jira_personal_data_reporting_state (
  sync_connection_id, atlassian_account_id,
  oldest_personal_data_retrieved_at,
  last_reported_at, next_report_at, cycle_period_seconds
) values (
  '<sync-connection-id>', '<atlassian-account-id>',
  now() - interval '14 days',
  null, now() - interval '1 minute', 604800
)
on conflict (sync_connection_id, atlassian_account_id)
do update set next_report_at = excluded.next_report_at,
              last_error = null,
              retry_after_until = null;
```

The DB `CHECK` constraint rejects `atlassian_account_id = 'unknown'`; that's
intentional — use this to confirm the invariant holds.

## Recipe D: Trigger the consumer without waiting for the schedule

The queue is `sync-jira-personal-data-reporting`, job name
`report-jira-personal-data`. Adding a job with `connectionId` processes that
one connection; adding with no connection id fans out to every enabled Jira
connection.

From the sync app's repo root, with Redis exposed on `localhost:6379`:

```bash
pnpm --filter sync exec node --input-type=module -e "
import { Queue } from 'bullmq';
const q = new Queue('sync-jira-personal-data-reporting', {
  connection: { host: 'localhost', port: 6379 }
});
await q.add(
  'report-jira-personal-data',
  { connectionId: '<sync-connection-id>' },
  {
    attempts: 1,
    jobId: 'manual-' + Date.now(),
    removeOnComplete: 5,
    removeOnFail: 5,
  }
);
await q.close();
console.log('enqueued');
"
```

Or, if BullMQ Board is mounted, enqueue from its UI.

## Recipe E: Simulate a 429 path without hitting Atlassian

Manipulate the state to look like a rate-limit just happened, then verify
the consumer re-enqueues with the correct delay instead of re-calling
Atlassian on the next schedule tick.

```sql
update sync_jira_personal_data_reporting_state
set retry_after_until = now() + interval '2 minutes',
    last_error = 'simulated 429',
    next_report_at = now() - interval '1 minute'
where sync_connection_id = '<sync-connection-id>'
  and atlassian_account_id = '<atlassian-account-id>';
```

Then trigger (Recipe D). In tmux look for the retry-scheduled log, and
confirm `reportPersonalData` was not actually called again by watching the
Atlassian request counter or adapter trace log.

## Recipe F: Verify a successful cycle

After Recipe D runs to completion against real Atlassian:

```sql
-- State advanced?
select atlassian_account_id, last_reported_at, next_report_at,
       cycle_period_seconds, last_atlassian_status, last_error
from sync_jira_personal_data_reporting_state
where sync_connection_id = '<sync-connection-id>'
order by last_reported_at desc nulls last;

-- If Atlassian returned `closed`, the mapping must be scrubbed + inactive
select external_user_id, external_email, external_display_name,
       external_is_active, personal_data_retrieved_at
from sync_user_mappings
where sync_connection_id = '<sync-connection-id>'
  and external_user_id = '<atlassian-account-id>';
```

Expect:

- `last_reported_at` ≈ now
- `next_report_at` ≈ `last_reported_at + cycle_period_seconds`
- `last_error` is `null`
- `retry_after_until` is `null`
- `last_atlassian_status` reflects what Atlassian returned (may be `null`
  on no-action 204)
- On `closed`: mapping `external_email`, `external_display_name`,
  `personal_data_retrieved_at` are all `null`, `external_is_active` is
  `false`
- On `updated`: mapping PII fields are `null`, `external_is_active` stays
  `true`

## Recipe G: Compliance spot-checks (run after any change)

All three queries must return `0`.

```sql
-- 1. Reserved accountId must never reach cadence state
select count(*) from sync_jira_personal_data_reporting_state
where atlassian_account_id = 'unknown';

-- 2. Reserved accountId must never carry PII
select count(*) from sync_user_mappings
where external_user_id = 'unknown'
  and (external_email is not null or external_display_name is not null);

-- 3. Stored PII must always be stamped with retrieval time
--    (trend this to zero after one user-mapping-refresh pass)
select count(*) from sync_user_mappings
where (external_email is not null or external_display_name is not null)
  and personal_data_retrieved_at is null;
```

## tmux log signposts

- Startup: `"Queued Jira personal data reporting jobs for enabled Jira connections"`
- Per-connection: `"Jira personal data reporting cycle complete"` with
  `reportedCount`, `actionCount`, `cyclePeriodSeconds`
- Rate limited: `"Jira personal data reporting was rate limited"` with
  `retryAfterMs` and `retryAfterUntil`
- Skip (flag off or connection off): `"Skipping Jira personal data reporting job"`
  with a `reason` — match it against the three flag gates plus
  connection-level gates (`connection_not_found`,
  `connection_sync_disabled`, `non_jira_connection`)

## Common local-test pitfalls

- Assuming the flag was overridden in `.env.local`. It isn't — flags come
  from `.env.1p` and the tmux startup log is the authoritative signal.
- Triggering the queue while `SYNC_ENGINE_ENABLED=false` or
  `ENABLE_JIRA_TWO_WAY_SYNC=false` and wondering why no request hit
  Atlassian. Each gate logs its own skip reason.
- Reporting the same real accountId repeatedly within a cycle to "see what
  happens". Atlassian flags this pattern as abuse — use Recipes B and C to
  model cadence on seed data, not by spam-reporting.
- Running compliance spot-check #3 immediately after seeding a mapping with
  PII and no stamp, and concluding the fix is broken — the stamping happens
  on the next `refresh-user-mappings` pass, not on the seed row you
  inserted manually.
- Forgetting that `cycle_period_seconds` in the table is measured in
  seconds while the Atlassian `Cycle-Period` header is in days — the
  adapter converts on ingest.