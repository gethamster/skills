# FAQ: Designing Human-in-the-Loop Agent Workflows

## Does every tool call need human approval?

No. Approving everything trains reviewers to click through without reading, which is worse than a smaller, well-chosen set of gates. Tier functions by consequence and require approval only for irreversible, costly or externally visible actions. Let read-only and easily reversed calls run automatically and rely on the audit log for them.

## Where exactly should an approval checkpoint sit?

For actions you need to prevent, the checkpoint must sit before the function is invoked, with the proposed arguments visible to the reviewer. Reviewing tool output before the agent uses it suits reads that feed important decisions. Reviewing the final response is useful for tone and accuracy but cannot undo tool calls that already ran.

## How is approval different for agents that always call functions automatically?

An agent that calls functions automatically will not stop to ask on its own, so you need an interception point between the model's choice and the execution. With agents where function calling must be explicitly enabled, you have the additional option of leaving automatic calling off and routing each proposed call through review. Confirm which behavior your agent has before designing around it.

## What should an audit record contain?

At minimum, record the run identifier, the originating request, the function name, its arguments, the result or error, whether approval was required, who decided and the timestamps. Log automatic, rejected and failed calls as well as approved ones. Store the records separately from the agent's conversation state so they persist and cannot be changed by the agent.

## When should an agent escalate instead of asking for approval?

Approval fits a single, well-defined action. Escalation fits situations where the task itself has gone wrong: the request is outside the agent's scope, a tool keeps failing, results contradict each other or a reviewer keeps rejecting similar calls. In those cases hand the whole task to a named owner with the request and tool history attached.
