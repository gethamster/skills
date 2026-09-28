# FAQ: Checking Post-Action Results

## What counts as fresh evidence after an agent action?

Fresh evidence is a read taken from the changed system after the action completes. Examples are a database query result, a diff, a build log, a rendered page or a screenshot. Anything the agent carried in its context from before the action, or its own summary of what it did, does not count.

## Can I use an LLM as the verifier?

Yes, when no static check can decide the outcome, but narrow the question. Ask about one field or one fact against a supplied source rather than asking whether the whole result is good. Treat the model's answer as a signal with its own error rate and route uncertain cases to escalation or human review.

## How is this different from defining success criteria?

Success criteria describe what done means for the whole task, usually before the loop starts. Post-action checking applies at each consequential step, comparing that step's expected outcome with what actually changed. Good success criteria make writing per-action expectations much easier, but they do not replace them.

## What should happen when a check cannot run?

Record a could-not-verify verdict rather than a pass or a fail. This keeps broken or missing checks visible instead of hiding them as agent errors or false successes. Decide ahead of time whether such cases pause the loop, retry the check, or go to a person.

## Does every action need verification?

Every consequential action does, meaning anything that changes external systems, data or other people's work. Read-only steps like fetching context usually need no separate check because their output feeds the next decision directly. When unsure, ask whether a silent failure would cause a wrong later action; if so, verify it.
