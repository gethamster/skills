-- =============================================================================
-- Context-graph RPC index validation.
--
-- Run after:
--   pnpm supabase:web:reset
--   pnpm seed:context-graph-perf
--   (cd apps/web && bun supabase/scripts/backfill-context-graph-inference-sources.ts --env local --apply)
--   psql ... -f apps/web/supabase/scripts/validate-context-graph-perf.sql
--
-- This script avoids pg_stat_reset(); local Supabase may deny it. Instead it
-- snapshots pg_stat_user_indexes before/after the RPC calls and asserts deltas.
-- =============================================================================

\set ON_ERROR_STOP on
\timing on

\echo ''
\echo '============================================================'
\echo 'Context-graph RPC index validation'
\echo '============================================================'

SELECT id AS hamster_id FROM public.accounts WHERE slug = 'hamster' \gset
SELECT u.id AS test_user_id
FROM auth.users u
JOIN public.accounts_memberships m ON m.user_id = u.id
WHERE m.account_id = :'hamster_id'::uuid AND u.email = 'test@tryhamster.com'
LIMIT 1 \gset

\echo ''
\echo '--- Function security modes ---'
SELECT
  p.proname,
  CASE WHEN p.prosecdef THEN 'definer' ELSE 'invoker' END AS security_mode
FROM pg_proc p
JOIN pg_namespace n ON n.oid = p.pronamespace
WHERE n.nspname = 'public'
  AND p.proname IN (
    'search_fts_only',
    'search_semantic_only',
    'get_context_graph_neighborhood',
    'hybrid_search_code_segments',
    'match_code_segments',
    'search_code_with_neighbors'
  )
ORDER BY p.proname;

CREATE TEMP TABLE validation_index_baseline AS
SELECT indexrelname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
  AND indexrelname IN (
    'idx_context_nodes_live_recent_docs_by_type',
    'idx_context_node_segments_fts',
    'idx_context_node_segments_fts_live',
    'idx_context_node_segments_noncode_embedding_hnsw',
    'idx_context_node_segments_code_embedding_hnsw',
    'idx_context_edges_source',
    'idx_context_edges_target'
  );

\echo ''
\echo '--- Authenticated production-ish RPC calls ---'
BEGIN;
SELECT set_config(
  'request.jwt.claims',
  jsonb_build_object('sub', :'test_user_id', 'role', 'authenticated')::text,
  true
);
SET LOCAL ROLE authenticated;

\echo 'search_fts_only selective rows'
SELECT count(*) AS rows_returned
FROM public.search_fts_only(:'hamster_id'::uuid, 'synthetic-perf-12345', 20);

\echo 'search_semantic_only rows'
WITH q AS (
  SELECT array_agg((random() * 2 - 1)::real)::extensions.vector(1024) AS embedding
  FROM generate_series(1, 1024)
)
SELECT count(*) AS rows_returned
FROM q, public.search_semantic_only(:'hamster_id'::uuid, q.embedding, 20);

\echo 'match_code_segments rows'
WITH q AS (
  SELECT array_agg((random() * 2 - 1)::real)::extensions.vector(1024) AS embedding
  FROM generate_series(1, 1024)
)
SELECT count(*) AS rows_returned
FROM q, public.match_code_segments(:'hamster_id'::uuid, q.embedding, -1.0, 20);

\echo 'get_context_graph_neighborhood rows'
WITH seed_nodes AS (
  SELECT n.id
  FROM public.context_nodes n
  WHERE n.account_id = :'hamster_id'::uuid
    AND n.node_key LIKE 'synthetic-perf-%'
    AND n.valid_to IS NULL
    AND EXISTS (
      SELECT 1
      FROM public.context_edges e
      WHERE e.source_node_id = n.id OR e.target_node_id = n.id
    )
  LIMIT 50
)
SELECT count(*) AS rows_returned
FROM public.get_context_graph_neighborhood(:'hamster_id'::uuid, (SELECT array_agg(id) FROM seed_nodes));

\echo 'search_code_with_neighbors code search (must move the code partial HNSW index)'
WITH q AS (
  SELECT array_agg((random() * 2 - 1)::real)::extensions.vector(1024) AS embedding
  FROM generate_series(1, 1024)
)
SELECT jsonb_array_length(public.search_code_with_neighbors(
  :'hamster_id'::uuid,
  'export function',
  q.embedding,
  20,
  1.0,
  1.0,
  ARRAY['code_file', 'code_symbol']
) -> 'hits') AS rows_returned
FROM q;

