---
name: customizing-and-extending-gstack-skills
description: "This skill teaches you how to fork the gstack open-source framework, modify existing specialist skills, and author entirely new skills and power tools that encode your team's specific conventions, tech stack preferences, and quality standards into reusable AI agent instructions."
metadata:
  homepage: https://tryhamster.com
  method: gstack-framework
---

# Customizing and Extending gstack with Your Own Skills

> This skill teaches you how to fork the gstack open-source framework, modify existing specialist skills, and author entirely new skills and power tools that encode your team's specific conventions, tech stack preferences, and quality standards into reusable AI agent instructions.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for your first custom skill, 30-60 minutes for subsequent ones |
| Outcome | You produce a library of custom gstack skills tailored to your team's specific tech stack and conventions, so every AI coding session automatically follows your standards without manual prompting. |
| Prerequisites | Basic familiarity with gstack's 23 specialist skills and slash command system, A working gstack installation configured for Claude Code or another compatible agent, Git proficiency sufficient to fork, branch, and merge repositories, Understanding of your team's coding conventions and workflow patterns you want to encode, Comfort reading and writing structured markdown with YAML frontmatter |
| Part of | [gstack Framework](../../methods/gstack-framework/METHOD.md) |

## Overview

The gstack framework ships with 23 specialist skills and 8 power tools that cover a broad range of AI-assisted development workflows. These defaults are useful out of the box, but every team eventually hits the same friction: the generic skill almost does what you need, but it misses your ORM conventions, your deployment pipeline, or the specific way your team structures API responses. Customizing and extending gstack solves that friction by teaching you how to make the framework yours. The concrete artifact you produce is a set of custom skill files, each one a structured markdown document with YAML metadata, that live in your team's fork of the [gstack Framework](https://tryhamster.com/methods/gstack-framework) repository and get loaded automatically in every Claude Code session.

