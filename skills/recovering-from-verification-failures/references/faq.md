# FAQ: Recovering from Verification Failures

## How many times should an agent retry a failed action?

Set a fixed number before the loop starts and count attempts in persistent state, for example two or three per step. The right number depends on cost per attempt and how often retries actually fix the failure in your logs. A loop-engineering resource recommends comparing loops against a bounded fixed-retry baseline, which only works if the bound is explicit. Add a stall rule so identical failures stop retries early.

## When should I escalate to a stronger model instead of retrying?

Escalate when retries with failure evidence keep producing the same kind of failure, which suggests the current model cannot solve the case. A cascade that uses a cheap model first and a stronger one only when verification flags a problem keeps average cost down. Always rerun verification on the escalated output. Cap escalations separately from retries.

## What belongs in a human handoff?

Include the goal, the current state, every attempt, the evidence from each failed check and the specific reason the loop stopped. Add what the agent needs from the person, such as an approval or a missing input. The reviewer should be able to act without rerunning anything. Their decision should be written back into state.

## What if the verifier itself is wrong?

Verifier reliability is a real limitation, and research treats verifier design as its own problem. Route uncertain verdicts to a person rather than acting on them, and log verifier outcomes so you can spot false fails and false passes over time. Assign an owner to each verifier so someone is responsible for fixing it. Reviewing human handoffs is a good way to find verifier errors.

## Should the failure evidence go into the prompt or into stored state?

Both, in that order. Write it to persistent state first so it survives crashes and later runs, then load it from state into the next attempt's input. Evidence kept only in the model's context is lost between runs and cannot be audited.
