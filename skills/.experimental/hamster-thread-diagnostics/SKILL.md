---
name: hamster-thread-diagnostics
description: "Diagnose chat thread issues from a thread_id and a user-provided symptom. Use when the user reports a misbehaving thread (missing diff preview, duplicate spawns, hallucinated failures, child threads not opening, missing Accept buttons, etc.). Walks the parent + child threads, tool_calls, participants, and relevant code paths to produce a root-cause summary and a concrete fix plan."
---

# Hamster Thread Diagnostics

## Overview

The chat system has many moving pieces — Supabase tables, scoped Zustand stores, the conductor agent, spawn flows, realtime subscriptions, and the editor — and bugs usually live at the seams. This skill encodes the workflow for tracing a reported issue back to its root cause given a `thread_id` and a description of what the user observed.

## Required inputs

1. **A `thread_id`** (UUID) — the parent thread the user was in when the issue occurred.
2. **A symptom description** — what the user did, what they saw, what they expected. The more specific the better (e.g. "I see suggested edits in the spawned thread but no Accept button in the editor" beats "the chat is broken").

If only one is provided, ask for the other before proceeding. Without the symptom, you'll waste turns querying everything; without the thread_id you can't anchor the trace.

## When to apply

- User reports anything off about a chat thread (root, branched, or spawned).
- Bugs involving spawn cards, suggestion threads, document edits, Accept/Reject controls, plan-generation cards, or thread navigation.
- Any time a behaviour seems off and the user can hand you a thread_id.

## Workflow

### 1. Connect to the local Postgres

The local Supabase DB is exposed on port `54322` with `postgres/postgres` credentials. Connection string:

```
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres
```

If unsure, run `pnpm exec supabase status` from `apps/web/` and read the `URL` line. If Supabase isn't running, ask the user to `pnpm supabase:web:start` — do not assume.

### 2. Walk the parent thread

Run a compact list first — full content can be large:

```sql
SELECT id, item_type, sequence_number, content_type,
       LEFT(content, 80) AS preview, created_at
FROM thread_items
WHERE thread_id = '<thread_id>'
ORDER BY sequence_number;
```

Read the timeline. Look for:

- The user's prompt (item_type `message`, first `created_by` matching the user).
- Sub-status messages (`system`) that show what flow ran (e.g. "Reviewing done briefs and adding notes").
- Any `tool_call` items in the parent itself (rare for spawn flows; common for in-context document edits).
- `spawn_indicator` items — these are the spawn cards. **Always inspect their metadata**, not just the preview.

### 3. Inspect spawn indicators in detail

```sql
SELECT id, sequence_number, jsonb_pretty(metadata)
FROM thread_items
WHERE thread_id = '<thread_id>'
  AND item_type = 'spawn_indicator'
ORDER BY sequence_number;
```

Key metadata fields:

| Field | Meaning |
| --- | --- |
| `child_thread_id` | The spawned thread to follow next. |
| `target_thread_id` | The "main thread" of the target document/brief that the child branches from. |
| `origin_thread_id` | The thread where the user typed their request. |
| `spawn_type` | `plan` \ |
| `status` | `pending` \ |
| `document_id` / `brief_id` | The target document. |
| `bulk_operation_id` | Non-null only if spawned via the bulk tool. Multiple indicators sharing a key are one logical operation. |
| `dedupe_key` | sha256 of the (origin, target) pair for singleton suggestions and a per-batch hash for bulk. Both tools now populate this — `DocumentSuggestionThreadService.spawnSuggestion()` computes it when callers don't pass an explicit override, and `DocumentCreationThreadService.spawnCreation()` does the same for creation spawns. |
| `is_mirrored_reference` | `true` when this indicator is the duplicate posted in the target's main thread (so the brief's chat also shows the card). |
| `error_message` | Populated when `status = 'failed'`. |

If two indicators within the same parent thread reference the same `(target_thread_id, instruction)` pair within seconds, that's a **duplicate spawn** — see Pitfalls.

### 4. Walk each spawned child thread

For every interesting `child_thread_id` from step 3:

