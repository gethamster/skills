# FAQ: Setting and Enforcing Work-in-Progress Limits

## How do I set WIP limits when team members work across multiple columns?

Count shared team members as fractional capacity in each column they serve. 5 in each column when calculating the n+1 formula. 5) + 1 = 2. The key insight is that shared workers mean the columns compete for the same capacity, so their combined WIP limits should reflect that competition.

If both columns are consistently full, the shared workers are spread too thin, and you should consider dedicating someone to the bottleneck column.

## Should blocked items count against WIP limits?

Yes, blocked items should count against WIP limits. This is counterintuitive because blocked items are not being actively worked on, but counting them creates urgency to resolve the blocker. If blocked items do not count, teams lose incentive to unblock them quickly, and the items age silently while consuming mental overhead. If blocked items frequently fill your WIP capacity, that is a signal that your blocking rate is a systemic problem.

Create a visible "blocked" tag, track the reasons items get blocked, and address the top blocking causes in your retrospective. Some teams add a small "blocked" sub-lane with its own WIP limit of 1-2 to make blockers hyper-visible.

## How long should I run with initial WIP limits before adjusting them?

Run with your initial limits for at least two full weeks before making any adjustments. Shorter observation periods do not give you enough data because work items have natural variation in size and complexity. You need to see at least one full cycle of items flowing through the board to understand the pattern. During these two weeks, resist the urge to change limits reactively when the team feels uncomfortable.

The discomfort is the limit working correctly. After two weeks, make one adjustment at a time, changing one column's limit by one item, and observe for another week before changing anything else. Changing multiple limits simultaneously makes it impossible to understand which change had which effect.

## What is the difference between per-column WIP limits and a global WIP limit?

Per-column limits cap the number of items in a specific workflow stage. A global limit caps the total number of items in progress across all active stages of the board. Per-column limits are more granular and better at revealing exactly where bottlenecks live. Global limits are simpler and better suited for very small teams (1-3 people) where per-column limits create artificial rigidity.

For teams of 4+, use per-column limits as your primary mechanism and optionally add a global limit as a safety ceiling. The global limit catches situations where every column is near its individual limit, which means the total system WIP is higher than the team can sustain even though no single column appears overloaded.

## Should I set WIP limits before or after measuring flow metrics?

Set rough WIP limits first using the n+1 formula, then refine them using flow data. Waiting to collect flow data before setting any limits creates a chicken-and-egg problem: you cannot observe meaningful flow patterns in a system with unlimited WIP because the flow is distorted by overload. Set initial limits based on team size, run for two weeks, and measure cycle time, throughput, and cumulative flow during that period. The data you collect under constrained conditions is far more useful than data from an unconstrained system.

See [measuring flow metrics](https://tryhamster.com/skills/measuring-kanban-flow-metrics) for the specific metrics to track during this calibration period.

## How do I convince my manager or stakeholders that WIP limits won't slow us down?

Frame the argument around finishing, not starting. Most managers track how much work is being started, but what matters is how much is being completed. Show them the current state: X items are "in progress" but only Y items were completed last week. That gap between started and finished is the waste WIP limits address.

" After the trial, present the before-and-after data. In nearly every case, throughput stays the same or increases while cycle time drops significantly. The team is not doing less work. They are finishing more of what they start.

## Why does my WIP limit keep getting overridden during sprint or release crunch?

This happens because the team has not internalized that WIP limits exist to protect throughput, especially under pressure. When a deadline looms, the instinct is to start more work to "go faster," but starting more items actually slows delivery because of context-switching and coordination overhead. Fix this by tracking the outcomes of overrides. Every time a WIP limit is breached, note the date, reason, and resulting cycle time for items in that column during the breach period.

After two or three incidents, you will have data showing that overrides consistently increase cycle time, not decrease it. Present this data in your retrospective. Additionally, review your [pull policies](https://tryhamster.com/skills/creating-kanban-pull-policies) to ensure they explicitly address crunch scenarios.
