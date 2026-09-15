---
name: installing-skill-files-in-ai-coding-agents
description: "This skill teaches you how to set up and configure Taste Skill SKILL.md instruction files inside AI coding agents like Cursor, Claude Code, Codex, Gemini CLI, and v0 so that every frontend generation follows design-quality rules instead of producing generic, sloppy UI."
metadata:
  method: taste-skill-frontend-design-framework
---

# Installing Taste Skill Claude SKILL.md Files in AI Coding Agents

> This skill teaches you how to set up and configure Taste Skill SKILL.md instruction files inside AI coding agents like Cursor, Claude Code, Codex, Gemini CLI, and v0 so that every frontend generation follows design-quality rules instead of producing generic, sloppy UI.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 15-30 minutes per agent |
| Outcome | Your AI coding agent will read Taste Skill design rules on every prompt, producing UI with intentional typography, spacing, layout density, and motion instead of the generic defaults that make AI-generated frontends look identical. |
| Prerequisites | A working AI coding agent (Cursor, Claude Code, Codex, Gemini CLI, or v0), A frontend project repository with at least one UI component or page, Basic comfort with file system operations (creating folders, copying files), Familiarity with markdown file format |
| Part of | [Taste Skill Frontend Design Framework](../../methods/taste-skill-frontend-design-framework/METHOD.md) |

## Overview

Every AI coding agent has a mechanism for persistent instructions: files that the agent reads before it processes your prompt, shaping its behavior across every generation. The [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework) is built entirely around this mechanism. It packages design-quality rules into portable SKILL.md files that you drop into the right directory, and from that point forward, your agent treats those rules as constraints on every piece of frontend code it writes. Without this installation step, none of the framework's benefits activate. Your agent will keep producing the same padded, generic, same-font-everywhere UI that every other agent produces.

The installation process is different for each agent because each tool has its own convention for where persistent instructions live. Claude Code reads from `.claude/` and `CLAUDE.md`. Cursor reads from `.cursor/rules/`. OpenAI Codex reads from `AGENTS.md`. Gemini CLI reads from `GEMINI.md`. v0 reads from project-level instructions or pasted context. The skill here is not just knowing these paths, but understanding how each agent prioritizes, merges, and applies instruction files so that your taste rules actually take effect and do not get silently ignored or overridden by conflicting instructions.

The concrete artifact you produce is a configured project where running any frontend prompt through your agent yields output shaped by Taste Skill rules. You will know installation succeeded when you can prompt your agent to build a simple component (a card, a settings page, a pricing table) and the result shows tighter spacing, deliberate type hierarchy, and visual density that looks like a human designer reviewed it. If the output still looks like a generic Tailwind template with py-8 padding on everything, something in your installation needs adjustment.

