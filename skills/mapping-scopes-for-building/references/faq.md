# FAQ: Mapping Scopes Instead of Tasks

## How do I map shape up scopes when the shaped pitch is vague or underspecified?

If the pitch lacks enough detail to identify scope boundaries, spend the first day or two spiking on the unknowns rather than forcing a scope map. Build a throwaway prototype, sketch the data model, or test an API integration. The joints in the work will become visible once you have hands-on contact with the problem. Do not treat a vague pitch as an excuse to skip scoping.

Instead, let the scoping emerge from early exploration. If the pitch is so vague that you cannot identify even two independent slices after two days of exploration, escalate back to the shaper for clarification.

## Should I map scopes before or after tracking progress with hill charts?

Scopes come first because hill charts need scopes to track. You cannot place dots on a hill chart if you have not defined what the dots represent. Map your initial scopes in the first day or two of the cycle, then immediately place them on a hill chart. The two tools are designed to work together: scopes define what you are building, and hill charts show where each scope stands.

See [tracking progress with hill charts](https://tryhamster.com/skills/tracking-progress-with-hill-charts) for the companion skill.

## How long should scope mapping take at the start of a cycle?

The initial scope map should take 1-2 hours of focused team discussion, typically on the first or second day of the cycle. Do not spend a full day on it. The first map is a draft that will change as you start building. Spending more than 2 hours on the initial map usually means you are trying to plan at the task level rather than identifying the natural joints.

Get a rough map, start building, and refine scopes during the first few days as you learn.

## Can I use shape up scopes alongside Jira or Linear tickets?

Yes, but with discipline. Each scope becomes a parent item (an epic in Jira, a project in Linear), and you can create sub-tasks within it for your own tracking. The critical rule is that progress is measured at the scope level, not the task level. Do not report on how many tickets are closed.

Report on which scopes have moved on the hill chart. If you find yourself spending more time managing tickets than building, you have too many tickets per scope. Keep it simple: 3-8 tasks per scope at most.

## Why does my scope map keep drifting and changing throughout the cycle?

Some drift is expected and healthy, especially in the first week. If scopes are still being redefined in weeks 3 or 4, something deeper is wrong. Common causes: the shaped pitch had unresolved unknowns that were not flagged, the team is not spiking on uncertainties early enough, or the scopes were drawn along horizontal (technical) lines instead of vertical (user-facing) slices. Horizontal scopes create hidden dependencies that only surface during integration, forcing late rework.

Recheck your scope boundaries for vertical integration and spike on any remaining unknowns immediately.

## How do shape up scopes differ from user stories or sprint backlog items?

'). Scopes describe a slice of the solution that delivers that capability end to end. A single scope might correspond to multiple user stories, or one user story might span multiple scopes. The key difference is that scopes are defined by the team during building based on the actual shape of the work, not predefined by a product owner before the sprint.

Scopes are also intentionally mutable: they can be renamed, split, merged, or cut. Sprint backlog items are treated as commitments.

## What if my project only has one or two natural scopes?

If you genuinely cannot find more than two independent slices, it might be a small-batch project that does not need formal scope mapping. For projects with appetites of one or two weeks, a simple task list may suffice. However, if the project has a 6-week appetite and you only see one or two scopes, you are likely looking at the work at too high a level of abstraction. Try asking: within this large scope, what could we demo after 2-3 days of work?

That question usually reveals sub-boundaries. If a single scope will take more than a week, it almost certainly has internal structure worth surfacing.
