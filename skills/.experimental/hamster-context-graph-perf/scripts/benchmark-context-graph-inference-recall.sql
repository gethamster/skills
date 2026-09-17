-- =============================================================================
-- Context-graph similar-node HNSW recall benchmark.
--
-- The perf seed creates adjacent semantic node pairs with identical embeddings
-- and partial-overlap distractors at cosine similarity 0.5. This script checks
-- whether bounded HNSW exploration retrieves the known pair within the same
-- candidate fan-out used by infer_similar_nodes_batch.
--
-- Run after `pnpm seed:context-graph-perf`:
--   PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres \
--     -v ON_ERROR_STOP=1 \
--     -f .agents/skills/hamster-context-graph-perf/scripts/benchmark-context-graph-inference-recall.sql
--
-- Optional overrides:
--   -v recall_sample_size=200 -v candidate_limit=20 -v similarity_threshold=0.4
-- =============================================================================

\set ON_ERROR_STOP on
\timing on

\if :{?recall_sample_size}
\else
  \set recall_sample_size 200
\endif

\if :{?candidate_limit}
\else
  \set candidate_limit 20
\endif

\if :{?similarity_threshold}
\else
  \set similarity_threshold 0.4
\endif

SELECT id AS hamster_id FROM public.accounts WHERE slug = 'hamster' \gset

CREATE TEMP TABLE recall_sources (
  segment_class text NOT NULL,
  source_node_id uuid PRIMARY KEY,
  expected_node_id uuid NOT NULL,
  embedding extensions.vector(1024) NOT NULL
);

-- Use the odd-numbered member of each live pair as the source and its adjacent
-- even-numbered node as exact ground truth. Samples are spread across the full
-- corpus instead of taking only the first nodes inserted into HNSW.
WITH numbered AS (
  SELECT
    n.id,
    substring(n.node_key from '^synthetic-perf-([0-9]+)$')::bigint AS node_number,
    n.account_id
  FROM public.context_nodes n
  WHERE n.account_id = :'hamster_id'::uuid
    AND n.node_key ~ '^synthetic-perf-[0-9]+$'
    AND n.valid_to IS NULL
),
eligible AS (
  SELECT
    numbered.*,
    row_number() OVER (ORDER BY node_number) AS sample_rank,
    count(*) OVER () AS eligible_count
  FROM numbered
  WHERE node_number % 2 = 1
),
sampled AS (
  SELECT *
  FROM eligible
  WHERE sample_rank % greatest(eligible_count / :recall_sample_size, 1) = 1
  ORDER BY sample_rank
  LIMIT :recall_sample_size
)
INSERT INTO recall_sources (segment_class, source_node_id, expected_node_id, embedding)
SELECT
  'noncode',
  sampled.id,
  expected.id,
  source_segment.embedding
FROM sampled
JOIN public.context_nodes expected
  ON expected.account_id = sampled.account_id
 AND expected.node_key = 'synthetic-perf-' || (sampled.node_number + 1)::text
 AND expected.valid_to IS NULL
JOIN public.context_node_segments source_segment
  ON source_segment.node_id = sampled.id
 AND source_segment.sequence_number = 0;

WITH numbered AS (
  SELECT
    n.id,
    substring(n.node_key from '^synthetic-perf-code-([0-9]+)$')::bigint AS node_number,
    n.account_id
  FROM public.context_nodes n
  WHERE n.account_id = :'hamster_id'::uuid
    AND n.node_key ~ '^synthetic-perf-code-[0-9]+$'
    AND n.valid_to IS NULL
),
eligible AS (
  SELECT
    numbered.*,
    row_number() OVER (ORDER BY node_number) AS sample_rank,
    count(*) OVER () AS eligible_count
  FROM numbered
  WHERE node_number % 2 = 1
),
sampled AS (
  SELECT *
  FROM eligible
  WHERE sample_rank % greatest(eligible_count / :recall_sample_size, 1) = 1
  ORDER BY sample_rank
  LIMIT :recall_sample_size
)
INSERT INTO recall_sources (segment_class, source_node_id, expected_node_id, embedding)
SELECT
  'code',
  sampled.id,
  expected.id,
  source_segment.embedding
FROM sampled
JOIN public.context_nodes expected
  ON expected.account_id = sampled.account_id
 AND expected.node_key = 'synthetic-perf-code-' || (sampled.node_number + 1)::text
 AND expected.valid_to IS NULL
JOIN public.context_node_segments source_segment
  ON source_segment.node_id = sampled.id
 AND source_segment.sequence_number = 0;

CREATE TEMP TABLE recall_results (
  ef_search integer NOT NULL,
  segment_class text NOT NULL,
  source_node_id uuid NOT NULL,
  expected_node_id uuid NOT NULL,
  candidate_count integer NOT NULL,
  expected_pair_found boolean NOT NULL,
  best_similarity double precision
);