This skill sits downstream of [installing and configuring the gstack skill pack](https://tryhamster.com/skills/installing-and-configuring-gstack-skill-pack) and upstream of [orchestrating power tools in complex workflows](https://tryhamster.com/skills/orchestrating-power-tools-in-gstack-workflows). Once you know how to navigate the existing skills, the natural next step is to reshape them. The process breaks into three distinct activities: modifying an existing skill's system prompt to inject your team's conventions, authoring a brand-new skill from scratch to cover a workflow gstack doesn't address, and registering that skill so it appears in the slash command index and can be invoked by name. Each activity follows the same structural pattern, which makes the second and third custom skills dramatically faster than the first.

Success looks like this: a new team member clones your fork, runs the setup, and immediately has access to every custom skill your team has authored. When they invoke `/your-custom-skill`, the AI agent follows your team's exact conventions for database migrations, error handling patterns, test structure, or whatever you encoded. There is no onboarding document to read and no checklist to remember. The knowledge lives in the skill files themselves, versioned alongside your code, reviewed in pull requests, and evolved as your conventions change. The result is a team that gets more consistent AI output with less manual correction, because the correction logic has been encoded once and reused everywhere.

Because gstack is MIT-licensed and hosted on GitHub, your customizations compose naturally with upstream updates. You can pull new official skills without overwriting your additions. This is the core advantage of extending an open-source skill framework rather than building prompt libraries from scratch: you get the community's work for free and layer your team's specifics on top.

## How It Works

Every gstack skill is, at its core, a structured document that tells an AI agent three things: what role to assume, what inputs to expect, and what output to produce. Understanding this structure is what lets you write new skills confidently rather than guessing at prompt formats.

A skill file is a markdown document with YAML frontmatter at the top. The frontmatter declares metadata: the skill's name, its slash command trigger, a short description, the roles it invokes (such as engineer, QA, or CEO from the [gstack Framework's](https://tryhamster.com/methods/gstack-framework) multi-agent perspective system), and any dependencies on other skills. The body of the file contains the system prompt, which is the actual instruction set the AI agent receives when the skill is invoked. This separation of metadata from instruction is what makes the system composable. The manifest file reads the metadata to build the command index, while the agent runtime reads the body to execute the skill.

The reason this structure works better than ad-hoc prompts is that it solves the consistency problem. When you write a prompt in a chat window, it works once. When you save it as a gstack skill file, it works every time, for every team member, in every session. The YAML frontmatter also enables tooling: the manifest can filter skills by role, category, or dependency, and power tools can chain skills together by reading their declared inputs and outputs. This is why you should think of a skill file not as a saved prompt but as an interface definition. The frontmatter is the interface. The body is the implementation.

When you modify an existing skill, you are typically changing the system prompt body while preserving the interface. For example, you might take the default code review skill and add a section that says 'Always check for our custom error boundary pattern at the top of every React component.' The slash command, the role assignments, and the output format stay the same. Only the instructions change. This is the lowest-risk form of customization because the rest of the system continues to work unmodified.

When you author a new skill from scratch, you are defining both the interface and the implementation. This requires more thought. You need to decide what slash command triggers it, what roles participate, whether it depends on other skills, and what its output looks like. The key mental model is to think backwards from the artifact: what document, decision, or code structure should exist after this skill runs? Then work backwards to the inputs and instructions that produce it. If you cannot clearly describe the output artifact, the skill is too vague and will produce inconsistent results.

One common misunderstanding is that skills need to be long and complex. The most useful custom skills are often short and specific. A 15-line skill that says 'When writing database migrations for our PostgreSQL setup, always use reversible migrations, always add a concurrent index creation step for any new index on tables over 1M rows, and always include a rollback verification query' will save more time than a 200-line skill that tries to cover all of database management. Specificity is what makes the AI output reliably match your conventions.

## Step-by-Step Guide

### Step 1: Step 1: Fork the gstack repository and set up your team's branch

Navigate to the gstack framework GitHub repository and create a fork under your team's organization or personal account. Clone the fork locally and create a branch named something like `team-customizations` or `your-org-skills`. This branch is where all your custom work will live, cleanly separated from the upstream default skills. Inspect the directory structure: note the `skills/` folder where each specialist skill lives as its own markdown file, the `tools/` folder for power tools, and the root manifest file that registers everything.

Understanding this layout before making changes prevents you from accidentally breaking the command resolution system.

> **Pro tip:** Set up the upstream remote immediately with `git remote add upstream <original-repo-url>` so you can pull new official skills later without merge conflicts on your custom files.

### Step 2: Step 2: Audit your team's recurring corrections and conventions

Before writing any skill files, gather the raw material. ' Also review any onboarding documents, style guides, or architectural decision records (ADRs). The goal is to produce a list of 5-15 specific, repeated conventions that currently live in people's heads or in documents that the AI agent never sees. Group them by domain: code style, testing patterns, deployment steps, documentation format, API design, database conventions.

Each group is a candidate for a custom skill.

> **Pro tip:** The highest-value customs are the ones that come up in code review most often, because those are the corrections the AI is currently failing to make proactively.

### Step 3: Step 3: Modify an existing skill to inject your team's conventions

Start with modification before creation. Pick the existing gstack skill that is closest to one of your convention groups, such as the code review skill or the implementation skill. Open its markdown file and read the full system prompt carefully. Identify the section where your team's specific convention would naturally fit.

' Keep the original instructions intact above your additions so you retain the default behavior. ' Save the file, keeping the original filename so the slash command continues to resolve.

> **Pro tip:** Add a comment at the top of your additions block with a date and author, like `<!-- Added by @username, 2024-12-15: PostgreSQL migration standards -->`. This makes it easy to review and update conventions during quarterly maintenance.

### Step 4: Step 4: Author a new skill file from scratch

Create a new markdown file in the `skills/` directory. md`). Start with the YAML frontmatter block: declare the skill name, a one-line description, the slash command trigger (pick something short and memorable like `/api-design` or `/migration-check`), the roles involved (for example, `engineer` and `qa` for a testing skill), and any skill dependencies. Below the frontmatter, write the system prompt.

Structure it in three sections: Context (what this skill is for and when to use it), Instructions (the specific steps and conventions to follow), and Output Format (what the response should look like). Be explicit about the output artifact. If the skill should produce a migration file, show the exact structure. If it should produce a review checklist, list the checklist items.

The more concrete your output specification, the more consistent the AI's responses will be.

> **Pro tip:** Copy the YAML frontmatter from an existing skill file as your template rather than writing it from memory. This prevents subtle formatting errors like missing colons or incorrect indentation that would cause the manifest parser to skip your skill silently.

### Step 5: Step 5: Register the new skill in the manifest

md` or a similar index file at the repository root) and add an entry for your new skill. The entry should include the skill's name, its slash command, a one-line description, and the file path. Follow the exact format of the existing entries. The manifest is what makes your skill discoverable: without this registration, the skill file exists but no one can invoke it by command.

After adding the entry, verify the manifest parses correctly by checking that the total skill count has incremented and that your new command appears in the index. If your team uses multiple skill categories, place your skill in the appropriate section rather than appending it at the end.

> **Pro tip:** Some gstack setups auto-generate the manifest from file metadata. Check whether your installation uses auto-discovery or manual registration before editing the manifest directly.

