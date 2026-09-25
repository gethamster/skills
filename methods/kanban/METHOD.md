---
name: "kanban"
category: "Workflows"
description: "Kanban is a pull-based way to manage knowledge work with a kanban board, WIP limits and flow metrics, rooted in the Toyota Production System."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Kanban: Boards, WIP Limits and Flow for Knowledge Work

> Created by **Taiichi Ohno (Toyota Production System kanban)** - [https://www.toyota-global.com/company/history_of_toyota/75years/text/entering_the_automotive_business/chapter1/section4/item4.html](https://www.toyota-global.com/company/history_of_toyota/75years/text/entering_the_automotive_business/chapter1/section4/item4.html)

## Overview

Kanban is a way of managing work by making it visible, controlling how much of it is in progress, and starting new work only when there is capacity to finish it. The Kanban Guide by John Coleman and Daniel Vacanti defines it as "a strategy for optimizing the flow of value through a process" built on three practices: defining and visualizing a workflow, actively managing the items in it, and improving it ([The Kanban Guide](https://kanbanguides.org/english/)). In daily use, the kanban methodology looks simple: a kanban board with columns for the stages work passes through, a card for each item, a limit on how many cards each stage may hold, and a few measurements of how long items take.

The word comes from manufacturing. Kanban is Japanese for "sign" or "signboard," and in the [Lean Enterprise Institute's lexicon](https://www.lean.org/lexicon-terms/kanban/) a kanban is a signaling device that authorizes production or withdrawal of items in a pull system. Toyota's own history says the Just-in-Time idea was not fully realized until the "supermarket method" was proposed in 1954, with later processes taking what they need from earlier ones and the kanban as the tool for doing it ([Toyota, The Origins of Just-in-Time](https://www.toyota-global.com/company/history_of_toyota/75years/text/taking_on_the_automotive_business/chapter2/section4/item5.html)). Toyota adopted its kanban management system at all plants in 1963, and its history credits Taiichi Ohno (spelled Ono there) with establishing the Toyota Production System around Just-in-Time and jidoka ([Toyota, Development of TPS](https://www.toyota-global.com/company/history_of_toyota/75years/text/entering_the_automotive_business/chapter1/section4/item4.html)).

Kanban for knowledge work is a later adaptation. The Kanban Guide says the practices now called Kanban "mainly originated on a team at Corbis in 2006" ([The Kanban Guide](https://kanbanguides.org/english/)). The [Agile Alliance timeline](https://www.agilealliance.org/glossary/kanban/) traces the approach to David J. Anderson, who applied a kanban pull system on a Microsoft IT project in 2004 and identified the Kanban Method at Corbis in 2006-2007. Anderson's book, Kanban: Successful Evolutionary Change for Your Technology Business, followed in 2010, and Kanban University's official guide describes the Kanban Method as based on it ([Kanban University](https://kanban.university/kanban-guide/)).

Today two published definitions coexist, and they are worth keeping apart. The Kanban Method from Anderson and Kanban University is a change-management method: it starts from how you work now, adds visualization, WIP limits and feedback loops, and evolves the process through small, safe-to-fail experiments ([Official Guide to The Kanban Method](https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_A4.pdf)). The Kanban Guide is narrower and centered on flow. It requires a written Definition of Workflow, four flow metrics and a service level expectation, and it says plainly that improvements do not have to be small or incremental. Both agree on the mechanics that turn a board into a kanban system.

That distinction matters because the most common misunderstanding of kanban is that it is just a board with columns. A board without WIP limits, agreed policies or measurements shows work but does not manage it. The Kanban Guide requires that system members "explicitly control the number of work items in a workflow from started to finished," which is what turns the board into a pull system. The method lives in those constraints and in the conversations the data provokes.

Kanban suits work that arrives continuously and unpredictably: support and platform teams, operations, marketing production, and product teams that ship small changes often. Kanban project management applies the same pull system to work with a goal and an end, as described in [managing projects with kanban](../../skills/managing-projects-with-kanban/SKILL.md). It also layers onto other methods. Kanban University describes it as something you add to an existing way of working, and says it does not replace what you already do ([Official Guide to The Kanban Method](https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_A4.pdf)), and many teams run it inside [Scrum](https://tryhamster.com/methods/scrum). Hamster gives teams a shared place to keep the board's policies and the decisions behind them, so people and AI agents read the same rules.

How to use kanban well comes down to a short loop. Model the real workflow, put all active work on the board, cap work in progress, write down the rules for moving cards, meet regularly to look at flow, and change one thing at a time based on what the numbers show. The skills below cover each part of that loop in depth, from designing the board to choosing kanban software.

## Three Meanings of Kanban

People use the same word for three related things. Knowing which one a source means avoids a lot of confused debate.

| Meaning | What it is | Core rules | Origin |
|---|---|---|---|
| Toyota kanban | A card or signal that authorizes production or withdrawal of parts | Later processes take only what they need; the kanban says which parts, how many, where and when | Adopted at all Toyota plants in 1963 ([Toyota](https://www.toyota-global.com/company/history_of_toyota/75years/text/entering_the_automotive_business/chapter1/section4/item4.html)) |
| Kanban Method | A method for managing and improving knowledge-work services | Three change management principles, three service delivery principles, six general practices | Anderson's 2010 book ([Kanban University](https://kanban.university/kanban-guide/)) |
| The Kanban Guide | A minimal definition of Kanban as a flow strategy | Definition of Workflow, WIP control, four flow metrics, SLE | Versions v2020.7 to v2025.5 by Coleman and Vacanti ([Kanban Guides](https://kanbanguides.org/english/)) |

The Toyota system manages physical inventory between processes. The two knowledge-work definitions manage invisible work and add explicit policies and measurement. Where the Kanban Method and the Kanban Guide differ, the difference is mostly about change: the Method stresses evolutionary, collaborative change and a service-oriented view of the organization, while the Guide leaves the size and timing of changes to the team.

## Core Principles

### Start With What You Do Now

The Kanban Method's first change management principle is "Start with what you do now" ([Official Guide to The Kanban Method](https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_A4.pdf)). You model the workflow as it really runs, including the waiting and the rework, instead of the process you wish you had. Existing roles and titles stay in place. This lowers resistance, because nobody's identity is threatened on day one. A board that shows an aspirational process quickly goes stale while the real work happens elsewhere.

### Visualize the Work and the Workflow

Every work item gets a card, and the columns match the states work actually passes through. Kanban University notes that much work in organizations is hidden, and that visualizing it and its flow "greatly improves transparency." The board is where the team sees queues, blockers and aging items. It also carries the policies and limits that govern the work, so the board is the system's rulebook as well as its display.

### Limit Work in Progress

A WIP limit caps how many items a column, lane, person or whole system may hold. When the count drops below the limit, that gap is the signal to pull new work; the Kanban Guide says members should start work "only when there is a clear signal that there is capacity to do so" ([The Kanban Guide](https://kanbanguides.org/english/)). Limits reduce context switching and make bottlenecks visible, because work piles up in front of the constrained stage. Kanban University's shorthand for the cultural shift is "Stop starting, start finishing."

### Manage Flow

Managing flow means watching how work moves through the system and paying less attention to how busy each person is. The Kanban Guide names four mandatory flow metrics: WIP, throughput, work item age and cycle time. Kanban University argues that fully utilized systems have no slack and flow poorly, like a highway at rush hour. The practical consequence is that a team sometimes leaves capacity idle so that items already in progress can finish.

### Make Policies Explicit

Every column implies rules: what must be true to pull a card in, what "done" means for the stage, how expedited work is handled, and when the board is replenished. Kanban University lists these as examples of policies and says they should be sparse, simple, well-defined, visible, always applied and readily changeable by the people providing the service. Written policies end arguments that come from different unspoken assumptions. They also let a newcomer learn the system by reading it.

### Implement Feedback Loops

Feedback loops are the board itself, the metrics, and a set of regular meetings and reviews called cadences. Anderson describes seven cadences, from a daily Kanban meeting to a strategy review, and expects existing meetings to be adapted or combined rather than seven new ones added ([Anderson, Kanban Cadences](https://djaa.com/kanban-cadences/)). Without regular inspection, limits erode and stale cards accumulate. With it, the data turns into decisions.

### Improve Collaboratively, Evolve Experimentally

The Kanban Method treats improvement as a series of experiments. You form a hypothesis, change one thing, observe the effect on flow, and keep or roll back the change. Kanban University describes these as safe-to-fail experiments that can be reversed if the results are poor. The Kanban Guide is less prescriptive and says a team that needs a significant change should make it. Both expect the workflow to keep changing as the team learns.

## Steps

1. **Map the current workflow**
   Gather the people who do the work and trace what happens to a request from arrival to delivery. Kanban University's STATIK approach starts with sources of dissatisfaction, then analyzes demand and capability before modeling the workflow, and it recommends doing this with a representative group rather than one manager ([Official Guide to The Kanban Method](https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_A4.pdf)). Name the states items pass through and the points where they wait. Identify the commitment point, where the team agrees to deliver, and the delivery point. You are done when anyone on the team could predict an item's path from the map.

2. **Design the kanban board**
   Turn the map into columns, with an options or backlog area on the left and a finished column on the right. Split stages that include waiting, such as a "Review" stage with "Ready for review" and "In review," so queues become visible. Add swimlanes only for distinctions the team acts on, such as an expedite lane or separate work types. Keep the first version simple, because the board will change. The [kanban board design](../../skills/designing-kanban-boards/SKILL.md) skill covers columns, swimlanes and cards in detail.

3. **Put all current work on the board**
   Add every item already in progress, including half-finished work, items waiting on other teams and favors nobody wrote down. Each card needs a clear title, a requester and any real deadline. This step usually shows far more work in progress than anyone expected. That discomfort is useful, because it explains why little is finishing and gives the team a baseline.

4. **Set initial WIP limits**
   Choose a limit for each active column or for the board as a whole, and write down what happens when a column is full. Start from how many people work in each stage and adjust from observation; for example, a stage worked by three people might start with a limit of three. The Kanban Guide asks that any acceptable exceptions to WIP control be made explicit. Tighten limits that are never reached and investigate columns that are always full. See [setting WIP limits](../../skills/setting-wip-limits/SKILL.md) for the method of choosing and enforcing them.

5. **Write pull policies for each column**
   Agree on entry and exit criteria for each stage: what must be true before a card may enter, and what must be true before it can move on. Add replenishment rules and rules for each class of service, such as expedite and fixed-date items. Post the policies on or next to the board. The [kanban pull policies](../../skills/creating-kanban-pull-policies/SKILL.md) skill shows how to draft and test them.

6. **Establish cadences**
   Start with a short daily Kanban meeting that walks the board from right to left and asks what is keeping each item from flowing and who can help. Add a replenishment meeting to choose what enters the system next. As the system matures, add a service delivery review that looks at flow data and customer expectations. Fold these into existing meetings where they serve the same purpose. The [kanban cadences](../../skills/running-kanban-cadences/SKILL.md) skill explains each meeting.

7. **Measure flow and improve**
   Record when each item starts and finishes so you can track WIP, throughput, work item age and cycle time. Once you have history, set a service level expectation, which the Kanban Guide defines as a forecast of how long an item should take, stated with a probability. Use the numbers to choose one experiment at a time, such as a lower limit on review, and check whether flow improved. Keep what works and revert what does not. The [kanban flow metrics](../../skills/measuring-kanban-flow-metrics/SKILL.md) skill covers the calculations and charts.

## When to Use

- A team handles a continuous stream of requests that vary in size and urgency, such as a platform or support team serving several internal customers. Pulling work as capacity frees up absorbs that variability without re-planning a fixed batch.
- Priorities change often enough that committing to a fixed scope for several weeks is unrealistic. Kanban lets the team reorder options before the commitment point without disrupting work already started.
- Work is getting stuck and delivery feels slow, but nobody can say where. Visualizing all work and limiting WIP shows where items wait, which gives the team a concrete place to improve.
- A team is wary of another process overhaul. Because the Kanban Method starts with the current process and keeps existing roles, it asks for less upfront change than frameworks that introduce new roles and events.
- Several teams need a shared view of work that crosses their boundaries. Boards at coordination or portfolio level, such as the [Flight Levels](https://www.flightlevels.io/) model's coordination and strategic levels, expose handoffs and dependencies.
- You already run Scrum or another method and want better flow inside it. Kanban practices such as WIP control and flow metrics can be added without replacing the existing framework.

## When Not to Use

- A team needs a fixed rhythm of planning, review and retrospective to build basic habits. Kanban prescribes no timeboxes or roles, so a team with no working discipline may drift; a framework with set events can give more structure at first.
- The main problem is choosing what to build. Kanban assumes the work on the board is worth doing. It improves how work flows once selected, and if priorities are wrong, faster flow delivers the wrong things sooner.
- There is only ever one item in progress, such as one person doing one sequential job. With nothing to limit and little to measure, the board adds overhead without much return.
- The work cannot be split into items that move independently, such as a small group co-creating a single artifact together. Forcing it onto cards creates artificial fragments that do not reflect how the work progresses.

## Skills

This method includes the following skills:

- [Managing Projects with Kanban](../../skills/managing-projects-with-kanban/SKILL.md): Plan, run and forecast a whole project with a pull-based kanban system instead of fixed sprints.
- [Running Kanban Cadences](../../skills/running-kanban-cadences/SKILL.md): Facilitate the Kanban meeting, replenishment, delivery planning and review cadences so feedback reaches the right people.
- [Setting WIP Limits](../../skills/setting-wip-limits/SKILL.md): Choose, enforce and tune work-in-progress limits so bottlenecks surface and work finishes.
- [Designing Kanban Boards](../../skills/designing-kanban-boards/SKILL.md): Structure columns, swimlanes and cards so the board shows how work really flows.
- [Measuring Kanban Flow Metrics](../../skills/measuring-kanban-flow-metrics/SKILL.md): Track WIP, throughput, work item age and cycle time, and read a cumulative flow diagram.
- [Creating Kanban Pull Policies](../../skills/creating-kanban-pull-policies/SKILL.md): Write entry and exit criteria for each column so everyone knows when work may move.
- [Comparing Kanban and Scrum](../../skills/comparing-kanban-and-scrum/SKILL.md): Decide between Kanban, Scrum or a combination based on how your work actually arrives.
- [Choosing Kanban Software](../../skills/choosing-kanban-tools-and-software/SKILL.md): Evaluate kanban tools against the practices your team needs to run.

## FAQ

**What is kanban in simple terms?**

Kanban is a way to manage work by showing it on a board and limiting how much is in progress at once. Each piece of work is a card that moves through columns for the stages of your workflow. The team starts a new item only when an existing one finishes and frees capacity. The limit on work in progress is what separates kanban from a plain task board.

**Kanban vs Scrum: what is the difference?**

Scrum organizes work into Sprints of one month or less with defined accountabilities and events ([The Scrum Guide](https://scrumguides.org/scrum-guide.html)). Kanban has no required timebox or roles; it controls work in progress and manages flow continuously. The Kanban Guide says Kanban "can and should be used to augment" other delivery approaches, so the two are often combined. The [comparing kanban and Scrum](../../skills/comparing-kanban-and-scrum/SKILL.md) skill walks through the decision.

**Who created kanban?**

At Toyota, the kanban system grew out of the Just-in-Time "supermarket method," and Toyota credits Taiichi Ohno with establishing the Toyota Production System that it belongs to. The Kanban Method for knowledge work was developed by David J. Anderson and set out in his 2010 book ([Kanban University](https://kanban.university/kanban-guide/)). The Kanban Guide by John Coleman and Daniel Vacanti is a separate, minimal definition. Each source describes a related but distinct thing.

**Does kanban work for small teams?**

Yes, as long as more than one item is in progress at a time. A small team gets quick visibility into who is blocked and what is close to done, and WIP limits keep it from spreading effort across too many items. The coordination overhead is low because the board and a short daily look at it do most of the work. For a single person, [Personal Kanban](https://www.personalkanban.com/) reduces the practice to two rules: visualize your work and limit your work in progress.

**Why does kanban fail in practice?**

The most common failure is treating the board as decoration: cards go up, but no limits are set or respected, nobody measures flow, and nobody reviews the system. Another is managers routinely pushing work past the limits, which teaches the team that the limits are optional. Boards that model an ideal process instead of the real one also decay quickly. Each of these removes the feedback that makes kanban work.

**Do I need special kanban software?**

No. A whiteboard and sticky notes are enough for a co-located team, and many digital tools support boards. What matters is that the tool supports the practices: columns that match your workflow, visible limits, policies, and timestamps for flow metrics. Some tools display a WIP limit without enforcing it, so check how a tool behaves when a column is full. See [choosing kanban software](../../skills/choosing-kanban-tools-and-software/SKILL.md) for an evaluation process.

**Can kanban scale beyond one team?**

Yes. Kanban University describes whole service departments managed by a set of related boards at different levels of granularity, with WIP limited at each level. The [Flight Levels](https://www.flightlevels.io/) model separates operational, coordination and strategic levels. The hard part at scale is keeping upstream commitments in line with downstream capacity.

## Sources

- [The Kanban Guide (May 2025), John Coleman and Daniel Vacanti](https://kanbanguides.org/english/)
- [Kanban University: The Official Guide to The Kanban Method](https://kanban.university/kanban-guide/)
- [The Official Guide to The Kanban Method (PDF)](https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_A4.pdf)
- [David J. Anderson: Kanban Cadences](https://djaa.com/kanban-cadences/)
- [Toyota 75 Years: Development and Deployment of the Toyota Production System](https://www.toyota-global.com/company/history_of_toyota/75years/text/entering_the_automotive_business/chapter1/section4/item4.html)
- [Toyota 75 Years: The Origins of Just-in-Time](https://www.toyota-global.com/company/history_of_toyota/75years/text/taking_on_the_automotive_business/chapter2/section4/item5.html)
- [Lean Enterprise Institute Lexicon: Kanban](https://www.lean.org/lexicon-terms/kanban/)
- [Agile Alliance Glossary: Kanban](https://www.agilealliance.org/glossary/kanban/)
- [The Scrum Guide](https://scrumguides.org/scrum-guide.html)
- [Flight Levels](https://www.flightlevels.io/)
- [Personal Kanban](https://www.personalkanban.com/)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
