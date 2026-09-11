---
name: running-kanban-cadences
description: "This skill teaches you how to facilitate the seven Kanban cadences, from daily standups to quarterly strategy reviews, so your team has the right feedback loops at the right frequency to continuously improve flow and delivery outcomes."
metadata:
  method: kanban
---

# Running Kanban Cadences and Feedback Loops for Kanban Agile Teams

> This skill teaches you how to facilitate the seven Kanban cadences, from daily standups to quarterly strategy reviews, so your team has the right feedback loops at the right frequency to continuously improve flow and delivery outcomes.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours to design and schedule all cadences, then 2-3 weeks to establish the rhythm |
| Outcome | Your team operates a structured rhythm of meetings and reviews that surface bottlenecks, replenish work at a sustainable pace, and produce measurable improvements in delivery predictability every month. |
| Prerequisites | A working Kanban board with columns representing your workflow stages, Basic understanding of WIP limits and why they matter (see /skills/setting-wip-limits), Access to flow metrics like cycle time, throughput, and work item age (see /skills/measuring-kanban-flow-metrics), Familiarity with the Kanban method's principles of evolutionary change and respect for current roles |
| Part of | [Kanban](../../methods/kanban/METHOD.md) |

## Overview

Kanban cadences are the recurring meetings and review sessions that form the nervous system of any kanban agile implementation. Without them, a Kanban board is just a pretty wall of sticky notes. The board shows the current state, but cadences are what turn that visibility into action. They provide the structured moments where teams inspect their flow, make decisions about what to work on next, identify systemic problems, and commit to specific improvements. If you have a board but no cadences, you have half a system.

