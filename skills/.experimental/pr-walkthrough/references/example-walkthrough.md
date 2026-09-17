# Example Walkthrough — Real 20k-LOC PR

This is a real walkthrough produced for a 20k-LOC, 117-file PR that introduced a new database-backed subsystem (a "Context Graph" projecting relational entities into typed nodes/edges with embeddings, automated DB triggers, a NestJS projection pipeline, and a new web UI page).

Use this as a **structural template** — section order, tone, opinionated focus areas, file:line citations, the TL;DR table — not as content to copy. The actual content always comes from the specific PR being reviewed.

The original PR:

- ~20,481 additions, 298 deletions, 117 changed files
- 10 new SQL migrations, 1 new schema file (~833 lines), 1 new triggers file (~273 lines)
- 7 new projectors, 8 new services, new retrieval module, new web page, new agent tools
- Comprehensive test coverage on the backend module

---

# Context Graph PR — Reviewer's Walkthrough

This 20k LOC PR introduces a brand-new subsystem: a **Context Graph** — a knowledge graph projected from existing entities (documents, briefs, initiatives, tasks, people, threads, activities) into typed nodes/edges with embeddings, used for semantic retrieval and a visual canvas. It's the Phase 0/1 foundation from `.agents/plans/context-graph-gap-analysis.md` (read that first — it's the design doc).

## The mental model in 3 sentences

1. **Source tables → Nodes**: Every business entity (`document`, `initiatives`, `tasks`, `accounts_memberships`, etc.) is "projected" into typed `context_nodes` rows with chunked text + embeddings (`context_node_segments`) and typed relationships (`context_edges`).
2. **DB triggers → Realtime broadcast → NestJS listener → BullMQ → Projector**: Whenever a source row changes, a Postgres trigger broadcasts a Realtime message; the AI app subscribes, debounces, and queues a projection job that re-runs the right projector.
3. **Three lanes of edges**: `asserted` (FK relationships, hard truth), `derived` (computed from data), `inferred` (cosine similarity + LLM-classified semantic edges with confidence scores). Asserted/derived use a `tstzrange` GIST exclusion to prevent overlapping versions of the same edge.

---

## Database foundation (start here)

**`apps/web/supabase/schemas/39-context-graph.sql`** — the core schema, ~833 lines:

- `context_nodes` — typed nodes with `node_kind` enum (`initiative|document|document_version|thread|activity|task|person`), temporal `valid_from/valid_to` window, source pointer (`source_table` + `source_record_id`).
- `context_node_segments` — chunked content with `vector(1024)` embeddings, FTS tsvector, IVFFlat index, hierarchical via `parent_segment_id`.
- `context_edges` — typed relationships with `lane` enum, `confidence`, `inference_version`, generated `valid_during tstzrange`, GIST exclusion preventing overlapping authoritative edges.
- `context_evidence` — audit trail linking edges/nodes back to source records.
- `context_projection_runs` — idempotency table; uniqueness on `(account_id, projector_key, source_scope, source_table, source_record_id, source_hash)` so re-projecting the same content is a no-op.
- **RPCs**: `match_context_node_segments` (vector search), `hybrid_search_context_node_segments` (vector + FTS reranked), `get_context_graph_neighborhood`, `infer_similar_nodes`, `query_activity_timeline`. All `security invoker` with `search_path=''`.
- Full RLS: `context_graph.manage` permission for writes, account membership for reads.

**`schemas/40-context-graph-triggers.sql`** — the projection trigger system. The `context_graph_broadcast()` function runs after any mutation on source tables, resolves the `account_id` and the IDs to re-project, and calls `realtime.send(payload, 'projection', 'context-graph-projection', true)`. **This is the key architectural shift in the PR** — it replaces ad-hoc queue calls scattered through application code with a single broadcast topic.

**Migration files** in `apps/web/supabase/migrations/2026033*` and `2026040*` — these are the diff'd output of the schema files. There are 10 migrations in this PR; review them in chronological order.

**Tests**: `apps/web/supabase/tests/database/context-graph-{schema,contract,triggers}.test.sql` (pgTAP).

---

## Backend architecture (`apps/ai/src/modules/context-graph/`)

**Module layout** (`context-graph.module.ts`):