-- Each block retains a literal segment_type predicate so the planner can prove
-- the matching partial-index predicate. Do not collapse these into a dynamic
-- helper function: that can silently turn this into a sequential scan.
\echo ''
\echo 'Benchmarking ef_search = 48'
SELECT set_config('hnsw.ef_search', '48', false);

INSERT INTO recall_results
SELECT 48, source.segment_class, source.source_node_id, source.expected_node_id,
  coalesce(cardinality(ann.node_ids), 0),
  coalesce(source.expected_node_id = ANY (ann.node_ids), false),
  ann.best_similarity
FROM recall_sources source
LEFT JOIN LATERAL (
  SELECT
    array_agg(candidate.node_id ORDER BY candidate.distance) AS node_ids,
    max(1 - candidate.distance) AS best_similarity
  FROM (
    SELECT
      segment.node_id,
      segment.embedding OPERATOR(extensions.<=>) source.embedding AS distance
    FROM public.context_node_segments segment
    WHERE segment.account_id = :'hamster_id'::uuid
      AND segment.embedding IS NOT NULL
      AND segment.node_valid_to IS NULL
      AND segment.segment_type <> 'code_chunk'::public.context_segment_type
      AND segment.node_id <> source.source_node_id
    ORDER BY segment.embedding OPERATOR(extensions.<=>) source.embedding
    LIMIT :candidate_limit
  ) candidate
  WHERE 1 - candidate.distance >= :similarity_threshold
) ann ON source.segment_class = 'noncode'
WHERE source.segment_class = 'noncode';

INSERT INTO recall_results
SELECT 48, source.segment_class, source.source_node_id, source.expected_node_id,
  coalesce(cardinality(ann.node_ids), 0),
  coalesce(source.expected_node_id = ANY (ann.node_ids), false),
  ann.best_similarity
FROM recall_sources source
LEFT JOIN LATERAL (
  SELECT
    array_agg(candidate.node_id ORDER BY candidate.distance) AS node_ids,
    max(1 - candidate.distance) AS best_similarity
  FROM (
    SELECT
      segment.node_id,
      segment.embedding OPERATOR(extensions.<=>) source.embedding AS distance
    FROM public.context_node_segments segment
    WHERE segment.account_id = :'hamster_id'::uuid
      AND segment.embedding IS NOT NULL
      AND segment.node_valid_to IS NULL
      AND segment.segment_type = 'code_chunk'::public.context_segment_type
      AND segment.node_id <> source.source_node_id
    ORDER BY segment.embedding OPERATOR(extensions.<=>) source.embedding
    LIMIT :candidate_limit
  ) candidate
  WHERE 1 - candidate.distance >= :similarity_threshold
) ann ON source.segment_class = 'code'
WHERE source.segment_class = 'code';

\echo 'Benchmarking ef_search = 64'
SELECT set_config('hnsw.ef_search', '64', false);

INSERT INTO recall_results
SELECT 64, source.segment_class, source.source_node_id, source.expected_node_id,
  coalesce(cardinality(ann.node_ids), 0),
  coalesce(source.expected_node_id = ANY (ann.node_ids), false),
  ann.best_similarity
FROM recall_sources source
LEFT JOIN LATERAL (
  SELECT array_agg(candidate.node_id ORDER BY candidate.distance) AS node_ids,
    max(1 - candidate.distance) AS best_similarity
  FROM (
    SELECT segment.node_id,
      segment.embedding OPERATOR(extensions.<=>) source.embedding AS distance
    FROM public.context_node_segments segment
    WHERE segment.account_id = :'hamster_id'::uuid
      AND segment.embedding IS NOT NULL
      AND segment.node_valid_to IS NULL
      AND segment.segment_type <> 'code_chunk'::public.context_segment_type
      AND segment.node_id <> source.source_node_id
    ORDER BY segment.embedding OPERATOR(extensions.<=>) source.embedding
    LIMIT :candidate_limit
  ) candidate
  WHERE 1 - candidate.distance >= :similarity_threshold
) ann ON source.segment_class = 'noncode'
WHERE source.segment_class = 'noncode';

INSERT INTO recall_results
SELECT 64, source.segment_class, source.source_node_id, source.expected_node_id,
  coalesce(cardinality(ann.node_ids), 0),
  coalesce(source.expected_node_id = ANY (ann.node_ids), false),
  ann.best_similarity
