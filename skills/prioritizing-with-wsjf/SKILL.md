---
name: "prioritizing-with-wsjf"
description: "Rank SAFe features and epics by dividing a relative cost of delay by relative job size, so the backlog delivers the most value soonest."
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

# How to Prioritize with Weighted Shortest Job First

> Rank SAFe features and epics by dividing a relative cost of delay by relative job size, so the backlog delivers the most value soonest.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-3 hours for a first scoring session of 10-20 items, under an hour for later re-scoring |
| Outcome | A ranked backlog with a score sheet and written rationale that product management can defend and revisit each planning cycle. |
| Prerequisites | A backlog of features or epics described well enough to discuss value and size, Access to business owners, product management and technical leads who can estimate, Basic familiarity with relative estimation, such as story points |
| Part of | [Scaled Agile Framework](../../methods/scaled-agile-framework/METHOD.md) |

## Overview

Weighted shortest job first (WSJF) is a sequencing technique. For every candidate item you estimate how much it costs the organization to wait for it (cost of delay) and how big it is (job size), then you schedule the items with the highest ratio of the first to the second. The goal is not to find the single most valuable item but the one that returns the most value per unit of capacity, so the backlog as a whole delivers value sooner. For background on the framework this skill belongs to, see the [Scaled Agile Framework method page](https://tryhamster.com/methods/scaled-agile-framework).

WSJF is where SAFe's economic thinking becomes a list a product manager can defend. The framework says it rests on ten Lean-Agile principles, tenets and economic concepts that [evolved from Agile methods, Lean product development and systems thinking](https://framework.scaledagile.com/safe-lean-agile-principles). Sequencing by cost of delay over size is the day-to-day application of that economic view: it replaces arguments about whose request matters most with explicit, comparable estimates.

You apply the same mechanics at two levels. At the ART level you rank features, which the SAFe glossary defines as [functionality that delivers business value and is sized for delivery by one ART within a Program Increment](https://scaledagileframework.com/glossary). At the portfolio level you rank epics, which are [large enough to require analysis, an MVP definition and financial approval](https://scaledagileframework.com/glossary) before implementation. The estimators and stakes differ, but the arithmetic does not.

The inputs are a candidate set of comparable items, a shared relative scale, and the people who can judge business value, time sensitivity, risk and effort. The outputs are a ranked list, a score sheet with one line of rationale per score, and a short list of assumptions to recheck next cycle. Product management usually owns feature scoring with business owners and architects in the room; portfolio leaders own epic scoring.

You can tell WSJF has gone wrong when nobody trusts the ranking, when every item scores in the same narrow band, when large items sit permanently at the bottom without being split, or when the order never changes from one planning cycle to the next even though the market has.

## How It Works

WSJF is a ratio of two relative estimates. The numerator, cost of delay, asks what the organization loses for each unit of time the item is not delivered. The denominator, job size, stands in for how long the item will occupy capacity. Dividing one by the other favors work that is both costly to postpone and quick to finish.

Cost of delay is hard to estimate directly, so break it into three questions and score each separately:

- **Value to users and the business:** how much revenue, retention, satisfaction or savings does this item create once delivered?
- **Time sensitivity:** does the value decay, or disappear, if delivery slips? Fixed deadlines, competitor moves and seasonal windows score high here.
- **Risk reduction or opportunity enablement:** does doing this item lower delivery or compliance risk, or unlock other valuable work?

Add the three scores to get cost of delay. Then score job size on the same kind of relative scale. Use a coarse, non-linear scale, for example 1, 2, 3, 5, 8, 13 and 20, because the gaps between values force real distinctions and discourage false precision.

Scoring works column by column, not row by row. For each component, find the item that scores lowest and give it the smallest value, then rate every other item relative to it. This keeps each column internally consistent, which matters more than any absolute meaning of the numbers. Only after every column is complete do you divide and sort.

Illustrative scenario: a product manager scores three made-up features. The numbers below are invented to show the mechanics.

| Feature | Value | Time sensitivity | Risk/opportunity | Cost of delay | Job size | WSJF |
|---|---|---|---|---|---|---|
| A: bulk export | 8 | 5 | 3 | 16 | 8 | 2.0 |
| B: login fix | 5 | 8 | 2 | 15 | 3 | 5.0 |
| C: new dashboard | 13 | 2 | 5 | 20 | 13 | 1.5 |

In this scenario, feature C has the highest cost of delay but ranks last, because it is also the largest. Feature B ranks first despite modest value: it is urgent and small, so delivering it first returns value soonest while A and C wait only briefly. The instructive move is what happens to C next. Rather than leaving it at the bottom, the team asks whether a smaller slice carries most of its value; if so, that slice gets its own score and often jumps the queue.

The ranking is only as good as its freshness. Time sensitivity changes as deadlines approach, and completed work changes what the remaining items enable. Re-score before each planning cycle, and at the portfolio level feed the ranking into the Portfolio Kanban, where SAFe expects epics to be [prioritized by strategic importance and available capacity with the trade-offs made visible](https://scaledagileframework.com/glossary).

## Step-by-Step Guide

### Step 1: Assemble a comparable candidate set

Pull together the items that genuinely compete for the same capacity: features for one ART, or epics for one portfolio. Do not mix levels, because a story and an epic cannot share a relative scale. Make sure each item has a short description of the outcome it creates and a rough sense of scope. Items that nobody can describe well enough to estimate go back for refinement instead of being guessed at.

> **Pro tip:** For example, if you have more than about 20 items, score the top candidates first and park the rest; scoring fatigue degrades estimates quickly.

### Step 2: Bring the right estimators into the room

Cost of delay needs business owners and product management, who understand value and timing. Job size needs architects or team representatives, who understand effort and technical risk. Invite both groups and agree on the scale before anyone scores. The output of this step is a group that can defend every column, not just some of them.

> **Pro tip:** Ask the business side to stay for job size and the technical side to stay for cost of delay; cross-questioning is where hidden assumptions surface.

### Step 3: Score cost of delay one column at a time

Take value first. Identify the item with the lowest value, give it the smallest score, and rate every other item relative to it. Repeat for time sensitivity and then for risk reduction or opportunity enablement. Record one line of rationale per score so the reasoning survives after the meeting. Add the three columns to produce cost of delay.

> **Pro tip:** Use simultaneous reveal, such as everyone showing a card at once, so the most senior voice does not anchor the group.

### Step 4: Estimate job size relatively

Using the same relative approach, anchor the smallest item and size the rest against it. Job size is a proxy for how long the item will occupy capacity, so include testing, integration and release effort, not just build effort. If estimators disagree by more than a couple of steps on the scale, discuss the gap before settling. Large disagreements usually mean the item's scope is unclear.

### Step 5: Calculate and rank

Divide each item's cost of delay by its job size and sort from highest to lowest. Look at the result as a whole before accepting it. Ask whether the top few items feel right and, if not, which specific score is wrong rather than overriding the order by hand. Correct the score with a stated reason and recalculate.

> **Pro tip:** Round WSJF to one decimal place; finer precision implies accuracy the relative estimates do not have.

### Step 6: Split oversized items that sink to the bottom

A large, valuable item that ranks last is a signal to split it, not to ignore it. Look for a slice that carries most of the value at a fraction of the size, and score that slice as its own item. For features, check against the glossary rule that a feature should be [deliverable by one ART within a single PI](https://scaledagileframework.com/glossary), and resize anything that fails it. The remaining scope becomes a separate, lower-ranked item.

> **Pro tip:** The [splitting features into stories](https://tryhamster.com/skills/splitting-features-into-stories) skill covers slicing patterns that preserve value.

### Step 7: Publish the ranking and re-score on a cadence

Share the ranked list together with the score sheet and rationale, so stakeholders can challenge a score rather than the whole method. Feed the top of the list into the next [PI Planning](https://tryhamster.com/skills/planning-program-increments) event or, for epics, the portfolio flow. Before each planning cycle, revisit time sensitivity first, since it changes fastest. Note which assumptions turned out wrong so the next session calibrates better.

> **Pro tip:** Keep last cycle's scores visible during re-scoring; comparing old and new values exposes drift and inconsistent anchoring.

## Best Practices

- Score column by column rather than item by item. Relative estimates only work when every item in a column is compared against the same anchor, and scoring one item across all columns at once breaks that comparison.
- Keep the scale coarse and non-linear, for example 1, 2, 3, 5, 8, 13 and 20. Coarse steps force the group to make real distinctions and stop hour-long debates over whether something is a 6 or a 7.
- Write one sentence of rationale for every score. When a stakeholder disputes the ranking, you can point to the specific assumption in question, which turns a political argument into a factual one.
- Treat time sensitivity as the most volatile input. Deadlines approach and competitive windows close, so re-scoring this column first each cycle catches the biggest changes with the least effort.
- Include release and integration effort in job size. Items that are quick to build but slow to validate or deploy otherwise look artificially cheap and crowd out work that is genuinely smaller.
- Ground the scoring in SAFe's economic intent, not just the formula. The framework's principles draw on [Lean product development and economic concepts](https://framework.scaledagile.com/safe-lean-agile-principles), so the question behind every score is what waiting costs, not who asked loudest.

## Common Mistakes

- **Treating WSJF scores as absolute measurements, for example comparing a feature's score this quarter with last quarter's.** — The numbers are only meaningful relative to the other items scored in the same session. Compare rankings within a session, and re-anchor every time the candidate set changes.
- **Letting large items sit at the bottom of the list indefinitely because their job size always drags the ratio down.** — A valuable item that never rises is a splitting problem. Carve out the highest-value slice and score it separately; features that exceed one ART in one PI should be [split or resized](https://scaledagileframework.com/glossary) anyway.
- **Scoring features and epics, or features and stories, on one list.** — Items at different levels cannot share a relative scale. Score features against features for an ART and epics against epics for the portfolio, where [epics require analysis and financial approval](https://scaledagileframework.com/glossary) before commitment.
- **Overriding the final order by hand when it feels wrong.** — Manual reordering hides the disagreement and erodes trust in the method. Find the specific score that produces the unexpected result, correct it with a stated reason, and recalculate.
- **Having only business stakeholders or only engineers do all the scoring.** — Cost of delay and job size draw on different knowledge. Without both groups present, one half of the ratio becomes a guess and the ranking inherits that error.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/scaled-agile-framework/METHOD.md) — Scaled Agile Framework

## Related Skills

- [Managing a Lean Portfolio in SAFe](../managing-lean-portfolio-with-safe/SKILL.md)
- [Splitting Features into User Stories and Enablers](../splitting-features-into-stories/SKILL.md)
- [Launching and Running Agile Release Trains](../launching-agile-release-trains/SKILL.md)
- [Running Inspect and Adapt Workshops](../running-inspect-and-adapt-workshops/SKILL.md)
- [Implementing the SAFe Continuous Delivery Pipeline](../implementing-devops-with-continuous-delivery-pipeline/SKILL.md)
- [Coordinating Multiple ARTs with Solution Trains](../coordinating-multiple-agile-release-trains/SKILL.md)
- [Planning Program Increments \(PI Planning\)](../planning-program-increments/SKILL.md)

## Sources

- [Safe Lean-Agile Principles](https://framework.scaledagile.com/safe-lean-agile-principles)
- [SAFe Glossary](https://scaledagileframework.com/glossary)
