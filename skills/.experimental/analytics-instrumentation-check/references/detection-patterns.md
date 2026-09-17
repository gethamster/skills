# Detection Patterns

Read this when the surface grep is producing false positives, missing wrapper-helper instrumentation, or you need an AST-aware alternative for a tricky case.

## Pattern 1: Server actions (Next.js)

### Surface match

```bash
rg -nP "enhanceAction\(" apps/web/app
```

### Refinements

The bare grep matches a few false positives:

- **Type-only re-exports** of `enhanceAction` from `@kit/next/actions` — filter by importing file.
- **Helper factories** that wrap `enhanceAction` themselves (e.g. `createCRUDAction(...)` that internally calls `enhanceAction`) — these own the instrumentation OR delegate it to their callers. Treat the wrapper definition itself as one entry; treat each call to the wrapper as a separate entry only if the wrapper does not pre-instrument.

### Enclosing handler boundary

The action body is the `async (data, user) => { ... }` callback passed as the first argument. To find it from a match line, walk forward looking for the `async (` opener and forward to the matching `})`. AST-grep is more robust here:

```bash
sg --pattern 'enhanceAction(async ($PARAMS) => { $$$ }, $OPTIONS)' \
   --lang ts apps/web/app
```

The body of the match is what to scan for instrumentation.

## Pattern 2: BullMQ processors / consumers

### Surface match

```bash
rg -nP "@Processor\(\|class \w+Consumer\b\|extends WorkerHost\b" \
  apps/ai/src apps/sync/src apps/horde-v2/src
```

### Refinements

Three flavours coexist:

1. **NestJS BullMQ binding** — `@Processor('queue-name')` on a class. The `process` or `@Process()` method is the handler.
2. **`extends WorkerHost`** — the class' `process(job)` method handles all jobs.
3. **Hand-rolled `Worker`** — `new Worker('queue-name', handler, ...)`. The handler is the function passed as the second arg.

For each, the handler's body is what to scan. Hand-rolled workers are most likely to be uninstrumented because they bypass the framework conventions.

### Wrapper helpers

`apps/sync/src/monitoring/sync-analytics.ts#trackSyncEvent` and `apps/horde-v2/src/monitoring/telemetry.ts#trackHordeEvent` are typed wrappers. A consumer that imports either is instrumented even if `trackServerEvent` doesn't appear directly. Add to the search list in step 3 of the SKILL workflow.

## Pattern 3: Domain-entity mutations

### Surface match

```bash
rg -nP "\.from\('(briefs?\|tasks?\|blueprints?\|skills\|methods\|context_connections\|plans\|alignment_votes\|threads\|thread_items\|memberships\|invitations|accounts)'\)\s*\.\s*(insert\|update\|delete\|upsert)"
```

### Refinements

The pattern misses these cases:

- **Multi-line chains** — `client.from('briefs').select(...).update(...)` formatted across lines. `ripgrep --multiline` catches them.
- **Dynamic table names** — `client.from(tableName).insert(...)`. Skip these; instrumentation here is decided by the caller.
- **Repository methods** — anything in `packages/repositories/src/` is infrastructure. Filter out.
- **RPC calls** — `client.rpc('function_name', ...)`. These bypass the table grep entirely. To catch them, supplement with:

```bash
rg -nP "\.rpc\('(create_thread_for_brief\|add_thread_participant\|create_orchestration_child_thread\|update_brief_status\|set_alignment_vote)'" apps
```

  The list of write-RPCs is finite — pull it from `apps/web/supabase/schemas/` if uncertain.

### Mutation verb → event mapping

The action verb hints at the canonical event. The full table is in the SKILL.md workflow step 4. When in doubt:

```bash
# Is there a typed event for this entity?
rg -nP "^\s*'(.*)':\s*(.*Properties);" \
  packages/analytics/src/event-types.ts \
  | grep -i <entity-name>
```

## Pattern 4: Direct admin client usage

### Surface match

```bash
rg -n "getSupabaseServerAdminClient\(\)" apps packages
```

### Why audit

