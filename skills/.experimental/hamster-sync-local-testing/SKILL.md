---
name: hamster-sync-local-testing
description: "Local testing runbook for validating Linear, Jira, and Confluence sync against the local dev stack. MUST USE this skill whenever testing sync behavior locally, debugging sync issues, verifying sync after code changes, running sync test scenarios, checking sync connections/webhooks/mappings, triggering resync, testing team switches, or verifying provider-to-Hamster state agreement. Also use when inspecting tmux logs for sync, querying sync_entity_mappings, diagnosing initiative/brief/task/blueprint sync problems, validating the Jira personal data reporting cycle (report-accounts cadence, 429 handling, PII scrubbing on closed/updated actions, reserved \\\"unknown\\\" accountId), or testing the Confluence reconciliation-only inbound path, root-page bootstrap, OAuth scope drift / reauth_required flagging, space-picker scope, page ancestry under root, hamster label scope, storage-format ↔ markdown conversion, or retained `cloud_id + space_id` identity across reconnect."
version: "1.0.0"
---

# Sync Service Local Testing

Canonical runbook for validating Linear, Jira, and Confluence sync against the real local
stack. Use tmux logs, Supabase state, sync API calls, and direct provider queries together
to verify runtime behavior.

Provider-shape cheatsheet:

| Provider | Inbound channel | Outbound trigger | Entities | Identity key |
| --- | --- | --- | --- | --- |
| Linear | Per-connection webhook | DB trigger → outbox | initiative/project/issue → initiative/brief/task | `workspace_id` (+ team) |
| Jira | Static webhook + token | DB trigger → outbox | epic/issue/subtask → brief/task | `cloud_id + project_id` |
| Confluence | Periodic reconciliation (no webhook) | DB trigger `enqueue_blueprint_confluence_page_change` → outbox | page → blueprint document | `cloud_id + space_id` |

## Quick Reference

| Task | How | Reference |
| --- | --- | --- |
| Get local JWT + account ID | Auth setup flow | [auth-setup.md](references/auth-setup.md) |
| Get provider OAuth token | Vault query | [auth-setup.md](references/auth-setup.md) |
| Check sync connection state | SQL queries | [sql-queries.md](references/sql-queries.md) |
| Check entity mappings | SQL queries | [sql-queries.md](references/sql-queries.md) |
| Trigger resync / team switch / delete | curl commands | [api-commands.md](references/api-commands.md) |
| Query Linear entities directly | GraphQL | [linear-queries.md](references/linear-queries.md) |
| Query Jira entities directly | REST | [jira-queries.md](references/jira-queries.md) |
| Query Confluence pages/spaces directly | REST V2 | [confluence-queries.md](references/confluence-queries.md) |
| Verify Jira personal data reporting cadence | SQL + BullMQ trigger | [sql-queries.md](references/sql-queries.md) |
| Force Confluence reconciliation now | BullMQ enqueue or env tick | [confluence-queries.md](references/confluence-queries.md) |
| Validate mention / mark / formatting / special-character survival across the round-trip | Force-resync trick + native payload curl + Yjs decode | [content-validation.md](references/content-validation.md) |
| Seed a brief with the canonical all-elements demo doc | Browser-console editor `setContent` snippet | [full-content-seed.md](references/full-content-seed.md) |
| Run E2E test scenarios | Checklists below | This file |

## Branch-Aware Test Planning

Before running any scenario, analyze the current branch to build a targeted test plan.
The goal is to focus testing time on the code paths that actually changed, rather than
blindly running every scenario.

### Step 1: Identify what changed

```bash
git log --oneline dev..HEAD
git diff dev --stat
git diff dev --name-only
```

If the branch has no divergence from `dev`, try `main` instead.

### Step 2: Classify the changes

Read the changed files and diffs. Map each change to a sync domain:

| Change area | Relevant scenarios |
| --- | --- |
| `sync.orchestrator.ts`, inbound/outbound consumers | Initiative 2-Way Sync, Baseline & Resync |
| `sync-connections.controller.ts`, connection lifecycle | Team Switch, Delete-Recreate, Baseline |
| `context-connections.service.ts`, retained sync re-link logic | Delete-Recreate, Team Switch and Switch Back |
| Initiative-related mappers, `initiative_briefs` triggers | Initiative 2-Way Sync |
| `webhook.consumer.ts`, `linear-provider-scope-evaluator.ts` | Initiative 2-Way Sync, Workspace-Scoped Filter Checks |
| `webhooks/jira-webhook.controller.ts`, `jira-site-webhook-manager.service.ts` | Jira Baseline & Routing, Jira Scope & Webhook Auth |
| `adapters/jira/*`, `jira-provider-scope-evaluator.ts` | Jira Epic/Issue/Subtask 2-Way Sync, Jira Scope Drift |
| `jira-personal-data-reporting.consumer.ts`, `jira-personal-data-reporting.repository.ts`, `JiraAdapter.reportPersonalData` | Jira Personal Data Reporting |
| `user-mappings.repository.ts` PII handling, `user-mapping-refresh.consumer.ts` | Jira Personal Data Reporting |
| Jira status/field mapping bootstrap | Jira Epic/Issue/Subtask 2-Way Sync |
| `adapters/confluence/confluence.adapter.ts`, `confluence.api-client.ts` | Confluence Blueprint 2-Way Sync, Confluence Reauth |
| `confluence-root-page-bootstrap.ts`, `confluence-root-page-manager.ts` | Confluence Root Page Bootstrap |
| `confluence-provider-scope-evaluator.ts`, hamster label / app property handling | Confluence Scope and Out-of-Scope Drift |
| `confluence.conversion.ts`, storage-format macros | Confluence Content Conversion |
| `SyncEngineService.ensureConfluenceReconciliationSchedule`, `ReconciliationConsumer` Confluence branch | Confluence Reconciliation Cadence |
| `reviveRetainedConfluenceConnectionIfPresent`, `cloud_id + space_id` retained identity SQL | Confluence Delete-Recreate / Same-Space Reconnect |
| Migration `*_confluence-sync.sql`, `enqueue_blueprint_confluence_page_change` trigger | All Confluence scenarios |
| Webhook controller, webhook registration | Baseline & Resync, Team Switch |
| Reconciliation consumer, resync logic | Baseline & Resync |
| `apply_inbound_brief_insert`, `sync_entity_mappings`, reconnect migrations | Delete-Recreate, Baseline & Resync |
| Migration files, schema changes | All scenarios (schema changes affect everything) |
| Outbox triggers, document polling | Local -> provider sync |
| Vault, credentials, OAuth | Auth setup only (verify token retrieval works) |
| `core/document-sync.adapter.ts`, `merge/text-delta-merge.ts`, `shared/services/yjs-document.service.ts` | Content & Formatting Validation (see [content-validation.md](references/content-validation.md)) |
| `packages/shared/src/documents/conversion/adf/*`, `adapters/linear/linear-pm-converter.ts` | Content & Formatting Validation |
| Per-provider native-wire flags (`ENABLE_JIRA_NATIVE_ADF_*`, `ENABLE_CONFLUENCE_NATIVE_STORAGE_*`, `ENABLE_LINEAR_NATIVE_PM_*`) | Content & Formatting Validation |

