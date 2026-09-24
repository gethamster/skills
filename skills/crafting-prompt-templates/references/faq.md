# FAQ: Crafting Reusable Prompt Templates in LangChain

## What is the difference between a prompt template and a prompt?

A prompt is the final text sent to the model. A template is the reusable source that produces it, with fixed instructions and named variables that are filled at run time. Templates let you change inputs without touching instructions, which is what makes prompts testable and shareable across chains.

## How many variables should a keyword extraction template have?

As few as your use cases require. A typical setup has one per-call variable for the source text and a handful of configuration variables such as keyword count, domain definition and examples. If you find yourself adding a variable for every wording tweak, the instructions probably need rewriting rather than parameterizing.

## Why does my template fail with a missing variable error?

Every braced name in the template string is treated as a required variable, including braces you meant literally, such as a JSON example. Either supply a value for each detected variable or escape the literal braces. Checking the detected variables right after building the template catches this before any model call.

## Do I need a scratchpad variable for simple keyword extraction?

No. The scratchpad exists for agents that loop through reasoning and tool calls, where the runtime needs somewhere to write intermediate steps. A single-call extraction chain only needs the source text and configuration variables. Add the scratchpad only when extraction becomes part of an agent's loop.

## Is the ReAct prompt pattern still relevant in LangChain 1.0?

The 1.0 line shifts emphasis toward the agent loop and middleware. The underlying template skills still apply: named variables, a fixed body and a clear place for the runtime to insert intermediate steps. Check the current agent documentation for how prompts are wired in new projects.
