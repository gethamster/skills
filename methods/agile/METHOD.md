---
name: "agile"
category: "Workflows"
description: "Agile is the way of building software in short, feedback-driven cycles defined by the Agile Manifesto's four values and twelve principles."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Agile Methodology: Manifesto, Principles, and Practice

> Created by **The Agile Manifesto Authors (2001)** - [https://agilemanifesto.org](https://agilemanifesto.org)

## Overview

Agile is a way of building products in short cycles, getting feedback on each result, and changing the plan based on what the team learns. The Agile Alliance defines it as "the ability to create and respond to change" and calls it an umbrella term for frameworks and practices based on the Manifesto's values and principles ([Agile Alliance, Agile 101](https://www.agilealliance.org/agile101/)). That distinction matters in practice. The agile methodology people talk about is a set of values and principles, and named frameworks such as Scrum, Kanban and Extreme Programming are concrete ways of acting on them.

The name and the shared definition come from one meeting. In February 2001, seventeen people met at The Lodge at Snowbird ski resort in the Wasatch mountains of Utah, according to Jim Highsmith's [history of the Manifesto](https://agilemanifesto.org/history.html). They included representatives of Extreme Programming, Scrum, DSDM, Adaptive Software Development, Crystal, Feature-Driven Development and Pragmatic Programming. The result was the [Manifesto for Agile Software Development](https://agilemanifesto.org/), signed by its seventeen authors, among them Kent Beck, Ward Cunningham, Martin Fowler, Jim Highsmith, Ken Schwaber and Jeff Sutherland. Highsmith notes that before the meeting, [during 2000](https://agilemanifesto.org/history.html), a number of articles had grouped these approaches as "Light" or "Lightweight" processes, and that the group left Snowbird naming itself "The Agile Alliance."

The Agile Manifesto states four values. Its authors wrote that they had come to value "Individuals and interactions over processes and tools", "Working software over comprehensive documentation", "Customer collaboration over contract negotiation" and "Responding to change over following a plan." The sentence after the list is easy to skip and changes the meaning: "That is, while there is value in the items on the right, we value the items on the left more." Agile keeps plans, documents, contracts and tools. It ranks them below the people, the working product, the customer and the ability to change course.

The twelve [principles behind the Manifesto](https://agilemanifesto.org/principles.html) turn those values into working rules. They ask for "early and continuous delivery of valuable software", for delivering working software "from a couple of weeks to a couple of months, with a preference to the shorter timescale", and they state that "Working software is the primary measure of progress." They also cover daily collaboration between business people and developers, motivated and trusted teams, sustainable pace, technical excellence, simplicity and regular reflection. Most arguments about whether a team is "really agile" can be settled by checking a practice against one of these agile principles.

Short, feedback-driven cycles are much older than the word. Craig Larman and Victor Basili's history of [iterative and incremental development](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf) traces the practice back to the mid-1950s and describes NASA's Project Mercury in the early 1960s running half-day, time-boxed iterations. The same paper argues that Winston Royce's 1970 article, usually cited as the origin of waterfall, is widely misread: Royce himself recommended building a pilot version first and doing the job twice. In Larman and Basili's account, the 2001 meeting gave a set of existing lightweight methods a common banner, the Agile Alliance and the phrase "agile methods."

Martin Fowler, one of the authors, summarizes the idea in two contrasts: agile development is "adaptive rather than predictive" and "people-oriented rather than process-oriented" ([Fowler, Agile Software Guide](https://martinfowler.com/agile.html)). He also warns that much of what is done under the name is "faux-agile", and names fighting the "Agile Industrial Complex" and its habit of imposing process on teams as one of three main challenges. In his words from a 2018 talk, "The team doing work decides how to do it. That is a fundamental agile principle" ([Fowler, State of Agile Software in 2018](https://martinfowler.com/articles/agile-aus-2018.html)).

Agile project management is therefore less about a specific set of meetings and more about how decisions get made. A team plans in small increments, shows working results to the people who will use them, and adjusts both the product and its own process. The steps below describe a common way to run that loop, and the skills linked from this page cover each part in depth.

## Core Principles

### Deliver Working Software Early and Often

The first principle calls for "early and continuous delivery of valuable software", and the third asks teams to deliver "from a couple of weeks to a couple of months, with a preference to the shorter timescale" ([Agile Manifesto principles](https://agilemanifesto.org/principles.html)). Frequent delivery shortens the time between a decision and the evidence about whether it was right. It also forces work to be split into slices that are useful on their own. A team that reports progress in documents or ticket counts, and cannot show anything usable, has drifted from the principle that "Working software is the primary measure of progress."

### Welcome Changing Requirements

The second principle reads: "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage" ([principles](https://agilemanifesto.org/principles.html)). Agile assumes that requirements will change as the team and its customers learn. The practical consequence is to keep change cheap: short cycles, an ordered backlog that can be reshuffled, and designs that do not lock in decisions early. Highsmith's history puts the same idea as "We plan, but recognize the limits of planning in a turbulent environment" ([history](https://agilemanifesto.org/history.html)).

### Business and Developers Work Together Daily

The Manifesto asks that "Business people and developers must work together daily throughout the project", and names "face-to-face conversation" as the most efficient and effective way to convey information within a team ([principles](https://agilemanifesto.org/principles.html)). Conversation carries more information per minute than documents do, and questions answered in minutes by the person who knows prevent days of building the wrong thing. Distributed teams keep the principle by favoring live conversation over long written threads when something is ambiguous. A team that learns what the customer wanted only at the end of a cycle has lost this principle.

### Trust Motivated, Self-Organizing Teams

The principles say to "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done", and that "The best architectures, requirements, and designs emerge from self-organizing teams" ([principles](https://agilemanifesto.org/principles.html)). Self-organizing means the team decides how to do its work, while leaders set direction and remove obstacles. Fowler calls the team choosing its own process "a fundamental agile principle" ([Fowler, 2018](https://martinfowler.com/articles/agile-aus-2018.html)). In the same talk he calls methods imposed on people by the Agile Industrial Complex "an absolute travesty."

### Keep a Sustainable Pace

"Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely" ([principles](https://agilemanifesto.org/principles.html)). Short cycles make it tempting to treat every sprint as a deadline, and a team that ends each cycle exhausted will cut quality to keep up. Plan against what the team has actually finished in recent cycles, and treat regular overtime as a planning problem to fix.

### Pay Attention to Technical Excellence and Simplicity

Two principles work together here: "Continuous attention to technical excellence and good design enhances agility" and "Simplicity--the art of maximizing the amount of work not done--is essential" ([principles](https://agilemanifesto.org/principles.html)). Fowler's "Flaccid Scrum" describes what happens without the first: teams adopt Scrum's practices, and "After a while progress is slow because the code base is a mess" ([Fowler, Flaccid Scrum](https://martinfowler.com/bliki/FlaccidScrum.html)). Simplicity means building what the current goal needs and deferring the rest. Both keep change cheap, which is what the other principles depend on.

### Reflect and Adjust at Regular Intervals

The last principle: "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly" ([principles](https://agilemanifesto.org/principles.html)). This is how an agile team improves its own process instead of waiting for a new one to be imposed. The Scrum Guide builds the same idea into its retrospective, whose purpose is "to plan ways to increase quality and effectiveness" ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). A reflection that never changes anything is a sign the team is going through the motions.

## Steps

1. **Check that the work suits agile**
   Agile pays off when the team does not know in advance exactly what to build or how, and can learn by shipping small pieces. List what is uncertain: customer needs, technology, market, regulation. If almost nothing is uncertain and the requirements are fixed, a plan-driven approach may cost less. The output is a short statement of which uncertainties the first few cycles should reduce. The [agile vs waterfall skill](../../skills/comparing-agile-and-waterfall/SKILL.md) gives a structured way to make this call.

2. **Form a small cross-functional team with one product owner**
   Put together the people needed to take an idea to working software without waiting on other groups. The Scrum Guide describes a team of "typically 10 or fewer people" and a Product Owner who is "one person, not a committee" ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). One accountable owner of priorities prevents the backlog from being pulled in several directions at once. Agree who that person is and which decisions the team can make without escalation.

3. **Build and order the product backlog**
   Collect the work into one list, written as outcomes users care about, and order it so the most valuable item is at the top. Keep the items near the top small and clear, and let items further down stay rough. The Agile Alliance describes refinement as reviewing the backlog so that "the items at the top of the backlog are ready for delivery" ([Agile Alliance, Backlog Refinement](https://www.agilealliance.org/glossary/backlog-refinement/)). A backlog nobody can rank is a sign the product goal is unclear.

4. **Choose a cadence or a flow model**
   Decide whether the team works in fixed timeboxes or in continuous flow. Scrum uses Sprints that are "fixed length events of one month or less" ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). Kanban has no sprints and instead asks the team to "explicitly control the number of work items in a workflow" ([Kanban Guide](https://kanbanguides.org/english/)). Timeboxes suit planned product work, and flow suits work that arrives unpredictably, such as support or operations.

5. **Plan each cycle around a goal**
   Start each cycle by agreeing on why it is valuable, what can be finished, and how. Those are the three Sprint Planning topics in the Scrum Guide. Pick backlog items that serve the goal and fit the team's recent pace, and leave room for the unexpected. The output is a goal every team member can state and a visible list of the work behind it.

6. **Coordinate daily and keep work visible**
   Hold a short daily standup where the team checks progress toward the goal and adjusts its plan. The Scrum Guide sets the Daily Scrum at "a 15-minute event for the Developers" and leaves its structure to the team ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). Keep a board that shows every item in progress so bottlenecks are obvious. If the daily standup in your agile team turns into status reports to a manager, the coordination has stopped.

7. **Review the increment with stakeholders**
   At the end of each cycle, show working software to the people who will use or pay for it and ask what should change. The Scrum Guide calls the Sprint Review "a working session" and says the team "should avoid limiting it to a presentation" ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). Show what did not work as well as what did. Leave with changes to the backlog, because feedback that changes nothing was not needed.

8. **Reflect, adjust, and repeat**
   Close the loop with a retrospective on how the team worked, then pick one or two changes to try in the next cycle. Check at the next retrospective whether the change helped. Over several cycles, adjust the process itself: meeting lengths, cadence, board columns, even the choice between Scrum and Kanban. This is the twelfth principle in practice.

## Agile vs Waterfall and Other Approaches

Agile sits at the level of values. Scrum and Kanban are frameworks that put those values into practice, and scaling frameworks coordinate many agile teams. Waterfall is the plan-driven alternative agile is usually compared with. Hamster's catalog covers [Scrum](https://tryhamster.com/methods/scrum), [Kanban](https://tryhamster.com/methods/kanban) and [Waterfall](https://tryhamster.com/methods/waterfall) as separate methods.

| Approach | What it prescribes | Source |
|---|---|---|
| Agile | Four values and twelve principles, no fixed process | [Agile Manifesto](https://agilemanifesto.org/) |
| Scrum | Roles, events and Sprints of one month or less | [Scrum Guide](https://scrumguides.org/scrum-guide.html) |
| Kanban | Visualized workflow, explicit WIP control, flow measures; the Kanban Guide does not define roles | [Kanban Guide](https://kanbanguides.org/english/) |
| Waterfall | Sequential phases, which Royce's 1970 paper called "risky" | [Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf) |
| SAFe | Agile Release Trains of 50-125 people planning in PIs | [SAFe ART](https://framework.scaledagile.com/agile-release-train) |
| LeSS | Up to eight teams sharing one backlog and one Product Owner | [LeSS](https://less.works/less/framework/index) |

Kniberg and Skarin's comparison of Scrum and Kanban makes a point that applies to the whole table: "There is no such thing as a good or bad tool", only decisions about when and how to use one ([Kanban and Scrum](https://www.infoq.com/minibooks/kanban-scrum-minibook/)).

## When to Use

- You are building something new and customer needs are uncertain. Short cycles let the team test its assumptions with working software before committing months of effort to them.
- The market, technology or regulation around the product is changing during the project. An ordered backlog and frequent planning let the team re-prioritize without abandoning its process.
- You can form a small, stable, cross-functional team with one person who owns priorities. The Manifesto's principles of daily collaboration and self-organization assume such a team exists.
- You are running and evolving a live product with a steady stream of feedback, bugs and requests. Agile planning cycles give that stream a regular point where it is ranked against planned work.
- Leadership is willing to fund outcomes and let the team change what it builds. Agile needs room to act on what each review teaches.

## When Not to Use

- Requirements are fixed, well understood and unlikely to change, such as reproducing a published calculation exactly. Iterating to discover requirements adds cost when there is nothing left to discover.
- Every decision needs sign-off from groups outside the team. Short cycles stall at approval gates, and the team ends up waiting for most of each sprint.
- Leadership mandates agile ceremonies without giving teams authority over how they work. Fowler's warning about process imposed from outside describes the likely result: rituals without the values.
- One person is doing well-scoped work alone. A simple task list or personal board captures the useful parts, and the team ceremonies have nobody to coordinate.

## Skills

This method includes the following skills:

- [Comparing Agile and Waterfall for Project Selection](../../skills/comparing-agile-and-waterfall/SKILL.md): Decide whether a specific project should run agile, waterfall or a hybrid, based on uncertainty, risk and constraints.
- [Choosing Between Scrum, Kanban, and Scrumban](../../skills/choosing-between-scrum-and-kanban/SKILL.md): Pick the framework that fits how work arrives, then test it with a time-boxed trial.
- [Running Sprint Planning and Agile Sprint Execution](../../skills/running-sprint-planning-and-execution/SKILL.md): Set a sprint goal, plan against real capacity, and protect the goal during the sprint.
- [Scaling Agile Across Teams with SAFe, LeSS and More](../../skills/scaling-agile-across-teams/SKILL.md): Coordinate several agile teams on one product without adding a management layer.
- [Product Backlog Management and Refinement](../../skills/managing-product-backlogs/SKILL.md): Write, order, refine and prune a product backlog so the top is always ready to plan.
- [Agile Coaching: Guiding a Team Through Adoption](../../skills/coaching-agile-team-adoption/SKILL.md): Introduce agile practices one at a time, with the team's consent, until the team runs them alone.
- [Running Sprint Retrospectives for Continuous Improvement](../../skills/running-retrospectives/SKILL.md): Facilitate retrospectives that end in a few owned changes the team actually makes.
- [Facilitating the Daily Standup Meeting](../../skills/facilitating-daily-standups/SKILL.md): Run a short daily standup focused on the sprint goal, the board and blockers.

## FAQ

**What is agile in simple terms?**

Agile is a way of working where a team builds a product in small pieces, shows each piece to the people who will use it, and changes its plan based on what it learns. The Agile Alliance defines it as "the ability to create and respond to change" ([Agile 101](https://www.agilealliance.org/agile101/)). It comes from the Manifesto for Agile Software Development, which lists four values and twelve principles. Scrum and Kanban are specific ways of putting those ideas into practice.

**What are the four values of the Agile Manifesto?**

The [Agile Manifesto](https://agilemanifesto.org/) values individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. It then adds: "That is, while there is value in the items on the right, we value the items on the left more." The values rank priorities for when they conflict. They do not throw out planning, documentation or contracts.

**Agile vs waterfall: which should I use?**

Use agile when requirements are uncertain and feedback from working software will change what you build. Use a plan-driven, waterfall-style approach when requirements are fixed and the cost of changing course late is very high. The history is less of a contrast than it looks: Larman and Basili point out that Royce's 1970 paper, usually cited as the source of waterfall, recommended doing the work twice ([Larman and Basili](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf)). Many organizations run agile delivery inside phase gates for funding or compliance.

**Is agile the same as Scrum?**

No. Agile is the set of values and principles, and Scrum is one framework that applies them. The [Scrum Guide](https://scrumguides.org/scrum-guide.html) by Ken Schwaber and Jeff Sutherland prescribes roles, events such as Sprint Planning and the Daily Scrum, and Sprints of one month or less. Kanban, Extreme Programming and others are also agile, and teams often combine practices from several of them.

**What is SAFe agile?**

SAFe, the Scaled Agile Framework, is one way to coordinate many agile teams working on the same solution. It groups teams into Agile Release Trains, generally made up of 50-125 people ([SAFe, Agile Release Train](https://framework.scaledagile.com/agile-release-train)), that plan together in Planning Intervals, typically "8 to 12-week" timeboxes ([SAFe, Planning Interval](https://framework.scaledagile.com/planning-interval)). Lighter alternatives such as [LeSS](https://less.works/less/framework/index) keep one backlog and one Product Owner across several teams. The scaling skill on this page compares them.

**What does an agile coach do?**

An agile coach helps a team and its organization learn to work in an agile way, and then steps back. Lyssa Adkins lists the coach's roles as "teacher, mentor, problem solver, conflict navigator, and performance coach" ([Coaching Agile Teams](https://www.informit.com/store/coaching-agile-teams-a-companion-for-scrummasters-agile-9780321637703)). In Scrum, part of this job belongs to the Scrum Master, who is responsible for "Leading, training, and coaching the organization in its Scrum adoption" ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). A good coach leaves the team able to run and change its own process.

**Why do agile adoptions fail?**

The most common pattern is adopting the ceremonies without the values: standups that report to a manager, sprints whose content is fixed from outside, and retrospectives that change nothing. Fowler calls much of current practice "faux-agile" and blames process imposed on teams ([Agile Software Guide](https://martinfowler.com/agile.html)). A second pattern is neglecting technical quality until the code slows everything down, which he calls [Flaccid Scrum](https://martinfowler.com/bliki/FlaccidScrum.html). Both are fixed by returning to the principles rather than adding more process.

**Does agile mean no planning or documentation?**

No. Highsmith's history of the meeting says the authors "embrace documentation, but not hundreds of pages of never-maintained and rarely-used tomes" and "plan, but recognize the limits of planning in a turbulent environment" ([history](https://agilemanifesto.org/history.html)). Agile teams plan continuously at several horizons, from the product goal down to the day. They write the documents that someone will read and keep them current.

## Sources

- [Manifesto for Agile Software Development](https://agilemanifesto.org/)
- [Principles behind the Agile Manifesto](https://agilemanifesto.org/principles.html)
- [Jim Highsmith: History of the Agile Manifesto](https://agilemanifesto.org/history.html)
- [Agile Alliance: Agile 101](https://www.agilealliance.org/agile101/)
- [Martin Fowler: Agile Software Guide](https://martinfowler.com/agile.html)
- [Martin Fowler: The State of Agile Software in 2018](https://martinfowler.com/articles/agile-aus-2018.html)
- [Martin Fowler: Flaccid Scrum](https://martinfowler.com/bliki/FlaccidScrum.html)
- [Craig Larman and Victor Basili: Iterative and Incremental Development, A Brief History](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf)
- [Winston Royce: Managing the Development of Large Software Systems](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)
- [Ken Schwaber and Jeff Sutherland: The Scrum Guide](https://scrumguides.org/scrum-guide.html)
- [The Kanban Guide](https://kanbanguides.org/english/)
- [Henrik Kniberg and Mattias Skarin: Kanban and Scrum, Making the Most of Both](https://www.infoq.com/minibooks/kanban-scrum-minibook/)
- [Scaled Agile Framework: Agile Release Train](https://framework.scaledagile.com/agile-release-train)
- [Scaled Agile Framework: Planning Interval](https://framework.scaledagile.com/planning-interval)
- [LeSS: Large-Scale Scrum](https://less.works/less/framework/index)
- [Agile Alliance: Backlog Refinement](https://www.agilealliance.org/glossary/backlog-refinement/)
- [Lyssa Adkins: Coaching Agile Teams](https://www.informit.com/store/coaching-agile-teams-a-companion-for-scrummasters-agile-9780321637703)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
