# FAQ: Evaluating gstack Against Your Current AI Coding Setup

## Is gstack a replacement for Cursor rules or an Aider conventions file?

Not really. Rules and conventions files supply standing guidance about how code should be written. gstack adds a workflow of role-based skills that plan, review, test and ship work. They can run together, so the question is which problems you have and which layer solves them.

## How big should the trial feature be?

Big enough to involve real state, data or a user flow, and small enough to finish in a few days. gstack's own README treats trivial edits such as typo fixes as not needing gstack, so a tiny task will not show what it adds. One representative feature is usually enough for a first decision.

## What should we measure?

Measure what hurts your team: problems caught before merge, problems found after merge, rework after review, time spent answering the agent's questions, and the artifacts left behind. Avoid lines of code as a measure, since AI inflates it. Fix the criteria and weights before the trial starts.

## Can we adopt only part of gstack?

Yes. The skills work individually, so an evaluation can end with adopting specific ones, such as `/review`, `/qa` or `/codex`, and keeping the rest of an existing process. Write down which skills you adopted and where they sit in your workflow.

## How often should we revisit the decision?

Set a date when you decide, typically a few months out. gstack releases frequently and alternatives change too, so a decision based on one version can go stale. Rerun a short trial if your problems or the tools have changed.
