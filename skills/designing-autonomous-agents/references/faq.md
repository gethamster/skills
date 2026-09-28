# FAQ: Designing Autonomous Agents with LangChain

## What is the difference between the model and the harness?

The model is the LLM that decides what to do next. The harness is everything around it: the prompt, the tools and the middleware that shape its behavior. LangChain's position is that the harness exists to get the model the right context at the right time. In practice, most design work and most fixes happen in the harness.

## Should I write my own agent loop instead of using create_agent?

Usually not. The create_agent loop already handles the respond-or-call-tool cycle and feeds results back into messages. Custom behavior is meant to go into middleware hooks, which can update context or jump between steps. Writing your own loop means rebuilding that machinery and losing the prebuilt middleware.

## How many tools should an agent start with?

Start with the fewest that cover the task, for example three to five for a focused agent. Each extra tool adds a choice the model can get wrong and makes descriptions compete for attention. Add tools when traces show the agent lacks a capability, not in anticipation. If the list keeps growing, consider splitting work across subagents.

## When should I use a subagent instead of another tool?

Use a tool when the operation is a single call with a compact result. Use a subagent when the work takes many steps and produces lots of intermediate output that would clutter the main context. The subagent does the deep work in isolation and hands back a concise result. That keeps the supervisor focused on the user's actual goal.

## Does adding middleware slow the agent down?

Each hook adds some work to the lifecycle, and hooks that make extra model calls add noticeable latency and cost. That is one reason to add middleware only for failures you have observed. Measure a run before and after each addition. If a piece of middleware no longer prevents a real failure, remove it.
