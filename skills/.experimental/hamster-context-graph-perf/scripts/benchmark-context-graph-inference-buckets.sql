-- =============================================================================
-- Context-graph inference latency benchmark for every production source bucket.
--
-- Run after `pnpm seed:context-graph-perf`:
--   PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres \
--     -v ON_ERROR_STOP=1 \
--     -f .agents/skills/hamster-context-graph-perf/scripts/benchmark-context-graph-inference-buckets.sql
--
-- Optional overrides:
--   -v source_limit=8 -v max_duration_ms=10000
-- Without an override, exercises the production 32 -> 8 -> 1 fallback chain.
-- =============================================================================

\set ON_ERROR_STOP on
\timing on

\if :{?source_limit}
  \set source_limits :source_limit
\else
  \set source_limits '32,8,1'
\endif

\if :{?max_duration_ms}
\else
  \set max_duration_ms 10000
\endif

select id as hamster_id from public.accounts where slug = 'hamster' \gset
select u.id as test_user_id
from auth.users u
join public.accounts_memberships m on m.user_id = u.id
where m.account_id = :'hamster_id'::uuid
  and u.email = 'test@tryhamster.com'
limit 1 \gset

begin;
delete from public.context_graph_inference_cursors
where account_id = :'hamster_id'::uuid;

select set_config(
  'request.jwt.claims',
  jsonb_build_object('sub', :'test_user_id', 'role', 'authenticated')::text,
  true
);
select set_config('validate.hamster_id', :'hamster_id', true);
select set_config('validate.source_limits', :'source_limits', true);
select set_config('validate.max_duration_ms', :'max_duration_ms', true);
set local role authenticated;

do $$
declare
  v_bucket text;
  v_max_results integer;
  v_source_limit integer;
  v_started_at timestamptz;
  v_duration_ms numeric;
  v_pair_count integer;
begin
  foreach v_source_limit in array string_to_array(
    current_setting('validate.source_limits'),
    ','
  )::integer[]
  loop
    for v_bucket, v_max_results in
      values
        ('changed', 400),
        ('blueprint', 400),
        ('brief', 500),
        ('recent', 250)
    loop
      v_started_at := clock_timestamp();

      select count(*) into v_pair_count
      from public.infer_similar_nodes_batch(
        current_setting('validate.hamster_id')::uuid,
        v_bucket,
        0.4,
        v_max_results,
        v_source_limit
      );

      v_duration_ms := extract(
        epoch from clock_timestamp() - v_started_at
      ) * 1000;

      if v_duration_ms > current_setting('validate.max_duration_ms')::numeric then
        raise exception
          'FAIL: % inference at source limit % took % ms, exceeding % ms budget',
          v_bucket,
          v_source_limit,
          round(v_duration_ms, 2),
          current_setting('validate.max_duration_ms');
      end if;

      raise notice
        'PASS: % inference processed up to % sources, returned % pairs in % ms',
        v_bucket,
        v_source_limit,
        v_pair_count,
        round(v_duration_ms, 2);
    end loop;
  end loop;
end $$;

rollback;
