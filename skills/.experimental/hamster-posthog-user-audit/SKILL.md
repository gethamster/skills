---
name: hamster-posthog-user-audit
description: "Per-user PostHog event audit for Hamster Studio. Use when the user asks to \\\"review my events in posthog\\\", \\\"audit attribution for <user>\\\", \\\"tell me the story of what user <X> did\\\", \\\"verify $ai_generation events for <user>\\\", or \\\"did event Y fire when I clicked Z\\\". Two modes — guided (ask the user to perform a sequence of actions, then audit that exact window) and free (audit whatever happened in a recent window and reconstruct the story). Sister to `hamster-posthog-dashboards`; this one is single-user-scoped."
version: "1.0.0"
---

# hamster-posthog-user-audit

When the question is **"what did this one user do, and were the events populated correctly?"**, use this skill. For dashboard-level analysis (multiple users, aggregates), use `hamster-posthog-dashboards` instead.

## When to invoke

- "Review LLM events for `<email>` in `<env>`"
- "Tell me the story of what I did" / "what events did I fire?"
- "Audit `<user>`'s events"
- "Verify `$ai_generation` attribution for `<user>` over `<window>`"
- "I'm about to do X — watch my events and tell me if they're right"
- "Did `<EventName>` fire when I clicked `<Y>`?"

## When NOT to invoke

- Question is about a dashboard or aggregate metric → `hamster-posthog-dashboards`.
- User wants to *add* event tracking → `hamster-analytics`.
- User wants raw event data dumped to a file with no analysis → call `posthog_client.fetch_events()` directly.

## Two modes

The skill operates in one of two modes. **Confirm the mode with the user if it's ambiguous.**

### Guided mode

Use when the user wants a controlled experiment — they will perform a specific sequence of actions and want you to verify that the right events fire with the right properties.

1. **Define the action plan.** Either accept the user's plan or propose one (e.g. "1. sign in, 2. create a brief, 3. click Generate Plan, 4. send a chat message in that brief, 5. wait 2 minutes for background jobs, 6. tell me when done").
2. **Note the start timestamp** (UTC, second precision) before the user begins.
3. **Tell the user to proceed and to confirm when complete.** Don't try to drive the browser; this is a manual flow.
4. **Wait for confirmation.** Don't poll or pre-fetch — there's a 5–30s ingestion lag plus background-job lag (BullMQ jobs can run 1–10+ minutes after the user action).
5. **Run the audit** against `[start_time, now]`. Use Q1–Q8 below.
6. **Compare what fired against what should have fired** given the action plan. Flag every gap.
7. **Verdict**: pass / fail / partial. List the specific events that fired correctly and the ones that didn't, with property-level details.

### Free mode

Use when the user already did stuff and wants a retrospective.

1. **Default window: last 7 days.** Adjust to match the user's stated activity if they say "last hour" / "yesterday" / etc.
2. Run Q1–Q8.
3. **Reconstruct the story** chronologically, broken into sessions.
4. **Verify properties** for each event class.
5. **Flag findings** as F1, F2, … with action items.

### Mode-decision shortcuts

| User says | Mode |
| --- | --- |
| "review my events", "what did I do", "tell me the story" | free |
| "I just did X", "I'm about to test", "watch what fires" | guided |
| "audit `<user>`" with no other context | free |
| "verify event X fires correctly when I do Y" | guided |

## Inputs the user MUST provide

| Input | Required | Default |
| --- | --- | --- |
| Email (or distinct_id) | yes | — |
| Env (`prod`, `tux`, `dev`, `local`) | yes | — |
| Window | no (free) / no (guided — defined by start_time→now) | 7d |
| Focus (`LLM only`, `product only`, `billing`, `all`) | no | `all` |

If any required input is missing, ask via `AskUserQuestion`.

## Credentials & environment

PostHog query API hits `POST /api/projects/<id>/query` with `{"query": {"kind": "HogQLQuery", "query": "..."}}`.

| Var | Value | Where |
| --- | --- | --- |
| `POSTHOG_API_KEY` | `phx_…` personal API key | `packages/glass-box/.env.<env>` |
| `POSTHOG_PROJECT_ID` | env-specific | see below |
| Host | `https://us.posthog.com` | hard-coded |

