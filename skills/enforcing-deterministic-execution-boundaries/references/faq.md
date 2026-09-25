# FAQ: Enforcing Deterministic Execution Boundaries

## If the decision model returns calibrated probabilities, why do I still need a permission gate?

Probabilities describe how likely a choice is to be correct, not whether it is allowed. A correct choice can still be forbidden for this user or resource, and a wrong choice can arrive with high confidence. Keeping permissions in code means safety does not depend on model accuracy or calibration. Use confidence to decide routing and escalation, and policy to decide authority.

## Should verification be done by code or by a model?

Use code first wherever the check is exact, such as reading back a record or confirming a file exists. Use a typed verdict for semantic checks that code cannot express, for example whether a tool-call trace matches what the user asked. Keep the verdict constrained to fixed outcomes like supports, contradicts or says nothing so it is checkable. Treat an unverifiable result as a failure rather than a success.

## Where should retries live?

Put retries in the tool runner, not in the agent's reasoning. The runner can apply idempotency keys and backoff consistently, so a retried call does not duplicate a side effect. Record each attempt in the action log so repeated failures are visible. If retries are exhausted, return a structured failure to the loop and let it fall back or escalate.

## How strict should argument schemas be?

As strict as the tool allows. Prefer enumerations over free text, bound numeric fields, and check that referenced IDs exist and belong to the actor. Loose schemas are where injected instructions and wrong-target errors slip through. If you find yourself accepting free text into a side-effecting tool, consider whether the generating model should produce it for a human to review instead.

## What is the minimum I should log for each action?

Log the proposal, the gate decision with its reason, the executed call, the raw result, the verification outcome and any override. Add the model version, question version and threshold used for the decision so runs can be replayed. Keep proposed and executed actions in separate fields. That set lets you reconstruct what the agent wanted, what the boundary allowed and what actually happened.