### Step 3: Build the test plan

Based on the classification:

1. **Always run Scenario 1 (Baseline & Resync)** - it's the health check that catches regressions in any area
2. Add scenarios that map to the changed code paths
3. If a migration was added, run all scenarios - schema changes have broad blast radius
4. Present the plan to the user before executing

Provider mapping shortcut:

- Linear changes usually imply Scenarios 2, 3, 4, 5, and 7
- Jira changes usually imply Scenarios 8, 9, and 10
- Jira user-mapping or personal-data-reporting changes imply Scenario 11
- Confluence changes usually imply Scenarios 12, 13, 14, and 15
- Confluence OAuth scope, refresh, or 401/403 handling changes imply Scenario 16

### Fallback: when the branch is unclear

If the diff is empty, the changes don't touch sync code, or you can't confidently map
changes to scenarios, fall back to the provider-specific default plan:

**Linear default plan**

1. Baseline & Resync
2. Linear Delete-Recreate
3. Linear Initiative 2-Way Sync (both directions)
4. Linear Team Switch and Switch Back
5. Linear Workspace-Scoped Filter Checks

**Jira default plan**

1. Baseline & Resync
2. Jira Epic / Issue / Subtask 2-Way Sync
3. Jira Delete-Recreate / Same-Project Reconnect
4. Jira Scope Drift and Label Loss

**Confluence default plan**

1. Baseline & Resync (still relevant — Confluence connections use the same `sync_connections` row, resync re-baselines hashes)
2. Confluence Root Page Bootstrap
3. Confluence Blueprint 2-Way Sync (page <-> document)
4. Confluence Scope and Out-of-Scope Drift
5. Confluence Delete-Recreate / Same-Space Reconnect
6. Confluence Reauth on Scope / Credential Failure (if OAuth code changed)

This is also the right plan when the user says "just test everything" or doesn't specify.

---

## Prerequisites

Before starting, confirm:

- Local stack is running in a persistent tmux `dev` session via `pnpm dev:with-sync`
- **Cloudflare tunnel is running** so provider webhooks can reach the local stack. Without a tunnel, inbound webhook events cannot arrive and you will be forced to rely on resync, which masks real bugs. Verify by checking the webhook URL on the active sync connection points to a live `*.trycloudflare.com` domain.
- If the current branch added DB changes, local migrations are already applied
- You have a team account ID for the workspace under test
- An active sync connection exists with valid provider OAuth credentials in Vault
- If you are validating workspace-scoped webhook filtering, a second Linear team in the same workspace must exist
- If you are validating Jira scope behavior, the selected Jira project must contain both hamster-labeled and non-hamster epics
- If you are validating Confluence sync, verify `ENABLE_CONFLUENCE_TWO_WAY_SYNC=true` and `SYNC_CONFLUENCE_RECONCILIATION_ENABLED=true` reached the running sync process (tmux startup logs). The same selected Confluence space must contain at least one page eligible for the hamster scope (descendant of the Hamster root) and one non-hamster page outside the root

Recommended baseline test fixture:

- One active Linear sync connection for the account
- At least one synced task
- At least one synced brief/project
- At least one synced initiative linked through `initiative_briefs`

Recommended Jira-specific fixture:

- One active Jira sync connection for the selected `cloud_id + project_id`
- At least one hamster-labeled Jira epic already mapped to a Hamster brief
- At least one Jira issue under that epic and at least one subtask under that issue
- At least one Jira epic without the `hamster` label to validate out-of-scope behavior

Recommended Confluence-specific fixture:

- One active Confluence sync connection for the selected `cloud_id + space_id`
- `provider_config.config.root_page_id` is populated (root page already bootstrapped); if it is null, expect bootstrap-on-first-tick behavior and validate that path explicitly
- At least one Hamster-managed page under the root (has `hamster` label and stamped `hamster.managed=true` app property) already mapped to a local blueprint document
- At least one page in the same space that lives outside the Hamster root or lacks the hamster label — must stay out of scope across reconciliations
- Provider OAuth credentials grant the full Confluence scope set (`read:page:confluence`, `write:page:confluence`, `delete:page:confluence`, `read:space:confluence`, `read:content.metadata:confluence`, `offline_access`). If scopes drift or are missing, `reauth_required=true` is the expected response on the first failed operation, not a silent skip

If the stack is not running, start it in a persistent tmux session:

```bash
tmux new-session -d -s dev 'pnpm dev:with-sync'
```

If local schema is behind the branch:

```bash
pnpm --filter web supabase db push --local
```

## Local Topology

- Proxy: `http://127.0.0.1:8080` (preferred for all API calls)
- Web app direct: `127.0.0.1:3000`
- Local Supabase API: `127.0.0.1:54321`
- Local Postgres: `127.0.0.1:54322`

Sync routes live under `/sync/v1/...`:

- `POST /sync/v1/connections/:id/resync`
- `PATCH /sync/v1/connections/:id`
- `DELETE /sync/v1/connections/:id`
- `POST /sync/v1/connections/:id/enable`
- `POST /sync/v1/connections/:id/disable`
- `POST /sync/v1/webhooks/linear/:accountId/:connectionId`
- `POST /sync/v1/webhooks/jira`

Confluence has no webhook route. Inbound arrives via the periodic `sync-reconciliation` BullMQ
queue. The repeat job id is `sync-confluence-reconciliation-repeat`, scheduled by
`SyncEngineService.ensureConfluenceReconciliationSchedule` at
`SYNC_CONFLUENCE_RECONCILIATION_INTERVAL_MS` (default 10 minutes). Outbound starts from the
`enqueue_blueprint_confluence_page_change` Postgres trigger on `document` mutations.

## Cold-Start Orientation

If starting from empty context, anchor with these facts:

- `apps/sync` owns webhook ingress, queue consumers, reconciliation, and sync API routes
- Local writes enqueue outbound work through DB triggers and outbox processing
- Inbound sync (provider -> Local) arrives via webhooks through the Cloudflare tunnel - this is the main channel and must be tested directly
- Resync (`/sync/v1/connections/:id/resync`) is for re-baselining hashes and verifying idempotency, not for testing the inbound path

Provider-specific ingress rules:

- Linear uses a per-connection webhook route and direct GraphQL verification.
- Jira uses the static `/sync/v1/webhooks/jira` endpoint, validates a stored webhook token, and routes events by `site_url + project_id`.
- Jira scope is stricter than project membership alone: only hamster-labeled epics import as briefs, and only issues/subtasks linked to those epics through parentage or epic-link custom fields import as tasks.
- Confluence has **no webhook channel** — Atlassian Cloud does not expose one for OAuth apps. Inbound runs entirely through periodic reconciliation (default 10 min) and on-demand resync. Reconciliation walks the selected space's pages, evaluates scope via hamster label + space + ancestor-under-root, and reconciles `external_version`. Do not invent a webhook test for Confluence — there is no controller.
- Confluence scope is: page lives in the configured `space_id`, page has the `hamster` label, and page sits at or under the bootstrapped root page (`provider_config.config.root_page_id`). Any one missing → out of scope.

