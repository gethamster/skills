# FAQ: Creating Explicit Pull Policies and Workflow Rules

## How do I create pull policies when my team has never used them before?

Start with the single transition that causes the most rework or confusion. Map what goes wrong at that boundary by reviewing your last 10-15 completed items and noting where items were bounced back or delayed. Draft 3-5 simple yes/no criteria based on those patterns. Run a team workshop to validate and adjust, then try the criteria for two weeks before expanding to other transitions.

Starting small builds the habit without overwhelming the team.

## How long should it take to check pull criteria for a single item?

Checking should take under two minutes per item per transition. If it consistently takes longer, your criteria are either too numerous (trim to 3-7), too complex (decompose into simpler checks), or require information that is hard to find (make it more accessible). The goal is a quick scan, not a deep audit. Deep quality checks should happen during the work itself, not at the gate.

## Should I create pull policies before or after setting WIP limits?

Ideally, set [WIP limits](https://tryhamster.com/skills/setting-wip-limits) first because they create the capacity constraint that makes pull policies meaningful. Without WIP limits, teams can pull unlimited items regardless of criteria, which undermines the system. However, if your biggest pain point is quality at handoffs rather than overload, starting with pull policies is reasonable. Just plan to add the WIP limit criterion ("column WIP limit not reached") to your entry criteria soon after.

## How do I handle items that meet most criteria but fail one non-critical criterion?

Define which criteria are blocking (must pass) and which are advisory (should pass). Blocking criteria represent things that will definitely cause rework or failure downstream. Advisory criteria represent best practices that improve quality but are not strictly necessary. If you find the team routinely waiving the same criterion, it is either too strict and should be relaxed, or it points to a systemic upstream problem that needs fixing.

## Can pull policies work with automated tools and CI/CD pipelines?

Yes, and automation is the strongest way to enforce them consistently. Any criterion that can be expressed as a programmatic check (tests passing, linting clean, required fields filled, approvals obtained) should be automated so the card literally cannot move until the check passes. Reserve manual criteria for subjective or context-dependent checks that require human judgment. Most teams find that 30-50% of their criteria can be automated.

## Why does my team keep skipping pull policy criteria?

Three common causes. First, the criteria are not visible at the point of decision, so people forget they exist. Post them directly on the board. Second, the criteria feel like bureaucratic overhead because they were imposed rather than co-created.

Re-involve the team in drafting them. Third, urgency pressure leads people to skip checks "just this once," which becomes habit. Define an explicit expedite policy with a reduced checklist for genuinely urgent items so the standard criteria remain intact for everything else.

## How do pull policies interact with Kanban flow metrics?

Pull policies directly affect your [flow metrics](https://tryhamster.com/skills/measuring-kanban-flow-metrics). Well-defined criteria reduce cycle time by preventing rework loops that inflate time-in-stage. They reduce blocked items by ensuring work entering a column is actually ready to be worked on. They improve throughput predictability because items pass through stages more consistently.

Track bounce-back rate (items sent back to the previous column) as a leading indicator of pull policy effectiveness. A dropping bounce-back rate means your criteria are catching issues before they cause downstream delays.
