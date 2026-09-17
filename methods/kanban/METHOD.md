---
category: Workflows
---

# Kanban: The Visual Workflow Method for Continuous Delivery

> Created by **Taiichi Ohno**

## Overview

Kanban is a method for managing the flow of work by making it visible, limiting how much work happens at once, and continuously improving the system that produces outcomes. At its core, it replaces push-based planning ("here's what you must finish this sprint") with pull-based flow ("take the next item only when you have capacity"). The result is a system that adapts to changing priorities without requiring teams to wait for a planning boundary or renegotiate commitments mid-cycle.

The method originated in Toyota's manufacturing system during the late 1940s and 1950s, where engineer Taiichi Ohno developed a signal-card system (the Japanese word "kanban" translates roughly to "visual signal" or "signboard") to synchronize production with actual demand. Rather than building inventory based on forecasts, factory workers would send a card upstream to request more parts only when their station needed them. This just-in-time approach eliminated overproduction, reduced waste, and exposed inefficiencies that had been hidden by excess inventory.

In 2007, David J. Anderson adapted these manufacturing principles for knowledge work, formalizing what became known as the Kanban Method for software development and, eventually, any kind of project work. Anderson's insight was that the same physics applies: knowledge workers drown in context-switching when they juggle too many tasks, just as a factory floor chokes when overloaded with work-in-progress. His book, "Kanban: Successful Evolutionary Change for Your Technology Business" (2010), codified the method's core practices: visualize work, limit WIP, manage flow, make policies explicit, implement feedback loops, and improve collaboratively.

What distinguishes kanban from other agile and lean approaches is its commitment to evolutionary change. Scrum prescribes roles (Scrum Master, Product Owner), ceremonies (sprint planning, retrospectives), and timeboxes (two-week sprints). Kanban prescribes almost nothing about your existing structure. You start with what you do now, visualize it, and then improve incrementally. There are no mandatory role changes, no required meeting cadences, no sprint boundaries. This makes kanban uniquely approachable for teams that cannot or do not want to reorganize around a framework, and it makes kanban a natural complement to other methods rather than a replacement.

Over the past fifteen years, kanban has evolved well beyond its software development roots. Marketing teams use it to manage campaign workflows. Operations teams track support tickets through triage and resolution. Hardware teams coordinate design reviews and manufacturing handoffs. The method scales up through portfolio kanban boards that visualize initiatives across departments, and scales down to personal productivity boards for individual contributors. The Kanban University community has formalized maturity models and advanced practices like kanban flight levels, service classes, and Monte Carlo forecasting, but the entry point remains disarmingly simple: a board, some columns, some cards, and an agreement to stop starting and start finishing.

Kanban benefits teams most when work arrives unpredictably, priorities shift frequently, and the cost of context-switching is high. Support engineering teams, platform teams handling cross-cutting requests, and product teams running continuous discovery all tend to find kanban more natural than iteration-based methods. It also works well for teams that ship continuously (deploying multiple times per day) because the method optimizes for throughput and cycle time rather than batch delivery at sprint boundaries. Hamster provides a workspace where teams can run kanban with AI agents that help track flow metrics and surface bottlenecks automatically.

The most common misunderstanding about kanban is that it is simply "a board with columns." A Trello board with no WIP limits, no flow metrics, and no feedback loops is not kanban. It is a task list with a spatial layout. The board is necessary but not sufficient. The method lives in the constraints you place on the board, the data you collect about how work flows through it, and the conversations you have about what the data reveals.

## Core Principles

### Visualize Work

Every piece of work, whether a feature, bug, experiment, or operational task, gets represented as a card on a shared board. The board's columns map to the actual stages work passes through, not an idealized process. Visualization does two things simultaneously: it creates shared awareness of what the team is working on, and it makes systemic problems impossible to ignore. When a column is visibly overflowing, the team cannot pretend the bottleneck doesn't exist.

Teams that skip visualization, or that let boards go stale, lose the feedback mechanism that makes every other kanban practice functional.

### Limit Work in Progress

