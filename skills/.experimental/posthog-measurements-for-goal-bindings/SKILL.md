---
name: posthog-measurements-for-goal-bindings
description: "Standardizes creating and debugging PostHog insights for Hamster goal measure bindings. Covers TrendsQuery vs HogQL, the measure binding contract (aggregated_value), math types, formulas, HogQL pitfalls, and the Composio API actions needed. Use when binding a PostHog metric to a goal, debugging a measure showing 0/null, or converting HogQL to TrendsQuery."
metadata:
  category: "Workflows"
---

# PostHog Measurements for Goal Bindings

> Reference guide for creating and debugging PostHog insights that bind to Hamster goal measures. Every line here saves 10 minutes of trial-and-error.

## When to Invoke

- Creating a PostHog insight to bind to a Hamster goal measure
- Debugging why a measure binding shows 0 or null
- Converting a HogQL query to a TrendsQuery
- Setting up formula-based metrics (ratios, rates) for goal measures
- User says: "bind this PostHog metric to a goal" or "why is my measure showing 0"

## The Measure Binding Contract (CRITICAL)

Hamster measure bindings read `aggregated_value` from **TrendsQuery** results.

| Query Type | Result Shape | Binding Can Read? |
| --- | --- | --- |
| TrendsQuery | `aggregated_value: <number>` | YES |
| HogQLQuery | `[[value]]` (table format) | NO |

**Rules:**

1. The insight MUST be a `TrendsQuery` -- never `HogQLQuery` for measure bindings.
2. Set `display: "BoldNumber"` for single-value metrics. Other options (`"Number"`, `"TimeSeries"`) may not expose `aggregated_value` correctly.
3. For ratio metrics (A/B), use the `formula` field -- the formula result appears as `aggregated_value`.
4. For non-formula queries, each series returns its own `count` and `aggregated_value`.

## TrendsQuery Structure Reference

```json
{
  "query": {
    "kind": "TrendsQuery",
    "series": [
      {
        "kind": "EventsNode",
        "event": "Chat Message Sent",
        "math": "hogql",
        "math_hogql": "count(DISTINCT properties.thread_id)",
        "properties": [
          {
            "key": "properties.source",
            "value": "ai",
            "operator": "exact",
            "type": "event"
          }
        ]
      }
    ],
    "formula": null,
    "dateRange": { "date_to": null, "date_from": "-7d" },
    "interval": "day",
    "display": "BoldNumber"
  }
}
```

### Fields

- **`series`**: Array of `EventsNode` objects. Each defines an event + math aggregation.
- **`formula`**: String like `"A/B"` where A/B refer to series indices (0-based series, letter-based refs). `null` for single-series.
- **`dateRange`**: `{ "date_from": "-7d", "date_to": null }` for last 7 days. Supports relative (`-30d`, `-1m`) and absolute dates.
- **`interval`**: `"day"`, `"week"`, `"month"`. For BoldNumber, this affects aggregation granularity but the final value is the sum over the range.
- **`display`**: `"BoldNumber"` for single-value metrics (what bindings need). `"TimeSeries"` for trend charts.

### EventsNode Fields

- **`kind`**: Always `"EventsNode"` for event-based series.
- **`event`**: Event name (e.g., `"Chat Message Sent"`).
- **`math`**: Aggregation type (see table below).
- **`math_hogql`**: Required when `math: "hogql"`. Contains the HogQL expression.
- **`math_property`**: Required for `unique_group` (must be a GROUP TYPE, not an event property).
- **`properties`**: Array of property filters. Each: `{ "key": "...", "value": ..., "operator": "exact|gt|lt|...", "type": "event|person|..." }`.

## Math Types Reference

| `math` value | What it does | Extra fields needed |
| --- | --- | --- |
| `"total"` (default) | Total event count | none |
| `"dau"` | Daily active users | none |
| `"weekly_active"` | Weekly active users | none |
| `"monthly_active"` | Monthly active users | none |
| `"unique_session"` | Unique sessions | none |
| `"first_time_for_user"` | First time event for user | none |
| `"first_matching_event_for_user"` | First matching event for user | none |
| `"unique_group"` | Unique group count | `math_property` = GROUP TYPE (e.g., `"account"`, `"project"`) |
| `"hogql"` | Custom HogQL aggregation | `math_hogql` = HogQL expression string |

### Critical Gotchas

1. **There is NO `"unique"` math type.** To count unique values of an event property (e.g., distinct `thread_id`), use `math: "hogql"` with `math_hogql: "count(DISTINCT properties.thread_id)"`.

2. **`unique_group` is for GROUP ANALYTICS, not event properties.** `math: "unique_group"` with `math_property: "thread_id"` does NOT count unique thread IDs -- it silently falls back to `count()`. `math_property` must be a group type name (like `"account"`), not an event property name.

3. **Use `math_hogql`, NOT `math_property`, for custom HogQL expressions.** `math_property` is only for `unique_group`. If you put a HogQL expression in `math_property`, it will be ignored.

## Step-by-Step: Creating a Measure-Binding Insight

1. **Determine the metric formula.** What are you counting? Is it a ratio (A/B)? A single count?
2. **Choose the right math types.** Map your intent to the math types table above. When in doubt, use `math: "hogql"` with an explicit expression.
3. **Build the TrendsQuery JSON.** Use the structure reference above. Set `display: "BoldNumber"`.
4. **Create the insight** via `POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS` with the query object.
5. **Fetch the result** via `POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID` with `refresh: true` to force computation.
6. **Verify `aggregated_value`** is non-null and matches expectations. If null or 0, run the debugging checklist.
7. **Update the goal measure binding** to point to the new insight ID.

