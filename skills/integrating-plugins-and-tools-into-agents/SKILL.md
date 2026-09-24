---
name: "integrating-plugins-and-tools-into-agents"
description: "Expose native code, prompt templates, OpenAPI services and MCP tools as Semantic Kernel plugins an agent can discover and call."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "semantic-kernel-agent-framework"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# Integrating Plugins for AI Agents Automation

> Expose native code, prompt templates, OpenAPI services and MCP tools as Semantic Kernel plugins an agent can discover and call.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for a first set of plugins |
| Outcome | An agent whose tools are deliberately scoped, correctly configured plugins registered on a single reusable kernel. |
| Prerequisites | A working Semantic Kernel agent with an AI service configured, Comfort reading C# or Python code, Access credentials for any external API you plan to expose, Basic understanding of how function calling lets a model choose tools |
| Part of | [Semantic Kernel Agent Framework](../../methods/semantic-kernel-agent-framework/METHOD.md) |

## Overview

Plugins are how an agent stops talking and starts acting. In Semantic Kernel, a plugin is a named group of functions the model can see and call, and a [technical deep dive on SK plugins](https://devblogs.microsoft.com/agent-framework/guest-blog-orchestrating-ai-agents-with-semantic-kernel-plugins-a-technical-deep-dive) describes the plugin system as the framework's main mechanism for managing the complexity of agent orchestration. This page covers the wiring: turning code, prompts, remote APIs and MCP servers into callable tools, attaching them to a kernel or an agent, configuring the external services they depend on, and registering the kernel once so every request reuses it. For the framework's background and how it compares with alternatives, see the [Semantic Kernel Agent Framework method page](https://tryhamster.com/methods/semantic-kernel-agent-framework).

The [Semantic Kernel repository](https://github.com/microsoft/semantic-kernel) describes its plugin ecosystem as supporting native code functions, prompt templates, OpenAPI specifications and the Model Context Protocol (MCP). Every source ends in the same place, a plugin sitting on a kernel, but each needs different inputs to get there.

| Plugin source | What it needs before an agent can call it |
|---|---|
| Native code | KernelFunction attribute, a plugin class or KernelPluginFactory, a kernel |
| Prompt template | Template text, clear function description, a kernel with an AI service |
| OpenAPI specification | The spec plus endpoint and service parameters set in app configuration |
| MCP server | A reachable MCP server and a version of the SDK that supports it |

The native-code row follows Microsoft's [migration guide from Semantic Kernel](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel), which lists four requirements for exposing a function as a tool: decorate it with the KernelFunction attribute, put it in a Plugin class or wrap it with KernelPluginFactory, add the plugin to a Kernel, and pass that Kernel to the agent. The OpenAPI row reflects Microsoft's [plugin walkthrough](https://devblogs.microsoft.com/agent-framework/how-to-use-plugins-with-semantic-kernel), where the GitHub sample needed AIService and GitHub plugin parameters in appsettings.json before it would work.

The practical output of this skill is an agent whose tool list you chose on purpose: every function has a name and description the model can reason about, every external dependency is configured, and plugin registration happens once at startup rather than on every call. You will know it went wrong when the agent answers from its own guesses instead of calling a tool that exists, when a remote plugin fails with missing configuration, or when latency climbs because the kernel is rebuilt per request.

## How It Works

A Semantic Kernel agent does not call your code directly. It calls whatever the kernel exposes. According to Microsoft's [Agents SDK integration guide](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/using-semantic-kernel-agent-framework), the Kernel object references the AI services you configure, manages and publishes plugins, and provides context to the functions it runs. That makes the kernel the single source of truth for what an agent can do: if a function is not on the kernel the agent receives, the model never sees it.

The path from code to callable tool has four links, as the [migration guide](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel) sets out. The KernelFunction attribute marks a method as something the model may call and carries the description the model reads when deciding. The plugin class, or KernelPluginFactory for functions that live elsewhere, groups related functions under one name. Adding the plugin to a Kernel publishes those functions. Passing the Kernel to the agent makes them available during the conversation. Break any link and the tool silently disappears from the model's options.

Timing is flexible. The [agent functions documentation](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions) states that plugins can be added to the Kernel either before or after the Agent is created, and that you can also pass a list of plugins directly to the agent's constructor. Use constructor injection when a plugin belongs to one agent only; add to the shared kernel when several agents should see the same tools.

Registration is necessary but not sufficient for the model to act. Microsoft's [planning guidance](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) describes automatic function calling as three moves: register the plugin with the kernel, create execution settings that tell the model to call functions automatically, and invoke the chat completion service with the chat history and the kernel. The decision logic behind that loop belongs to the planning skill; for plugin work, the point is that a plugin the kernel does not hold at invocation time cannot be chosen.

Non-native sources add a configuration layer. The [Semantic Kernel repository](https://github.com/microsoft/semantic-kernel) lists prompt templates, OpenAPI specifications and MCP alongside native functions. Prompt plugins depend on the kernel's AI service being set up. OpenAPI plugins depend on the remote service being addressable and authenticated: in Microsoft's [GitHub plugin example](https://devblogs.microsoft.com/agent-framework/how-to-use-plugins-with-semantic-kernel), the setup lived in appsettings.json, and the AIService and GitHub plugin parameters had to be updated before the plugin could be used. MCP plugins depend on a running MCP server your application can reach.

Finally, lifetime. Because the kernel holds services and plugins, constructing it is not free. The [Agents SDK guide](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/using-semantic-kernel-agent-framework) registers the kernel with the application builder so the app does not reinstantiate the kernel and its plugins for every request. Build once at startup, inject everywhere.

## Step-by-Step Guide

### Step 1: Inventory the operations the agent needs

List every action the agent must perform that the model cannot do alone: reading a database, calling an API, formatting a report, searching files. For each, note whether it already exists as code, as a remote API with a specification, as an MCP server, or only as a prompt. That source decides which plugin type you will build. Group operations that share data or credentials, because each group will become one plugin.

Leave out anything the agent should never trigger on its own.

> **Pro tip:** Name plugins after the domain, such as Orders or Inventory, and functions after verbs, such as GetOrderStatus, so the model can match intent to tool.

### Step 2: Decorate native functions with KernelFunction

Write each native operation as a method with typed parameters and a return value the model can read. Add the KernelFunction attribute and a description that says what the function does, what each parameter means, and when it should be used. Place related methods in one plugin class, or use KernelPluginFactory to wrap functions that live in existing classes, following the [migration guide](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel). Keep inputs and outputs structured so the model does not have to parse free text.

Test each function directly before any model is involved.

> **Pro tip:** Write the description as if briefing a new colleague: purpose, inputs, and one sentence on when not to call it.

### Step 3: Wrap prompts, OpenAPI specs and MCP servers

For behavior best expressed in language, create a prompt template plugin and give it a description just as precise as a native function's. For a remote REST service, import its OpenAPI specification as a plugin. For tools already served over MCP, connect the MCP server as a plugin source, since the [Semantic Kernel repository](https://github.com/microsoft/semantic-kernel) lists MCP among supported plugin types. Check your installed SDK version for the exact import call, because these APIs have changed over time.

### Step 4: Configure external service settings

Before an OpenAPI or MCP plugin can run, the application must know where the service lives and how to authenticate. Put endpoints, keys and service parameters in application configuration, as Microsoft's [GitHub plugin example](https://devblogs.microsoft.com/agent-framework/how-to-use-plugins-with-semantic-kernel) does with appsettings.json. Keep secrets out of source code and out of function descriptions. Run one direct call against each remote service at startup so misconfiguration fails loudly instead of mid-conversation.

> **Pro tip:** Fail application startup if a required plugin setting is missing; a clear boot error is cheaper than an agent that silently skips a tool.

### Step 5: Register plugins on the kernel or the agent

Decide which plugins are shared and which are private to one agent. Add shared plugins to the kernel; pass agent-specific ones in the agent constructor. The [agent functions documentation](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions) confirms both approaches and allows adding plugins before or after the agent is created. Whichever you choose, make sure the kernel the agent holds at invocation time contains every plugin you expect it to call.

> **Pro tip:** Log the list of registered function names at startup so you can compare what the agent should see with what it actually sees.

### Step 6: Register one reusable kernel

Build the kernel, its AI services and its plugins once, and register it with your application builder. The [Agents SDK guide](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/using-semantic-kernel-agent-framework) uses this pattern so the app avoids reinstantiating the kernel and plugins on every request. Inject the kernel into agents and request handlers instead of constructing new ones. Keep per-request data in chat history or arguments, not in the kernel itself.

### Step 7: Verify tool calls end to end

Send the agent requests that should trigger each plugin and confirm from logs that the function actually ran, with the arguments you expected. Enable automatic function calling in execution settings and invoke with the kernel, per the [planning guidance](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning). Then send requests that should not trigger a tool and confirm nothing ran. Fix vague descriptions first when the model picks the wrong function, since description quality usually explains misrouting.

> **Pro tip:** Keep a small regression set of prompts, each paired with the function it should call, and rerun it whenever you add or rename a plugin.

## Best Practices

- Treat each function description as part of the interface. The model chooses tools by reading those descriptions, so a precise one reduces wrong calls more reliably than prompt tweaks elsewhere.
- Scope plugins narrowly and expose only what the agent needs. Every extra function is another option the model can misuse, and a smaller tool list makes misrouting easier to diagnose.
- Keep inputs and outputs structured. The kernel provides execution context to functions, as the [Agents SDK guide](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/using-semantic-kernel-agent-framework) notes, and typed records let downstream functions and the model consume results without guessing at free text.
- Build and register the kernel once at startup. Rebuilding services and plugins per request wastes time and hides configuration errors until traffic arrives.
- Separate configuration from code for every remote plugin. Microsoft's [GitHub plugin example](https://devblogs.microsoft.com/agent-framework/how-to-use-plugins-with-semantic-kernel) keeps service parameters in appsettings.json, which lets you change endpoints and keys per environment without touching plugin logic.
- Choose the registration point on purpose. The [agent functions documentation](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions) allows kernel-level or constructor-level plugins, so reserve the shared kernel for tools every agent should see and pass private tools to individual agents.
- Pin and check SDK versions before copying samples. Plugin import APIs for OpenAPI and MCP have evolved, so confirm the calls against the version you actually installed.

## Common Mistakes

- **Writing a useful method but forgetting the KernelFunction attribute or the plugin wrapper, then wondering why the agent never calls it.** — Walk the four links from the [migration guide](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel): attribute, plugin class or KernelPluginFactory, add to Kernel, pass Kernel to agent. Log registered function names to confirm each link held.
- **Registering a plugin on one kernel instance while the agent is invoked with a different one.** — Automatic function calling needs the plugin registered and the kernel supplied at invocation, per the [planning guidance](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning). Inject a single registered kernel so there is only one instance to reason about.
- **Importing an OpenAPI plugin without setting its endpoint and service parameters.** — Configure the remote service before use, as the [GitHub plugin walkthrough](https://devblogs.microsoft.com/agent-framework/how-to-use-plugins-with-semantic-kernel) does in appsettings.json. Add a startup check that calls the service once so missing settings surface immediately.
- **Constructing a new kernel and re-adding every plugin on each request.** — Register a reusable kernel with the application builder, following the [Agents SDK guide](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/using-semantic-kernel-agent-framework). Per-request state belongs in chat history or arguments, not in a freshly built kernel.
- **Giving functions vague names and one-word descriptions such as Process or Helper.** — Name functions with verbs and domain nouns and describe purpose, parameters and when not to call them. Vague descriptions are the most common reason a model picks the wrong tool or none at all.

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
- [Adding Memory and Context Management to AI Agents](../adding-memory-and-context-to-agents/SKILL.md)
- [Implementing Agent Planning Strategies for Complex Tasks](../implementing-agent-planning-strategies/SKILL.md)

## Sources

- [Guest Blog: Orchestrating AI Agents with Semantic Kernel Plugins](https://devblogs.microsoft.com/agent-framework/guest-blog-orchestrating-ai-agents-with-semantic-kernel-plugins-a-technical-deep-dive)
- [Microsoft Semantic Kernel - GitHub](https://github.com/microsoft/semantic-kernel)
- [Semantic Kernel to Microsoft Agent Framework Migration Guide](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel)
- [Use Semantic Kernel and Agent Framework in Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/using-semantic-kernel-agent-framework)
- [Limitations For Agent](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-functions)
- [How to use plugins with Semantic Kernel \| Microsoft Agent Framework](https://devblogs.microsoft.com/agent-framework/how-to-use-plugins-with-semantic-kernel)
- [What are Planners in Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning)
