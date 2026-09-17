---
name: hamster-posthog-dashboards
description: "Use this skill whenever the user asks to review, analyse, investigate, duplicate, or build a PostHog dashboard for Hamster Studio. Drives the workflow that turns a dashboard ID (or a request to build one) into a snapshot, an analysis report, and prioritised follow-ups. Captures the doc structure (`posthog-reports/`, `posthog-snapshots/`, `posthog-insights-scope.md`, `posthog-insights-progress.md`, `posthog-events-inventory.md`) and the scripts in `packages/glass-box/scripts/`."
---

# hamster-posthog-dashboards

This skill is the contract between Claude and the PostHog dashboard analysis system in Hamster Studio. When the user references a dashboard ID, asks to "review," "investigate," "build," "duplicate," or "compare" a dashboard, or asks to spawn a follow-up analysis, follow the patterns below.

## When to invoke

- "Review dashboard `<id>`" / "look at dashboard `<id>`" / "what's in `<id>`?"
- "Pull data from `<id>`" / "compare against the spec" / "is this dashboard right?"
- "Investigate `<finding>` from the LLM cost dashboard"
- "Duplicate dashboard `<id>` to dev" / "promote this dashboard to prod"
- "Build a new dashboard for `<topic>`"
- "What's our LLM cost looking like?" (implies pulling current data + writing/updating a report)

## When NOT to invoke

- The user is talking about Mixpanel or Segment dashboards — this skill is PostHog-specific.
- The user is asking about analytics *event instrumentation* in code (use `hamster-analytics` instead).
- The user wants raw event-level data for one user to debug a bug — use the glass-box `PostHogClient` directly via `packages/glass-box/replay/utils/posthog_client.py` rather than going through this skill's report workflow.

## The doc structure (read before doing anything)

Five surfaces, each with one job:

| Surface | Purpose | Path |
| --- | --- | --- |
| Spec | What dashboards we want, with PostHog AI prompts | `docs/architecture/posthog-insights-scope.md` |
| Inventory | Typed catalog + drift | `docs/architecture/posthog-events-inventory.md` |
| Status board | One row per dashboard with link to latest report | `docs/architecture/posthog-insights-progress.md` |
| Snapshots | Raw data — definitions + cached results from PostHog | `docs/architecture/posthog-snapshots/<id>.{md,json}` |
| Reports | **Distilled analysis chains, per topic** | `packages/glass-box/data/posthog-reports/<topic>/<NNN>-<slug>.md` |

**Never put numbers or per-tile reviews in the spec or status board.** They go in reports.
**Never edit a snapshot file by hand.** They are written by the inspector script.
**Never edit a report after it has been issued (status `action-items-issued` or later).** Write a new numbered report instead. Reports are append-only.

The full structure plus templates is documented in `packages/glass-box/data/posthog-reports/README.md` and the topic READMEs.

## The scripts

Both live in `packages/glass-box/scripts/` and use `.env.<env>` files populated by `pnpm get-env-qa`. Each needs `POSTHOG_DASHBOARD_API_KEY` (personal API key with `dashboard:read`, `insight:read` minimum; `dashboard:write` and `insight:write` for duplication) and `POSTHOG_PROJECT_ID` (or `POSTHOG_PROD_PROJECT_ID`).

### inspect_posthog_dashboard.py — fetch + render

The primary tool. Pulls a dashboard via the dashboards API, which already returns each tile's *cached computed result* alongside the definition — so a single GET gives you both definitions and numbers. No HogQL execution needed.

```bash
cd packages/glass-box
uv run python scripts/inspect_posthog_dashboard.py --env <env> --dashboard-id <id>
```

Writes:

- `docs/architecture/posthog-snapshots/<id>.md` — reviewable summary with HogQL results as markdown tables, Trends as per-series tables, Funnels as step-count tables. Definitions in collapsed `<details>` blocks.
- `docs/architecture/posthog-snapshots/<id>.json` — raw API response. Source of truth when extracting specific values; `result` field on each insight contains the cached numbers.

Flags:

- `--env <local|dev|tux|prod>` (required)
- `--dashboard-id <int>` (required)
- `--out <path>` — override default md path
- `--no-json` — skip the `.json` sidecar (don't usually do this; the JSON is needed for value extraction)
- `--no-results` — definitions only, faster, smaller. Use for a sanity check before a full snapshot.
- `--stdout` — print to stdout instead of writing files. Use for quick eyeballing.

### duplicate_posthog_dashboard.py — clone across environments

Recreates a dashboard (with all insight tiles) in a different PostHog project. Used to promote tux dashboards to prod, or to seed a new project. Idempotent — skips if a dashboard with the same name already exists in the target.

```bash
cd packages/glass-box
uv run python scripts/duplicate_posthog_dashboard.py \
    --source <env> --target <env> --dashboard-id <id> [--target-name "..."] [--dry-run]
```

Limitations:

- Text tiles are skipped (warned).
- Tile layout is not replayed; PostHog falls back to default grid.
- Cross-project duplication recreates resources; the source dashboard is not modified.

### What does NOT exist (yet — propose adding when needed)

- A "list dashboards in env X" command. Use the PostHog UI for discovery.
- A "search dashboards by name" command. Same.
- A "delete dashboard" command. Use the PostHog UI; investigation dashboards stay around.
- A direct HogQL execution helper for ad-hoc queries against a dashboard's underlying data. The `PostHogClient` in `packages/glass-box/replay/utils/posthog_client.py` has a `.query(hogql)` method — use it for one-off questions, not for tile data (tile data is already cached in the dashboard JSON).

## The standard workflows

### Workflow A — User gives Claude a new dashboard ID

1. **Run the inspector.** `uv run python scripts/inspect_posthog_dashboard.py --env <env> --dashboard-id <id>` from `packages/glass-box`.
2. **Read the snapshot.** Open `docs/architecture/posthog-snapshots/<id>.md` and skim. Note the dashboard name, tile count, and which spec section it likely belongs to.
3. **Identify the topic.** Look at the dashboard name and tile content. Match against §1 of `posthog-insights-progress.md`. If the dashboard maps to an existing topic (`llm-cost`, `activation`, `monetization`, `tracking-quality`, …), use that topic folder. If it doesn't, create a new topic folder under `packages/glass-box/data/posthog-reports/<topic>/` with a `README.md` based on an existing one.
4. **Determine the report number.** Look in the topic folder for the highest existing `NNN-*.md`. The new report is `NNN+1`. The first report in any chain is always `001-baseline.md`.
5. **Write the report.** Copy `packages/glass-box/data/posthog-reports/_TEMPLATE.md` into the new file, fill in YAML frontmatter, then walk each tile and write findings. The frontmatter `parent_report` is `none` for a baseline; it's the path to the previous report when a new one supersedes or extends it.
6. **Update the topic README.** Add a row to its "Reports" table; update the rolled-up "Open action items" with new P0/P1 entries.
7. **Update the status board.** Edit `posthog-insights-progress.md` §1 — update the row for the topic with the new report link, status, and P0/P1 counts.
8. **If a finding implies a cross-cutting gap** (instrumentation that affects multiple dashboards), add a row to `posthog-insights-progress.md` §2 *Cross-cutting instrumentation gaps*.

### Workflow B — User asks for a follow-up investigation

The user references a finding (e.g. "investigate F3 from llm-cost/001") or asks to "spawn a deeper look at X."

1. **Decide whether the investigation needs a new dashboard or just code reading.** Code reading is cheaper — start there. Only spawn a dashboard if the question can't be answered from the code or existing snapshot.
2. **If code reading suffices:** write a new numbered report in the same topic folder. Set `parent_report` to the originating report. Walk the code, document findings, propose actions. No new dashboard ID.
3. **If a new dashboard is needed:** ask PostHog AI to build it (use the spec doc's conventions block + a topic-specific prompt), wait for the user to provide the new dashboard ID, then run Workflow A. The new report's `parent_report` is the originating report.
4. **Update the parent report's "Children" section** to link to the new report.
5. **Update the topic README's investigation map** — add the new report and any branches.

### Workflow C — Dashboard revision applied

The user pasted Claude's revision prompt back into PostHog AI; the dashboard now has updated tiles.

1. **Re-snapshot.** Same dashboard ID. The inspector overwrites the previous snapshot — that's fine; the prior analysis is preserved in the report.
2. **Decide: new report or update existing?**

- If the revision *materially changes the numbers* (e.g. F1 in LLM cost/001 was a 5x understated headline — fixing it is material) → write a new report. Mark the previous report `superseded` in its frontmatter and add the new path to its `Children` section.
- If the revision is cosmetic (axis label, decimal places) → update the existing report's "Decisions taken" section and bump the snapshot reference. Don't create a new report.

3. **Update the topic README** and status board accordingly.

### Workflow D — User asks to build a new dashboard for a topic that has no spec yet

1. **Don't invent a spec out of thin air.** Push back to the user: "What's the question this dashboard should answer?" Get to a specific business question.
2. **Draft the §X spec section in `posthog-insights-scope.md`.** Use the existing §1.1–§1.4 as templates. Property reference, conventions block, exact tile prompt.
3. **Have the user paste the prompt into PostHog AI** and provide the resulting dashboard ID.
4. **Then run Workflow A** to write the baseline report.

### Workflow E — Promoting a dashboard tux → prod

1. **Confirm the dashboard is signed off** — its latest report is `resolved` or all P0 items are closed.
2. **Run the duplicator** with `--dry-run` first to see the plan.
3. **Run for real.** Note the new prod dashboard ID returned in the output.
4. **Update the topic README** to record both IDs (active = prod, superseded = tux).
5. **Re-snapshot the new prod dashboard** to capture its initial state. The first prod snapshot may have empty data because of ingestion lag — that's fine.

## How to extract specific values from a snapshot JSON

When you need to compute something across tiles (e.g. "are Tile 18 and Tile 13 reporting the same total?"), don't re-render the markdown — go straight to the JSON.

```python
import json
d = json.load(open('docs/architecture/posthog-snapshots/<id>.json'))

# Per tile:
for tile in d['tiles']:
    insight = tile.get('insight') or {}
    name = insight.get('name')
    cols = insight.get('columns')        # for HogQL tiles
    result = insight.get('result')       # for HogQL: list[list]; for Trends: list[dict]
    last_refresh = insight.get('last_refresh')
    src_kind = insight.get('query', {}).get('source', {}).get('kind')
```

For HogQL tiles, `result` is a list of rows; `columns` gives column names. For TrendsQuery tiles, `result` is a list of series dicts each with `data`, `labels`, `days`, `count`, `aggregated_value`, `breakdown_value`. For FunnelsQuery, the structure is similar but step counts live in `count`.

## The report template — what each section is for

The full template is at `packages/glass-box/data/posthog-reports/_TEMPLATE.md`. Sections in priority order:

| Section | Job |
| --- | --- |
| YAML frontmatter | Machine-readable status, parent/child links, dashboard ID, env. |
| TL;DR | 2–3 sentences. The single conclusion. |
| Headline numbers | The 4–8 numbers that drive decisions. Not the full data dump. |
| Findings | Numbered (`F1`, `F2`, …) so other reports can reference them. Each has *what / why / confidence / source tile*. |
| Hypotheses | For medium- or low-confidence findings — list candidates and what would discriminate. |
| Actions | Code changes / dashboard revisions / new investigations / spec updates. Each with `[P0/M]` priority + effort tags. PostHog AI revisions include the exact prompt to paste. |
| Decisions taken | Append-only log. Useful when re-reading the chain. |
| Open questions | Things that need more data; if a question seeds a new investigation, link to its report. |
| Children | Reports spawned from this one. |

## Common findings patterns and what they imply

These recur often enough to memorise.

| Pattern | What it usually means | Default action |
| --- | --- | --- |
| A breakdown chart shows only `$$_posthog_breakdown_null_$$` and `$$_posthog_breakdown_other_$$` | Wrong breakdown property name, or the property is missing on most events | Verify property name in the JSON; fix in PostHog AI; if still broken, fall back to a HogQL table |
| Headline aggregate disagrees with a HogQL sum of the same data | TrendsQuery `interval` is set to a too-large bucket (`month` on `-30d` collapses to current month) | Change interval to `day` or omit |
| A HogQL tile coalesces a value to `'unknown'` and 100% of rows show `unknown` | The aliased property isn't being emitted at all (not just missing on some events) | Code-side fix on the OTel/event emission path; the dashboard is doing what it should |
| `$ai_generation` event has `distinct_id == $ai_trace_id` | Anonymous LLM call — `context.userId` wasn't passed to `buildExperimentalTelemetry` | Plumb the user id; usually a `withOperation` or middleware gap |
| A typed event has zero call sites in apps but is in the catalog | Catalog drift — type was speculative or replaced. Decide retire vs wire up. | Update events inventory; either retire the type or implement |

## Cross-references

- Property reference for `$ai_generation` events: `docs/architecture/observability.md` §2 + `apps/ai/src/common/aisdk/sdk.ts` `buildExperimentalTelemetry()`.
- Typed catalog: `packages/analytics/src/event-types.ts` (source of truth) + `docs/architecture/posthog-events-inventory.md` (status of each).
- Cost-emission migration debt: `gen_ai.cost.total_usd` (horde) vs `gen_ai.cost.total_tokens` (apps/ai legacy, value is in USD). Tracked in `posthog-insights-scope.md` §1.4 conventions.
- Skills you may invoke alongside this one: `hamster-analytics` (for instrumentation patterns when a fix involves adding events), `glass-box` (for replay-based investigation against the same PostHog data).

## Anti-patterns

- **Editing an issued report retroactively to fix a finding.** Append a new report or note in "Decisions taken." Never rewrite the analysis.
- **Putting raw data tables in `posthog-insights-progress.md`.** That doc is a status board only.
- **Asking PostHog AI to build a dashboard without writing the spec section first.** Push the user back to the spec.
- **Re-running the inspector and committing the snapshot when no analysis was done.** Snapshots are point-in-time; commit them only as part of a report.
- **Skipping the topic README update when adding a report.** The README is the chain index — out of date, the navigation breaks.
