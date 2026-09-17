---
name: measure-binding
description: "Guides binding OGSM measures to external platforms (PostHog, Google Search Console). Enforces leading vs lagging tagging, validates the bound event/property exists before claiming live sync, and prevents stale bindings from producing stale numbers. Use when binding a measure to PostHog or Google Search Console, setting up live sync for a measure, or connecting a goal metric to an external platform."
metadata:
  category: "Ops"
---

# Measure Binding

> Bind OGSM measures to external platforms with leading/lagging tagging and existence validation. Stale bindings produce stale numbers — this skill prevents that.

## When to Invoke

- When binding a measure to an external platform (PostHog, Google Search Console)
- When a user asks to connect a goal metric to PostHog or Google Search Console
- When setting up live sync for a measure
- When a user asks "is this measure live?" or "why is this measure stale?"
- During Phase 1 (Set Goals) of the Hamster Company Direction workflow, at the measure-binding step

## Core Guidance

1. **Always verify the event or property exists in the target platform before binding — don't assume.** Query the platform's event list or property registry. If the event doesn't exist or hasn't fired recently, the binding will return zero or null silently. A measure that shows zero because the event doesn't exist is worse than no measure at all — it creates false confidence.

2. **Always tag every bound measure as leading or lagging.** Leading measures predict outcomes (e.g., signup conversion rate predicts revenue). Lagging measures confirm outcomes (e.g., monthly revenue confirms what happened). This tag determines how the team reads the measure: leading measures are for course-correcting, lagging measures are for confirming. A measure without this tag is ambiguous — the team can't tell whether to act or to audit.

3. **Never bind a measure to a vague event name — use the exact event name from the platform.** PostHog events are case-sensitive (`user_signed_up` ≠ `User Signed Up`). Google Search Console uses specific metric keys (`clicks`, `impressions`, `ctr`, `position`). Guessing event names produces bindings that silently return zero.

4. **Always check freshness after binding — if the last sync is stale, the number is stale.** A binding that hasn't synced in 7 days is a stale number presented as live. Check the last sync timestamp. If it's older than the measure's natural cadence (daily measures should sync daily), flag it as stale before reporting.

5. **One measure = one binding — don't reuse a single event for multiple measures without distinct aggregation.** If two measures need the same event, they must differ in aggregation (e.g., total count vs unique users) and the difference must be documented. Reusing the same event with the same aggregation for two measures creates duplicate numbers that diverge when filters change.

6. **Always record the binding metadata.** Platform, exact event/property name, aggregation method, leading/lagging tag, and last verified date. This metadata is the audit trail when a measure breaks or goes stale.

## Concrete Examples

### Example 1: PostHog — Signup Conversion Rate (Leading)

```
Measure: Signup Conversion Rate
Strategy: Grow self-serve pipeline
Platform: PostHog
Event: user_signed_up
Aggregation: unique_session (count of sessions with signup) / total sessions
Tag: LEADING — predicts revenue
Binding: TrendsQuery with formula A/B
  Series A: event=user_signed_up, math=unique_session
  Series B: event=$pageview, math=unique_session, properties=[path=/signup]
  Formula: A/B
  Display: BoldNumber
Verified: event user_signed_up exists in PostHog, last fired < 1h ago
Last sync: 2025-01-15T14:32:00Z (fresh)
```

### Example 2: Google Search Console — Organic Clicks (Leading)

```
Measure: Organic Search Clicks
Strategy: Increase organic visibility
Platform: Google Search Console
Metric: clicks (exact key from GSC API)
Aggregation: sum over last 7 days
Tag: LEADING — predicts organic signups
Binding: GSC searchanalytics.query with dimensions=[date], start_date=-7d
Verified: GSC property connected, clicks > 0 for last 7 days
Last sync: 2025-01-15T06:00:00Z (fresh, daily cadence)
```

### Example 3: PostHog — Monthly Recurring Revenue (Lagging)

```
Measure: Monthly Recurring Revenue
Strategy: Grow revenue from existing accounts
Platform: PostHog
Event: subscription_activated
Aggregation: sum of properties.monthly_revenue
Tag: LAGGING — confirms revenue outcome
Binding: TrendsQuery with math=hogql, math_hogql=sum(properties.monthly_revenue)
  Display: BoldNumber
Verified: event subscription_activated exists, properties.monthly_revenue present on >95% of events
Last sync: 2025-01-15T14:32:00Z (fresh)
```

## Anti-Patterns

### Binding to `signup` when the actual event is `user_signed_up`

**Failure mode:** The binding returns zero because the event name doesn't match. The team sees "0 signups" and either panics or ignores the measure. The real event is `user_signed_up` — case-sensitive, underscore-separated. Always copy the exact event name from the platform's event list.

### Tagging revenue as leading

**Failure mode:** Revenue is always lagging — it confirms what happened, it doesn't predict. Tagging it as leading misleads the team into treating a confirmation metric as an early signal. When revenue drops, the problem already happened weeks ago. Leading measures for revenue are things like signup conversion rate, trial starts, or activation rate — those predict where revenue will go.

### Binding a measure but never checking if the event actually fires

**Failure mode:** The binding is configured, the measure shows a number, but the event hasn't fired in 30 days. The number is stale — it reflects a past state, not the current state. The team makes decisions on ghost data. Always verify the event's last fired timestamp before claiming the measure is live.

### Using the same event for two measures with different aggregations without documenting why

**Failure mode:** Measure A counts total `user_signed_up` events. Measure B counts unique users from `user_signed_up`. Both are bound to the same event. When someone changes a filter on Measure A, they don't realize it affects the event stream that Measure B also reads. The two measures silently diverge. If you must reuse an event, document the aggregation difference explicitly in the binding metadata.

### Binding to a PostHog event that was renamed or deprecated

**Failure mode:** PostHog events can be renamed or stop firing after a migration. A binding created 3 months ago may point to an event that no longer exists. The measure shows the last cached value indefinitely. Always re-verify event existence when reviewing a direction cycle — don't assume a binding from last quarter is still valid.

## Validation Criteria

A measure binding is valid when ALL of the following are true:

1. **Event exists:** The exact event name or metric key is confirmed present in the target platform (query the event list, don't guess).
2. **Event fires:** The event has fired at least once in the last 24 hours (or within the measure's natural cadence — weekly measures can have weekly events).
3. **Leading/lagging tagged:** The measure has an explicit `leading` or `lagging` tag. No untagged bindings.
4. **Freshness checked:** The last sync timestamp is within the measure's cadence window (daily measure → last sync < 24h; weekly → < 7d).
5. **One-to-one:** The measure maps to exactly one binding. If the event is shared, the aggregation difference is documented.
6. **Metadata recorded:** Platform, event name, aggregation, leading/lagging tag, and last verified date are all stored with the measure.
7. **Value is non-null:** After binding, fetching the result returns a non-null, non-zero value (zero is acceptable only if zero is the expected value — verify against the platform's own UI).

## Cross-References

- **`posthog-measurements-for-goal-bindings`** — Deep reference for PostHog TrendsQuery construction, math types, and debugging when a binding shows 0/null
- **`hamster-instrumentation`** — Plan-time observability: what to track before building (ensures events exist before binding)
- **`hamster-analytics`** — Event instrumentation patterns (how to fire events in code)
- **`break-down-objectives`** — Decomposes goals into strategies and measures with leading/lagging tags