This skill is the entry point for the entire framework. Once installed, you can layer in sibling skills like [enforcing typography and spacing standards](https://tryhamster.com/skills/enforcing-typography-and-spacing-standards), [configuring layout and visual density constraints](https://tryhamster.com/skills/configuring-layout-and-visual-density-constraints), and [adding motion and interaction taste rules](https://tryhamster.com/skills/adding-motion-and-interaction-taste-rules). But none of those matter if the files are not in the right place and being read by your agent.

## How It Works

AI coding agents operate on a layered instruction model. At the bottom layer is the model's training data, which includes millions of UI examples. On top of that sits the system prompt, which the agent provider controls. On top of that sit your persistent project instructions, which is where SKILL.md files live. Finally, on top of everything is your per-prompt instruction, the actual thing you type. Each layer can override or refine the layers below it, but persistent project instructions have a special property: they apply to every prompt without you needing to repeat them. This is what makes them so powerful for design quality. You are not relying on yourself to remember to say "use tighter spacing" every time. The agent remembers for you.

The reason taste skill claude instruction files work is that they exploit a known weakness in LLM-generated UI. Without constraints, models default to the most statistically common patterns in their training data. For frontend code, that means Bootstrap-like padding, system font stacks or generic sans-serif, 16px body text with no type scale, equal spacing everywhere, and no visual hierarchy beyond font-weight bold. These defaults are not wrong, they are just average. SKILL.md files replace that average with specific, opinionated rules: a modular type scale, a spacing system tied to a base unit, density targets for different component types, and motion constraints that prevent gratuitous animation.

The [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework) organizes these rules into separate SKILL.md files by domain (typography, spacing, layout, motion, review). Each file is self-contained. You can install all of them for comprehensive coverage or start with just one. The agent reads them as a set of hard constraints, similar to how a linter config constrains code style. The key mental model is: SKILL.md files are not suggestions. They are rules the agent must follow unless your prompt explicitly overrides them.

Different agents handle file discovery differently, and this is where installation gets specific. Some agents (Claude Code) walk the directory tree upward from the current file and merge every instruction file they find. Others (Cursor) read only from a specific folder. Some (v0) have no file system at all and require pasting instructions. Understanding your agent's discovery mechanism is essential because a SKILL.md file in the wrong directory is the same as no file at all. The agent will not tell you it missed a file. It will simply generate UI without those constraints, and you might not notice the difference until you compare output side by side.

One subtlety worth understanding: instruction files can conflict. If you have a SKILL.md that says "use 4px base spacing unit" and another project-level instruction that says "use Tailwind defaults," the agent will try to reconcile them, often by following whichever instruction appeared last or seemed more specific. This is why installation includes a verification step. You need to confirm that your taste rules are actually winning the priority contest inside your agent's instruction stack.

## Step-by-Step Guide

### Step 1: Step 1: Identify your AI coding agent and its instruction file convention

Before you touch any files, confirm exactly which agent you are using and look up its instruction file convention. claude/` directory. cursor/rules/` as individual rule files in markdown format. md` files in subdirectories for scoped instructions.

md` in the project root. v0 from Vercel does not use a file system for instructions but accepts instructions pasted into the project context panel. Write down your agent, its instruction path, and whether it supports multiple instruction files or only one. This determines everything about how you structure the installation.

> **Pro tip:** If you use multiple agents on the same project (for example, Claude Code for backend and Cursor for frontend), you will need to install the files in both locations. The files themselves are identical. Only the directory path changes.

### Step 2: Step 2: Obtain the Taste Skill SKILL.md files

md files from the Taste Skill repository or documentation. The framework distributes files by domain: typography, spacing, layout-density, motion, and review. Each file is a standalone markdown document containing rules, constraints, and examples that the agent can parse. Download or copy the files you want to install.

If you are starting fresh, begin with the typography and spacing file, because those two domains have the highest impact on perceived design quality. You can add layout-density, motion, and review files later. Store the downloaded files in a temporary location while you prepare the target directories.

> **Pro tip:** Read through each SKILL.md file before installing it. You may want to customize thresholds, like base spacing unit or type scale ratio, to match an existing design system. Making these edits before installation saves you from having the agent generate output you immediately need to override.

### Step 3: Step 3: Create the instruction directory if it does not exist

In your project repository, create the directory that your agent expects. md` at the root. cursor/rules/` if that directory tree does not exist. md` at the project root.

md` at the root. If the directory already exists and contains other instruction files, open those files and read them. You need to check for conflicts: any existing instruction that specifies spacing, typography, font sizes, or padding values might conflict with the Taste Skill rules. Note any conflicts you find, because you will resolve them in the next step.

> **Pro tip:** Add the instruction directory to your version control. These files are project configuration, not personal preferences. Every developer on the team should get the same taste rules when they pull the repo.

### Step 4: Step 4: Install the SKILL.md files into the correct location

md files into the directory you identified. md` under a clear heading like `## Design Quality Rules`. cursor/rules/` with descriptive names. Cursor treats each file as an independent rule, so separation by domain works well.

md` under clearly marked sections. md` as a single document, so use markdown headings to separate domains. md` with section headings. For v0, you will paste the content into the project instructions panel in the v0 interface during your next session.

> **Pro tip:** Name your files with a consistent convention like `taste-typography.md`, `taste-spacing.md`, `taste-layout.md`. This makes it obvious which rules come from Taste Skill versus other instruction sources, and makes removal or updates straightforward.

### Step 5: Step 5: Resolve conflicts with existing instructions

If you found conflicting instructions in Step 3, resolve them now. " These generic instructions will fight with Taste Skill's specific spacing and typography rules. The resolution is usually to remove the generic instruction and let the Taste Skill rules be the authority on spacing, type, and layout. md files to reference your tokens instead of the framework defaults.

" The goal is a single, non-contradictory set of design instructions. If two instructions disagree, the agent will pick one unpredictably.

> **Pro tip:** A quick way to detect conflicts is to search all instruction files for keywords like 'padding', 'margin', 'font-size', 'spacing', 'gap', and 'border-radius'. Any existing rule mentioning these terms is a potential conflict with Taste Skill.

### Step 6: Step 6: Verify the agent is reading the files

Open your agent and start a new conversation or session in the project directory. " A properly configured agent will reference the taste rules you installed. If the agent responds with generic information or says it has no specific design rules, the files are not being read. Check the file path, file extension, and directory name.

md`), or the file is outside the project root that the agent is scoped to. Fix the issue and test again until the agent can describe the rules back to you.

