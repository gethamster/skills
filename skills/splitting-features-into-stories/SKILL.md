---
name: "splitting-features-into-stories"
description: "Size epics, features and stories correctly, then split oversized features into iteration-sized user stories and enablers a team can finish."
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

# Splitting SAFe Agile Epics Features Stories and Enablers

> Size epics, features and stories correctly, then split oversized features into iteration-sized user stories and enablers a team can finish.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 1-3 hours per feature, spread across backlog refinement sessions |
| Outcome | A backlog where every feature fits one ART in one PI and every story or enabler fits a single iteration, traceable back to its feature and epic. |
| Prerequisites | A working ART backlog with features written in plain language, Basic familiarity with user story format and acceptance criteria, Knowledge of your ART's PI and iteration cadence |
| Part of | [Scaled Agile Framework](../../methods/scaled-agile-framework/METHOD.md) |

## Overview

Splitting is the backlog discipline that turns large intentions into work a team can actually finish. In SAFe the backlog has three working levels, and each has its own size limit. Getting the level wrong is the root of most planning pain: epics treated as features blow up PI Planning, and features treated as stories stall iterations. For the framework's background, see the [Scaled Agile Framework method page](https://tryhamster.com/methods/scaled-agile-framework). This page covers only the sizing and splitting work.

The [SAFe glossary](https://scaledagileframework.com/glossary) describes an epic as a significant solution-development initiative large enough to require analysis, an MVP definition and financial approval before implementation. The same [glossary defines a feature](https://scaledagileframework.com/glossary) as solution functionality that delivers business value, fulfills a stakeholder need, and is sized for delivery by one ART within a Program Increment. Stories sit below features and are the unit teams place into iterations, since during PI Planning [teams plan stories into iterations](https://scaledagileframework.com/planning-interval) and expose cross-team dependencies.

| Level | Scope | Sizing rule | Suggested owner |
|---|---|---|---|
| Epic | Significant initiative needing analysis and an MVP ([glossary](https://scaledagileframework.com/glossary)) | Needs financial approval before build ([glossary](https://scaledagileframework.com/glossary)) | Portfolio decision makers |
| Feature | Business value for a stakeholder need ([glossary](https://scaledagileframework.com/glossary)) | One ART within one PI ([glossary](https://scaledagileframework.com/glossary)) | ART product management |
| Story | A thin, testable slice of a feature | Fits one iteration (recommended) | Team product owner |
| Enabler | Technical or exploratory work a feature depends on | Fits one iteration (recommended) | Team product owner with architects |

The owner column is our recommendation for clear accountability, not a quotation from the framework. What matters is that each level has exactly one person who decides whether an item is ready and whether it needs splitting.

The skill has two halves. The first is a sizing check: does this item respect its level's rule? The second is the split itself: choosing a pattern that cuts the item into smaller pieces that each still deliver something testable. Enablers deserve separate treatment because technical work hidden inside user stories inflates estimates and disappears from view when priorities shift.

You know the skill is working when PI Planning produces few surprise dependencies, stories close within their iteration, and product owners can trace every story to a feature and every feature to a funded epic or a clear stakeholder need.

## How It Works

The hierarchy works because each level answers a different question at a different cadence. The epic answers whether the organization should invest. The feature answers what one train will deliver this increment. The story answers what one team will finish this iteration. The layered requirements model reflects the framework's roots in Leffingwell's book Agile Software Requirements, which [his announcement of the framework](https://scalingsoftwareagility.wordpress.com/2011/10/23/introducing-the-scaled-agile-framework%E2%84%A2) names as a primary place the framework was elaborated.

The feature level carries the one hard sizing rule. According to the [SAFe glossary](https://scaledagileframework.com/glossary), the principal sizing rule for a feature is one ART within one PI, and a feature that cannot meet it should be split or resized. That rule is useful because it is binary. You do not need precise estimates to apply it; you need the train's rough sense of capacity and the feature's rough size. If the feature needs two increments or two trains, it is not a feature yet.

Above the feature, the epic test is about governance rather than size alone. If an item needs analysis, an MVP definition and financial approval, the [glossary treats it as an epic](https://scaledagileframework.com/glossary), and it should go through portfolio review before any team starts slicing it into stories. Splitting an unapproved epic straight into stories skips the investment decision.

Below the feature, splitting is a design act. A good split produces stories that are each independently testable and each move the feature closer to its benefit. Common patterns, which you choose between based on the feature's shape, include:

- Workflow steps: one story per step a user takes, delivered in order.
- Business rule variations: the simplest rule first, then each additional rule.
- Data or input variations: one data type, channel or format per story.
- Happy path first: the main success path, then error handling and edge cases.
- Operations: create, read, update and delete as separate stories.
- Spike then build: a time-boxed investigation as an enabler, followed by the build stories it informs.

Enablers capture work users never see but the feature cannot ship without, such as infrastructure, architecture changes, compliance work or research spikes. Pulling them out as their own items makes them visible in planning, lets the team size them honestly, and keeps user stories focused on behavior a stakeholder can accept.

The splitting output feeds PI Planning directly. During breakouts, [teams plan stories into iterations](https://scaledagileframework.com/planning-interval), expose cross-team dependencies and identify risks. Stories that are too large surface there as iterations that will not balance, which is a late and expensive place to discover a sizing problem. Doing the split in refinement, before planning, is the point of the skill.

Signs the split failed: stories that only make sense together, stories named after technical layers rather than behavior, acceptance criteria that cannot be demonstrated, or a feature whose stories add up to far more than one increment of work.

## Step-by-Step Guide

### Step 1: Confirm the item's level

Start by deciding whether the item is an epic or a feature. Ask whether it needs analysis, an MVP definition and financial approval before anyone builds it; if so, the [SAFe glossary](https://scaledagileframework.com/glossary) classifies it as an epic. Route epics to portfolio review instead of splitting them into stories yourself. Only items that are clearly features, or approved epic slices, move to the next step.

> **Pro tip:** If you hesitate over the classification, write down who would have to approve the spend. A name above the ART usually means epic.

### Step 2: Test the feature against one ART in one PI

Apply the feature sizing rule: it must be deliverable by one ART within one PI, per the [SAFe glossary](https://scaledagileframework.com/glossary). Ask the teams for a rough size and compare it to the train's typical capacity. If the feature needs a second train or a second increment, split it into smaller features before writing stories. Record the reason for each split so reviewers can follow the logic.

> **Pro tip:** Use a quick relative comparison against a feature the train already delivered rather than a detailed estimate.

### Step 3: State the feature's benefit and acceptance criteria

Write one sentence describing the stakeholder need and the benefit the feature should deliver. Add acceptance criteria that describe observable outcomes, not implementation tasks. These criteria become the test for every split that follows: each story should satisfy part of them. A feature without clear criteria cannot be split well because there is nothing to divide.

### Step 4: Choose a splitting pattern

Look at the feature's shape and pick the pattern that fits: workflow steps, business rule variations, data variations, happy path first, or separate operations. Draft the stories so each delivers visible behavior and can be tested alone. Avoid splitting by technical layer, such as database, API and interface, because none of those slices is independently valuable. If no pattern fits, the feature may still be too vague and needs another pass at the criteria.

> **Pro tip:** Try two patterns on paper and keep the one where the first story is smallest yet still demonstrable.

### Step 5: Separate enabler work

Scan the draft stories for hidden technical work: new infrastructure, architecture changes, compliance tasks or unknowns that need research. Pull each into its own enabler item with its own acceptance criteria, such as a working environment or a written spike finding. Link each enabler to the stories that depend on it. This keeps user stories honest and makes enabler effort visible when the train plans capacity.

> **Pro tip:** Time-box research spikes, for example to a few days, and define the decision the spike must inform.

### Step 6: Check every story fits an iteration

Review each story and enabler with the team that will build it. Confirm it can be finished, tested and accepted within a single iteration, since [teams plan stories into iterations](https://scaledagileframework.com/planning-interval) during PI Planning. Split any story that fails, using the same patterns as before. Flag stories with dependencies on other teams so they are ready to surface in planning breakouts.

### Step 7: Trace, order and review before PI Planning

Link every story and enabler to its feature, and every feature to its epic or stakeholder need. Order the stories so the most valuable or riskiest slices come first. Walk the product manager through the split and confirm the stories together still satisfy the feature's criteria. Anything the review cannot trace or justify gets reworked or dropped.

> **Pro tip:** Check that the sum of story sizes still fits the one-ART-one-PI limit; splitting sometimes reveals a feature was larger than it looked.

## Best Practices

- Split in refinement, not in PI Planning. Planning breakouts are where [teams expose dependencies and risks](https://scaledagileframework.com/planning-interval), and they go poorly when half the time is spent resizing items that should have arrived ready.
- Treat the one-ART-one-PI rule as a gate, not a guideline. The [SAFe glossary](https://scaledagileframework.com/glossary) makes it the principal feature sizing rule, and applying it strictly prevents features from quietly rolling over increment after increment.
- Slice vertically through behavior. A story that touches interface, logic and data for a thin piece of functionality can be demonstrated and accepted, while a layer-only story cannot prove anything to a stakeholder.
- Keep enablers visible and linked. Hidden technical work inflates story estimates and gets cut first under pressure, so give it its own item, its own acceptance criteria and a link to the stories it unblocks.
- Deliver the happy path first. Shipping the main success path early gives stakeholders something to react to and often reveals that some planned edge cases are unnecessary.
- Name one owner per level. Clear ownership of epics, features and stories stops items from bouncing between people, and it gives each split a single person who decides whether it is ready.

## Common Mistakes

- **Leaving an item at feature level when it cannot fit a single PI.** — The [SAFe glossary](https://scaledagileframework.com/glossary) directs practitioners to split or resize any feature that one ART cannot deliver in one PI. Split it into smaller features before writing stories, or send it back as an epic if it needs investment approval.
- **Splitting an unapproved epic straight into stories.** — An epic needs analysis, an MVP definition and financial approval before implementation, according to the [SAFe glossary](https://scaledagileframework.com/glossary). Get the portfolio decision first, then split the approved MVP scope into features.
- **Splitting features by technical layer.** — Stories like build the database table or build the API endpoint deliver nothing testable on their own. Re-split along workflow steps, rules or data variations so each story shows working behavior.
- **Burying technical work inside user stories.** — When infrastructure or research hides inside a story, the estimate balloons and the work is invisible in planning. Extract it as an enabler with clear acceptance criteria and link it to the dependent stories.
- **Producing stories that only make sense together.** — If no single story can be accepted without the others, the split did not reduce risk. Rework it so the first story delivers a thin but complete slice and later stories extend it.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/scaled-agile-framework/METHOD.md) — Scaled Agile Framework

## Related Skills

- [Managing a Lean Portfolio in SAFe](../managing-lean-portfolio-with-safe/SKILL.md)
- [Launching and Running Agile Release Trains](../launching-agile-release-trains/SKILL.md)
- [Running Inspect and Adapt Workshops](../running-inspect-and-adapt-workshops/SKILL.md)
- [Implementing the SAFe Continuous Delivery Pipeline](../implementing-devops-with-continuous-delivery-pipeline/SKILL.md)
- [Coordinating Multiple ARTs with Solution Trains](../coordinating-multiple-agile-release-trains/SKILL.md)
- [Prioritizing Work Using WSJF](../prioritizing-with-wsjf/SKILL.md)
- [Planning Program Increments \(PI Planning\)](../planning-program-increments/SKILL.md)

## Sources

- [Introducing the Scaled Agile Framework™ \| Scaling Software Agility](https://scalingsoftwareagility.wordpress.com/2011/10/23/introducing-the-scaled-agile-framework%E2%84%A2)
- [Planning Interval \(PI\) - Scaled Agile Framework](https://scaledagileframework.com/planning-interval)
- [SAFe Glossary](https://scaledagileframework.com/glossary)
