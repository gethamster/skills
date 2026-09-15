---
name: navigating-gstack-slash-commands-and-specialist-skills
description: "This skill teaches you to discover, invoke, and chain gstack's 23 specialist slash commands so you can route discrete tasks like planning, scaffolding, refactoring, and debugging to purpose-built AI skills instead of relying on generic prompts."
metadata:
  method: gstack-framework
---

# Navigating gstack's 23 Specialist Skills via Slash Commands: A gstack Framework Tutorial

> This skill teaches you to discover, invoke, and chain gstack's 23 specialist slash commands so you can route discrete tasks like planning, scaffolding, refactoring, and debugging to purpose-built AI skills instead of relying on generic prompts.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 30-45 minutes |
| Outcome | You can fluently discover any gstack slash command, invoke it with the right context, and chain multiple commands together to move a feature from initial decision through implementation and review without dropping back to generic prompting. |
| Prerequisites | Claude Code or another compatible AI coding agent installed and running, The gstack skill pack installed in your project (see installing-and-configuring-gstack-skill-pack), Basic comfort with terminal commands and slash-command interfaces, A working project repository where you can test commands safely |
| Part of | [gstack Framework](../../methods/gstack-framework/METHOD.md) |

## Overview

Every AI coding agent accepts freeform prompts, but freeform prompts put the entire burden of structure on you. You have to remember what context to provide, what perspective to request, and what output format you need. The [gstack Framework](https://tryhamster.com/methods/gstack-framework) solves this by packaging 23 specialist skills into slash commands, each tuned for a single category of work: planning, scaffolding, refactoring, debugging, documentation, testing, and more. When you invoke a slash command instead of writing a raw prompt, the agent loads a pre-written system prompt that sets the right persona, requests the right inputs, and produces a predictable output artifact. This skill teaches you how to navigate that command library so you always reach for the right tool.

The concrete artifact you produce by the end of this skill is a personal reference sheet mapping every slash command to its purpose, its required inputs, and the downstream command it typically feeds into. That reference sheet eliminates the trial-and-error phase most developers go through when they first adopt gstack. Instead of guessing which command handles database migrations versus which one handles API route scaffolding, you have a lookup table you can consult in seconds.

Within the broader gstack workflow, this skill is the foundation layer. Before you can [orchestrate power tools](https://tryhamster.com/skills/orchestrating-power-tools-in-gstack-workflows) or [apply multi-agent perspectives](https://tryhamster.com/skills/using-multi-agent-perspectives-for-development), you need to know which commands exist and what each one expects. Think of this as learning the instrument panel before flying the plane. The commands themselves are simple to run, but choosing the right command at the right moment is the difference between a structured, reviewable development session and a messy back-and-forth with a generic chatbot. Success looks like reaching a point where you instinctively know which slash command to invoke for any task that comes up during a coding session, without pausing to check documentation.

## How It Works

Slash commands in gstack work as routing keys. When you type a slash command, the agent does not simply append your text to a generic prompt. Instead, it loads a dedicated skill file from the .gstack/skills directory. That file contains a system-level instruction set specifying the persona the agent should adopt (architect, debugger, documentation writer), the inputs it should ask for if you did not supply them, the reasoning steps it should follow, and the format of the output it should produce. This is why a slash command for scaffolding produces a file tree and boilerplate code, while a slash command for debugging produces a root-cause analysis and a targeted fix. The skill file does the heavy lifting of prompt engineering so you do not have to.

The 23 specialist skills are organized into functional categories that mirror the phases of a development session. Planning commands help you make architectural decisions, define scope, and break work into tasks. Scaffolding commands generate boilerplate, directory structures, and initial file content. Implementation commands handle writing logic, connecting components, and wiring integrations. Quality commands cover testing, linting, refactoring, and code review. Documentation commands produce READMEs, inline comments, and API references. This categorical structure means you rarely need to memorize all 23 names. You just need to know which category your current task falls into and then scan the two to five commands in that category.

Chaining is where the real leverage appears. Each command produces an output artifact, and that artifact becomes the input context for the next command. For example, a planning command might produce a task list. You then invoke a scaffolding command and paste or reference that task list. The scaffolding command produces file stubs. You invoke an implementation command to fill in the logic. Finally, a quality command reviews the result. This sequential flow is what the [gstack Framework](https://tryhamster.com/methods/gstack-framework) calls the decision-to-execution pipeline, and it is the reason the framework encodes 23 discrete skills rather than one monolithic "do everything" prompt. Each step is small enough to verify before moving to the next, which keeps errors from compounding.

The mental model to internalize is: one task, one command, one artifact. If you find yourself writing a long, multi-part prompt asking the agent to plan, scaffold, and implement all at once, you are bypassing the command structure and losing the benefits of discrete verification. The skill files are designed to produce focused, reviewable outputs. Trust the granularity.

## Step-by-Step Guide

### Step 1: Step 1: List all available slash commands

Open your terminal in a project that has the gstack skill pack installed. Run the discovery command (typically /gs-list or /gs-help) to display every available slash command along with a one-line description. gstack/skills directory and read the filenames. Each filename corresponds to a slash command.

Copy the full list into a scratch document, because you will annotate it in the next steps. Confirm that you see approximately 23 entries. If you see fewer, your installation may be incomplete.

> **Pro tip:** If your agent supports tab completion after the slash prefix, type /gs- and press tab twice to see all available completions. This is faster than reading directory listings.

### Step 2: Step 2: Categorize commands by development phase

Take your list of 23 commands and group them into five or six categories: planning, scaffolding, implementation, quality, documentation, and utility. Read the one-line description of each command and assign it to a category. Some commands may feel ambiguous, such as a refactoring command that could sit in either implementation or quality. Assign it to whichever phase you would invoke it during your own workflow.

The goal is not a perfect taxonomy but a mental map you can scan quickly. Write the categories as headers in your scratch document and move each command under its header.

> **Pro tip:** Most developers find that planning and quality categories each contain three to five commands, while scaffolding and documentation contain two to three each. If one category has more than six commands, you may be lumping two phases together.

### Step 3: Step 3: Read the skill file for one command in each category

gstack/skills directory. Read the full system prompt. , senior architect, QA engineer), the inputs it expects you to provide, the reasoning chain it instructs the agent to follow, and the output format it specifies. Write these four items next to the command in your reference sheet.

This deep read takes about two minutes per skill file and gives you a much stronger understanding of what the command actually does versus what you might guess from its name alone.

> **Pro tip:** Pay attention to the persona field. A command named something like /gs-review might invoke a QA persona that is deliberately adversarial, which means you should expect critical feedback, not encouragement. Knowing the persona prevents surprise.

### Step 4: Step 4: Invoke a planning command on a real task

Choose a feature or change you are currently working on. Invoke one of the planning-category commands and provide a clear description of the feature. Observe the output: it should be a structured artifact such as a task breakdown, an architectural decision record, or a scope document. " Note the differences in structure, specificity, and actionability.

If the output asks follow-up questions you did not anticipate, that is by design. The skill file is prompting the agent to gather the inputs it needs before producing a result.

> **Pro tip:** Resist the urge to over-specify your initial prompt. Let the command's built-in questions guide you. Over-specifying can conflict with the skill file's own structure and produce messy outputs.

### Step 5: Step 5: Chain the planning output into a scaffolding command

Take the artifact produced by the planning command and use it as input for a scaffolding command. You can do this by pasting the relevant section of the planning output into your next slash command invocation, or by referencing the file if the planning command saved its output. The scaffolding command should produce file stubs, directory structures, or boilerplate code that corresponds to the plan. Verify that the scaffold aligns with the plan.

If it diverges, check whether you provided enough context from the planning step. This two-step chain is the simplest example of the decision-to-execution pipeline.

> **Pro tip:** If the scaffolding output misses a component from the plan, re-invoke the scaffolding command with just the missing component rather than regenerating everything. Smaller, focused invocations produce more reliable results than large, comprehensive ones.

### Step 6: Step 6: Test a quality command against existing code

Switch to a quality-category command such as a code review or refactoring command. Point it at a file or module you have already written, not the scaffolded output from the previous step. This lets you see how quality commands behave independently of the planning-scaffolding chain. Read the output carefully.

Quality commands typically produce a list of issues ranked by severity, along with suggested fixes. Note whether the output includes reasoning for each suggestion. Good reasoning helps you decide which suggestions to accept and which to skip.

> **Pro tip:** Run the same quality command on two files of different quality levels. Comparing the outputs helps you calibrate your expectations and understand the command's sensitivity threshold.

### Step 7: Step 7: Document the input-output contract for each command

Return to your reference sheet and add two columns: expected input and expected output. , a task list, a file tree, a diff). You can fill most of these from the skill files you read in Step 3. For commands you have not read deeply, make a best guess from the name and description, then mark it with a question mark so you know to verify later.

This document becomes your operational lookup table.

> **Pro tip:** Add a third column for the typical next command in the chain. For example, a planning command's "next" column might say "scaffolding" or "implementation." This column turns your reference sheet into a workflow map.

### Step 8: Step 8: Run a full three-command chain on a small task

Pick a small, low-risk task such as adding a utility function, creating a new API endpoint, or writing a test suite for an existing module. Run a planning command to define the approach, a scaffolding or implementation command to generate the code, and a quality command to review the result. Complete the entire cycle without resorting to any generic prompts. Time yourself.

The first full chain typically takes 15 to 20 minutes. Note any friction points where you were unsure which command to use or how to pass context between commands. These friction points are what you will smooth out with practice.

> **Pro tip:** If you get stuck choosing between two commands, invoke the one with the narrower scope. Narrow commands produce more focused outputs, and you can always invoke the broader command afterward if you need more coverage.

### Step 9: Step 9: Finalize your personal reference sheet

Review your scratch document and clean it up into a permanent reference. Organize by category, include the slash command name, one-line purpose, expected input, expected output, persona, and typical next command. Save this file somewhere accessible during coding sessions, such as in your project's docs directory or pinned in your notes app. Update it as you discover nuances through repeated use.

This reference sheet is the primary artifact of this skill and the foundation for more advanced gstack techniques like power tool orchestration and multi-agent perspective sessions.

> **Pro tip:** Share your reference sheet with teammates adopting gstack. Seeing a peer's annotations and workflow patterns accelerates onboarding far more than reading the official documentation alone.

## Best Practices

- Invoke one command per task, not one command per session. The 23 commands are designed to be granular. If you try to combine planning and implementation into a single invocation, you bypass the verification checkpoint between them, and errors in the plan propagate silently into the code. One command, one artifact, one review.
- Read the skill file before relying on a command for high-stakes work. The name and one-line description give you a rough idea, but the full skill file reveals the persona, the reasoning chain, and the output format. Misunderstanding any of these leads to outputs that feel wrong, and you end up blaming the tool instead of adjusting your input.
- Pass explicit context between chained commands rather than assuming the agent remembers. Many agents have limited context windows or reset between invocations. Copy the relevant artifact from the previous command's output and paste it into the next command's prompt. This ensures continuity even if the agent's memory is cleared.
- Start new adopters with the planning and quality categories before scaffolding and implementation. Planning commands teach you how gstack structures thinking, and quality commands show you the standard it holds code to. Once you understand both, the scaffolding and implementation commands make much more sense because you know what they are building toward.
- Keep your reference sheet updated as gstack releases new skills or you customize existing ones. An outdated reference sheet is worse than no reference sheet because it gives you false confidence. Add a calendar reminder to audit the .gstack/skills directory monthly and reconcile it with your document.
- Use the narrowest applicable command rather than the broadest one. A command specifically designed for database migrations will produce better migration files than a general scaffolding command asked to "also handle the database." Specificity in command selection translates directly to quality in output.
- Time your command chains to establish baselines. Knowing that a plan-scaffold-review chain takes you 18 minutes for a typical endpoint lets you estimate work accurately and identify when a chain is taking too long, which usually means you chose the wrong command or provided insufficient context.

## Common Mistakes

- **Using a generic prompt instead of a slash command because the right command is not immediately obvious** — This happens when developers have not categorized the commands by development phase. Without a mental map, every task feels like it could go to any command, so they default to freeform. The fix is to build the categorized reference sheet described in Step 2. When you are unsure, scan the three to five commands in the relevant category rather than abandoning the command structure entirely.

Generic prompts lose the persona, reasoning chain, and output format that make gstack outputs reliable.
- **Chaining too many commands without reviewing intermediate outputs** — Some developers get excited about the pipeline concept and invoke five or six commands in rapid succession without reading the outputs. This defeats the purpose of discrete verification. The signal to watch for is when the final output contains contradictions or references components that do not exist. When you see this, trace back to find which intermediate artifact went wrong.

Always read and approve each output before using it as input for the next command.
- **Providing too much context in a single invocation, overriding the skill file's own structure** — Developers accustomed to long, detailed prompts sometimes write multi-paragraph instructions alongside the slash command. This can conflict with the skill file's built-in instructions, causing the agent to produce hybrid outputs that follow neither your instructions nor the skill file's. The fix is to keep your input focused on the what (what you want done) and let the skill file handle the how (the process and format). If you consistently need to override a skill file, that is a signal to customize it rather than fight it on every invocation.
- **Assuming all 23 commands are equally relevant to every project** — Some commands target specific workflows like mobile development, API design, or data pipeline construction. Invoking a command outside its intended domain produces vague or generic outputs. The symptom is an output that reads like a textbook summary rather than an actionable artifact. Check the skill file's persona and intended use case before invoking a command on a project type it was not designed for.

If you need coverage for a domain gstack does not have a command for, look into customizing and extending gstack skills.
- **Memorizing command names instead of understanding command purposes** — Rote memorization breaks down when gstack updates, renames, or adds commands. Developers who memorized names instead of purposes find themselves lost after an update. The fix is the reference sheet approach: annotate each command with its purpose, input, output, and persona. When a command name changes, you can match the new name to the purpose you already understand.

This also makes it easier to teach teammates, because you explain the purpose rather than reciting a name they will forget.

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
- [Structuring AI Coding Sessions from Decision-Making to Execution](../structuring-ai-coding-sessions-with-gstack-phases/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
