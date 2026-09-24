---
name: "adapting-spotify-model-to-your-organization"
description: "Assess your context, explain the why, and adapt squads, tribes, chapters and guilds instead of copying Spotify's structure wholesale."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "spotify-squads"
  datePublished: "2026-04-23"
  dateModified: "2026-09-24"
---

# How to Implement Spotify Model Practices in Your Org

> Assess your context, explain the why, and adapt squads, tribes, chapters and guilds instead of copying Spotify's structure wholesale.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Advanced |
| Time to Learn | One to two quarters for assessment, pilot and first review |
| Outcome | A context-specific operating model, piloted and measured, that teams understand and support rather than a renamed org chart. |
| Prerequisites | Working knowledge of squads, tribes, chapters and guilds, At least one team already delivering with Scrum, Kanban or a similar agile practice, A leadership sponsor who can change reporting lines and budgets, Access to delivery, quality and engagement data for a baseline |
| Part of | [Spotify Squads](../../methods/spotify-squads/METHOD.md) |

## Overview

Adapting the Spotify model means taking the ideas behind squads, tribes, chapters and guilds and fitting them to your organization's problems, constraints and culture, rather than reproducing the org chart. For the definition, origin and structure of the model itself, see the [Spotify Squads method page](https://tryhamster.com/methods/spotify-squads). This page is about the work of adoption: deciding what to take, persuading people it is worth doing, and finding out whether it helped.

