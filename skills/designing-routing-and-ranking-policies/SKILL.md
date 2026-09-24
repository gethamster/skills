---
name: "designing-routing-and-ranking-policies"
description: "Use typed decision calls to choose workers, tools, models and next steps, and to score sources, while code enforces the result."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "jev-engineering"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Guide to AI agent routing and ranking with decision models

> Use typed decision calls to choose workers, tools, models and next steps, and to score sources, while code enforces the result.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to design one routing fork, plus ongoing review |
| Outcome | A written routing and ranking policy where each fork has a code-built candidate set, a typed question, a threshold, a fallback and a code path that executes the chosen option. |
| Prerequisites | A working agent loop with at least one fork that currently uses an LLM prompt or hard-coded rules, A structured state snapshot the decision can read, Access to a decision model that returns typed answers with per-option probabilities, Logging for every decision the loop makes |
| Part of | [Jev Engineering](../../methods/jev-engineering/METHOD.md) |

## Overview

Routing and ranking are the forks where an agent loop has a known set of options and needs to understand the situation to pick among them. Which specialist agent should take this ticket? Which tool comes next? Is this request simple enough for a cheap model? Which retrieved passages actually answer the question? In the [Jev Engineering](https://tryhamster.com/methods/jev-engineering) split these points go to a decision model rather than a text generator, and [the method's own definition](https://madewithjev.com/what-is-jev-engineering) names picking a worker, scoring a source and approving a tool call as the calls Jev handles.

This skill covers four kinds of fork. Worker and tool selection chooses among agents, workflows or tools that can take the next unit of work. Model routing sends a request to a cheaper or stronger generator based on what the request needs. Source scoring grades each candidate document or passage so code can sort and cut the list. Next-step control decides what the loop does now: continue, retry, change approach, verify, or hand off.

These decisions suit a decision model because they repeat with a fixed answer set. A practitioner overview says Jev [fits decisions with a fixed answer set that repeat thousands of times a day](https://kanerika.com/blogs/jev-ai-use-cases), and lists model routing, agent step control and output scoring among its strongest uses. The same overview notes that [specialist tools still lead on PII spans, images, payment fraud and self-hosted setups](https://kanerika.com/blogs/jev-ai-use-cases), so a routing policy should send those jobs to the specialist rather than force them through a general decision call.

The output of this skill is a routing policy, not a prompt. For each fork it names the candidate set and where it comes from, the state fields the decision reads, the probability needed to act, the fallback when confidence is low, and the code that turns the chosen label into an action. Written this way, a route can be logged, replayed and changed without touching the generator.

Public builds show the shape. The [awesome-jev README](https://github.com/yibie/awesome-jev/blob/main/README.md) describes JevLoop, an agent harness that routes the loop's own judgements to Jev, where a Choice picks the next tool from the current candidates. A [collection of Jev use cases](https://github.com/wuyoscar/jev-skill) frames debugging next-step control as a four-way choice: inspect the error when there is unread evidence, change hypothesis when the same approach failed, verify the fix when there is new success evidence, or escalate when the situation is unknown. Each option carries its own trigger, which is what makes the choice learnable and auditable.

## How It Works

A decision call takes two inputs: the state, as text or JSON, and one or more typed questions about it. According to a [first-call guide](https://madewithjev.com/how-to-use-jev), Jev sends back a typed answer, a probability for every option and a confidence score, in 70 to 500 milliseconds. Routing and ranking are two ways of using that return value.

**Routing is one choice question over a candidate list.** Code assembles the candidates for this turn: the workers that are online, the tools this user is permitted to call, the models in the current budget tier. The decision model picks one and returns probabilities for all of them. Because the answer must be one of the listed options, the model cannot invent a tool that does not exist. It can still pick the wrong one, which is why code checks the probability before acting and has a fallback ready. Filtering candidates by permission happens before the call, not after, so the model never ranks an option the user could not run.

**Model routing is the same pattern with generators as candidates.** The options are labels such as a small fast model, a large model, or human review, and the question asks which one the request needs. The decision model does not write the answer; it decides who writes it. That keeps the expensive generator for requests that need it.

**Ranking is many score questions, one per candidate.** For source scoring, each passage gets its own question, either yes/no (does this passage answer the question) or an ordered scale (irrelevant, partial, direct). Those questions are independent, so they can go in one call; see [batching parallel decisions](https://tryhamster.com/skills/batching-and-parallelizing-decisions). Code then sorts by the returned probability, drops anything below a cutoff and passes the top set to the generator. Sorting, cutoffs and weighting stay in code because arithmetic and counting are a [poor fit for a decision model](https://firecrawl.dev/blog/what-is-jev).

**Next-step control is a choice with state-linked triggers.** Each option describes the evidence that should select it, so a route can be traced back to a field in the state. When the loop takes a step, the result goes back into state and the next decision reads the updated world.

The case for a decision model over an LLM judge at these forks is consistency and cost. The [awesome-jev list](https://github.com/yibie/awesome-jev) summarises a LangChain comparison of Jev against LLM judges on accuracy, repeatability, latency and cost, which concluded Jev is the cheaper and more consistent judge for online evals. Repeatability matters for routing in particular: the same state should reach the same worker every time, or debugging a misroute becomes guesswork.

What the decision returns is a proposal. Code decides whether the probability clears the threshold, whether the chosen tool's arguments are valid, and what happens on low confidence. Threshold values should come from observed accuracy, covered in [calibrating confidence thresholds](https://tryhamster.com/skills/calibrating-confidence-thresholds-and-escalation-paths).

## Step-by-Step Guide

### Step 1: Inventory the forks

Walk one full agent run and mark every point where the loop picks among known options: a worker, a tool, a model, a source, or what to do next. For each fork, write down how it is decided today, whether by prompt, keyword rule or hard-coded order. Note how often it fires per run, because frequent forks give the fastest payoff. Drop forks that are really exact rules, such as a permission lookup, since code should keep those.

> **Pro tip:** If you cannot name the options for a fork in a short list, it is probably a generation task, not a routing decision.

### Step 2: Build the candidate set in code

For each fork, write the function that produces this turn's candidates from live data: available workers, tools the current user may call, models within budget. Give every candidate a stable identifier and a one-line description of when it applies. Rebuild the list each turn so the decision never sees an option that has gone offline or been revoked. Keep the list short enough that each option is clearly distinct from the others.

> **Pro tip:** Add an explicit escalate or none option to every candidate list so the model is never forced to pick a bad fit.

### Step 3: Describe the state each route reads

Decide which state fields the routing question needs: the request, the goal, what has been done, relevant evidence and what is missing. Leave out fields the decision should not depend on, since noise in state produces noise in routes. Pass the same snapshot to every question asked at that fork so answers are consistent with each other. If a route depends on a fact the state does not contain, add the fact rather than hoping the model infers it.

### Step 4: Write the choice or score question

For worker, tool, model and next-step forks, write a single choice question whose answer space is the candidate list. For source ranking, write one yes/no or ordered-scale question applied to each candidate passage. Attach to every option the criteria that should select it, phrased in terms of state fields. Version the question text so you can tell which wording produced which route later.

> **Pro tip:** Borrow the pattern of triggers per option, such as unread evidence leading to inspecting the error, so each route has an observable reason.

### Step 5: Map answers to actions and fallbacks

Write the code that turns each label into an action: dispatch to the worker, call the tool through its validation gate, send the request to the chosen model. Set a probability the top option must reach before code acts, starting conservative. Define what happens below it, such as a default route, a stronger model or a human queue. Also define what happens when the call fails or returns something malformed, so the loop never stalls on a routing error.

> **Pro tip:** Treat the threshold as a starting value, for example 0.9 for an irreversible tool and lower for a read-only lookup, then revise it from logged outcomes.

### Step 6: Rank sources with per-candidate scores

Send the score questions for all retrieved passages together and collect a probability per passage. Sort in code, apply a cutoff and pass the top set to the generator. Record which passages were kept and dropped with their scores. When the generator's answer is wrong, check whether the right passage was dropped before blaming the generator.

> **Pro tip:** Keep weighting and tie-breaking in code, for example preferring newer sources on equal scores, rather than asking the model to do arithmetic.

### Step 7: Review misroutes and revise

Log every route with the state, candidates, probabilities, chosen action and outcome. Review the cases where the task failed or a human overrode the route. Decide whether the fix is a missing candidate, a vague option description, a missing state field or a threshold that is too low. Change one of those at a time and replay the same logged cases to confirm the change helped.

> **Pro tip:** Group misroutes by the option that was wrongly chosen; a single option attracting many errors usually has a description that overlaps its neighbours.

## Best Practices

- Filter candidates by permission and availability before the decision call. The model then only chooses among options that can actually run, and a confident pick can never select something the user is not allowed to do.
- Keep candidate descriptions mutually exclusive. Overlapping descriptions split probability between options and make low-confidence routes look like model weakness when the real problem is the option list.
- Give every fork an escalation or none option. Forcing a choice among bad fits produces confident wrong routes, while an explicit escape lets low-fit cases reach a human or stronger model.
- Route to generators, do not generate. Model routing should decide which model writes the answer, keeping the expensive model for requests that need it and the decision call cheap and repeatable.
- Send specialist jobs to specialist tools. A practitioner overview reports [specialist tools still lead on PII spans, images and payment fraud](https://kanerika.com/blogs/jev-ai-use-cases), so the router's job for those is to hand off, not to decide the content itself.
- Keep sorting, weights and cutoffs in code. Decision models are a [poor fit for arithmetic and counting](https://firecrawl.dev/blog/what-is-jev), and code-side ranking logic is easier to test and change.
- Prefer a consistent judge for high-volume forks. A LangChain comparison summarised on [awesome-jev](https://github.com/yibie/awesome-jev) found Jev the cheaper and more consistent judge for online evals, and repeatable routes make misroutes traceable.

## Common Mistakes

- **Letting the model pick the next tool and invoking it directly.** — The route is a proposal. Pass the chosen tool and its arguments through application-level permission and validation checks before execution, as covered in [enforcing deterministic execution boundaries](https://tryhamster.com/skills/enforcing-deterministic-execution-boundaries).
- **Using a static candidate list that includes offline workers or revoked tools.** — Rebuild candidates in code every turn from live data. A stale list lets the model choose options that fail at execution and wastes a loop iteration.
- **Asking one question to rank all sources at once.** — Score each passage with its own yes/no or ordered question and sort in code. Per-candidate scores are independent, can be batched, and show exactly why a passage was dropped.
- **Treating a high probability as a correct route.** — Typed answers cannot fall outside the option list, but the pick can still be wrong. Check logged outcomes against probability before trusting a threshold, and keep a fallback path.
- **Routing every task through the decision model, including image checks or PII extraction.** — Use the router to recognise these cases and hand them to specialist tools, which a [use-case overview](https://kanerika.com/blogs/jev-ai-use-cases) reports still lead on those jobs.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/jev-engineering/METHOD.md) — Jev Engineering

## Related Skills

- [Benchmarking and Observing Agent Loops](../benchmarking-and-observing-agent-loops/SKILL.md)
- [Formulating Atomic Decision Questions](../formulating-atomic-decision-questions/SKILL.md)
- [Separating Generation from Decision-Making](../separating-generation-from-decision-making/SKILL.md)
- [Batching and Parallelizing Decisions](../batching-and-parallelizing-decisions/SKILL.md)
- [Enforcing Deterministic Execution Boundaries](../enforcing-deterministic-execution-boundaries/SKILL.md)
- [Calibrating Confidence Thresholds and Escalation Paths](../calibrating-confidence-thresholds-and-escalation-paths/SKILL.md)
- [Structuring Shared Agent State](../structuring-shared-agent-state/SKILL.md)

## Sources

- [What is Jev Engineering?](https://madewithjev.com/what-is-jev-engineering)
- [How to use Jev: first call in 5 minutes](https://madewithjev.com/how-to-use-jev)
- [GitHub - yibie/awesome-jev: A curated list of public projects, integrations, and discussions built on Jev — TypeSafe AI's System One model for typed decisions.](https://github.com/yibie/awesome-jev)
- [What Is Jev? Inside TypeSafe's Decision-Only AI Model](https://firecrawl.dev/blog/what-is-jev)
- [Top Jev AI Use Cases and How it Compares With Other](https://kanerika.com/blogs/jev-ai-use-cases)
- [wuyoscar/jev-skill: An awesome collection of Jev use cases ... - GitHub](https://github.com/wuyoscar/jev-skill)
- [awesome-jev/README.md at main · yibie/awesome-jev](https://github.com/yibie/awesome-jev/blob/main/README.md)
