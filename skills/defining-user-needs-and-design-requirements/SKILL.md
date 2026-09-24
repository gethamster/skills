---
name: "defining-user-needs-and-design-requirements"
description: "Turn research insights into unmet needs, a reframed problem, How might we questions, design principles and testable requirements."
category: "Experience"
metadata:
  homepage: https://tryhamster.com
  method: "human-centered-design-hcd"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Defining User Needs and Requirements After Research

> Turn research insights into unmet needs, a reframed problem, How might we questions, design principles and testable requirements.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to two days per unit of analysis, depending on how much research you have |
| Outcome | A traceable definition set: unmet needs, a reframed problem statement, opportunity areas, How might we questions, design principles and testable requirements, each linked to user evidence. |
| Prerequisites | Completed contextual user research with notes, quotes and observations, Synthesized insights or clustered themes from that research, The original project brief and the decision it is meant to support |
| Part of | [Human-Centered Design \(HCD\)](../../methods/human-centered-design-hcd/METHOD.md) |

## Overview

Defining user needs and requirements is the hinge between research and ideation. You arrive with interview notes, observations and synthesized insights, and you leave with a short set of statements that tell the team what problem it is actually solving and what any solution must do. For background on the method itself, see the [Human-Centered Design method page](https://tryhamster.com/methods/human-centered-design-hcd); this page covers only the definition work.

The raw material is broad. An [IDEO-based process guide from Umbrex](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) lists the primary inputs as direct user research, observed behaviors, user stories, expressed needs, frustrations, aspirations, contextual constraints and relevant internal evidence. Before interpreting any of it, [the same guide](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) recommends fixing the unit of analysis, such as a customer segment, use case, service moment, workflow or end-to-end journey. Without that anchor, needs from different journeys blur together and requirements start contradicting each other.

The outputs are equally specific. [The Umbrex guide](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) names unmet needs, a reframed problem statement, opportunity areas, How might we questions, design principles and prototype concepts as common definition-stage outputs. This skill covers the first five, plus the step that turns them into requirements a team can build and test against. Prototype concepts belong to the next stage.

The reason to do this deliberately, rather than jumping from interviews to features, comes from the formal standard. [ISO 9241-210](https://standards.iteh.ai/catalog/standards/iso/f476aadb-0ef4-4d4d-8049-139bd94b5a05/iso-9241-210-2010) requires that the design be based on an explicit understanding of users, tasks and environments. [NIST quotes the standard's definition](https://nist.gov/itl/iad/human-centered-technologies/human-factors-human-centered-design) of human-centered design as an approach that aims to make systems usable and useful by focusing on the users, their needs and requirements. An explicit understanding means written down, traceable and shared, not a feeling the lead researcher carries in their head.

You can tell the skill worked when three things hold. Every requirement traces back to at least one observed behavior or quote. The reframed problem statement differs meaningfully from the original brief, or you can explain why the brief survived contact with users. And your How might we questions produce many different ideas in ideation instead of one obvious feature. When definition goes wrong, it usually shows up as a requirements list that restates the brief, needs phrased as solutions ('users need a dashboard'), or principles so generic they could apply to any product.

## How It Works

Definition work is a chain of translations. Each link moves from what you saw toward what you will build, while keeping a thread back to the evidence.

It starts with insights. [The Umbrex process guide](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) describes a useful insight as one that connects observed behavior or expressed experience to a deeper need or motivation. It also warns against treating every individual comment as an equally generalizable finding; you look for recurring patterns, tensions, contradictions and unmet needs instead. If your insights are still loose notes, finish [synthesizing qualitative research into insights](https://tryhamster.com/skills/synthesizing-qualitative-research-into-insights) first.

From each insight you extract the need underneath it, then step back and rewrite the problem. [The guide recommends](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) reframing the initial problem statement so it reflects what people actually need rather than preserving the assumptions embedded in the original brief. Opportunity areas and How might we questions then open the space back up before ideation narrows it again. Design principles and requirements close the chain by setting what any solution must respect.

| Output | Purpose | Example |
|---|---|---|
| Unmet need | Names what a person is trying to achieve and cannot | Applicants need to know what is still missing from their file |
| Reframed problem | Replaces brief assumptions with the real need | From 'cut incomplete applications' to 'help applicants know where they stand' |
| Opportunity area | Marks a space for action without naming a feature | Status visibility between submission and decision |
| How might we | Opens a need into a prompt with many answers | How might we make the next step obvious without a phone call? |
| Design principle | Settles recurring trade-offs across decisions | Show progress before asking for more |

Principles and requirements do different jobs. A principle is a value judgment that guides trade-offs across many decisions. A requirement is a testable condition a specific solution must meet, for example 'a returning applicant can see which documents are still missing without contacting support.' Write requirements so that someone could run a session with a user and call the result pass or fail, because [ISO 9241-210](https://standards.iteh.ai/catalog/standards/iso/f476aadb-0ef4-4d4d-8049-139bd94b5a05/iso-9241-210-2010) requires design decisions to be driven and refined by user-centred evaluation. A requirement nobody can evaluate cannot drive anything.

Two properties keep the chain honest. Traceability: each requirement carries the IDs of the needs and insights behind it, so when someone asks why it exists, the answer is a user, not an opinion. Revisability: [the standard](https://standards.iteh.ai/catalog/standards/iso/f476aadb-0ef4-4d4d-8049-139bd94b5a05/iso-9241-210-2010) also requires the process to be iterative, so treat the definition set as a working draft. When evaluation shows a need was misread, update the need and every requirement downstream of it rather than patching the solution.

Scope matters as well. [NIST's summary of the standard](https://nist.gov/itl/iad/human-centered-technologies/human-factors-human-centered-design) states that the design should address the whole user experience. A requirement set that covers only the screen and ignores the paper form before it or the support call after it is incomplete, even if every individual requirement is well written.

## Step-by-Step Guide

### Step 1: Fix the unit of analysis

Decide what you are defining needs for before reading a single note. [The Umbrex guide](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) suggests a customer segment, use case, service moment, workflow or end-to-end journey. Write it as one sentence at the top of your working document, for example 'first-time applicants, from finding the form to receiving a decision.' If the research covered several units, run definition separately for each rather than merging them.

Mixing units is the most common source of requirements that contradict each other.

> **Pro tip:** If stakeholders argue about scope, list the candidate units and pick the one tied to the decision the project actually has to support.

### Step 2: Assemble the evidence base

Pull together your synthesized insights plus the raw material behind them: quotes, observations, photos and internal data such as support logs. Give each insight a short ID and link it to its sources. Separate what people said from what you observed them do, because the gap between the two often points to the real need. Flag insights backed by a single participant so nobody later mistakes an anecdote for a pattern.

> **Pro tip:** A plain table with columns for ID, insight, evidence and how many participants showed it is enough; the structure matters more than the tool.

### Step 3: Translate insights into unmet needs

For each insight, ask what the person is trying to achieve and what currently stops them. Write the need as a verb-led statement about the person, not the product: 'needs to know what is still missing,' not 'needs a status page.' A need phrased as a feature has already skipped ideation. Keep needs that recur across participants or sit on moments with outsized consequences, following [the guide's emphasis](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) on recurring patterns and unmet needs, and park the rest in a backlog with their evidence.

> **Pro tip:** Test each need by asking whether several very different solutions could satisfy it. If only one can, you wrote a solution.

### Step 4: Reframe the problem statement

Put the original brief next to your top needs and read them together. Rewrite the problem so it names who is affected, what they are trying to do and what gets in the way, drawing on the needs rather than the brief's assumptions, as [the Umbrex guide](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) recommends. Expect the new statement to shift the target, often from an organizational metric to a person's experience, or from one touchpoint to the journey around it. Share the reframe with the sponsor explicitly and show the evidence that moved it, since a silent reframe reads as scope creep.

> **Pro tip:** Keep the original brief in the document with a line explaining what changed and why; it defuses the 'that is not what we asked for' conversation.

### Step 5: Map opportunity areas

Group related needs into opportunity areas, each one a promising space for action that does not yet prescribe a product or feature, in line with [the guide's definition](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process). Name each area as a territory, such as 'status visibility between submission and decision,' not as a deliverable. Rank areas by how many needs they address and how much the underlying moments matter to users. Carry a few into ideation and record why the others were deferred.

### Step 6: Write How might we questions

For each chosen opportunity area, write several How might we questions that convert a need into an open prompt inviting multiple solutions. Pitch them at the right width: 'How might we improve applications?' gives ideation nothing to push against, while 'How might we add a progress bar?' smuggles in the answer. Draft variants that stress different parts of the need, such as speed, confidence or effort. Tag each question with its insight IDs so ideation outputs stay traceable.

> **Pro tip:** Read each question aloud to a colleague. If they immediately propose one specific idea, widen the question.

### Step 7: Set design principles and testable requirements

Distill design principles from the needs: short statements of value that settle trade-offs you expect to face repeatedly. Then write requirements grounded in users, tasks and environments, as [ISO 9241-210](https://standards.iteh.ai/catalog/standards/iso/f476aadb-0ef4-4d4d-8049-139bd94b5a05/iso-9241-210-2010) expects. Each requirement names the user, the task, the context and an observable outcome that evaluation can confirm or reject, and carries the need and insight IDs behind it. Mark any requirement without evidence as an assumption to test.

Review the set with a mixed group, since [NIST's summary](https://nist.gov/itl/iad/human-centered-technologies/human-factors-human-centered-design) notes the standard calls for multidisciplinary skills and perspectives.

> **Pro tip:** Write the acceptance check next to each requirement as you draft it; if you cannot describe the check, the requirement is not finished.

## Best Practices

- Phrase needs as human goals, never as features. A feature-shaped need forecloses ideation and hides the reason behind the request, so when the feature fails you have nothing to fall back on.
- Keep a visible trace from every requirement to its evidence. IDs linking requirements to needs and insights let you answer 'why is this here?' with a user observation, and they show you exactly what to revise when a need turns out to be wrong.
- Weight findings by pattern, not by volume or vividness. [The Umbrex guide](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process) advises against treating every comment as equally generalizable; a need that shows up quietly across many participants usually matters more than one memorable complaint.
- Separate what people said from what they did. Stated preferences and observed behavior often diverge, and the need usually lives in the gap, so record both and note where they conflict.
- Revisit the definition set after every evaluation round. [ISO 9241-210](https://standards.iteh.ai/catalog/standards/iso/f476aadb-0ef4-4d4d-8049-139bd94b5a05/iso-9241-210-2010) requires an iterative process, and a frozen requirements list quietly turns into the old brief with better wording.
- Cover the whole experience, not just the interface. [NIST's summary of the standard](https://nist.gov/itl/iad/human-centered-technologies/human-factors-human-centered-design) says design should address the whole user experience, so include handoffs, offline steps and support contacts in your requirements.
- Review the definition with the people who will build and operate the solution. Engineers, operations staff and support leads catch requirements that are untestable or impossible to deliver, and early involvement makes them allies instead of late critics.

## Common Mistakes

- **Restating the original brief as the problem statement after research.** — Rewrite the problem from the top needs and compare it line by line with the brief. If nothing changed, either explain which evidence confirmed the brief or go back to the insights, because research that changes nothing was probably read through the brief's assumptions.
- **Writing needs that are really solutions, such as 'users need a mobile app'.** — Ask what the person would accomplish with that solution and write that instead. A good need admits several very different answers, which is what ideation needs to work with.
- **Adopting generic design principles like 'simple' or 'user-friendly'.** — A principle should settle a real trade-off specific to this project, for example choosing between showing progress and collecting more data up front. If a principle would fit any product, it will not guide any decision.
- **Writing requirements nobody can test.** — Name the user, task, context and observable outcome for each requirement, and draft the check alongside it. Since [ISO 9241-210](https://standards.iteh.ai/catalog/standards/iso/f476aadb-0ef4-4d4d-8049-139bd94b5a05/iso-9241-210-2010) expects decisions to be driven by user-centred evaluation, an untestable requirement cannot steer the design.
- **Promoting a single vivid quote into a core need.** — Check how many participants showed the pattern and whether behavior backs up the words. Keep single-source findings in a backlog marked as hypotheses rather than building requirements on them.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/human-centered-design-hcd/METHOD.md) — Human-Centered Design \(HCD\)

## Related Skills

- [Building Rapid Prototypes](../building-rapid-prototypes/SKILL.md)
- [Conducting Contextual User Research](../conducting-contextual-user-research/SKILL.md)
- [Planning Human-Centered Implementation](../planning-human-centered-implementation/SKILL.md)
- [Conducting User-Centered Evaluation](../conducting-user-centered-evaluation/SKILL.md)
- [Synthesizing Qualitative Research into Insights](../synthesizing-qualitative-research-into-insights/SKILL.md)
- [Facilitating Participatory Ideation](../facilitating-participatory-ideation/SKILL.md)
- [Iterating Design Solutions with Users](../iterating-design-solutions-with-users/SKILL.md)

## Sources

- [ISO 9241-210:2010 - Ergonomics of human-system](https://standards.iteh.ai/catalog/standards/iso/f476aadb-0ef4-4d4d-8049-139bd94b5a05/iso-9241-210-2010)
- [Human Centered Design \(HCD\) - NIST](https://nist.gov/itl/iad/human-centered-technologies/human-factors-human-centered-design)
- [IDEO Human-Centered Design Process](https://umbrex.com/resources/frameworks/design-thinking-frameworks/ideo-human-centered-design-process)
