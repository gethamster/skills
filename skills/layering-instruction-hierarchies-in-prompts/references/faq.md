# FAQ: Layering Instruction Hierarchies in Claude Prompts

## What belongs in CLAUDE.md versus a skill?

CLAUDE.md holds what is true for every task in the project: its purpose, conventions and codebase-specific gotchas. A skill holds what is true for one recurring kind of task, such as a release or a migration. Anthropic's guidance favors a lightweight CLAUDE.md, so when in doubt, place the instruction in a skill. You can always promote it later if it turns out every task needs it.

## Why not just put everything in one detailed system prompt?

Everything in a persistent prompt occupies context on every turn, whether or not the task needs it. Anthropic reported cutting most of Claude Code's own system prompt for newer models without measurable loss on its coding evaluations, which suggests long standing instructions often add cost without adding quality. Layering keeps detail available but loads it only when relevant.

## How specific should a turn-level prompt be?

Specific enough that Claude does not have to guess scope or completion. Name the target file or scenario, state constraints, give testing preferences and paste exact inputs like error messages. Close with the observable condition that means the task is done. Leave out project-wide rules, since the upper layers supply them.

## Where do hooks and MCP servers fit in the hierarchy?

Hooks sit beside the stack as enforcement: they carry rules that must hold every time, so those rules do not depend on the model reading a line of prose. MCP servers supply external data and systems at runtime, which keeps reference material out of written instructions. Plugins package skills, commands and hooks together for reuse across projects. Each has a distinct function, so avoid duplicating the same rule in several of them.

## How do I know my instruction layers are working?

Start a fresh session and give Claude a small task unrelated to your recent work. Everything it draws on should be true and relevant for that task, and nothing essential should be missing after a /clear. Warning signs include Claude applying procedures that should not have loaded, following a retired rule, or needing the same reminder in every prompt.
