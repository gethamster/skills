---
name: "writing-system-prompts-for-claude"
description: "Write Claude prompts and CLAUDE.md files that supply exact inputs, scope the task, and define done so the first attempt can be checked."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "claude-code-context-engineering-6-pillars-framework"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# How to Write the Best Claude AI Prompts

> Write Claude prompts and CLAUDE.md files that supply exact inputs, scope the task, and define done so the first attempt can be checked.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 30-60 minutes to learn, then a few minutes per prompt |
| Outcome | A turn-level prompt with explicit inputs and an output contract, plus a short persistent instruction file that holds only project-wide rules. |
| Prerequisites | Access to Claude Code or another Claude interface, A project with a runnable test or check command, Basic familiarity with what a CLAUDE.md file is |
| Part of | [Claude Code Context Engineering: 6 Pillars Framework](../../methods/claude-code-context-engineering-6-pillars-framework/METHOD.md) |

## Overview

A system prompt for Claude is rarely one block of text. In practice it has two layers: the persistent instructions that load every session, such as a CLAUDE.md file, and the turn-level prompt that describes the task in front of you. This skill covers writing both so Claude receives the exact inputs it needs and a clear, testable definition of done. For the framework this skill belongs to, including the six pillars and where they came from, see the [Claude Code context engineering method page](https://tryhamster.com/methods/claude-code-context-engineering-6-pillars-framework).

The core problem is inference. When a prompt says "fix the login bug," Claude has to guess which file, which symptom, which constraint and which test counts as proof. Anthropic's [Claude Code best practices](https://code.claude.com/docs/en/best-practices) push the other way: name the target file or scenario, state constraints, and say how you want the work tested. Anthropic's guide to [scaling agentic coding across an organization](https://resources.anthropic.com/hubfs/Scaling%20agentic%20coding%20across%20your%20organization.pdf?hsLang=en) makes the same point about failures: instead of "it crashed," give the full error message, the stack trace and the specific action that triggered it. Every detail you leave out is a detail Claude reconstructs, and reconstruction is where plausible but wrong work comes from.

The second problem is space. Everything in persistent instructions is paid for on every turn, before the task even starts. Anthropic reported that it [removed over 80% of Claude Code's system prompt for Claude Opus 5 and Claude Fable 5](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models) with no measurable loss on its coding evaluations, and the same guidance recommends keeping CLAUDE.md lightweight and focused on project purpose, conventions and codebase-specific gotchas. A long standing instruction list is not a safety net. It is a tax on the context available for the actual work.

The skill therefore produces three things. First, a turn-level prompt that carries the real inputs: the request, the relevant files, the error, the constraints and any reference examples. Second, an output contract that names the artifact, its format, the evidence required and the condition that ends the task. Third, a short persistent instruction file that holds only what Claude cannot discover from the code and would get wrong without being told.

You can tell the skill is working when Claude stops asking clarifying questions you could have answered up front, when its first attempt touches the right file, and when "done" means checks passed rather than code that merely looks finished. You can tell it is failing when you type the same correction in session after session, which usually means the rule belongs in CLAUDE.md, or when CLAUDE.md keeps growing, which usually means it holds material that should load only when a task needs it.

## How It Works

A good prompt answers five questions before Claude starts: what are you working from, where does the work happen, what shape should the result take, how will it be checked, and when does it stop. Use the table as a pre-send checklist.

| Element | What to state | Example |
|---|---|---|
| Input | Exact request, files, error text, examples | Full stack trace plus the command that triggered it |
| Scope | Target file or scenario, constraints | Only the session module, no new dependencies |
| Format | Shape of the artifact or answer | A diff plus a short summary of the cause |
| Validation | Tests, scripts or checks to run | Run the auth test suite and the typechecker |
| Completion condition | The observable state that ends the task | Suite passes and logged-out users are redirected |

**Input.** Anthropic's [best practices for Claude Code](https://code.claude.com/docs/en/best-practices) recommend supplying relevant material explicitly rather than assuming Claude can infer it. The mechanics are cheap: Claude Code lets you [use @ to reference files, paste screenshots or images, or pipe data directly](https://anthropic.com/engineering/claude-code-best-practices?curius=1527), so there is rarely a reason to describe a file in prose instead of attaching it. For bugs, the [full error message, stack trace and triggering action](https://resources.anthropic.com/hubfs/Scaling%20agentic%20coding%20across%20your%20organization.pdf?hsLang=en) beat any summary you could write.

**Scope.** Naming the target file or scenario, the constraints and your testing preferences is the second half of the same guidance. Scope does more than aim the work. It limits exploration, and every file Claude opens to orient itself lands in the context window.

**Format and validation.** Together these form the output contract. Anthropic's guidance calls for describing what done looks like, and its example CLAUDE.md includes a workflow rule to [typecheck when you're done making a series of code changes](https://code.claude.com/docs/en/best-practices). Validation turns "looks right" into "checked," which matters because a plausible implementation can still miss edge cases.

**Completion condition.** This is the single observable state that ends the task. Without it Claude either stops at the first thing that compiles or keeps polishing past the point you needed.

**Which layer each item goes in.** Anything true for every task, such as the test command, a naming convention or a warning about a fragile legacy module, belongs in CLAUDE.md, written once. Anything specific to today's task belongs in the turn prompt. Anthropic's advice to keep CLAUDE.md lightweight and reserve it for [project purpose, conventions and gotchas](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models) is the filter.

**Keeping the prompt effective over a session.** A precise prompt loses force when it sits under a long, crowded history. Claude Code supports compacting with a stated focus, for instance [/compact focus on the auth bug fix](https://code.claude.com/docs/en/context-window), so the summary keeps what the next step needs, and it documents /autocompact 500k as an example of setting the fullness at which automatic compaction runs. Between unrelated tasks, [run /clear](https://code.claude.com/docs/en/best-practices) so the new prompt starts clean.

## Step-by-Step Guide

### Step 1: Gathering the exact inputs

Before writing a word of instruction, collect the material Claude would otherwise have to guess at: the request in your own words, the relevant files, the literal error output, any constraints and one or two reference examples. Attach files by reference rather than paraphrasing them, since Claude Code supports @ references, pasted images and piped data. For failures, capture the full error, the stack trace and the command or action that produced it. The output of this step is a short list of attachments and pasted text, not prose.

If you cannot find an input, say so in the prompt instead of leaving Claude to invent it.

> **Pro tip:** Keep a scratch note open while you reproduce a bug and paste the terminal output into it as it happens, so the exact text is ready when you write the prompt.

### Step 2: Scoping the task

State where the work happens and what is off limits. Name the target file, module or user scenario, and list constraints such as no new dependencies, no public API changes or a required library. Add your testing preference, for example whether you want a new unit test or only the existing suite run. Tight scope reduces the files Claude explores, which keeps the context window free for the change itself.

If you notice Claude reading half the repository, the scope line was missing or too vague.

> **Pro tip:** Write the scope as a sentence starting with "Only" or "Do not," which forces you to commit to a boundary.

### Step 3: Specifying the output format

Decide what artifact you want back: a diff, a new file, a written explanation, a migration plan or a list of options. Say how it should be structured, such as a summary of the cause followed by the change, or a table of trade-offs. Format instructions matter most when the output feeds another step, like a pull request description or a ticket. Without them you get whatever shape Claude judges reasonable, which may not fit where the result goes next.

### Step 4: Defining validation

List the checks Claude must run before it reports back: the test suite, a typecheck, a lint pass, a script or a screenshot of the rendered page. Be specific about the command if it is not obvious from the project. Validation is what closes the gap between an implementation that reads well and one that handles edge cases. If a check is required on every task, move it to CLAUDE.md so you stop repeating it in each prompt.

> **Pro tip:** If there is no automated check for the behavior, ask Claude to write the failing test first and show it failing before the fix.

### Step 5: Writing the completion condition

Finish the prompt with one observable state that means the task is over. Good conditions are testable: the suite passes, the endpoint returns the expected status, the page renders without console errors. Avoid conditions like "clean it up" or "make it better," which have no end. The completion condition also tells Claude when to stop and report instead of expanding the change.

If Claude keeps going after the goal is met, tighten this line.

### Step 6: Trimming persistent instructions

Open CLAUDE.md and test each line against one question: would Claude get this wrong without being told, on most tasks? Keep project purpose, conventions and codebase-specific gotchas. Remove generic coding advice, rules that describe what the code already shows, and task-specific notes that crept in from past sessions. Move long, occasional procedures into files or skills that load only when needed.

The output is a shorter file where every line earns its per-turn cost.

> **Pro tip:** When you delete a line, run a normal task afterward and watch whether the behavior it governed actually regresses before restoring it.

### Step 7: Resetting or compacting between tasks

Decide at each task boundary whether the current history still helps. For an unrelated task, clear the session so the new prompt is not competing with old material. For a long task that has become crowded, compact with an explicit focus that names what the next step depends on. Consider setting an automatic compaction threshold so you are not caught with a full window mid-change.

Signs you waited too long include Claude forgetting constraints stated earlier or revisiting decisions already settled.

> **Pro tip:** Phrase the compaction focus as the next goal, such as the specific bug or feature, rather than as a list of everything to keep.

## Best Practices

- Attach, do not describe. Referencing the actual file or pasting the actual error removes a translation step where details get lost, and Claude Code supports [@ file references, pasted images and piped data](https://anthropic.com/engineering/claude-code-best-practices?curius=1527) for exactly this.
- Give failures in full. Anthropic's guidance asks for the [full error message, stack trace and triggering action](https://resources.anthropic.com/hubfs/Scaling%20agentic%20coding%20across%20your%20organization.pdf?hsLang=en) rather than "it crashed," because the line numbers and call path are usually where the diagnosis starts.
- Write done as a check, not an adjective. A completion condition Claude can verify, such as a passing suite, lets it self-correct before handing work back, while "make it robust" leaves the stopping point to guesswork.
- Promote repeated corrections into CLAUDE.md and demote one-off notes out of it. If you have typed the same instruction in several sessions, it is a project rule; if a line only applied to last week's task, it is costing context on every turn for nothing.
- Keep CLAUDE.md short on purpose. Anthropic reports it [cut over 80% of Claude Code's own system prompt](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models) for its newest models without measurable loss on coding evaluations, which suggests capable models need fewer standing instructions, not more.
- Put testing preferences in the prompt even for small changes. The [best practices guide](https://code.claude.com/docs/en/best-practices) pairs scope with testing preferences because a change with no stated check tends to come back unverified.

## Common Mistakes

- **Omitting exact inputs such as the original error, the target file, the scenario or the reference material.** — Collect and attach these before prompting. Anything the prompt could have supplied directly but did not becomes something Claude infers, and inferred details are the usual source of confident but wrong fixes.
- **Letting the persistent project prompt grow until it crowds out the task.** — Keep CLAUDE.md lightweight, as [Anthropic recommends](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models), and limit it to purpose, conventions and gotchas. Move occasional procedures into files or skills that load on demand.
- **Reusing one congested conversation indefinitely, so a precise new prompt sits under a long, stale history.** — Compact with a stated focus when the task continues, or clear the session when it changes. Claude Code documents [focused /compact and /autocompact thresholds](https://code.claude.com/docs/en/context-window) for this.
- **Leaving out completion criteria, validation steps or testing preferences.** — End every prompt with the checks to run and the state that ends the task. Without an operational definition of done, Claude decides for itself when the work is finished.
- **Summarizing an error in your own words instead of pasting it.** — Paste the literal output. Paraphrase drops the file paths, line numbers and exception types that point to the cause.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/claude-code-context-engineering-6-pillars-framework/METHOD.md) — Claude Code Context Engineering: 6 Pillars Framework

## Related Skills

- [Structuring Retrieval-Augmented Context for Claude](../structuring-retrieval-augmented-context/SKILL.md)
- [Preventing Context Poisoning, Distraction, and Clashes](../preventing-context-poisoning-and-clashes/SKILL.md)
- [Engineering Tool Output Context Flows for Claude Agents](../engineering-tool-output-context-flows/SKILL.md)
- [Managing Context Window Token Budgets in Claude](../managing-context-window-token-budgets/SKILL.md)
- [Layering Instruction Hierarchies in Claude Prompts](../layering-instruction-hierarchies-in-prompts/SKILL.md)
- [Designing Multi-Turn Conversation Context Strategies](../designing-multi-turn-conversation-context/SKILL.md)

## Sources

- [Claude Code Best Practices](https://anthropic.com/engineering/claude-code-best-practices?curius=1527)
- [Scaling Agentic Coding Across Your Organization](https://resources.anthropic.com/hubfs/Scaling%20agentic%20coding%20across%20your%20organization.pdf?hsLang=en)
- [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices)
- [The new rules of context engineering for Claude 5 generation](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)
- [Explore the context window - Claude Code Docs](https://code.claude.com/docs/en/context-window)
