# FAQ: Applying Loop Termination and Continuation Rules

## What is the difference between a stall limit and a budget limit?

A budget limit caps resources such as iterations, time or spend, regardless of progress. A stall limit fires when the evidence stops changing, even if budget remains. You want both, because a loop can make slow real progress and exhaust its budget, or spin with no progress well inside it. Treat them as separate rules so the handoff record says which one fired.

## Should the loop stop at the first verification failure?

Usually not, since many failures are what the next iteration is meant to fix. Continue while the failure is within scope, budget remains and the evidence is changing. Stop immediately for failures you have classed as unrecoverable, such as scope violations or a verifier that cannot run. Handling retries themselves is covered in [Recovering from Verification Failures](https://tryhamster.com/skills/recovering-from-verification-failures).

## How do I choose the initial budget numbers?

Start from how long a person takes on the task and what a run is worth, then set a conservative ceiling, for example a few multiples of the iterations you expect. Review stopped runs and see whether they were genuinely stuck or cut off mid-progress. Loosen limits only with that evidence, and version each change so you can compare outcomes.

## Can a model act as the verifier for the done check?

It can when static checks are not possible, but treat it as a weaker signal than tests, builds or diffs. Keep the verifier separate from the acting agent and give it a specific, typed question rather than asking whether the work is finished. For high-stakes exits, pair a model verdict with a human reviewer or an approval gate.

## Where should approval points live, in the prompt or the controller?

In the controller that executes actions. A prompt instruction to ask before sending is a request the model may not follow, while a controller rule that blocks the action type until approval is recorded cannot be skipped. Define the list before execution, as the [loop engineering guide](https://changyou.medium.com/loop-engineering-turning-goal-and-loop-into-verifiable-ai-agent-workflows-0062fb44de92) recommends.
