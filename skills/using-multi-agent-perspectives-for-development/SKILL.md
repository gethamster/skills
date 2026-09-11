---
name: using-multi-agent-perspectives-for-development
description: "This skill teaches you how to structure AI-assisted development sessions by rotating between CEO, engineer, and QA perspectives, so each phase of your workflow gets the right kind of judgment applied to decisions, implementation, and verification."
metadata:
  method: gstack-framework
---

# Using Multi-Agent Perspectives (CEO, Engineer, QA) for gstack Framework Features

> This skill teaches you how to structure AI-assisted development sessions by rotating between CEO, engineer, and QA perspectives, so each phase of your workflow gets the right kind of judgment applied to decisions, implementation, and verification.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes for first structured session |
| Outcome | You will produce development artifacts where strategic decisions, implementation choices, and quality verification are each handled by a purpose-fitted perspective, resulting in fewer scope mistakes, cleaner code, and caught regressions before merge. |
| Prerequisites | Basic familiarity with AI coding agents (Claude Code, Cursor, or similar), gstack skill pack installed and configured (see /skills/installing-and-configuring-gstack-skill-pack), Understanding of slash commands for invoking gstack skills (see /skills/navigating-gstack-slash-commands-and-specialist-skills), A real feature or bug to work on, not a toy example |
| Part of | [gstack Framework](../../methods/gstack-framework/METHOD.md) |

## Overview

Most developers working with AI coding agents treat the interaction as a single, undifferentiated conversation. You describe what you want, the agent writes code, you paste it in, and you hope it works. This approach collapses three fundamentally different types of thinking into one stream: deciding what to build, deciding how to build it, and verifying that what was built actually works. The result is scope creep embedded in implementation, architectural shortcuts made without conscious trade-off analysis, and bugs that only surface in production because nobody asked the hard verification questions. Multi-agent perspectives solve this by making each type of thinking explicit and sequential.

