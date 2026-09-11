# FAQ: Managing Six-Week Build Cycles

## How do I decide between a six-week big batch and a two-week small batch?

The decision is based on appetite, not estimation. " If the answer is yes, it is a big batch. If the problem is smaller, meaning it can be solved meaningfully in one to two weeks, shape it as a small batch. Common small batch work includes bug fixes, minor UX improvements, and small feature additions.

If you find yourself shaping something as a small batch but it keeps growing, that is a signal it is actually a big batch problem that needs deeper shaping.

## What happens to unfinished work when the circuit breaker fires?

The code stays in the repository but the project stops. The team is released. Unfinished work does not automatically get scheduled for the next cycle. Instead, someone (usually the original shaper or a product lead) must examine why the project did not converge, reshape it with the lessons learned, and re-pitch it at a future betting table where it competes against new pitches.

Sometimes the reshaped version is much smaller because the hard problems were already solved. Sometimes the project is abandoned because the organization's priorities shifted during the cycle.

## Should I run a shape up six week cycle or use shorter cycles when starting out?

Start with six-week cycles. Shorter cycles (two to four weeks) do not give teams enough room to tackle meaningful problems and increase the ratio of planning overhead to building time. The six-week duration forces you to shape work properly, which is the skill that takes longest to develop. If six weeks feels too long, the issue is usually under-shaping (the pitch was not specific enough) or poor scope management (the team is not cutting aggressively enough).

Fix the shaping and scope management rather than shortening the cycle.

## How do I handle urgent bugs or production issues during a cycle?

Designate one or two people as an "on-call" rotation who are not assigned to cycle projects. They handle support escalations, production incidents, and urgent fixes so that cycle teams are not interrupted. If your organization is too small for a dedicated on-call rotation, allocate one person from the cycle team as a part-time interrupt handler and reduce that team's scope expectations accordingly. The key rule is: cycle teams should know before the cycle starts whether they will be handling interrupts, so they can plan their scope accordingly.

## How do I convince leadership that killing a project at the end of the cycle is better than extending it?

Frame it in terms of opportunity cost and organizational health. An extension does not just cost the extra days of work. It delays the next cycle, which delays every project shaped and waiting. It teaches teams that deadlines are negotiable, which undermines scope discipline in future cycles.

It creates precedent that "almost done" is good enough to earn more time, which incentivizes optimistic reporting over honest scope-cutting. Point to the reshaped version: a project that failed once and comes back reshaped is almost always smaller, better defined, and more likely to ship than an extended project grinding through its seventh or eighth week.

## Can I use six-week cycles for maintenance work and technical debt?

Yes, but shape the maintenance work as a proper pitch with a clear problem statement and appetite. "Pay down tech debt" is not a pitch. "Migrate the authentication system from library X to library Y so we can support SSO, with a six-week appetite" is a pitch. Maintenance work competes at the betting table like any other project.

If it keeps losing to feature work, that is a signal that leadership needs to explicitly value infrastructure, and the way to do that is to bet on it, not to carve out a special process that bypasses the betting table.

## Why does my cycle keep drifting past the six-week mark?

Cycle drift almost always traces back to one of three causes. First, under-shaped pitches: the team is discovering the problem during the cycle rather than building a shaped solution, which means shaping needs to be more thorough before the betting table. Second, poor scope management: the team is not cutting aggressively enough in weeks four and five, often because they have not been given explicit permission to cut. Third, interruptions: the team is being pulled into unrelated work during the cycle, eroding their available time.

Check hill charts at the midpoint. If most scopes are still uphill at week three, the root cause is likely shaping. If scopes are moving but slowly, check for interruptions.