Key source files:

- `apps/sync/src/modules/sync-engine/controllers/sync-connections.controller.ts`
- `apps/sync/src/modules/sync-engine/webhooks/linear-webhook.controller.ts`
- `apps/sync/src/modules/sync-engine/webhooks/jira-webhook.controller.ts`
- `apps/sync/src/modules/sync-engine/queues/outbound-sync.consumer.ts`
- `apps/sync/src/modules/sync-engine/queues/reconciliation.consumer.ts`
- `apps/sync/src/modules/sync-engine/sync.orchestrator.ts`
- `apps/sync/src/modules/sync-engine/adapters/jira/jira-provider-scope-evaluator.ts`
- `apps/sync/src/modules/sync-engine/adapters/confluence/confluence.adapter.ts`
- `apps/sync/src/modules/sync-engine/adapters/confluence/confluence.api-client.ts`
- `apps/sync/src/modules/sync-engine/adapters/confluence/confluence-root-page-bootstrap.ts`
- `apps/sync/src/modules/sync-engine/adapters/confluence/confluence-root-page-manager.ts`
- `apps/sync/src/modules/sync-engine/adapters/confluence/confluence-provider-scope-evaluator.ts`
- `apps/sync/src/modules/sync-engine/adapters/confluence/confluence.conversion.ts`
- `apps/sync/src/modules/sync-engine/sync-engine.service.ts` (Confluence reconciliation schedule)
- `packages/supabase/src/vault-connection-credentials.ts`

## Verification Workflow

Every sync test follows this core loop. Do not skip steps.

```
1. Capture tmux BEFORE mutation
2. Run the mutation (API call, DB update, provider change)
3. Wait for the webhook or outbox processing to fire (check tmux)
4. Capture tmux AFTER mutation
5. Verify local DB state
6. Verify remote provider state
7. Use resync ONLY for hash re-baselining or final idempotency checks
```

**Webhooks are the main channel for Linear and Jira.** Inbound sync (provider -> Local) arrives
via webhooks through the Cloudflare tunnel. When testing inbound changes for Linear or Jira,
mutate on the provider and wait for the webhook to arrive naturally. Check tmux for the
relevant webhook controller (`LinearWebhookController` or `JiraWebhookController`) and
`InboundSyncConsumer` log lines to confirm the webhook was received and processed. Do not
substitute resync for webhook testing - resync uses the reconciliation path which bypasses
the real-time change detection and can mask bugs (e.g. hash-match field mismatches that
silently drop webhook updates while reconciliation still works).

**Confluence has no webhook channel.** Inbound runs entirely through periodic reconciliation
plus on-demand resync. There is no "wait for the webhook" step. The verification loop for
Confluence becomes:

```
1. Capture tmux BEFORE mutation
2. Mutate the page on Confluence (REST V2 or UI)
3. Either wait for the next reconciliation tick OR enqueue a one-shot reconciliation job
4. Capture tmux AFTER reconciliation runs (look for ReconciliationConsumer + ConfluenceAdapter logs)
5. Verify local DB state (document/blueprint row, sync_entity_mappings, sync_logs entry)
6. Re-fetch the Confluence page via REST to confirm round-trip outbound was not stomped
```

For Confluence, resync is *not* a "use only as a final idempotency check" — it is the primary
verification trigger when you cannot wait 10 minutes for the next tick. The trade-off is
opposite to Linear/Jira: there is no separate webhook path to mask, but resync still re-baselines
hashes, so a reconciliation-only bug in scope/conversion will still surface there.

### Tool Priority

Use these in this order - start with the fastest feedback loop:

1. **`mcp__supabase__query`** - fastest way to confirm DB state matches runtime behavior
2. **Direct `curl`** - local auth, sync API calls, Linear GraphQL queries, Jira REST queries
3. **tmux logs** - needed after every major step to confirm processing

Useful tmux commands:

```bash
tmux ls
tmux list-panes -a -F "#{session_name}:#{window_index}.#{pane_index} #{pane_current_command} #{pane_pid} #{pane_title}"
tmux capture-pane -p -t dev:1.1 -S -400
```

Do not use `interactive_bash` for `capture-pane`.

## Auth Setup

Read [auth-setup.md](references/auth-setup.md) for the full flow. Quick summary:

1. Get local Supabase env: `pnpm --filter web supabase status -o env`
2. Get JWT with seeded credentials (`owner@tryhamster.com` / `testingpassword`)
3. Find active sync connection via SQL
4. Get provider OAuth token from `vault.decrypted_secrets`
5. Set shell variables for the provider under test (`LINEAR_TOKEN` or `JIRA_TOKEN`, plus provider-specific IDs)

## Current Data Model

Understanding this is critical for correct verification:

- `initiatives` + linked `document` = canonical initiative entity
- `initiative_briefs` = canonical initiative <-> brief association set
- `brief.initiative_id` is a compatibility shadow only - never treat it as source of truth
- Outbound sync starts from local DB changes and outbox processing, not ad hoc web calls
- Confluence pages map to `document` rows of type `'blueprint'` — not briefs, not tasks. The
  hamster_entity_type in `sync_entity_mappings` for Confluence is `'blueprint'`; the
  external_entity_type is `'page'`. `sync_entity_mappings.external_version` stores the
  numeric Confluence page version for conflict detection
- Confluence connection identity in `provider_config.config` is `{ cloud_id, space_id, space_key, root_page_id, site_url, granted_scope_names }`. `root_page_id` is lazy-bootstrapped on first outbound or first reconciliation; treat a null `root_page_id` as "bootstrap pending", not as an error

## Caveats

- Initiatives are workspace-wide, so team-switch tests can surface workspace-scope behavior
- Bounded initiative queries with nested `projects -> teams` are helpful for debugging but are not complete evidence for very large initiatives
- Linear identifiers do not equal Hamster display IDs
- Outbound brief/project status sync is not canonical - do not assume local brief status changes round-trip to Linear project status
- Jira v1 sync scope is selected project only; hamster-labeled epics become briefs, and standalone Jira issues without a mapped hamster epic brief should stay out of scope
- For linked Jira context connections, relinking the same `cloud_id + project_id` should reuse retained identity; even in other recreate flows, duplicate briefs/tasks after reconnect are still a bug
- Confluence allows N connections per account (1 per `cloud_id + space_id`), unlike Linear/Jira which enforce one-per-account-per-provider. The unique index `idx_sync_connections_one_per_provider_account` exempts Confluence
- Confluence retained identity is `cloud_id + space_id`. `reviveRetainedConfluenceConnectionIfPresent` revives a tombstoned row instead of minting a new one when the same space is reconnected. Same-space reconnect must reuse the prior `sync_entity_mappings` rows — duplicate briefs/blueprints for the same page id are a bug
- The Confluence "Hamster" root page is per-space, never per-account. Cross-account adoption is explicitly refused via the `isAccountLive` probe in `confluence-root-page-manager.adoptUnclaimedRootPage`. If a second local account ever sees the same Confluence space, the root page from the first account must NOT be claimed

## E2E Test Scenarios

### 1. Baseline and Resync

**Goal**: Verify the sync connection is healthy and resync is idempotent.

