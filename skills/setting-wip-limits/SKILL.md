---
name: setting-wip-limits
description: "This skill teaches you how to calculate, set, and enforce WIP limits for each stage of your kanban board so work flows smoothly, bottlenecks surface early, and your team stops context-switching between too many items at once."
metadata:
  method: kanban
---

# Setting and Enforcing Work-in-Progress Limits: How to Use Kanban for Better Flow

> This skill teaches you how to calculate, set, and enforce WIP limits for each stage of your kanban board so work flows smoothly, bottlenecks surface early, and your team stops context-switching between too many items at once.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 1-2 hours for initial setup, then 2-4 weeks of tuning |
| Outcome | Your team completes work faster with less context-switching because each workflow stage has a tested, enforced cap on concurrent items that makes bottlenecks visible the moment they form. |
| Prerequisites | A working kanban board with defined workflow columns (see designing-kanban-boards), Basic understanding of kanban flow concepts and pull-based systems, Access to historical data on how long items spend in each stage, or willingness to collect it for 1-2 weeks, Authority or team agreement to enforce limits (not just display them) |
| Part of | [Kanban](../../methods/kanban/METHOD.md) |

## Overview

Work-in-progress limits are the single most important mechanism in [Kanban](https://tryhamster.com/methods/kanban). Without them, a kanban board is just a to-do list with columns. WIP limits are the constraint that transforms a passive visualization into an active management system. They cap the number of items allowed in any given workflow stage at any given time, forcing the team to finish existing work before pulling in new work. This simple rule creates a pull system where work flows downstream based on capacity rather than being pushed in based on demand or wishful thinking.

The problem WIP limits solve is deceptively common: teams take on more work than they can actually process. A developer might have six items "in progress," a designer might be juggling four reviews, and a QA analyst might be testing three features simultaneously. Each individual feels busy, but the system is clogged. Items age in queues, context-switching drains productivity, and lead times balloon. Setting WIP limits makes this invisible overload visible and actionable. When a column hits its limit, no new items can enter until something exits. This forces conversations about priorities, surfaces bottlenecks in real time, and creates the productive tension that drives continuous improvement.

The concrete artifact you produce when applying this skill is a set of per-column WIP numbers displayed on your board, along with a written enforcement policy the team has agreed to. The WIP numbers themselves are the easy part. The hard part, and the real skill, is choosing the right starting numbers, adjusting them based on flow data, and building the team discipline to respect them when pressure mounts. This skill walks through all three. By the end, your board will have calibrated WIP limits that match your team's actual throughput, and your team will have clear protocols for what happens when a limit is reached. You will see measurable reductions in cycle time and a noticeable decrease in the number of stale items sitting untouched in intermediate columns.

## How It Works

WIP limits work because of a principle from queuing theory called Little's Law: the average number of items in a system equals the average arrival rate multiplied by the average time each item spends in the system. In plain language, if you want items to move through your board faster (lower cycle time), you have two options: increase throughput capacity or reduce the number of items in the system. Adding capacity is expensive and slow. Reducing WIP is immediate and free. That is why WIP limits are the highest-leverage change you can make to a [Kanban](https://tryhamster.com/methods/kanban) workflow.

The mental model is a highway. A highway has a maximum throughput at a specific density of cars. Below that density, adding more cars increases total throughput because there is unused capacity. Above that density, every additional car slows everyone down, throughput drops, and you get gridlock. Your kanban board behaves the same way. There is an optimal number of concurrent items per stage. Below that number, people have idle capacity. Above it, context-switching and handoff delays choke the flow. WIP limits keep you at the productive sweet spot.

The formula for a starting WIP limit is straightforward: count the number of people who actively work in a given stage, then add a small buffer. The buffer exists because real workflows have natural variation. Sometimes a developer finishes a task and the next one is not quite ready for pull. A buffer of one or two items prevents that developer from sitting idle while still keeping the system constrained. A common starting formula is: WIP limit = (number of workers in that stage × 1) + 1. For a team of three developers, the "Development" column would start with a WIP limit of 4.

Why not just set the limit to the exact number of workers? Because a zero-buffer system assumes perfect synchronization, which does not exist in knowledge work. Items are different sizes, people get pulled into meetings, dependencies create wait states. The small buffer absorbs this variance without opening the floodgates. But the buffer should stay small. A buffer of three or four items per person means you effectively have no limit at all.

WIP limits also serve as a forcing function for systemic improvement. When a column consistently hits its limit, it reveals a bottleneck. The team must then decide: should we add capacity to that stage, simplify the work entering it, or improve the handoff from the upstream stage? Without WIP limits, bottlenecks hide beneath the surface. Work piles up invisibly, and the team compensates by starting more new items upstream, which makes the problem worse. WIP limits make the pain visible and create urgency to address root causes rather than symptoms.

Finally, WIP limits create accountability for the whole team, not just individuals. When the "Code Review" column is full, the developers writing new code are responsible for helping clear the review queue before pulling in new development work. This shared ownership of flow is what separates a kanban team from a group of individuals working in parallel columns.

## Step-by-Step Guide

### Step 1: Step 1: Map your workflow stages and identify who works in each

Before you can set WIP limits, you need a clear picture of which people do work in which columns. Open your kanban board and list every active column that represents real work being done, not waiting states or buffers. For each active column, write down the names or roles of team members who pull items into that column and do the work. If your board has both active and waiting sub-columns (for example, "Development: Active" and "Development: Waiting for Review"), treat the active sub-column as the constrained stage.

Some people will appear in multiple columns, especially on small teams where a developer also does code review. Note those overlaps because they affect your capacity calculations.

> **Pro tip:** If you are unsure whether a column represents active work or a queue, ask: does someone need to take an action for an item to leave this column? If yes, it is an active stage. If items sit here until someone from the next stage pulls them, it is a queue, and you should still limit it but with a different logic.

### Step 2: Step 2: Calculate starting WIP limits using the n+1 formula

For each active column, apply the starting formula: WIP limit = number of people who work in that stage + 1. If three developers work in the "Development" column, set the initial WIP to 4. If two designers handle "Design," set it to 3. For queue or buffer columns between active stages (like "Ready for Review"), set the WIP limit to 1 or 2 items.

Queues should be small because their purpose is to prevent downstream starvation, not to stockpile work. 5 in each stage. A person who splits time between Design and Development contributes half a unit to each column's capacity.

> **Pro tip:** If your team has fewer than four people total, consider using a single WIP limit for the entire board (a global WIP limit) rather than per-column limits. Per-column limits on a three-person team can create artificial rigidity because one person often spans multiple stages.

### Step 3: Step 3: Write down your enforcement rules before announcing the limits

WIP limits without enforcement rules are suggestions, and suggestions get ignored under pressure. Before you reveal the numbers to the team, draft a short written policy that answers three questions: What happens when a column reaches its WIP limit? Who is allowed to grant an exception, and under what conditions? How does the team signal that a column is blocked?

For the first question, the default answer should be: "No new items may be pulled into a column that has reached its WIP limit. " For exceptions, designate a single person, usually the team lead or product owner, who can temporarily allow a limit breach with a documented reason. For signaling, use a visual indicator such as turning the column header red or adding a "blocked" tag to the item causing the constraint.

> **Pro tip:** Write the enforcement policy as three bullet points, not a page-long document. If people have to look it up, they will not follow it. Pin it next to the board or in the team's chat channel.

### Step 4: Step 4: Apply the limits to your board and brief the team

Add the WIP numbers to your kanban board. Most digital tools have a dedicated WIP limit field per column. " Then hold a brief 15-minute team meeting to explain three things: what the numbers mean, what happens when a limit is hit, and why you are doing this (faster delivery, less context-switching, fewer stale items). Be transparent that the starting numbers are estimates and will be adjusted.

Ask the team to commit to respecting the limits for a two-week trial period. Do not debate the exact numbers in this meeting because you do not have flow data yet. Promise to revisit and adjust based on evidence.

> **Pro tip:** Frame WIP limits as a team experiment, not a management mandate. Teams resist limits that feel imposed. Teams rally around limits they helped test and tune.

### Step 5: Step 5: Observe flow for two weeks and record what happens at the limits

For the next two weeks, track every time a column hits its WIP limit. Record the date, which column was full, how long it stayed full, and what the team did in response. Did they swarm to help clear the bottleneck? Did they wait idle?

Did someone override the limit? Also track your basic flow metrics during this period: how many items were completed per week (throughput), how long items took from start to finish (cycle time), and how many items were in progress at any given time (total WIP). You will need this data to make informed adjustments. Pay special attention to columns that never come close to their limit because these are candidates for tightening.

> **Pro tip:** Keep a simple log in a shared spreadsheet with columns: Date, Column Name, Event ("limit hit" / "limit breached" / "swarming occurred"), Notes. This log is your evidence base for the tuning conversation in Step 6.

### Step 6: Step 6: Adjust limits based on observed flow patterns

After two weeks, review your log and flow metrics with the team. Look for four patterns. First, a column that hits its limit frequently while the column downstream is usually empty. This means the bottleneck is real and in the right place, so keep the limit and invest in improving that stage's throughput.

Second, a column that hits its limit but items are aging because they are blocked, not because the team is actively working on the maximum number. This means blocked items are consuming WIP capacity, so add an explicit "blocked" sub-state and consider whether blocked items should count against the limit. Third, a column that never reaches its limit. Tighten it by reducing the WIP by one.

Continue tightening until you feel mild tension. Fourth, a column where the team routinely overrides the limit with justification. Consider whether the limit is too tight or whether the override reasons reveal a process problem to fix. Make one adjustment at a time, wait another one to two weeks, and measure again.

> **Pro tip:** The right WIP limit feels slightly uncomfortable. If the team never bumps up against it, the limit is too generous. If the team is constantly fighting the limit and work stalls completely, the limit is too tight. Aim for the zone where the limit surfaces problems without paralyzing progress.

### Step 7: Step 7: Handle common resistance and exception requests

Within the first month, someone will ask to exceed a WIP limit. This is expected and healthy because it means the limits are working. The correct response is not to refuse outright but to make the cost visible. When someone requests an exception, ask: which of the items currently in progress should we deprioritize or pause to make room?

This forces a priority conversation rather than just adding more work. If a stakeholder or executive pushes for a WIP override, show them the data from your observation log. Explain that adding an item to a full column will slow everything in that column, not just the new item. If they still insist, grant the exception, document it, and track the impact on cycle time.

Over time, the data will show that exceptions consistently increase lead time, which makes the case for limits stronger.

> **Pro tip:** Create a visible "exception count" metric on the board. Teams that track exceptions publicly tend to reduce them naturally because the social visibility creates gentle accountability.

### Step 8: Step 8: Institutionalize limits with regular review cadences

WIP limits are not set-and-forget. As your team size changes, as work types shift, and as process improvements take effect, the optimal WIP limit changes too. Build a WIP limit review into your regular [cadences](https://tryhamster.com/skills/running-kanban-cadences). In your retrospective or service delivery review, look at your cumulative flow diagram to spot where work accumulates.

If a stage's average WIP has drifted well below its limit for several weeks, tighten it. If a stage is constantly at its limit and you have verified the bottleneck is genuine, either invest in that stage's capacity or accept it as the system's constraint and protect it from interruptions. Document any changes to WIP limits and the reasoning behind them. This creates a historical record that helps new team members understand why the limits are set where they are.

> **Pro tip:** A quarterly WIP limit review is sufficient for stable teams. Teams going through significant changes (new members, new product areas, reorganizations) should review monthly until flow stabilizes.

## Best Practices

- Start with limits that feel slightly too tight rather than too loose. A generous limit will never reveal problems because you will never hit it. A tight limit creates productive friction that surfaces bottlenecks and forces the team to collaborate on clearing them. You can always loosen a limit that proves genuinely too tight, but teams rarely voluntarily tighten limits that are too loose because comfort feels like success.
- Apply WIP limits to the team, not to individuals. Setting a per-person WIP of two items might seem logical, but it defeats the purpose. Kanban WIP limits constrain the system to create flow, and when a column is full, anyone on the team should pitch in to clear it. Per-person limits turn a team system into individual task management and prevent the swarming behavior that makes kanban effective.
- Make WIP limits physically visible on the board, not buried in tool settings. A WIP limit that you have to click into a settings menu to see will be forgotten within a week. Whether you use a digital or physical board, the limit number should be visible at a glance next to the column name. Many teams use the format "Column Name [3]" or color the column header yellow when it reaches 80% of its limit and red when full.
- Count blocked items against WIP limits. Teams sometimes argue that a blocked item should not count because "we are not actively working on it." But blocked items consume the team's attention, carry context-switching costs, and occupy space in the workflow. Counting them against the limit creates urgency to unblock them. If blocked items routinely eat up WIP capacity, create a separate "blocked" swim lane and add an explicit escalation policy for unblocking.
- Set WIP limits on queue columns too, not just active work columns. Unlimited queues between stages defeat the purpose of WIP limits on the active stages. If your "Ready for Development" queue can hold 20 items, then upstream stages will keep feeding it, and developers will cherry-pick easy items instead of pulling the highest priority one. Cap queue columns at one to three items to maintain pull discipline.
- Never change WIP limits in the middle of a crisis. The temptation to raise the limit when the team is under pressure is strong, but this is exactly the moment when limits provide the most value. The limit is telling you that your system cannot absorb more work at its current capacity. Adding items will make the crisis worse, not better.

Changing limits should be a deliberate, data-informed decision made during a retrospective, not a reactive move during a crunch.
- Use WIP limits as a conversation starter, not a conversation ender. When someone asks "why can't I start this new item?", the answer is not "because the WIP limit says no." The answer is "because we have four items in progress and finishing any one of them will free up capacity. Which of those four should we focus on first?" Limits should redirect energy toward completion, not create frustration.

## Common Mistakes

- **Setting WIP limits too high to avoid team pushback** — A WIP limit of 10 on a column where five people work is not a limit. It is decoration. This happens because teams negotiate the limit upward until it never triggers. " If that conversation has never happened, your limits are too high.

Lower each column's limit by one every two weeks until the team hits the limit at least twice per week. That is the zone where limits start revealing real flow problems.
- **Applying WIP limits without enforcement, treating them as guidelines** — Teams often set WIP limits in their tool but then routinely exceed them without discussion. Digital tools typically allow you to add items past the limit with no friction beyond a color change. This creates what practitioners call "decorative WIP limits," numbers on the board that nobody respects. The cause is usually a missing enforcement protocol.

Fix this by requiring that any WIP limit breach be announced in the team's standup or chat channel with a stated reason. Track breaches as a metric. Teams that make breaches visible reduce them by 60-80% within a month because social accountability is a powerful motivator.
- **Setting a single global WIP limit instead of per-column limits** — A global WIP limit (for example, "no more than 12 items in progress across the whole board") is a useful starting point for very small teams, but for teams of five or more it hides the location of bottlenecks. You might have 12 items total, which sounds fine, but 8 of them could be stuck in code review while the other columns sit empty. Per-column limits make the distribution of work visible. The exception is teams of three or fewer, where per-column limits can create artificial gridlock because one person often spans multiple stages.

For these micro-teams, a global limit of n+1 where n is the team size works better.
- **Never adjusting WIP limits after the initial setup** — Teams set WIP limits once and treat them as permanent fixtures. But your optimal WIP depends on team size, work type, and process maturity, all of which change. The sign that your limits are stale is that your cycle time has plateaued despite process improvements, or a team member has joined or left without the limits being recalculated. Build a WIP review into your retrospective cycle.

Look at your cumulative flow diagram: if bands are consistently thin and even, your limits are working. If one band is widening steadily, that column's limit may be too high or its throughput is degrading.
- **Exempting "small" or "quick" items from WIP limits** — Teams often argue that a tiny bug fix or a quick config change should not count against the WIP limit because it will be done in minutes. But small items still consume attention, still require context switches, and still carry risk of expanding scope. Once you allow exceptions for "small" items, the definition of small creeps upward until half the work bypasses the limit. Instead, if truly trivial items are a category, create an explicit expedite lane with its own small WIP limit (typically one item).

Anything that does not qualify for the expedite lane follows normal WIP rules regardless of estimated size.
- **Focusing WIP limits only on development stages and ignoring upstream columns** — Product teams frequently set WIP limits on "Development" and "Testing" but leave "Backlog Refinement" or "Design" unconstrained. This creates an imbalance where upstream stages overproduce refined or designed items that pile up waiting for development capacity. The result is wasted design effort when priorities change and a false sense of productivity in upstream stages. Apply WIP limits to every active column on the board, from the earliest refinement stage through to the final review before done.

The entire system must be constrained for pull to work end-to-end.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/kanban/METHOD.md) — Kanban

## Related Skills

- [Managing Projects with Kanban](../managing-projects-with-kanban/SKILL.md)
- [Running Kanban Cadences and Feedback Loops](../running-kanban-cadences/SKILL.md)
- [Designing Effective Kanban Boards](../designing-kanban-boards/SKILL.md)
- [Measuring Kanban Flow Metrics](../measuring-kanban-flow-metrics/SKILL.md)
- [Creating Explicit Pull Policies and Workflow Rules](../creating-kanban-pull-policies/SKILL.md)
- [Comparing Kanban and Scrum for Your Team](../comparing-kanban-and-scrum/SKILL.md)
- [Choosing the Right Kanban Tools and Software](../choosing-kanban-tools-and-software/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