Project IDs (named `POSTHOG_PROD_PROJECT_ID` in the env files but means "the prod-side project for that env"):

| Env | Project ID |
| --- | --- |
| prod | `371628` |
| tux | `371881` |

Use the `POSTHOG_API_KEY`, **not** `POSTHOG_DASHBOARD_API_KEY` — the dashboard key lacks `events:read`.

## How to run queries

The simplest path — raw `requests`, no glass-box init (which pulls Supabase and slows things down):

```bash
uv run --no-project --with requests python /tmp/posthog_query.py
```

Inside the script:

```python
import json
from urllib import request
HOST = 'https://us.posthog.com'
PROJ = '<env-specific>'  # 371628 prod, 371881 tux
KEY = '<phx_…>'

def hq(q):
    body = json.dumps({'query': {'kind': 'HogQLQuery', 'query': q}}).encode()
    req = request.Request(f'{HOST}/api/projects/{PROJ}/query', data=body,
        headers={'Authorization': f'Bearer {KEY}', 'Content-Type': 'application/json'},
        method='POST')
    return json.loads(request.urlopen(req, timeout=60).read())
```

For a one-off use of `PostHogClient.query(hogql)` from `packages/glass-box/replay/utils/posthog_client.py`, the import side-effects pull in Supabase. If that's already configured locally, fine; otherwise prefer the raw approach.

## HogQL pitfalls (memorise these)

1. **`$`-prefixed keys need bracket syntax.** `properties.$ai_trace_id` returns NULL silently. Use `properties['$ai_trace_id']`.
2. **`OPERATION_PROPERTY_NONE` is the literal string `'none'`.** Filter as missing in property-presence audits — `prop NOT IN ('', 'none')`.
3. **Shell escaping breaks complex HogQL.** Write the query to a temp `.py` file and run that — don't try to inline through `python -c "…"` with nested quotes.
4. **A person can have multiple distinct_ids** (anonymous browser ID + Supabase user.id). Use `person.properties.email = '<email>'` instead of `distinct_id = '<id>'` so you catch both.

## The query playbook (Q1–Q8)

### Q1 — Person + distinct_ids

```sql
SELECT person.id, person.properties.email, person.properties.name,
       max(timestamp) as last_seen, count() as evt_count
FROM events
WHERE person.properties.email = '<email>'
  AND timestamp > <start>
GROUP BY person.id, person.properties.email, person.properties.name
LIMIT 5
```

```sql
SELECT distinct_id, count() as n,
       min(timestamp) as first_seen, max(timestamp) as last_seen
FROM events
WHERE person.properties.email = '<email>'
  AND timestamp > <start>
GROUP BY distinct_id ORDER BY n DESC
```

Expect 1–2: the Supabase user.id (highest count) and a UUIDv7 anonymous browser ID from before identify.

### Q2 — Event-name overview

```sql
SELECT event, count() as n, min(timestamp) as first, max(timestamp) as last
FROM events
WHERE person.properties.email = '<email>'
  AND timestamp > <start>
GROUP BY event ORDER BY n DESC
```

Skim for:

- Typed product events (`Brief Created`, `Plan Generation Started`, etc.)
- LLM events (`$ai_generation`, `$ai_trace`, `$ai_span`)
- Drift events (`User Signed In` vs `User Logged In`, `checkout.started`, `user.signedUp`)
- Infra events (`$identify`, `$pageview`, `$autocapture` — usually skip from the story but useful for session boundaries)

### Q3 — `$ai_generation` attribution audit

```sql
SELECT
  count() as total,
  countIf(notEmpty(toString(properties['$ai_span_name']))) as has_span_name,
  countIf(notEmpty(toString(properties['$ai_trace_id']))) as has_trace,
  countIf(properties['service.name'] IS NOT NULL) as has_service_name,
  countIf(properties.account_id IS NOT NULL AND properties.account_id NOT IN ('', 'none')) as has_account,
  countIf(properties.prompt_key IS NOT NULL AND properties.prompt_key NOT IN ('', 'none')) as has_prompt_key,
  countIf(properties.step_id IS NOT NULL AND properties.step_id NOT IN ('', 'none')) as has_step_id,
  countIf(properties.agent_name IS NOT NULL AND properties.agent_name NOT IN ('', 'none')) as has_agent_name,
  countIf(distinct_id = toString(properties['$ai_trace_id'])) as anonymous_n
FROM events
WHERE person.properties.email = '<email>'
  AND event = '$ai_generation'
  AND timestamp > <start>
```