```sql
SELECT thread_id, item_type, sequence_number, content_type,
       LEFT(content, 100) AS preview, created_at
FROM thread_items
WHERE thread_id = '<child_thread_id>'
ORDER BY sequence_number;
```

Then for each `tool_call` row (especially `apply_diff` / `replace_document`):

```sql
SELECT jsonb_pretty(metadata) FROM thread_items WHERE id = '<tool_call_item_id>';
```

Tool-call metadata fields you'll regularly read:

| Field | Meaning |
| --- | --- |
| `tool_call_id` | App-level ID (separate from row PK). |
| `tool_name` | `apply_diff`, `replace_document`, etc. |
| `status` | `pending` \ |
| `diffs[]` | Array of `{ search, replace }` for `apply_diff`. |
| `timestamp` | When the call was emitted. |
| `updated_by` | The participant who last claimed/transitioned the call. |
| `prevents_ai_response` | If true, blocks the model from continuing until the call resolves. |
| `ai_generated` | True when the call came from the model. |

### 4b. Read flow-step reasoning (do not skip this)

`item_type = 'system'` rows in a child thread can be either plain status messages or **flow-step rows** — the latter carry the writer/specialist's full chain-of-thought, the partial output, AND the per-tool action results in metadata. **This is the single highest-signal source for diagnosing sub-agent behaviour.** Skipping it and reasoning only from final user-facing messages will mislead you, because writers regularly emit user-facing text that contradicts their own reasoning.

Identify flow-step rows by `metadata.item_subtype = 'flow_step'`. Quick survey across a child thread:

```sql
SELECT id, sequence_number, created_at,
       metadata->>'agent_name' AS agent,
       metadata->>'label' AS label,
       metadata->>'output_status' AS output_status,
       LEFT(metadata->>'output_text', 80) AS output_preview
FROM thread_items
WHERE thread_id = '<child_thread_id>'
  AND item_type = 'system'
  AND metadata->>'item_subtype' = 'flow_step'
ORDER BY sequence_number;
```

For any flow-step that looks suspicious, dump the rich fields. Postgres truncates wide jsonb output, so pipe through Python or `jq`:

```bash
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres -tA \
  -c "SELECT metadata FROM thread_items WHERE id = '<flow_step_id>';" \
  | python3 -c "
import sys, json
m = json.loads(sys.stdin.read().strip())
print('label:', m.get('label'))
print('agent:', m.get('agent_name'))
print('output_status:', m.get('output_status'))
print('output_text:', (m.get('output_text') or '')[:1000])
print('reasoning_text:', m.get('reasoning_text') or '')
print('actions:')
for a in m.get('actions', []):
    print(' ', a.get('tool_name'), '|', a.get('status'), '|', a.get('error_message'))
"
```

Flow-step metadata fields you'll always read:

| Field | Meaning |
| --- | --- |
| `agent_name` | Which specialist ran (e.g. `Brief Writer`, `Blueprint Writer`). Different agents have different prompts and capabilities. |
| `label` | The user-visible status (`Adding TLDR to brief`, `Updating Engineering Principles blueprint`). |
| `step_id` | `handoff-<AgentName>` — names the orchestration handoff that produced this step. |
| `flow_execution_id` | Correlates flow steps belonging to one execution; useful when several writers ran in parallel. |
| `reasoning_text` | The model's chain-of-thought — **read this first when output looks wrong**. It tells you what the model actually saw in its grounding prompt and why it chose what it chose. |
| `reasoning_status` | `streaming` \ |
| `output_text` | The post-reasoning text the agent emitted. Often contradicts `reasoning_text` (model fabrication after thinking). |
| `output_status` | `streaming` \ |
| `actions[]` | Per-tool results — see below. **Required check for any "no tool_call was created" mystery.** |

`actions[]` shape per entry: `{ tool_name, tool_call_id, status, started_at, completed_at, duration_ms, display_name, error_message?, output_position? }`. Statuses: `started`, `completed`, `failed`.

**Diagnostic recipes by symptom:**

- **"The agent claims it edited the doc but no tool_call exists in this thread."** Read `actions[]` for the most recent flow-step. If you see `{ status: 'failed', error_message: 'Stream ended before tool completed' }`, the model started a tool call mid-stream and the connection dropped (`apps/ai/src/common/aisdk/processors/action-tracker.ts:154-201` writes this on cleanup). The `output_text` may STILL claim success — that's a model hallucination after the failure, not a real edit.

