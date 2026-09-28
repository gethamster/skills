# FAQ: Integrating Plugins and Tools into Semantic Kernel Agents

## Should I add plugins to the kernel or pass them to the agent constructor?

Both work. The agent functions documentation allows adding plugins to the kernel before or after the agent is created, or passing a list directly to the constructor. Put shared tools on the kernel and agent-specific tools in the constructor. This keeps each agent's tool list as small as its job requires.

## Why does my agent ignore a function I registered?

Check three things in order. Confirm the function carries the KernelFunction attribute and sits in a plugin that was added to the kernel. Confirm the agent is invoked with that same kernel and that automatic function calling is enabled in execution settings. If both hold, rewrite the function description, since the model may simply not recognize when the tool applies.

## What plugin types can a Semantic Kernel agent use?

The Semantic Kernel repository lists native code functions, prompt templates, OpenAPI specifications and the Model Context Protocol. Native functions suit logic you already own in code. OpenAPI and MCP suit external services, and prompt templates suit tasks best expressed in language.

## Where should API keys for OpenAPI plugins live?

Keep them in application configuration or a secret store, never in source code or function descriptions. Microsoft's GitHub plugin sample kept service parameters in appsettings.json and required them to be filled in before the plugin worked. Validate the settings at startup so a missing key stops the app instead of breaking a conversation.

## Is it expensive to build a kernel per request?

It adds avoidable work, because the kernel holds AI services and plugins that must be recreated each time. Microsoft's Agents SDK guidance registers a reusable kernel with the application builder for this reason. Build once, inject everywhere, and keep per-request data in chat history.
