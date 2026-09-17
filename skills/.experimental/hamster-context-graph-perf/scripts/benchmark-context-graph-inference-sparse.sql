-- =============================================================================
-- Context-graph low-similarity inference benchmark.
--
-- The perf seed places orthogonal sparse embeddings at the front of the
-- changed-source bucket. This is the adversarial shape for ANN queries that
-- try to satisfy a similarity predicate while traversing HNSW: no qualifying
-- row exists, so work must remain bounded by nearest-candidate fan-out.
--
-- Run after `pnpm seed:context-graph-perf`:
--   PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres \
--     -v ON_ERROR_STOP=1 \
--     -f .agents/skills/hamster-context-graph-perf/scripts/benchmark-context-graph-inference-sparse.sql
--
-- Optional overrides:
--   -v source_limit=32 -v max_duration_ms=10000
-- =============================================================================

\set ON_ERROR_STOP on
\timing on

\if :{?source_limit}
\else
  \set source_limit 32
\endif

\if :{?max_duration_ms}
\else
  \set max_duration_ms 10000
\endif

SELECT id AS hamster_id FROM public.accounts WHERE slug = 'hamster' \gset
SELECT u.id AS test_user_id
FROM auth.users u
JOIN public.accounts_memberships m ON m.user_id = u.id
WHERE m.account_id = :'hamster_id'::uuid
  AND u.email = 'test@tryhamster.com'
LIMIT 1 \gset

SELECT set_config('validate.hamster_id', :'hamster_id', false);
SELECT set_config('validate.source_limit', :'source_limit', false);
SELECT set_config('validate.max_duration_ms', :'max_duration_ms', false);

DO $$
DECLARE
  v_sparse_count integer;
BEGIN
  SELECT count(*) INTO v_sparse_count
  FROM public.context_nodes n
  JOIN public.context_node_segments s ON s.node_id = n.id
  WHERE n.account_id = current_setting('validate.hamster_id')::uuid
    AND n.node_key LIKE 'synthetic-perf-sparse-%'
    AND n.valid_to IS NULL
    AND s.node_valid_to IS NULL
    AND s.embedding IS NOT NULL;

  IF v_sparse_count < current_setting('validate.source_limit')::integer THEN
    RAISE EXCEPTION
      'FAIL: sparse fixture has % sources, fewer than requested source_limit %',
      v_sparse_count,
      current_setting('validate.source_limit');
  END IF;
END $$;

BEGIN;
DELETE FROM public.context_graph_inference_cursors
WHERE account_id = :'hamster_id'::uuid
  AND source_bucket = 'changed';

SELECT set_config(
  'request.jwt.claims',
  jsonb_build_object('sub', :'test_user_id', 'role', 'authenticated')::text,
  true
);
SELECT set_config('validate.hamster_id', :'hamster_id', true);
SELECT set_config('validate.source_limit', :'source_limit', true);
SELECT set_config('validate.max_duration_ms', :'max_duration_ms', true);
SET LOCAL ROLE authenticated;

DO $$
DECLARE
  v_started_at timestamptz := clock_timestamp();
  v_duration_ms numeric;
  v_pair_count integer;
BEGIN
  SELECT count(*) INTO v_pair_count
  FROM public.infer_similar_nodes_batch(
    current_setting('validate.hamster_id')::uuid,
    'changed',
    0.4,
    400,
    current_setting('validate.source_limit')::integer
  );

  v_duration_ms := extract(
    epoch FROM clock_timestamp() - v_started_at
  ) * 1000;

  IF v_pair_count <> 0 THEN
    RAISE EXCEPTION
      'FAIL: expected zero above-threshold pairs for sparse sources, got %',
      v_pair_count;
  END IF;

  IF v_duration_ms > current_setting('validate.max_duration_ms')::numeric THEN
    RAISE EXCEPTION
      'FAIL: sparse inference took % ms, exceeding % ms budget',
      round(v_duration_ms, 2),
      current_setting('validate.max_duration_ms');
  END IF;

  RAISE NOTICE
    'PASS: sparse inference processed % sources with zero weak pairs in % ms',
    current_setting('validate.source_limit'),
    round(v_duration_ms, 2);
END $$;

ROLLBACK;