```
context-graph/
├── context-graph.controller.ts        ← REST: /project, /backfill, /infer, /retire
├── context-graph.module.ts
├── context-graph.types.ts
├── projectors/                         ← One per node_kind (7 total)
│   ├── document-context-graph.projector.ts
│   ├── document-version-context-graph.projector.ts
│   ├── initiative-context-graph.projector.ts
│   ├── thread-context-graph.projector.ts
│   ├── activity-context-graph.projector.ts
│   ├── task-context-graph.projector.ts
│   └── person-context-graph.projector.ts
├── services/
│   ├── context-graph-broadcast-listener.service.ts   ← Subscribes to Realtime
│   ├── context-graph-queue.service.ts                ← Wraps BullMQ enqueue
│   ├── context-graph-projection.service.ts           ← Dispatches to projectors
│   ├── context-graph-projection-repository.service.ts ← Run idempotency
│   ├── context-graph-segment-writer.service.ts       ← Chunks, embeds, upserts segments+edges
│   ├── context-graph-inference.service.ts            ← Cosine + LLM edge classification
│   ├── context-graph-backfill.service.ts             ← Full-account backfills
│   └── context-graph-lifecycle.service.ts            ← Soft delete / retire nodes
└── retrieval/
    ├── context-graph-retrieval-backend.service.ts    ← Hybrid search + neighborhood expansion
    ├── postgres-graph-projection.service.ts
    └── postgres-vector-index.service.ts
```

**The flow you need to understand**:

1. User edits a brief → DB row updates
2. `context_graph_broadcast` trigger fires → publishes to Realtime channel `context-graph-projection`, event `projection`
3. `ContextGraphBroadcastListenerService` (in NestJS) subscribes on app boot, debounces per projector key (500ms-2s), then calls…
4. `ContextGraphQueueService.queue()` → enqueues a BullMQ job on `CONTEXT_GRAPH_PROJECTION` queue
5. `ContextGraphProjectionConsumer` (`apps/ai/src/modules/bullmq/consumers/context-graph-projection.consumer.ts`) picks it up → calls…
6. `ContextGraphProjectionService.project()` → checks `context_projection_runs` for idempotency, dispatches to the right projector
7. Projector loads source row, builds chunks, calls `ContextGraphSegmentWriterService.upsertNodeWithSegments()` which:

- Upserts the `context_nodes` row
- Two-pass segment upsert (parent first, then child, to satisfy `parent_segment_id` FK)
- Generates embeddings via the AI model factory
- Upserts asserted/derived edges to other nodes

8. After projection, fires `inferenceService.runInference()` (fire-and-forget) which:

- Calls `infer_similar_nodes` RPC (cosine pairs)
- Inserts cross-initiative shared edges
- Batches semantic candidates to Haiku for LLM relationship classification (`v2-llm-haiku-classify`)

**Read these in order to grok the backend**:

1. `context-graph.types.ts` (the `ContextGraphProjector` interface)
2. `services/context-graph-queue.service.ts` (just the enqueue contract)
3. `services/context-graph-projection.service.ts` (orchestration & idempotency logic)
4. `services/context-graph-segment-writer.service.ts` (the heavy lifter — 663 LOC, where edges and segments actually get written)
5. `projectors/document-context-graph.projector.ts` (the most complete example projector)
6. `services/context-graph-broadcast-listener.service.ts` (Realtime subscription + debouncing)
7. `services/context-graph-inference.service.ts` (LLM classification)
8. `retrieval/context-graph-retrieval-backend.service.ts` (how agents query the graph)

**Agent tools** (in `apps/ai/src/modules/ai-agent/tools/context/`):

- `unified-document-search.tool.ts` — heavily refactored to query the context graph directly. This is the AI's main retrieval surface.
- `explore-graph.tool.ts` — graph neighborhood navigation
- `query-activity-timeline.tool.ts` — temporal "what happened recently" queries

---

## Frontend (`apps/web/app/home/[account]/context-graph/`)

The UI is a new top-level page for team accounts.

