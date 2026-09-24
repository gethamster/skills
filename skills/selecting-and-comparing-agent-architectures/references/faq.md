# FAQ: Selecting and Comparing AI Agent Architectures

## Which Semantic Kernel agent type should I try first?

Try the smallest built-in type that matches your service dependency. If your model runs through Semantic Kernel AI services, that is usually ChatCompletionAgent, which the documentation positions as the general-purpose option for a persona using a kernel and its functions. If you rely on the Assistants API, start with OpenAIAssistantAgent instead.

## Why did my ChatCompletionAgent ignore its tools?

The most likely cause is that function calling was not enabled. ChatCompletionAgent requires explicit function-calling configuration, whereas OpenAIAssistantAgent always calls functions automatically. Enable it in the execution settings and rerun a task that can only be solved with a tool call to confirm.

## What goes into an agent architecture decision record?

Include the selected agent type, the model service it depends on, the tools or hosted capabilities it needs, the state model, and why each competing type was rejected. Link the test traces that support each point. Also note any configuration the choice depends on, such as enabled function calling, since that is where regressions tend to appear.

## How many tasks do I need for a fair side-by-side test?

There is no framework rule, so size the set to your requirements. A practical approach is at least one task per constraint in your profile, plus repeats of branching tasks so a single lucky run does not decide the result. What matters more than count is that both agents get identical tasks, tools, instructions and starting state.

## When is building a custom agent justified?

Build custom only when every built-in type fails a written requirement in testing. Record the specific failures and scope the custom agent to close just those gaps on the common Agent abstraction. Then rerun the same tasks to prove it passes where the built-ins failed.
