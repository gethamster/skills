---
name: "representing-current-agent-state"
description: "Build the state an agent is judged against, shape it as text or structured data, and persist it outside the model so progress survives every run."
category: "Workflows"
metadata:
  homepage: https://tryhamster.com
  method: "state-questions-action-verify-loop"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Skill: representing agent state in AI workflows

> Build the state an agent is judged against, shape it as text or structured data, and persist it outside the model so progress survives every run.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 1-3 hours to design a state schema and persistence for one loop |
| Outcome | A state schema and persistence routine that every question, action and verification step reads from and writes back to. |
| Prerequisites | A defined goal or success criteria for the loop, A list of the decisions the agent must make, Access to a durable store such as a file, database or issue tracker |
| Part of | [State–Questions–Action–Verify Loop](../../methods/state-questions-action-verify-loop/METHOD.md) |

## Overview

Representing current agent state means assembling the content that a model or agent is evaluated against, then keeping it somewhere durable. In the [State-Questions-Action-Verify Loop](https://tryhamster.com/methods/state-questions-action-verify-loop), state is the first input. Questions, actions and verification all read from it. TypeSafe's documentation defines state as [the content you ask a System One model to evaluate](https://docs.typesafe.ai/concepts/state), such as a support message, a passage of text, or the current state of your application. It also notes that each request evaluates one state against one or more questions. Whatever is missing from state is invisible to every judgment made about it.

The skill has two halves. The first is representation: deciding what goes into state and in what shape. The second is persistence: making sure state survives beyond a single model call or session. A loop-engineering reference frames the persistence half as a single design question, ["What survives the next run?"](https://huggingface.co/datasets/cy0307/awesome-loop-engineering/blob/refs%2Fpr%2F3/README.md), and lists progress files, database checkpoints, traces and issue comments as the usual artifacts.

The persistence half matters because of what happens without it. The same reference identifies a failure pattern in which state lives only inside the model. When that happens, [progress and evidence disappear between runs](https://huggingface.co/datasets/cy0307/awesome-loop-engineering/blob/refs%2Fpr%2F3/README.md). The verifier has nothing stable to check against, and retries repeat work that already failed. You can tell state is under-represented when a fresh run asks questions it already answered, or when a reviewer cannot reconstruct why an action was taken.

The artifacts below are the common homes for durable state, drawn from the [loop-engineering reference's state artifacts](https://huggingface.co/datasets/cy0307/awesome-loop-engineering/blob/refs%2Fpr%2F3/README.md):

| Artifact | What it preserves | Best fit |
|---|---|---|
| Progress file | Goal, completed steps, remaining work | Single-repo or single-task loops |
| Database checkpoint | Structured fields at a known point | Many concurrent cases or records |
| Trace | Ordered actions, inputs and results | Auditing and trace-graded verification |
| Issue comment | Human-readable status and evidence | Loops that hand off to people |

The skill produces two outputs. The first is a working state payload, built fresh for each decision and sent alongside the questions. The second is a durable record that is updated after every verification step, so the next iteration or run starts from recorded facts rather than from the model's memory.

## How It Works

State works as a contract between the parts of the loop. The model does not remember prior runs, so the state you pass is the entire basis for its judgment. TypeSafe's API reference describes the `state` field as [required and accepting a string, object or array](https://docs.typesafe.ai/api). You would use a plain string for text, and structured data for things like chat logs and records. That choice matters. Prose suits a single message or document. Objects suit anything with fields your code already tracks, such as order status, retry count or the last verifier result.

The TypeSafe Python SDK adds a constraint worth copying even outside that tool. State [cannot be `None`, but values inside an object may be `None`](https://docs.typesafe.ai/sdk/python/api/types/questions). In practice, this means you always send a container, and you mark unknown fields explicitly rather than dropping them. An absent key and a known-empty key mean different things to a model judging the state.

For loop work, a practitioner guide on loop engineering describes what the termination decision needs. It calls for [accumulated state covering the goal, current progress, recorded actions, verification evidence, remaining work, and failure or retry history](https://changyou.medium.com/loop-engineering-turning-goal-and-loop-into-verifiable-ai-agent-workflows-0062fb44de92). A useful schema groups those into three parts:

- **Target:** the goal and success criteria, which rarely change within a run.
- **Situation:** the domain facts the next decision depends on.
- **History:** actions taken, their results, verifier verdicts and retries.

For domain facts, TypeSafe's System One page gives a concrete composition. For a refund request, the application [builds a state containing the customer's message, the relevant transactions, and the refund policy](https://docs.typesafe.ai/concepts/system-one), then asks independent questions against it. The rule of thumb is to include what a careful human reviewer would need to open before deciding, and nothing else.

State changes on a fixed rhythm. The generic agent loop runs [observe, reason, choose action, act, observe result, update state, verify, then continue or terminate](https://aakashx.com/blog/agent-architecture-loops-planning-verification). The update happens after a fresh observation of the result, not from the agent's intent. The loop-engineering reference then splits on the verdict. If verification fails, [feed the failure evidence back into state and retry](https://huggingface.co/datasets/cy0307/awesome-loop-engineering/blob/refs%2Fpr%2F3/README.md). If it passes, persist the updated state and decide what happens next. Either way, the durable record is written before the next decision, so a crash between steps loses at most one action.

Keep two layers distinct. The working payload is a projection built for one decision and trimmed to what that decision needs. The durable record is the full history. Build the payload from the record at each step, rather than growing one ever-longer prompt.

## Step-by-Step Guide

### Step 1: Name the decisions state must support

List every question the loop will ask and every action it may take. For each one, write down which facts a reviewer would need in order to judge it. This list becomes the requirement for your state, and anything outside it is a candidate for removal. Without it, state tends to grow into a dump of everything available.

> **Pro tip:** Write each decision as a sentence ending in a question mark. Facts that no question refers to probably do not belong in the payload.

### Step 2: Inventory target, situation and history

Sort the required facts into three groups. The target holds the goal and criteria, the situation holds domain facts, and the history holds actions, results, verdicts and retries. Note where each fact comes from: a user message, a database row, a tool output or a previous verifier run. Facts that you cannot source reliably should be flagged now, not discovered mid-run.

### Step 3: Choose text or structured shape

Use plain text when the source is a single message or document and the judgment is about its content. Use an object or array when the facts already exist as fields, records or a chat log. Structured state lets code update individual fields after each step without rewriting prose. Mixed cases usually work best as an object with a text field for the message and typed fields for everything else.

> **Pro tip:** If you catch yourself writing sentences like 'retry count is 2' inside prose, switch to an object.

### Step 4: Mark unknowns explicitly

Always send a state container, and set unknown fields to null or an explicit 'unknown' value rather than omitting them. Omission hides the gap from the model and from reviewers. An explicit null tells a verifier that the fact was checked and not found. This also keeps the schema stable across runs, which makes diffs between snapshots readable.

### Step 5: Pick a durable artifact

Choose where state lives between runs. You can use a progress file for single-task loops, a database checkpoint for many concurrent cases, a trace when auditing matters, or an issue comment when people need to follow along. Some loops use two, such as a checkpoint for machines plus an issue comment for humans. The artifact must be readable by the next run without the current model context.

> **Pro tip:** Test the choice by killing a run midway and starting a new one from the artifact alone. If it cannot resume, the artifact is missing something.

### Step 6: Write back after every verification

After each action, observe the result, update state from that observation, and run verification. On failure, append the failure evidence to history before retrying. On success, persist the updated state before choosing the next action. Never let two actions happen between writes.

> **Pro tip:** Store the verifier's evidence itself, such as a test output or a diff summary, not just a pass or fail flag.

### Step 7: Rebuild the payload at each step

At the start of each decision, load the durable record and project the fields that decision needs into a fresh payload. Do not carry forward the previous prompt and append to it. Projection keeps payloads short and consistent, and it makes each decision reproducible from the record. If a decision cannot be reproduced from stored state, add the missing field to the schema.

## Best Practices

- Treat the durable record as the source of truth and the model's context as disposable. Loops that trust in-context memory lose progress whenever a session ends or a context window truncates.
- Record observed results, not intended actions. An entry reading 'sent refund' is a claim, while 'payment API returned status settled' is evidence a verifier can check.
- Keep target, situation and history in separate fields. Goals rarely change, so separating them stops accidental rewrites and makes it obvious when the target has drifted.
- Store retry counts and failure causes as first-class fields. Termination and escalation rules need them, and burying them in prose forces the model to infer them.
- Version the state schema. When you add or rename a field, old checkpoints should still load, or you will silently lose history on the next run.
- Keep the working payload lean. Every irrelevant field is something a model can latch onto, so project only what the current decision needs.
- Make at least one artifact human-readable. Reviewers need to reconstruct why an action happened without replaying the whole run.

## Common Mistakes

- **Keeping state only inside the model's conversation context.** — Persist state to a file, checkpoint, trace or issue comment after every verification. Otherwise progress and evidence vanish between runs, and retries repeat failed work.
- **Updating state from what the agent says it did.** — Update from a fresh observation of the environment after the action. The agent's report of success is not the same as the system actually being in the new state.
- **Dropping unknown fields instead of marking them.** — Send explicit nulls or 'unknown' values. A missing key hides the gap, while a marked one tells the model and the verifier that the fact is absent.
- **Appending everything to one ever-growing prompt.** — Rebuild a trimmed payload from the durable record for each decision. Long accumulated prompts bury the relevant facts and make decisions hard to reproduce.
- **Recording pass or fail without the evidence behind it.** — Store the test output, diff summary or verifier answer alongside the verdict. Without it, nobody can review whether thresholds and later decisions were sound.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/state-questions-action-verify-loop/METHOD.md) — State–Questions–Action–Verify Loop

## Related Skills

- [Recovering from Verification Failures](../recovering-from-verification-failures/SKILL.md)
- [Checking Post-Action Results](../checking-post-action-results/SKILL.md)
- [Defining Verifiable Success Criteria](../defining-verifiable-success-criteria/SKILL.md)
- [Applying Loop Termination and Continuation Rules](../applying-loop-termination-and-continuation-rules/SKILL.md)
- [Formulating Typed Decision Questions](../formulating-typed-decision-questions/SKILL.md)
- [Selecting and Executing Bounded Actions](../selecting-and-executing-bounded-actions/SKILL.md)

## Sources

- [Questions - TypeSafe AI](https://docs.typesafe.ai/sdk/python/api/types/questions)
- [API reference - TypeSafe AI](https://docs.typesafe.ai/api)
- [System One - TypeSafe AI](https://docs.typesafe.ai/concepts/system-one)
- [State - TypeSafe AI](https://docs.typesafe.ai/concepts/state)
- [Agent Architecture: Loops, Planning, Verification, Termination](https://aakashx.com/blog/agent-architecture-loops-planning-verification)
- [Turning /goal and /loop into Verifiable AI Agent Workflows \| by](https://changyou.medium.com/loop-engineering-turning-goal-and-loop-into-verifiable-ai-agent-workflows-0062fb44de92)
- [README.md · cy0307/awesome-loop-engineering at refs/pr/3](https://huggingface.co/datasets/cy0307/awesome-loop-engineering/blob/refs%2Fpr%2F3/README.md)
