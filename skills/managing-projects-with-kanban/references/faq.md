# FAQ: Managing Projects with Kanban

## How do I handle deadlines in kanban project management if there are no sprints?

Deadlines are handled through forecasting rather than commitment. Use your throughput data to calculate a probabilistic delivery date: count remaining items, divide by your average weekly throughput, and present the 50th and 85th percentile dates. If the forecast shows you will miss the deadline, you have three options: reduce scope, increase throughput (add people or remove impediments), or negotiate the deadline. The key difference from sprints is that you get this signal continuously, not just at sprint boundaries, so you catch problems earlier.

## How long should it take to set up kanban project management for a new project?

Initial setup takes 2-4 hours: about 1 hour to decompose deliverables into cards, 30 minutes to design the board columns, 30 minutes to set WIP limits and write pull policies, and 30-60 minutes to prioritize the backlog. The system becomes useful on day one, but the real payoff starts at week 2-3 when you have enough throughput data to forecast. Do not over-engineer the setup. Start simple and refine based on retrospective insights.

## Should I manage projects with Kanban before or after establishing flow metrics?

Start the project and begin measuring simultaneously. You do not need historical data to set up a Kanban board and start pulling work. Metrics accumulate naturally as work flows through the system. Waiting until you have "enough data" before starting is a common procrastination trap.

After 2 weeks of operation, you will have enough cycle time and throughput data for basic forecasting. After 4-6 weeks, your forecasts will be reliable. See [measuring flow metrics](https://tryhamster.com/skills/measuring-kanban-flow-metrics) for detailed guidance on what to track.

## How do I manage dependencies between cards on a Kanban board?

Make dependencies explicit on the cards themselves. Tag dependent cards with the ID of the card they depend on, and add a pull policy that prevents pulling a dependent card until its prerequisite is Done. Visually, use colored tags or link indicators so dependencies are visible at a glance. During the daily standup, call out any dependency chains that are at risk.

If you have many interdependent cards, consider grouping them in a swim lane so the team can focus on completing the chain end-to-end before starting unrelated work.

## Why does my Kanban board keep turning into a giant to-do list with no flow?

This happens for two reasons. First, you probably do not have WIP limits set or enforced. Without limits, people keep pulling new work without finishing existing work, and the board fills up with half-done items. Second, your work items may be too large.

If cards sit in a column for a week, the board looks static and feels like a list rather than a flow system. Fix both: set strict WIP limits (smaller than you think you need) and decompose items to 1-3 days. Flow should be visible daily.

## How do I manage a Kanban project when team members split time across multiple projects?

Reduce their WIP limit proportionally. If someone spends 50% of their time on your project, their personal WIP limit should be 1, not 2. This prevents them from pulling more work than they can realistically finish. Also adjust your throughput expectations.

A team of 4 people who each spend 50% of their time on your project has an effective team size of 2 for forecasting purposes. Be honest about this in your capacity planning rather than pretending you have a full team and being surprised when throughput is half of what you projected.

## Can I use Kanban project management alongside Scrum or other frameworks?

Yes, many teams use a hybrid approach, sometimes called Scrumban. You keep sprint boundaries for planning and review ceremonies but add WIP limits and pull-based work selection within the sprint. Over time, many teams find the sprint boundaries add less value as the Kanban practices mature, and they gradually shift to pure flow. See [comparing Kanban and Scrum](https://tryhamster.com/skills/comparing-kanban-and-scrum) for a detailed breakdown of when each approach fits and how to transition between them.
