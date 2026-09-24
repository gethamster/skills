---
name: "batching-and-parallelizing-decisions"
description: "Ask every independent decision an agent needs in one call against one state snapshot, then measure the cost and latency you save."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "jev-engineering"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Cutting cost by batching parallel AI agent decisions

> Ask every independent decision an agent needs in one call against one state snapshot, then measure the cost and latency you save.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to map and batch one loop, plus a measurement run |
| Outcome | A decision stage that asks each tier of independent questions in one call, with measured cost, latency and answer agreement against the sequential version. |
| Prerequisites | A working agent loop with logged model calls, Decision questions defined with fixed answer spaces, A captured state snapshot per loop iteration, A set of recorded snapshots to replay |
| Part of | [Jev Engineering](../../methods/jev-engineering/METHOD.md) |

## Overview

Batching is the practice of collecting every independent decision an agent needs at a given moment and asking them in a single call against one state snapshot, instead of firing one call per question. It sits inside the State, Questions, Action, Verify loop that the creator of [Jev Engineering](https://tryhamster.com/methods/jev-engineering) recommends reusing across builds, where one of the published build steps is to [ask independent questions together](https://madewithjev.com/x-posts). The reason it is worth doing is architectural: Jev is described as answering [multiple decision questions in one parallel pass rather than generating text token by token](https://x.com/eng_khairallah1/status/2102767762829447540), so extra questions share a call the agent is already making instead of each paying for its own round trip.

The clearest published measurement comes from an engineering examples repository that compared the same briefing asked question by question against the same questions batched into one call.

| Dimension | One question per call | All questions in one call | Source |
|---|---|---|---|
| Cost | Baseline | 12.2× cheaper | [Jev for engineers](https://github.com/Foadsf/jev-for-engineers) |
| Speed | Baseline | 10.0× faster | [Jev for engineers](https://github.com/Foadsf/jev-for-engineers) |
| Answers | Baseline | No change | [Jev for engineers](https://github.com/Foadsf/jev-for-engineers) |

The creator's reading list repeats the result, reporting that [batching 13 questions was 10× faster and 12.2× cheaper](https://madewithjev.com/jev-engineering) in one test. Treat these as one measured workload, not a promise. Your savings depend on how many questions you can group, how large the shared state is, and how often the loop reaches that decision point.

The third row matters as much as the first two. Batching is only a win if the answers stay the same when questions share a call. If they drift, you have not saved money, you have changed the agent's behavior, and every downstream metric is now measuring a different system.

This skill covers three things: deciding which questions are genuinely independent, structuring the single call so each answer can still be routed and thresholded on its own, and measuring the savings on your own data before you switch. It does not cover writing the questions themselves or setting their thresholds; those belong to the question-formulation and calibration skills. The practical outcome is a decision stage where round trips scale with the number of dependency tiers in your loop, not with the number of questions you ask.

## How It Works

The skill turns a sequence of round trips into one. Picture a single iteration of the loop the creator describes as [capture state, ask independent questions, route work from the answers, gate the action, execute, verify, and write the result back](https://madewithjev.com/x-posts). Batching lives entirely in the second stage: every question that can be answered from the snapshot you just captured goes out together.

**The independence test.** Two questions are independent when neither answer is an input to the other and both can be judged from the same snapshot. "Is this ticket urgent?" and "Does this ticket mention billing?" pass: you could ask them in either order and nothing would change. "Which specialist should take this?" and "Which of that specialist's tools should run first?" fail, because the second question's option list only exists once the first is answered. The creator's notes make the same point with routing, risk and relevance: [one state snapshot can support all three decisions](https://madewithjev.com/x-posts) because none of them waits on another.

**Tiers for dependent chains.** When a chain exists, do not force it into one call and do not fall back to one call per question. Split the questions into tiers. The first tier holds everything answerable from the current snapshot. Code acts on those answers, writes the results into state, and the next tier is batched from the refreshed snapshot. Aim for as few tiers as the dependencies allow, for example one or two per loop iteration.

**What comes back.** A batched call still returns per-question results. Jev is described as returning [a typed answer, a probability for every option and a confidence score, in 70 to 500 milliseconds](https://madewithjev.com/how-to-use-jev), so each answer can be routed and thresholded on its own. Batching changes the transport, not the decision contract. A low-confidence answer on one question should trigger that question's fallback without discarding the other answers in the batch.

**Why it saves.** Sequential calls repeat the same overhead each time: send the state again, wait for another round trip, parse another response. Because Jev handles [multiple questions in a single parallel pass](https://x.com/eng_khairallah1/status/2102767762829447540), the shared state travels once and the questions are answered together. The measured effect in one published test was a [12.2× cost and 10.0× speed improvement with no change in the answers](https://github.com/Foadsf/jev-for-engineers).

**How to know it worked.** Run the same recorded snapshots both ways and compare three things: cost per loop iteration, wall-clock latency of the decision stage, and answer agreement between the sequential and batched runs. Agreement is the gate. If answers shift when questions share a call, the questions are probably less independent than you assumed, or their wording leaks context from one to another. Only switch the live loop when agreement holds on your own data, and keep the sequential path available as a comparison baseline.

## Step-by-Step Guide

### Step 1: Map the decision points in one iteration

Take a representative run of the agent and list every decision it makes in one loop iteration, before any action executes. For each, write the question, its answer space and the part of state it reads. Include decisions buried in prompts or in helper functions that call a model, since those often account for hidden round trips. The output is a flat list you can reason about as a set rather than as a call sequence.

> **Pro tip:** Sort logged calls by timestamp; decisions that fire in the same gap between two actions are your first batch candidates.

### Step 2: Test each pair for independence

For every pair of questions, ask whether one answer changes the other question's wording, options or relevance. If it does, record a dependency; if not, the pair can share a call. Also confirm both questions read the same snapshot, because a question that needs fresh tool output cannot be batched with one asked before the tool ran. Keep the dependency notes in code next to the question definitions so the reasoning survives refactors.

> **Pro tip:** When unsure, swap the order of two questions in a sequential run on recorded snapshots and check whether either answer changes.

### Step 3: Group questions into tiers

Place every question with no unmet dependency in the first tier. Put questions that need a first-tier answer, or the result of an action taken on one, in the next tier. Each tier becomes one call against the snapshot available at that moment. If you end up with many tiers, look for questions that can be rewritten to judge the state directly instead of consuming another answer.

> **Pro tip:** A question like 'which tool should this specialist use' can often become 'which tool fits this task' with the full tool list, removing the dependency.

### Step 4: Assemble one call per tier

Define each tier's questions in code, each with its fixed answer space, and send them with a single copy of the state snapshot. The creator's build notes place [defining the questions in code](https://madewithjev.com/x-posts) directly before asking independent questions together, and the order matters: questions defined as data are easy to group, reorder and version. Give every question a stable identifier. Make sure the snapshot contains everything every question in the tier needs, since there is no second round trip to fetch more.

> **Pro tip:** Keep question identifiers identical between sequential and batched runs so their logs line up row for row.

### Step 5: Fan the answers out to code

Route each answer to the code that acts on it, applying that question's own threshold and fallback. Do not let one uncertain answer block the rest of the batch unless a real dependency exists. If the whole call fails or returns malformed output, fall back for every question in that batch as a unit. Log each question's answer and probability separately, not a single record for the batch.

### Step 6: Measure batched against sequential

Replay the same recorded snapshots through both paths. Compare cost per iteration, decision-stage latency and answer agreement question by question. The [published comparison](https://github.com/Foadsf/jev-for-engineers) reported no change in answers alongside its savings, and that is the property you must reproduce before switching. If agreement drops on specific questions, pull them out of the batch and investigate their wording or hidden dependencies.

> **Pro tip:** Use a replay set large enough to include ambiguous cases, for example a few hundred recorded snapshots rather than a handful of happy paths.

### Step 7: Re-check groupings when questions change

Adding, removing or rewording a question can create a new dependency or break an old one. Rerun the independence check and the agreement comparison whenever the question set changes. Treat the tier assignment as versioned configuration alongside the questions. This keeps a batching decision made months ago from quietly changing behavior today.

## Best Practices

- Batch from one snapshot per tier. Every question in a call should judge exactly the same state, otherwise answers can disagree because they saw different worlds, not because the decision was hard.
- Keep per-question thresholds and fallbacks. Batching is a transport optimization, and each decision still needs its own confidence cutoff and escape path.
- Make answer agreement the switch condition. Cost and latency gains mean nothing if the batched answers differ from the sequential ones, because you would be shipping a different agent.
- Prefer rewriting a dependent question over adding a tier. A question that judges the state directly is cheaper to batch than one that consumes another answer, and it is often clearer too.
- Log batch membership with every answer. Recording which call a question rode in lets you trace an odd answer back to its neighbors and the snapshot they shared.
- Measure savings on your own workload. The [published 13-question result](https://madewithjev.com/jev-engineering) is one test; your question count and state size set your real numbers.

## Common Mistakes

- **Batching questions that depend on each other, such as picking a worker and picking that worker's tool in the same call.** — Run the pairwise independence test first and split dependent chains into tiers, with state refreshed between them.
- **Asking every question one at a time out of habit, even when they all read the same snapshot.** — Group questions that share a snapshot and have no dependency into one call; the creator's notes recommend [asking independent questions together](https://madewithjev.com/x-posts) for exactly this case.
- **Switching to batching based on the published speedup without checking answers on your own data.** — Replay recorded snapshots through both paths and require question-by-question agreement before changing the live loop.
- **Treating a batch as one decision, with one threshold or one log line for all answers.** — Route, threshold and log each question separately; only whole-call failures should trigger a batch-wide fallback.
- **Leaving tier assignments unchanged after the question set evolves.** — Version the tiers with the questions and rerun the independence check and agreement comparison whenever a question is added or reworded.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/jev-engineering/METHOD.md) — Jev Engineering

## Related Skills

- [Benchmarking and Observing Agent Loops](../benchmarking-and-observing-agent-loops/SKILL.md)
- [Formulating Atomic Decision Questions](../formulating-atomic-decision-questions/SKILL.md)
- [Separating Generation from Decision-Making](../separating-generation-from-decision-making/SKILL.md)
- [Designing Routing and Ranking Policies](../designing-routing-and-ranking-policies/SKILL.md)
- [Enforcing Deterministic Execution Boundaries](../enforcing-deterministic-execution-boundaries/SKILL.md)
- [Calibrating Confidence Thresholds and Escalation Paths](../calibrating-confidence-thresholds-and-escalation-paths/SKILL.md)
- [Structuring Shared Agent State](../structuring-shared-agent-state/SKILL.md)

## Sources

- [Jev Engineering reading list: 15 guides, talks and builds](https://madewithjev.com/jev-engineering)
- [Jev Engineering: How to Actually Build Your First AI Agent Brain ... - X](https://x.com/eng_khairallah1/status/2102767762829447540)
- [How to use Jev: first call in 5 minutes](https://madewithjev.com/how-to-use-jev)
- [Jev for engineers — eight minimal working examples - GitHub](https://github.com/Foadsf/jev-for-engineers)
- [Jev demos and threads on X: 239 posts with video](https://madewithjev.com/x-posts)