> **Pro tip:** Claude Code has a helpful diagnostic: run `/config` or ask "What files are in my project instructions?" to see exactly which instruction files were loaded. Other agents are less transparent, so the "summarize the rules" test is your best verification method.

### Step 7: Step 7: Run a smoke test with a simple UI component

Prompt your agent to generate a simple, self-contained UI component. A good test is a user profile card or a pricing table, because these components expose typography hierarchy, spacing decisions, padding, and visual density all at once. Do not include any design instructions in your prompt. Just say "Build a user profile card component" and let the agent work from the installed rules alone.

Examine the output. Check for specific signals: Is there a visible type scale (heading noticeably larger than body, with a clear step between sizes)? Is the padding tighter than the typical generous defaults? Are spacing values consistent and based on a grid?

Is there any gratuitous animation? md files. If you see no meaningful difference, the rules are either not being read or are being overridden by something else in the instruction stack.

> **Pro tip:** Save the output of this smoke test. It becomes your baseline for measuring improvement as you add more SKILL.md files or tune the existing ones. Screenshot the rendered component or save the generated code in a test file.

### Step 8: Step 8: Commit and document the installation for your team

Add the instruction files and directories to version control. Write a brief note in your project README or contributing guide explaining that the project uses Taste Skill instruction files for AI-assisted frontend development. Include the file locations, the purpose of each file, and instructions for any teammate who needs to update the rules. This documentation matters because a teammate who does not understand the files might delete them, move them, or add conflicting instructions.

cursor/rules/ to enforce design quality when using AI coding agents. Do not modify these files without reviewing the Taste Skill documentation" is sufficient. If your team uses multiple agents, document which directories map to which agents.

> **Pro tip:** Consider adding a pre-commit hook or CI check that verifies the SKILL.md files still exist and have not been accidentally deleted. A simple check like "does .cursor/rules/taste-typography.md exist" catches accidental removal before it hits production.

## Best Practices

- Install one SKILL.md file at a time and verify its effect before adding the next. If you drop five files in at once and the output looks wrong, you cannot tell which file is causing the problem. Start with typography, verify it works, then add spacing, then layout density. This incremental approach takes slightly longer but produces a reliable, debuggable configuration.
- Keep SKILL.md files under version control and treat them as project configuration, not personal dotfiles. When one developer has taste rules installed and another does not, the same prompt produces different output, which creates inconsistency in the codebase. Committing the files to the repo ensures every team member and every CI pipeline gets the same design constraints.
- Review and update SKILL.md files quarterly, or whenever your design system changes. Stale rules that reference old spacing tokens or deprecated component patterns will cause the agent to generate code that does not match your current system. Set a calendar reminder or tie the review to your design system's release cycle.
- Use explicit, specific rules rather than aspirational language. "Use a 1.25 type scale ratio with 16px base" is a rule the agent can follow. "Make the typography feel premium" is a vibe the agent will interpret unpredictably. Every rule in a SKILL.md file should be testable: you should be able to look at the generated code and say definitively whether the rule was followed or not.
- Test your installation against at least three different component types (a form, a card, and a data table) before considering it complete. Different component types stress different rules. A card tests spacing and hierarchy. A form tests label alignment and input density.

