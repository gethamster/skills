---
name: structuring-ai-coding-sessions-with-gstack-phases
description: "This skill teaches you how to follow gstack's opinionated phased workflow, moving from problem framing and architecture decisions through implementation and verification, so that AI-assisted development sessions produce reliable, well-reasoned code instead of fast but fragile output."
metadata:
  homepage: https://tryhamster.com
  method: gstack-framework
---

# Structuring AI Coding Sessions with gstack Framework Examples

> This skill teaches you how to follow gstack's opinionated phased workflow, moving from problem framing and architecture decisions through implementation and verification, so that AI-assisted development sessions produce reliable, well-reasoned code instead of fast but fragile output.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes per coding session |
| Outcome | You gain a repeatable, phase-by-phase structure for every AI coding session that prevents premature implementation, surfaces architectural trade-offs early, and produces code that survives review and deployment rather than needing immediate rework. |
| Prerequisites | Basic familiarity with AI coding agents (Claude Code, Cursor, or similar), gstack skill pack installed and configured (see installing-and-configuring-gstack-skill-pack), Understanding of slash commands for invoking gstack skills, Working knowledge of software development fundamentals (version control, testing, code review) |
| Part of | [gstack Framework](../../methods/gstack-framework/METHOD.md) |

## Overview

Most developers who adopt AI coding agents fall into a predictable trap: they describe a feature, let the agent generate hundreds of lines of code, and then spend hours debugging output that was built on incorrect assumptions. The problem is not the agent's capability. The problem is the absence of a structured workflow that forces critical thinking before code generation begins. Structuring AI coding sessions with the [gstack Framework](https://tryhamster.com/methods/gstack-framework) addresses this by encoding an opinionated, phased progression into your development process. Instead of treating the AI agent as a code autocomplete that you prompt and pray with, gstack's phases treat it as a collaborator that must be guided through problem definition, architecture review, implementation planning, and verification in sequence.

The phased workflow produces a specific artifact at each stage. Problem framing yields a problem statement and success criteria. Architecture review yields a design document with trade-offs evaluated from multiple perspectives (CEO, engineer, QA). Implementation planning yields a task breakdown with dependencies and risk flags. Code generation produces working code against that plan. Verification confirms the code meets the original success criteria. Each artifact constrains and informs the next phase, creating a chain of reasoning that is auditable and debuggable when something goes wrong. This is the discipline that separates developers who use AI agents effectively from those who generate technical debt faster than they can manage it.