\echo 'home prefetch recent brief rows'
SELECT count(*) AS rows_returned
FROM (
  SELECT n.title, n.valid_from
  FROM public.context_nodes n
  WHERE n.account_id = :'hamster_id'::uuid
    AND n.node_kind = 'document'
    AND n.source_document_type = 'brief'
    AND n.valid_to IS NULL
    AND n.title IS NOT NULL
  ORDER BY n.valid_from DESC
  LIMIT 5
) recent_briefs;

\echo 'home prefetch recent blueprint rows'
SELECT count(*) AS rows_returned
FROM (
  SELECT n.title, n.valid_from
  FROM public.context_nodes n
  WHERE n.account_id = :'hamster_id'::uuid
    AND n.node_kind = 'document'
    AND n.source_document_type = 'blueprint'
    AND n.valid_to IS NULL
    AND n.title IS NOT NULL
  ORDER BY n.valid_from DESC
  LIMIT 5
) recent_blueprints;

COMMIT;
SELECT pg_stat_force_next_flush();

\echo ''
CREATE TEMP TABLE validation_inference_projection_state AS
SELECT exists (
  SELECT 1
  FROM kit.context_graph_inference_source_backfill_state
  WHERE singleton
) AS active;

\echo '--- Similar-node inference production batch ---'
CREATE TEMP TABLE validation_inference_index_baseline AS
SELECT indexrelname, idx_scan, idx_tup_read
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
  AND indexrelname IN (
    'idx_context_node_segments_noncode_embedding_hnsw',
    'idx_context_node_segments_code_embedding_hnsw',
    'idx_context_graph_inference_sources_changed',
    'idx_context_graph_inference_sources_recent',
    'idx_context_graph_inference_sources_document'
  );

BEGIN;
SELECT set_config(
  'request.jwt.claims',
  jsonb_build_object('sub', :'test_user_id', 'role', 'authenticated')::text,
  true
);
SELECT set_config('validate.hamster_id', :'hamster_id', true);
SET LOCAL ROLE authenticated;

DO $$
DECLARE
  v_pair_count integer;
BEGIN
  SELECT count(*) INTO v_pair_count
  FROM public.infer_similar_nodes_batch(
    current_setting('validate.hamster_id')::uuid,
    'recent',
    0.4,
    400,
    32
  );

  IF v_pair_count <= 0 OR v_pair_count > 400 THEN
    RAISE EXCEPTION 'FAIL: expected 1..400 similar-node pairs, got %', v_pair_count;
  END IF;

  RAISE NOTICE 'PASS: production inference batch returned % pairs', v_pair_count;
END $$;

DO $$
DECLARE
  v_bucket text;
BEGIN
  FOREACH v_bucket IN ARRAY ARRAY['changed', 'blueprint', 'brief']
  LOOP
    PERFORM count(*)
    FROM public.infer_similar_nodes_batch(
      current_setting('validate.hamster_id')::uuid,
      v_bucket,
      1.0,
      1,
      1
    );
  END LOOP;
END $$;

DO $$
BEGIN
  IF NOT public.has_pending_context_graph_inference_sources(
    current_setting('validate.hamster_id')::uuid
  ) THEN
    RAISE EXCEPTION 'FAIL: expected changed-source backlog while validating the recent bucket';
  END IF;

  RAISE NOTICE 'PASS: inference reports pending changed-source work';
END $$;
ROLLBACK;
SELECT pg_stat_force_next_flush();

CREATE TEMP TABLE validation_inference_index_deltas AS
SELECT
  s.indexrelname,
  s.idx_scan - coalesce(b.idx_scan, 0) AS idx_scan_delta,
  s.idx_tup_read - coalesce(b.idx_tup_read, 0) AS idx_tup_read_delta
FROM pg_stat_user_indexes s
LEFT JOIN validation_inference_index_baseline b USING (indexrelname)
WHERE s.schemaname = 'public'
  AND s.indexrelname IN (
    'idx_context_node_segments_noncode_embedding_hnsw',
    'idx_context_node_segments_code_embedding_hnsw',
    'idx_context_graph_inference_sources_changed',
    'idx_context_graph_inference_sources_recent',
    'idx_context_graph_inference_sources_document'
  )
ORDER BY s.indexrelname;

SELECT * FROM validation_inference_index_deltas;

DO $$
DECLARE
  v_noncode_scans bigint;
  v_code_scans bigint;
  v_projection_active boolean;
  v_changed_source_scans bigint;
  v_recent_source_scans bigint;
  v_document_source_scans bigint;