A data table tests information density and column spacing. If the rules work for all three, they will work for most components.
- When using agents that support scoped instructions (like Codex's directory-level AGENTS.md), place general taste rules at the project root and component-specific overrides in subdirectories. For example, your root AGENTS.md contains global typography and spacing rules, while a `/components/dashboard/AGENTS.md` adds density rules specific to dashboard widgets. This mirrors how design systems scope tokens by context.
- Do not duplicate rules across multiple instruction files. md specify font sizes, the agent receives conflicting signals. Each domain file should own its domain exclusively. Typography owns type scale, font family, and line height.

Spacing owns margin, padding, and gap. If a rule touches two domains, put it in whichever domain is primary and reference the other.

## Common Mistakes

- **Placing SKILL.md files in the wrong directory or using the wrong file name convention** — This is the most common installation failure and it is completely silent. The agent does not throw an error when it cannot find instruction files. It simply operates without them. The telltale sign is output that looks identical to what the agent produces in any project without custom instructions: generous padding, no type scale, default border-radius values.

Fix it by verifying the exact directory path your agent expects. md`. cursor/rules/`. Spell them exactly, including the leading dot and correct casing.
- **Installing all SKILL.md files but leaving conflicting instructions from a previous setup** — This surfaces as inconsistent output: sometimes the agent follows taste rules, sometimes it does not, and sometimes it produces a confusing hybrid. The root cause is that the agent is trying to reconcile two contradictory instructions, like a SKILL.md saying "4px base spacing" and an older instruction saying "use Tailwind's default spacing scale." Search all instruction files in the project for spacing, typography, and layout keywords. Remove or update any rule that conflicts with the Taste Skill files. After cleanup, run the smoke test again to confirm consistent output.
- **Pasting SKILL.md content into a per-prompt message instead of a persistent instruction file** — md content into their chat prompt because they are unsure about file-based installation. This works for a single generation but fails on the next prompt because per-prompt context does not persist. The agent forgets the rules as soon as the conversation moves on. You will notice this when the first component looks good but subsequent components in the same session revert to generic defaults.

The fix is always file-based installation for agents that support it. For v0, which does not have a file system, paste the content into the project-level instructions panel (not the chat input), which persists across prompts within that project.
- **Writing SKILL.md rules in vague, aspirational language instead of specific constraints** — Rules like "create beautiful, well-designed interfaces" or "follow good design principles" give the agent no actionable constraint. The output will look exactly the same as without the rule, because the agent already attempts to produce "good" output by default. md files are installed and being read (the agent can summarize them), but the output shows no improvement. Replace every aspirational rule with a specific, measurable constraint.

Instead of "use good spacing," write "use a 4px base spacing unit. Component internal padding should be 12px or 16px. Section spacing should be 24px or 32px.
- **Not verifying installation with a smoke test** — Many developers install the files, see them in the directory, and assume they are working. But file presence does not guarantee file reading. The agent might be scoped to a different directory, the file might have a parsing error that causes it to be silently skipped, or another instruction file might be overriding the taste rules. Always run the two-part verification: first, ask the agent to describe its loaded rules.

Second, generate a test component and inspect the output for specific signals of the taste rules (type scale, spacing values, density). Skipping this step means you might develop for days or weeks without the rules actually being applied.
- **Installing taste rules only on one developer's machine in a team project** — md files are not committed to version control, only the developer who installed them gets design-quality output. Other team members, and any CI/CD pipeline using AI agents, produce generic output. Over time, the codebase accumulates a mix of taste-constrained and unconstrained components, creating visual inconsistency. The fix is straightforward: commit the instruction files and their directories to the repository.

Add a note to your README explaining the files. Treat them the same way you treat ESLint configs or Prettier settings, as shared project configuration that every contributor inherits.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/taste-skill-frontend-design-framework/METHOD.md) — Taste Skill Frontend Design Framework

## Related Skills

- [Enforcing Typography and Spacing Standards in AI-Generated UI](../enforcing-typography-and-spacing-standards/SKILL.md)
- [Adding Motion and Interaction Taste Rules](../adding-motion-and-interaction-taste-rules/SKILL.md)
- [Writing Anti-Slop Design Review Rules](../writing-anti-slop-design-review-rules/SKILL.md)
- [Configuring Layout and Visual Density Constraints for AI Agents](../configuring-layout-and-visual-density-constraints/SKILL.md)
- [Auditing AI-Generated Frontends for Design Quality](../auditing-ai-generated-frontends-for-design-quality/SKILL.md)
- [Authoring Portable SKILL.md Files for Design Systems](../authoring-portable-skill-files-for-design-systems/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