This skill is the central orchestration pattern in the [gstack Framework](https://tryhamster.com/methods/gstack-framework). While sibling skills like [using multi-agent perspectives](https://tryhamster.com/skills/using-multi-agent-perspectives-for-development) and [navigating slash commands](https://tryhamster.com/skills/navigating-gstack-slash-commands-and-specialist-skills) teach specific capabilities within the framework, this skill teaches you how to sequence those capabilities into a coherent session. Think of it as the conductor's score that tells you when each instrument enters. By the end, you will have a repeatable session template that you can adapt to features of varying complexity, from a small bug fix completed in 20 minutes to a multi-day architectural migration.

The concrete output of mastering this skill is a session log: a structured record of each phase's artifact, the decisions made, the alternatives considered, and the verification results. This log serves double duty as both a development record and a prompt engineering reference, because you can reuse successful session structures as templates for future work of similar shape.

## How It Works

The phased workflow works because it breaks the AI coding session into stages that mirror how experienced engineers naturally think, but makes each stage explicit and non-skippable. Without structure, AI agents are happy to generate code the moment you describe a feature. The code will compile. It might even pass basic tests. But it will be built on whatever assumptions the agent defaulted to, and those assumptions are invisible until something breaks in production. Gstack's phases make the assumptions visible by requiring you to articulate them before code generation begins.

The underlying mental model is a decision funnel. At the top of the funnel, you have maximum uncertainty and maximum optionality. You do not know what the right architecture is, you have not decided on trade-offs, and the problem itself may not be well-defined. Each phase narrows the funnel by forcing a specific type of decision. Problem framing narrows the space of what you are building. Architecture review narrows the space of how you are building it. Implementation planning narrows the sequence and decomposition. Code generation operates within the constraints established by the prior phases. Verification confirms that the output satisfies the constraints from the top of the funnel.

This funnel structure has a critical property: it makes rework cheap. If you discover during architecture review that your problem statement is wrong, you rewrite a paragraph, not a thousand lines of code. If you discover during implementation planning that your architecture has a fatal dependency, you revise a design document, not a half-built feature branch. The cost of changing direction increases exponentially as you move down the funnel, so gstack front-loads the thinking where changes are cheapest.

The phases also create natural checkpoints for multi-agent perspectives. During problem framing, a CEO perspective asks whether this is even the right problem to solve. During architecture review, an engineer perspective evaluates technical feasibility while a QA perspective identifies testability gaps. During verification, a QA perspective runs the acceptance criteria. These perspectives are not cosmetic labels. They are structured prompts that force the AI agent to evaluate the same artifact from genuinely different angles, surfacing conflicts that a single-perspective review would miss. See [using multi-agent perspectives](https://tryhamster.com/skills/using-multi-agent-perspectives-for-development) for the mechanics of how these perspective shifts work.

One important nuance: the phases are sequential but not rigid. For a trivial bug fix, you might compress problem framing and architecture review into a single prompt. For a complex migration, you might iterate within the architecture review phase three or four times before proceeding. The discipline is in never skipping a phase entirely, not in spending equal time on each. The size of the phase scales with the complexity and risk of the work.

## Step-by-Step Guide

### Step 1: Step 1: Frame the Problem with Explicit Success Criteria

Before opening your AI agent, write a problem statement that answers three questions: what is broken or missing, who is affected, and how will you know when it is fixed. This is not a feature description or a user story. It is a diagnosis. Include the observable symptom ("users see a 500 error when submitting the payment form"), the suspected root cause if you have one ("the Stripe webhook handler does not retry on timeout"), and the measurable success criteria ("payment submissions succeed within 3 seconds with zero 500 errors over a 24-hour window").

Feed this problem statement to your AI agent as the opening context for the session. Explicitly instruct the agent not to generate code yet, only to confirm understanding and ask clarifying questions. Review the agent's clarifying questions carefully, because they reveal assumptions you may not have stated. Revise the problem statement based on any gaps the questions expose.

> **Pro tip:** Write the success criteria as if you are writing acceptance tests in plain language. If you cannot describe a test that would pass when the work is done, your problem statement is too vague. "Improve payment reliability" is not testable. "Payment form submissions return 200 status within 3 seconds, with fewer than 0.1% error rate over 24 hours" is testable.

### Step 2: Step 2: Explore Architecture Options Before Committing

With the problem statement established, prompt the AI agent to generate at least three distinct approaches to solving it. Do not ask for "the best" approach, because that collapses the decision space prematurely. Ask for three approaches with different trade-off profiles: one optimizing for speed of implementation, one for long-term maintainability, and one for minimal risk. For each approach, require the agent to specify which existing components are affected, what new components are introduced, what the failure modes are, and what the testing strategy looks like.

Document all three options in a brief design comparison, even if one is obviously better. The act of comparing forces you to articulate why you are choosing one path over another, and that reasoning becomes invaluable when you need to explain the decision later or revisit it.

> **Pro tip:** If the AI agent keeps converging on a single approach despite being asked for three, it likely means your problem statement is so constrained that only one architecture makes sense. That is fine for small tasks. For anything touching multiple systems or requiring more than a day of work, push for genuine alternatives. Reframe the prompt: "Assume approach A is not available. What would you do instead?"

### Step 3: Step 3: Apply Multi-Agent Perspectives to the Chosen Architecture

). You can do this by prompting the AI agent to adopt each role in sequence, or by using gstack's built-in perspective commands. For each perspective, capture the concerns raised and the mitigations proposed. 1% of users.

The engineering perspective might identify a performance bottleneck in the chosen data model. The QA perspective might reveal that the architecture makes a critical path untestable without an integration environment. Record these concerns and your responses to them in the session log before proceeding.

> **Pro tip:** The QA perspective is the most frequently skipped and the most valuable. Engineers naturally think about the happy path. QA thinks about what happens when the network drops mid-transaction, when the input is malformed, when the external API returns unexpected data. Force this perspective even when the feature seems simple.

### Step 4: Step 4: Decompose the Implementation into Ordered Tasks

Convert the chosen architecture into a sequenced task list where each task produces a verifiable output. A good task breakdown has three properties: each task is small enough to complete in a single AI agent interaction (roughly 15-30 minutes of work), each task has a clear "done" criterion, and the tasks have explicit dependencies so you know which must complete before others can start. For example, instead of "implement the payment retry system," break it into: (1) add retry configuration to the webhook handler, (2) implement exponential backoff logic with tests, (3) add dead letter queue for permanently failed webhooks, (4) update monitoring dashboards to track retry rates. Prompt the AI agent to review the task breakdown for missing steps, particularly around error handling, database migrations, configuration changes, and deployment concerns.

> **Pro tip:** A reliable heuristic: if a task description contains the word "and," it is probably two tasks. "Add retry logic and update the monitoring dashboard" is two tasks with different risk profiles and different verification needs. Split them.

### Step 5: Step 5: Execute Tasks Sequentially with Context Boundaries

Begin code generation by working through your task list in order. For each task, provide the AI agent with three pieces of context: the original problem statement (so it remembers the why), the relevant section of the architecture document (so it follows the how), and the specific task with its done criterion (so it knows when to stop). This explicit context boundary prevents a common failure mode where the agent accumulates conflicting context over a long session and starts generating code that contradicts earlier decisions. After each task, review the generated code against the task's done criterion before moving to the next task.

If the code does not meet the criterion, iterate on that task, do not proceed. Resist the temptation to let the agent "fix it later" in a subsequent task, because cascading assumptions built on broken code are the primary source of AI-generated technical debt.

> **Pro tip:** If your AI agent's context window is filling up during a long session, start a new session for the next task rather than continuing. Provide the new session with the problem statement, the architecture document, and the completed tasks list. A fresh context window with explicit documentation outperforms a cluttered one with implicit history every time.

### Step 6: Step 6: Verify Each Task Against Success Criteria Before Proceeding

After each task is complete, run verification before moving to the next. Verification has two layers: automated verification (do the tests pass? does the linter clear? ).

Prompt the AI agent to act as a QA reviewer for its own output. Provide it with the task's done criterion and ask it to evaluate whether the code meets it, identify any edge cases not covered by the tests, and flag any assumptions it made that were not specified in the architecture document. If the agent identifies gaps, address them within the current task. This phase-gate pattern prevents the accumulation of "almost done" tasks that collectively produce a broken system.

> **Pro tip:** Keep a running tally of assumptions the agent made during code generation. When the agent says "I assumed the database connection pool is configured to handle 50 concurrent connections" or "I assumed this API returns ISO 8601 dates," write those down. At the end of the session, validate every assumption. Unvalidated assumptions are the number one cause of "it works on my machine" failures.

### Step 7: Step 7: Run End-to-End Verification Against Original Problem Statement

Once all tasks are complete, return to the problem statement and success criteria from step 1. Run a final verification that evaluates the complete solution, not individual tasks, against the original criteria. This is where you catch integration issues that task-level verification misses: the retry logic works in isolation, but the dead letter queue does not receive messages because the queue configuration was not deployed. Prompt the AI agent with the full problem statement, the success criteria, and the complete set of changes, then ask it to evaluate whether the solution as a whole meets the criteria.

If you defined the success criteria as testable statements in step 1, you can write or generate integration tests that directly assert them. Document the verification results in the session log.

> **Pro tip:** The most common gap in end-to-end verification is environmental differences. The code works in your development environment but fails in staging because of a missing environment variable, a different database version, or a network policy that blocks an external API call. Include deployment configuration in your verification checklist.

### Step 8: Step 8: Document Session Decisions and Create Reusable Templates

Close the session by capturing a brief log that records: the original problem statement, the architecture options considered and the one chosen with rationale, the task breakdown, any assumptions made during implementation, the verification results, and any deviations from the original plan. This log takes 5-10 minutes to write and pays for itself immediately, because it provides the context needed to onboard another developer, debug a regression, or restart the work if the session was interrupted. Over time, you will accumulate session logs for different types of work (bug fixes, new features, migrations, refactors), and these logs become templates for future sessions. A session log for a successful API migration becomes the starting template for the next API migration, saving 30-40 minutes of setup time.

> **Pro tip:** Store session logs alongside the code they produced, not in a separate documentation system. A markdown file in the repository's docs folder, committed with the feature branch, is more likely to be found and read than a Confluence page. If your team uses pull request descriptions, paste the session summary there.

## Best Practices

- Never let the AI agent generate production code during the problem framing or architecture review phases. The purpose of these phases is to constrain the solution space, not to produce output. If the agent starts writing code unprompted during these phases, redirect it explicitly. Allowing premature code generation anchors you to a specific implementation before you have evaluated alternatives, making you reluctant to discard work even when a better approach is obvious.
- Set explicit time boundaries for each phase proportional to the complexity of the work. For a small bug fix (under 2 hours total), spend 5 minutes on problem framing, 5 on architecture, and the rest on implementation and verification. For a multi-day feature, spend 30-60 minutes on problem framing and architecture before writing any code. Without time boundaries, teams either rush through framing (and pay for it later) or get stuck in analysis paralysis during architecture review.

The ratio of framing-to-coding should be roughly 20% framing and 80% implementation for well-understood problems, and 40% framing and 60% implementation for novel problems.
- Maintain a separate, persistent document for the architecture decision rather than relying on the AI agent's conversation history. Conversation history is ephemeral, gets truncated by context window limits, and cannot be shared with other team members. A markdown file with the problem statement, architecture options, and chosen approach becomes the single source of truth that every subsequent prompt references. This also prevents the common failure where a long conversation drifts and the agent forgets constraints established earlier.
- Use the QA perspective as a phase gate, not a final check. ). Teams that defer QA to the end consistently discover fundamental issues that require reworking multiple completed tasks. Catching testability gaps at the architecture stage costs minutes.

