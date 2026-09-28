# FAQ: Managing Context Window Token Budgets in Claude

## What actually uses up Claude Code's context window?

Your instructions, the files Claude reads, its own responses, and content that never shows in your terminal all count, according to the [context window documentation](https://code.claude.com/docs/en/context-window). Command output counts too. Persistent files such as CLAUDE.md are loaded at the start and paid for on every turn. Large file reads and unfiltered logs are usually the biggest single costs.

## Should I use /compact or /clear?

Use /compact with a focus when you are still on the same task and need to keep the plan and decisions. Use /clear when the next task is unrelated, as the [best practices](https://code.claude.com/docs/en/best-practices) recommend. Compaction keeps a summary, so it suits continuity. Clearing gives a fully clean window, so it suits a fresh start.

## At what fill level does Claude's performance start to drop?

A practitioner comparison reports decline starting around [50% fill, about 100,000 tokens, and dramatic degradation around 75%, about 150,000 tokens](https://augmentcode.com/tools/google-antigravity-vs-claude-code). These are developer observations rather than benchmark results. Anthropic's own guidance says only that performance degrades as the window fills. Watch for symptoms such as forgotten constraints and adjust your thresholds to your own experience.

## What does automatic compaction keep?

The [best practices](https://code.claude.com/docs/en/best-practices) say automatic compaction preserves important code and decisions while freeing space. You do not control exactly what it judges important. That is why a manual compaction with an explicit focus is safer before a critical step. Treat the automatic version as a backstop.

## How do I choose an /autocompact threshold?

The [documentation's example is /autocompact 500k](https://code.claude.com/docs/en/context-window), but the right value depends on your window size and how your sessions behave. Pick a point below the fill level where you have noticed quality slipping. Revisit it after a few long sessions and lower it if you still see degradation before compaction fires.
