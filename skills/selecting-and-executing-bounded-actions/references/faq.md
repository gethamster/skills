# FAQ: Selecting and Executing Bounded Actions

## What is bounded action selection in agent systems?

It is the practice of letting a model choose only from a closed, typed list of actions your code already knows how to execute. The model returns a choice and a confidence, and deterministic code decides whether that choice may run, needs confirmation, or goes to a person. This keeps the model's judgment separate from the system's permissions.

## How should I pick confidence thresholds?

Set them per action tier based on the cost of a wrong action, then tune against logged outcomes. The [TypeSafe confidence-routing pattern](https://docs.typesafe.ai/patterns/confidence-routing) uses 0.6 as the point below which any action routes to a human, and treats that as sufficient for a low-stakes balance check. Riskier actions usually deserve a higher gate or a mandatory confirmation step.

## Why include a no-match option if it sends more work to humans?

Without it, cases that fit nothing are forced into some option, and those wrong picks run automatically if their confidence clears the gate. A no-match route converts silent errors into visible handoffs. The volume of no-match cases is also useful data for deciding which actions to add to the catalog.

## Should the action choice and other judgments be one question?

Keep them separate. Ask the action choice as one Choice question and ask related judgments, such as urgency or policy eligibility, as independent questions against the same state. Your code then combines the answers, which makes each judgment easier to audit and each threshold easier to tune.

## What happens after the action executes?

The executor records what it attempted and what returned, then observes the environment again for fresh evidence. That evidence goes to verification, which compares it with the action's expected outcome. Recovery from a failed check and loop termination are separate skills in the same loop.