### Step 6: Step 6: Test the custom skill in an isolated session

Open a new Claude Code session (or your agent of choice) and verify your custom skill loads. Invoke the slash command and provide a realistic input, not a toy example. For a code review skill, give it an actual pull request diff from your repo. For a migration skill, describe a real schema change you recently made.

Evaluate the output against your conventions checklist from Step 2. Does the AI follow every convention you specified? Does the output format match what you declared? If the output drifts from your conventions on any point, the system prompt needs to be more specific on that point.

Iterate on the prompt, re-test, and repeat until the output matches your team's standards on three consecutive different inputs. Three is the minimum because a single test can pass by coincidence.

> **Pro tip:** Keep a test log as a markdown file alongside your custom skills. Record the input you gave, the output you got, and whether it passed or failed each convention check. This log becomes your regression test suite when you update the skill later.

### Step 7: Step 7: Write a skill-level README and usage examples

For each custom skill, add a short README section either as a comment block at the top of the skill file or as a companion document. Include three things: when to use this skill (the trigger situation), an example invocation showing the slash command with a representative input, and an example of correct output. This documentation serves two audiences. Human teammates read it when they discover the skill in the index and want to know if it applies to their current task.

AI agents can also reference it if your setup uses skill descriptions in the context window. Without usage examples, teammates will invoke the skill incorrectly or not at all, and the effort you put into authoring it goes to waste.

> **Pro tip:** Include one 'anti-example' showing a common misuse of the skill and what happens (e.g., 'Don't use /migration-check for seed data scripts. It will flag seed inserts as missing rollback steps.').

### Step 8: Step 8: Commit, review, and distribute to your team

Create a pull request from your customization branch to the team's main branch. In the PR description, list every skill you added or modified, the conventions each one encodes, and a link to your test log. Request review from at least one teammate who works in the domain the skill covers. The reviewer should invoke the skill themselves with their own input and verify the output.

This is critical because your mental model of 'correct' might miss edge cases a colleague would catch. After approval, merge the PR. Notify the team in your communication channel with a short message listing the new slash commands and a one-line description of each. Every teammate who pulls the updated fork now has your custom skills available automatically.

> **Pro tip:** Tag your custom skill PRs with a consistent label like `gstack-custom` so you can filter them later when auditing which conventions have been encoded and which still live only in documentation.

### Step 9: Step 9: Set up a maintenance cadence for upstream syncs and skill updates

Custom skills are not write-once artifacts. Your conventions will evolve, new team members will identify gaps, and the upstream gstack repository will release new skills and improvements. Establish a quarterly review cycle. In each review, pull the latest upstream changes and resolve any conflicts with your custom files.

Review each custom skill against your last quarter's PR comments to check whether the conventions encoded are still current. Retire skills that no longer apply and add new ones for patterns that have emerged. Track the number of convention-related PR comments over time as your success metric. If your custom skills are working, that number should decrease steadily as the AI agent internalizes more of your team's standards.

> **Pro tip:** Assign a rotating 'skill maintainer' role each quarter rather than having one person own all custom skills. This spreads knowledge of the customization system and prevents a single point of failure.

## Best Practices

- Keep each custom skill focused on one domain or convention group. A skill that covers both API design and database migrations will produce muddled output because the AI has to context-switch between two unrelated instruction sets. Split them into two skills, even if both are short. The overhead of a second file is trivial compared to the cost of debugging why the AI mixed up API response formats with migration rollback syntax.
- Write conventions as testable assertions, not vague guidance. 'All API responses must include a `requestId` field in the envelope' is testable. 'Follow our API patterns' is not. When you write assertions, you can evaluate the AI's output against them mechanically.

When you write vague guidance, you end up subjectively judging every response, which means two teammates will disagree on whether the output is correct.
- Version your custom skills alongside your application code in the same repository or a linked submodule. When skills live in a separate, disconnected repo, they drift out of sync with the codebase they describe. If your app switches from REST to GraphQL, the API design skill needs to update at the same time. Co-locating them, or at minimum linking them in your CI pipeline, makes this drift visible.
- Preserve the original gstack skill content when modifying, adding your conventions in a clearly marked section below. This lets you pull upstream updates without overwriting your additions. It also means that if your custom convention turns out to be wrong, you can remove your section and the skill falls back to the sensible default rather than breaking entirely.
- Test each custom skill with at least three diverse inputs before distributing to the team. A single test proves nothing because LLMs can appear to follow instructions on one input and ignore them on the next. Three inputs from different contexts (different file types, different complexity levels, different edge cases) give you reasonable confidence the skill's instructions are robust enough to generalize.
- Include explicit output format specifications in every custom skill. If the skill should produce a checklist, show the checklist format. If it should produce a code file, show the file structure with placeholders. Without an output format section, the AI will choose its own format, and that format will vary between sessions, making the output unreliable for downstream consumption by other skills or power tools.
- Document the 'why' behind each convention in a comment within the skill file, not just the 'what.' When a future team member reads 'always use concurrent index creation for tables over 1M rows,' they need to understand that this prevents table locks during deployment. Without the 'why,' they cannot judge whether the convention still applies when the context changes, and they will either blindly follow outdated rules or blindly delete rules they do not understand.

## Common Mistakes

- **Writing overly generic custom skills that duplicate the default gstack behavior** — This happens when someone creates a custom 'code review' skill that mostly repeats the standard review instructions with one or two team conventions buried in the middle. The AI treats the custom skill as a near-duplicate and the team-specific conventions get lost in the noise. The signal to watch for is when your custom skill output is indistinguishable from the default skill output on most inputs. Instead, make your custom skill laser-focused on the delta: only include the conventions that differ from the default.

If you only need to add three rules to the existing review process, modify the existing skill rather than creating a parallel one.
- **Forgetting to register new skills in the manifest file** — This is the most common reason a new custom skill 'doesn't work.' The file exists, the content is correct, but the slash command produces no response because the manifest does not know about it. This typically happens because authoring the skill file feels like the hard part, and updating the manifest feels like an afterthought. The diagnostic signal is that invoking the slash command either produces a 'skill not found' error or falls through to a similarly-named default skill. Always add manifest registration as the first step after creating the file, not the last step before committing.
- **Making custom skills too long and comprehensive, trying to cover every edge case** — Long system prompts suffer from instruction dilution. When a skill file contains 300 lines of instructions, the AI agent weights each individual instruction less heavily and is more likely to miss specific ones. This mistake usually comes from a well-intentioned desire to be thorough. The symptom is that the AI follows most of your conventions but randomly misses one or two, and which ones it misses varies between sessions.

, one for API request validation, one for API response formatting, one for API error handling) and chain them using gstack's power tools. Each focused skill is short enough that the AI follows every instruction consistently.
- **Never updating custom skills after initial creation** — Conventions evolve, but custom skills often do not. Six months after creation, the skill encodes outdated patterns and actively steers the AI toward deprecated practices. This happens because there is no trigger to review skills; they sit in a directory and quietly do their job until someone notices the output is wrong. The warning sign is PR comments that correct the same AI output pattern repeatedly, which means the skill is producing outdated code that reviewers keep fixing manually.

