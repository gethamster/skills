# FAQ: Building Autonomous AI Agents with Semantic Kernel

## Do I need plugins to build an AI agent in Semantic Kernel?

You can create an agent with only a persona and an AI service, but it will only produce text. Plugins give the model functions it can call to look up data or take actions. For a first build, register one small function so you can verify that function calling works end to end. Without at least one function, you cannot tell whether your automatic function calling setup is correct.

## Which programming languages can I use?

Microsoft's own comparison describes Semantic Kernel as supporting C#, Python and Java ([Microsoft's agentic frameworks overview](https://devblogs.microsoft.com/agent-framework/microsofts-agentic-ai-frameworks-autogen-and-semantic-kernel)). The setup order of service, kernel, plugins, settings and chat loop is the same across them. Syntax and class names differ, so follow the docs for your language and version.

## Why does my agent describe an action instead of performing it?

The usual cause is that automatic function calling is not enabled on the invocation. Check that execution settings set the function choice behavior to automatic and that those settings are passed with the kernel. Then confirm the function is registered on that same kernel. Finally, make sure the function description clearly states what it does, since the model chooses tools from those descriptions.

## Should a new project start on Semantic Kernel or Microsoft Agent Framework?

The [Semantic Kernel repository](https://github.com/microsoft/semantic-kernel) now presents Microsoft Agent Framework as the enterprise-ready successor with a 1.0 release. If you are starting fresh, evaluate the successor alongside Semantic Kernel before committing. If you are maintaining an existing Semantic Kernel agent, pin versions and plan any migration as a separate, tested change.

## What does the agent take as input and return as output?

Input is a natural-language message from the user, passed through your chat loop along with the chat history. Output is the model's generated reply plus, when function calling is enabled, the results of any functions it chose to run. Log both parts on each turn so you can evaluate tool behavior as well as the text.
