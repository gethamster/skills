---
name: analytics-instrumentation-check
description: "Audit a feature, branch, or PR diff for analytics instrumentation coverage. Verifies that every state-changing action (server action, BullMQ processor, domain entity create/update/delete, paywall/billing transition) fires a typed `trackServerEvent` or `tracker.track*` call. Use proactively before opening a PR, during code review, or whenever a new feature is added under apps/web/app, apps/ai/src/modules, or apps/sync/src/modules. The CI gate (typed event names) prevents untyped events from shipping but does NOT prevent uninstrumented actions from shipping — this skill closes that gap. Trigger phrases: 'is this tracked', 'audit instrumentation', 'check analytics coverage', 'are we tracking X', 'instrumentation review'."
version: "1.0.0"
---

# Analytics Instrumentation Check

## What this skill is for

The CI gate enforces that any event passed to `trackServerEvent` is in the typed catalog (`packages/analytics/src/event-types.ts`). It does NOT enforce that an event fires when a state-changing action runs. A developer can ship a new server action that mutates the database and fires no event, and `pnpm typecheck` will pass.

This skill closes the coverage gap. Given a diff, branch, or directory, it:

1. Detects every **state-changing action** introduced or touched.
2. For each action, looks for a `trackServerEvent` / `tracker.track*` / `analytics.trackEvent` call in the same code path.
3. Classifies each action as **instrumented**, **missing**, **ambiguous**, or **intentionally untracked**.
4. Produces a reviewer-ready report so the missing instrumentation is fixed before the feature ships.

The brief that introduced the CI gate explicitly framed this as the manual half of enforcement. The gate ensures shipped events are typed; this skill ensures shipped actions are tracked.

## When to apply

Apply this skill when:

- A user asks for an instrumentation audit before a PR ("is this tracked?", "do we fire an event for X?", "audit analytics coverage on this branch").
- A user is reviewing a PR that touches `apps/web/app/**/_lib/server/`, `apps/ai/src/modules/**`, `apps/sync/src/modules/**`, or `apps/horde-v2/src/delivery/**`.
- A new domain entity (brief, task, blueprint, skill, method, connection, plan, alignment vote) is being created or mutated by code introduced in the diff.
- The user mentions a feature being "ready to ship" or "ready for review" and you can see uninstrumented mutation paths.

## When NOT to apply

- Read-only queries, repository getters, list endpoints — these are never expected to fire events.
- Changes to existing **typed** events (event-name renames, property-shape edits) — that work belongs in the catalog, not in instrumentation coverage.
- Webhook-receipt code that only acks (`200 OK`) without acting — instrumentation belongs in the consumer that processes the queued job, not the controller that enqueues.
- Unit-test files, fixtures, mocks (`*.spec.ts`, `*.test.ts`, `__tests__/**`).
- Backfill scripts in `apps/web/supabase/scripts/` — those are one-off runs and have their own audit-log mechanism via `backfill-script-creator`.

If the user's request fits one of these, say so explicitly and stop.

## Required inputs

The skill needs ONE of:

1. **A diff range** — `origin/dev...HEAD`, `HEAD~3...HEAD`, or a path to a saved diff (`/tmp/foo-diff.txt`). Most common case.
2. **A PR number** — fetched via `gh pr diff <number>`.
3. **A directory or file list** — for example `apps/web/app/home/[account]/briefs/_lib/server/` after a feature lands but before instrumentation is verified.

If none is provided, ask the user which scope to audit. Do not guess.

## Workflow

### 1. Bound the scope

Pick the input form (diff / PR / paths) and produce a list of changed files. Exclude:

- `*.spec.ts`, `*.test.ts`, files under `__tests__/`
- `*.md`, `*.json` (except for analytics dashboard configs in `apps/ai/scripts/`, see Pitfalls)
- `packages/analytics/**` itself (we're auditing consumers, not the library)
- `*.sql`, `*.config.ts`, `*.config.mjs`

For a diff, get the file list:

```bash
git diff --name-only origin/dev...HEAD \
  | grep -vE '\.(spec|test)\.ts$|^__tests__/|\.(md|json|sql)$|^packages/analytics/'
```

### 2. Load the live event catalog

Before scanning for instrumentation, extract the authoritative event name list from `event-types.ts` so the search patterns are never stale:

```bash
# Pull every quoted string from EventPropertiesMap — one event name per line
grep -oP "(?<=')\b[A-Z][^']+(?=')\s*:" \
  packages/analytics/src/event-types.ts \
  | sed "s/[[:space:]]*://"
```

This gives you the full catalog as it exists right now (e.g. `Brief Created`, `Task Completed`, `Integration Connected`, …). Use it as the `<EVENTS>` list in the grep below.

Once you have the list, build a single-pass ripgrep that scans every `trackServerEvent` call site and checks whether the literal string matches a catalog entry:

```bash
# Replace <EVENTS> with the pipe-joined list from the command above,
# e.g. "Brief Created|Task Completed|Integration Connected|..."
rg -n "trackServerEvent\s*\(\s*['\"](<EVENTS>)['\"]" \
  apps/ packages/ \
  --type ts \
  --glob '!*.spec.ts' --glob '!*.test.ts'
```

This tells you, for every call site in scope, which catalog event it fires. Cross-referencing this against the state-changing actions you find in step 3 is how you identify gaps.

> If `grep` is too noisy on `EventPropertiesMap`, you can alternatively extract names with:
> 
> ```bash
> grep -oP "(?<=: )[A-Z][^:']+" packages/analytics/src/event-types.ts | sort -u
> ```

### 4. Detect state-changing actions

Run each pattern below across the scoped files. The four patterns map to the brief's definition of "state-changing action":

| # | Pattern | Detection (ripgrep) | Where it lives |
| --- | --- | --- | --- |
| 1 | Server action (Next.js) | `rg -n "enhanceAction\(" <files>` | `apps/web/app/**/_lib/server/*-actions.ts`, `apps/web/app/**/_lib/server/server-actions.ts` |
| 2 | BullMQ processor / consumer | `rg -n "@Processor\(\ | extends WorkerHost\ |
| 3 | Domain-entity mutation | `rg -nP "\.from\('(briefs?\ | tasks?\ |
| 4 | Direct write through an admin client | `rg -n "getSupabaseServerAdminClient\(\)" <files>` (then narrow to the surrounding mutation) | Rare; deserves extra scrutiny |

For each match, record:

- **File path + line number**
- **Enclosing function/handler name** (`enhanceAction(...)` factory, NestJS method, etc.)
- **Mutation table** (for pattern 3) or **queue name** (for pattern 2)
- **Action verb** (insert / update / delete / upsert) — this hints at the canonical event

### 5. Find the instrumentation, if any

For each detected action, search the same enclosing function/handler for a tracking call. Search ~50 lines before and after the mutation, not just the line itself — analytics calls are often after the mutation on the success path or in a `try`/`catch` block:

```bash
# Adjust line range to enclosing function boundaries
rg -n "trackServerEvent\(\|tracker\.track\|analytics\.trackEvent\(\|trackHordeEvent\(\|trackConnectionEvent\(\|trackFlushEvent\(\|trackRelayEvent\(\|trackSyncEvent\(" <file>
```

If a call is found, capture:

- **Event name** passed (string literal — the gate guarantees it's typed)
- **Distance from the mutation** (lines)
- **Whether it's on the success path** (after `if (error) throw`) or unconditional

### 6. Match action → expected event

Use the canonical mapping below to decide whether the fired event matches the action. If multiple events would be reasonable, the call is **instrumented** as long as one fits.

| Action verb | Table / entity | Expected event(s) |
| --- | --- | --- |
| insert | `briefs` | `Brief Created`, `Brief Created From PRD`, `First Brief Created` |
| update | `briefs` | `Brief Updated`, `Brief Status Changed` |
| delete | `briefs` | `Brief Deleted` |
| insert | `tasks` | `Task Created`, `First Task Created`, `Subtask Created` |
| update | `tasks` | `Task Updated`, `Task Status Changed`, `Task Completed`, `Task Assigned`, `Task Assigned to Coding Agent` |
| delete | `tasks` | `Task Deleted` |
| insert | `blueprints` table or `document` (type=blueprint) | `Blueprint Created`, `Blueprint Imported`, `Blueprint Duplicated` |
| update | same | `Blueprint Updated` |
| delete | same | `Blueprint Deleted` |
| insert | `skills` | `Skill Imported`, `Skill Imported From Repo`, `Skill Uploaded` |
| update | same | `Skill Activated`, `Skill Deactivated` |
| delete | same | `Skill Deleted` |
| insert | `methods` table or `document` (type=method) | `Method Created` |
| update | same | `Method Updated` |
| delete | same | `Method Deleted` |
| insert | `context_connections` | `OAuth Started`, `Integration Connected`, `Integration Reauthorized` |
| update | same (status fields) | `Integration Disconnected`, `Integration Resync Triggered` |
| delete | same | `Integration Disconnected` |
| insert | `alignment_votes` | `Alignment Vote Submitted`, `First Alignment Vote` |
| insert / update | `subscriptions` | `Subscription Created`, `Subscription Updated`, `Subscription Deleted` |
| BullMQ processor | sync queue | `Sync Run Started`, `Sync Run Completed`, `Sync Run Failed` |
| BullMQ processor | horde delivery | `Horde Delivery Started`, `Horde Delivery Completed`, `Horde Delivery Failed` |

The full catalog is in `packages/analytics/src/event-types.ts`. You already extracted it in step 2 — use that list rather than the static table when the entity name isn't listed here.

### 7. Classify each action

Use four categories:

- ✅ **Instrumented** — a typed event fires on the success path of the action.
- ⚠️ **Missing** — no event fires anywhere in the enclosing handler. Action verb + table point at a canonical event the team would expect.
- ❓ **Ambiguous** — an event fires but doesn't match the action verb (e.g., a `Brief Updated` event when the code is doing a delete), OR the mutation is wrapped behind a service method whose instrumentation we can't see from this diff alone, OR the action is a multi-step transaction where one event covers several mutations.
- 🔒 **Intentionally untracked** — the mutation is internal (audit log, system retry, idempotency-key write, dedup pass) and a dashboard event would be noise. Flag with a one-line justification so the reviewer can override.

### 8. Cross-check downstream

For each ✅ instrumented action, also verify:

- The event name is in `EventPropertiesMap` (the gate already enforces this, but double-check in case of a `Parameters<typeof trackServerEvent<...>>[1]` cast bypassing the type system at the call site).
- The call is wrapped against failure (`.catch(() => …)` or `try/catch`) so analytics never blocks business logic.
- `account_id` is in the property bag (or auto-injected from ALS).

For each ⚠️ missing action, suggest the canonical event from the table in step 4 plus the minimal property shape to fire.

### 9. Produce the report

Output a markdown table the reviewer can paste into a PR comment. Format:

```
### Analytics Instrumentation Check — `feature/<branch>`

**Scope:** <N> files changed, <M> state-changing actions detected.

| Status | File:Line | Action | Expected event | Found | Notes |
|--------|-----------|--------|----------------|-------|-------|
| ✅ | apps/web/app/.../briefs.actions.ts:147 | insert briefs | Brief Created | `Brief Created` | success-path call |
| ⚠️ | apps/web/app/.../tasks.actions.ts:88 | update tasks (status→done) | Task Completed | none | suggest `Task Completed` |
| ❓ | apps/ai/src/modules/.../service.ts:215 | insert briefs | Brief Created | none in this file | check `BriefsService` repository call site |
| 🔒 | apps/ai/src/modules/.../audit.ts:42 | insert audit_logs | — | n/a | internal audit table, no dashboard event needed |

**Summary:** <X> instrumented · <Y> missing · <Z> ambiguous · <W> intentionally untracked.
**Verdict:** <ship / fix-the-Y-missing-actions-first / spot-check-the-Z-ambiguous>.
```

If everything is green, say so explicitly with one line per action so the reviewer doesn't have to re-derive coverage.

## Detection patterns reference

The full grep recipes, including how to handle wrapper functions and helper services, live in [references/detection-patterns.md](references/detection-patterns.md). Read it when:

- A pattern is matching too aggressively (e.g., flagging repository getters).
- A custom helper wrapper (`updateBriefStatus(...)` that internally calls `trackServerEvent`) is hiding instrumentation from the surface scan.
- The diff touches multi-tenant code where the action verb is conditional on a flag.

## Pitfalls (catalogued from real bugs)

1. **Repository methods are not state-changing actions for this skill.** A `BriefsRepository.update(...)` method should NOT be flagged. The action is the *caller* — the server action or service method that decides to update. Repositories are infrastructure; instrumentation lives at the boundary that owns the business decision.

2. **A wrapper helper can own the instrumentation.** `apps/ai/src/modules/context-connections/context-connections.service.ts` has `trackConnectionEvent(...)` that fans out to typed connection events. If a service uses such a wrapper, the action is instrumented even though the surface grep won't show `trackServerEvent` directly. Add wrapper names to the search list:

```
trackServerEvent | tracker.track | analytics.trackEvent | trackHordeEvent
   | trackConnectionEvent | trackFlushEvent | trackRelayEvent | trackSyncEvent
```

3. **One event can cover multiple mutations in a transaction.** `createBriefAndStartConversationAction` may insert into `briefs`, `documents`, and `thread_items` in one server action and fire one `Brief Created` event. That's correct — don't flag the documents/thread_items writes as missing. The action's *intent* is creating a brief; the other writes are mechanism.

4. **Sync engine writes are queue-internal.** Inbound webhook receipt only fires `Sync Webhook Received`; the actual entity mutations happen in the inbound consumer which fires `Sync Run Started/Completed/Failed`. Don't double-count by demanding events at both the controller and the consumer for the same logical run.

5. **Horde delivery has a different envelope.** `trackHordeEvent` auto-injects user_id, account_id, brief_id, sandbox_id from ALS + active span. Don't flag a Horde call site as missing `account_id` in the property bag — the helper adds it.

6. **`enhanceAction` does NOT auto-instrument.** It validates input and runs auth, but does not fire any analytics event. Every `enhanceAction(...)` is a candidate state-changing action to audit.

7. **Mixpanel dashboard configs reference event names.** `apps/ai/scripts/generate-mixpanel-config.ts` and `apps/ai/scripts/mixpanel-dashboard-config.json` hold dashboard funnel definitions keyed on event names. If the diff renames or drops an event, these configs must be updated in the same PR — otherwise the dashboard breaks silently. Include them in step 1's file scope when the diff modifies `event-types.ts` or removes a `trackServerEvent` call.

8. **Server actions can delegate to a NestJS service via fetch / `apps/ai`.** A `apps/web` server action that POSTs to `apps/ai` and lets the API instrument the event is correctly instrumented — but the proof lives in the API, not the diff. Flag as ❓ ambiguous and ask the user to confirm the API side fires the event.

9. **`enhanceAction` with `auth: false` and a `schema` only** — these are sometimes idempotency receivers (e.g., a metric ingest endpoint). They aren't always state-changing in the catalog sense. Inspect the body before flagging.

10. **The gate probe in `server-analytics.test.ts` deliberately fires `'Bogus Event'`** to keep the typed-overload-removal honest. That's not a missing instrumentation — it's the test of the gate itself.

## Anti-patterns

- **Don't auto-fix.** This skill produces a report. Adding events without a human deciding the canonical name is how the catalog accumulates noise (see `Anonymous Event` / `Orphan Event` in the data-platform-progress decision log).
- **Don't flag every mutation.** Repositories, audit logs, idempotency-key writes, dedup passes are legitimately untracked. Use the 🔒 category liberally — false positives erode reviewer trust faster than false negatives.
- **Don't suggest events that aren't in the catalog.** If the canonical event would be new, say so and point the reviewer at `event-types.ts` to add it. Don't invent names.
- **Don't run this skill on `dev` or `main`.** It's a per-feature audit. Running it across the whole repo produces a report no one will read.
- **Don't substitute for the gate.** This skill is coverage; the gate is type safety. Both must pass independently.

## Output: what to give the user

After the audit, deliver:

1. **The classification table** (step 7 format) so the reviewer can scan in 30 seconds.
2. **A one-line verdict** — ship, fix the ⚠️ missing actions first, or spot-check the ❓ ambiguous ones.
3. **For each ⚠️ missing action: a copy-pasteable instrumentation snippet** with the canonical event name and the minimal property shape from `event-types.ts`. Don't write the code into the file — give the reviewer something to commit deliberately.
4. **For each ❓ ambiguous action: the specific question** the reviewer needs to answer (e.g. "Does `BriefsService.archive()` instrument `Brief Status Changed`? Open the file at line N and check.").

## What this skill is NOT

- A linter — there is no auto-fix, no machine-readable output, no CI integration. It runs in conversation.
- A replacement for the catalog — adding new typed events still goes through `packages/analytics/src/event-types.ts` per `packages/analytics/CLAUDE.md`.
- A coverage threshold gate — the goal is informed review, not 100% mechanical coverage. The 🔒 category exists precisely because not every mutation deserves an event.

## References

| File | When to read |
| --- | --- |
| [references/detection-patterns.md](references/detection-patterns.md) | When the surface grep is producing false positives or missing wrapper-helper instrumentation. Contains the full ripgrep recipes plus AST-grep alternatives for tricky cases. |
| `packages/analytics/src/event-types.ts` | The source of truth for valid event names. Always grep this before suggesting a canonical event. |
| `packages/analytics/CLAUDE.md` | Adding a new event to the catalog. Step-by-step "if you hit a type wall" guidance. |
| `docs/architecture/data-platform-summary.md` | Why this skill exists. Background on the gate, the brief, and what "we'll instrument later" was costing the team. |
