# FAQ: Tracking Innovation Accounting Metrics

## How do I choose between multiple candidate metrics for the same assumption?

Apply three filters. First, does the metric directly test the assumption, or is it a proxy? A direct test is always better. Second, can you actually measure it with your current instrumentation, or would it take weeks of engineering work?

Prefer metrics you can start tracking today. Third, can you influence it with an experiment you can run in the next two weeks? If no experiment in your roadmap would affect the metric, it is the wrong metric for this cycle. When two candidates pass all three filters, pick the one closest to the user action that matters for your business model.

## How long should I track a metric before deciding it has stalled?

Three experiment cycles is the default threshold. Each cycle should be one to four weeks depending on your product's natural usage cadence. If a metric has not moved meaningfully after three distinct experiments targeting it, the underlying assumption is likely wrong, and you should trigger a pivot-or-persevere discussion. Fewer than three cycles risks false negatives: some experiments take time to show results, especially retention metrics.

More than five cycles without movement is almost certainly a signal to pivot. Document the cycle count threshold on your scorecard before you start.

## Should I track innovation accounting metrics before or after building my MVP?

Define the metrics before building the MVP, and start measuring the moment your MVP is live. The metrics should inform what your MVP needs to include. If your primary metric is activation rate and activation requires a user to complete a specific workflow, your MVP must include that workflow. If you wait until after the MVP ships to think about metrics, you will discover gaps in instrumentation that delay learning by weeks.

See the [building MVPs skill](https://tryhamster.com/skills/building-minimum-viable-products) for guidance on scoping.

## How do I handle innovation accounting metrics when my sample sizes are tiny?

With fewer than 50 users per cohort, treat quantitative metrics as directional signals, not definitive evidence. Supplement with qualitative data: user interviews, session recordings, and direct observation. You can still use the scorecard structure, but add a qualitative evidence column alongside the numbers. Note sample sizes on every data point so you and your team do not over-interpret swings.

As your user base grows past 100 per cohort, shift weight toward the quantitative signals and reduce reliance on qualitative supplements.

## Why does my innovation accounting scorecard keep drifting out of date?

The most common cause is that updating the scorecard requires manual data work, and nobody has it as an explicit weekly responsibility. Fix both problems. First, automate data collection as much as possible. Connect your analytics tool to a dashboard that updates in real time, or set up a weekly automated export.

Second, assign one person as the scorecard owner who updates it every Monday morning. Tie the update to an existing ritual like standup or sprint planning. Scorecards that require a 30-minute manual export die within a month. Scorecards that auto-update and get reviewed weekly survive.

## Can I use innovation accounting metrics for features inside an established product, not just startups?

Yes, and this is increasingly how product teams at larger companies validate new features and internal ventures. The approach is identical: define the assumption the feature is testing, assign a metric, set a baseline and target, and run time-boxed experiments. The main adaptation is that you need to isolate the feature's impact from the broader product's metrics, which usually means measuring feature-specific cohorts (users exposed to the feature versus those not exposed) rather than the overall user base. Innovation teams inside corporations often call this approach "growth accounting" or "venture accounting" to distinguish it from the company's financial accounting.

## How do innovation accounting metrics relate to OKRs or North Star metrics?

Innovation accounting metrics are more granular and assumption-specific than a North Star metric or a quarterly OKR. " Your innovation accounting metrics decompose that into the underlying drivers: signup-to-activation rate, activation-to-retention rate, and retention-to-referral rate. Think of innovation accounting metrics as the diagnostic layer beneath your North Star. When the North Star metric stalls, your innovation accounting scorecard tells you exactly which part of the engine is broken.

OKRs set the direction. Innovation accounting metrics show whether you are actually moving.
