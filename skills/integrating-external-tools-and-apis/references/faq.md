# FAQ: Integrating External Tools and APIs into LangChain

## What is the simplest way to create a custom tool in LangChain?

In Python, decorate a function with @tool, which LangChain's tools guide presents as the simplest custom-tool pattern. Give the function typed parameters and a clear description of when to use it. Test the plain function first, then pass the decorated tool to your agent. Only reach for more elaborate tool definitions when you need behavior the decorator does not cover.

## How detailed should a tool description be?

Detailed enough that the model can choose correctly from the description alone. Cover what the tool does, when to use it, when not to use it and what it returns, including units and formats. Most misrouted tool calls trace back to short or overlapping descriptions. If two tools are similar, spell out the condition that separates them in both.

## Should errors be raised or returned to the model?

It depends on whether the model can fix the problem. Invalid arguments, timeouts and rate limits are usually worth returning as a short, actionable message so the agent can correct itself or retry. Authentication failures and forbidden actions should stop the run or escalate, since retrying will not help. LangChain configures this policy in middleware, so decide it once rather than per tool.

## How many tools can one agent handle?

There is no fixed limit in the dossier, and the practical ceiling depends on how distinct your tools are. Every tool adds a description the model has to weigh, so overlapping tools degrade selection faster than a large set of clearly different ones. If selection gets unreliable, tighten descriptions first, then consider grouping related tools behind a specialized subagent.

## Can I call external services that are not REST APIs?

Yes. A tool is just a function, so it can wrap a database query, a local calculation, a code runner or a third-party model call. The same rules apply: typed inputs, a clear description, a compact return value and defined failure behavior. What matters to the agent is the contract, not the transport underneath it.