FROM recall_sources source
LEFT JOIN LATERAL (
  SELECT array_agg(candidate.node_id ORDER BY candidate.distance) AS node_ids,
    max(1 - candidate.distance) AS best_similarity
  FROM (
    SELECT segment.node_id,
      segment.embedding OPERATOR(extensions.<=>) source.embedding AS distance
    FROM public.context_node_segments segment
    WHERE segment.account_id = :'hamster_id'::uuid
      AND segment.embedding IS NOT NULL
      AND segment.node_valid_to IS NULL
      AND segment.segment_type = 'code_chunk'::public.context_segment_type
      AND segment.node_id <> source.source_node_id
    ORDER BY segment.embedding OPERATOR(extensions.<=>) source.embedding
    LIMIT :candidate_limit
  ) candidate
  WHERE 1 - candidate.distance >= :similarity_threshold
) ann ON source.segment_class = 'code'
WHERE source.segment_class = 'code';

\echo 'Benchmarking ef_search = 100'
SELECT set_config('hnsw.ef_search', '100', false);

INSERT INTO recall_results
SELECT 100, source.segment_class, source.source_node_id, source.expected_node_id,
  coalesce(cardinality(ann.node_ids), 0),
  coalesce(source.expected_node_id = ANY (ann.node_ids), false),
  ann.best_similarity
FROM recall_sources source
LEFT JOIN LATERAL (
  SELECT array_agg(candidate.node_id ORDER BY candidate.distance) AS node_ids,
    max(1 - candidate.distance) AS best_similarity
  FROM (
    SELECT segment.node_id,
      segment.embedding OPERATOR(extensions.<=>) source.embedding AS distance
    FROM public.context_node_segments segment
    WHERE segment.account_id = :'hamster_id'::uuid
      AND segment.embedding IS NOT NULL
      AND segment.node_valid_to IS NULL
      AND segment.segment_type <> 'code_chunk'::public.context_segment_type
      AND segment.node_id <> source.source_node_id
    ORDER BY segment.embedding OPERATOR(extensions.<=>) source.embedding
    LIMIT :candidate_limit
  ) candidate
  WHERE 1 - candidate.distance >= :similarity_threshold
) ann ON source.segment_class = 'noncode'
WHERE source.segment_class = 'noncode';

INSERT INTO recall_results
SELECT 100, source.segment_class, source.source_node_id, source.expected_node_id,
  coalesce(cardinality(ann.node_ids), 0),
  coalesce(source.expected_node_id = ANY (ann.node_ids), false),
  ann.best_similarity
FROM recall_sources source
LEFT JOIN LATERAL (
  SELECT array_agg(candidate.node_id ORDER BY candidate.distance) AS node_ids,
    max(1 - candidate.distance) AS best_similarity
  FROM (
    SELECT segment.node_id,
      segment.embedding OPERATOR(extensions.<=>) source.embedding AS distance
    FROM public.context_node_segments segment
    WHERE segment.account_id = :'hamster_id'::uuid
      AND segment.embedding IS NOT NULL
      AND segment.node_valid_to IS NULL
      AND segment.segment_type = 'code_chunk'::public.context_segment_type
      AND segment.node_id <> source.source_node_id
    ORDER BY segment.embedding OPERATOR(extensions.<=>) source.embedding
    LIMIT :candidate_limit
  ) candidate
  WHERE 1 - candidate.distance >= :similarity_threshold
) ann ON source.segment_class = 'code'
WHERE source.segment_class = 'code';

\echo ''
\echo 'Recall summary (known exact semantic partner within candidate fan-out)'
SELECT
  ef_search,
  segment_class,
  count(*) AS samples,
  round(100.0 * avg(expected_pair_found::int), 2) AS paired_recall_pct,
  round(avg(candidate_count), 2) AS avg_candidates,
  round(min(best_similarity)::numeric, 4) AS worst_best_similarity
FROM recall_results
GROUP BY ef_search, segment_class
ORDER BY ef_search, segment_class;

SELECT set_config('validate.similarity_threshold', :'similarity_threshold', false);

DO $$
DECLARE
  v_empty integer;
  v_low_quality integer;
  v_similarity_threshold double precision :=
    current_setting('validate.similarity_threshold')::double precision;
BEGIN
  SELECT count(*) INTO v_empty
  FROM recall_results
  WHERE candidate_count = 0;

  SELECT count(*) INTO v_low_quality
  FROM recall_results
  WHERE best_similarity <= v_similarity_threshold;

  IF v_empty > 0 THEN
    RAISE EXCEPTION 'FAIL: % sampled searches returned no above-threshold candidates', v_empty;
  END IF;

  IF v_low_quality > 0 THEN
    RAISE EXCEPTION 'FAIL: % sampled searches returned only low-quality candidates', v_low_quality;
  END IF;

  RAISE NOTICE 'PASS: every sampled search returned candidates above similarity threshold %',
    v_similarity_threshold;
END $$;
