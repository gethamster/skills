# Examples: Generating Insights from Retrospective Data

## Example: Uncovering a Systemic Bottleneck Through Affinity Mapping

**Scenario:**

A 7-person development team has just completed their data gathering phase. The board has 28 sticky notes covering topics like 'PR reviews take 3+ days,' 'I didn't know the sprint goal changed,' 'Story X was blocked for a week,' 'Design specs weren't ready when I started coding,' and 'Too many meetings on Wednesday.'

**Walkthrough:**

The facilitator asks the team to silently cluster the notes. Three major themes emerge: 'Slow Feedback Loops' (8 notes), 'Information Gaps' (7 notes), and 'Context Switching' (6 notes). The team dot-votes and selects Slow Feedback Loops and Information Gaps for deep analysis.

For Slow Feedback Loops, the facilitator runs the Five Whys:
- Why are PR reviews slow? → Only two people feel qualified to review the payment service code.
- Why only two people? → The payment service was built by a former team member and knowledge wasn't shared.
- Why wasn't knowledge shared? → There's no onboarding documentation and no pairing rotation for that service.

For Information Gaps, a fishbone diagram reveals that the team relies entirely on a single Slack channel for sprint updates, there are no async standup practices, and the PM communicates priority changes verbally to whoever is nearby.

Cross-theme connection: both issues stem from single-point-of-failure knowledge distribution. The insight: 'Critical knowledge (code ownership AND project context) is concentrated in individuals rather than distributed through team practices, creating bottlenecks and information gaps across the board.'

This single systemic insight feeds into two concrete action items in the [deciding phase](https://tryhamster.com/skills/deciding-what-to-do-in-retrospectives): implement pairing rotation for the payment service, and create an async daily update practice.

## Example: Using Timeline Patterns Across Multiple Sprints

**Scenario:**

A Scrum Master notices that for three consecutive sprints, the team's retrospective data includes complaints about 'last-minute rushes' and 'things breaking near the end of the sprint.' They decide to use the insight generation phase to explore this pattern more deeply.

**Walkthrough:**

The facilitator puts up a timeline of the last three sprints side by side and asks the team to plot when things felt 'green' (on track) versus 'red' (stressed/reactive). A clear pattern emerges: the first half of each sprint feels productive and calm, then a sharp shift happens around day 6-7.

The Five Whys reveals: stories are estimated in terms of development effort only, with no buffer for integration testing and code review. Developers mark stories as 'done' when code is written, but the remaining 30% of work (review, testing, bug fixes) piles up at the end.

The insight: 'Our Definition of Done doesn't match our estimation model. We estimate development time but our DoD requires review and testing, creating a predictable end-of-sprint crunch every iteration.'

This insight is qualitatively different from 'we need to estimate better.' It identifies a specific structural misalignment the team can address by either updating their estimation approach or revising their DoD — a decision for the [next phase](https://tryhamster.com/skills/deciding-what-to-do-in-retrospectives).