WIP limits cap the number of items allowed in each column (or across the board) at any given time. This is the single most important constraint in kanban, and it is the one teams most often resist. Without WIP limits, a kanban board is just a to-do list. With them, the board becomes a pull system: new work enters only when an existing item moves forward.

WIP limits force teams to finish before starting, reduce context-switching costs, and expose bottlenecks. The tradeoff is real discomfort. Stakeholders who want to see their request "in progress" must wait, and team members must help unblock stuck items rather than picking up new, easier work.

### Manage Flow

The goal of kanban is not to keep people busy. It is to keep work moving smoothly through the system. Managing flow means tracking metrics like cycle time (how long one item takes from start to finish), throughput (how many items complete per unit of time), and work item age (how long active items have been in progress). These metrics reveal whether the system is healthy or degrading.

Teams that focus on flow rather than utilization discover counterintuitive truths: leaving some people idle at times actually increases total throughput because it prevents the bottleneck columns from clogging.

### Make Process Policies Explicit

Every column transition on a kanban board implies a policy: what does "done" mean for this stage? Who can pull items into the next column? What information must be present before an item enters a given stage? When teams leave these policies implicit, disagreements fester and quality becomes inconsistent.

Making policies explicit, even as simple annotations on the board itself, creates a shared contract the team can inspect and improve. It also makes onboarding faster because new team members can read the rules rather than absorbing them through osmosis over weeks.

### Implement Feedback Loops

Kanban defines several cadences (regular meetings) designed to create feedback at different time horizons: the daily standup focuses on flow and blockers, the replenishment meeting decides what to pull into the system next, the delivery planning meeting coordinates releases, and the service delivery review examines metrics over time. Unlike Scrum's prescribed ceremonies, kanban cadences are optional and modular. Teams adopt whichever loops address their biggest pain points. The risk of skipping feedback loops entirely is that the board becomes a static display rather than a living system.

Without regular inspection, WIP limits get violated, stale cards accumulate, and improvement stalls.

### Improve Collaboratively, Evolve Experimentally

Kanban does not ask teams to adopt a target process on day one. Instead, it encourages teams to start with their current workflow, visualize it honestly, and then run small, safe-to-fail experiments to improve it. Change one WIP limit. Add or merge a column.

Introduce a new policy for expedited items. Measure the result. Keep what works, revert what doesn't. This evolutionary approach reduces organizational resistance because it does not threaten existing roles, titles, or reporting structures.

The tradeoff is that progress feels slower than a big-bang transformation, but the changes that stick tend to be durable because the team owns them.

### Respect the Current Process

Kanban explicitly starts from where you are. It does not prescribe new roles, new team structures, or new planning cycles. This principle exists because organizational change that ignores existing social and political realities tends to fail or create resentment. By respecting the current process, kanban earns trust before asking for change.

Teams that violate this principle, for example by redesigning their board to reflect an aspirational process that nobody actually follows, end up with a board that looks clean and a workflow that operates in the shadows.

## Steps

1. **Step 1: Map Your Current Workflow**
   Before creating any board, observe and document how work actually flows through your team today. Interview team members about what happens after a request arrives: who receives it, what decisions are made, what handoffs occur, and where items tend to wait. Write down the stages as verbs or statuses ("Triaged," "In Design," "In Development," "In Review," "Deployed") rather than departments or people. Be honest about the real process, not the one you wish you had.

A common mistake is designing an aspirational board that nobody follows, which guarantees the board becomes stale within weeks. You know you've done this step well when a new team member could read the map and roughly predict the journey of a work item from arrival to completion.

2. **Step 2: Design the Board**
   Translate your workflow map into columns on a physical or digital board. Each column represents a stage in the process. Add a backlog or input queue on the left and a done column on the right. For stages that involve distinct activities (such as "Development" having both active coding and code review), split them into sub-columns to make waiting time visible.

Keep the board as simple as possible at first. Five to seven columns is typical for a team-level board. Resist the urge to model every edge case on day one. The board will evolve as you learn.

