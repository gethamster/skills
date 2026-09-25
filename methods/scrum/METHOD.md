---
name: "scrum"
category: "Workflows"
description: "Scrum is Ken Schwaber and Jeff Sutherland's framework for complex work: one team, three accountabilities, five events and three artifacts."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Scrum: The Framework, Roles, Events and Artifacts

> Created by **Ken Schwaber and Jeff Sutherland** - [https://scrumguides.org/](https://scrumguides.org/)

## Overview

Scrum is a framework for teams doing complex work, defined by Ken Schwaber and Jeff Sutherland in [the Scrum Guide](https://scrumguides.org/scrum-guide.html). The guide's own definition is short: Scrum is "a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems." A Product Owner puts the work in order in a Product Backlog. In each Sprint the Scrum Team takes some of that work and turns it into a usable Increment, and then the team and its stakeholders look at the result and adjust the plan for the next Sprint. Then the cycle repeats. The Scrum Master is accountable for making that environment possible.

The name comes from rugby. Hirotaka Takeuchi and Ikujiro Nonaka published [The New New Product Development Game](https://hbr.org/1986/01/the-new-new-product-development-game) in the January 1986 Harvard Business Review. [Wikipedia's history of Scrum](https://en.wikipedia.org/wiki/Scrum_%28software_development%29) summarizes their "rugby approach" as one cross-functional team working across overlapping phases, and traces the term's use in software development to that paper. The Scrum Guide says Schwaber and Sutherland developed Scrum in the early 1990s, first co-presented it at the OOPSLA conference in 1995, and wrote the first version of the guide in 2010 ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). The guide also credits Jeff McKenna, John Scumniotales, Mike Smith and Chris Martin as instrumental at the start. Both men later signed the [Manifesto for Agile Software Development](https://agilemanifesto.org/), so Scrum is one of the frameworks the wider [Agile](https://tryhamster.com/methods/agile) movement grew from.

Scrum rests on empiricism and lean thinking. The guide defines empiricism as the idea "that knowledge comes from experience and making decisions based on what is observed," and it names three pillars that make empiricism work: transparency, inspection and adaptation. Every event exists to inspect something and adapt to what was found. Every artifact exists to make something transparent enough to inspect. When a team drops an event or hides an artifact, it loses one of those inspection points, which is why the guide warns that changing the core design or leaving out elements "covers up problems and limits the benefits of Scrum."

The framework has a small, fixed set of parts. There is one Scrum Team, which the [Scrum Guide](https://scrumguides.org/scrum-guide.html) describes as "typically 10 or fewer people," with three accountabilities: the Product Owner, the Scrum Master and the Developers. There are five events: the Sprint itself, which contains Sprint Planning, the Daily Scrum, the Sprint Review and the Sprint Retrospective. There are three artifacts, each with a commitment attached: the Product Backlog with its Product Goal, the Sprint Backlog with its Sprint Goal, and the Increment with its Definition of Done. Product Backlog refinement is an ongoing activity inside the Sprint, and the guide does not list it among the events.

The current guide is the November 2020 edition. According to the [Scrum Guide revision history](https://scrumguides.org/revisions.html), that edition removed the three Daily Scrum questions, replaced the separate "Development Team" with one Scrum Team containing Developers, introduced the Product Goal, and changed "self-organizing" to "self-managing." Many older articles, tools and job descriptions still use the pre-2020 vocabulary, so a team adopting Scrum today should read the guide itself rather than rely on second-hand summaries.

The Scrum Guide is deliberately incomplete. It defines roles, events, artifacts and the rules that bind them, and leaves practices such as user stories, story points, burndown charts and retrospective formats to the team. The skills on this page cover those practices. They are common ways of running Scrum, and the guide does not require any of them. The guide is also firm about the whole: its end note says that "while implementing only parts of Scrum is possible, the result is not Scrum."

## Core Principles

### Empiricism: Transparency, Inspection, Adaptation

Scrum assumes that for complex work, planning in detail up front does not work, so decisions are made from what the team observes. Transparency means the work and its state are visible to the people doing it and the people receiving it. Inspection means the artifacts and the progress toward goals are checked frequently. Adaptation means that when something drifts outside acceptable limits, the plan or the product changes as soon as possible. The [Scrum Guide](https://scrumguides.org/scrum-guide.html) links the three: "Transparency enables inspection," and "Inspection enables adaptation."

### Fixed-Length Sprints

Every piece of work in Scrum happens inside a Sprint, which the guide defines as a fixed-length event of one month or less. The next Sprint begins as soon as one ends. The fixed length is what makes Scrum predictable: progress toward the Product Goal is inspected at least once a month. Shorter Sprints give more learning cycles and cap the cost of a wrong turn, and Atlassian's [scrum tutorial for Jira](https://www.atlassian.com/agile/tutorials/how-to-do-scrum-with-jira-software) recommends starting with two weeks.

### One Team, Three Accountabilities

The Scrum Team has no sub-teams or hierarchies. The Product Owner answers for getting as much value as possible out of the product and for how the Product Backlog is run. The Developers answer for the plan of each Sprint, for building quality in by meeting the Definition of Done, and for adjusting their plan every day. The Scrum Master answers for putting Scrum in place as the guide describes it and for how effective the team is. These are accountabilities, so one person's job title does not have to match any of them.

### Self-Managing and Cross-Functional

According to the [Scrum Guide](https://scrumguides.org/scrum-guide.html), Scrum Teams are cross-functional, so between them they hold every skill needed to create value in a Sprint, and self-managing, so the team itself settles who works on what, when and in what way. Nobody outside the Developers tells them how to turn backlog items into an Increment. The guide warns that a team without the power to manage its own work will find it hard to adapt.

### Commitments Give Each Artifact a Target

The 2020 guide attached one commitment to each artifact ([revision history](https://scrumguides.org/revisions.html)). The Product Goal is the longer-range target the Product Backlog works toward. The Sprint Goal is the one objective of a given Sprint, and it lets scope flex while the goal holds. The Definition of Done is the quality bar: work that falls short of it is not part of the Increment and cannot be shown at the Sprint Review.

### The Five Scrum Values

The guide names five values: courage, focus, commitment, respect and openness. It says the empirical pillars "come to life building trust" when a team and the people around it live these values. In practice the values show up in small decisions: raising a problem at the Daily Scrum instead of hiding it, or telling a stakeholder that a feature is not Done.

### Continuous Improvement Is Built In

Improvement has its own event. The Sprint Retrospective exists "to plan ways to increase quality and effectiveness," and the most helpful changes may be added to the next Sprint Backlog. In this way Scrum gives each process change an owner and a place in the plan.

## Steps

1. **Form the Scrum Team**
   Name one Product Owner, one Scrum Master and a group of Developers who together have the skills to deliver a usable Increment. Keep the team small; the [Scrum Guide](https://scrumguides.org/scrum-guide.html) says "typically 10 or fewer people," and suggests splitting a larger group into several teams that work from a single Product Goal, backlog and Product Owner. Agree where the Product Owner's decisions come from and who they answer to. Make sure the Scrum Master has time and standing to work on organizational impediments as well as team ones.

2. **Create the Product Goal and Product Backlog**
   The Product Owner writes a Product Goal describing where the product should end up. The Product Backlog then lists, in order, the work required to get there. Items near the top should be small and clear enough to be Done within one Sprint; items further down can stay rough. Refinement, which the guide calls "an ongoing activity," breaks items down and adds detail such as description, order and size, and the Developers who will do the work size it.

3. **Agree the Definition of Done**
   Before the first Sprint, the Scrum Team writes down what Done means for this product, or adopts the organization's standard as a minimum. Include every quality measure that must hold before an item is usable, such as review, testing and documentation. Work that falls short of the Definition of Done returns to the Product Backlog. Revisit the definition at retrospectives as the team's capability grows.

4. **Hold Scrum Sprint Planning**
   Sprint Planning answers three questions from the [Scrum Guide](https://scrumguides.org/scrum-guide.html): why this Sprint is valuable, what can be Done, and how the chosen work will get done. The whole team crafts a Sprint Goal, the Developers select items with the Product Owner, and they plan the work, often by breaking items into pieces of a day or less. The Sprint Goal, the selected items and the plan together form the Sprint Backlog. The event lasts at most eight hours when the Sprint is a month long, and less for shorter Sprints.

5. **Run the Daily Scrum Every Working Day**
   The Daily Scrum, often called the scrum daily standup, is "a 15-minute event for the Developers of the Scrum Team," held every working day at a fixed time and place ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). The Developers use it to check how they are doing against the Sprint Goal and to adjust the Sprint Backlog. The Developers choose the structure. Detailed problem solving happens after the event, with the people who need to be there.

6. **Refine the Backlog During the Sprint**
   Scrum backlog refinement keeps the next Sprint Planning short and informed. The Product Owner and Developers split large items, clarify what each one must do, and size them, so the top of the backlog is ready for selection. Scrum estimation techniques such as story points are optional; the guide asks only that the Developers do the sizing. Refinement should take a modest share of the team's time so it does not crowd out the Sprint's own work.

7. **Hold the Scrum Sprint Review**
   The Scrum sprint review inspects the outcome of the Sprint and decides what to do next. The team shows what it accomplished to key stakeholders, discusses what has changed in the environment, and the group collaborates on adjustments to the Product Backlog. The [Scrum Guide](https://scrumguides.org/scrum-guide.html) calls it "a working session" that the team should avoid limiting to a presentation. It lasts at most four hours for a month-long Sprint.

8. **Close With the Scrum Retrospective**
   The Scrum retrospective concludes the Sprint. The team looks back at how the Sprint went for its people and their interactions, its processes and tools, and its Definition of Done, then picks the changes that would help most. The guide asks for the biggest improvements to be tackled quickly, and some can go straight into the next Sprint Backlog. It lasts at most three hours for a month-long Sprint, and the next Sprint begins right after it.

## Events, Timeboxes and Artifacts at a Glance

The Scrum Guide sets a maximum length for each event based on a one-month Sprint, and says the events are usually shorter when the Sprint is shorter.

| Element | Purpose in the Scrum Guide | Maximum timebox |
|-------|-------|-------|
| Sprint | Fixed-length container where ideas become value ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) | One month or less |
| Sprint Planning | Lays out the work and sets the Sprint Goal ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) | Eight hours |
| Daily Scrum | Inspects progress toward the Sprint Goal ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) | 15 minutes |
| Sprint Review | Inspects the outcome and adapts the backlog ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) | Four hours |
| Sprint Retrospective | Plans ways to increase quality and effectiveness ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) | Three hours |

Each artifact carries a commitment: the Product Backlog serves the Product Goal, the Sprint Backlog serves the Sprint Goal, and the Increment must meet the Definition of Done. Backlog refinement has no timebox, because the guide treats it as an ongoing activity inside the Sprint.

## When to Use

- A product or problem where requirements are expected to change as you learn, because Scrum's regular inspection points let the team change direction every Sprint without renegotiating a fixed plan.
- A stable, cross-functional team of roughly a handful of people working toward one product, since the framework assumes one team, one Product Owner and one Product Goal.
- Work that can be cut into pieces usable within a month or less, so every Sprint ends with an Increment that stakeholders can inspect.
- Organizations that need regular, predictable points where stakeholders see progress and influence priorities, which the Sprint Review provides by design.
- Teams whose main problem is unclear priorities or scattered focus, because the ordered backlog and the single Sprint Goal force one decision about what matters next.

## When Not to Use

- Interrupt-driven work such as support queues or operations, where priorities change daily and a Sprint Goal would be abandoned every week. A flow method such as [Kanban](https://tryhamster.com/methods/kanban), which manages work in progress continuously, usually fits better.
- A single person working alone. The accountabilities and events assume a team, and for one person they add meetings without adding inspection.
- Contracts that fix scope, schedule and budget in advance and do not allow the scope to be renegotiated. Scrum expects the Product Backlog and the Sprint scope to change as the team learns.
- Organizations that will not let a Product Owner make ordering decisions or let Developers decide how to do the work. The guide says Product Owners succeed only when "the entire organization must respect their decisions," and without that the events become status meetings.

## Skills

This method includes the following skills:

- [Defining Scrum Roles and Accountabilities](../../skills/defining-scrum-roles-and-accountabilities/SKILL.md): Set up the Product Owner, Scrum Master and Developers as the Scrum Guide defines them.
- [Scrum Sprint Planning: Planning and Executing Sprints](../../skills/planning-and-executing-sprints/SKILL.md): Set a Sprint Goal, forecast from capacity and run the Sprint toward it.
- [Running the Scrum Daily Standup](../../skills/running-daily-standups/SKILL.md): Keep the Daily Scrum short and focused on progress toward the Sprint Goal.
- [Backlog Grooming and Product Backlog Refinement](../../skills/grooming-the-product-backlog/SKILL.md): Split, clarify and size items so the top of the backlog is ready.
- [Scrum Estimation with Story Points and Planning Poker](../../skills/estimating-work-with-story-points/SKILL.md): Size work relatively and use velocity as a forecast.
- [Conducting Sprint Reviews: Run the Sprint Review Meeting](../../skills/conducting-sprint-reviews/SKILL.md): Inspect the Increment with stakeholders and adapt the backlog.
- [Facilitating Sprint Retrospectives for Scrum Teams](../../skills/facilitating-sprint-retrospectives/SKILL.md): Run retrospectives that end in owned, tracked improvements.
- [Managing Scrum Boards in Jira](../../skills/managing-scrum-boards-in-jira/SKILL.md): Set up a Jira scrum board, run sprints and read its reports.

## FAQ

**What is the difference between Scrum and Agile?**

Agile is the set of values and principles in the [Manifesto for Agile Software Development](https://agilemanifesto.org/), which Schwaber and Sutherland both signed. Scrum is one specific framework with defined accountabilities, events and artifacts that puts those ideas into practice. A team can be agile without using Scrum, and the [Agile](https://tryhamster.com/methods/agile) page covers the broader philosophy. Scrum is the more prescriptive of the two.

**How long should a Sprint be?**

The [Scrum Guide](https://scrumguides.org/scrum-guide.html) describes Sprints as "fixed length events of one month or less to create consistency." Within that limit the team chooses. Shorter Sprints mean more frequent inspection and less risk per Sprint; longer ones leave room for work that is hard to slice. Pick one length, keep it stable, and change it only as a deliberate decision at a retrospective.

**What does a Scrum Master do?**

The Scrum Master role is accountable for establishing Scrum as the guide defines it and for the Scrum Team's effectiveness. The guide lists services to the team, to the Product Owner and to the organization: coaching self-management, causing the removal of impediments, making sure events happen and stay within their timebox, helping with backlog techniques, and leading the organization's adoption. The guide calls Scrum Masters "true leaders who serve the Scrum Team and the larger organization." They do not assign work, since the Developers are self-managing.

**Is backlog refinement a Scrum event?**

No. The [Scrum Guide](https://scrumguides.org/scrum-guide.html) describes Product Backlog refinement as "an ongoing activity to add details, such as a description, order, and size." Many teams schedule a recurring refinement session, and that is a practice layered on top of Scrum. The 2013 guide replaced the word "grooming" with "refinement" ([revision history](https://scrumguides.org/revisions.html)), which is why both terms still circulate.

**Does Scrum require story points or velocity?**

No. The guide asks the Developers to size backlog items and to use their past performance, capacity and Definition of Done when forecasting, but it names no unit. Story points and velocity are popular practices from outside the guide. Ron Jeffries, who says he [may have invented story points](https://ronjeffries.com/articles/019-01ff/story-points/Index.html), now argues they are often misused, especially to compare teams.

**How is Scrum different from Kanban?**

Scrum works in fixed Sprints with defined accountabilities and events. The [Kanban Guide](https://kanbanguides.org/english/) defines Kanban as "a strategy for optimizing the flow of value through a process" built on visualizing a workflow, managing work in progress and improving the workflow, with no Sprints or required roles. Some teams use Kanban practices inside Scrum Sprints. See the [Kanban](https://tryhamster.com/methods/kanban) page for the method itself.

**What happens to work that is not Done at the end of a Sprint?**

It is not part of the Increment and cannot be presented as Done at the Sprint Review. The [Scrum Guide](https://scrumguides.org/scrum-guide.html) says such an item "returns to the Product Backlog for future consideration," where the Product Owner orders it again against everything else. The team does not lower the Definition of Done to count it. The retrospective is the place to ask why it did not finish.

**Can a Sprint be cancelled?**

Yes, but only by the Product Owner, and only if the Sprint Goal becomes obsolete, for example because the market or the company's direction changed. The [Scrum Guide](https://scrumguides.org/scrum-guide.html) gives the Product Owner sole authority to cancel. Because the Sprint Goal allows the detailed scope to be renegotiated with the Product Owner, a change in scope alone is not a reason to cancel.

## Sources

- [The Scrum Guide (Ken Schwaber and Jeff Sutherland)](https://scrumguides.org/scrum-guide.html)
- [Scrum Guide revision history](https://scrumguides.org/revisions.html)
- [Takeuchi and Nonaka: The New New Product Development Game, HBR](https://hbr.org/1986/01/the-new-new-product-development-game)
- [Wikipedia: Scrum (software development)](https://en.wikipedia.org/wiki/Scrum_%28software_development%29)
- [Manifesto for Agile Software Development](https://agilemanifesto.org/)
- [The Kanban Guide](https://kanbanguides.org/english/)
- [Atlassian: Learn scrum with Jira](https://www.atlassian.com/agile/tutorials/how-to-do-scrum-with-jira-software)
- [Ron Jeffries: Story Points Revisited](https://ronjeffries.com/articles/019-01ff/story-points/Index.html)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
