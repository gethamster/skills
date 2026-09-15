---
name: installing-and-configuring-gstack-skill-pack
description: "This skill teaches you how to clone gstack from GitHub, wire it into your AI coding agent's command system, and configure it so all 23 specialist skills and 8 power tools are available via slash commands."
metadata:
  method: gstack-framework
---

# How to Install gstack Framework and Configure It for AI Coding Agents

> This skill teaches you how to clone gstack from GitHub, wire it into your AI coding agent's command system, and configure it so all 23 specialist skills and 8 power tools are available via slash commands.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 15-30 minutes |
| Outcome | A fully configured gstack installation where every slash command resolves correctly, your project context is loaded, and you can invoke any of the 23 specialist skills or 8 power tools from your AI coding agent's interface. |
| Prerequisites | Git installed and basic familiarity with git clone and git pull, A working AI coding agent such as Claude Code, Cursor, or Windsurf, Terminal or command-line access in your development environment, A project repository where you want to use gstack |
| Part of | [gstack Framework](../../methods/gstack-framework/METHOD.md) |

## Overview

Installing and configuring the gstack skill pack is the gateway step in the [gstack Framework](https://tryhamster.com/methods/gstack-framework). Before you can use any of the 23 specialist skills, 8 power tools, or multi-agent perspectives that make gstack useful, you need the files in the right place and your agent configured to recognize them. This skill covers the end-to-end process: cloning the repository, placing files where your agent expects them, verifying command resolution, and tuning the configuration to match your project's needs. The concrete artifact you produce is a working `.claude/commands` directory (or equivalent) populated with gstack's slash command files, plus a project context file that gives the agent baseline knowledge about your codebase.

The problem this skill solves is deceptively simple but frequently botched. Many developers clone gstack, see a wall of markdown files, and either dump them in the wrong directory or skip the context configuration entirely. The result is an agent that either cannot find the commands or finds them but lacks the project awareness to use them effectively. A misconfigured install leads to generic, context-free responses from the agent, which defeats the entire purpose of a structured skill pack. Correct installation means the agent can route your request to the right specialist skill, load the right project context, and produce output that actually fits your codebase, architecture, and conventions.

Success looks like this: you open your terminal, type a slash command like `/dev` or `/qa`, and the agent immediately responds with the structured workflow that skill defines. No "command not found" errors, no generic fallback behavior, no missing context. You should also be able to run `/help` (or the equivalent index command) and see the full menu of available skills and power tools. If you are working on a team, success also means your teammates can pull the same configuration and get identical behavior, because gstack lives inside the project repo rather than in a personal dotfile that never gets shared.

## How It Works

The gstack skill pack works by exploiting a pattern that most modern AI coding agents support: loading custom instructions from files in a well-known directory. Claude Code looks in `.claude/commands/`, Cursor uses `.cursor/rules/`, and other agents have their own conventions. When you place a markdown file in that directory, the agent treats its contents as a system prompt or instruction set that gets injected when the corresponding command is invoked. gstack is essentially a library of these instruction files, each encoding a specific workflow, perspective, or tool.

The architecture has three layers. The first layer is the command files themselves, each one a self-contained skill definition that tells the agent what role to adopt, what questions to ask, what structure to follow, and what output to produce. The second layer is the project context file, a markdown document that describes your specific project: its tech stack, architecture decisions, coding conventions, directory structure, and any constraints. This file gets referenced by the skill commands so the agent's output is grounded in your actual codebase rather than generic best practices. The third layer is the orchestration layer, which defines how power tools chain multiple skills together and how multi-agent perspectives (CEO, engineer, QA) interact within a single session.

When you invoke a slash command, the agent reads the corresponding markdown file, loads any referenced context files, and enters the mode that file defines. This is why placement matters so much. If the file is in the wrong directory, the agent never sees it. If the context file path is wrong or missing, the agent sees the skill definition but lacks the project grounding to make it useful. The [gstack Framework](https://tryhamster.com/methods/gstack-framework) treats installation as a prerequisite, not a formality, because every downstream skill depends on correct file resolution and context loading.

One important mental model: gstack is not a plugin or binary that runs separately from your agent. It is a set of structured prompts that modify your agent's behavior. There is no build step, no compilation, no runtime dependency. The "installation" is literally copying files and pointing paths correctly. This simplicity is a strength because it means gstack works with any agent that supports file-based custom commands, but it also means there is no installer to catch errors for you. If something is misconfigured, the failure mode is silent. The agent just acts like a vanilla agent without telling you it failed to load gstack. This is why the verification step in the installation process is non-negotiable.

## Step-by-Step Guide

### Step 1: Step 1: Identify Your Agent's Command Directory

Before cloning anything, determine where your AI coding agent expects custom command files to live. claude/commands/` inside your project root. cursor/rules/`. For other agents, check the documentation for custom instruction or system prompt file locations.

If you are unsure, create a test file in the candidate directory, add a simple instruction like "respond with HELLO", and see if the agent picks it up when you invoke the corresponding command. Document the exact path because you will need it in the next step. Also note whether the agent supports subdirectories within the command folder, since gstack organizes skills into categories using subdirectories.

> **Pro tip:** If you are using multiple agents on the same project, you can symlink gstack's files into each agent's command directory rather than duplicating them. This keeps a single source of truth.

### Step 2: Step 2: Clone the gstack Repository

Open your terminal and navigate to your project root. gstack-source` (or whatever the current repo URL is). gstack-source` rather than directly into the commands folder gives you a clean copy you can update with `git pull` later without worrying about merge conflicts with any local customizations. Verify the clone completed by listing the contents.

You should see directories for skills, power tools, and a project context template. If the repo structure has changed since this guide was written, read the repo's own README for the current layout.

> **Pro tip:** Add `.gstack-source/` to your project's `.gitignore` if you do not want the raw gstack source tracked in your project repo. Alternatively, add it as a git submodule if you want versioned updates.

### Step 3: Step 3: Copy or Symlink Command Files into the Agent Directory

Copy the skill and power tool markdown files from your staging directory into the agent's command directory. claude/commands/`. You have two options: a flat copy where all files go into one directory, or a structured copy that preserves gstack's subdirectory organization. The structured approach is better because it keeps skills grouped by category and makes the `/help` index more readable.

md`). After copying, count the files. You should have 23 specialist skill files and 8 power tool files, plus any index or help files. If the count is wrong, check for hidden files or a partial clone.

> **Pro tip:** Using symbolic links instead of copies means updates to the source directory propagate automatically. On macOS and Linux, use `ln -s ../../../.gstack-source/skills/ .claude/commands/skills`. On Windows, use `mklink /D`.

### Step 4: Step 4: Create and Configure the Project Context File

The project context file is what transforms gstack from a generic skill pack into a project-specific one. md`) into your project root or the location gstack's skills expect to find it. Open the template and fill in every section: project name, tech stack, architecture overview, directory structure, coding conventions, testing strategy, deployment pipeline, and any constraints or non-negotiables. Be specific.

" The more detail you provide, the more grounded the agent's output will be. Save the file and note its path, because you may need to update references in the skill files.

> **Pro tip:** If you already have an architecture decision record (ADR) or a CONTRIBUTING.md, reference or inline the relevant sections rather than writing from scratch. Existing documentation is more accurate than memory.

### Step 5: Step 5: Update Path References in Skill Files

Some gstack skill files contain relative paths that reference the project context file or other skills. md`). If the paths do not resolve correctly given your directory structure, update them. The most common issue is that the skill file assumes a specific nesting depth that does not match your layout.

md`. Test one path by asking the agent to read the context file from within a skill invocation. If the agent says it cannot find the file, the path is wrong.

> **Pro tip:** Consider using a simple find-and-replace script to update all path references at once. Something like `find .claude/commands -name '*.md' -exec sed -i 's|old/path|new/path|g' {} +` saves time and prevents inconsistencies.

### Step 6: Step 6: Verify Command Resolution

This is the most important step and the one most people skip. Open your AI coding agent in your project directory and try invoking three commands from different categories: one specialist skill (like `/dev` or `/qa`), one power tool (like `/think` or `/plan`), and the help or index command. For each one, check three things. First, does the command resolve at all, or does the agent respond with a generic answer?

Second, does the agent's behavior match the skill definition, meaning does it ask the right questions, follow the right structure, and adopt the right role? Third, does the agent reference your project context, mentioning your tech stack, conventions, or architecture? If any of these checks fail, you have a configuration issue. A command that resolves but ignores context is usually a path reference problem.

A command that does not resolve at all is a file placement problem.

> **Pro tip:** Create a simple checklist of all 23 skills and 8 power tools and check them off as you verify each one. It takes 10 minutes and catches issues that surface only with specific commands.

### Step 7: Step 7: Configure Multi-Agent Perspectives

gstack uses multi-agent perspectives (CEO, engineer, QA, and others) to structure development conversations. These perspectives are defined in configuration within the skill files or a separate perspectives file. Review the default perspective definitions and customize them for your team's actual roles and concerns. For example, if your organization has strict compliance requirements, you might add a compliance perspective or expand the QA perspective to include regulatory checks.

If you are a solo developer, you might simplify the CEO perspective to focus on scope prioritization rather than organizational strategy. The perspectives should reflect real decision-making tensions in your project, not hypothetical ones. Save your changes and test by invoking a power tool that uses multiple perspectives, verifying that each perspective's voice is distinct and relevant to your project.

> **Pro tip:** Do not create more than 5 perspectives initially. Each perspective adds cognitive overhead to the agent's output. Start with the defaults, use them for a week, then add or modify based on what is actually missing from the conversations.

### Step 8: Step 8: Set Up Update and Maintenance Workflow

gstack is an active open-source project, so new skills, refinements, and bug fixes will arrive over time. Decide now how you will handle updates. If you cloned into a staging directory, you can `git pull` to get the latest changes and then re-copy or re-sync the modified files into your commands directory. If you used symlinks, the update propagates automatically, but you should still check for new files that need linking.

If you used a git submodule, run `git submodule update --remote`. Set a calendar reminder to check for updates monthly, or watch the repository for releases. When updating, always re-run the verification step from Step 6 to confirm nothing broke. Also check the changelog for any new skills or power tools that need to be added to your command directory.

> **Pro tip:** Pin gstack to a specific git tag or commit hash in production projects. Pull and test updates on a branch before merging into your main project. This prevents a gstack update from changing agent behavior mid-sprint.

## Best Practices

- Commit gstack's command files (or symlinks) into your project repository so every team member and CI environment gets the same agent behavior. Keeping gstack in a personal dotfile directory means your teammates get vanilla agent responses while you get structured ones, which creates inconsistent code quality and confusing pull request reviews.
- Fill out the project context file completely before using any skills. A half-filled context file produces half-grounded agent output. The 15 minutes you spend writing a thorough context description saves hours of correcting agent suggestions that assume the wrong framework, testing strategy, or deployment target.
- Test command resolution in a fresh terminal session after installation, not in the same session where you were editing files. Some agents cache command lookups, and a stale cache can make a broken installation appear to work until you restart.
- Use the help or index command as your smoke test every time you update gstack or modify the directory structure. If the help command lists all 23 skills and 8 power tools with correct descriptions, your installation is healthy. If any are missing or show placeholder text, you have a file placement or path issue.
- Keep your customizations in separate files or clearly marked sections within gstack files, not intermixed with the original content. When you pull updates from the upstream repository, unmarked customizations get overwritten silently. A dedicated `custom-overrides.md` or clearly commented blocks make merges predictable.
- Version your project context file with the same discipline as your code. When your tech stack changes, your architecture evolves, or your conventions update, the context file must follow. Stale context is worse than no context because the agent will confidently produce output grounded in outdated assumptions.
- Start with the default configuration for your first week before customizing perspectives, disabling skills, or modifying workflows. The defaults encode opinionated but battle-tested patterns. Customizing before you understand the baseline means you might remove something valuable without knowing what you lost.

## Common Mistakes

- **Placing gstack files in the wrong directory or at the wrong nesting level** — This is the most common installation failure, and it is silent. The agent does not throw an error, it just ignores the files and responds generically. The symptom is that slash commands produce vanilla responses instead of structured skill-based workflows. " If it cannot, your directory structure is wrong.

Double-check the exact path your agent uses by consulting its documentation, not by guessing.
- **Skipping the project context file or filling it with generic placeholder text** — Without a real context file, gstack skills produce technically correct but project-irrelevant output. js patterns when you use Fastify, or Jest testing approaches when you use Vitest. The telltale sign is agent suggestions that feel generic or require heavy editing. The fix is straightforward: spend 15 minutes writing an honest, specific description of your project.

Include the exact package names, versions, and architectural patterns you actually use.
- **Installing gstack globally instead of per-project** — Some developers try to install gstack in a global agent configuration directory so it applies to all projects. This breaks the project context mechanism because the context file is project-specific. It also means every project gets the same set of skills, even if some are irrelevant. Install gstack inside each project's directory.

The slight duplication is worth the correctly scoped context and the ability to version gstack per project.
- **Never updating gstack after initial installation** — gstack is actively developed, and stale installations miss new skills, improved prompts, and bug fixes. The symptom is subtle: your agent's structured responses gradually fall behind what the framework is capable of. Set a monthly reminder to check the upstream repository. Pull updates into your staging directory, diff them against your current installation to spot changes, and re-run verification after applying updates.
- **Modifying gstack source files directly without tracking changes** — When you edit gstack's markdown files directly to customize behavior, you create an untracked fork. The next time you pull upstream updates, your changes are overwritten or conflict in ways that are hard to resolve. Instead, use your agent's override or extension mechanism. If no such mechanism exists, keep your modifications in clearly marked blocks with comments like `<!-- CUSTOM: [description] -->` so you can find and re-apply them after updates.
- **Assuming all agents handle gstack identically** — Different AI coding agents parse custom command files differently. claude/commands/` convention with specific file naming expectations. cursor/rules/` with a different structure. Some agents support subdirectories, others flatten them.

Testing against one agent does not guarantee compatibility with another. If your team uses mixed agents, test the installation with each one independently and document any agent-specific adjustments needed.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/gstack-framework/METHOD.md) — gstack Framework

## Related Skills

- [Customizing and Extending gstack with Your Own Skills](../customizing-and-extending-gstack-skills/SKILL.md)
- [Orchestrating gstack's 8 Power Tools in Complex Workflows](../orchestrating-power-tools-in-gstack-workflows/SKILL.md)
- [Comparing gstack to Other AI Coding Agent Frameworks](../comparing-gstack-to-other-ai-coding-frameworks/SKILL.md)
- [Using Multi-Agent Perspectives (CEO, Engineer, QA) in Development](../using-multi-agent-perspectives-for-development/SKILL.md)
- [Structuring AI Coding Sessions from Decision-Making to Execution](../structuring-ai-coding-sessions-with-gstack-phases/SKILL.md)
- [Navigating gstack's 23 Specialist Skills via Slash Commands](../navigating-gstack-slash-commands-and-specialist-skills/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
