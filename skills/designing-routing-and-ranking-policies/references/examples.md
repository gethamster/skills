# Examples: Designing Routing and Ranking Policies

## Routing support tickets to specialist agents

**Scenario:**

Illustrative scenario: a support team runs four specialist agents (billing, account access, bug triage, refunds) and currently routes with keyword rules that misfile a noticeable share of tickets.

**Walkthrough:**

The builder writes a choice question whose options are the four agents plus human review, each with criteria tied to state fields such as mentions of a charge or a failed login. Code builds the list each turn, dropping refunds when the refund agent is paused. The ticket text, customer plan and prior contacts go into the state snapshot. Code dispatches only when the top option reaches, for example, 0.85, otherwise the ticket goes to a human queue.

After a week of logs, most human-queue tickets turn out to be billing disputes that mention refunds, so the builder rewrites the two option descriptions to separate them. Replaying the logged tickets confirms fewer of them fall below the threshold.

## Ranking retrieved passages for a research answer

**Scenario:**

Illustrative scenario: a research agent retrieves 40 passages per question and passes all of them to the generator, which produces long answers that cite irrelevant material.

**Walkthrough:**

The builder adds an ordered score question per passage: irrelevant, partial or direct answer to the user's question. All 40 questions go in one call against the same state snapshot. Code sorts passages by the probability of direct, keeps the top eight and drops anything where direct falls below a set cutoff. Kept and dropped passages are logged with their scores.

When a later answer misses a key fact, the log shows the relevant passage was scored partial because it answered a sub-question, so the builder adds the sub-questions to the state.

## Next-step control in a coding agent

**Scenario:**

Illustrative scenario: a coding agent keeps retrying the same failing fix and burns its budget before asking for help.

**Walkthrough:**

The builder replaces the free-form what next prompt with a choice among inspecting the error, changing hypothesis, verifying the fix and escalating. Each option has a trigger: unread error output, the same approach failing twice, a newly passing test, or no matching evidence. After every tool run, code writes the result into state before the next decision. The agent now switches hypothesis after repeated failures instead of looping.

Escalation cases land in a review queue with the full state attached, so the engineer sees why the agent stopped.
