# FAQ: Writing Effective System Prompts for Claude AI

## What is the difference between a system prompt and CLAUDE.md?

In Claude Code, CLAUDE.md is the part of the persistent instructions you control, loaded at the start of each session alongside the tool's own system prompt. Your turn-level prompt then describes the specific task. Treat CLAUDE.md as project-wide rules and the turn prompt as task-specific inputs and done criteria. Mixing the two, for example putting today's task details in CLAUDE.md, is a common source of stale or conflicting instructions.

## How long should a Claude prompt be?

Long enough to carry the real inputs and the output contract, and no longer. A prompt with an attached file, a pasted error, one scope line and a clear completion condition is often short. Length becomes a problem when it comes from repeated generic advice rather than task material. If you find yourself restating the same rules every time, move them to CLAUDE.md.

## What should go in CLAUDE.md?

Anthropic's guidance points to project purpose, conventions and codebase-specific gotchas, kept lightweight. Good candidates are the test and typecheck commands, naming conventions the code does not make obvious, and warnings about fragile areas. Leave out generic coding advice and anything that only applied to a past task. Longer procedures used occasionally are better placed in files or skills Claude reads when needed.

## Do I need to tell Claude how to test its work?

Yes, whenever the task changes code or produces something that can be checked. Stating the checks gives Claude a way to catch its own mistakes before reporting back, which narrows the gap between an implementation that looks right and one that handles edge cases. If a check applies to every change, put it in CLAUDE.md once. For task-specific checks, include them in the turn prompt.

## When should I clear or compact instead of rewriting the prompt?

If the prompt is good but Claude is drifting, forgetting earlier constraints or revisiting settled decisions, the history is the problem, not the wording. Compact with a focus on the next goal when the task continues, and clear the session when you move to unrelated work. Rewriting the prompt is the right move when Claude is making reasonable choices from incomplete inputs. Look at which failure you are seeing before changing anything.