**Steps**:

1. Query active connection, mappings, local entities, and provider state
  (see [sql-queries.md](references/sql-queries.md))
2. Trigger resync (see [api-commands.md](references/api-commands.md))
3. Inspect tmux logs

**Pass criteria**:

- Connection remains active
- Mappings stay stable (no new duplicates)
- No duplicate tasks, briefs, or initiatives appear
- tmux shows no repeated create loops or duplicate key errors
- Provider and local state still agree after resync

### 2. Linear Delete-Recreate

**Goal**: Verify connection deletion and recreation handles mappings cleanly.

**Prerequisite**: Know whether the connection is sync-only or linked to a context connection.

**Most important variant**: Delete a Linear connection and recreate or relink the **same workspace and same team**. This is the regression-prone path for duplicate briefs and duplicate project mappings.

**Steps**:

1. Record active `sync_connection_id` and mapping counts
2. Delete through the correct flow:

- Linked connection: context-connection flow
- Sync-only: `DELETE /sync/v1/connections/:id`

3. Recreate or relink the same Linear source
4. Enable sync and trigger resync
5. Re-query mappings and local entities

**Required assertions for same-team recreate**:

- Capture the original `sync_connection_id`, `workspace_id`, and `team_id` before delete
- Capture `sync_entity_mappings` for `hamster_entity_type = 'brief'` grouped by `external_id`
- After recreate, verify the only acceptable identity outcomes are: (a) the old same-team sync row was revived, or (b) retained same-team sync identity was reused. Any extra independent same-team history row is a failure.
- Verify each Linear project `external_id` resolves to exactly one Hamster `brief_id`
- Verify repeated brief titles did not appear with different `brief_id` / `document_id` pairs
- If a new sync row was created intentionally, verify the recreated row reused the prior `brief` mappings rather than minting new briefs
- Check `sync_logs` for project entities and confirm recreate settled into `update` / reused mapping behavior rather than repeated inbound `create success` for already-known projects
- Verify there is only one active webhook for the recreated same-team connection path

**Pass criteria**:

- Old mappings are reused or cleanly revived
- No duplicate initiatives, briefs, tasks, or subtasks
- Webhook registration is healthy after recreation
- Same-team recreate does not increase the number of unique Hamster briefs for existing Linear project IDs
- After recreate, one Linear project `external_id` maps to one Hamster `brief_id`

### 3. Linear Team Switch

**Goal**: Verify switching Linear teams preserves identity deterministically.

**Prerequisite**: Alternate Linear team exists in the same workspace with seed data.

**Steps**:

1. Start from a known active Linear sync connection
2. PATCH to another `team_id` in the same workspace
  (see [api-commands.md](references/api-commands.md))
3. Inspect tmux and DB state
4. PATCH back to the original team
5. Inspect tmux and DB state again

**Pass criteria**:

- Previous connection row is tombstoned when switching away
- Original connection row is revived when switching back (not a third new row)
- Initiative mapping counts remain one active mapping per external initiative ID
- No duplicate initiative rows for the original team after switching back
- Active webhook belongs to the active connection only
- Old webhook is cleared or tombstoned locally after switch

### 4. Linear Initiative 2-Way Sync

**Goal**: Verify initiative changes propagate bidirectionally.

#### Local -> Linear

1. Update local initiative title, status, body content
2. Insert or delete `initiative_briefs` rows
3. Inspect tmux
4. Query Linear initiative directly

**Pass**: Linear `name`, `status`, `content`, and linked projects match local state.

**Required title coverage**:

- Verify a local initiative title change reaches Linear `initiative.name`
- Verify the corresponding outbound sync log exists for that initiative external ID

#### Linear -> Local

1. Mutate initiative in Linear (`name`, `status`, `description`, or `content`)
2. Add/remove project links in Linear
3. Wait for the webhook to arrive (check tmux for `LinearWebhookController` and `InboundSyncConsumer` log lines). Do NOT use resync as a shortcut - it bypasses the change detection path and can mask bugs.
4. Check `sync_logs` for the entity to confirm the inbound update was processed (not hash-skipped)
5. Query local state

**Pass**: Local `initiatives.status`, document title, body, and `initiative_briefs` match Linear. A `sync_logs` entry exists for the inbound update (proves the webhook path processed it, not reconciliation).

**Required workspace-scoped initiative checks**:

- Run at least one inbound initiative **title-only** webhook test on an initiative that is already mapped to the active connection
- If the initiative was previously marked out of scope, verify the mapping re-enters scope (`in_scope = true`, `out_of_scope_reason = null`) after the webhook is processed
- Confirm tmux does **not** show `filterReason: 'team_not_included'` for a connected-team initiative title update

**When to use resync in this scenario**: Only after the webhook test passes, as a final idempotency check (resync should produce 0 deleted, 0 deferred, and no state drift).

### 5. Linear Team Switch and Switch Back

**Goal**: Verify switching to another Linear team and switching back preserves connection
identity, tombstones correctly, and produces no duplicate entities or mappings.

**Prerequisite**: A second Linear team exists in the same workspace. Query teams:

```bash
curl -s "$API" \
  -H "Authorization: Bearer $LINEAR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"query":"query { teams { nodes { id key name } } }"}' | jq .
```

**Steps**:

1. Record pre-switch baseline:

- Active connection ID, team_id, webhook_id
- Mapping counts by entity type (initiative, project, issue)
- Total connection rows for the account

2. PATCH to the alternate team (see [api-commands.md](references/api-commands.md)):

- Use the active connection's ID
- Supply the alternate `team_id` with the same `workspace_id`

3. Verify switch-away state:

- Original connection row has `deleted_at` set, `sync_enabled = false`, `webhook_id = null`
- A new connection row was created for the alternate team (not the same row reused)
- New webhook registered in Linear for the alternate team
- Old webhook removed from Linear
- Only 2 total connection rows (original tombstoned + new active)

4. Wait for initial sync of the new team to complete (inspect tmux)

5. PATCH back to the original team:

- Use the new connection's ID this time
- Supply the original `team_id`

6. Verify switch-back state:

- The **original** connection row (from step 1) is revived: `deleted_at = null`, `sync_enabled = true`
- The alternate connection is tombstoned: `deleted_at` set, `webhook_id = null`
- Still only 2 total connection rows (no third row created)
- A fresh webhook registered in Linear for the original team
- No leftover webhooks for the alternate team

7. Verify no duplicates after switch-back:

- Original mapping counts match pre-switch baseline
- No duplicate initiative mappings across connections (`GROUP BY external_id HAVING count > 1` returns empty)
- Only 1 active webhook in Linear total

**Pass criteria**:

- Original connection is tombstoned on switch away, revived on switch back
- Alternate connection is created on switch away, tombstoned on switch back
- Exactly 2 connection rows at all times (never 3)
- No duplicate entity mappings across connections
- Webhook ownership follows the active connection exclusively
- Original mapping counts are preserved after the round-trip

### 6. Exact E2E Assertions

For every scenario, verify all applicable items explicitly:

- [ ] Connection row is the expected active row
- [ ] Webhook state is correct for the active connection
- [ ] Mapping row points to the expected hamster ID and external ID
- [ ] Local entity count did not duplicate unexpectedly
- [ ] Provider entity and local entity agree on the fields under test
- [ ] tmux shows a successful sync path or an intentional, understood skip
- [ ] If resync was used, post-resync state still matches both sides
- [ ] Initiative title changes are tested both directions, not just status/link changes
- [ ] Brief/project title changes are tested both directions
- [ ] Task/issue title changes are tested both directions
- [ ] For workspace-scoped webhooks, a connected-team initiative webhook is accepted and an unconnected-team project webhook is ignored
- [ ] When an ignored webhook is expected, confirm the exact skip reason in tmux (`project_not_tagged`, `project_not_included`, or `team_not_included`)
- [ ] For Jira, a non-hamster epic is ignored and produces no brief mapping
- [ ] For Jira, a top-level issue without a mapped hamster epic is ignored or marked out of scope
- [ ] For Jira reconnect, the same `cloud_id + project_id` preserves brief/task identity instead of duplicating mappings
- [ ] For Jira, subtasks keep correct `parent_task_id` and `brief_id` inheritance from the mapped hamster epic path
- [ ] For Confluence, every active connection has a non-null `provider_config.config.root_page_id` after the first reconciliation
- [ ] For Confluence, each `external_id` (page id) maps to exactly one `document_id` of type `'blueprint'`
- [ ] For Confluence, scope filter produced the expected `out_of_scope_reason` for non-hamster, non-rooted, and other-space pages
- [ ] For Confluence reconnect, the same `cloud_id + space_id` revives or reuses retained identity instead of minting a new root or duplicate mappings
- [ ] For Confluence, terminal 401/403 set `reauth_required=true` instead of retrying
- [ ] For Confluence outbound, the page on Confluence carries the `hamster` label and the managed app property after create/update
- [ ] For Confluence content, layout/placeholder/emoticon/status macros round-trip without dropping content silently

### 7. Linear Workspace-Scoped Filter Checks

**Goal**: Verify workspace-scoped Linear webhooks accept connected-team updates and ignore unconnected-team updates.

**Why this is mandatory**: Workspace-scoped webhooks are required for initiatives, but they also deliver events outside the currently active team. Full E2E coverage is incomplete unless both the positive and negative scope decisions are tested.

**Steps**:

1. Query Linear teams and identify:

- the active connected team
- a second team in the same workspace that is not currently connected

2. Pick four concrete provider entities:

- a mapped initiative on the connected team/workspace
- a mapped project on the connected team
- a mapped issue on the connected team
- a project on the other team

3. Run connected-team inbound title updates for initiative, project, and issue via Linear GraphQL mutations
4. Wait for the webhooks to arrive naturally and capture tmux logs
5. Verify local DB state updated for all three connected-team entities
6. Mutate the other-team project title in Linear
7. Wait for the webhook and confirm it is ignored without creating a mapping

**Pass criteria**:

- Connected-team initiative webhook produces inbound processing and updates the local initiative title
- Connected-team project webhook produces inbound processing and updates the local brief title
- Connected-team issue webhook produces inbound processing and updates the local task title
- Other-team project webhook is skipped with an intentional filter reason (`project_not_tagged` or `project_not_included`)
- No mapping row is created for the other-team project on the active connection

### 8. Jira Epic / Issue / Subtask 2-Way Sync

**Goal**: Verify Jira scope and hierarchy behave like the production contract.

**Steps**:

1. Identify one hamster-labeled Jira epic in the selected project and one non-hamster epic
2. Mutate the hamster epic in Jira and wait for the webhook
3. Verify the mapped Hamster brief updates (or is created on first import)
4. Mutate a Jira issue under that epic, or one linked via Jira epic-link custom fields, and verify it attaches to the mapped brief
5. Mutate a Jira subtask under that issue and verify it inherits the correct `parent_task_id` and `brief_id`
6. Create or update a Hamster brief and verify the outbound Jira epic keeps the `hamster` label

**Pass criteria**:

- Hamster-labeled Jira epics import as Hamster briefs
- Jira epics without the `hamster` label stay out of scope
- Jira issues under a mapped hamster epic, including epic-link custom-field variants, attach to the correct brief
- Jira subtasks under those issues inherit the correct task parentage and brief linkage
- Outbound Hamster brief creation/update preserves the Jira `hamster` label

### 9. Jira Delete-Recreate / Same-Project Reconnect

**Goal**: Verify the same Jira source (`cloud_id + project_id`) does not mint duplicate Hamster entities, and that linked-context relink reuses retained identity.

**Steps**:

1. Record the active Jira `sync_connection_id`, `cloud_id`, `project_id`, and mapping counts
2. If the Jira connection is linked to a context connection, exercise the real relink/confirm flow for the same Jira site/project pair
3. Otherwise, recreate the same Jira site/project pair and verify mapping/entity reuse even if the connection row itself is not revived by that flow
4. Trigger resync only after inbound webhook behavior is understood
5. Re-query `sync_connections`, `sync_entity_mappings`, local briefs, and local tasks

**Pass criteria**:

- In the linked-context relink flow, same-source Jira reconnect revives or reuses retained identity instead of minting unrelated history rows
- Existing Jira epic external IDs still resolve to the same Hamster brief IDs
- Existing Jira issue/subtask external IDs still resolve to the same Hamster task IDs
- No duplicate briefs/tasks appear for the same Jira external IDs after reconnect

### 10. Jira Scope Drift and Label Loss

**Goal**: Verify Jira entities leave scope cleanly when their hamster epic linkage disappears.

**Steps**:

1. Start from a mapped hamster-labeled Jira epic plus a mapped child issue
2. Remove the `hamster` label from the epic (or move the issue away from the hamster epic)
3. Wait for the webhook and inspect tmux + `sync_logs`
4. Re-query `sync_entity_mappings` and local entities

**Pass criteria**:

- Epic mapping becomes out of scope when the `hamster` label is removed
- Child issue/task mapping becomes deleted or out of scope when the hamster epic linkage disappears
- No replacement brief/task is minted during the out-of-scope transition

### 11. Jira Personal Data Reporting

**Goal**: Verify the periodic Atlassian `report-accounts` cycle reports stored PII on time, honors the cycle and Retry-After headers, scrubs PII on `closed`/`updated` actions, and never includes the reserved `unknown` accountId.

**Why this is mandatory**: Atlassian monitors apps for correct use of this API. Apps that miss cycles, over-report, or report closed accounts past a reasonable window get flagged. The invariants are encoded across the `JiraAdapter.reportPersonalData` path, the `JiraPersonalDataReportingConsumer`, and the `sync_jira_personal_data_reporting_state` table. See [jira-personal-data-reporting.md](references/jira-personal-data-reporting.md) for setup, trigger recipes, and SQL spot-checks.

**Prerequisites**:

- A real Jira sync connection on the local account (same one used by scenarios 8-10)
- `.env.1p` already sets `SYNC_ENGINE_ENABLED`, `SYNC_JIRA_PERSONAL_DATA_REPORTING_ENABLED`, and `ENABLE_JIRA_TWO_WAY_SYNC`. Confirm they are `true` in the running process via tmux startup logs — do **not** add these to a local `.env.local` unless you specifically need to override
- At least one `sync_user_mappings` row for the connection that has `external_email` or `external_display_name` set and `external_user_id` that is a real Atlassian accountId (not `unknown`)

