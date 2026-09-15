---
name: planning-and-executing-sprints
description: "This skill teaches you how to scope, plan, and run time-boxed scrum sprints — including backlog selection, capacity planning, sprint goal setting, and in-sprint execution practices that deliver a potentially shippable increment."
metadata:
  method: scrum
---

# Scrum Sprint Planning: Planning and Executing Sprints

> This skill teaches you how to scope, plan, and run time-boxed scrum sprints — including backlog selection, capacity planning, sprint goal setting, and in-sprint execution practices that deliver a potentially shippable increment.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | You can confidently facilitate sprint planning sessions, set meaningful sprint goals, right-size the sprint scope to team capacity, and guide the team through a disciplined sprint execution that consistently delivers working increments. |
| Prerequisites | Basic understanding of the Scrum framework and its ceremonies, A prioritized and refined product backlog with estimated items, Familiarity with estimating work with story points, Understanding of Scrum roles (Product Owner, Scrum Master, Developers) |
| Part of | [Scrum](../../methods/scrum/METHOD.md) |

## Overview

Scrum sprint planning is the critical ceremony where your team transforms a prioritized backlog into a concrete, time-boxed plan of action. It's the starting gun for every sprint — the moment where strategy meets execution. Without effective sprint planning, teams either overcommit and burn out, undercommit and lose stakeholder trust, or work on low-value items that don't move the product forward.

This skill covers the complete lifecycle of a sprint: from the planning ceremony itself (setting the sprint goal, selecting backlog items, decomposing work into tasks) through in-sprint execution (tracking progress, managing impediments, protecting scope). It's the backbone of the [Scrum](https://tryhamster.com/methods/scrum) framework and directly determines whether your team ships valuable increments or just stays busy.

Mastering scrum sprint planning means you can reliably forecast what your team will deliver, align everyone around a shared objective, and create the conditions for focused, sustainable delivery. Whether you're a Scrum Master facilitating planning, a Product Owner negotiating scope, or a developer committing to work, this skill is essential for making Scrum actually work in practice.

## How It Works

Sprint planning operates on a simple but powerful principle: **constraint breeds focus**. By fixing the timebox (usually 1-4 weeks) and honestly assessing the team's capacity, you force prioritization decisions that would otherwise be deferred indefinitely. The sprint goal provides a "north star" that helps the team make trade-off decisions throughout the sprint without needing to escalate every question.

