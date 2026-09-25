# FAQ: Preventing Context Poisoning, Distraction, and Clashes

## What is the difference between context poisoning and context clash?

Poisoning is a single error that enters the context and keeps getting referenced. Clash is two pieces of information that contradict each other, often an old rule and a new one. Poisoning usually lives in conversation history and a reset removes it. Clash often lives in persistent files or tools, so it returns after a reset until you consolidate the rules.

## Why does the same problem come back after I run /clear?

Clearing removes the conversation but not the files and tools that load into every session. If CLAUDE.md, a skill, a command or an MCP server holds the wrong fact or an outdated rule, it reappears as soon as it is loaded again. Search those sources for the offending statement and fix it there. Disabling external feeds one at a time helps isolate which one is responsible.

## Should I put every rule in CLAUDE.md to avoid clashes?

No. CLAUDE.md should hold the single current version of project conventions and gotchas, but it should stay lightweight. Detailed, task-specific material belongs in files or skills that load only when needed. Overloading the single source of truth trades clash for distraction.

## How do I tell distraction from confusion?

Sources frame them slightly differently, so use both tests. Distraction shows up as the model fixating on the long context and dropping basics it should know, or relevant content being drowned out by irrelevant content. Confusion shows up as irrelevant material being pulled into the answer or the wrong scope being applied. Either way, the fix is to reduce and scope what enters the context.

## Is content from MCP servers and web search safe to trust?

Treat it as external content from sources you do not control. It can be accurate, but it can also be outdated or wrong, and it lands in the same context as your instructions. Verify what it returns before acting on it, and keep it out of your project rules unless someone has reviewed it.