## HogQL Pitfalls

These are the silent failures that cost hours:

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| `properties.$session_id` | Returns NULL silently | Use `properties['$session_id']` (bracket syntax for `$`-prefixed keys) |
| `properties.thread_id` | Works fine | Dot syntax is OK for non-`$` properties |
| `'none'` sentinel | Missing values appear as literal string `'none'` | Treat as absent; filter with `IS NOT NULL AND != 'none'` |
| Shell escaping | Complex HogQL breaks when passed via CLI | Write to a temp file, or use JSON body directly via Composio |
| `OPERATION_PROPERTY_NONE` | Literal string `'none'` in results | Same as above -- it is the missing-value sentinel |

## Common Patterns

### Unique count of a property

```json
{ "kind": "EventsNode", "event": "Chat Message Sent", "math": "hogql", "math_hogql": "count(DISTINCT properties.thread_id)" }
```

### Unique sessions

```json
{ "kind": "EventsNode", "event": "Chat Message Sent", "math": "unique_session" }
```

### Total events (default)

```json
{ "kind": "EventsNode", "event": "Chat Message Sent", "math": "total" }
```

### Ratio metric (e.g., unique threads / total sessions)

```json
{
  "query": {
    "kind": "TrendsQuery",
    "series": [
      { "kind": "EventsNode", "event": "Chat Message Sent", "math": "hogql", "math_hogql": "count(DISTINCT properties.thread_id)" },
      { "kind": "EventsNode", "event": "Chat Message Sent", "math": "unique_session" }
    ],
    "formula": "A/B",
    "dateRange": { "date_from": "-7d", "date_to": null },
    "interval": "day",
    "display": "BoldNumber"
  }
}
```

### Filtered series (only AI-sourced messages)

```json
{
  "kind": "EventsNode",
  "event": "Chat Message Sent",
  "math": "total",
  "properties": [
    { "key": "properties.source", "value": "ai", "operator": "exact", "type": "event" }
  ]
}
```

## Anti-Patterns

| Anti-pattern | Why it fails |
| --- | --- |
| Using `HogQLQuery` instead of `TrendsQuery` | Returns `[[value]]` table format -- binding cannot read `aggregated_value` |
| Using `unique_group` with an event property name | Silently falls back to `count()` -- `math_property` must be a group TYPE |
| Using `math_property` instead of `math_hogql` for custom HogQL | `math_property` is ignored for `math: "hogql"` -- use `math_hogql` |
| Forgetting `refresh: true` when fetching results | Returns stale or null cached results |
| Using `properties.$session_id` in HogQL | Returns NULL silently -- use `properties['$session_id']` |
| Using `display: "TimeSeries"` for a binding metric | May not expose `aggregated_value` -- use `"BoldNumber"` |

## Debugging Checklist

When a measure binding shows 0, null, or wrong value, check in order:

1. **Is the insight a TrendsQuery?** (not HogQLQuery) -- HogQL returns tables, not `aggregated_value`.
2. **Does the result contain `aggregated_value`?** -- Fetch via `POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID` and inspect the response.
3. **Is `display` set to `"BoldNumber"`?** -- Other display types may not expose the value correctly.
4. **Are you using `math_hogql` (not `math_property`) for custom HogQL?** -- Check the series object.
5. **Are `$`-prefixed properties accessed with bracket syntax?** -- `properties['$session_id']` not `properties.$session_id`.
6. **Did you fetch with `refresh: true`?** -- Without it, you may get stale/null cached results.
7. **Is the date range correct?** -- Check `dateRange.date_from` and `dateRange.date_to`. A too-narrow range returns 0.
8. **Are there events matching the filter?** -- Verify the event exists and properties match in the PostHog UI.
9. **For formulas: does the denominator ever equal 0?** -- Division by zero returns null, not an error.

## PostHog Composio Actions

Key actions for measure binding work:

| Action | Purpose |
| --- | --- |
| `POSTHOG_CREATE_CUSTOM_PROJECT_INSIGHTS` | Create a new insight with a custom TrendsQuery |
| `POSTHOG_CREATE_QUERY_IN_PROJECT_BY_ID` | Execute a query and get results (use `refresh: true`) |
| `POSTHOG_LIST_ORGANIZATION_PROJECTS` | List projects to get project IDs |
| `POSTHOG_LIST_PROJECT_GROUP_TYPES` | List group types (for `unique_group` math) |

For the full set of 200+ PostHog actions, call `list_app_actions` with `app: "posthog"`.

### PostHog Project IDs

- **prod**: `371628`
- **tux**: `371881`
- API host: `https://us.posthog.com`

## Cross-References

- **`hamster-analytics`** -- Event instrumentation patterns (how to track events in code)
- **`hamster-instrumentation`** -- Plan-time observability checklist (what to track before building)
- **`hamster-posthog-dashboards`** -- Dashboard analysis and reporting workflows
- **`hamster-posthog-user-audit`** -- Per-user event auditing (Q1-Q8 playbook)
- Hamster docs: [Metrics](https://tryhamster.com/docs/hamster-studio/metrics) | [Goals](https://tryhamster.com/docs/hamster-studio/goals)
