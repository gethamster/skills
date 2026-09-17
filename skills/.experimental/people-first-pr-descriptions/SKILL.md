---
name: people-first-pr-descriptions
description: "Write and update pull-request titles and descriptions for technical work. Use whenever creating, revising, or reviewing a PR body, release-style PR summary, or reviewer-facing change explanation—even if the user only says “open a PR,” “update the PR,” “make this understandable,” or provides technical notes. Put people, user outcomes, and why first; move implementation detail and validation after the plain-language explanation."
---

# People-first pull-request descriptions

Write PR descriptions for readers who need to understand the change before they need to inspect the code: product, support, QA, designers, leadership, and reviewers outside the subsystem.

## Required companion workflow

Before opening a pull request or marking one ready for review, complete [Hamster Pre-PR Review](../hamster-pre-pr-review/SKILL.md). It makes this people-first description mandatory and verifies the branch, diff, blockers, and quality gates.

## Ground the description first

Before writing or updating a PR body:

1. Read the current PR body, diff, review feedback, and validation evidence.
2. Identify the user-visible or operational problem in one plain sentence.
3. Distinguish confirmed behavior from pending validation, limits, and follow-up work.
4. Preserve an existing Hamster brief link/path and any facts that remain accurate.

Do not claim a test, CI run, deployment, live canary, migration, or user outcome unless it was actually observed.

## Default structure

Use this order unless the PR is truly trivial:

```markdown
## What changed
One or two plain-language sentences about the capability or behavior.

## Why it matters
Describe the prior user, customer, operator, or maintainer problem. Use a concrete failure mode when useful.

## How it works
Explain the approach at a conceptual level. Prefer short bullets for steps, guarantees, and safeguards.

## User impact
State what a person can now do, what stays the same, and what they will see when a limit or error occurs.

## Scope, limits, and follow-up
State deliberate exclusions, unsupported providers, preview limits, rollout dependencies, or remaining live validation. Do not bury these caveats.

## Validation
List only executed checks and their outcome.

## Technical details
Optional. Include only details that help a reviewer navigate a non-obvious implementation.

## Brief
Preserve the exact linked brief when one exists.
```

Omit empty sections. For a small bug fix, combine `How it works` and `User impact`; do not force a long template onto a two-line change.

## Writing rules

- Lead with behavior and consequences, not filenames, classes, APIs, or implementation verbs.
- Translate jargon on first use: for example, say “reads every page of Jira results” before “pagination.”
- Explain safeguards as outcomes: “does not report a final count when the read is incomplete,” not only “fails closed.”
- Be specific about the before/after flow when it clarifies the value.
- Put filenames, internal tool names, commits, architecture, schemas, and test mechanics after the people-first explanation.
- Use short paragraphs, ordinary words, active voice, and scannable bullets.
- Do not oversell. Name material limitations plainly.
- Never replace a technical truth with a vague product claim.

## Update workflow

When the user asks to update an existing PR:

1. Preserve correct historical context and the brief.
2. Re-check every validation claim against the current HEAD. Rerun a relevant check when the change could affect it; otherwise label the result as predating the latest commit.
3. Replace stale implementation-first prose with the people-first structure.
4. Keep user-impact claims proportional to what the current branch actually changes.
5. Verify the published body after updating it.

## Quality check

Before publishing, ask:

- Can a non-engineer explain the problem and outcome after reading only `What changed` and `Why it matters`?
- Can a reviewer identify the important safety behavior without reading code?
- Are limits and pending validation explicit?
- Are technical details present only after the human explanation?

If any answer is no, revise the description before publishing.