The admin client bypasses RLS. Mutations through it are higher-risk and almost always state-changing. If the surrounding code does not fire an event, that's a very strong "missing" signal — the action is important enough to bypass RLS but not important enough to track? That's a bug.

Note: admin-client reads (e.g. system enrichment queries) are fine without events. Only the writes (insert/update/delete/upsert/rpc) qualify.

## Wrapper helper allowlist

The skill should accept these as instrumentation evidence in step 3, in addition to the bare `trackServerEvent` / `analytics.trackEvent`:

| Wrapper | Where it lives | What it fires |
| --- | --- | --- |
| `trackHordeEvent` | `apps/horde-v2/src/monitoring/telemetry.ts` | Horde delivery / sandbox events |
| `trackConnectionEvent` | `apps/ai/src/modules/context-connections/context-connections.service.ts` | Integration Connected/Disconnected/Resync* events |
| `trackFlushEvent` | `apps/ai/src/modules/coding-agent/services/job-log-flush.service.ts` | System Job Logs Flush* events |
| `trackRelayEvent` | `apps/ai/src/modules/coding-agent/services/job-log-relay.service.ts` | System Job Log Relay* events |
| `trackSyncEvent` | `apps/sync/src/monitoring/sync-analytics.ts` | Sync Run Started/Completed/Failed, Sync Webhook Received |
| `tracker.trackBriefCreated` etc. | `packages/analytics/src/tracking-utils.ts` (`AnalyticsTracker`) | Per-event typed methods |

If a future PR introduces a new wrapper, add it to this list (and the SKILL.md grep recipe).

## False-positive filters

Skip the following patterns even when the surface grep matches:

| Filter | Reason |
| --- | --- |
| File path contains `/repositories/` or `*.repository.ts` | Repositories are infrastructure; instrumentation lives at the caller. |
| File path contains `/schemas/` or `/dto/` | Validation schemas; not state-changing. |
| File path matches `*.spec.ts`, `*.test.ts`, `__tests__/` | Tests; should not fire production events. |
| The mutation is inside a `migration` script in `apps/web/supabase/migrations/` | Schema migrations don't fire product events. |
| The mutation is inside `apps/web/supabase/scripts/` | Backfill scripts use the audit-log mechanism instead. |
| The function name starts with `_internal`, `audit`, `dedupe`, `repair`, `reconcile` | Convention for internal-only operations. Verify by reading the comment block. |

## False-negative cases

Patterns the surface grep WILL miss. Mention these to the user when handing off the report:

1. **Indirect mutations through services** — a server action that calls `BriefsService.create()` won't show a `.from('briefs').insert()` in the action file. The audit must follow the call chain. When in doubt, trace it with codebase-memory-mcp (`trace_path` for callers/callees, `get_code_snippet` for the source) and audit the inner method separately.
2. **Stored-procedure writes** — RPCs that mutate tables don't match the table-pattern grep. Catch them with the RPC-name allowlist above.
3. **Implicit mutations through trigger-only updates** — e.g. updating `briefs.updated_at` via a trigger when some other column changes. These shouldn't fire events of their own; the originating mutation should.
4. **Bulk mutations behind a single helper** — `bulkUpdateTaskStatus(taskIds, status)` updates many tasks but should fire one event (or N events, depending on intent). Ask the reviewer.

## Ambiguous-case heuristics

When a state-changing action has *some* analytics call but it doesn't obviously match the action verb:

- **Same handler fires multiple events** — usually fine. Multi-step server actions legitimately fire several events (e.g. `Brief Created` + `First Brief Created` for a milestone). Check that the "primary" event for the action is among them.
- **Event fires conditionally** (`if (isFirstBrief) trackServerEvent(...)`) — flag as ❓ if the primary event is also conditional. The catalog event for the always-true case must always fire.
- **Event fires AFTER a `try`/`catch` rethrows** — the event won't fire on failure. That's correct *if* the event semantically requires success (e.g. `Brief Created` should not fire if the insert failed). Flag if the action also fires no failure-side event when failure is observable downstream.