- **"The agent keeps asking for clarification despite an unambiguous instruction."** Read `reasoning_text` of the latest flow-step. If it says things like _"the document is described as ':warning: Brief is empty'"_ or _"the writer mode is 'spawn-only suggestions'"_, the writer's grounding prompt was rendered without document content — meaning `fetchDocumentContext` returned undefined. Trace: did the request carry `event.documentContext.documentId`? For follow-up messages, this comes from the FE's `metadata.document_context`. If a non-text-input path (e.g. `submitQuestionAnswers`) bypassed it, the prompt renders as empty.

- **"The agent acted on the wrong instruction."** Read `reasoning_text` for what the writer thought it was asked to do. If you see _"The user has asked me to 'Process the current request'"_, the orchestrator handed off without populating `reason` or `context` and the writer received only the placeholder + references — see `buildHandoffMessage` in `apps/ai/src/modules/ai-agent/orchestration/agent.ts` (search by name; line numbers shift). Confirm by checking that the seed/parent thread had a real instruction and that nothing else in the model's chain-of-thought references it.

- **"`MaxTurnsExceededError` was logged but the user-visible result looks fine."** Walk every flow-step's `actions[]`. If a required tool call has `status: 'completed'` somewhere in the run, the agent did its job and looped past — `executeAgentTask`'s required-tool check should accept the partial run as success. If no required tool ever completed, the run genuinely failed.

- **"User says the writer did the wrong thing on `local_edit` mode."** Search the flow-step's `reasoning_text` for the phrase `Writer mode:`. The grounding prompt explicitly renders one of:
- :writing_hand:` Writer mode: local edit` — capability is `local_edit`, document content is loaded
- :shuffle:` Writer mode: spawn-only suggestions` — capability is `spawn_only`, writer should call `spawn_document_suggestion_thread` not `apply_diff`

  If the mode rendered doesn't match what you expect, trace `core-agent-factory.service.ts:302-309`'s decision: capability is `local_edit` only when `modeContext.mode === 'brief' && fetchedDocumentContext` (or the blueprint equivalents). If `fetchedDocumentContext` is falsy, capability collapses to `spawn_only` — same root cause as the empty-doc symptom above.

**Why output_text and reasoning_text disagree:**

Two separate fabrications happen in practice:

1. The model's reasoning enumerates the actual document content it saw, then the user-facing output claims the document is empty. This is a known LLM trap with reasoning-mode models — the post-reasoning composition step doesn't always honour what the chain-of-thought concluded.
2. The reasoning correctly identifies that an instruction is unambiguous (e.g. "place at the very beginning"), then the output asks the user the same clarifying question again. This is the model anchoring on the seed prompt rather than carrying forward the user's prior answers.

When `output_text` and `reasoning_text` contradict, **trust `reasoning_text` for what the model actually saw, and treat `output_text` as the bug**.

### 5. Check thread metadata + parent linkage

```sql
SELECT id, parent_thread_id, account_id, title, jsonb_pretty(metadata)
FROM threads
WHERE id IN ('<parent>', '<child>', '<target>');
```

Read `metadata.created_via` to know how the thread was bootstrapped:

| `created_via` | Meaning |
| --- | --- |
| `create_thread_for_account` | General account chat (no brief/document). |
| `create_thread_for_brief` | A brief's main thread — created by whoever opened the brief first, not necessarily the user. |
| `create_thread_for_document` | A document (blueprint/method) main thread. |
| `create_orchestration_child_thread` | Spawned child of a flow (suggestion, plan, etc.). |

If the user's request crosses thread types (e.g. they typed in their general account thread but the spawn lands on a brief's main thread), assume **participant gaps are likely** — check step 6 immediately.

### 6. Check participants

```sql
SELECT thread_id, participant_id, role, joined_at
FROM thread_participants
WHERE thread_id IN ('<parent>', '<child>', '<target>');
```

Participants matter because a long chain of UI behaviour gates on `isParticipant`:

- The parent thread (`origin_thread_id`) usually has the user + AI agent.
- The spawned child thread inherits parent participants via `create_orchestration_child_thread`, plus the `created_by` user via the `kit.handle_new_thread_participant` trigger.
- The **target main thread** (e.g. a brief's main thread the user has never opened) often has _only the AI agent_ when the AI created it. If the user isn't on this thread, the brief workspace's `useScopedToolCallParticipant` returns `false` for them and the editor will **silently skip the diff preview and Accept/Reject controls** even though everything else looks correct. (This is the bug fixed in commit `608de8fe1`.)

### 7. Map findings to code

Once the data tells you _what_ went wrong, locate _where_ it happens. Common starting points:

| Concern | File |
| --- | --- |
| Spawn singleton tool | `apps/ai/src/modules/ai-agent/tools/threads/spawn-document-suggestion.tool.ts` |
| Bulk spawn tool | `apps/ai/src/modules/ai-agent/tools/threads/bulk-document-suggestions.tool.ts` |
| Spawn service (resolveTarget, createChild, postInitial, ensureParticipant) | `apps/ai/src/modules/ai-agent/services/document-suggestion-thread.service.ts` |
| Bulk orchestration service | `apps/ai/src/modules/ai-agent/services/bulk-document-suggestions.service.ts` |
| Conductor system prompt | `apps/ai/src/modules/ai-agent/agents/conductor/conductor-orchestrator-prompt.ts` |
| Thread chat container (loads overlay, viewedChildThread state) | `packages/ai-chat/src/components/thread-chat.tsx` |
| Thread chat inner (toolcall hooks, realtime items) | `packages/ai-chat/src/components/thread-chat-main.tsx` |
| Tool-call processor | `packages/ai-chat/src/hooks/use-scoped-toolcall-processor.ts` |
| Tool-call manager (extract → addToolCall → reactions) | `packages/ai-chat/src/hooks/use-scoped-toolcall-manager.ts` |
| Auto-preview pending diffs from initial items | `packages/ai-chat/src/hooks/use-scoped-pending-diff-auto-preview.ts` |
| Participant gate | `packages/ai-chat/src/hooks/use-scoped-toolcall-participant.ts` |
| Scoped store (per-thread isolated zustand) | `packages/ai-chat/src/stores/thread-toolcall-context.tsx` |
| Reactions (apply-diff, replace-document, navigation) | `packages/ai-chat/src/stores/reactions/` |
| Pending review UI (Accept/Reject) | `packages/ai-chat/src/components/scoped-changes-pending-review.tsx` |
| Brief workspace layout (childThreadIdFromUrl wiring) | `apps/web/app/home/[account]/briefs/_components/brief-workspace-layout.tsx` |
| Blueprints workspace | `apps/web/app/home/[account]/blueprints/_components/blueprints-shell.tsx` |
| Spawn-card click → URL routing | `packages/ai-chat/src/components/chat-thread-artifact-message.tsx` + `packages/ai-chat/src/lib/chat-thread-artifact-routing.ts` |
| Thread RPCs (create_thread_for_brief, add_thread_participant, get_thread_details, create_orchestration_child_thread, triggers) | `apps/web/supabase/schemas/23-chat-threads.sql` |
| Toolcall DB helpers (setToolCallStatusIfCurrent) | `packages/ai-chat/src/stores/db/toolcalls.ts` |

Tip: when in doubt, `gitnexus_context({name: "<symbol>"})` returns callers + callees + flows for any of the above symbols.

## Pitfalls (catalogued from real bugs)

1. **`useThreadStore.currentThreadId` is always `null`.** Nothing calls the store action that sets it. Any code branching on `useThreadStore.getState().currentThreadId !== toolCall.threadId` is effectively a no-op. Don't be fooled by it appearing to "do something."
2. **Two `ThreadChatMain` instances render simultaneously when a child overlay is open.** Each gets its own `ThreadToolCallProvider` (scoped store keyed by threadId). Both subscribe to the editor. When a tool_call belongs to one but not the other, only the matching scoped store should react.
3. **`useScopedToolCallParticipant` reads from the global `useThreadStore.participants` — i.e. the* current page's main thread*, not the scoped/overlay thread.** If the user isn't a participant of the page's main thread, `isParticipant` is `false` for the overlay too, which silently kills `addToolCall`'s enqueue, `markPendingChange`, and the processor's run. (Origin of the missing-Accept-button bug.)
4. **Brief main threads are often created by the AI agent**, not the user. When `findCoreBriefThread` returns a thread, it isn't auto-joining. Spawn flows must call `add_thread_participant` for the requesting user before creating the child thread, or the participant gate (#3) trips.
5. **Singleton `spawn_document_suggestion` tool does not populate `dedupe_key`.** Two calls within one turn for the same `(target, instruction)` create two child threads. Dedup is a TODO (see `docs/plans/spawn-suggestion-hardening.md` Commit 2).
6. **The conductor can hallucinate failures after success.** A `success: true` from a spawn tool means "edit proposed; user will review", but a soft success message can lead the model to conclude it failed and retry. Cross-check the AI's user-facing text against the actual tool results.
7. **`create_orchestration_child_thread` copies parent participants to the child** — but the parent's participant set may be stale or AI-only. Don't assume the child has the user just because the user typed the prompt; verify with a `thread_participants` query.
8. **Spawn cards in the chat on the `/briefs/<id>` chat tab were historically dropped from the URL.** Pre-fix, `effectiveChildThreadId` was forced to `null` outside plan/task tabs, and `?threadId=…` navigation was a no-op. If the user reports "I clicked the card but the spawned thread didn't open," check `brief-workspace-layout.tsx` first.
9. **`add_thread_participant` is idempotent and auto-propagates to the parent thread** when the child has a `parent_thread_id`. Use it as the universal seat operation; don't write to `thread_participants` directly.
10. **`spawn_indicator` items are mirrored.** When `origin_thread_id !== target_thread_id`, the indicator is posted in both threads, with `is_mirrored_reference: true` on the origin's copy. Don't double-count duplicates by accident.
11. **A spawn_indicator marked `completed` does NOT mean the writer produced a usable suggestion.** Pre-fix, every BullMQ-completed agent run flipped the indicator to `completed` even if the child thread had zero `tool_call` rows (stream cut off mid-call, writer routed to `request_clarification`, etc.). After commit `951a04fcc`, `finalizeChildOutcome` checks for usable tool_calls and downgrades to `failed`; if you see a stale "Suggestion Ready" card without a tool_call, you're looking at pre-fix data or a regression.
12. **`buildHandoffMessage` falls back to `"Process the current request"`** when both `reason` and `context` are missing on the handoff (`apps/ai/src/modules/ai-agent/orchestration/agent.ts:1735`). Symptom in the writer's `reasoning_text`: it says it received "Process the current request" with only references and no actual instruction. Post-fix (`1390305f3`), the originating user message is carried forward as a final fallback.
13. **`submitQuestionAnswers` originally didn't pass `document_context`.** Question-answer submissions in a child thread overlay reached the chat-processing consumer with `event.documentContext = undefined` → `fetchDocumentContext(undefined, …)` returned no content → writer's prompt rendered :warning:` Brief is empty` and `briefWriterCapability = 'spawn_only'`. Fixed in `8295e2ebd`. If you see those two markers together in a follow-up flow-step `reasoning_text`, the request body lacked document_context — check that the FE caller is passing it.
14. **The writer's `output_text` and `reasoning_text` can disagree.** The reasoning often correctly enumerates document content the model saw, while the output fabricates "empty" or asks already-answered clarification questions. Always trust `reasoning_text` when diagnosing what the model actually saw.

## Useful query recipes

### Tool-call status sweep across both parent and children

```sql
SELECT thread_id, id, item_type,
       metadata->>'tool_name' AS tool_name,
       metadata->>'status' AS status,
       metadata->>'tool_call_id' AS tool_call_id,
       created_at
FROM thread_items
WHERE thread_id IN ('<parent>', '<child1>', '<child2>')
  AND item_type = 'tool_call'
ORDER BY thread_id, sequence_number;
```

### All children of a parent thread

```sql
SELECT id, title, status, metadata->>'created_via' AS created_via, created_at
FROM threads
WHERE parent_thread_id = '<parent>'
ORDER BY created_at;
```

### Spawn-indicator audit (find duplicates within a parent)

```sql
SELECT
  metadata->>'target_thread_id' AS target,
  metadata->>'spawn_type' AS spawn_type,
  COUNT(*) AS spawn_count,
  array_agg(metadata->>'child_thread_id') AS child_ids,
  array_agg(created_at ORDER BY created_at) AS times
FROM thread_items
WHERE thread_id = '<parent>'
  AND item_type = 'spawn_indicator'
GROUP BY 1, 2
HAVING COUNT(*) > 1;
```

### Flow-step audit (find writer failures and stream cutoffs across a child thread)

```bash
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres -tA \
  -c "SELECT metadata FROM thread_items
      WHERE thread_id = '<child_thread_id>'
        AND item_type = 'system'
        AND metadata->>'item_subtype' = 'flow_step'
      ORDER BY created_at;" \
  | python3 -c "
import sys, json
for i, line in enumerate(sys.stdin):
    line = line.strip()
    if not line: continue
    m = json.loads(line)
    print(f'--- step {i+1}: {m.get(\"label\")} ({m.get(\"agent_name\")}) ---')
    print('  output_status:', m.get('output_status'))
    out = (m.get('output_text') or '').replace('\n', ' ')[:200]
    print('  output:', out)
    failed = [a for a in m.get('actions', []) if a.get('status') == 'failed']
    for a in failed:
        print('  FAILED ACTION:', a.get('tool_name'), '|', a.get('error_message'))
    rt = (m.get('reasoning_text') or '')
    if 'empty' in rt.lower() or 'spawn-only' in rt.lower():
        print('  ⚠️ reasoning suggests empty doc / spawn-only mode')
"
```

This is the fastest way to find the failure mode for a misbehaving spawn child: prints each step's label, agent, output status, any failed tool actions with their error messages, and flags reasoning that mentions "empty" or "spawn-only" (the two canonical grounding-prompt markers when document context didn't load).