Catching them after implementation costs hours.
- When the AI agent proposes a solution you do not fully understand, pause and ask it to explain the reasoning before accepting the code. This is not about distrust. It is about maintaining your ability to debug, modify, and extend the code after the session ends. If you cannot explain why the agent chose a particular pattern, you cannot evaluate whether it is correct for your context.

A useful prompt: "Explain why you chose this approach over the alternatives.
- Review gstack framework examples from previous sessions before starting a new one of similar shape. If you previously completed a database migration session, review that session log before starting a new migration. The prior session's architecture options, task breakdown, and verification checklist are a proven template. Adapting a proven template is faster and more reliable than starting from scratch, and it surfaces lessons learned from the prior session (such as "the migration required a backfill script we initially forgot").
- Keep each AI agent interaction focused on a single phase or task. Prompts that combine multiple phases ("frame the problem and then generate the code") collapse the workflow and eliminate the review checkpoints between phases. The 30-second overhead of sending a separate prompt for each phase is negligible compared to the debugging cost of code generated without adequate problem framing.

## Common Mistakes

- **Jumping straight to code generation without framing the problem or reviewing architecture** — This is the most common and most expensive mistake. It happens because developers are optimizing for speed of output rather than speed of correct output. The symptom is a long AI session that produces a large diff, followed by a long debugging session where you discover the code solved the wrong problem or made architectural choices that conflict with your existing system. The fix is mechanical: before every session, write at least three sentences describing the problem, the success criteria, and the constraints.