The [Kanban](https://tryhamster.com/methods/kanban) method defines seven cadences, each operating at a different altitude and frequency. At the team level you have the daily standup (called the Kanban meeting), the replenishment meeting where new work enters the system, and the delivery planning meeting where finished work is coordinated for release. At the service level you have the service delivery review, which examines flow metrics and fitness for purpose. At the organizational level you have the operations review, the risk review, and the strategy review. Most teams start with just two or three of these and add more as their system matures. The key insight is that each cadence serves a distinct purpose, and collapsing multiple purposes into a single meeting usually means one of them gets neglected.

The concrete artifact you produce when applying this skill is a cadence calendar: a documented schedule listing each active cadence, its frequency, its participants, its facilitator, the data inputs required, and the expected output (typically a decision or action item). This calendar becomes a living contract between the team and its stakeholders about when and how decisions get made. Over the first month, you refine the calendar based on what actually produces useful outcomes and what feels like ceremony. The goal is not to run all seven cadences on day one. The goal is to run the right cadences at the right frequency with the right people, and to keep adjusting until every meeting earns its place on the schedule.

This skill sits at the heart of the Kanban method's commitment to evolutionary change. Where [designing effective boards](https://tryhamster.com/skills/designing-kanban-boards) makes work visible and [setting WIP limits](https://tryhamster.com/skills/setting-wip-limits) controls flow, cadences are where the team learns from the system and takes corrective action. They are the difference between a team that uses Kanban and a team that improves with Kanban.

## How It Works

The seven cadences work because they create feedback loops at different time horizons, each matched to the type of decision it supports. A daily standup catches blocked items within hours. A weekly replenishment meeting ensures the team always has the right work queued up. A monthly service delivery review reveals whether systemic improvements are actually working. Without this layering, teams tend to oscillate between two failure modes: either they have no meetings and problems fester until they become crises, or they have one big weekly meeting that tries to cover everything and ends up covering nothing well.

The underlying model is borrowed from systems thinking. Every process has a natural feedback delay, which is the time between taking an action and seeing its effect. Daily decisions about blocked items have short feedback delays, so you review them daily. Decisions about what types of work to accept have longer delays, so you review them weekly or biweekly. Strategic decisions about service offerings or class-of-service policies have the longest delays, so you review them quarterly. Matching cadence frequency to feedback delay is what makes the system responsive without being reactive.

Each cadence follows a common structure, even though the content differs. You start by reviewing the current state of the board or the relevant metrics. Then you identify variances: what is different from what we expected? Then you decide on actions: what will we do about it? Finally, you confirm who owns the action and when you will check on it. This inspect-adapt loop is the engine of continuous improvement in kanban agile systems. The board and metrics provide the data. The cadence provides the forum. The action item provides the commitment.

One critical distinction is between team-level and service-level cadences. Team-level cadences (standup, replenishment, delivery planning) focus on the work itself: which items are stuck, what should we pull next, what is ready to ship. Service-level cadences (service delivery review, operations review, risk review, strategy review) focus on the system: are we delivering at the rate customers expect, are there systemic risks building up, is our service mix still aligned with business strategy. Most teams intuitively understand team-level cadences because they resemble daily standups and sprint planning from other methodologies. Service-level cadences are where the real leverage lives, because they address the structural causes of problems rather than just the symptoms.

The practical challenge is not understanding the theory. It is knowing which cadences to start with, how to keep them focused, and how to avoid the gravitational pull that turns every meeting into a status update. The steps below walk through exactly that: designing your cadence calendar from scratch, facilitating each type of meeting effectively, and evolving the system over time.

## Step-by-Step Guide

### Step 1: Step 1: Audit Your Current Meetings and Their Purposes

Before adding any new cadences, list every recurring meeting your team currently attends that touches workflow, planning, or delivery. For each meeting, write down its stated purpose, its actual purpose (often different), who attends, how long it takes, and what output it produces. Flag meetings where no concrete decision or action item is produced, because these are candidates for replacement or restructuring. Also flag meetings that try to serve multiple cadence purposes at once, such as a weekly meeting that mixes status updates with replenishment decisions and retrospective discussions.

This audit gives you a clear picture of where your feedback loops already exist and where the gaps are. Most teams discover they have decent coverage at the daily level but almost no structured review at the service or organizational level.

> **Pro tip:** If a meeting consistently runs over time, it is usually because it is trying to serve two cadence purposes. Split it rather than extending it.

### Step 2: Step 2: Select Your Starting Cadences Based on Team Maturity

Choose which cadences to implement first. For teams new to Kanban, start with three: the daily Kanban meeting (standup), the replenishment meeting, and the delivery planning meeting. These cover the essential feedback loops of unblocking work, feeding the system, and coordinating output. If your team has been running Kanban for a few months and has stable flow metrics, add the service delivery review as your fourth cadence.

Only add the operations review, risk review, or strategy review once you have multiple teams or services running Kanban and need cross-team coordination. Trying to run all seven cadences from day one is a common mistake that creates meeting fatigue and dilutes focus. Document your selection with a brief rationale for each cadence you chose and each one you deferred.

> **Pro tip:** If you are not sure whether to add a cadence, ask: what decision would this meeting produce that is not being made anywhere else right now? If you cannot name a specific decision, defer the cadence.

### Step 3: Step 3: Design Each Cadence's Format and Frequency

For each selected cadence, define five things: frequency, duration, participants, data inputs, and expected output. The daily Kanban meeting runs daily for 15 minutes with the delivery team, uses the board's current state as input, and produces a list of items needing attention today. The replenishment meeting runs weekly or biweekly for 30-60 minutes with the product owner and team leads, uses the backlog and commitment point queue as input, and produces a decision about which items to pull into the committed portion of the board. The delivery planning meeting runs as needed (often weekly) for 30 minutes with whoever coordinates releases, uses the done column and any deployment requirements as input, and produces a release plan.

The service delivery review runs monthly for 60-90 minutes with the team, management, and stakeholders, uses flow metrics (cycle time, throughput, work item age charts) as input, and produces improvement action items. Write all of this into a single cadence calendar document that the team can reference.

> **Pro tip:** Keep the daily standup anchored to the board, not to individual status reports. Walk the board right to left, starting with items closest to done, because those are closest to delivering value.

### Step 4: Step 4: Prepare the Data Artifacts Each Cadence Needs

Each cadence depends on specific data being available at meeting time. Before your first cycle, verify that you can produce these artifacts. For the daily standup, you need a current board view with work item ages visible, so everyone can see at a glance which items have been sitting too long. For the replenishment meeting, you need a prioritized list of candidate items ready for commitment, along with the current WIP count per stage so you know whether there is capacity to pull.

For the service delivery review, you need a cycle time scatterplot, a throughput run chart, and a cumulative flow diagram covering at least the past 30 days. If these metrics do not exist yet, invest time in setting up basic tracking before launching the cadence. Running a service delivery review without data turns it into an opinion session, which destroys credibility for the meeting format.

> **Pro tip:** Automate metric generation wherever possible. If your tool cannot produce cycle time charts automatically, a simple spreadsheet with formulas works well enough for the first few months.

### Step 5: Step 5: Facilitate the Daily Kanban Meeting

The daily Kanban meeting is not a status report. It is a flow-focused triage session. The facilitator walks the board from right to left, column by column. ' When an item is blocked, the facilitator captures the blocker and identifies who will resolve it.

When an item has been in a column longer than its typical cycle time for that stage, the facilitator flags it for attention even if no one has explicitly raised a concern. The meeting should end with a clear list of items needing intervention today. Keep it to 15 minutes by deferring deeper discussions to after the meeting. The facilitator's role is to protect the timebox and keep focus on flow, not to manage the team.

> **Pro tip:** Use colored indicators or tags to mark items that have exceeded their expected time in a stage. This makes the daily meeting faster because blockers become visually obvious before anyone has to speak up.

### Step 6: Step 6: Facilitate the Replenishment Meeting

The replenishment meeting decides what work enters the system. Before the meeting, the product owner or equivalent should have a prioritized list of candidate items ready. During the meeting, the team reviews available capacity by checking WIP counts against limits. If there is room to pull new work, the group walks through the top candidates and makes explicit commitment decisions: this item enters the system, or it does not.

The key discipline is to only commit work the team has capacity to start. Overfilling the commitment queue defeats the purpose of WIP limits. Each committed item should have clear acceptance criteria and any dependencies identified. The meeting also reviews the overall mix of work types (features, bugs, maintenance, expedites) to ensure balance aligns with policies.

Document every commitment decision so there is no ambiguity about what was agreed.

> **Pro tip:** If the replenishment meeting consistently takes longer than 60 minutes, your candidate list is too large or your prioritization criteria are too vague. Pre-filter the list before the meeting to the top 10-15 candidates.

### Step 7: Step 7: Facilitate the Service Delivery Review

The service delivery review is where continuous improvement actually happens. It runs monthly and examines whether the system is delivering at the level customers and stakeholders expect. Start by reviewing the key flow metrics: cycle time distribution, throughput trend, and cumulative flow diagram. Identify any shifts, such as cycle time increasing, throughput dropping, or a stage's band widening on the CFD.

For each anomaly, discuss possible causes. Then review any improvement actions from the previous review and check whether they had the intended effect. This is critical: if you set actions but never follow up, the meeting loses credibility quickly. End by selecting one or two new improvement experiments for the coming month.

These should be specific, time-boxed, and measurable.

> **Pro tip:** Invite at least one stakeholder or customer representative to the service delivery review. Their perspective on whether delivery is meeting expectations is data the team cannot generate internally.

### Step 8: Step 8: Capture and Track Action Items Across Cadences

Every cadence should produce at least one action item, and every action item needs an owner and a review date. Create a shared action log visible to all cadence participants. At the start of each cadence, the facilitator reviews outstanding actions from previous sessions before introducing new topics. Actions that are repeatedly deferred or never completed signal one of two problems: either the action was not important enough to warrant the meeting time spent discussing it, or the team lacks capacity to act on improvements alongside delivery work.

Both are worth surfacing explicitly. If your action completion rate drops below 70%, reduce the number of actions per cadence to one. One completed improvement is worth more than five that sit on a list.

> **Pro tip:** Track improvement actions on the Kanban board itself as a distinct work type. This makes improvement work visible alongside delivery work and forces the team to allocate real capacity to it.

### Step 9: Step 9: Review and Evolve Your Cadence Calendar Quarterly

After running your cadences for 8-12 weeks, conduct a meta-review of the cadence system itself. For each cadence, ask: did this meeting consistently produce decisions or actions that would not have happened otherwise? Was attendance and engagement high? Did the data inputs support useful discussion?

Retire or restructure cadences that are not earning their place. Add new cadences if the team has identified gaps, for example, adding a risk review if cross-team dependencies are causing repeated delivery misses. Adjust frequencies if a weekly meeting would work better biweekly, or vice versa. The cadence calendar should evolve alongside the team's maturity.

A team that has been running Kanban for a year should have a different cadence setup than one in its first month. Document every change and the rationale behind it.

> **Pro tip:** Ask team members to anonymously rate each cadence on a 1-5 usefulness scale before the quarterly review. Meetings rated below 3 consistently are candidates for restructuring or elimination.

## Best Practices

- Anchor every cadence discussion on the board or on metrics, never on individual status reports. When conversations drift to 'what I did yesterday,' the meeting stops producing systemic insights and starts producing performance theater. The observable consequence is that blockers go unmentioned because people focus on appearing productive rather than surfacing problems.
- Walk the board right to left in the daily standup, starting with items closest to done. Items near completion represent the most invested effort and the closest value delivery. Left-to-right discussion often runs out of time before reaching the items that matter most, leaving nearly-finished work stuck while new work keeps starting.
- Separate the replenishment decision from the prioritization discussion. Prioritization is a strategic conversation about what matters most. Replenishment is an operational decision about what the system has capacity to accept right now. Mixing them causes teams to debate strategy every week instead of making quick pull decisions based on pre-agreed priorities.
- Time-box every cadence strictly, and defer detailed discussions to follow-up sessions with only the relevant participants. A 15-minute standup that regularly runs 40 minutes is not a standup, it is an unstructured planning meeting. Enforcing timeboxes teaches the team to communicate concisely and signals that everyone's time is valued.
- Limit improvement actions from the service delivery review to one or two per cycle. Teams that generate five or six actions per review rarely complete any of them, which erodes trust in the cadence over time. Completing one meaningful improvement and demonstrating its impact builds momentum for the next cycle.
- Rotate the facilitator role across team members every few weeks. This distributes ownership of the cadence system, builds facilitation skills across the team, and prevents the cadences from becoming one person's meeting that others passively attend. If only one person can run the meeting, the cadence is fragile.
- Use the cumulative flow diagram as the primary artifact in the service delivery review, not just cycle time averages. The CFD reveals queue buildups, flow inefficiencies, and WIP policy violations that averages obscure. A flat or widening band in the CFD tells you exactly which stage needs attention.
- Keep a visible record of completed improvements and their measured impact. When the team can see that last month's experiment reduced cycle time by 20%, they develop genuine belief in the improvement process. Without this record, continuous improvement feels like continuous talking.

## Common Mistakes

- **Turning the daily Kanban meeting into individual status reports** — This happens because teams import standup habits from Scrum without adapting to Kanban's flow focus. The tell is that each person speaks in turn about their work, and nobody references the board. To catch it, notice whether the board is even visible during the meeting. Fix it by making the board the sole agenda: walk it right to left, and only discuss items, not people.

If someone's update does not connect to a specific board item, it belongs in a different conversation.
- **Skipping the replenishment meeting and letting work enter the system informally** — This typically occurs when a senior stakeholder drops work directly into the 'in progress' column, bypassing the commitment point. The signal is WIP limits being exceeded without a conscious team decision. This undermines the entire pull system because work enters without capacity checks. Fix it by making the replenishment meeting the only sanctioned entry point for non-expedite work, and by making the commitment point visible on the board with a clear policy posted next to it.
- **Running service delivery reviews without prepared flow metrics** — Teams often schedule the review but fail to prepare the data, so the meeting devolves into anecdotes and opinions. You can spot this pattern when conversations include phrases like 'it feels like things are slower' without any numbers to confirm or deny. The fix is to assign metric preparation as a specific task to a specific person at least two days before the review. If the data is not ready, postpone the meeting rather than running it without evidence.

One skipped meeting with a clear explanation is better than a dozen opinion sessions that train people to ignore the data.
- **Running all seven cadences from the first week** — This happens when teams read the Kanban guide cover to cover and try to implement everything at once. The result is meeting fatigue, poor attendance, and cadences that lack substance because the team does not yet have the data or organizational context to make them productive. Watch for declining attendance in the third and fourth week. Start with three cadences (daily, replenishment, delivery planning), let them stabilize for 6-8 weeks, then add the service delivery review.

Add organizational cadences only when you have multiple teams or services to coordinate.
- **Generating action items in the service delivery review but never following up on them** — This is the most corrosive mistake because it teaches the team that the review is performative. It happens because action items are recorded in meeting notes that nobody reopens. The signal is that the same problems appear in consecutive reviews with no progress. Fix it by reviewing the previous meeting's actions as the first agenda item of every service delivery review.

Track actions on the Kanban board itself so they are visible daily, not buried in a document. If actions are not getting done, reduce to one action per review and allocate explicit capacity for it.
- **Using the same meeting format for every cadence** — Some teams apply a generic agenda template to all cadences: round-the-table updates, discussion, action items. This misses the point that each cadence has a distinct purpose and requires distinct inputs. The daily standup should be board-focused and fast. The replenishment meeting should be decision-focused and structured around capacity.

The service delivery review should be data-focused and structured around metrics. Design each cadence's agenda specifically for its purpose, and resist the urge to standardize across all meeting types.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/kanban/METHOD.md) — Kanban

## Related Skills

- [Managing Projects with Kanban](../managing-projects-with-kanban/SKILL.md)
- [Setting and Enforcing Work-in-Progress Limits](../setting-wip-limits/SKILL.md)
- [Designing Effective Kanban Boards](../designing-kanban-boards/SKILL.md)
- [Measuring Kanban Flow Metrics](../measuring-kanban-flow-metrics/SKILL.md)
- [Creating Explicit Pull Policies and Workflow Rules](../creating-kanban-pull-policies/SKILL.md)
- [Comparing Kanban and Scrum for Your Team](../comparing-kanban-and-scrum/SKILL.md)
- [Choosing the Right Kanban Tools and Software](../choosing-kanban-tools-and-software/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