**Steps**:

1. **Verify the scheduled cycle is live.** Look at the tmux sync pane at startup for `"Queued Jira personal data reporting jobs for enabled Jira connections"`. If you see `SYNC_JIRA_PERSONAL_DATA_REPORTING_ENABLED=false` or a skip log, the flag didn't reach the process.
2. **Seed a due-now state row** so you don't have to wait for the natural 7-day cadence. Query and mutate `sync_jira_personal_data_reporting_state` per [jira-personal-data-reporting.md](references/jira-personal-data-reporting.md) — either seed `next_report_at = now() - interval '1 minute'` or delete the state rows so every mapping becomes first-time-due.
3. **Trigger the consumer** either by waiting for the next interval tick or by enqueueing a job directly with the connection id. The reference file has a one-off Node snippet.
4. **Observe tmux** for `"Jira personal data reporting cycle complete"` with `reportedCount`, `actionCount`, and `cyclePeriodSeconds`. Atlassian's real response for a fresh accountId is usually `actionCount=0`; for a stale one you'll see `updated` or `closed` in `actions`.
5. **Exercise the rate-limit path** by simulating 429 behavior. Easiest: temporarily point the adapter's app-token call at a stub, or simulate by updating the state row to a recent `retry_after_until` and verifying the consumer re-enqueues with the expected delay instead of re-hitting Atlassian.
6. **Exercise the "closed" scrub** by picking one mapping, stamping the state with `last_atlassian_status = 'closed'` manually if needed, or choosing a real Atlassian accountId you've closed in an Atlassian sandbox — then verify `external_email`, `external_display_name`, `personal_data_retrieved_at` all become `null` on the mapping, and `external_is_active` flips to `false`.
7. **Exercise the "updated" scrub** analogously — verify PII is cleared (forces the next user-mapping refresh to re-fetch it) but `external_is_active` stays `true`.
8. **Run the compliance spot-checks** from [jira-personal-data-reporting.md](references/jira-personal-data-reporting.md) — they must all return zero rows.

**Pass criteria**:

- A due state row leads to a `POST https://api.atlassian.com/app/report-accounts/` with the correct batch shape (≤90 accounts, each `{accountId, updatedAt}` in RFC 3339 format)
- After a successful cycle, `next_report_at` advances by `cycle_period_seconds` (7 days by default, or the capped `Cycle-Period` header value), `last_error` is `null`, `retry_after_until` is `null`
- A 429 branch stores `retry_after_until` and re-enqueues with a delay that respects `Retry-After` but does not exceed 24h
- `closed` and `updated` actions clear `external_email` / `external_display_name` / `personal_data_retrieved_at` on the matching `sync_user_mappings` rows; `closed` additionally sets `external_is_active = false`
- The reserved `unknown` accountId never appears in the reporting state table (DB CHECK) and never leaves the consumer in a request body
- No `sync_user_mappings` row with `external_user_id = 'unknown'` stores `external_email` or `external_display_name`
- No mapping stores PII with a `NULL` `personal_data_retrieved_at` after the next `refresh-user-mappings` pass — the timestamp must be stamped whenever PII is persisted

### 12. Confluence Root Page Bootstrap

**Goal**: Verify the per-space "Hamster" root page is created (or adopted) exactly once, and that
`provider_config.config.root_page_id` is populated before any outbound page write attempts.

**Why this is mandatory**: Without a root page, outbound creates are skipped (`reconciliation.consumer.ts:1246-1252`) and inbound scope cannot evaluate ancestry. A bug that creates two root pages, or adopts a foreign account's root, silently breaks scope evaluation.

**Steps**:

1. Start from a freshly-created Confluence sync connection where `provider_config.config.root_page_id` is null. If you don't have one, set it to null in SQL on a test connection
2. Trigger a reconciliation (see [confluence-queries.md](references/confluence-queries.md)) or wait for the next 10-minute tick
3. Inspect tmux for `ensurePersistedConfluenceRootPage` log lines — confirm one of: "created root page", "reused stored root page", "adopted unclaimed root page"
4. Re-query the connection row; `root_page_id` must now be non-null and match an actual Confluence page
5. Fetch the page directly via REST (`GET /wiki/api/v2/pages/{root_page_id}`) and confirm it lives in the configured space, has the `hamster` label, and carries the managed app property
6. Trigger reconciliation a second time and confirm no new "created root page" log appears — the existing root must be reused

**Cross-account rejection check** (only if multiple local accounts share the same Confluence space — rare in dev, but assert if the change touched `confluence-root-page-manager.ts:adoptUnclaimedRootPage`):

- Create a connection on a second account targeting the same `cloud_id + space_id`
- Confirm tmux shows the adopt path refused with an `isAccountLive` reason
- Confirm the second account got its own root page or a clear bootstrap error, not silent adoption

**Pass criteria**:

- Exactly one `root_page_id` per `(account_id, cloud_id, space_id)` after bootstrap
- The stored `root_page_id` resolves to a real, hamster-labeled page in the correct space
- Repeated reconciliation never re-creates the root or mints duplicates
- Cross-account adoption is refused, not silent

### 13. Confluence Blueprint 2-Way Sync (page <-> document)

**Goal**: Verify Confluence pages and Hamster blueprint documents round-trip both directions through reconciliation and the outbox trigger.

#### Local -> Confluence