### Diff content of a pending tool_call

```sql
SELECT jsonb_pretty(metadata->'diffs')
FROM thread_items
WHERE id = '<tool_call_item_id>';
```

### Check whether a user is on the relevant threads

```sql
SELECT t.id AS thread_id, t.title, t.metadata->>'created_via' AS created_via,
       (tp.participant_id IS NOT NULL) AS user_is_participant,
       tp.role
FROM threads t
LEFT JOIN thread_participants tp
  ON tp.thread_id = t.id AND tp.participant_id = '<user_uuid>'
WHERE t.id IN ('<parent>', '<child>', '<target>');
```

## Output: what to give the user

After the trace, deliver:

1. **A timeline table** of the parent thread (sequence, type, summary, time) so they can see what happened in plain language.
2. **A "what each spawn produced" section** for any non-trivial spawn — the child thread items in order and any pending tool_calls' diffs.
3. **A grounded root-cause statement.** Cite specific rows ("`thread_participants` for `1de78d90-…` only contains the AI agent — the user isn't a participant of the brief's main thread, which kills `useScopedToolCallParticipant` for the overlay") rather than vague theories.
4. **A fix recommendation** with file paths and line-level specificity. If multiple fixes are viable, list them with tradeoffs and pick one.
5. **A retest path** — what the user can do to verify the fix without re-spawning, when applicable. If existing rows must be patched to reproduce the green path, name the SQL or service call needed.

## Anti-patterns

- **Don't speculate without querying.** Symptoms can be misleading; the DB is ground truth.
- **Don't try to verify in the browser before reading the data.** UI behaviour layers many gates; the DB tells you which gate tripped fastest.
- **Don't restart the dev server or supabase.** Diagnostic work is read-only against existing state.
- **Don't write to `thread_participants` directly** to "patch" a missing seat. Use `add_thread_participant` (RPC) — it has the auth and propagation logic.
- **Don't propose fixes that paper over `useScopedToolCallParticipant`.** If the user's missing from a thread they should be on, fix the seating, not the hook.
- **Don't conclude a `tool_call_id` failed just because the AI's user-facing message says so.** Cross-check `metadata.status` and the tool's actual return value.
