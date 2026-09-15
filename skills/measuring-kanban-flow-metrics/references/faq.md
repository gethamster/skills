# FAQ: Measuring Kanban Flow Metrics

## How do I measure flow metrics if my kanban tool does not track per-column timestamps?

Use a parallel spreadsheet with one row per work item and one column per board stage. When you move a card, log the date in the corresponding cell. This takes less than 30 seconds per transition. After two weeks, you will have enough data to compute cycle time and build a basic CFD.

If the manual overhead becomes unsustainable, it is a strong argument for switching to a tool that tracks timestamps natively. In the meantime, even imperfect manual data is far better than no data at all.

## Should I measure flow metrics before or after setting WIP limits?

Ideally, you do both in parallel. Start collecting data immediately, even if your WIP limits are not yet formal. Your first two to four weeks of metrics will show you where work accumulates, which directly informs where to set or adjust WIP limits. See the [WIP limits skill](https://tryhamster.com/skills/setting-wip-limits) for how to use flow data to choose initial limits.

Waiting until WIP limits are perfect before measuring means you have no data to evaluate whether those limits are working.

## How long should it take to see results after a process change?

Allow 3-6 weeks of data after a process change before drawing conclusions. Shorter windows are too noisy because weekly throughput and cycle time vary naturally. Longer windows risk confounding results with other changes. If you change a WIP limit on Monday, do not check the metrics on Friday expecting a transformation.

Instead, mark the date of the change on your charts and compare the 4-week window before with the 4-week window after. Look for shifts in percentile lines and CFD band widths, not individual data points.

## How do I handle items that get blocked by external dependencies in my cycle time calculation?

Tag blocked items and track them in two ways. First, include them in your overall cycle time calculation because they reflect the reality of your delivery system, dependencies and all. Second, calculate a separate 'active cycle time' that excludes blocked days so you can see how long items take when they are actually being worked on. The gap between the two numbers quantifies the cost of external dependencies.

Bring this gap to your service delivery review as evidence when advocating for dependency reduction or better cross-team coordination.

## Why does my throughput keep fluctuating even though WIP is stable?

Stable WIP with fluctuating throughput usually means item sizes are inconsistent. One week you complete eight small items, the next week you complete two large ones. The WIP count looks the same, but the work content is very different. The fix is not to estimate sizes but to decompose work more consistently.

Aim for items that most team members can complete in 1-5 days. Another cause is hidden batch-and-queue patterns where items complete in clusters rather than flowing individually through the system. Check your CFD for staircase patterns in the Done band, which confirm batching.

## Can I use flow metrics for forecasting delivery dates on specific features?

Yes, and this is one of the most valuable applications. For a single item, use your cycle time percentiles: 'Based on our data, there is an 85% chance this will be done within X days of starting.' For a set of items, use Monte Carlo simulation: input your historical throughput data, specify how many items need to be delivered, and the simulation will produce a probability distribution of completion dates. Many kanban tools include Monte Carlo forecasting. If yours does not, a simple spreadsheet simulation using random samples from your last 12-16 weeks of throughput data works well.

## How do flow metrics relate to the cadences in kanban methodology?

Each [kanban cadence](https://tryhamster.com/skills/running-kanban-cadences) has a natural metrics pairing. The daily standup uses aging WIP to identify items that need attention today. The replenishment meeting uses throughput data to decide how many items to pull into the commitment point. The delivery planning meeting uses lead time percentiles to set expectations with stakeholders.

The service delivery review uses the CFD and trend data to evaluate systemic performance. The operations review uses cross-service metrics to optimize the broader value stream. Without metrics, cadences become status meetings. With metrics, they become decision-making sessions.