1. Insert or update a `document` row of type `'blueprint'` associated with the active Confluence connection
2. Confirm `sync_outbound_events` shows a new row enqueued by the `enqueue_blueprint_confluence_page_change` trigger
3. Watch tmux for `OutboundSyncConsumer` claiming the job and `ConfluenceAdapter.createEntity`/`updateEntity` calling `POST/PUT /wiki/api/v2/pages`
4. Fetch the page via REST and verify: title matches, storage-format body matches the markdown → storage conversion, page parent resolves to the configured `root_page_id` (or the parent blueprint's mapped page if nested), `hamster` label applied, app properties set
5. Repeat for a delete — `document` row deletion should result in `DELETE /wiki/api/v2/pages/{id}` and the mapping flips to `is_deleted=true`

**Pass**: Page exists on Confluence with the expected title, body, label, app properties, and parent. `sync_entity_mappings.external_version` reflects the Confluence-returned version number.

#### Confluence -> Local

1. Mutate the page in Confluence (title and storage body) directly via REST or the Confluence UI. Be sure to increment the version
2. Trigger reconciliation (or wait for the next tick — see [confluence-queries.md](references/confluence-queries.md))
3. Inspect tmux for `ReconciliationConsumer` + `ConfluenceAdapter.fetchEntities` log lines and a corresponding `sync_logs` inbound entry
4. Query the local `document` row — title and converted markdown body must match
5. Confirm `sync_entity_mappings.external_version` advanced to the new page version

**Pass**: Local document title and body reflect the Confluence change. `sync_logs` shows an inbound row with operation `update` (or `create` on first import). `external_version` advanced.

**Required title-only coverage**: Run at least one title-only change per direction. Body-only edits exercise the conversion path; title-only edits exercise the change-detection path independently.

### 14. Confluence Scope and Out-of-Scope Drift

**Goal**: Verify the three scope axes (space, hamster label, root ancestry) each behave correctly, and that pages that leave scope are marked `in_scope=false` with the correct `out_of_scope_reason` rather than being deleted or silently kept.

**Steps**:

1. Identify four pages in the configured space:

- **A**: managed (under root + hamster label + managed app property) — should stay in scope
- **B**: same space, lacks the `hamster` label — should be filtered with reason `label_not_included`
- **C**: same space, has the hamster label but lives outside the Hamster root subtree — should be filtered with reason `root_not_included` (or similar)
- **D**: in a different space entirely — must never appear; reconciliation only fetches pages from the configured `space_id`

2. Trigger reconciliation
3. Inspect tmux for the scope decision logs and `sync_logs` skip reasons
4. Query `sync_entity_mappings` for each external page id:

- **A**: `in_scope=true`, `out_of_scope_reason` is null
- **B**: either no mapping row exists, or an existing row has `in_scope=false` and `out_of_scope_reason='label_not_included'`
- **C**: similar with `out_of_scope_reason` reflecting root ancestry failure
- **D**: no mapping row ever created

5. Now flip **A**: remove the hamster label on Confluence. Re-trigger reconciliation. Verify the mapping becomes `in_scope=false`, the local document is **not** hard-deleted, and a subsequent re-label restores `in_scope=true` without minting a new mapping

**Pass criteria**:

- Each scope axis produces a distinct, intentional skip reason in tmux + `sync_logs`
- Out-of-scope transitions update existing mappings rather than minting new ones
- Re-entering scope reuses the original mapping row and `document` row
- No mapping row is ever created for a page outside the configured `space_id`

### 15. Confluence Delete-Recreate / Same-Space Reconnect

**Goal**: Verify deleting and recreating a Confluence sync connection for the same `cloud_id + space_id` reuses retained identity instead of creating duplicate `document` rows.

**Prerequisite**: An active Confluence connection with at least one mapped page, and recorded baseline of: `sync_connection_id`, `cloud_id`, `space_id`, `root_page_id`, mapping counts grouped by `external_id`.

**Steps**:

1. Record baseline as above
2. Delete the connection through the appropriate flow (linked context vs. sync-only — same flow distinctions as Linear/Jira)
3. Recreate or relink the same `cloud_id + space_id`
4. Verify the retained-identity revive path fired: tmux shows `Reviving retained Confluence sync identity`. The new active connection row should be either: (a) the original row revived (`deleted_at=null` again), or (b) a new row that successfully reuses the prior `sync_entity_mappings` and `root_page_id`
5. Trigger a reconciliation
6. Re-query mappings grouped by `external_id` and confirm each page id still resolves to exactly one Hamster blueprint document
7. Confirm `root_page_id` is the same id from baseline — the revive flow must NOT create a second "Hamster" root page in the space

**Pass criteria**:

- One Confluence page `external_id` → one Hamster blueprint `document_id` across the round-trip
- Retained-identity revive path is observed in tmux
- No second "Hamster" root page appears in the space after reconnect
- Webhook table is unaffected (Confluence has no webhooks; verify no leftover webhook rows are written)
- Out-of-scope mappings from before delete are still out of scope after recreate (reconnect must not silently flip scope)

### 16. Confluence Reauth on Scope or Credential Failure

**Goal**: Verify terminal 401/403 errors during credential refresh OR during a write operation flip `sync_connections.reauth_required` to `true` and stop further requests, rather than retrying indefinitely.

**Why this is mandatory**: Confluence OAuth scopes evolve, and tokens get revoked from the Atlassian admin console. If `reauth_required` is not set on a terminal 401/403, the consumer will burn the BullMQ retry budget hammering a dead token and never surface the reconnect prompt to the user.

**Steps**:

1. Pick an active Confluence connection and capture `reauth_required` (should be `false`)
2. **Refresh failure path**: stub the refresh token in vault to an invalid value, OR temporarily edit `provider_config.config.granted_scope_names` to drop a required scope. Trigger an outbound mutation (e.g. update a document title)
3. Watch tmux for `ConfluenceAdapter.refreshCredentials` or operation call returning a non-retryable 401/403, then for `SyncOrchestrator.flagReauthRequired` setting the flag
4. Query the connection: `reauth_required=true`, `sync_enabled` may stay true (depending on the policy), but no further outbound jobs should fire successfully until the user reconnects
5. **Operation failure path**: revert the refresh token, then revoke the access token directly from the Atlassian admin console (or rotate the stored access token to a random value). Trigger another mutation and verify the same flag flip happens from the operation call path, not just from refresh
6. Reset by running the OAuth flow again and confirm `reauth_required` flips back to `false` once the new token + full scope set is stored

**Pass criteria**:

- Terminal 401/403 from refresh sets `reauth_required=true` before the next operation
- Terminal 401/403 from a normal operation (not refresh) also sets `reauth_required=true`
- No retry storm: tmux shows the job marked non-retryable, not requeued
- Successful OAuth re-grant flips `reauth_required` back to `false`
- The stored `granted_scope_names` matches the requested full scope set after reconnect — partial scope grants should not silently clear `reauth_required`

### 17. Content and Formatting Validation (mention + mark survival across round-trip)

**Goal**: Verify that document content — mention atoms, color marks, images,
embeds, marks like bold/italic/strike — survives a full Hamster ↔ provider
round-trip in both directions. The existing scenarios cover *that sync*
*fires*; this one covers *what the synced bytes contain*.

**When mandatory**: any change under `core/document-sync.adapter.ts`,
`merge/text-delta-merge.ts`, the PM↔ADF converters
(`packages/shared/src/documents/conversion/adf/*`), the Linear PM converter
(`adapters/linear/linear-pm-converter.ts`), or any flip of the per-provider
native-wire flags. Also when touching `sync_user_mappings` mention resolution
or `JiraMentionResolver` / `LinearMentionResolver` behavior.

**Full walkthrough**: [content-validation.md](references/content-validation.md)

**Quick summary of what to verify**:

1. **Outbound** (Hamster → provider): with native-wire flag on, the
  provider entity carries structured native nodes (ADF `mention` with
  provider accountId, Linear `suggestion_userMentions` with Linear
  accountId) — not flat text.
2. **Inbound** (provider → Hamster): when the provider edits text around
  a mention, the local Hamster doc preserves the mention atom (Hamster
  UUID + Hamster label, not the provider's accountId/displayName) while
  the text change lands.
3. **No `sync_inbound_divergence_overwrite_skipped` warn** appears for
  text-divergent inbound with local atoms — that warn indicates the
  text-delta engine isn't being reached.

**Key techniques in the reference doc**:

- Force-resync trick (bump `hamster_sync_hash` + `document.updated_at`)
  to bypass content-hash dedup in the polling consumer
- Yjs binary state decoder script for verifying local PM JSON after
  inbound
- Patching `sync_user_mappings` to unblock unmapped mentions
- Restarting sync via `touch apps/sync/src/main.ts` to pick up env changes
  without a full dev stack restart
- Echo-suppression window — wait past it before testing fresh inbound

## Common Pitfalls

- Querying `vault.secrets.secret` instead of `vault.decrypted_secrets.decrypted_secret`
- Using the wrong local password (seeded value is `testingpassword`)
- Forgetting `x-account-id` header on API calls
- Using reset when you meant to preserve existing local provider test state
- Treating the proxy root as a health check instead of testing actual sync routes
- Reading the wrong tmux pane or too little log history
- Assuming initiative scope from an incomplete bounded query
- Assuming raw initiative webhook payloads always include enough team/project context for scope evaluation
- Treating `brief.initiative_id` as canonical instead of `initiative_briefs`
- Looking only at brief titles after recreate. Duplicate titles are a symptom, but the real invariant is one Linear project `external_id` → one Hamster `brief_id`.
- Assuming a Jira issue in the selected project is in scope even when it is not linked to a hamster-labeled epic by parentage or epic-link field
- Treating Jira reconnect as successful just because one connection row is active; the real invariant is one Jira external epic/issue ID → one Hamster brief/task ID across retained same-project history
- Forgetting that Jira webhook auth uses the stored token query param on the static `/sync/v1/webhooks/jira` route
- Looking for a Confluence webhook route. There is none. `ConfluenceAdapter.createWebhook` throws 501 by design — Atlassian Cloud does not expose Confluence webhooks for OAuth apps
- Treating a null `provider_config.config.root_page_id` as a broken connection. On a fresh connection it is lazy-bootstrapped on the first reconciliation tick or first outbound write
- Reading `provider_config.config.granted_scope_names` and assuming OAuth is healthy if the column is populated. Scope drift is detected by comparing it against the required scope set in the adapter; a mismatched value with `reauth_required=false` is itself a bug
- Forgetting that Confluence connections use V2 page endpoints (`/wiki/api/v2/pages/*`) but V1 for labels (`/wiki/rest/api/content/{id}/label`). A V1 outage masquerades as "create works but the page never gets the hamster label"

## Testing Anti-Patterns

These patterns produce false confidence - tests pass but real bugs hide underneath.

- **Using resync to test inbound sync instead of waiting for webhooks.** Resync uses the reconciliation path which fetches all entities in bulk and reconciles them. The webhook path uses the change detector with hash comparison. These are different code paths. A bug in the hash computation (e.g. tracked field name not matching the transformer output) will be invisible to resync but will silently drop every webhook update in production. Real-world example: `initiative_ids` was tracked by the change detector but the transformer emitted `_linear_initiative_ids` - reconciliation worked fine but every project-initiative link webhook was hash-skipped.
- **Testing without a Cloudflare tunnel running.** If the tunnel is down, no webhooks arrive. You end up relying on resync for everything, which masks the exact class of bugs described above. Always verify the webhook URL on the active sync connection resolves to a live tunnel before starting tests.
- **Checking only `initiative_briefs` count without verifying `sync_logs`.** The count might match because a previous resync populated the data. Check `sync_logs` for a recent inbound entry with the correct `external_id` and `created_at` timestamp to prove the webhook path actually processed the change.
- **Treating resync as a substitute for the two-way sync test.** Resync is a one-directional bulk fetch from the provider. It does not test the real-time bidirectional flow. Use resync only for: (1) re-baselining hashes after code changes, (2) verifying idempotency as a final check after webhook tests pass.
- **Checking only that the recreated connection is active.** Delete-recreate bugs often preserve a healthy-looking active connection while silently creating a second or third set of brief mappings for the same Linear projects. Always verify `sync_entity_mappings` grouped by `external_id` and join them back to `brief` / `document` rows.
- **Treating initiative inbound coverage as satisfied if project and issue webhooks pass.** Workspace-scoped initiative webhooks can fail independently because initiatives are global and may require mapped-entity hydration to recover scope. Always run a connected-team initiative title webhook test explicitly.
- **Skipping the negative workspace-scope check.** A branch can accidentally fix initiative webhook delivery by letting all workspace events through. Always mutate an unconnected-team project and verify the webhook is ignored with no new mapping.
- **Assuming all Jira issues in the selected project should import.** Jira scope is stricter: only hamster-labeled epics import as briefs, and only issues/subtasks linked to those epics by parentage or epic-link fields should import as tasks.
- **Checking only Jira titles after reconnect.** Same-title duplicates are a symptom. The real invariant is one Jira `external_id` → one Hamster `brief_id` or `task_id` across reconnects for the same `cloud_id + project_id`.
- **Testing Jira via synthetic resync only.** Use real Jira mutations plus the static webhook route first; resync is only the follow-up idempotency check.
- **Waiting for the 10-minute Confluence reconciliation tick during every test.** Enqueue a one-shot reconciliation job directly (see [confluence-queries.md](references/confluence-queries.md)) so the test is fast and deterministic. The natural tick is for soak / "did the schedule actually register" checks, not for verifying a specific mutation.
- **Asserting Confluence outbound by checking only the `document` row.** The bug is usually downstream: the page might not have the `hamster` label (V1 endpoint failed silently), might have wrong app properties (managed=false leaks the page out of scope), or might have the wrong parent (orphaned outside the root). Always fetch the page via REST and check label, properties, and `parentId`.
- **Asserting Confluence inbound by counting `sync_entity_mappings` rows alone.** Verify `sync_logs` shows a recent inbound row for the page id, that `external_version` advanced, and that the `document` body matches the converted storage format. Mapping rows can be stale from a prior reconciliation.
- **Treating Confluence out-of-scope pages as "broken" because they exist in Confluence but not in Hamster.** Out-of-scope is the intentional state for non-hamster, non-rooted, or other-space pages. The invariant is *no minting of mappings or documents for them*, not *they must sync*.
- **Forgetting to test the storage-format conversion both directions.** Recent fixes added lossless handling for layout, placeholder, emoticon, and status macros (`confluence.conversion.ts:269-299`). A single-direction title test masks regressions where, e.g., inbound preserves an `ac:status` macro but outbound emits a markdown blockquote that strips it.

## After Code Changes

Run these before live testing:

```bash
pnpm --filter sync typecheck
pnpm --filter sync lint
pnpm --filter sync test
pnpm --filter sync build

pnpm --filter hamster-ai typecheck
pnpm --filter hamster-ai test
pnpm --filter hamster-ai build
```

Runtime validation is not complete until you pair code-level checks with tmux, DB, and direct provider verification.

## If You Only Have Five Minutes

1. Capture tmux logs
2. Query active `sync_connections`
3. Query `sync_entity_mappings` for the failing external ID
4. Query the mapped local entity row
5. Fetch the provider token from `vault.decrypted_secrets`
6. Query the same remote object directly from Linear, Jira, or Confluence
7. Trigger resync (or, for Confluence, enqueue a one-shot reconciliation job) or the relevant PATCH/DELETE flow
8. Compare tmux claim against DB state and direct provider state immediately after
9. For Confluence specifically, also check `reauth_required`, `provider_config.config.root_page_id`, and `granted_scope_names` — these three columns explain ~80% of Confluence sync failures
