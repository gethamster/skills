# FAQ: Designing Multi-Turn Conversation Context Strategies

## How long should a single Claude Code session run?

There is no reliable fixed length, and the dossier offers developer reports rather than benchmarks. A [February 2026 report](https://dev.to/onsen/claude-code-february-updates-what-broke-for-engineers-1dm5) says many users saw degradation after 15-20 tool calls, but that figure comes from developer observations without a controlled sample. A better rule is to end a session when its phase is done or when rot signals appear, whichever comes first.

## Should I compact or clear between phases?

Clear when the next phase needs only a written product, such as moving from exploration to planning once findings are saved. Compact when the next stretch of work depends on nuance that is hard to write down, and give the compaction a focus. Rewind when a recent wrong turn is the problem, since that removes the bad material entirely. [Anthropic recommends /clear](https://code.claude.com/docs/en/best-practices) between unrelated tasks as the default.

## What belongs in CLAUDE.md versus a plan file?

CLAUDE.md holds rules that apply to every session on the project: conventions, commands that must run, and codebase gotchas. A plan file holds the state of one task: steps, statuses, open questions. Keeping them separate stops the persistent layer from filling with details that expire when the task ends. Review both at session end and prune what no longer applies.

## How do I know context rot has set in?

Look for Claude forgetting constraints you stated earlier, proposing approaches you rejected, or reverting files to older states. These match the loss of instructions, file states and decisions described as rot in the [February 2026 report](https://dev.to/onsen/claude-code-february-updates-what-broke-for-engineers-1dm5). If the problem is a specific error being repeated rather than general forgetting, see [preventing context poisoning and clashes](https://tryhamster.com/skills/preventing-context-poisoning-and-clashes).

## Does the explore, plan, code, commit sequence apply outside coding?

The shape transfers to most multi-step agent work: gather information, decide an approach, execute, and record the result. What matters is that each phase produces a durable artifact the next phase can start from. The specific workflow comes from [Anthropic's Claude Code best practices](https://anthropic.com/engineering/claude-code-best-practices?s=09), so adapt the phase names to your domain while keeping the boundaries.