For detailed guidance on board design, column structure, and card anatomy, see the [designing kanban boards](https://tryhamster.com/skills/designing-kanban-boards) skill.

3. **Step 3: Populate the Board with Current Work**
   Put every piece of active work on the board, not just the work you want to acknowledge. Include the half-finished tasks, the "I'll get to it next week" items, and the things waiting on external dependencies. Each card should include enough context for any team member to understand what the item is and what stage it is in: a short title, the requester or customer, and any relevant deadline. This step often produces an uncomfortable moment of clarity.

Teams routinely discover they have 30 or 40 items "in progress" across 5 people, which immediately explains why nothing seems to finish. That discomfort is the point. It is the starting data for every improvement that follows.

4. **Step 4: Set Initial WIP Limits**
   Assign a maximum number of items allowed in each active column. A reliable starting heuristic is to set the WIP limit per column to the number of people who work in that stage, then subtract one. So a team of four developers might set the "In Development" WIP limit to three. This feels uncomfortably tight, and that is intentional.

The limit should create a small amount of productive tension that forces the team to finish items before starting new ones. You can adjust limits up or down after a few weeks of observation, but err on the side of too tight rather than too loose. A WIP limit that is never hit is not a limit. For deeper guidance, see [setting WIP limits](https://tryhamster.com/skills/setting-wip-limits).

5. **Step 5: Define Pull Policies and Entry Criteria**
   Document the rules that govern how items move between columns. When can a developer pull an item from "Ready for Dev" into "In Development"? What information must be present on the card? What does "done" mean for each stage?

Write these policies directly on the board or in an easily accessible team document. Start simple: even a one-sentence definition of done per column is better than nothing. The goal is to eliminate ambiguity that causes rework and disagreement. For example, if "In Review" requires a pull request with passing tests and a reviewer assigned, make that explicit.

Teams that skip this step often discover inconsistent quality and frequent back-and-forth between stages. See [creating pull policies](https://tryhamster.com/skills/creating-kanban-pull-policies) for worked examples.

6. **Step 6: Establish Feedback Cadences**
   Decide which regular meetings the team will hold and how frequently. ") and a weekly or biweekly replenishment meeting where the team decides which items to pull into the board from the broader backlog. Avoid the common mistake of turning the standup into a status report to management. The standup should be a peer coordination mechanism focused on the board itself: walking the board from right to left, identifying stuck items, and swarming on blockers.

Over time, consider adding a service delivery review (monthly, examining flow metrics and trends) and a retrospective. See [running kanban cadences](https://tryhamster.com/skills/running-kanban-cadences) for a detailed breakdown of each ceremony.

7. **Step 7: Measure Flow and Iterate**
   Begin tracking cycle time, throughput, and work item age from day one, even if the data feels noisy. Cycle time tells you how long items take from commitment to completion. Throughput tells you how many items the team finishes per week. Work item age flags items that have been in progress too long and may be stuck or blocked.

Review these metrics in your service delivery review and use them to drive experiments: "Our average cycle time spiked last month. We think it is because code reviews are taking three days. " Measure the result, keep it if it works, revert if it doesn't. This step is continuous and never finished.

See [measuring flow metrics](https://tryhamster.com/skills/measuring-kanban-flow-metrics) for guidance on which metrics to track and how to interpret them.

## When to Use

- When your team handles a continuous stream of incoming requests that vary in size, urgency, and type, such as a support engineering team receiving bug reports, infrastructure requests, and escalations from multiple internal customers simultaneously. Kanban's pull-based model lets the team absorb variability without the overhead of sprint planning and re-planning.
- When work items arrive unpredictably and priorities shift frequently, making it impractical to commit to a fixed scope two weeks in advance. Product teams running continuous discovery, where learnings from one experiment immediately change what to build next, often find kanban's flow-based approach more natural than timeboxed iterations.
- When you need to reduce cycle time and get work delivered faster without adding headcount. Kanban's WIP limits and flow metrics systematically expose where work stalls, letting teams address root causes rather than adding more people to an already-overloaded process.
- When you are introducing process improvement to a team that is skeptical of or exhausted by methodology changes. Because kanban starts with the current process and evolves incrementally, it meets less resistance than frameworks that require role changes, new ceremonies, or restructured teams.
- When multiple teams or departments need a shared view of how work flows across organizational boundaries. Portfolio-level kanban boards can visualize initiatives from intake through delivery across product, design, engineering, and operations, revealing cross-team dependencies and handoff bottlenecks that per-team tools hide.
- When your team ships continuously, deploying multiple times per day, and the concept of a two-week sprint boundary feels artificial. Kanban optimizes for continuous delivery by treating every completed item as independently releasable, aligning the process model with the deployment reality.

## When Not to Use

- When your team is new to any form of structured workflow management and needs guardrails to build discipline. Kanban's permissiveness (no mandatory roles, no mandatory ceremonies, no mandatory timeboxes) can leave inexperienced teams adrift. Scrum's prescriptive structure often serves better as training wheels because it forces teams to plan, review, and retrospect on a fixed cadence until those habits become natural.
- When stakeholders require predictable, date-based commitments for large batches of scope, such as a regulatory deadline that demands features A through F delivered together by March 15. Kanban excels at optimizing throughput and cycle time for individual items, but it does not natively produce the kind of fixed-scope, fixed-date plan that some business contexts demand. Teams in this situation often need iteration-based planning or a hybrid approach.
- When the work is genuinely sequential and single-threaded, with only one or two items in flight at any time. A solo freelancer working on one client project at a time gets little value from WIP limits and flow metrics because there is nothing to limit and nothing to measure. The overhead of maintaining a kanban system exceeds the benefit.
- When the team's biggest problem is not flow but alignment on goals, priorities, or strategy. Kanban optimizes the how of delivery, not the what. If the team is building the wrong things efficiently, adding a kanban board makes the wrong things move faster. In this case, methods focused on prioritization, like [RICE](https://tryhamster.com/methods/rice-framework) or opportunity-solution trees, address the root problem.
- When deep collaboration on a single deliverable is the primary work mode, such as a three-person design team co-creating one brand identity over six weeks. Kanban's card-per-item model assumes work can be decomposed into discrete, independently movable items. Highly collaborative, entangled work does not decompose cleanly, and forcing it onto a board creates artificial fragmentation.

## Skills

This method includes the following skills:

- [Managing Projects with Kanban](../../skills/managing-projects-with-kanban/SKILL.md) — How to apply Kanban principles to plan, execute, and deliver projects using pull-based scheduling and continuous delivery instead of fixed sprints.
- [Running Kanban Cadences and Feedback Loops](../../skills/running-kanban-cadences/SKILL.md) — How to facilitate the seven Kanban cadences — including standups, replenishment meetings, delivery planning, and service delivery reviews — to enable continuous improvement.
- [Setting and Enforcing Work-in-Progress Limits](../../skills/setting-wip-limits/SKILL.md) — How to determine optimal WIP limits for each workflow stage to reduce bottlenecks, improve flow, and prevent team overload.
- [Designing Effective Kanban Boards](../../skills/designing-kanban-boards/SKILL.md) — How to structure columns, swimlanes, and card layouts on a Kanban board to accurately visualize your team's workflow from intake to completion.
- [Measuring Kanban Flow Metrics](../../skills/measuring-kanban-flow-metrics/SKILL.md) — How to track and interpret lead time, cycle time, throughput, and cumulative flow diagrams to continuously improve delivery performance.
- [Creating Explicit Pull Policies and Workflow Rules](../../skills/creating-kanban-pull-policies/SKILL.md) — How to define clear entry and exit criteria for each Kanban column so the team knows exactly when and how to pull work forward through the system.
- [Comparing Kanban and Scrum for Your Team](../../skills/comparing-kanban-and-scrum/SKILL.md) — How to assess the differences between Kanban's continuous flow and Scrum's sprint-based approach to choose or combine the right method for your context.
- [Choosing the Right Kanban Tools and Software](../../skills/choosing-kanban-tools-and-software/SKILL.md) — How to evaluate and select digital Kanban tools like Trello, Jira, and Asana based on team size, workflow complexity, and integration needs.

## FAQ

**What is kanban in simple terms?**

Kanban is a way of managing work by making it visible on a board and limiting how much work happens at the same time. Work items are represented as cards that move through columns (like "To Do," "Doing," "Done"), and the team pulls new work only when they have capacity. The constraint on simultaneous work, called a WIP limit, is what separates kanban from a simple task board and is what drives its benefits: less multitasking, faster delivery, and clearer visibility into bottlenecks.

**Kanban vs Scrum: which should my team use?**

Scrum works best when your team can commit to a fixed scope for a two-week sprint, benefits from prescribed roles (Scrum Master, Product Owner), and needs the discipline of regular planning and review ceremonies. Kanban works best when work arrives unpredictably, priorities shift frequently, and you want to improve your existing process without overhauling roles or team structure. Many teams use a hybrid: Scrum's sprint cadence for planning and retrospectives combined with kanban's WIP limits and flow metrics for day-to-day execution. For a detailed comparison, see [comparing kanban and scrum](https://tryhamster.com/skills/comparing-kanban-and-scrum).

**Does kanban work for small teams of 2-3 people?**

Yes, and small teams often get outsized benefits because the coordination overhead is low while the visibility gains are immediate. A three-person team with a shared kanban board can see at a glance who is blocked, what is close to done, and where to swarm. WIP limits on a small team are typically very tight (1-2 per column), which forces focused execution. The one caveat is that if a solo contributor is working on a single stream of sequential tasks, the kanban overhead may not be justified.

**Why does kanban fail in practice?**

The most common failure mode is treating the board as decoration: cards go up but nobody enforces WIP limits, nobody tracks flow metrics, and nobody holds regular feedback cadences. Without WIP limits, the board becomes an infinite to-do list that creates anxiety instead of focus. Without metrics, the team has no data to drive improvement. Without cadences, stale cards accumulate and the board stops reflecting reality.

The second most common failure is managerial override, where leaders routinely push items past WIP limits for "emergencies," which destroys trust in the system and teaches the team that limits do not matter.

**How does kanban work alongside OKRs and roadmaps?**

Kanban manages the flow of execution. OKRs define goals and desired outcomes. Roadmaps communicate strategic direction and rough sequencing. They operate at different altitudes and complement each other naturally.

OKRs inform what enters the kanban board (which initiatives to prioritize), the roadmap communicates the broader arc to stakeholders, and the kanban board manages day-to-day delivery. Flow metrics from kanban (throughput, cycle time) feed back into roadmap conversations by grounding them in data about how fast the team actually delivers, replacing guesswork with historical evidence.

**Can kanban scale to large organizations with multiple teams?**

Yes, through a concept called portfolio kanban or flight levels. At the team level (Flight Level 1), individual teams manage their own boards. At the coordination level (Flight Level 2), a cross-team board visualizes how work flows between teams and highlights dependencies and handoffs. At the strategy level (Flight Level 3), a portfolio board tracks strategic initiatives from ideation through delivery.

Each level has its own WIP limits, cadences, and flow metrics. The key challenge at scale is keeping boards connected so that upstream decisions are informed by downstream capacity, preventing the common pattern of leadership committing to more initiatives than the organization can absorb.

**Do I need a specific kanban tool or software?**

No. Kanban is tool-agnostic by design. A whiteboard with sticky notes and a marker works for co-located teams. Digital tools (Trello, Jira, Linear, Notion, and many others) work for remote and distributed teams.

The important thing is that whatever tool you use supports the core practices: visible cards, configurable columns, enforceable WIP limits, and flow metric tracking. Many teams start with a physical board to build the habit, then migrate to software once the process is stable. See [choosing kanban tools](https://tryhamster.com/skills/choosing-kanban-tools-and-software) for selection criteria.

**How long does it take to see results from kanban?**

Most teams see immediate clarity in the first week just from visualizing all their work in progress (the "oh, we have 40 things in flight" moment). Meaningful flow improvements typically appear within 4-8 weeks of enforcing WIP limits, as cycle times decrease and the team develops the habit of finishing before starting. Sustained, compounding improvement requires ongoing measurement and experimentation over months. Teams that track metrics consistently for a quarter often see cycle time reductions of 30-50% compared to their starting baseline, because each small improvement builds on the last.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