Prevent this by scheduling quarterly reviews and tracking convention-related PR comments as a leading indicator.
- **Customizing skills on the main branch of the upstream repository instead of a proper fork** — When you edit skills directly in a cloned copy of the upstream repo without forking, the next `git pull` from upstream will create merge conflicts on every file you touched. Even worse, a careless `git reset` can wipe all your custom work. This happens to developers who treat the skill pack like a local config file rather than a shared codebase. The recovery is painful: recreating skills from memory or from team members' local copies.

Always fork first, customize in your fork, and use `git remote add upstream` to pull official updates cleanly.
- **Encoding personal preferences rather than team conventions** — One developer writes a custom skill that enforces their preferred variable naming style, their preferred test framework idioms, or their preferred file organization, and commits it as a 'team standard.' The rest of the team either ignores the skill or accumulates resentment. The diagnostic is when teammates invoke the same skill and then manually override parts of its output. Custom skills should encode conventions that have been explicitly agreed upon by the team, documented in a style guide or ADR, or at minimum discussed in a team meeting. If you cannot point to a team decision that backs the convention, it does not belong in a shared skill file.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/gstack-framework/METHOD.md) — gstack Framework

## Related Skills

- [Orchestrating gstack's 8 Power Tools in Complex Workflows](../orchestrating-power-tools-in-gstack-workflows/SKILL.md)
- [Comparing gstack to Other AI Coding Agent Frameworks](../comparing-gstack-to-other-ai-coding-frameworks/SKILL.md)
- [Using Multi-Agent Perspectives (CEO, Engineer, QA) in Development](../using-multi-agent-perspectives-for-development/SKILL.md)
- [Installing and Configuring the gstack Skill Pack](../installing-and-configuring-gstack-skill-pack/SKILL.md)
- [Structuring AI Coding Sessions from Decision-Making to Execution](../structuring-ai-coding-sessions-with-gstack-phases/SKILL.md)
- [Navigating gstack's 23 Specialist Skills via Slash Commands](../navigating-gstack-slash-commands-and-specialist-skills/SKILL.md)
