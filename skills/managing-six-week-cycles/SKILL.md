---
name: managing-six-week-cycles
description: "This skill teaches you how to structure fixed six-week build cycles where teams commit to shaped work, manage their own scope, and ship on time, using the circuit breaker to kill projects that fail to converge rather than letting them drag on."
metadata:
  method: shape-up
---

# Managing Six-Week Build Cycles in Shape Up

> This skill teaches you how to structure fixed six-week build cycles where teams commit to shaped work, manage their own scope, and ship on time, using the circuit breaker to kill projects that fail to converge rather than letting them drag on.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 1-2 hours for initial cycle setup, then ongoing cycle management |
| Outcome | You gain the ability to run predictable, time-boxed build cycles where teams ship meaningful work every six weeks without extensions, death marches, or scope creep, producing a repeatable cadence your organization can plan around. |
| Prerequisites | Familiarity with the Shape Up framework and its phases (shaping, betting, building, cool-down), At least one shaped pitch ready with a clear problem definition and appetite, A team of at least 2-3 people available to commit full-time for six weeks, Understanding of appetite-setting as distinct from estimation (see setting-appetites-and-managing-scope) |
| Part of | [Shape Up](../../methods/shape-up/METHOD.md) |

## Overview

The six-week cycle is the heartbeat of the [Shape Up](https://tryhamster.com/methods/shape-up) framework. It is the period during which a small, committed team takes a shaped pitch and turns it into shipped software. Unlike sprints in Scrum, which are typically one or two weeks and require constant re-planning, the six-week cycle gives teams enough uninterrupted time to build something meaningful while being short enough to maintain urgency and prevent projects from sprawling. The cycle begins at the betting table, where leadership commits shaped work to teams, and ends with a hard deadline that cannot be extended. This fixed-time, variable-scope constraint is the defining characteristic: if something does not fit, you cut scope rather than adding time.

The concrete artifact this skill produces is a running cycle, meaning a set of one to three projects, each staffed by a small team (typically one designer and one or two programmers), all operating against a shared six-week clock. By the end of the cycle, each project either ships or gets killed. There is no partial credit. The circuit breaker ensures that failed projects do not automatically roll into the next cycle. They return to the shaping phase, where someone must re-pitch them at a future betting table. This harsh-sounding rule is actually what makes the system sustainable: it prevents the slow accumulation of zombie projects that drain morale and consume capacity without delivering value.

Managing a shape up six week cycle is not just scheduling. It involves orchestrating the handoff from shaping to building, protecting teams from interruptions during the cycle, monitoring convergence without micromanaging, and making the difficult call to enforce the circuit breaker when a project is not going to land. It also means running the cool-down period between cycles correctly so that teams get breathing room and the organization gets time to fix bugs, explore ideas, and prepare for the next betting table. When done well, the six-week cadence becomes the rhythm the entire product organization plans around, from marketing launches to hiring timelines to customer commitments.

## How It Works

The six-week cycle works because it sits in a sweet spot between two failure modes. Cycles shorter than four weeks do not give teams enough room to do meaningful work. They spend a disproportionate amount of time on setup, context-switching, and planning overhead relative to building. Cycles longer than eight weeks lose urgency. People unconsciously defer hard decisions because the deadline feels distant, and projects drift into exploratory mode where scope expands to fill available time. Six weeks is long enough to build a real feature (not a trivial improvement) and short enough that the deadline exerts genuine pressure from the start.

The mechanism that makes fixed-time cycles work is variable scope. Traditional project management fixes scope and lets time flex. Shape Up inverts this. The appetite (the amount of time the organization is willing to spend) is set before the cycle starts, and it does not change. What changes is what gets built. Teams start with the shaped pitch, which defines the problem and a rough solution, but they have full authority to simplify, cut, or restructure the implementation to fit within the time box. This is fundamentally different from estimation-based planning, where teams estimate how long a fixed scope will take and then negotiate when estimates prove wrong.

The circuit breaker is the enforcement mechanism. When time runs out, the project either ships or stops. No extensions, no "just one more week." If a project does not ship, leadership must consciously decide to re-bet on it in a future cycle, which means it competes against fresh pitches for capacity. This creates a strong incentive to shape work well before it enters the cycle and to cut scope aggressively during the cycle. It also prevents the organizational debt that accumulates when projects linger for months: teams stay fresh, morale stays high, and the company's capacity is never silently consumed by work that was supposed to be done three cycles ago.

Small team composition is the other critical element. Each project is assigned to one designer and one or two programmers. These people work exclusively on that project for the full six weeks. They are not splitting time across multiple projects. They are not handling support tickets or attending unrelated meetings. This exclusivity is what makes the six-week window sufficient. A team of two people working six dedicated weeks has roughly 480 hours of focused effort, which is more productive output than a team of five splitting attention across multiple projects for the same calendar period. The small team size also means fewer coordination costs, faster decisions, and clearer ownership.

## Step-by-Step Guide

### Step 1: Step 1: Confirm shaped pitches are ready for the cycle

Before a cycle can begin, verify that each project entering the cycle has a completed, shaped pitch. A shaped pitch includes a clear problem statement, the appetite (typically six weeks for a large batch or two weeks for small batch), a rough solution expressed as breadboards or fat-marker sketches, identified rabbit holes, and declared no-gos. Pull each pitch document and check that these elements exist. If a pitch is missing the appetite, it cannot enter the cycle because the team will not know what "done enough" looks like.

If rabbit holes are not called out, the team risks discovering a time sink in week four with no room to recover. Confirm with the shaper that the pitch reflects the latest thinking and has not been overtaken by new information since it was written.

> **Pro tip:** If you find yourself needing to reshape a pitch at this stage, it is not ready. Send it back. Entering a cycle with a half-shaped pitch is the single most common cause of cycle failure.

### Step 2: Step 2: Run the betting table and assign teams

Gather the decision-makers (typically the CEO, CTO, and a senior product person) for the betting table session. Present the shaped pitches and decide which ones to bet on for the upcoming cycle. This is a commitment: once a project is bet on, it will receive a dedicated team for the full six weeks. For each bet, assign a specific small team.

The canonical team is one designer and one or two programmers, though the composition can vary depending on the project (some projects are programming-heavy with no designer, some are design-heavy). Name the people, not just the roles. Every person assigned to a cycle project must be freed from other obligations for those six weeks. Record the bets in a shared document or tool, listing each project, its team, and its appetite.

> **Pro tip:** Keep the betting table to 1-2 hours maximum. If it takes longer, you have too many pitches or the pitches are not shaped well enough. A well-shaped pitch should be evaluable in 10-15 minutes.

### Step 3: Step 3: Kick off the cycle with a team handoff

On day one of the cycle, hand off each shaped pitch to its assigned team. This is not a sprint planning meeting where you break work into tasks and estimate hours. Instead, walk the team through the pitch: the problem, the appetite, the rough solution, the rabbit holes, and the no-gos. Then step back.

The team's first job is to orient themselves, poke at the problem, and figure out their own approach. They should not be expected to produce a task list or a detailed plan on day one. In the first few days, the team will explore the shaped solution, identify the real scopes of work, and start making their own tradeoffs. Make sure the team has access to all relevant context (customer research, prior art, technical constraints) but resist the urge to prescribe an implementation plan.

> **Pro tip:** Give teams two to three days of silence after kickoff. Checking in on day one or two for "status" signals distrust and interrupts the essential orientation phase where teams figure out their approach.

### Step 4: Step 4: Protect the team from interruptions during the cycle

Once the cycle is running, your primary job as a manager or stakeholder is to protect the team's time. This means intercepting requests from other parts of the organization, handling escalations that are not directly related to the cycle work, and saying no to "quick favors" that chip away at available hours. Every interruption during a six-week cycle has an outsized cost because the team cannot get an extension. A day lost to an unrelated fire is a day permanently subtracted from the project's capacity.

Establish a clear protocol before the cycle starts: support rotations are handled by people not on cycle teams, stakeholder requests wait until cool-down, and only genuine emergencies (production outages affecting customers) can break into cycle time. Document this protocol and share it widely so people know the rules before they try to grab someone from a cycle team.

> **Pro tip:** Track interruptions in a simple log. If a team gets pulled away three or more times during a cycle, you have an organizational problem to solve before the next cycle, not a planning problem.

### Step 5: Step 5: Monitor convergence using hill charts, not status reports

"). Instead, have teams update hill charts for each scope of work. A hill chart shows whether a scope is still being figured out (uphill) or is being executed against known work (downhill). The critical signal to watch for is scopes that remain stuck on the uphill side past the midpoint of the cycle (around week three).

A scope stuck uphill in week four means the team has not yet figured out the approach, and with only two weeks left, that scope is at risk. This is your early warning system. When you see a stuck scope, have a conversation with the team about whether to simplify that scope, cut it, or try a different approach. Do not wait until week five to notice the problem.

> **Pro tip:** Check hill charts twice a week, not daily. Daily checks create pressure to show artificial movement. Twice-weekly gives teams enough time between updates to make real progress worth reporting.

### Step 6: Step 6: Cut scope aggressively in weeks four and five

As the cycle enters its second half, the team should be making increasingly aggressive scope decisions. Features that were nice-to-have in week one need to be explicitly cut or simplified by week four. This is where the "fixed time, variable scope" principle gets tested. " Encourage teams to use the concept of "must-haves" versus "nice-to-haves" for every scope.

Must-haves are the things that, if missing, would mean the feature does not solve the shaped problem. Nice-to-haves are improvements that can ship in a future cycle. Document what gets cut and why, because some of those cuts will become future pitches. The team should feel empowered to make these calls without seeking permission from stakeholders.

> **Pro tip:** If a team is not cutting anything by week four, they are either ahead of schedule (rare) or in denial about the remaining work. Ask them to walk you through their remaining scopes on the hill chart and identify which ones they would cut if they had to.

### Step 7: Step 7: Ship at the end of week six or invoke the circuit breaker

On the last day of the cycle, the project either ships to production (or to a staging environment ready for release) or it does not. There is no "95% done" state that gets an extension. If the project ships, celebrate it. If it does not, invoke the circuit breaker: the project stops, the team is released, and the work does not automatically carry into the next cycle.

This is the hardest part of managing six-week cycles because the sunk cost feels real. But the circuit breaker exists to protect future cycles from being consumed by past failures. A project that failed to ship in six weeks needs to go back to the shaping phase, where someone examines why it did not converge. Was it under-shaped?

Was the appetite wrong? Was the problem harder than anticipated? Only after that analysis should it be re-pitched, and it must compete against new pitches at the next betting table.

> **Pro tip:** The circuit breaker gets easier to enforce the second and third time you use it. The first time feels painful. By the third time, the organization understands the rule and shapes work more carefully as a result. Consistency is everything here.

### Step 8: Step 8: Run the cool-down period before the next cycle

After the six-week cycle ends, run a one to two week cool-down period before the next cycle begins. During cool-down, teams are free to fix bugs, address technical debt, explore new ideas, write up learnings from the cycle, or prototype concepts that might become future pitches. Cool-down is not optional. It serves three critical functions: it gives individuals a break from the intensity of a dedicated cycle, it creates space for the maintenance work that keeps the product healthy, and it provides time for shapers and stakeholders to prepare pitches for the next betting table.

Without cool-down, teams burn out by the third or fourth cycle and the quality of work degrades. Schedule the next betting table for the end of cool-down so that shaped pitches are fresh and teams transition cleanly into the next cycle.

> **Pro tip:** Let individuals choose their own cool-down work. Some will fix bugs, some will learn a new technology, some will prototype. The autonomy is part of the recovery. Do not assign cool-down tasks from the top.

## Best Practices

- Set the appetite before shaping, not after estimating. The appetite is a business decision about how much time a problem is worth, not a technical estimate of how long a solution will take. If you set the appetite after the team estimates, you are doing estimation-based planning with extra steps, and the fixed-time constraint loses its power.
- Staff teams with dedicated people, not fractional allocations. A person split between a cycle project and support duty is effectively unavailable for both. If you cannot dedicate two to three people full-time to a project, either reduce the number of cycle projects or hire to fill the gap. Half-staffed cycle teams are the leading cause of missed deadlines in Shape Up implementations.
- Keep cycle projects to three or fewer per cycle across the organization when starting out. Running too many parallel projects creates coordination overhead and makes it harder to protect teams from interruptions. As the organization matures with the cadence, you can increase the number, but start small and prove the system works before scaling it.
- Decouple deployment from the cycle end date. "Shipping" at the end of the cycle means the work is complete and ready to go live, but the actual production deploy can happen on the first day of cool-down if that is operationally safer. The point is that no more building happens after the cycle ends, not that you must deploy at 5pm on a Friday.
- Treat the betting table as a real commitment ceremony. Once a project is bet, the team is locked in for six weeks. Do not pull people off mid-cycle to fight fires or start new work. If you find yourself doing this, you have a capacity planning or interrupt management problem that needs to be solved separately from the cycle process.
- Write down what was cut and why during every cycle. These scope cuts are a valuable record: they reveal patterns about what gets consistently deferred, which informs future shaping. If the same scope gets cut across multiple cycles, it either needs to be its own project with a dedicated appetite or it genuinely is not important enough to build.
- Hold a brief retrospective during cool-down focused on shaping quality, not team performance. Ask: was the pitch shaped well enough? Were the rabbit holes identified? Was the appetite appropriate? Poor cycle outcomes are almost always a shaping problem, not an execution problem, and this framing prevents blame-shifting onto the building team.

## Common Mistakes

- **Extending the cycle by "just a few days" when a project is almost done** — This is the most corrosive mistake because it destroys the credibility of the entire system. Once teams learn that deadlines are negotiable, the urgency that drives scope-cutting disappears. The next cycle, teams will not cut scope in week four because they expect an extension in week seven. Instead, enforce the circuit breaker.

If the project was truly close, it will be easy to re-pitch and re-bet in the next cycle with a smaller appetite. The brief gap between cycles (cool-down) is not wasted time; it is where the organization learns that deadlines are real.
- **Breaking the shaped work into tasks and assigning them on day one like a sprint** — This mistake happens when teams carry Scrum habits into Shape Up. Task decomposition on day one is premature because the team has not yet explored the problem space or discovered the real scopes. Scopes emerge as the team works, usually by day three to five. If you assign tasks on day one, you are planning against your assumptions rather than against discovered reality.

Let the team orient for the first few days, identify scopes organically, and then track progress at the scope level using hill charts rather than at the task level using a backlog.
- **Running six-week cycles without a cool-down period between them** — Skipping cool-down feels efficient in the short term but causes burnout and quality degradation by the third or fourth cycle. Without cool-down, bugs accumulate because there is no time to fix them, teams feel relentless pressure with no recovery period, and shapers have no buffer to prepare the next round of pitches. You will notice the symptoms as increasing cynicism about the process, declining code quality, and a growing backlog of "small things" that never get addressed. Always schedule one to two weeks of cool-down between cycles.
- **Assigning more than one project to a single person within the same cycle** — This looks efficient on paper ("designer X can handle both projects") but fragments attention and creates hidden dependencies between projects. When one project hits a snag, the person's time gets pulled away from the other project, causing both to slip. The core rule is one person, one project, one cycle. If you do not have enough people to staff all the projects you want to run, run fewer projects.

Two well-staffed projects that ship are worth more than four under-staffed projects that all struggle.
- **Using the cycle as a deadline for estimation rather than as a fixed constraint for scoping** — This subtle mistake happens when teams shape a solution, estimate it at "about six weeks," and then treat the cycle as a deadline for delivering that estimated scope. The mindset should be reversed: six weeks is the constraint, and the team adjusts scope to fit. " The language reveals the mental model. If teams talk about being behind, they are thinking in estimation mode.

If they talk about cutting, they are thinking in appetite mode. Coach the language shift early.
- **Allowing stakeholders to add requirements mid-cycle** — Mid-cycle scope additions are the death of fixed-time cycles. When a VP says "can you also add this feature while you're in there," it seems harmless but it destroys the team's ability to manage their own scope tradeoffs. The team shaped and scoped their work against the original pitch. New requirements change the equation in ways that are invisible to the person requesting them.

Establish a firm rule: new ideas that come up during a cycle go into a list for future shaping. They never enter the current cycle. This rule must be enforced by leadership, not by the building team, because the power dynamics make it hard for a programmer to say no to a VP.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/shape-up/METHOD.md) — Shape Up

## Related Skills

- [Planning Cool-Down Periods](../planning-cooldown-periods/SKILL.md)
- [Setting Appetites and Cutting Scope](../setting-appetites-and-managing-scope/SKILL.md)
- [Shaping Product Pitches](../shaping-product-pitches/SKILL.md)
- [Tracking Progress with Hill Charts](../tracking-progress-with-hill-charts/SKILL.md)
- [Running Betting Table Sessions](../running-betting-tables/SKILL.md)
- [Mapping Scopes Instead of Tasks](../mapping-scopes-for-building/SKILL.md)
- [Using Breadboards and Fat-Marker Sketches](../using-breadboards-and-fat-marker-sketches/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