The [gstack Framework](https://tryhamster.com/methods/gstack-framework) encodes this separation into its core workflow through three named roles. The CEO perspective handles prioritization, scope definition, trade-off analysis, and resource allocation decisions. It answers questions like "should we build this at all," "what is the minimum viable version," and "what are we trading away by choosing this approach." The engineer perspective takes scoped decisions and translates them into architecture, code, and technical implementation. It focuses on how, not whether. The QA perspective then examines the output with adversarial skepticism, looking for edge cases, regressions, security gaps, and deviations from the original specification. Each perspective has a distinct set of concerns, a distinct success criteria, and a distinct failure mode.

The concrete artifact you produce when applying this skill is a development session log where each phase is annotated with the active perspective, its inputs, its outputs, and the handoff to the next role. Over time, this creates a traceable decision record that explains not just what was built but why each choice was made and what was verified. Teams that adopt this pattern report catching scope issues 60-70% earlier in the development cycle and reducing post-merge bug rates significantly, because verification becomes a first-class phase rather than an afterthought.

This skill sits at the center of gstack's philosophy. While other skills in the framework handle specific tasks like orchestrating power tools or customizing skill packs, multi-agent perspectives provide the structural backbone that determines when and how those other capabilities get invoked. Master this skill first, and every other gstack feature becomes more effective.

## How It Works

The multi-agent perspective system works because it forces cognitive mode-switching at deliberate boundaries rather than allowing blended, compromised thinking. Research in cognitive science consistently shows that humans (and, by extension, AI systems prompted to behave like humans) perform worse when they try to optimize for multiple conflicting objectives simultaneously. A developer who is simultaneously deciding scope, writing code, and checking for bugs will shortchange at least one of those activities. The same applies to an AI agent given a prompt that mixes strategic and tactical concerns.

Each perspective in the gstack Framework operates as a constrained optimization. The CEO perspective optimizes for value delivered per unit of effort, explicitly ignoring implementation elegance. It asks: what is the smallest thing we can ship that validates the hypothesis or solves the user's problem? This perspective is trained to resist gold-plating and to surface trade-offs that engineers naturally want to avoid confronting. The key mental model here is that the CEO does not care about code quality in isolation. It cares about outcomes, timelines, and risk.

The engineer perspective optimizes for correctness, maintainability, and technical coherence, explicitly ignoring business prioritization (which has already been decided). It takes the scoped specification from the CEO phase and produces the cleanest implementation it can within those constraints. When the engineer perspective discovers that the specification is ambiguous or that a better approach exists, it flags the issue for a return to CEO perspective rather than making the trade-off unilaterally. This discipline prevents the common failure mode where an engineer quietly expands scope because a "better" solution seems obvious.

The QA perspective optimizes for finding failures, explicitly ignoring both business value and implementation effort. It assumes the code is broken until proven otherwise. It generates edge cases, checks boundary conditions, reviews error handling paths, and compares the output against the original specification from the CEO phase. Crucially, the QA perspective has authority to block a merge or require a return to the engineer phase. It is not advisory. It is a gate.

The rotation between perspectives follows a specific pattern: CEO first (define scope), engineer second (implement), QA third (verify), with loops back as needed. This is not a waterfall process. A single feature might cycle through all three perspectives multiple times in a 30-minute session. The key discipline is making each transition explicit. You invoke a different slash command, you restate the context from the new perspective's point of view, and you operate within that perspective's constraints until you deliberately switch again. This explicitness is what prevents blended thinking from creeping back in.

The system's assumptions break down in two predictable ways. First, if the task is genuinely trivial (a one-line config change, a typo fix), the overhead of three perspectives exceeds the value. Use judgment. Second, if the developer using the system does not trust the QA perspective's findings and overrides them without returning to the engineer phase, the entire verification layer collapses into theater. The QA gate must have real consequences to produce real value.

## Step-by-Step Guide

### Step 1: Step 1: Define the task and gather context

Before invoking any perspective, write down the task in plain language. Include the user story or bug report, any constraints (timeline, backward compatibility, performance targets), and the definition of done. Gather relevant files, documentation, and prior decisions. This context document becomes the shared input that all three perspectives will reference.

Keep it to one screen of text. If you cannot describe the task concisely, you likely need to decompose it into smaller tasks first. The output of this step is a task brief that any of the three perspectives can read cold and understand immediately.

> **Pro tip:** Store the task brief in a markdown file at the root of your working directory. When you switch perspectives, you can point the agent back to this file to reset context cleanly rather than relying on conversation history.

### Step 2: Step 2: Invoke the CEO perspective for scoping

Switch your AI agent into the CEO role using the appropriate gstack slash command. Present the task brief and ask the CEO perspective to evaluate: Is this task worth doing now? What is the minimum viable implementation? What are we explicitly not building?

What are the risks of this approach versus alternatives? The CEO perspective should produce a scoped specification that includes acceptance criteria, explicit exclusions (what is out of scope), and any trade-offs being made. If the CEO perspective identifies that the task should be deferred, split, or reconsidered, that decision happens here, before any code is written. The output is a specification document, typically 5-15 bullet points, that the engineer perspective will treat as its contract.

> **Pro tip:** Ask the CEO perspective to list three things that are explicitly out of scope. This forces boundary clarity and prevents the engineer perspective from wandering into adjacent improvements.

### Step 3: Step 3: Review the specification for completeness

Before handing off to the engineer, read the CEO's specification yourself. Check that every acceptance criterion is testable (not vague like "should be fast" but specific like "response time under 200ms for the 95th percentile"). Check that the scope boundaries are clear enough that you could explain them to a colleague. If anything is ambiguous, cycle back within the CEO perspective to clarify.

Do not proceed to implementation with unresolved ambiguity, because the engineer perspective will resolve it implicitly, and implicit resolutions are where scope creep originates. The output is an approved specification that you are confident about.

> **Pro tip:** A useful completeness test: for each acceptance criterion, can you describe the exact test (manual or automated) that would verify it? If you cannot, the criterion is too vague.

### Step 4: Step 4: Switch to the engineer perspective for implementation

Invoke the engineer role via gstack slash command. Provide the approved specification and ask the engineer to propose an implementation approach before writing code. The engineer should identify which files will be modified, what the key architectural decisions are, and where the riskiest parts of the implementation lie. Once you approve the approach, the engineer writes the code.

During implementation, the engineer may discover that the specification is incomplete or that a better approach requires changing scope. When this happens, the engineer must flag the issue explicitly rather than making the trade-off silently. You then decide whether to return to the CEO perspective for a scope adjustment or to proceed within the current constraints. The output is working code plus any notes about specification gaps or trade-off requests.

> **Pro tip:** If the engineer perspective suggests expanding scope, write down the exact expansion in the task brief before deciding. Seeing the scope change in writing next to the original specification makes it much easier to evaluate whether the expansion is genuinely necessary or just attractive.

### Step 5: Step 5: Capture implementation decisions and rationale

Before switching to QA, document what the engineer perspective built and why. This includes any deviations from the specification (even minor ones), architectural choices that future developers should understand, and any known limitations of the current implementation. This documentation serves two purposes: it gives the QA perspective specific things to verify, and it creates a decision log for the team. Write this as inline code comments for tactical decisions and as a separate summary for strategic ones.

The output is an annotated implementation with a clear record of what was built and what assumptions were made.

> **Pro tip:** Pay special attention to documenting what the engineer chose NOT to do and why. These "negative decisions" are the most commonly lost knowledge in development workflows.

### Step 6: Step 6: Switch to the QA perspective for verification

Invoke the QA role via gstack slash command. Provide the QA perspective with three inputs: the original CEO specification, the engineer's implementation notes, and access to the code itself. The QA perspective should systematically verify each acceptance criterion from the specification. Beyond functional correctness, QA should examine edge cases (empty inputs, maximum values, concurrent access), error handling paths (what happens when dependencies fail), security considerations (input validation, authorization checks), and performance characteristics.

The QA perspective produces a verification report: a list of items checked, their status (pass, fail, concern), and specific findings. Each finding should reference the relevant code location and the acceptance criterion it relates to.

> **Pro tip:** Ask the QA perspective to generate specific test cases, not just opinions. A finding like "the error handling might be weak" is not actionable. A finding like "calling this endpoint with an empty array returns a 500 instead of a 400 because line 47 does not check for empty input" is actionable.

### Step 7: Step 7: Triage QA findings and iterate

Review the QA report and classify each finding as: fix now (blocks merge), fix later (create a ticket), or accept (known limitation, documented). For fix-now items, return to the engineer perspective with the specific finding and ask for a targeted fix. Do not rewrite the entire implementation. Once the fix is applied, return to QA for re-verification of the specific finding.

This cycle may repeat 2-4 times for a substantial feature. The discipline is to keep each cycle tight and focused: one finding, one fix, one re-verification. The output is a clean QA report where all fix-now items are resolved.

> **Pro tip:** Resist the urge to batch all QA findings into a single engineer pass. Fixing multiple issues at once often introduces new issues. Sequential fix-verify cycles are slower per finding but faster overall.

### Step 8: Step 8: Produce the final session summary

After all three perspectives have completed their work and the QA gate is passed, produce a session summary. This document includes: the original task brief, the CEO specification (including scope exclusions), the engineer's key decisions and rationale, the QA verification report, and any tickets created for deferred work. Store this summary alongside the code change (in a PR description, a commit message body, or a linked document). Over time, these summaries create a searchable decision log that answers "why did we build it this way" months later.

The output is a complete, self-contained record of the development session.

> **Pro tip:** Template this summary format once and reuse it. Consistency across sessions makes the decision log searchable and comparable.

## Best Practices

- Make perspective transitions explicit and visible. When switching from CEO to engineer, say so out loud in the conversation and restate the context from the new perspective's point of view. Silent transitions cause blended thinking, which is the exact failure mode this system is designed to prevent. If you find yourself thinking about business priorities while writing code, you have silently returned to the CEO perspective without acknowledging it.
- Keep the CEO perspective's specification short and testable. A specification longer than 15 bullet points usually means the task should be decomposed into multiple tasks, each with their own CEO-engineer-QA cycle. Long specifications also give the engineer too much room for interpretation, which creates drift between what was scoped and what gets built.
- Give the QA perspective access to the original specification, not just the code. QA that only examines code for technical bugs misses the most expensive category of defect: correct code that implements the wrong thing. The QA perspective should verify that the implementation matches the specification, not just that the implementation runs without errors.
- Use the CEO perspective to say no. The highest-value output of the CEO phase is often a decision to not build something, to defer it, or to dramatically reduce its scope. If your CEO perspective never rejects or reduces scope, you are not using it honestly. You are using it as a rubber stamp before jumping into the engineering work you wanted to do anyway.
- Document negative decisions (what you chose not to do) with the same rigor as positive decisions. Six months from now, someone will ask why a particular edge case is not handled. If the CEO perspective explicitly excluded it and the rationale is documented, that question takes 30 seconds to answer. If it is not documented, it takes 30 minutes of archaeology and might result in unnecessary rework.
- Scale the formality to the task size. A one-line bug fix does not need a full three-perspective cycle. A new feature that touches three services does. Use your judgment, but bias toward more structure when uncertain. The overhead of a lightweight CEO-engineer-QA cycle on a simple task is 5-10 minutes. The cost of skipping it on a task that turns out to be complex is hours or days of rework.
- Rotate which perspective you challenge most aggressively. If you always defer to the CEO and always challenge the QA, your system develops a predictable blind spot: overly ambitious scope with insufficient verification. Periodically push back hard on CEO decisions and give QA findings extra weight.

## Common Mistakes

- **Blending perspectives by asking the AI agent to "build this feature and also check if it's a good idea"** — This is the most common failure and it defeats the entire purpose of multi-agent perspectives. When you ask for scoping and implementation in the same prompt, the agent optimizes for the thing it is best at (writing code) and gives minimal attention to the thing that requires judgment (scoping). You can spot this happening when the agent's response starts with one sentence of analysis followed by three paragraphs of code. Fix it by invoking the CEO perspective first with a prompt that explicitly forbids code output.

Only after the specification is approved do you switch to the engineer perspective.
- **Treating the QA perspective as optional or advisory rather than as a gate** — This happens when developers are under time pressure and feel confident about their implementation. " The findings never get fixed. The QA perspective only creates value if it can block a merge. If you find yourself routinely overriding QA findings, either your QA prompts are generating low-value noise (fix the prompts) or you are rationalizing away real issues (slow down).

Track the percentage of QA findings you act on. If it drops below 50%, your QA phase is theater.
- **Using the CEO perspective to gold-plate specifications instead of constraining scope** — Some developers unconsciously use the CEO perspective to justify building more, not less. The specification grows to 25 bullet points with nice-to-have features framed as requirements. This happens because the developer already knows what they want to build and reverse-engineers a specification to justify it. The diagnostic signal is a CEO specification that reads like a feature wishlist rather than a prioritized, constrained scope.

Fix it by requiring the CEO perspective to explicitly rank all items by priority and draw a line: everything below this line is out of scope for this session.
- **Skipping the context-gathering step and jumping straight into the CEO perspective without a task brief** — Without a written task brief, each perspective constructs its own understanding of the task from conversation history, and those understandings diverge. The CEO scopes one thing, the engineer builds a slightly different thing, and the QA verifies against yet another interpretation. This shows up as QA findings that the engineer dismisses as "not what we were building" and scope disputes that waste time. Always write the task brief first.

It takes 5 minutes and prevents 30 minutes of misalignment.
- **Running all three perspectives in a single, continuous conversation without resetting context** — Long conversations cause AI agents to lose track of earlier context and to anchor on recent output. By the time you reach QA in a 50-message conversation, the agent may have forgotten specific details of the CEO specification. This produces superficial QA that checks the code against recent memory rather than against the original specification. Fix it by providing the QA perspective with a fresh copy of the CEO specification and the engineer's implementation notes, either by referencing the task brief file or by explicitly restating the specification at the start of the QA phase.
- **Applying the full three-perspective cycle to every single change, including trivial ones** — A developer who runs CEO-engineer-QA on a typo fix or a dependency version bump will quickly burn out on the process and abandon it entirely, including for the complex tasks where it provides massive value. Use a simple heuristic: if the change touches logic, state, or user-facing behavior, use the full cycle. If it is purely mechanical (formatting, renaming, version bumps), skip it. When in doubt, run a lightweight version where each perspective gets one prompt rather than a full exploration.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/gstack-framework/METHOD.md) — gstack Framework

## Related Skills

- [Customizing and Extending gstack with Your Own Skills](../customizing-and-extending-gstack-skills/SKILL.md)
- [Orchestrating gstack's 8 Power Tools in Complex Workflows](../orchestrating-power-tools-in-gstack-workflows/SKILL.md)
- [Comparing gstack to Other AI Coding Agent Frameworks](../comparing-gstack-to-other-ai-coding-frameworks/SKILL.md)
- [Installing and Configuring the gstack Skill Pack](../installing-and-configuring-gstack-skill-pack/SKILL.md)
- [Structuring AI Coding Sessions from Decision-Making to Execution](../structuring-ai-coding-sessions-with-gstack-phases/SKILL.md)
- [Navigating gstack's 23 Specialist Skills via Slash Commands](../navigating-gstack-slash-commands-and-specialist-skills/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