BEGIN
  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_noncode_scans
  FROM validation_inference_index_deltas
  WHERE indexrelname = 'idx_context_node_segments_noncode_embedding_hnsw';

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_code_scans
  FROM validation_inference_index_deltas
  WHERE indexrelname = 'idx_context_node_segments_code_embedding_hnsw';

  SELECT active INTO v_projection_active
  FROM validation_inference_projection_state;

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_changed_source_scans
  FROM validation_inference_index_deltas
  WHERE indexrelname = 'idx_context_graph_inference_sources_changed';

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_recent_source_scans
  FROM validation_inference_index_deltas
  WHERE indexrelname = 'idx_context_graph_inference_sources_recent';

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_document_source_scans
  FROM validation_inference_index_deltas
  WHERE indexrelname = 'idx_context_graph_inference_sources_document';

  IF v_noncode_scans NOT BETWEEN 1 AND 35 OR v_code_scans NOT BETWEEN 1 AND 35 THEN
    RAISE EXCEPTION 'FAIL: expected 1-35 scans per partial HNSW index (32-source production call plus three one-source bucket probes; non-code %, code %)',
      v_noncode_scans, v_code_scans;
  END IF;

  IF v_projection_active THEN
    IF v_changed_source_scans < 2
      OR v_recent_source_scans < 1
      OR v_document_source_scans < 2 THEN
      RAISE EXCEPTION 'FAIL: projected source indexes missed a bucket (changed page + pending probe %, recent %, document %)',
        v_changed_source_scans, v_recent_source_scans, v_document_source_scans;
    END IF;
    RAISE NOTICE 'PASS: every projected source bucket used its tenant-leading index';
  ELSE
    RAISE EXCEPTION 'FAIL: projection completion marker absent; activate the local backfill before validating indexes';
  END IF;

  RAISE NOTICE 'PASS: similar-node inference used both partial HNSW indexes within the expected production-plus-probe bound';
END $$;

\echo ''
\echo '--- Live-docs rollback smoke test ---'
BEGIN;
WITH inserted_nodes AS (
  INSERT INTO public.context_nodes (
    account_id,
    node_kind,
    node_key,
    title,
    source_table,
    source_record_id,
    metadata
  ) VALUES
    (
      kit.system_global_account_id(),
      'doc_page'::public.context_node_kind,
      'validation-live-doc-page-a',
      'Validation Live Doc Page A',
      'live_docs',
      'validation-live-doc-page-a',
      '{"url":"https://docs.tryhamster.com/validation/a","section":"Validation"}'::jsonb
    ),
    (
      kit.system_global_account_id(),
      'doc_page'::public.context_node_kind,
      'validation-live-doc-page-b',
      'Validation Live Doc Page B',
      'live_docs',
      'validation-live-doc-page-b',
      '{"url":"https://docs.tryhamster.com/validation/b","section":"Validation"}'::jsonb
    )
  ON CONFLICT (account_id, node_kind, node_key) DO UPDATE
    SET title = excluded.title,
        source_table = excluded.source_table,
        source_record_id = excluded.source_record_id,
        metadata = excluded.metadata,
        valid_to = null
  RETURNING id, account_id, node_key
)
INSERT INTO public.context_node_segments (
  account_id,
  node_id,
  segment_type,
  sequence_number,
  content,
  content_preview,
  embedding,
  embedding_model,
  embedding_generated_at,
  heading,
  metadata
)
SELECT
  n.account_id,
  n.id,
  'live_doc_chunk'::public.context_segment_type,
  0,
  'Codex validation live docs retrieval checks split search and match RPC behaviour for system nodes ' || n.node_key,
  'Codex validation live docs retrieval',
  array_fill(0.1::real, ARRAY[1024])::extensions.vector(1024),
  'validation-model',
  now(),
  'Validation',
  jsonb_build_object('url', 'https://docs.tryhamster.com/validation/' || right(n.node_key, 1))
FROM inserted_nodes n
ON CONFLICT (node_id, segment_type, sequence_number) DO UPDATE
  SET content = excluded.content,
      content_preview = excluded.content_preview,
      embedding = excluded.embedding,
      embedding_model = excluded.embedding_model,
      embedding_generated_at = excluded.embedding_generated_at,
      heading = excluded.heading,
      metadata = excluded.metadata;

SELECT set_config(
  'request.jwt.claims',
  jsonb_build_object('sub', '00000000-0000-0000-0000-00000000d0c5', 'role', 'authenticated')::text,
  true
);
SET LOCAL ROLE authenticated;

