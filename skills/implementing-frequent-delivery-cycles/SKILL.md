---
name: "implementing-frequent-delivery-cycles"
description: "Plan and run delivery cycles that put working, tested, usable software in front of real users on a steady, context-fit rhythm."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "crystal-agile-framework"
  datePublished: "2026-07-07"
  dateModified: "2026-09-24"
---

# Running Cycles in a Frequent Delivery Agile Framework

> Plan and run delivery cycles that put working, tested, usable software in front of real users on a steady, context-fit rhythm.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to set the cadence, then one cycle to validate it |
| Outcome | A consistent delivery rhythm in which every cycle ends with an integrated, tested increment in users' hands and a plan adjusted by their feedback. |
| Prerequisites | A small team working on a software product with identifiable users, Shared version control and a way to build and test the software, At least one real user or expert user willing to try increments, Basic familiarity with the Crystal family of methods |
| Part of | [Crystal Agile Framework](../../methods/crystal-agile-framework/METHOD.md) |

## Overview

Frequent delivery is the Crystal property many teams believe they already practice, and the one most easily faked. The test is not whether an iteration ended but whether running, tested, usable functionality reached people who will actually use it. [Practitioner guidance on Crystal methodology](https://projectmanagementformula.com/crystal-agile-methodology) sets the bar as working software delivered to real users at least every two months, ideally more often, and [a review of Cockburn's Crystal Clear](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html) makes the same point from the other side: a presentation, a prototype or a build that merely compiles does not count. For background on how frequent delivery fits alongside Crystal's other properties, see the [Crystal Agile Framework](https://tryhamster.com/methods/crystal-agile-framework) page.

This skill covers four pieces of work. First, choosing a cadence that suits your context instead of copying a standard sprint length. Second, running each cycle as a complete loop from slice selection to user feedback. Third, keeping feedback flowing when the client cannot accept production updates. Fourth, recognising the pitfalls that turn delivery into theatre.

The reason the property matters is simple. Every delivery is the moment your assumptions meet real use. The longer the interval, the more work you stack on untested guesses, and the more expensive each wrong guess becomes. [Cockburn's Crystal Clear](https://barnesandnoble.com/w/crystal-clear-alistair-paul-becker/1138695701) recommends producing shippable functionality early and often for exactly this reason, and postponing the first usable release to the end of the project defeats it.

The inputs to a cycle, as [Crystal practitioner guidance](https://projectmanagementformula.com/crystal-agile-methodology) and the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html) describe them, are the project goal, the team's current plan, a prioritised set of desired functionality, whatever user or expert-user feedback is available, and the lessons from the previous reflection activity. The outputs are an integrated working increment, fresh feedback from users, updated priorities or plans, and revised team conventions or improvement actions. If a cycle ends without all four outputs, it was a build cycle, not a delivery cycle.

The skill is usually owned jointly. A team lead or product manager sets and defends the rhythm, developers keep the increment integrated and tested, and a real user or expert user closes the loop by trying what was built. Delivery frequency alone will not carry a Crystal project: [Crystal's property list](https://slideshare.net/slideshow/crystal-methodology-58237270/58237270) places osmotic communication and access to expert users beside frequent delivery and reflective improvement, and the cycle works best when those are in place too.

## How It Works

Published Crystal material does not agree on a single delivery interval, and that disagreement is useful. It tells you the interval is a context decision, not a rule to copy. The table lists what each source says.

| Source                                                                                                                  | Stated delivery interval                                       |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Cockburn's Crystal presentation                                                                                         | Every month or two                                             |
| [Cockburn, The Cooperative Game handout](https://uxhh.de/roundtable/archiv/_media/2008/HO08-21_CockburnAlistairASD.pdf) | Every 2-4 months                                               |
| [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html)                        | About an hour to three months, average two weeks to two months |
| [Wikiversity on Crystal Methods](https://en.wikiversity.org/wiki/Crystal_Methods)                                       | Weekly up to quarterly, depending on project length            |
| [Practitioner guide](https://projectmanagementformula.com/crystal-agile-methodology)                                    | At least every two months, ideally more often                  |

Because the ranges differ, the working rule is to deliver as often as the team can produce genuinely usable, tested software, and never let the interval stretch beyond the point where feedback arrives in time to change decisions. [Practitioner guidance](https://projectmanagementformula.com/crystal-agile-methodology) adds a second constraint: once chosen, the cadence should stay consistent and every cycle should yield something usable. A rhythm that changes every cycle stops being a rhythm, and users stop planning around it.

Inside each cycle the work runs as a loop. [Agile3's description of Crystal Clear](https://agile3.com/knowledge/agile-frameworks/crystal-methodologies) lists designing, coding, testing, integrating and delivering the resulting functionality to users, and the loop closes when feedback reshapes the next cycle.

```mermaid
flowchart LR
  A[Select usable slice] --> B[Build and integrate]
  B --> C[Test]
  C --> D[Deliver to users]
  D --> E[Collect feedback]
  E --> F[Adjust priorities and conventions]
  F --> A
```

Each arrow is a place where cycles break. Slices that are too big never reach Test inside the cycle. Integration saved for the end turns Test into a scramble. Delivery that stops at an internal demo starves Collect feedback. And feedback that is gathered but never acted on means Adjust never happens; Cockburn's presentation is blunt that the team has to use the ideas it collects.

Some clients cannot accept incremental updates at all. Crystal does not treat that as permission to skip users. According to the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html), Cockburn's first fallback is deploying the increment to a test workstation, ideally with a friendly user trying it out. When even that is impossible, he recommends user viewings that give users ample opportunity to see work in progress. The fallbacks form a ladder: real production use first, then hands-on use in a test setting, then guided viewing. Drop only as far down the ladder as the constraint forces you, and record why, so the team can climb back up when the constraint lifts.

The cycle connects to the team's reflection practice. Cockburn's presentation describes a reflection workshop of an hour a month, which gives user feedback and process lessons a regular place to become changes; the [reflection workshop skill](https://tryhamster.com/skills/running-reflection-workshops) covers how to run it.

## Step-by-Step Guide

### Step 1: Assess team and project context

Start by writing down how many people are on the team and how critical the system is, because [Crystal practitioner guidance](https://projectmanagementformula.com/crystal-agile-methodology) treats team size and criticality as the primary inputs for scaling practices. Add the constraints that shape delivery: who the users are, how they receive software, and what approvals sit between a finished feature and its use. Note whether production deployment is possible, restricted or blocked. This assessment decides both the cadence and which fallback, if any, you will need.

The output is a one-page context note the whole team can see.

> **Pro tip:** If you cannot name a specific person who will use the next increment, fix that before choosing a cadence.

### Step 2: Choose and fix a cadence

Pick an interval that lets the team produce working, tested, usable software each cycle and that returns feedback while it can still change decisions. [Practitioner guidance](https://projectmanagementformula.com/crystal-agile-methodology) says the rhythm should come from the project context and stay consistent, not from a standard sprint length. Start at the shorter end of what you think is achievable, for example three or four weeks, since shortening later is harder than lengthening. Publish the delivery dates so users can plan to try each increment.

Commit to keeping the rhythm for several cycles before judging it.

> **Pro tip:** Choose the cadence by asking how long users can wait before a wrong assumption becomes expensive, then work backwards.

### Step 3: Select a small usable slice

From the prioritised list, pick the smallest piece of functionality a user could actually use for real work. [Agile3's Crystal guidance](https://agile3.com/knowledge/agile-frameworks/crystal-methodologies) frames each cycle as producing working, tested code for real users, so a slice that is only a layer of the architecture does not qualify. Check the slice against the cycle length: it must be designable, buildable, testable and integrable inside one interval. If it is not, cut scope rather than stretch the cycle.

The output is a short list of slice items and the user task each one supports.

> **Pro tip:** Phrase each slice as a user task completed end to end, not as a component finished.

### Step 4: Build, integrate and test within the cycle

Design, code, test and integrate continuously through the cycle rather than in phases, following the sequence [Agile3 describes for Crystal Clear](https://agile3.com/knowledge/agile-frameworks/crystal-methodologies). Integrate changes often so the increment is always close to deliverable. Run automated tests on the integrated build, not on individual branches. The cycle's output must be running, tested, usable software, which the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html) distinguishes from demonstrations and compiled code.

If testing is still happening on the last day, the slice was too big.

> **Pro tip:** Hold a mid-cycle check: if the slice is not integrated and passing tests halfway through, cut scope that day.

### Step 5: Put the increment in front of users

Deliver the increment to real users and have them use it, with expert users involved so the team gets feedback during development, as the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html) recommends. If production delivery is blocked, deploy to a test workstation with a friendly user. If that is also blocked, run a user viewing where users watch and question the work in progress. Record which rung of this ladder you used and why.

A cycle with no user contact at all is a failed delivery, whatever else it produced.

> **Pro tip:** Book the user session at the start of the cycle so delivery has a fixed appointment rather than an open-ended intention.

### Step 6: Collect feedback and adjust the next cycle

Gather what users did, where they struggled and what they asked for, then decide what changes. Cockburn's Crystal presentation insists the team use the ideas it collects, so every piece of feedback should end as a changed priority, a new slice, a dropped item or a revised working agreement. Feed process lessons into the monthly reflection workshop. Update the plan visibly so the next slice selection starts from the new information.

The output is a revised priority list and a short note of what changed and why.

### Step 7: Review whether the cadence still fits

Every few cycles, check whether each one actually ended with usable software in users' hands and feedback in time to act on it. If cycles regularly end with unfinished slices, shorten the slices before lengthening the interval. If feedback arrives too late to change decisions, shorten the interval. The [Cooperative Game handout](https://uxhh.de/roundtable/archiv/_media/2008/HO08-21_CockburnAlistairASD.pdf) and the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html) give different ranges, which confirms the interval is yours to tune.

Change the cadence deliberately and announce it, rather than letting it drift.

## Best Practices

- Define delivery as users actually using the software. The [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html) and [practitioner guidance](https://projectmanagementformula.com/crystal-agile-methodology) both set the bar at running, tested, usable functionality, so write that definition down and check each cycle against it.
- Ship the first usable increment early. [Cockburn's Crystal Clear](https://barnesandnoble.com/w/crystal-clear-alistair-paul-becker/1138695701) recommends shippable functionality early and often, and an early first delivery exposes deployment, packaging and approval problems while they are still cheap to fix.
- Keep the rhythm steady once chosen. A consistent cadence lets users plan time to try increments and lets the team learn how much fits in a cycle; changing the interval every cycle hides both signals.
- Cut scope, not quality, when a cycle is tight. Delivering a smaller slice that is fully tested keeps the feedback loop honest, while delivering untested work turns user sessions into bug reports.
- Climb down the fallback ladder only as far as forced. Test-workstation use and user viewings, which Cockburn recommends according to the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html), are substitutes for production use, so keep pushing to move back up when constraints ease.
- Tie every piece of feedback to a decision. If a comment does not change a priority, a slice or a working agreement, record that it was considered and rejected so the team can see feedback is taken seriously.
- Invest in communication and expert access alongside delivery. [Crystal's property list](https://slideshare.net/slideshow/crystal-methodology-58237270/58237270) pairs frequent delivery with osmotic communication and easy access to expert users, and delivery without them produces increments nobody is positioned to judge.

## Common Mistakes

- **Counting a presentation, prototype or compiled build as a delivery.** — Crystal's criterion, per the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html), is running, tested, usable functionality delivered to users. If users did not use it, log the cycle as not delivered and find out what blocked it.
- **Postponing the first usable release until the end of the project.** — [Cockburn's Crystal Clear](https://barnesandnoble.com/w/crystal-clear-alistair-paul-becker/1138695701) emphasises shippable functionality early and often. Plan the first delivery for the end of the first cycle, even if the slice is small.
- **Skipping real users because production deployment is difficult.** — Use Crystal's fallbacks instead: a test workstation with a friendly user, or user viewings of work in progress, as described in the [Crystal Clear review](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html). A blocked deployment changes how users see the work, not whether they do.
- **Choosing the cadence because it is a standard sprint length.** — [Practitioner guidance](https://projectmanagementformula.com/crystal-agile-methodology) says the rhythm should fit the project context and consistently yield usable software. Derive the interval from how quickly you need feedback and how much the team can finish and test.
- **Collecting feedback without changing the plan or working method.** — Cockburn's presentation tells teams to use the ideas they gather. Close each cycle by writing down which priorities or conventions changed; an empty list is a warning sign.
- **Treating delivery frequency as the only process change.** — [Crystal's property list](https://slideshare.net/slideshow/crystal-methodology-58237270/58237270) sets osmotic communication and access to expert users beside frequent delivery and reflective improvement. Faster releases without those properties just deliver misunderstandings faster.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/crystal-agile-framework/METHOD.md) — Crystal Agile Framework

## Related Skills

- [Selecting the Right Crystal Color Variant for Your Team](../selecting-crystal-color-variant/SKILL.md)
- [Designing Technical Environments That Support Team Focus](../designing-technical-environments-for-focus/SKILL.md)
- [Facilitating Osmotic Communication in Agile Teams](../facilitating-osmotic-communication/SKILL.md)
- [Integrating Expert User Access into Development Workflow](../integrating-expert-user-access/SKILL.md)
- [Tailoring Agile Processes to Your Specific Team Context](../tailoring-processes-to-team-context/SKILL.md)
- [Establishing Personal Safety for Honest Team Collaboration](../establishing-personal-safety-in-teams/SKILL.md)
- [Running Reflective Improvement Workshops in Crystal](../running-reflection-workshops/SKILL.md)

## Sources

- [Crystal Clear: A Human-Powered Methodology for Small Teams\|eBook](https://barnesandnoble.com/w/crystal-clear-alistair-paul-becker/1138695701)
- [Crystal Agile Methodology – Project Management Formula](https://projectmanagementformula.com/crystal-agile-methodology)
- [Crystal Methodologies \| Agile3](https://agile3.com/knowledge/agile-frameworks/crystal-methodologies)
- [Agile Software Development The Cooperative Game:](https://uxhh.de/roundtable/archiv/_media/2008/HO08-21_CockburnAlistairASD.pdf)
- [Crystal Methods - Wikiversity](https://en.wikiversity.org/wiki/Crystal_Methods)
- [Crystal Methodology \| PPTX - Slideshare](https://slideshare.net/slideshow/crystal-methodology-58237270/58237270)
- [developer.\* - Crystal Clear: A Human-Powered Methodology for Small Teams](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html)
- [Agile 2007](https://scribd.com/document/95144672/Agile-2007)
