---
name: "running-inspect-and-adapt-workshops"
description: "Facilitate the end-of-PI event that demos the real solution, reviews results against PI objectives, and produces owned improvements for the next PI."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "scaled-agile-framework"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# How to Run an Inspect and Adapt SAFe Workshop

> Facilitate the end-of-PI event that demos the real solution, reviews results against PI objectives, and produces owned improvements for the next PI.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to a full day per PI, plus a few hours of preparation |
| Outcome | A shared, evidence-based view of how the PI went and a short backlog of owned improvement items ready to enter the next PI Planning. |
| Prerequisites | An Agile Release Train that has completed at least one Program Increment, PI objectives written and agreed during PI Planning, Access to an integrated environment where the whole solution can be demonstrated, A facilitator, usually the Release Train Engineer, with authority to schedule the whole train |
| Part of | [Scaled Agile Framework](../../methods/scaled-agile-framework/METHOD.md) |

## Overview

Inspect and Adapt (I&A) is the event where an Agile Release Train stops delivering for a few hours and looks honestly at what it built and how it built it. SAFe's glossary describes it as [a significant event held at the end of each Program Increment where the current state of the solution is demonstrated and evaluated](https://scaledagileframework.com/glossary). For background on SAFe itself, see the [Scaled Agile Framework method page](https://tryhamster.com/methods/scaled-agile-framework). This page is about running the event well.

The skill breaks into three linked parts. The PI system demo shows the integrated solution, not a slide deck and not individual team demos stitched together. The quantitative measurement review compares what happened with what the train said would happen. The problem-solving workshop takes the largest gaps, digs to root causes, and produces a short list of improvement items with owners.

