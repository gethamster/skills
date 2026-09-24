---
name: "designing-human-in-the-loop-agent-workflows"
description: "Place human review and approval points in AI agent workflows so tool actions stay scoped, auditable and escalated to a person when needed."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "semantic-kernel-agent-framework"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# Human-in-the-Loop AI Agent Workflows: Approval Design

> Place human review and approval points in AI agent workflows so tool actions stay scoped, auditable and escalated to a person when needed.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to design the policy for one agent, plus testing time |
| Outcome | An approval policy, an audit log design and escalation rules that let people control consequential agent actions without reviewing every step. |
| Prerequisites | A working single agent with at least one registered plugin or tool, Understanding of how your agent type handles function calling, Access to a durable log or data store for audit records, Agreement with the business owner on which actions carry real risk |
| Part of | [Semantic Kernel Agent Framework](../../methods/semantic-kernel-agent-framework/METHOD.md) |

## Overview

This skill is about deciding where a person must review, approve or take over before an AI agent's tool action takes effect, and making every tool call traceable afterwards. For background on the framework itself, see the [Semantic Kernel Agent Framework method page](https://tryhamster.com/methods/semantic-kernel-agent-framework). This page focuses on the design work.

The reason approval needs deliberate design is the way agents act. With automatic function calling, [the model receives the available function definitions and decides which are needed, and Semantic Kernel invokes the selected functions and continues until the model produces a result](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning). The moment a function executes is the moment a human loses the chance to stop it, unless you have put a checkpoint there. Agent type matters too: [function calling must be explicitly enabled for a ChatCompletionAgent, whereas an OpenAIAssistant agent always uses automatic function calling](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions). An approval design that assumes the agent will pause and ask can silently fail on an agent type that never pauses.

