---
name: "implementing-agent-planning-strategies"
description: "Plan multi-step agent work in Semantic Kernel by replacing deprecated planners with an automatic function-calling loop over registered plugins."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "semantic-kernel-agent-framework"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# How AI Agents Work: Implementing Agent Planning

> Plan multi-step agent work in Semantic Kernel by replacing deprecated planners with an automatic function-calling loop over registered plugins.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours to migrate and verify one agent |
| Outcome | An agent that decomposes a user goal into a traceable sequence of registered function calls and returns a verified final response, with no dependency on removed planners. |
| Prerequisites | A working Semantic Kernel agent with a configured chat-completion service, At least two plugins with functions the agent should combine, A model deployment that supports native function calling, Logging that can capture function invocations and their arguments |
| Part of | [Semantic Kernel Agent Framework](../../methods/semantic-kernel-agent-framework/METHOD.md) |

## Overview

Planning is the part of an agent that turns one goal into a sequence of actions. In Semantic Kernel, [Microsoft's planning documentation](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) describes planning as coordinating multiple registered plugins so an agent can combine functions to satisfy a user's goal. For background on the framework, its history and how it compares with alternatives, see the [Semantic Kernel Agent Framework method page](https://tryhamster.com/methods/semantic-kernel-agent-framework). This page is about doing the planning work.

There have been two generations of planning in Semantic Kernel. The [planning guide](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) explains that earlier planners used prompts to ask the model which functions to invoke, while newer implementations use the model's native function-calling capability. The same guide states that the Stepwise and Handlebars planners have been deprecated and removed from the Semantic Kernel packages. If your code still references them, it will not build against a current package, and migration is the first task.

| Approach | Mechanism | Status | When used |
|---|---|---|---|
| Stepwise planner | Prompt asks the model which functions to call ([source](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)) | Deprecated and removed ([source](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)) | Legacy code only |
| Handlebars planner | Prompt-generated plan template ([source](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)) | Deprecated and removed ([source](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)) | Legacy code only |
| Automatic function calling | Model's native function calling picks functions ([source](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)) | Current documented approach ([source](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)) | New and migrated agents |

The practical consequence is that you no longer write or tune a planner. You shape the inputs the model plans from. Microsoft's [architecture post](https://devblogs.microsoft.com/agent-framework/architecting-ai-apps-with-semantic-kernel) describes Semantic Kernel sending a single prompt that combines the user request, the plugins and the persona to the model so it can plan the best way to achieve the goal. Every one of those three ingredients is something you control: how clearly the goal is stated, how the functions are split and described, and what the persona instructs.

You also own the tool catalog. A [2025 survey of agentic frameworks](https://arxiv.org/html/2508.10146v1) notes that Semantic Kernel supports dynamic composition via planners, but that discovery and publishing mechanisms require external implementation or integration. The model can only decompose a goal into functions you have registered on the kernel for that call, so planning quality starts with deciding which functions exist and which are in scope.

This skill covers four things: removing deprecated planner code, decomposing a goal into well-scoped functions, running the automatic function-calling loop with the right inputs, and verifying both the final answer and the chain of calls that produced it.

## How It Works

Automatic function calling is a loop between your application, Semantic Kernel and the model. Per [Microsoft's planning guide](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning), setting it up takes three moves: register the plugin with the kernel, create an execution settings object that tells the AI to call functions automatically, and invoke the chat-completion service with the chat history and the kernel.

**Inputs.** A planning call has four inputs. The user goal is the latest message. The conversation history carries prior turns and earlier function results. The kernel holds the registered plugins, which define the menu of possible actions. The execution settings switch on automatic invocation. If any one is missing, the loop degrades: without the kernel the model has no functions to choose, and without the settings it may describe a plan instead of executing one.

**The loop.** The [planning documentation](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) describes the sequence: the model receives the available function definitions and decides which functions are needed, Semantic Kernel invokes the selected functions, and the interaction continues until the model produces the result. In practice each round looks like this. The model returns one or more function-call requests with arguments. Semantic Kernel executes them against your plugin code. The results are added to the history. The model is called again with the enlarged history and decides whether to call more functions or answer.

**Where decomposition happens.** Goal decomposition is performed by the model, not by a separate plan object you can inspect up front. The model breaks the goal into steps based on the combined prompt that, as Microsoft's [architecture post](https://devblogs.microsoft.com/agent-framework/architecting-ai-apps-with-semantic-kernel) puts it, merges the user request, the plugins and the persona. Your levers are therefore indirect but strong. Function names and descriptions tell the model what each step does. Parameter names and types tell it what data each step needs, which implicitly encodes ordering: a function that requires a customer ID will be called after the function that returns one. The persona can state constraints such as which functions to prefer or which checks must run before an answer.

**Output.** The output of the loop is the model's final response after the necessary functions have been selected and executed. The intermediate function calls are a by-product, but they are your audit trail. A correct-looking answer produced without calling the lookup function it depended on is a hallucination, not a plan.

**What the loop does not do.** It does not discover tools on its own. For example, the [2025 framework survey](https://arxiv.org/html/2508.10146v1) points out that discovery and publishing need external implementation, so if you want an agent to plan across a large or changing tool set, you must decide in application code which plugins go on the kernel for a given request. It also does not validate business rules inside your functions. If a function accepts bad arguments silently, the model will build on the bad result.

**How to tell it is working.** A healthy loop shows function calls whose order matches data dependencies, arguments that trace back to the user goal or to earlier results, and a final answer that cites or reflects those results. Warning signs are repeated calls to the same function with the same arguments, calls to functions irrelevant to the goal, and final answers that contain values no function returned.

## Step-by-Step Guide

### Step 1: Inventory legacy planner code

Search the codebase for references to the Stepwise and Handlebars planners and any code that builds or executes their plan objects. The [planning guide](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) states these planners were deprecated and removed from the Semantic Kernel packages, so they block upgrades. For each usage, record the goal it served, the plugins it could use, and any custom prompt text that steered it. That custom prompt text is valuable: it usually contains constraints you will move into the persona or function descriptions.

The output of this step is a migration list, one row per planner usage.

> **Pro tip:** Keep a copy of a few real goals each legacy planner handled, with their expected outcomes. They become your regression tests in the verification step.

### Step 2: Decompose the goal into functions

Write down the goal the agent must satisfy, then list the distinct operations needed to reach it, such as fetch, transform, check and write. Each operation should become one function with a single responsibility and clearly typed inputs and outputs. Make data dependencies explicit through parameters, so a function that needs an order ID takes an order ID rather than a free-text query. Avoid one large function that does everything, because the model cannot recover from a failure halfway through it.

Also avoid splitting so finely that the model must make many trivial calls to get anything done.

> **Pro tip:** A useful test: if you cannot describe what a function returns in one sentence, it is doing too much for the model to plan around.

### Step 3: Write function descriptions for the planner

Give every function a name and description that state what it does, when to use it, and what it returns. The model decides which functions to call from these definitions, as the [planning documentation](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) describes, so vague descriptions produce vague plans. Describe parameters with their expected format and units. Where two functions look similar, say explicitly how they differ and when to prefer each one.

Move any ordering rules from your old planner prompt into these descriptions or the persona.

> **Pro tip:** Read only the function list, as the model will, and try to plan the goal yourself. If you hesitate between two functions, rewrite their descriptions.

### Step 4: Register plugins and enable automatic calling

Add the plugins holding your functions to the kernel that the agent will use. Then create execution settings that turn on automatic function invocation, following the three-part setup in [Microsoft's planning guide](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning). Register only the plugins relevant to the goal, since every registered function is a candidate the model must consider. If your application serves several goal types, decide in code which plugin set to load per request, because the [framework survey](https://arxiv.org/html/2508.10146v1) notes that tool discovery requires external implementation.

### Step 5: Assemble the planning input and invoke

Build the call from four parts: the user goal as the latest message, the conversation history, the kernel with its registered plugins, and the execution settings. Microsoft's [architecture post](https://devblogs.microsoft.com/agent-framework/architecting-ai-apps-with-semantic-kernel) describes the request, plugins and persona being combined into one prompt so the model can plan, so check that the persona is present and states the constraints you migrated. Invoke the chat-completion service with the history and kernel. Let the loop run to completion rather than intercepting after the first function call.

> **Pro tip:** Set an explicit cap on how many function-call rounds your application will allow per request, for example 10, so a looping plan fails fast instead of consuming budget.

### Step 6: Trace calls and verify the output

Log every function invocation with its name, arguments and result, in order. Compare the call sequence against the decomposition you wrote in the second step: the order should respect data dependencies and every call should be relevant to the goal. Then check the final response against the function results, looking for any value that no function produced. Run the saved goals from your legacy inventory and confirm the new loop reaches the same or better outcomes.

> **Pro tip:** Store traces alongside the final answers. When a plan goes wrong in production, the trace shows whether the fault was a missing function, a misleading description or bad function output.

### Step 7: Tune the decomposition

Use the traces to adjust the function set. If the model repeatedly calls two functions together, consider whether they should be one. If it skips a required check, strengthen the persona or make the check's output a required input for the next function. If it calls an irrelevant function, tighten that function's description or remove it from the kernel for this goal.

Change one thing at a time and rerun the same goals so you can attribute improvements.

## Best Practices

- Target automatic function calling for all new planning work. The [planning guide](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) documents it as the current approach and the older planners are removed, so any new planner-style code is technical debt on day one.
- Encode ordering through parameters rather than prose. When a function requires an input only another function can produce, the model has a structural reason to call them in order, which is more reliable than a sentence in the persona asking it to.
- Keep the per-request tool set small and relevant. Every registered function competes for the model's attention, and because [discovery must be implemented externally](https://arxiv.org/html/2508.10146v1), scoping the kernel per goal is your job and your best lever on plan quality.
- Treat the persona as part of the planner. Microsoft's [architecture post](https://devblogs.microsoft.com/agent-framework/architecting-ai-apps-with-semantic-kernel) shows the persona is sent in the same prompt as the request and plugins, so state required checks and forbidden actions there instead of hoping the model infers them.
- Return structured, compact function results. The results are appended to history and re-read on every round, so large unstructured payloads make later planning decisions slower and less accurate.
- Evaluate the call trace, not only the answer. A right answer reached by skipping a required lookup will fail on the next input, and only the trace reveals it.

## Common Mistakes

- **Upgrading Semantic Kernel packages while code still depends on the Stepwise or Handlebars planner.** — Migrate first. The [planning guide](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) states these planners were removed from the packages, so replace them with automatic function calling before or alongside the upgrade.
- **Registering plugins but not enabling automatic invocation in execution settings, then wondering why the agent only describes what it would do.** — Automatic function calling is one of three required setup moves in the [documented flow](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning). Create the execution settings that enable it and pass them on every invocation.
- **Expecting the agent to find tools that were never registered on the kernel for the current call.** — The model only sees the functions on the kernel you pass. As the [framework survey](https://arxiv.org/html/2508.10146v1) notes, discovery needs external implementation, so add routing code that loads the right plugins for each goal.
- **Writing one monolithic function that performs the whole task, which leaves the model nothing to plan.** — Split the work into single-responsibility functions with typed inputs and outputs. The model can then retry or reroute around a failed step instead of losing the whole task.
- **Leaving legacy planner prompt instructions behind during migration, so constraints the old planner enforced silently disappear.** — Extract constraints from old planner prompts and move them into the persona or function descriptions, which [Semantic Kernel combines with the request](https://devblogs.microsoft.com/agent-framework/architecting-ai-apps-with-semantic-kernel) when the model plans.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/semantic-kernel-agent-framework/METHOD.md) — Semantic Kernel Agent Framework

## Related Skills

- [Designing Human-in-the-Loop Agent Workflows](../designing-human-in-the-loop-agent-workflows/SKILL.md)
- [Deploying AI Agents for SEO and Keyword Research Automation](../deploying-ai-agents-for-seo-automation/SKILL.md)
- [Selecting and Comparing AI Agent Architectures](../selecting-and-comparing-agent-architectures/SKILL.md)
- [Building Autonomous AI Agents with Semantic Kernel](../building-autonomous-ai-agents-with-semantic-kernel/SKILL.md)
- [Orchestrating Multi-Agent Conversations and Collaboration](../orchestrating-multi-agent-conversations/SKILL.md)
- [Integrating Plugins and Tools into Semantic Kernel Agents](../integrating-plugins-and-tools-into-agents/SKILL.md)
- [Adding Memory and Context Management to AI Agents](../adding-memory-and-context-to-agents/SKILL.md)

## Sources

- [Agentic AI Frameworks: Architectures, Protocols, and](https://arxiv.org/html/2508.10146v1)
- [What are Planners in Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)
- [Architecting AI Apps with Semantic Kernel \| Microsoft Agent](https://devblogs.microsoft.com/agent-framework/architecting-ai-apps-with-semantic-kernel)