Even this minimal framing cuts rework rates by more than half, because it forces the agent to operate within stated boundaries rather than inferred ones.
- **Treating all tasks as the same size and skipping decomposition** — This manifests as a single prompt like "build the user authentication system" that produces 500 lines of code spanning multiple files, modules, and concerns. When something in that output is wrong, you cannot isolate which part failed or why, because the entire implementation was generated as a monolith. The underlying cause is usually impatience with the decomposition step. The fix is to enforce a maximum scope for each AI interaction: one task, one concern, one verifiable output.

If you cannot describe what "done" looks like for a task in a single sentence, the task is too large. Split it until each piece has a clear, testable completion criterion.
- **Skipping multi-agent perspectives because they feel redundant for simple tasks** — Developers skip perspectives because they believe they already know the answer and the perspectives will just confirm it. This is confirmation bias in action. The symptom is code that works correctly but creates operational problems: it is not observable (no logging or metrics), not maintainable (complex coupling that makes future changes expensive), or not deployable (requires manual steps that were not documented). Simple tasks accumulate into complex systems, and each shortcut in perspective review compounds.

The fix is to apply at minimum a QA perspective to every task, even trivial ones. ") is free compared to the debugging cost when something does go wrong.
- **Allowing architecture review to become an infinite loop of options analysis** — This is the opposite failure mode from jumping to code. It shows up as a session that spends 90 minutes evaluating increasingly exotic architecture options without ever writing a line of code. It happens when the developer is uncertain and uses option generation as a form of procrastination. The signal to watch for: if you have evaluated more than three options for a single component, or if you are on your second round of evaluation after already selecting an approach, you are stuck.

