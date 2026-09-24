# FAQ: Reviewing and Synthesizing Teammate Outputs

## Should the lead or a teammate do the integration?

The lead, in most cases. Integration requires decisions that span multiple teammates' areas, and the lead is the only session holding the cross-module picture and the authority to choose between conflicting approaches. Teammates are best used for scoped rework the lead assigns once it knows what needs to change.

## How do I handle a conflict where both teammates' approaches are reasonable?

Pick one and apply it everywhere, based on which fits existing code, contracts or downstream consumers best. Write down the reason in the synthesis note so future rounds follow the same convention. Leaving both in place avoids a decision now but creates inconsistency that someone has to untangle later.

## What if teammate outputs pass all tests but I still suspect problems?

Read the combined diff for things tests do not catch: duplicated logic, abandoned code paths, inconsistent naming and edits outside a teammate's assigned files. For higher-risk changes, ask a reviewer role that implemented nothing to inspect it. If you find a gap, add a test that captures it before accepting, so the suspicion becomes a check.

## When should I send work back instead of fixing it myself?

Fix it directly when the change is small and touches the seam between modules, since you already have the context. Send it back when the fix is substantial and sits entirely inside one teammate's owned area. Either way, write rework as a scoped task with the failing check as its success criterion so it converges in one round.

## How do I know the synthesis is finished?

Every task has an explicit final state of accepted, reworked and accepted, or discarded, and the shared task list reflects that. The full set of cross-module checks passes on the combined change. The synthesis note records the conflicts, contract changes and deferred items, so the next decomposition can learn from where boundaries broke.
