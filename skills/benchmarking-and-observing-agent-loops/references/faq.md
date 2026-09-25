# FAQ: Benchmarking and Observing Agent Loops

## Why not just measure decision accuracy on a labeled dataset?

Decision accuracy tells you whether the answer matched a label, not whether the agent finished its task at acceptable cost and latency. A decision can be labeled correct and still route work to a slower tool or add approvals. Keep per-decision accuracy as a diagnostic, but judge changes by run-level outcomes.

## How long should shadow mode run?

Long enough to collect a meaningful number of disagreements between the candidate and production, and to observe their eventual outcomes such as rework or escalation. For a frequent decision that may be days, for a rare one it may be weeks. Stop when the probability bands you plan to automate have enough cases to show stable accuracy.

## What should trigger a fallback during benchmarking?

The tutorial this skill draws on names request failure, malformed output and insufficient savings as triggers. Include cases that force each one in your evaluation set. Track fallback rate by trigger type, because a rising rate can hide a regression while goal rate stays flat.

## How do I keep evaluations comparable over months?

Pin and log the model version, question version, criteria and threshold for every run, and freeze the evaluation set under a version identifier. When you add new failure cases, publish a new set version and re-run baselines on it. Never edit a set that past results refer to.

## Do I need a separate observability tool for this?

Not necessarily. What matters is that each decision produces a structured record with the fields needed for replay and that run-level metrics can be computed from those records. Any logging and analytics setup that preserves versions, executed actions and verification results will do.