Adaptation is the skill because the source material was never a template. Spotify's own 2016 presentation said the approach [can help you understand how things are done at Spotify, but you shouldn't copy it in your own organization](https://infoq.com/news/2016/10/no-spotify-model), since it changed constantly and there was no single way software was developed there. A [Scrum.org practitioner account](https://scrum.org/resources/blog/spotify-model-10-lessons-transplantology) calls it a snapshot of engineering culture and nothing more, and a [2023 practitioner critique](https://agilepainrelief.com/blog/the-spotify-model-of-scaling-spotify-doesnt-use-it-neither-should-you) argues that the version other companies copy is not what Spotify practices today.

The evidence base is also thin. A practitioner review notes that the model has not been academically evaluated and rests on an informal report. The most detailed independent account in this library, a [2023 exploratory study of a large-scale agile transformation](https://journals.sagepub.com/doi/full/10.1177/02683962231164428), describes an adoption that struggled: management did not communicate the value of the change in tangible terms, and the squads never bought into the rationale. You are therefore running an experiment, not installing a proven system, and you should design the rollout that way.

The skill breaks into four pieces of work. First, a context assessment that names the concrete problems you want to fix, such as slow cross-team delivery or weak discipline coaching, and checks whether squad-style structures address them. Second, a rationale that people can repeat back, written in terms of their daily work rather than in the vocabulary of the model. Third, a watch list of pitfalls that other adopters hit, used to shape the pilot. Fourth, a measurement plan that looks beyond throughput, because the same [2023 study found that emphasizing software-flow metrics narrowed the organization's view of success to short-term daily and weekly performance](https://journals.sagepub.com/doi/full/10.1177/02683962231164428).

The outputs are tangible: a written adoption hypothesis, a pilot scope, a communication plan, a balanced set of measures with a baseline, and a review date. You can tell the work went wrong when teams have new names but the same handoffs, when time in ceremonies grows while delivery does not, or when leaders and squads cannot agree on whether anything improved.

## How It Works

Treat the adoption as a change hypothesis with a feedback loop. You state which problem each borrowed element should solve, you introduce it in a limited scope, and you check both the intended effect and the side effects before expanding. This structure matters because Spotify itself described its approach as [a journey in progress, not a journey completed, with a lot of variation from squad to squad](https://engineering.atspotify.com/2014/3/spotify-engineering-culture-part-1). If the originators saw variation between their own squads as normal, a single fixed rollout across a different company is unlikely to fit.

The context assessment decides which elements you adopt at all. Squads help when delivery stalls on handoffs between functional teams. Chapters help when specialists spread across teams lose coaching and standards. Guilds help when knowledge is siloed. Tribes help when there are enough squads in related areas to need a grouping. If none of those problems is present, the element adds overhead without benefit. The assessment should also cover technology, not only structure: one [practitioner analysis names the biggest pitfall of the model as too much focus on organisation structures and ways of working and too little on technology](https://linkedin.com/pulse/between-pitfalls-spotify-model-some-hidden-gems-aeijelts-averink). Autonomous squads cannot release independently on a tightly coupled codebase with a shared release train.

The rationale and the pitfall watch list come straight from what failed elsewhere. The [2023 exploratory study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428) reported a cluster of problems in one transformation. The table pairs each with a mitigation you can build into the plan.

| Reported problem | Mitigation |
|---|---|
| Value of the change not stated in tangible terms ([2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)) | Name the specific problems it fixes and the evidence you will check |
| Squads did not buy into the rationale ([2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)) | Co-design the adaptation with squads and pilot before scaling |
| Lack of shared vision, less enjoyment working together ([2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)) | Publish one short vision and survey team health each review |
| More bureaucracy and time in agile ceremonies ([2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)) | Cap ceremony time and drop meetings that produce no decisions |
| Rising technical debt ([2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)) | Track debt as an outcome and reserve capacity to pay it down |
| No single definition of done, compliance not rewarded ([2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)) | Agree a shared definition of done and align recognition with it |

Measurement closes the loop. The same study reported that [different stakeholder groups judged the transformation's effectiveness differently](https://journals.sagepub.com/doi/full/10.1177/02683962231164428), which made it hard to say whether it worked. Agree the measures with each group before the pilot starts, so that executives, squads and specialists are reading the same scorecard. Pair flow measures such as cycle time with slower signals: quality and incidents, technical debt, customer outcomes, and team health. When the pilot review arrives, you expand, revise or stop based on that agreed evidence rather than on whichever group argues loudest.

## Step-by-Step Guide

### Step 1: Name the problems worth solving

Write down the concrete delivery and people problems you are trying to fix, in the words teams already use. Examples include releases waiting on another team, specialists with no one coaching them, or duplicated tooling decisions. For each problem, note where it shows up in data or in recent retrospectives. This list is the input for every later decision, so leave out anything you cannot point to.

If the list is empty or vague, stop here, because adopting a structure without a problem is how organizations end up copying a snapshot that [Spotify said should not be copied](https://infoq.com/news/2016/10/no-spotify-model).

> **Pro tip:** Ask each team lead for the one thing that most often blocks or slows their work last quarter, and cluster the answers.

### Step 2: Assess context and constraints

Check the conditions the model quietly assumes: teams that can release independently, a codebase that allows it, product areas that can be owned end to end, and managers willing to share authority. Map where your architecture forces coordination, because a [practitioner analysis warns that too little focus on technology is the biggest pitfall](https://linkedin.com/pulse/between-pitfalls-spotify-model-some-hidden-gems-aeijelts-averink). Note regulatory, contractual or reporting-line constraints that limit autonomy. The output is a short list of preconditions that are met, partly met, or missing.

> **Pro tip:** Mark any missing precondition as a pilot risk and decide who owns fixing it before the pilot starts.

### Step 3: Choose which elements to adapt

Match each problem to the element that addresses it, and drop the elements that address nothing on your list. You might adopt squads and chapters but skip tribes if you only have a handful of teams. Rename or reshape elements where your context differs, and record why. Keep the design small enough that you can explain it on one page.

The aim is an operating model built for your problems, not a faithful reproduction of what a [Scrum.org practitioner calls a snapshot of engineering culture](https://scrum.org/resources/blog/spotify-model-10-lessons-transplantology).

### Step 4: Write and communicate the rationale

Draft a short statement that links each change to a problem and to the evidence you will check. Test it with squads before announcing it, and revise until people can explain it back in their own words. This step targets the failure the [2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428) reported most prominently: value not communicated in tangible terms and squads that never bought in. Invite objections openly and record which ones change the design.

Communication is finished when teams can say what problem the change solves for them, not when the announcement is sent.

> **Pro tip:** Replace model vocabulary with plain descriptions in the first draft, for example "a stable team that can ship search changes without waiting" instead of "squad".

### Step 5: Pilot with a limited scope

Start with a small set of teams whose work is fairly independent, for example two or three squads for one quarter. Prefer volunteers, because forced early adopters tend to confirm the fears of everyone else. Give the pilot the authority the design promises, such as release decisions, so you test the real model rather than a relabelled one. Watch the pitfalls from the study as they appear, especially growth in ceremony time and technical debt.

Keep a decision log so the review can trace what changed and why.

> **Pro tip:** Set the pilot end date and review format on day one so it cannot drift into a permanent half-state.

### Step 6: Measure outcomes beyond flow

Agree a scorecard with each stakeholder group before the pilot begins, since the [2023 study found different groups evaluated the transformation differently](https://journals.sagepub.com/doi/full/10.1177/02683962231164428). Include flow measures such as cycle time, but pair them with quality, technical debt, customer outcomes and team health. The same study found that flow metrics alone narrowed the view of success to short-term performance. Capture a baseline before any change so later comparisons mean something.

Review trends rather than single data points.

> **Pro tip:** Limit the scorecard to a few measures per group, for example three to five, so it gets read.

### Step 7: Review, revise or stop

At the agreed date, compare results against the baseline and the original problem list. Decide for each element whether to expand it, change it, or remove it, and write down the evidence behind each decision. Share the review with pilot teams first and ask what they would change. Stopping an element that did not help is a valid result, not a failure.

Repeat the loop as you expand, because the organization will keep changing just as Spotify's own approach did.

## Best Practices

- Start from problems, not from the org chart. Each borrowed element should trace back to a named problem, which keeps the design small and gives you a way to judge it later.
- Treat the model as a hypothesis. A practitioner review notes the model has not been academically evaluated, so plan for learning and reversal rather than presenting the rollout as settled.
- Fix technical coupling alongside structure. Squads cannot act autonomously on a system that forces shared releases, and a [practitioner analysis flags neglected technology as the main pitfall](https://linkedin.com/pulse/between-pitfalls-spotify-model-some-hidden-gems-aeijelts-averink).
- Co-design with the people who will live in it. The [2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428) tied poor outcomes to squads not accepting the rationale, and involvement is the most direct remedy.
- Budget ceremony time explicitly. Set a ceiling for coordination meetings and cut any that do not produce decisions, so the new structure does not become the extra bureaucracy that adopters have reported.
- Agree success measures with every stakeholder group up front. When executives and squads use different yardsticks, you cannot tell whether the change worked, and the argument replaces the evidence.

## Common Mistakes

- **Copying Spotify's structure wholesale and renaming existing teams as squads and tribes.** — Spotify itself said the approach [should not be copied](https://infoq.com/news/2016/10/no-spotify-model). Adopt only the elements that address your named problems and reshape them to fit.
- **Copying the version described in old articles as if it were current Spotify practice.** — A [2023 critique argues Spotify no longer practices the model in the commonly copied form](https://agilepainrelief.com/blog/the-spotify-model-of-scaling-spotify-doesnt-use-it-neither-should-you). Borrow principles such as autonomy with alignment, not a frozen diagram.
- **Announcing the change without a concrete reason teams can recognize.** — State the value in tangible terms tied to daily work, and test the message with squads first. The [2023 study](https://journals.sagepub.com/doi/full/10.1177/02683962231164428) reported exactly this communication gap in a struggling transformation.
- **Judging success only by throughput or velocity.** — Flow metrics alone pulled one organization's attention toward [short-term daily and weekly performance](https://journals.sagepub.com/doi/full/10.1177/02683962231164428). Add quality, technical debt, customer outcomes and team health to the scorecard.
- **Reorganizing people while leaving the architecture untouched.** — If squads still share one release path, autonomy exists only on paper. Include decoupling work in the plan, as a [practitioner analysis of pitfalls](https://linkedin.com/pulse/between-pitfalls-spotify-model-some-hidden-gems-aeijelts-averink) recommends by stressing technology over structure.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/spotify-squads/METHOD.md) — Spotify Squads

## Related Skills

- [Running Chapters for Discipline-Based Management](../running-chapters-for-discipline-excellence/SKILL.md)
- [Defining Squad Missions and Product Ownership Areas](../defining-squad-missions-and-ownership/SKILL.md)
- [Forming Autonomous Cross-Functional Squads](../forming-autonomous-squads/SKILL.md)
- [Managing Dependencies Across Squads and Tribes](../managing-dependencies-across-squads/SKILL.md)
- [Organizing Squads into Tribes](../organizing-squads-into-tribes/SKILL.md)
- [Building Guilds as Cross-Cutting Communities of Practice](../building-guilds-as-communities-of-practice/SKILL.md)
- [Balancing Squad Autonomy with Organizational Alignment](../balancing-autonomy-and-alignment/SKILL.md)

## Sources

- [From transformation to normalisation: An exploratory study of a large-scale agile transformation - Noel Carroll, Kieran Conboy, Xiaofeng Wang, 2023](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)
- [Don't Copy the Spotify Model](https://infoq.com/news/2016/10/no-spotify-model)
- [Spotify Model – 10 lessons in transplantology - Scrum.org](https://scrum.org/resources/blog/spotify-model-10-lessons-transplantology)
- [Scaling agile with the 'Spotify Model': pitfalls and hidden gems](https://linkedin.com/pulse/between-pitfalls-spotify-model-some-hidden-gems-aeijelts-averink)
- [Spotify Doesn't Use the Spotify Model. Neither Should You](https://agilepainrelief.com/blog/the-spotify-model-of-scaling-spotify-doesnt-use-it-neither-should-you)
- [Spotify engineering culture \(part 1\)](https://engineering.atspotify.com/2014/3/spotify-engineering-culture-part-1)