```
context-graph/
├── page.tsx                              ← RSC, calls loadContextGraphPageData
├── _components/
│   ├── context-graph-page-client.tsx     ← Stats header, sidebar, dynamic-imports the canvas
│   └── context-graph-flow-canvas.tsx     ← @xyflow/react ReactFlow canvas with custom node renderer
└── _lib/
    ├── server/context-graph-page.loader.ts    ← Fetches up to 150 nodes / 600 edges, prefers blueprint nodes as "sun"
    ├── context-graph-view-model.ts            ← Maps DB rows → ReactFlow snapshot, computes shells/degree
    ├── context-graph-view-model.test.ts
    ├── context-graph-gravity-layout.ts        ← Physics-style layout: blueprint = sun, others orbit in shells
    └── context-graph-gravity-layout.test.ts
```

**The visualization**: a "gravitational solar system" — blueprint document = the sun (center), other nodes orbit in concentric shells based on graph distance and degree. Edges have three visual lanes: asserted (solid), derived (solid), inferred (dashed, hidden behind a toggle).

**Sidebar nav**: added in `apps/web/config/team-account-navigation.config.tsx:64` with the `Network` icon, route at `pathsConfig.app.accountContextGraph` → `/home/[account]/context-graph`.

**Translations**: ~25 new keys in `apps/web/public/locales/en/common.json` under `contextGraph*`.

---

## How to see the UI

```bash
pnpm supabase:web:start
pnpm supabase:web:reset           # applies the 10 new migrations
pnpm supabase:web:typegen
pnpm dev                          # all apps including hamster-ai (NestJS) and web

# In a browser, log in, switch to a team account, click the "Context Graph" sidebar item.
```

If the page is empty (no nodes), trigger a backfill against the AI app:

```bash
curl -X POST http://localhost:3001/backfill \
  -H "Authorization: Bearer <supabase-jwt>" \
  -H "X-Account-Id: <team-account-uuid>" \
  -H "Content-Type: application/json" \
  -d '{"entityTypes":["documents","initiatives","tasks","people"]}'
```

Then open the page — it should populate. Easier alternative: edit a brief in the UI; the trigger will broadcast and you'll see nodes appear.

---

## How to test

**Database** (pgTAP):

```bash
pnpm supabase:web:reset
pnpm --filter web supabase:test    # runs the three new context-graph test files
```

**NestJS unit tests** (Jest, fully mocked Supabase clients — no live DB needed):

```bash
pnpm --filter hamster-ai test -- context-graph
```

There are 11 spec files covering every projector, backfill, broadcast listener, queue, projection, segment writer, and retrieval backend. **Coverage on the new module is solid** — this is the strongest part of the PR for review.

**Web view-model tests**:

```bash
pnpm --filter web test -- context-graph
```

**End-to-end smoke**:

1. Start everything (`pnpm dev`)
2. Create/edit a brief
3. Watch the `hamster-ai` logs — you should see broadcast received → debounce → queue → projection completed
4. Reload `/home/[account]/context-graph` — nodes should appear

---

## What to focus on as a reviewer

**Highest leverage areas (where bugs would hurt most)**:

1. **`schemas/39-context-graph.sql`** — the GIST exclusion constraint on `context_edges` is subtle. Confirm the tstzrange `[)` semantics actually prevent the overlaps you think they do, and that `superseded_at is null` filter is correct.
2. **`schemas/40-context-graph-triggers.sql`** — every source table mutation now fires a trigger. Check whether there are tables missing (e.g., does `document_versions` need DELETE coverage? It only has INSERT/UPDATE). The `accounts` UPDATE trigger only fires on `name`/`picture_url` change — verify that's what you want.
3. **`context-graph-segment-writer.service.ts`** — 663 LOC, the embedding/upsert hot path. Look for: embedding model mismatch, missing transactions where partial writes could leave orphans, the two-pass parent_segment_id logic.
4. **`context-graph-broadcast-listener.service.ts`** — debouncing + reconnect handling. What happens if the Realtime channel drops? Is there a reconnect path? What about messages emitted while disconnected? (likely lost — that's why backfill exists.)
5. **`context-graph-projection.service.ts:124-131`** — `void this.inferenceService.runInference(...).catch(...)` is fire-and-forget after every projection. Inference is expensive (LLM calls). Under bursty mutation load this could thrash. Worth raising.
6. **RLS on `realtime.messages`** (lines 184-202 of trigger schema) — `if not exists` policies for the broadcast channel. Confirm the listener auth path actually receives messages.
7. **`unified-document-search.tool.ts`** — was significantly refactored, legacy search paths removed. Make sure the agent still gets equivalent results.
8. **Forced inference on every projection**: combined with no-op short-circuit, but a re-projection still triggers full account inference. Likely O(n²) in segment count via `infer_similar_nodes`. Concern at scale.

**Lower priority / cosmetic**:

- The `Untitled query 881.sql` snippet (7 lines) probably shouldn't be in the PR — looks like an accidental commit.
- Frontend gravity layout is a nice prototype but the gap-analysis doc explicitly calls it `⚠️ Prototype`.

**Things deliberately out of scope** (per the gap-analysis doc, don't ask for them in this PR):

- `goal`, `decision`, `outcome`, `metric` node kinds (Phase 2-4)
- Feedback loop / edge confidence recalibration based on outcomes
- Temporal "graph as of date X" queries
- External Airweave → graph wiring

---

## TL;DR for the review checklist

| What | Where | Why |
| --- | --- | --- |
| Read the design doc | `.agents/plans/context-graph-gap-analysis.md` and `context-graph-db-triggers.md` | Sets the scope and what's intentionally not here |
| DB schema | `apps/web/supabase/schemas/39-context-graph.sql`, `40-context-graph-triggers.sql` | Foundation; review GIST exclusion + RLS |
| Trigger flow | trigger SQL → `context-graph-broadcast-listener.service.ts` → `context-graph-queue.service.ts` → projection consumer | The Phase 0 architectural shift |
| One projector end-to-end | `document-context-graph.projector.ts` + its `.spec.ts` | Pattern repeats for the other 6 |
| Segment writer | `context-graph-segment-writer.service.ts` | Where data integrity lives |
| Inference cost | `context-graph-inference.service.ts` + the fire-and-forget call site in `projection.service.ts:124` | Performance concern |
| UI page | `app/home/[account]/context-graph/` | Visit it locally to understand |
| How to test | pgTAP + `pnpm --filter hamster-ai test -- context-graph` + manual via brief edit | Coverage is good |

It's a foundation PR — the surface area is large but it's all in one new module + one new schema file + one new web page, with strong test coverage. The risks are concentrated in: the trigger contract, the GIST overlap exclusion, the broadcast→listener reliability story, and the cost of running inference after every projection.

---

# Why this is a good template

**What to mimic in your own walkthroughs** (not the content, the *form*):

1. **The "mental model in N sentences" comes first.** It's the most important section. Distill the *idea*, not the diff. In this example it's three numbered sentences that someone could repeat to a colleague.
2. **Schema before services.** Foundation drives understanding. Quote table names, enum values, key constraints, RPC names. Reviewers anchor on these.
3. **A file tree with one-line annotations beats prose** for showing module layout.
4. **One end-to-end flow as a numbered list.** This single trace teaches the architecture better than reading every file. Note how it touches every layer (DB → trigger → listener → queue → consumer → service → projector → writer → inference).
5. **A recommended reading order as a numbered list.** Don't just dump files — tell the reviewer which file to read first, second, third. This is the highest-value piece for someone staring at 100+ files.
6. **Concrete bash commands for "see it locally."** Not "run the app and click around." Actual commands plus an "if it's empty, here's how to seed it" fallback.
7. **Tests grouped by layer with the exact run command for each.** Honest assessment of coverage strength.
8. **Opinionated focus areas with file:line refs.** Numbered, ranked by leverage. Each one is specific enough that the reviewer can jump straight to the line and see what you mean. Subtle constraints (GIST exclusions), hot paths (fire-and-forget inference), security boundaries (RLS), reconnection edge cases — these are the things prior context unlocks that the diff alone doesn't.
9. **A "deliberately out of scope" list pulled from the design doc.** Saves the reviewer from asking for things that aren't there. This is the section reviewers most often miss.
10. **The TL;DR table at the end** is the cheat-sheet the reviewer uses while actually doing their review pass. Worth the space when the PR is big.

**What to avoid:**

- Don't drift into code review territory. There are no "consider doing X" or "this is bad" lines in the example. Issues that come up while reading are noted in the focus areas as "worth raising" — phrased as observations, not prescriptions.
- Don't restate the PR description. The reviewer already read it.
- Don't pad. Every section earned its space. If a section has nothing to say, drop it.
- Don't hedge. "I'm not sure if X handles Y — worth checking" is good. Vague compliments like "looks well-structured" are useless.