Practitioner reports suggest this is where teams struggle. One production-focused review notes that [community-reported issues cluster around sequential context handling and function-approval scoping in early orchestration designs](https://intuz.com/blog/top-5-ai-agent-frameworks-2025). Another comparison singles out one framework for handling [branching, checkpointing and mid-run human approval better than any other open-source option](https://kanerika.com/blogs/ai-agent-frameworks), which tells you mid-run approval is treated as a differentiator between tools, not a default you can count on. Whatever framework you use, plan the approval layer yourself.

The work produces four artifacts. An action inventory lists every function the agent can reach, tiered by consequence. An approval policy states which calls need sign-off, who gives it and what they see. An audit log records each tool execution with arguments, results and the human decision. Escalation rules define when the agent stops and hands the task to a person.

You can tell the design is working when reviewers approve a small number of meaningful requests rather than rubber-stamping a stream of trivial ones, when every irreversible action in the log has a named approver, and when a reconstructed incident can be traced from user request to tool call to outcome without guesswork.

## How It Works

An agent run is a loop. A request arrives, the model proposes one or more function calls with arguments, the runtime executes them, results go back to the model, and the loop repeats until the model writes a final response. Human control can be inserted at three points in that loop, and each catches a different kind of problem.

The first point is before invocation. The proposed function name and arguments are shown to a person who approves, edits or rejects them. This is the only checkpoint that prevents an action, so it belongs on anything irreversible or costly: sending messages, spending money, deleting or publishing content, changing permissions.

The second point is after invocation but before the result is used. A person reviews what the tool returned before the agent builds on it. This suits read operations whose output drives later decisions, such as a data pull that will feed a pricing change.

The third point is the final response. A person reviews the answer before it reaches the end user. It is the cheapest checkpoint to add and the weakest, because by then every tool call has already happened. Treating it as the only control is a common failure, since [the framework treats agent functions and function-calling configuration as part of the agent's behavior](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions), not just the text it returns.

Beyond checkpoints, you have a structural lever: which tools the agent can see at all. [Plugins can be added to the kernel before or after the agent is created, or passed directly to the agent constructor](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions). That means you can give a drafting agent only read and draft functions, and keep the publish function on a separate, approval-gated path. An agent cannot call a function that was never registered with it, which is a stronger guarantee than any prompt instruction.

Execution settings are the second lever. In the quick-start pattern, [automatic function calling is turned on through execution settings](https://learn.microsoft.com/en-us/semantic-kernel/get-started/quick-start-guide) rather than being active by default, so you can run a sensitive agent with automatic calling off and route each proposed call through review. Check which behavior your agent type actually has before relying on either setting.

Auditing runs alongside all of this. Every tool execution, approved or not, produces a record: the originating request, the function, the arguments, the result or error, whether approval was required, who decided and when. The log is what lets you prove control after the fact and tune the policy over time.

Escalation is the exit from the loop. Instead of approving a single call, the agent stops and hands the whole task to a person, carrying enough context that the human does not start from scratch. Escalation triggers are rules you write, such as a policy boundary, repeated tool failures or contradictory results.

Because [the agent framework was described as experimental when first introduced](https://devblogs.microsoft.com/agent-framework/introducing-agents-in-semantic-kernel), confirm the package version and API status you are using before building approval hooks on top of it.

## Step-by-Step Guide

### Step 1: Inventory the agent's reachable actions

List every function registered on the kernel or passed to the agent, including functions pulled in from imported plugins. For each, record what it reads, what it changes and which external systems it touches. Include functions you consider harmless, because the inventory is also the basis of the audit log. Mark which functions can be called automatically under the agent's current function-calling configuration.

The output is a table that becomes the backbone of every later decision.

> **Pro tip:** Generate the list from the running configuration rather than from design documents, since imported plugins often expose more functions than anyone remembers adding.

### Step 2: Tier each function by consequence

Assign each function a risk tier based on reversibility, cost and who is affected. A simple scheme works, for example read-only, reversible write and irreversible or external. Irreversible actions and anything that reaches customers, money or permissions go in the top tier. Reads that feed high-stakes decisions may deserve a middle tier even though they change nothing.

Agree the tiers with the business owner, because risk tolerance is their call, not the developer's.

> **Pro tip:** If you cannot say how to undo an action within a few minutes, treat it as irreversible.

### Step 3: Scope approvals to function and arguments

Write the approval rule for each tier at the level of a specific function and, where useful, specific argument values. Approving a whole run or a whole plugin is too coarse, since it lets later calls ride on an earlier decision. Argument-level rules let low-risk variants pass automatically, for example a refund below a limit you set, while larger ones wait for a person. State who may approve each rule and what happens on rejection.

Keep the rule list short enough that a reviewer can explain it from memory.

> **Pro tip:** Express each rule as function, condition, approver and fallback so it can be implemented and audited the same way.

### Step 4: Place checkpoints in the agent loop

Map each rule to a point in the loop: before invocation, after invocation, or at the final response. Put irreversible actions before invocation, since that is the only point that prevents them. Remove top-tier functions from agents that should never call them, and expose them only on a gated path. For agent types that always call functions automatically, confirm your checkpoint actually intercepts the call rather than assuming the agent will pause.

> **Pro tip:** Draw the loop once with each checkpoint marked and walk a real request through it with the team before writing code.

### Step 5: Design the approval request

Decide what the reviewer sees: the original user request, the proposed function, its arguments in readable form, the agent's stated reason and the likely effect. Give the reviewer three choices where possible: approve, edit arguments, or reject with a reason that goes back to the agent. Set a timeout and a default outcome for unanswered requests, and make the safe default a rejection for top-tier actions. A request that lacks context produces either blind approval or blanket rejection.

> **Pro tip:** Show the concrete effect in plain language, such as the recipient and amount, rather than raw JSON alone.

### Step 6: Log every tool execution

Write an audit record for every function call, not only the approved ones. Capture the run identifier, originating request, function, arguments, result or error, whether approval was required, the approver, the decision and timestamps. Store records somewhere durable and separate from the agent's own conversation state so they survive restarts and cannot be edited by the agent. Review the log weekly at first to find rules that fire too often or never.

### Step 7: Define escalation rules

List the conditions under which the agent stops and hands the whole task to a person. Typical triggers include a request outside the agent's declared scope, repeated failures of the same tool, contradictory tool results and a reviewer rejecting the same kind of call more than once. Specify who receives the escalation and what context travels with it: the request, the tool calls made so far and their results. The agent's final message should tell the user a person is taking over.

> **Pro tip:** Route escalations to a named queue with an owner, not a shared inbox, or they will sit unanswered.

### Step 8: Test the gates against hostile inputs

Before release, run requests designed to push the agent toward gated actions: ambiguous instructions, prompts that ask it to skip approval, and chains that reach a top-tier function indirectly. Check the audit log for each test to confirm the checkpoint fired and the record is complete. Compare the agent's final text with its actual tool calls, since a polite answer can hide an ungated action. Repeat the tests whenever plugins or function-calling settings change.

> **Pro tip:** Keep these tests in the regression suite so a new plugin cannot quietly bypass an existing gate.

## Best Practices

- Remove dangerous functions from agents that do not need them. Controlling which plugins are registered with an agent is a harder boundary than any instruction in the prompt, because an agent cannot call a function it cannot see.
- Scope approval to a single call, never to a whole run. Run-level approval lets later, riskier calls inherit consent the reviewer never gave, which is exactly the scoping problem practitioners report in orchestration designs.
- Check the function-calling behavior of each agent type before designing checkpoints. Agents that always call functions automatically need an interception point, while agents with explicit enablement give you a simpler switch.
- Keep the approval queue small and meaningful. If reviewers see a stream of trivial requests they start approving without reading, so push low-risk calls to automatic execution and reserve human attention for consequential ones.
- Make rejections informative. A rejection reason returned to the agent lets it try a safer alternative or escalate, instead of retrying the same call.
- Store audit records outside the agent's conversation state. Separation keeps the log intact across restarts and prevents the agent or its memory handling from altering the record.
- Revisit tiers and rules on a schedule. The audit log shows which rules fire constantly and which never fire, and both are signs the policy no longer matches real risk.

## Common Mistakes

- **Reviewing only the agent's final response.** — By the time the final answer appears, every tool call has already executed. Put checkpoints before irreversible invocations and audit tool execution directly, since the framework treats function behavior as part of the agent.
- **Assuming every agent type will pause before calling a tool.** — Some agent types always use automatic function calling. Confirm the behavior of the agent you deploy and add an explicit interception point where it will not pause on its own.
- **Approving a plugin or run as a whole.** — Coarse approval lets later calls with different arguments pass unchecked. Write rules per function and, where needed, per argument range.
- **Letting unanswered approval requests default to approval.** — A timeout that approves silently turns an absent reviewer into consent. Default top-tier actions to rejection and notify the requester.
- **Logging only approved calls.** — Rejected, failed and automatic calls are what you need when investigating an incident. Record every execution attempt with arguments, outcome and decision.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/semantic-kernel-agent-framework/METHOD.md) — Semantic Kernel Agent Framework

## Related Skills

- [Deploying AI Agents for SEO and Keyword Research Automation](../deploying-ai-agents-for-seo-automation/SKILL.md)
- [Selecting and Comparing AI Agent Architectures](../selecting-and-comparing-agent-architectures/SKILL.md)
- [Building Autonomous AI Agents with Semantic Kernel](../building-autonomous-ai-agents-with-semantic-kernel/SKILL.md)
- [Orchestrating Multi-Agent Conversations and Collaboration](../orchestrating-multi-agent-conversations/SKILL.md)
- [Integrating Plugins and Tools into Semantic Kernel Agents](../integrating-plugins-and-tools-into-agents/SKILL.md)
- [Adding Memory and Context Management to AI Agents](../adding-memory-and-context-to-agents/SKILL.md)
- [Implementing Agent Planning Strategies for Complex Tasks](../implementing-agent-planning-strategies/SKILL.md)

## Sources

- [Introducing enterprise multi-agent support in Semantic Kernel](https://devblogs.microsoft.com/agent-framework/introducing-agents-in-semantic-kernel)
- [Best AI Agent Frameworks: Tested in 100+ Production Deployments](https://intuz.com/blog/top-5-ai-agent-frameworks-2025)
- [AI Agent Frameworks in 2026: The 7 Worth Evaluating - Kanerika](https://kanerika.com/blogs/ai-agent-frameworks)
- [How to quickly start with Semantic Kernel \| Microsoft Learn](https://learn.microsoft.com/en-us/semantic-kernel/get-started/quick-start-guide)
- [Limitations For Agent](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions)
- [What are Planners in Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)
