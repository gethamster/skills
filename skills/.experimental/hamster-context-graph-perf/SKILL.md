---
name: hamster-context-graph-perf
description: "Context graph performance validation for Hamster Studio. Use when changing context graph RPCs, indexes, RLS/security modes, live-docs search, code search / search_code_with_neighbors behavior, or SQL migrations that can affect query plans."
version: "1.0.0"
---

# Hamster Context Graph Perf

Use this with `hamster-database` whenever context graph search SQL, RPCs,
indexes, RLS policies, or live-docs retrieval changes.

## What To Validate

Run the full safety net after `pnpm supabase:web:reset`:

```bash
pnpm seed:context-graph-perf
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres \
  -v ON_ERROR_STOP=1 \
  -f apps/web/supabase/scripts/validate-context-graph-perf.sql
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres \
  -v ON_ERROR_STOP=1 \
  -f .agents/skills/hamster-context-graph-perf/scripts/validate-context-graph-rpc-indexes.sql
```

Also run:

```bash
pnpm supabase:web:diff:drift-check
pnpm --filter hamster-ai test -- search-hamster-docs.tool.spec.ts context-graph-retrieval-backend.service.spec.ts hybrid-merge.spec.ts
pnpm --filter hamster-ai typecheck
```

## Interpreting Results

- `search_fts_only` must move `idx_context_node_segments_fts` on a selective
  term like `synthetic-perf-12345`.
- Vector search is split by segment type into two partial HNSW indexes (a
  minority segment type post-filtered out of a shared graph forces pgvector's
  iterative scan to walk tens of thousands of tuples and blow the 5s
  statement_timeout — this is what timed out code search). Each path carries a
  *constant* `segment_type` guard so the planner picks the right index:
- Non-code semantic (`search_semantic_only`, live-docs) must move
  `idx_context_node_segments_noncode_embedding_hnsw` (predicate
  `segment_type <> 'code_chunk'`).
- Code search (`search_code_with_neighbors`/`hybrid_search_code_segments`
  and `match_code_segments`) must move
  `idx_context_node_segments_code_embedding_hnsw` (predicate
  `segment_type = 'code_chunk'`). A scan delta of 0 here means code search
  fell back onto the shared/non-code index — the regression this guards.
- `get_context_graph_neighborhood` must move both
  `idx_context_edges_source` and `idx_context_edges_target`.
- `search_code_with_neighbors` is the production bundled code-retrieval entry
  point (SECURITY DEFINER hybrid + neighborhood); keep it fast and validate it
  under an authenticated JWT context.
- Live-docs search must use the split RPC path (`search_fts_only` +
  `search_semantic_only`) or otherwise prove that the direct hybrid path does
  not regress. Direct `hybrid_search_code_segments` as `authenticated` can
  benchmark the wrong RLS context and look much slower than the definer
  production path.

## Gotchas

- Do not use `pg_stat_reset()` in local Supabase validation. It can be denied;
  snapshot `pg_stat_user_indexes` before and after the RPC calls instead.
- Do not call `kit.system_global_account_id()` after `SET ROLE authenticated`
  inside ad hoc SQL; use the application constant
  `00000000-0000-0000-0000-00000000d0c5` in caller SQL.
- Broad fixture terms like `synthetic` can match almost every seeded row, so
  Postgres may reasonably choose a sequential scan for FTS. Use a selective
  node term for index assertions.
- Keep schema and migration in sync. If SQL changes, use the normal diff
  workflow and finish with `pnpm supabase:web:diff:drift-check`.