Acceptance bar (post-PR-#2186):

| Metric | Target |
| --- | --- |
| `anonymous_n / total` | ≤ 5% (was 96% pre-fix prod-wide) |
| `has_account / total` | ≥ 95% |
| `has_trace / total` | 100% |
| `has_span_name`, `has_service_name` | open instrumentation gaps — report whatever you see |
| `has_prompt_key` | gradually improving; B2 brief in flight |
| `has_step_id`, `has_agent_name` | gradually improving; B3 brief in flight |

### Q4 — workflow_type roots + cost

```sql
SELECT
  toString(properties.workflow_type) as wt,
  count() as n,
  round(sum(toFloat(coalesce(toString(properties['$ai_total_cost_usd']), '0'))), 4) as cost
FROM events
WHERE person.properties.email = '<email>'
  AND event = '$ai_generation'
  AND timestamp > <start>
GROUP BY wt ORDER BY n DESC
```

Map roots through the glossary at `packages/glass-box/data/posthog-reports/llm-cost/003-workflow-type-glossary.md`:

| Tier | Examples | User-driven? |
| --- | --- | --- |
| A — HTTP-rooted | `chat-*`, `plan_generation`, `subtask_generation` | yes (request) |
| B — consumer-rooted | `chat-processing-*`, `flow:*`, `uploaded-document-processing` | yes (job) |
| C — indirectly user-driven | `*_generation` (title, version_metadata), `meeting-summary` | yes (deferred) |
| D — system | `context-graph-inference`, `routine-execution-*` | no |

### Q5 — sessions

```sql
SELECT
  toString(properties['$session_id']) as sid,
  count() as n,
  countIf(event = '$ai_generation') as ai_gen,
  countIf(event = 'Chat Message Sent') as chat_msgs,
  countIf(event = 'Brief Created') as briefs,
  min(timestamp) as start_ts, max(timestamp) as end_ts,
  round(sum(toFloat(coalesce(toString(properties['$ai_total_cost_usd']), '0'))), 4) as total_cost
FROM events
WHERE person.properties.email = '<email>'
  AND timestamp > <start>
  AND properties['$session_id'] IS NOT NULL
GROUP BY sid ORDER BY start_ts ASC
```

BullMQ-fired LLM events have NULL `$session_id` until `_sessionId` is propagated end-to-end. Sum-of-sessions ai_gen count will be smaller than the global total — that's expected.

### Q6 — chronological story

```sql
SELECT formatDateTime(timestamp, '%Y-%m-%d %H:%i:%S') as ts,
       event,
       toString(properties.workflow_type) as wt,
       toString(properties['$ai_total_cost_usd']) as cost,
       toString(properties['$ai_model']) as model
FROM events
WHERE person.properties.email = '<email>'
  AND timestamp > <start>
  AND event NOT IN ('$autocapture', '$pageview', '$pageleave', '$set', '$identify',
                    '$groupidentify', '$web_vitals', '$conversations_loaded')
ORDER BY timestamp ASC
LIMIT 200
```

Use `%i` for minute (ClickHouse) — `%M` renders as month name in some PostHog versions.

### Q7 — Trace continuity for one chat thread

This is the cheapest test for F7-class regressions. Pick a thread_id from Q6's output:

```sql
SELECT toString(properties['$ai_trace_id']) as tid, event,
       toString(properties.workflow_type) as wt, timestamp
FROM events
WHERE person.properties.email = '<email>'
  AND timestamp > <start>
  AND properties.thread_id = '<thread_uuid>'
  AND event IN ('Chat Message Sent', '$ai_generation', 'AI Response Received',
                'AI Tool Called', 'Context Retrieved')
ORDER BY timestamp ASC
```

**Pass** = `Chat Message Sent`, all `chat-processing > core_chat > …` events, AND `chat-* > title_generation` share **one** `$ai_trace_id`.

**Fail** = ≥2 distinct trace_ids for one thread → F7 (BullMQ trace-context propagation broken; PR #2186 territory). Pre-fix expectation in prod was 3 disjoint trace_ids per chat send.

### Q8 — Property dump per event class

For each typed product event the user fired (from Q2), pull one example:

```sql
SELECT properties FROM events
WHERE person.properties.email = '<email>'
  AND event = '<EventName>'
  AND timestamp > <start>
ORDER BY timestamp DESC LIMIT 1
```

Decode the JSON, filter to non-`$`-prefixed keys, and check the row matches the property-quality matrix below.

## Property-quality matrix

For every typed product event, these MUST be present (non-empty, non-`'none'`):

| Event class | Required app keys | Optional |
| --- | --- | --- |
| `*Created`/`*Updated`/`*Deleted` | `account_id`, `user_id`, `<entity>_id` | feature-specific |
| `Chat Message Sent` | `account_id`, `user_id`, `thread_id`, `message_length` | `has_document_context` |
| `AI Tool Called` | `account_id`, `user_id`, `tool_name`, `workflow_type`, `success` | `thread_id`, model fields |
| `AI Response Received` | `account_id`, `user_id`, `thread_id`, `response_time_ms`, `workflow_type` | `brief_id`, `tool_call_count` |
| `Context Retrieved` | `account_id`, `user_id`, `query_length`, `results_count`, `retrieval_time_ms` | `source_types` |
| `Plan Generation Started` | `account_id`, `user_id`, `brief_id`, `generation_type` | — |
| `User Signed In` | `user_id`, `email` | (no `account_id` — pre-team-selection) |
| `Account Switched` | `account_id`, `account_slug`, `account_type`, `new_account_id`, `team_role` | `from_account_id` |
| `Team Created` | `account_id`, `account_name`, `account_type`, `created_via`, `user_id` | — |
| `Feedback Submitted` | `account_id`, `user_id`, `source_url` | — |
| `Integration Connected` | `account_id`, `user_id`, `connection_id`, `integration_type` | `workspace_id`, `workspace_name` |
| `Checkout Started` (typed) | `account_id`, `user_id`, `plan_id`, `product_id` | — |
| `Brief Created` | `account_id`, `user_id`, `brief_id`, `has_initial_content` | `content_length` |
| `Blueprint Created` | `account_id`, `user_id`, `blueprint_id`, `creation_method` | `blueprint_type` |

Source of truth for the property shapes: `packages/analytics/src/event-types.ts` (find the `*Properties` interface for each event name).

For every `$ai_generation`:

- `$ai_trace_id` present (always — set by exporter)
- `distinct_id` resolves to the Supabase user.id (NOT `$ai_trace_id`) for user-driven flows
- `account_id` populated for B-tier and most C-tier flows
- `prompt_key` populated for primary agent calls (not Input Validator, not system jobs)
- `workflow_type` populated and non-`'none'`
- `$ai_model`, `$ai_total_cost_usd`, `$ai_input_tokens`, `$ai_output_tokens`, `$ai_latency` populated

## Output: the report

Write to `packages/glass-box/data/posthog-reports/tracking-quality/<NNN>-<slug>.md` (next free number — 001 is the per-user audit baseline; subsequent reports are follow-ups or guided-mode runs).

Frontmatter:

```yaml
---
dashboard_id: n/a (single-user audit) | <id> if a dashboard backs the report
env: prod | tux | dev | local
spec_section: posthog-insights-scope.md §2 + posthog-events-inventory.md
parent_report: <prev report path or 'none'>
supersedes: none
created: YYYY-MM-DD
status: action-items-issued
mode: guided | free
subject: <email or user_id>
window: <ISO start> → <ISO end>
---
```

Sections in order:

1. **TL;DR** — 2–3 sentences. The one conclusion.
2. **Headline numbers** — table from Q3 + cost from Q4 + session count from Q5.
3. **The story** — chronological narrative from Q6, broken into sessions. For guided mode: the action plan + observed events side-by-side.
4. **Findings** — numbered F1, F2, … each with: what the data shows / why it matters / confidence / source query.
5. **Hypotheses** — for medium/low-confidence findings.
6. **Actions** — prioritised P0/P1/P2: code changes, inventory/doc updates, follow-up investigations.
7. **Decisions taken** — what this audit settled.
8. **Open questions** — what needs more data.
9. **Children** — list of reports spawned from this one.

After writing the report:

- Add a row to `packages/glass-box/data/posthog-reports/tracking-quality/README.md` "Reports" table.
- Update P0/P1 counts in `docs/architecture/posthog-insights-progress.md` §1 (tracking-quality row).

## Common findings (memorise)

| Pattern | What it means | Action |
| --- | --- | --- |
| ≥30% `anonymous_n` on `$ai_generation` for user-driven flows | F7 — BullMQ producers don't `stampJobObservability`; consumer opens fresh trace + has no userId | Wait for / verify PR #2186 deploy |
| `account_id` missing only on `*-title_generation` rows | F9 — `thread-title-generation.consumer.ts` partial `setRequestCorrelation` | PR #2186 |
| `$ai_span_name` 0% present | OTel exporter not propagating the metadata key | Investigate `@posthog/ai/otel` version; possibly rename key in `buildExperimentalTelemetry` |
| `service.name` / `$service` 0% present | OTel resource attribute set, event property not | Add `'service.name'` to `metadata` in `buildExperimentalTelemetry` |
| `prompt_key` missing on Title Generator / Version Metadata Generator | F12 — `promptKey` not plumbed at those call sites | B2 brief |
| `Chat Message Sent` and `chat-processing > core_chat` have different `$ai_trace_id` | F7 (browser→server boundary, not just BullMQ→BullMQ) | PR #2186 |
| Event name typed in `event-types.ts` but listed TYPED-NOT-FIRED in inventory | Inventory drift | Flip to TYPED-&-FIRED |
| `<event>` fires in prod but isn't in the inventory at all | Catalog drift | Add to appropriate §3.X subsection |
| `checkout.started` (untyped) double-fires alongside typed `Checkout Started` | Bus-forwarder drift | Retire `apps/web/components/analytics-provider.tsx:138` |

## Pitfalls

- **`properties.$foo` returns NULL silently.** Use bracket syntax for `$`-prefixed keys.
- **`'none'` is the missing-value sentinel.** Treat as absent in coverage calculations.
- **PR-deploy lag matters.** When comparing pre/post-fix, verify the *deploy* time, not the *merge* time. Cloud Run rollouts can be ≥30 minutes after merge.
- **`$session_id` is NULL on background BullMQ events.** Don't expect every `$ai_generation` to be in a session.
- **A person can have multiple distinct_ids** (anonymous → identified). Use `person.properties.email = …`.
- **A person can have multiple accounts** (personal + team(s)). Watch for `Account Switched`.
- **Don't run `inspect_posthog_dashboard.py` for this** — it's dashboard-scoped. Go direct via Q1–Q8.
- **In guided mode, give background jobs time to fire** — title-generation, version-metadata, plan-generation chains can run 30s–10min after the user's last click. Tell the user "wait 2 minutes after your last action before saying you're done."

## Anti-patterns

- **Writing the report before running Q1.** You'll guess wrong about distinct_ids.
- **Reporting "100% have property X" without checking the `'none'` sentinel.** You'll over-report coverage.
- **Forgetting the pre-identify anonymous distinct_id.** You'll miss the first events of a session.
- **Conflating typed-catalog status with live-fire status.** Both can be wrong (catalog drift OR fire drift).
- **Skipping Q7 (trace continuity) for chat flows.** It's the cheapest F7 regression test.
- **Acting on guided-mode findings before background jobs fire.** Re-run the audit after a 2-minute wait if any C-tier event might still be in flight.

## Cross-references

- `docs/architecture/observability.md` — `$ai_*` taxonomy + correlation envelope
- `docs/architecture/posthog-events-inventory.md` — typed catalog + drift table
- `packages/glass-box/data/posthog-reports/llm-cost/003-workflow-type-glossary.md` — `workflow_type` root taxonomy
- `packages/glass-box/data/posthog-reports/tracking-quality/001-nicolas-prod-event-audit.md` — worked example, free mode
- `packages/analytics/src/event-types.ts` — typed catalog source of truth
- `apps/ai/src/common/aisdk/sdk.ts` — `buildExperimentalTelemetry()`
- `packages/api/core/src/context/bullmq.ts` — `stampJobObservability` / `withBullMQContext`
- Sister skill: `hamster-posthog-dashboards` (dashboard-level analysis)
- Sister skill: `hamster-analytics` (event instrumentation patterns when the audit surfaces a code fix)
