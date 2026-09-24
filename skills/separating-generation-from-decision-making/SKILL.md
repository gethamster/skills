---
name: "separating-generation-from-decision-making"
description: "Audit an agent run, label every operation as text, decision, or rule, and route each one to an LLM, to Jev, or to deterministic code."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "jev-engineering"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Skill guide: separating AI generation from decision making

> Audit an agent run, label every operation as text, decision, or rule, and route each one to an LLM, to Jev, or to deterministic code.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to audit one agent run and pick a first migration candidate |
| Outcome | A labeled inventory of every operation in one agent run, a list of logic moved into code, and one named decision chosen as the first to migrate to Jev. |
| Prerequisites | An existing agent whose model calls you can log or trace, Access to the prompts and tool definitions the agent uses, Basic familiarity with typed outputs and tool calling |
| Part of | [Jev Engineering](../../methods/jev-engineering/METHOD.md) |

## Overview

Most agents start with one language model doing everything: drafting the reply, picking the next tool, deciding whether to retry, and sometimes computing an amount. This skill is the audit that pulls those jobs apart. The division comes from [Jev Engineering](https://tryhamster.com/methods/jev-engineering), summarized in its own documentation as [an LLM writes, Jev decides, and code acts](https://madewithjev.com/what-is-jev-engineering). The method page covers the definition and background; this page is about doing the split on an agent you already run.

Each operation lands in one of three places. Open-ended generation, such as writing a briefing, drafting an email, generating code or explaining reasoning, stays with the LLM, as [a practitioner guide to building a first Jev agent](https://x.com/eng_khairallah1/status/2102767762829447540) lays out. Bounded semantic judgments, where the possible outcomes are known but choosing among them requires understanding the situation, go to Jev; [the method documentation](https://madewithjev.com/what-is-jev-engineering) lists choosing a workflow, tool, specialist agent, retry versus stop, or escalation versus continuation. Exact rules, arithmetic, permission checks, weights, side effects and irreversible actions go to ordinary code, the same line [Vercel's guidance on agent control](https://vercel.com/i/jev-agent-control) draws when it has application code check permissions and validate arguments before a tool runs.

| Operation | Owner | Reason |
|---|---|---|
| Draft a customer reply | LLM | The answer is prose, not a pick ([Firecrawl overview](https://firecrawl.dev/blog/what-is-jev)) |
| Pick the specialist agent for a ticket | Jev | Known options, but choosing requires reading the ticket |
| Retry or stop after a failed tool call | Jev | Bounded outcome that depends on the error's meaning |
| Compute a refund amount | Code | Arithmetic is exact and a poor model fit ([Firecrawl overview](https://firecrawl.dev/blog/what-is-jev)) |
| Check the user may delete a record | Code | Permissions are exact rules ([Vercel guidance](https://vercel.com/i/jev-agent-control)) |

The output of the skill is concrete: a labeled inventory of every call in one run, a short list of logic that moves out of prompts and into code, and one named decision chosen as the first to migrate. The inventory also exposes places where a single prompt was quietly doing all three jobs at once, which is the first place to look when an agent behaves in ways nobody can explain.

The payoff is economic as well as structural. [A practitioner overview of Jev](https://firecrawl.dev/blog/what-is-jev) notes its latency is low enough to sit inside a request path and its cost low enough to judge every tool call, while anything needing generated text, code or an explanation still belongs to an LLM. Because Jev cannot write, an operation you label as a decision must genuinely have its answer drawn from a fixed set. That constraint is what makes the labeling honest.

## How It Works

The whole skill rests on one question asked of every operation in the run: what shape is the correct answer? The shape, not the difficulty, decides the owner.

**Text.** If the correct answer is a sentence, a paragraph, a code block or an explanation, it is generation. [The Firecrawl overview](https://firecrawl.dev/blog/what-is-jev) places anything that needs generated text, code or an explanation on the LLM side, and [a reported evaluation of Jev](https://orcarouter.ai/blog/jev-typesafe-system-one-what-we-know) lists tasks whose correct answer is a sentence among its poor fits. You cannot enumerate the possible outputs in advance, so no decision model can pick from them.

**Decision.** If the correct answer comes from a list you can write down before the call, but picking the right item requires understanding unstructured state, it is a decision. Worker selection, routing, relevance, retry versus stop and escalation are the typical cases in [the method documentation](https://madewithjev.com/what-is-jev-engineering). Jev takes the state and the typed questions and [returns a typed answer, a probability for every option and a confidence score](https://madewithjev.com/how-to-use-jev), which downstream code can branch on.

**Rule.** If the correct answer is fully determined by data you already hold, it is a rule. Arithmetic, counting and date math are named as weak spots for Jev in [the Firecrawl overview](https://firecrawl.dev/blog/what-is-jev), and permission checks, weights, side effects and irreversible actions belong to code in [the method documentation](https://madewithjev.com/what-is-jev-engineering). Asking any model to do these adds error to something that had none.

Three tie-breakers settle most disputes. First, if you could write the decision as a plain conditional over structured fields, it is a rule, even if a model currently makes it. Second, if you cannot list every possible answer, it is text. Third, if one call does several jobs, split it. A common case is a single LLM call that picks a tool and writes its arguments: the tool pick is a decision, composing free-form arguments may be text, and checking those arguments is a rule. [Vercel's guidance](https://vercel.com/i/jev-agent-control) describes exactly this arrangement, with the model interpreting requests and proposing actions while application code checks permissions and validates arguments before invoking anything.

Moving a decision to Jev does not make it correct. [The method documentation](https://madewithjev.com/what-is-jev-engineering) is explicit that Jev cannot return an answer outside the requested type, yet the decision can still be wrong, which is why confidence scores matter. Code-owned checks stay in place after migration, and thresholds are tuned separately (see [calibrating confidence thresholds and escalation paths](https://tryhamster.com/skills/calibrating-confidence-thresholds-and-escalation-paths)).

Once everything is labeled, choose the first migration candidate: [the decision that runs most often](https://madewithjev.com/what-is-jev-engineering). Frequency multiplies whatever you save per call and quickly produces enough examples to judge the new decision. Among frequent decisions, prefer one that is low-risk with clear, limited answers, as [one rollout guide](https://x.com/akshay_pachaar/status/2101037514945597645) recommends, so an early mistake costs little.

## Step-by-Step Guide

### Step 1: Log one complete agent run

Pick a representative task and capture every model call, tool call and branch the agent makes from start to finish. Record the prompt, the output, and what the surrounding code did with that output. [The method documentation](https://madewithjev.com/what-is-jev-engineering) names this logging of every model call in one run as the first classification step. A single run is enough to start, because the goal is an inventory of operation types, not statistics.

> **Pro tip:** Choose a run that exercises retries or escalation, since happy-path runs hide the decisions you most need to find.

### Step 2: Label every operation as text, decision, or rule

Go through the log and tag each operation with one of the three labels. Judge by the shape of the correct answer: prose or code means text, a pick from a known list means decision, an exactly determined result means rule. Write one line per label explaining why. If you hesitate between two labels, the operation is usually doing two jobs and needs splitting.

> **Pro tip:** Use a spreadsheet with columns for operation, current owner, label and reason so disagreements are visible to the whole team.

### Step 3: Split calls that do more than one job

Find prompts that both decide and write, or decide and compute, and break them into separate operations. For a call that picks a tool and fills its arguments, the pick becomes a decision and the argument check becomes code, following the split in [Vercel's agent-control guidance](https://vercel.com/i/jev-agent-control). Each resulting piece gets its own label. The prompt that remains for the LLM should be shorter and only ask for generated content.

### Step 4: Move exact logic into code

Take every operation labeled rule and rewrite it as deterministic code: arithmetic, date math, permission checks, weights and anything with side effects. [The Firecrawl overview](https://firecrawl.dev/blog/what-is-jev) flags arithmetic, counting and date math as poor model fits, so these gain accuracy immediately. Irreversible actions belong here too, behind validation, as [the method documentation](https://madewithjev.com/what-is-jev-engineering) assigns them to code. This step often removes model calls entirely before any migration begins.

> **Pro tip:** Write a unit test for each extracted rule using the exact inputs from your logged run, so you can prove the behavior did not change.

### Step 5: Confirm each decision has a fixed answer space

For every operation labeled decision, write out the complete list of possible answers. If the list is open-ended, relabel the operation as text. If the answer can be computed from structured fields alone, relabel it as a rule. What remains are true bounded semantic judgments, the kind [the method documentation](https://madewithjev.com/what-is-jev-engineering) routes to Jev.

Detailed question design is covered in [formulating atomic decision questions](https://tryhamster.com/skills/formulating-atomic-decision-questions).

> **Pro tip:** Include an explicit option for escalation or unknown so the decision never has to force a bad fit.

### Step 6: Choose the first migration candidate

Rank the confirmed decisions by how often they run and pick the most frequent one, as [the method documentation](https://madewithjev.com/what-is-jev-engineering) recommends. Break ties in favor of low risk and clear, limited answers, following [a practitioner rollout guide](https://x.com/akshay_pachaar/status/2101037514945597645). Name the decision, its options and the code path that consumes its answer. Leave every other decision on its current owner for now.

> **Pro tip:** Avoid starting with a decision that gates money or deletion, even if it is frequent; prove the pattern on something reversible.

### Step 7: Write the state and wire the handoff

Describe the state the chosen decision reads: [the goal, work already completed, available evidence and missing information](https://madewithjev.com/what-is-jev-engineering). Connect the pieces so the LLM proposes or writes, Jev returns a typed answer, and code validates and acts on it. Keep the old path available so you can compare the two before switching. Measuring that comparison is covered in [benchmarking and observing agent loops](https://tryhamster.com/skills/benchmarking-and-observing-agent-loops), and state design in [structuring shared agent state](https://tryhamster.com/skills/structuring-shared-agent-state).

## Best Practices

- Label by the shape of the correct answer, not by how hard the task feels. A difficult judgment with a known option list is still a decision, and an easy summary is still text. Difficulty-based labeling sends trivial prose to decision models and hard picks to prompts.
- Move rules to code before migrating any decision. Extracting arithmetic, permissions and side effects is cheap, risk-free and removes model calls outright. It also shrinks the prompts you will later have to reason about.
- Keep permission and argument checks in code even after a decision moves to Jev. [Vercel's guidance](https://vercel.com/i/jev-agent-control) has application code check permissions and validate arguments before invoking tools, and a confident decision should never skip that gate.
- Migrate one decision at a time. Changing several owners at once makes it impossible to tell which change caused a regression. The first migration is as much a test of your wiring as of the decision itself.
- Write down the reason next to every label. The reason is what lets a teammate challenge a label, and it becomes the documentation for why each component exists.
- Remember that typed output is not the same as a correct answer. [The method documentation](https://madewithjev.com/what-is-jev-engineering) warns that a decision can still be wrong, so plan for confidence-based fallbacks rather than assuming the type system catches errors.

## Common Mistakes

- **Sending generation to a decision model because it is faster or cheaper.** — Jev is built to decide, not write, and [the Firecrawl overview](https://firecrawl.dev/blog/what-is-jev) keeps anything needing text, code or an explanation with an LLM. If the correct answer is a sentence, keep it on the LLM regardless of cost.
- **Leaving arithmetic, date math or permission logic inside a model prompt.** — These have exact answers, and models add error to them. Rewrite them as code with tests, as the division in [the method documentation](https://madewithjev.com/what-is-jev-engineering) assigns them to code.
- **Letting a decision directly trigger a tool.** — The decision picks; code acts. Put a permission and argument-validation gate between the answer and the tool runner, as [Vercel's agent-control guidance](https://vercel.com/i/jev-agent-control) describes.
- **Starting the migration with the most interesting or highest-stakes decision.** — Start with [the decision that runs most often](https://madewithjev.com/what-is-jev-engineering), preferring one that is low-risk with clear answers. Frequency gives you evidence fast, and low stakes keep early errors cheap.
- **Labeling a whole prompt with one tag when it does several jobs.** — Split the prompt into its operations first, then label each one. A single tag on a mixed call hides the rule or decision buried inside the generation.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/jev-engineering/METHOD.md) — Jev Engineering

## Related Skills

- [Benchmarking and Observing Agent Loops](../benchmarking-and-observing-agent-loops/SKILL.md)
- [Formulating Atomic Decision Questions](../formulating-atomic-decision-questions/SKILL.md)
- [Designing Routing and Ranking Policies](../designing-routing-and-ranking-policies/SKILL.md)
- [Batching and Parallelizing Decisions](../batching-and-parallelizing-decisions/SKILL.md)
- [Enforcing Deterministic Execution Boundaries](../enforcing-deterministic-execution-boundaries/SKILL.md)
- [Calibrating Confidence Thresholds and Escalation Paths](../calibrating-confidence-thresholds-and-escalation-paths/SKILL.md)
- [Structuring Shared Agent State](../structuring-shared-agent-state/SKILL.md)

## Sources

- [What is Jev Engineering?](https://madewithjev.com/what-is-jev-engineering)
- [Jev Engineering: How to Actually Build Your First AI Agent Brain ... - X](https://x.com/eng_khairallah1/status/2102767762829447540)
- [How to use Jev: first call in 5 minutes](https://madewithjev.com/how-to-use-jev)
- [Jev: TypeSafe's Decision Model, Speed and Cost Explained](https://orcarouter.ai/blog/jev-typesafe-system-one-what-we-know)
- [What Is Jev? Inside TypeSafe's Decision-Only AI Model](https://firecrawl.dev/blog/what-is-jev)
- [Akshay on X: https://t.co/haL8IGhx3h / X](https://x.com/akshay_pachaar/status/2101037514945597645)
- [Where does Jev fit in an AI agent loop? - Vercel](https://vercel.com/i/jev-agent-control)