The fix is to set a time boundary before starting architecture review and commit to choosing when the time expires. For most decisions, the difference between the second-best and best architecture is smaller than the cost of the time spent finding it. Pick, commit, and proceed. You can always revisit if verification reveals a problem.
- **Not resetting context between tasks in long sessions** — AI agents accumulate context over a conversation, and that context can become contradictory. The symptom is subtle: code generated in task 7 contradicts a decision made in task 2, because the agent's attention has drifted to more recent context. You will not catch this during the session because the code looks reasonable in isolation. " The fix is to treat each task as a semi-independent interaction.

Either start a new conversation for each task (providing the problem statement and architecture document as fresh context) or explicitly re-state the relevant constraints at the beginning of each task prompt.
- **Documenting nothing and relying on the AI conversation log as the session record** — Conversation logs are not documentation. They are interleaved with false starts, corrections, tangential explorations, and the agent's thinking-out-loud text. Trying to reconstruct decisions from a raw conversation log takes longer than making the decisions did originally. " and nobody being able to answer without reading 200 messages of conversation.

The fix is to spend 5-10 minutes at the end of each session writing a brief summary: what you decided, why, what alternatives you considered, and what you would do differently. This investment pays for itself the first time someone (including future you) needs to understand or modify the code.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/gstack-framework/METHOD.md) — gstack Framework

## Related Skills

- [Customizing and Extending gstack with Your Own Skills](../customizing-and-extending-gstack-skills/SKILL.md)
- [Orchestrating gstack's 8 Power Tools in Complex Workflows](../orchestrating-power-tools-in-gstack-workflows/SKILL.md)
- [Comparing gstack to Other AI Coding Agent Frameworks](../comparing-gstack-to-other-ai-coding-frameworks/SKILL.md)
- [Using Multi-Agent Perspectives (CEO, Engineer, QA) in Development](../using-multi-agent-perspectives-for-development/SKILL.md)
- [Installing and Configuring the gstack Skill Pack](../installing-and-configuring-gstack-skill-pack/SKILL.md)
- [Navigating gstack's 23 Specialist Skills via Slash Commands](../navigating-gstack-slash-commands-and-specialist-skills/SKILL.md)
