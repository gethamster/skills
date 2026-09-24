# FAQ: Implementing Agent Planning Strategies for Complex Tasks

## Are the Stepwise and Handlebars planners still available in Semantic Kernel?

No. Microsoft's [planning guide](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning) states that both have been deprecated and removed from the Semantic Kernel packages. Code that uses them will not work with current packages. Automatic function calling is the documented replacement.

## How is automatic function calling different from the old planners?

The old planners used prompts to ask the model which functions to invoke, while automatic function calling uses the model's native function-calling capability, according to the [planning documentation](https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning). You no longer receive a separate plan object to inspect before execution. Instead, the model chooses functions round by round and Semantic Kernel runs them until a final answer is produced. Your control shifts from planner configuration to function design and persona instructions.

## Can I see the plan before the agent executes it?

Not as a single upfront artifact in the automatic function-calling loop, because the model decides step by step as results come back. You can still inspect the sequence by logging every function call, its arguments and its result. If you need approval before certain actions, put those actions behind functions that pause for review, which is covered on the human-in-the-loop skill page.

## Why does my agent call the wrong function or skip one?

Usually the function descriptions are ambiguous, the function set is too large, or a required input is optional so nothing forces the correct order. The model plans from the combined request, plugins and persona, as Microsoft's [architecture post](https://devblogs.microsoft.com/agent-framework/architecting-ai-apps-with-semantic-kernel) describes, so improving those inputs is the fix. Tighten descriptions, make dependencies explicit through required parameters, and remove irrelevant functions from the kernel for that request.

## Can the agent discover new tools on its own while planning?

Not by default. A [2025 framework survey](https://arxiv.org/html/2508.10146v1) reports that Semantic Kernel supports dynamic composition, but that discovery and publishing mechanisms require external implementation or integration. In practice, your application decides which plugins to register on the kernel for each call, and the model plans only within that set.