The reference point for all three parts is the set of PI objectives. During PI Planning, [teams create iteration plans and objectives for the upcoming PI, expose cross-team dependencies, and identify risks](https://scaledagileframework.com/planning-interval). I&A closes that loop. If the objectives were vague, the review will be vague, so a facilitator who inherits weak objectives should say so during the event and fix the objective-writing practice as one of the improvements.

The practitioner running I&A is usually the Release Train Engineer, working with product management, system architects and team representatives. Your inputs are the PI objectives and their business value ratings, whatever delivery and quality data the train already collects, the integrated solution in a demonstrable state, and the open risks and impediments carried through the PI. Your outputs are a common understanding of the PI's results and an improvement backlog that the train will actually plan into the next PI.

The event goes wrong in recognisable ways. The demo turns into a sales pitch with carefully avoided rough edges. The metrics review becomes a defence of numbers rather than a look at them. The workshop produces twenty sticky-note ideas with no owner, and the same problems reappear at the next I&A. The rest of this page is built around preventing those failures: keep the demo real, keep the numbers tied to commitments, and keep the improvement list short enough to finish.

## How It Works

Treat I\&A as a pipeline in which each part feeds the next. The demo produces observations, the measurement review turns observations into evidence against commitments, and the workshop turns the largest gaps into actions. If any part is skipped, the parts after it lose their grounding.

**Part one: the PI system demo.** The goal is to show the current state of the integrated solution, which is exactly what the [SAFe glossary says I\&A exists to demonstrate and evaluate](https://scaledagileframework.com/glossary). Run it from a shared integrated environment, ideally the same staging or production environment that real users will touch. A train that builds and maintains a delivery pipeline to [define, build, validate, and release functionality that meets its PI objectives](https://scaledagileframework.com/planning-interval) should be able to demo from that pipeline's output. If the demo requires special setup that users will never see, record that as an observation in itself. Product management leads the narrative, walking through the PI objectives in order and showing which ones are met, partially met or missed.

**Part two: the quantitative measurement review.** Here the train compares planned against actual. The most useful single comparison is business value planned versus business value achieved per team and for the train, using the ratings business owners gave objectives during planning. Add a small set of flow and quality measures the train already tracks, for example features completed versus planned, escaped defects, and incidents after deployment. SAFe's pipeline guidance expects results to be measured after release: [Release on Demand outputs include measurements of the results of the underlying hypotheses and operational learning](https://v5.scaledagileframework.com/agile-release-train), so bring whatever hypothesis results exist. Present trends across several PIs where you have them, because one data point invites argument and a trend invites questions.

**Part three: the problem-solving workshop.** Choose the problems from the evidence, not from the loudest voice. Ask the room to vote on which gaps from the review matter most, then form small groups around the top few. Each group states the problem precisely, including what happened and how much it cost, then works backward to root causes using any structured technique the train is comfortable with, such as asking why repeatedly or grouping causes by category. Groups then propose corrective actions, and the train selects a handful to commit to.

**Closing the loop.** Improvement items are only real if they enter planning. PI Planning is where teams plan stories into iterations, expose dependencies, and identify risks and impediments is not a valid link, so treat it this way: carry the chosen items into the next [PI Planning event](https://scaledagileframework.com/planning-interval) as backlog items with owners and acceptance criteria, sized and scheduled like any other work. At the following I\&A, open the workshop by checking whether last PI's items were done and whether they moved the numbers.

## Step-by-Step Guide

### Step 1: Prepare the objectives and data pack

Two weeks before the event, collect every team's PI objectives with the business value ratings agreed at PI Planning. Ask each team to record actual business value achieved, with business owners confirming the scores rather than teams self-grading. Pull the flow, quality and operational measures the train already tracks, and chart them across as many past PIs as you have. Circulate the pack a few days ahead so people arrive having read it, not seeing it for the first time.

> **Pro tip:** Keep the data pack to a handful of charts, for example five or six; a thick pack signals that nobody decided what matters.

### Step 2: Set up a real integrated demo

Book the integrated environment and confirm with system architects that the latest increment is deployed there. Plan the demo around PI objectives rather than team boundaries, so a feature built by three teams is shown once, end to end. Rehearse once to catch broken environments, not to polish the story. Decide in advance who narrates and who drives the keyboard.

> **Pro tip:** If something cannot be demonstrated in the integrated environment, show that it cannot, and log it as input for the workshop.

### Step 3: Run the PI system demo

Open by restating the purpose: show the current state of the solution as it actually works. Walk through objectives in order, marking each as met, partly met or missed while the room watches. Invite business owners and stakeholders to ask questions and to try the solution where practical. Capture observations on a shared board as they arise, without debating them yet.

> **Pro tip:** Time-box the demo, for example to an hour for a typical train, so the measurement review and workshop are not squeezed out.

### Step 4: Review the measurements against commitments

Present planned versus achieved business value per team and for the train, then the supporting flow and quality measures. Point out trends and outliers and ask what the room sees before offering your own interpretation. Explicitly avoid ranking teams against each other, because that turns the review into a defence. Finish by listing the largest gaps between commitment and outcome as candidate problems.

> **Pro tip:** Ask each team to explain one number they are proud of and one they are not; it normalises honesty quickly.

### Step 5: Select problems to work on

Put the candidate problems from the demo and review on a single list. Have everyone vote, with a limited number of votes each, on which problems most affected the PI's outcomes. Take only the top few problems forward so each gets serious attention. Park the rest visibly so nobody feels ignored.

> **Pro tip:** For example, three problems for a train of eight to ten teams is usually enough to fill the workshop time.

### Step 6: Run the problem-solving workshop

Form cross-team groups around each selected problem, mixing roles so that causes spanning teams can surface. Each group writes a precise problem statement, including what happened, where and the impact. They then work back to root causes with a structured technique and vote on the most significant cause. Finally they propose specific corrective actions small enough to complete within a PI.

### Step 7: Commit improvement items into the next PI

Each group presents its proposed actions and the train selects which to commit to. Write each as a backlog item with an owner, acceptance criteria and a size. Hand the list to product management and the RTE so it enters the next PI Planning like any other work. Record the baseline number each item is meant to move, so the next I&A can check it.

> **Pro tip:** Reject any item whose owner is a group or a department; one named person owns each improvement.

## Best Practices

- Anchor every part of the event to the PI objectives agreed at planning. The objectives are the only shared definition of success the train has, so demos, numbers and problems all read back to them. If objectives were weak, fixing how they are written is itself a legitimate improvement item.
- Demonstrate from the integrated environment, not from local builds or recordings. The point of the demo is to show the solution's current state, and anything short of the integrated system hides integration problems that matter most at train level.
- Have business owners score achieved business value, not the teams themselves. Self-scored results drift upward and lose credibility with stakeholders. Owner scoring also keeps the conversation about value delivered rather than effort spent.
- Show trends over several PIs rather than a single snapshot. A single PI's numbers invite excuses about unusual circumstances, while a trend shows whether the system is improving. It also lets you check whether past improvement items worked.
- Keep the committed improvement list short. A few items that get finished build trust in the event, while a long list that silently dies teaches people that I&A is theatre.
- Open each I&A by reviewing the previous PI's improvement items. This closes the loop, makes owners accountable, and gives the train evidence of whether its changes actually moved the numbers.

## Common Mistakes

- **Turning the system demo into a rehearsed showcase that avoids anything broken.** — State upfront that the goal is to show the real current state. Log anything that cannot be demonstrated as an observation for the workshop, since those gaps are often the most useful findings.
- **Using the measurement review to compare or rank teams.** — Present results against each team's own commitments and against the train's past PIs. Ranking teams makes people defend numbers instead of examining them, and the workshop then gets polite, surface-level problems.
- **Letting the problem-solving workshop pick topics by who speaks loudest.** — Derive candidate problems from the demo observations and the measurement gaps, then vote. Evidence-based selection keeps the workshop on the issues that actually cost the train value.
- **Ending the event with a long list of ideas and no owners.** — Commit only a handful of items, each with one named owner, acceptance criteria and a size. Carry them into the next PI Planning as real backlog work so they compete for capacity like everything else.
- **Skipping I&A when the PI went badly or the schedule is tight.** — A difficult PI is exactly when inspection pays off most. Shorten each part if you must, but keep all three, because skipping the event guarantees the same problems recur.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/scaled-agile-framework/METHOD.md) — Scaled Agile Framework

## Related Skills

- [Managing a Lean Portfolio in SAFe](../managing-lean-portfolio-with-safe/SKILL.md)
- [Splitting Features into User Stories and Enablers](../splitting-features-into-stories/SKILL.md)
- [Launching and Running Agile Release Trains](../launching-agile-release-trains/SKILL.md)
- [Implementing the SAFe Continuous Delivery Pipeline](../implementing-devops-with-continuous-delivery-pipeline/SKILL.md)
- [Coordinating Multiple ARTs with Solution Trains](../coordinating-multiple-agile-release-trains/SKILL.md)
- [Prioritizing Work Using WSJF](../prioritizing-with-wsjf/SKILL.md)
- [Planning Program Increments \(PI Planning\)](../planning-program-increments/SKILL.md)

## Sources

- [Planning Interval \(PI\) - Scaled Agile Framework](https://scaledagileframework.com/planning-interval)
- [SAFe Glossary](https://scaledagileframework.com/glossary)
- [Agile Release Train - Scaled Agile Framework](https://v5.scaledagileframework.com/agile-release-train)