\echo 'live-docs search_fts_only rows'
SELECT count(*) AS rows_returned
FROM public.search_fts_only(
  '00000000-0000-0000-0000-00000000d0c5'::uuid,
  'codex validation retrieval',
  5,
  ARRAY['doc_page'],
  ARRAY['live_doc_chunk'],
  null,
  null,
  null,
  true
)
WHERE node_kind = 'doc_page'::public.context_node_kind
  AND segment_type = 'live_doc_chunk'::public.context_segment_type
  AND node_key LIKE 'validation-live-doc-page-%';

\echo 'live-docs search_semantic_only rows'
SELECT count(*) AS rows_returned
FROM public.search_semantic_only(
  '00000000-0000-0000-0000-00000000d0c5'::uuid,
  array_fill(0.1::real, ARRAY[1024])::extensions.vector(1024),
  5,
  ARRAY['doc_page'],
  ARRAY['live_doc_chunk'],
  null,
  null,
  null,
  true
)
WHERE node_kind = 'doc_page'::public.context_node_kind
  AND segment_type = 'live_doc_chunk'::public.context_segment_type
  AND node_key LIKE 'validation-live-doc-page-%';

ROLLBACK;
SELECT pg_stat_force_next_flush();

\echo ''
\echo '--- Index scan deltas ---'
CREATE TEMP TABLE validation_index_deltas AS
SELECT
  s.indexrelname,
  s.idx_scan - coalesce(b.idx_scan, 0) AS idx_scan_delta,
  s.idx_tup_read - coalesce(b.idx_tup_read, 0) AS idx_tup_read_delta,
  s.idx_tup_fetch - coalesce(b.idx_tup_fetch, 0) AS idx_tup_fetch_delta
FROM pg_stat_user_indexes s
LEFT JOIN validation_index_baseline b USING (indexrelname)
WHERE s.schemaname = 'public'
  AND s.indexrelname IN (
    'idx_context_nodes_live_recent_docs_by_type',
    'idx_context_node_segments_fts',
    'idx_context_node_segments_fts_live',
    'idx_context_node_segments_noncode_embedding_hnsw',
    'idx_context_node_segments_code_embedding_hnsw',
    'idx_context_edges_source',
    'idx_context_edges_target'
  )
ORDER BY s.indexrelname;

SELECT * FROM validation_index_deltas;

\echo ''
\echo '--- Assertions ---'
DO $$
DECLARE
  v_fts bigint;
  v_hnsw bigint;
  v_code_hnsw bigint;
  v_edge_source bigint;
  v_edge_target bigint;
  v_prefetch_docs bigint;
BEGIN
  -- The live FTS hot path may use either the base GIN or the partial
  -- live-only GIN added in 63-context-graph-search-tuning.sql; both count.
  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_fts
  FROM validation_index_deltas
  WHERE indexrelname in ('idx_context_node_segments_fts', 'idx_context_node_segments_fts_live');

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_hnsw
  FROM validation_index_deltas
  WHERE indexrelname = 'idx_context_node_segments_noncode_embedding_hnsw';

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_code_hnsw
  FROM validation_index_deltas
  WHERE indexrelname = 'idx_context_node_segments_code_embedding_hnsw';

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_edge_source
  FROM validation_index_deltas
  WHERE indexrelname = 'idx_context_edges_source';

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_edge_target
  FROM validation_index_deltas
  WHERE indexrelname = 'idx_context_edges_target';

  SELECT coalesce(sum(idx_scan_delta), 0) INTO v_prefetch_docs
  FROM validation_index_deltas
  WHERE indexrelname = 'idx_context_nodes_live_recent_docs_by_type';

  IF v_fts < 1 THEN
    RAISE EXCEPTION 'FAIL: FTS index was not scanned';
  END IF;
  IF v_hnsw < 1 THEN
    RAISE EXCEPTION 'FAIL: non-code HNSW index was not scanned';
  END IF;
  IF v_code_hnsw < 1 THEN
    RAISE EXCEPTION 'FAIL: code HNSW index (idx_context_node_segments_code_embedding_hnsw) was not scanned — code search likely fell back onto the shared/non-code index';
  END IF;
  IF v_edge_source < 1 THEN
    RAISE EXCEPTION 'FAIL: source edge index was not scanned';
  END IF;
  IF v_edge_target < 1 THEN
    RAISE EXCEPTION 'FAIL: target edge index was not scanned';
  END IF;
  IF v_prefetch_docs < 1 THEN
    RAISE EXCEPTION 'FAIL: home prefetch recent docs index was not scanned';
  END IF;

  RAISE NOTICE 'PASS: observed expected FTS, non-code HNSW, code HNSW, edge, and home-prefetch index scans';
END $$;

\echo ''
\echo '============================================================'
\echo 'Context-graph RPC index validation passed.'
\echo '============================================================'