The mechanics work in two parts. **Part 1 (the "What")** is driven by the Product Owner, who presents the highest-priority items from the [refined backlog](https://tryhamster.com/skills/grooming-the-product-backlog) and proposes a sprint goal. The team discusses each item to ensure they understand the acceptance criteria and complexity. **Part 2 (the "How")** is driven by the developers, who decompose selected product backlog items into tasks, identify dependencies, and confirm they can realistically complete the work within the sprint timebox.

Capacity planning bridges these two parts. Rather than guessing, teams calculate their available capacity by accounting for team size, planned time off, meetings, and historical velocity. This creates a data-informed constraint that prevents the team from overloading the sprint. The result is a sprint backlog — a plan owned by the developers that represents their best forecast of what they can deliver toward the sprint goal.

During sprint execution, the plan serves as a living document. The team uses [daily stand-ups](https://tryhamster.com/skills/running-daily-standups) to inspect progress and adapt their approach. The Scrum Master protects the sprint from scope creep while the team swarms on work to maximize flow. The sprint ends with a [sprint review](https://tryhamster.com/skills/conducting-sprint-reviews) and [retrospective](https://tryhamster.com/skills/facilitating-sprint-retrospectives), feeding learnings back into the next planning cycle.

## Step-by-Step Guide

### Step 1: Step 1: Ensure the Backlog Is Ready

Before sprint planning begins, verify that the top of the product backlog is refined, estimated, and prioritized. Ideally, the top 1.5-2 sprints' worth of items should have clear acceptance criteria, [story point estimates](https://tryhamster.com/skills/estimating-work-with-story-points), and no unresolved dependencies.

The Product Owner should have a preliminary sprint goal in mind based on the product roadmap, stakeholder feedback, and the current state of the product. If backlog items are vague or unestimated, sprint planning will devolve into a grooming session — which wastes the entire team's time and leads to poor commitments.

Check in with the Product Owner 1-2 days before sprint planning to confirm readiness. If the backlog isn't ready, it's better to hold a focused refinement session than to run a planning ceremony that produces an unreliable plan.

> **Pro tip:** A good litmus test: if a developer can't explain what 'done' looks like for a backlog item in 30 seconds, it's not ready for sprint planning.

### Step 2: Step 2: Calculate Team Capacity

Before selecting any work, calculate how much the team can realistically accomplish in the upcoming sprint. Start with your historical velocity (the average number of story points completed over the last 3-5 sprints) as a baseline.

Then adjust for known factors: Is anyone on vacation? Are there company-wide events or holidays? Is there significant carryover from the previous sprint? Are there planned technical spikes or infrastructure work that will consume capacity? For a two-week sprint with a 5-person team that normally delivers 40 story points, losing one team member for the full sprint means you should plan for roughly 32 points.

Capacity planning isn't about precision — it's about creating a realistic constraint. Teams new to Scrum should be conservative and gradually calibrate their capacity over several sprints.

> **Pro tip:** Track capacity adjustments and actual delivery over time. After 5-6 sprints, you'll have a reliable velocity range that accounts for normal variation.

### Step 3: Step 3: Set the Sprint Goal

The sprint goal is the single most important output of sprint planning, yet it's the element teams most often skip or treat as an afterthought. The Product Owner proposes a sprint goal that articulates the business value or user outcome the sprint should achieve — not a list of tickets, but a coherent objective.

A good sprint goal answers the question: "If we accomplish this, what changes for our users or business?" Examples include "Enable users to complete checkout without creating an account" or "Reduce API response time below 200ms for the product catalog." The goal should be ambitious but achievable within the sprint timebox.

The team discusses the proposed goal, asks clarifying questions, and may negotiate scope. The sprint goal becomes the decision-making framework for the rest of the sprint: when unexpected work arises or trade-offs are needed, the team can ask, "Does this help us achieve the sprint goal?"

> **Pro tip:** Write the sprint goal on a whiteboard or pin it to the top of your Scrum board. If team members can't recite it from memory by mid-sprint, it's not specific enough.

### Step 4: Step 4: Select Product Backlog Items

With the sprint goal set and capacity calculated, the team pulls items from the top of the product backlog into the sprint. Start with items that directly support the sprint goal, then consider additional high-priority items that fit within the remaining capacity.

For each item, the team should confirm: Do we understand the acceptance criteria? Are there dependencies on other teams or systems? Do we have the right skills on the team to complete this? Is the estimate still accurate given what we know now?

Don't fill the sprint to 100% capacity. Leave a buffer of 10-20% to account for unexpected complexity, bug fixes, and the inevitable overhead that every sprint brings. Teams that consistently plan to 100% capacity consistently miss their sprint commitments.

> **Pro tip:** If a single backlog item consumes more than 40-50% of sprint capacity, consider splitting it. Oversized items are the leading cause of sprint failures.

### Step 5: Step 5: Decompose Items into Tasks

Once the team agrees on which backlog items to include, developers break each item down into concrete tasks. This is where abstract user stories become actionable work: "Update the database schema," "Write the API endpoint," "Create the UI component," "Write integration tests," "Update documentation."

Task decomposition serves two purposes. First, it validates that the team truly understands what's required — if they can't identify the tasks, they don't understand the work. Second, it makes progress visible during the sprint. Tracking task completion during [daily stand-ups](https://tryhamster.com/skills/running-daily-standups) gives the team an early warning if they're falling behind.

Tasks should be small enough to complete in a day or less. If a task will take multiple days, it's likely hiding complexity that should be surfaced and discussed.

> **Pro tip:** Don't assign tasks to individuals during planning. Let team members self-select tasks during the sprint to promote ownership and flexibility.

### Step 6: Step 6: Confirm the Sprint Plan and Commitment

Before closing sprint planning, do a final sanity check. Review the sprint goal, walk through the selected backlog items, and ask the team: "Are we confident we can deliver this within the sprint?" This isn't a blood oath — it's a professional forecast based on the team's best judgment.

If the team hesitates or expresses doubt, take it seriously. Remove the lowest-priority item and ask again. It's far better to plan conservatively and deliver everything than to overcommit and demoralize the team.

Document the sprint plan in your [Scrum board tool](https://tryhamster.com/skills/managing-scrum-boards-in-jira), ensuring every selected item is in the sprint backlog with tasks attached. The Scrum Master should confirm the sprint timebox (start and end dates) and remind the team of the sprint review and retrospective dates.

> **Pro tip:** End sprint planning by having one team member restate the sprint goal in their own words. If their version doesn't match the Product Owner's intent, you have an alignment gap to close.

### Step 7: Step 7: Execute the Sprint with Discipline

Once the sprint starts, the team's job is to work through the sprint backlog with focus and discipline. Use [daily stand-ups](https://tryhamster.com/skills/running-daily-standups) to synchronize, surface impediments, and re-plan as needed. Track progress against the sprint goal — not just individual ticket completion.

The Scrum Master plays a critical role during execution: removing impediments, shielding the team from scope creep, and coaching the team on self-organization. When stakeholders request new work mid-sprint, the default answer is: "We can add it to the backlog for next sprint." If it's truly urgent, the team negotiates by removing equivalent work from the current sprint.

As the sprint progresses, the team should be swarming on items to get them to "Done" rather than starting many items in parallel. A sprint where 8 out of 10 items are complete is far more valuable than one where all 10 items are 80% complete.

Toward the end of the sprint, focus shifts to finishing and polishing. Any items that won't be completed should be transparently communicated and moved back to the product backlog — not rushed to a half-done state that creates technical debt.

> **Pro tip:** Use a sprint burndown chart to visualize remaining work. If the trend line diverges from the ideal line by mid-sprint, the team needs to discuss scope adjustments immediately — not on the last day.

## Best Practices

- Time-box sprint planning to a maximum of 2 hours per week of sprint length (e.g., 4 hours for a 2-week sprint). If you can't finish planning in that window, your backlog isn't refined enough.
- Always define a sprint goal before selecting individual backlog items. The goal gives coherence to the sprint and helps the team make autonomous decisions during execution.
- Use historical velocity as a guide, not a target. Velocity is a planning tool, not a performance metric. Teams that are pressured to increase velocity will inflate estimates instead of improving delivery.
- Leave 10-20% of capacity unplanned to absorb bug fixes, production support, and unexpected complexity. This buffer is not slack — it's realism.
- Ensure every backlog item entering the sprint meets your team's Definition of Ready: estimated, acceptance criteria defined, dependencies identified, and small enough to complete within the sprint.
- Review the previous sprint's outcomes at the start of planning. What carried over? What was blocked? What did you learn in the [retrospective](https://tryhamster.com/skills/facilitating-sprint-retrospectives)? Let those insights inform your current plan.

## Common Mistakes

- **Treating the sprint backlog as a fixed contract rather than a forecast** — The sprint backlog is the team's best plan for achieving the sprint goal. If new information emerges during the sprint, the team should adapt the plan while preserving the sprint goal. Rigidly sticking to the original plan when circumstances change is waterfall thinking disguised as agile.
- **Skipping the sprint goal and treating planning as a ticket-stuffing exercise** — Without a sprint goal, the sprint is just a random collection of tasks with no coherent purpose. Always start planning by defining what outcome you're targeting. If stakeholders can't articulate a goal, ask: 'If this sprint succeeds, what's different for our users?'
- **Letting the Product Owner or manager dictate how much work the team should take on** — The Product Owner decides what to work on (priority), but the developers decide how much they can take on (capacity). Sprint planning is a negotiation, not a directive. Teams that are overloaded by external pressure will either cut quality or burn out — both of which destroy long-term velocity.
- **Planning to 100% capacity with no buffer for the unexpected** — Every sprint includes unplanned work: production bugs, urgent stakeholder requests, technical surprises. Plan to 80-85% of historical velocity and use the buffer to absorb these realities. Teams that consistently overcommit erode trust and morale.
- **Starting sprint execution with unrefined or ambiguous backlog items** — If a backlog item doesn't have clear acceptance criteria and a reliable estimate, it shouldn't enter the sprint. Invest in regular [backlog refinement](https://tryhamster.com/skills/grooming-the-product-backlog) sessions so that sprint planning focuses on selection and task decomposition — not discovery.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/scrum/METHOD.md) — Scrum

## Related Skills

- [Defining Scrum Roles and Accountabilities](../defining-scrum-roles-and-accountabilities/SKILL.md)
- [Facilitating Sprint Retrospectives](../facilitating-sprint-retrospectives/SKILL.md)
- [Grooming and Refining the Product Backlog](../grooming-the-product-backlog/SKILL.md)
- [Estimating Work with Story Points and Planning Poker](../estimating-work-with-story-points/SKILL.md)
- [Running Effective Daily Stand-Up Meetings](../running-daily-standups/SKILL.md)
- [Conducting Sprint Reviews and Demos](../conducting-sprint-reviews/SKILL.md)
- [Managing Scrum Boards in Jira](../managing-scrum-boards-in-jira/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
