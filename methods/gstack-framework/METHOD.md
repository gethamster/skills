---
name: "gstack-framework"
category: "Development"
description: "The gstack framework is Garry Tan's open-source Claude Code skill pack that runs a sprint as slash commands: features, setup, gstack vs other frameworks."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# gstack Framework: Garry Tan's Claude Code Skill Pack

> Created by **Garry Tan** - [https://github.com/garrytan/gstack](https://github.com/garrytan/gstack)

## Overview

The gstack framework is an open-source skill pack for Claude Code, written by Garry Tan, President and CEO of Y Combinator, and published in the [garrytan/gstack repository](https://github.com/garrytan/gstack). It turns a single coding agent into what the README calls a virtual engineering team: a CEO who rethinks the product, an eng manager who locks architecture, a designer, a staff-level reviewer, a QA lead who opens a real browser, a security officer and a release engineer. Each role is a slash command backed by a Markdown skill file. This page covers what the framework is, its features and phases, how to install it, and how gstack vs other frameworks compares when you are choosing how to structure AI-assisted coding.

The pack is organized around a sprint. The README lists the order as Think, Plan, Build, Review, Test, Ship, Reflect, and states that "each skill feeds into the next." `/office-hours` writes a design doc that `/plan-ceo-review` reads, `/plan-eng-review` writes a test plan that `/qa` later picks up, and `/review` catches bugs that `/ship` checks are fixed. The chaining is the core idea. A single prompt carries one conversation, while gstack passes written artifacts from one role to the next so that later steps start from earlier decisions instead of re-deriving them.

The skills themselves are ordinary Claude Code skills. Anthropic's [Claude Code skills documentation](https://code.claude.com/docs/en/skills) describes a skill as a `SKILL.md` file with YAML frontmatter and instructions, stored under `~/.claude/skills/` for personal use or `.claude/skills/` in a project, and invoked by typing its name as a slash command or loaded automatically when its description matches the task. gstack installs into `~/.claude/skills/gstack` and runs a `./setup` script that links each skill into place, according to its [CONTRIBUTING guide](https://github.com/garrytan/gstack/blob/main/CONTRIBUTING.md). The same guide notes that the `SKILL.md` files are generated from `.tmpl` templates, which is how one source produces variants for other agents.

The project moves quickly. The [gstack changelog](https://github.com/garrytan/gstack/blob/main/CHANGELOG.md) dates version 0.0.1 to 2026-03-11 and describes it as the initial release with five skills: `/plan-ceo-review`, `/plan-eng-review`, `/review`, `/ship` and `/browse`. [TechCrunch's March 2026 coverage](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/) counted 13 skills a few days later. The current README describes "Twenty-three specialists and eight power tools, all slash commands, all Markdown, all free, MIT license," and its tables now list more commands than that headline, including iOS testing, documentation and memory skills. Treat any fixed skill count, including the ones on this page, as a snapshot and check the [repository README](https://github.com/garrytan/gstack) for the current list.

Beyond the commands, gstack carries a written philosophy. Its [Builder Ethos](https://github.com/garrytan/gstack/blob/main/ETHOS.md) is injected into every workflow skill's preamble and sets three rules: do the complete thing when completeness is cheap ("Boil the Ocean"), search for existing solutions before building, and keep the user in charge ("AI models recommend. Users decide."). Those rules explain behavior you will see in practice, such as `/review` flagging shortcut implementations and `/autoplan` stopping to ask about taste decisions it will not settle on its own.

gstack runs on more than Claude Code. The README says it works on ten AI coding agents and that `./setup --host` targets Codex, OpenCode, Cursor, Factory, Kiro and others ([install section](https://github.com/garrytan/gstack)). Each host is a small TypeScript config, per the [host guide](https://github.com/garrytan/gstack/blob/main/docs/ADDING_A_HOST.md). Claude Code is the primary host, and some features, such as the safety hooks, depend on Claude Code's hook system.

Reception has been mixed in a useful way. Augment Code's [developer write-up](https://www.augmentcode.com/learn/garry-tan-gstack-claude-code) calls gstack "a structured bet that opinionated prompts, not custom tooling, are the right abstraction layer for AI-assisted development," and advises checking whether its opinions match yours. TechCrunch reported a vlogger who called it "a bunch of prompts" and summarized a common complaint that developers who use Claude Code already have their own versions. Both points are fair. gstack's value lies in the specific opinions its prompts encode and in the artifacts they hand to each other, so the test for a team is whether those opinions fit how it wants to work. Teams that keep methods like this in Hamster can store their own version of the sprint next to their plans so every agent session starts from it.

## Core Principles

### The Skills Run in Sprint Order

gstack treats a feature as a sprint with a fixed order: think, plan, build, review, test, ship, reflect ([README](https://github.com/garrytan/gstack)). Each command owns one stage, so the question "what should the agent do now" becomes "which stage are we in." Skipping a stage is allowed, but it is a visible choice. When a session jumps from idea to code, the failures that the planning skills exist to catch show up later, in review or in production.

### Every Stage Leaves an Artifact for the Next

The skills communicate through files. `/office-hours` writes a design doc to `~/.gstack/projects/`, which `/plan-ceo-review` and `/plan-eng-review` read, and the engineering review writes a test plan that `/qa` uses ([skill deep dives](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). This keeps each step grounded in earlier decisions without one enormous conversation. If a later skill behaves as though it has no context, the usual cause is that the earlier artifact was never written or approved.

### Rethink the Problem Before Building It

The first two skills are there to challenge the request. `/office-hours` asks six forcing questions in startup mode and pushes back on the framing, and `/plan-ceo-review` asks what the "10-star product" inside the request would be, with four scope modes from expansion to reduction ([skill deep dives](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). The reframe is where a feature request can turn into a different, better product. The scope modes also work in the other direction, so you can ask the CEO review to cut a plan down to its minimum.

### Review for What CI Cannot Catch

`/review` is written as a "paranoid staff engineer" pass that looks for failures tests miss, such as N+1 queries, race conditions, trust-boundary mistakes and forgotten enum handlers ([review deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). It fixes obvious mechanical issues itself and asks about ambiguous ones. The Review Readiness Dashboard tracks which reviews ran, and the engineering review is the only required gate by default. CEO and design reviews are informational.

### Completeness Is Cheap, So Do the Complete Thing

The Builder Ethos argues that AI makes the marginal cost of completeness small, so when the complete implementation costs minutes more than the shortcut, you should build the complete one ([ETHOS.md](https://github.com/garrytan/gstack/blob/main/ETHOS.md)). The ethos calls each bounded unit of work a "lake" and keeps genuinely unrelated work out of scope. In practice this shows up as `/ship` bootstrapping a test framework when a project has none and `/review` flagging [80% solutions where the complete version is cheap](https://github.com/garrytan/gstack/blob/main/docs/skills.md). If you disagree with this principle for a given codebase, expect to push back on those suggestions.

### The User Decides

"AI models recommend. Users decide." is the ethos rule that overrides the others ([ETHOS.md](https://github.com/garrytan/gstack/blob/main/ETHOS.md)). Two models agreeing, for example Claude and a `/codex` second opinion, counts as a strong signal and still goes to the user before it changes their stated direction. `/autoplan` follows the same rule: it auto-resolves routine questions and saves taste decisions for a final approval gate ([autoplan deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)).

### Guardrails Prevent Accidents

The safety commands `/careful`, `/freeze` and `/guard` use Claude Code's PreToolUse hooks to warn before destructive commands and to restrict edits to one directory ([safety section](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). The documentation states their limits plainly: `/freeze` blocks the Edit and Write tools only, and the guardrails are "accident prevention, not access control." Use them to keep a debugging session contained. Do not rely on them as a security boundary.

## gstack vs Other Frameworks

Most alternatives to gstack customize how an agent writes code. gstack adds a sequence of roles on top. The table compares the mechanisms each tool documents.

| Approach | What you write | How it loads | What it adds |
|---|---|---|---|
| [gstack](https://github.com/garrytan/gstack) | Installed skill pack | Slash commands per role | Sprint order, chained artifacts, review gates |
| [Claude Code skills](https://code.claude.com/docs/en/skills) | Your own SKILL.md files | Slash command or automatic match | Reusable procedures you define |
| [Cursor rules](https://cursor.com/docs/context/rules) | .mdc files in .cursor/rules | Always, by file, by agent, or manual | Standing guidance in the model context |
| [Aider conventions](https://aider.chat/docs/usage/conventions.html) | A CONVENTIONS.md file | Loaded read-only with /read | Coding style and library preferences |

The approaches combine. gstack's skills are themselves Agent Skills in the [open format Anthropic released](https://agentskills.io), so they sit next to your own skills, and a rules or conventions file can carry project style while gstack carries the workflow. For a structured evaluation of whether gstack fits your team, see [Evaluating gstack Against Your Current AI Coding Setup](../../skills/comparing-gstack-to-other-ai-coding-frameworks/SKILL.md).

## Steps

1. **Install gstack and register the skills**
   Check the requirements first: the [README](https://github.com/garrytan/gstack) lists Claude Code, Git and Bun, plus Node.js on Windows. Clone the repository into `~/.claude/skills/gstack` and run `./setup`, then add a gstack section to your project's CLAUDE.md that lists the available skills, as the README's install prompt describes. For a shared repository, the README recommends team mode, which commits a small bootstrap so teammates get gstack and an hourly auto-update check. If a skill does not appear, rerunning `./setup` is the README's first troubleshooting step. See [the gstack setup guide](../../skills/installing-and-configuring-gstack-skill-pack/SKILL.md) for the full procedure.

2. **Think with /office-hours**
   Start a new feature or product by describing it to `/office-hours`. In startup mode it asks forcing questions about demand, the status quo and the narrowest wedge, challenges your premises, and proposes two or three implementation approaches with effort estimates ([office hours deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). Builder mode is gentler and suits side projects. The output is a design doc that the planning skills read. Accept, reject or adjust each premise, because accepted premises become load-bearing in the doc.

3. **Plan with the CEO and engineering reviews**
   Run `/plan-ceo-review` to challenge scope, choosing expansion, selective expansion, hold scope or reduction. Then run `/plan-eng-review` to lock architecture, data flow, edge cases and tests, with diagrams that force hidden assumptions into the open ([skill deep dives](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). Add `/plan-design-review` for user-facing UI and `/plan-devex-review` for APIs, CLIs and SDKs. If you want the whole gauntlet in one pass, `/autoplan` runs CEO, design, DX and engineering review in sequence, engineering last, and asks you only about taste decisions.

4. **Build against the approved plan**
   Approve the plan and let the agent implement it. gstack has no separate build command in its sprint table; the plan and its test plan are what keep implementation on track. When something breaks and the cause is unclear, use `/investigate`, whose "Iron Law" is no fixes without root-cause investigation, and which stops to question the architecture after three failed fixes ([investigate deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). It also freezes edits to the module under investigation. Use `/careful` or `/guard` when the work touches production.

5. **Review the branch**
   Run `/review` on the branch before shipping. It audits for production failures that pass CI, auto-fixes mechanical issues and asks about ambiguous ones, and flags completeness gaps. For a second model's view, `/codex` runs an independent OpenAI Codex review in review, challenge or consult mode and reports which findings the two reviewers share ([codex deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). Findings that both reviewers raise deserve the most attention. The final call on each finding stays with you.

6. **Test in a real browser with /qa**
   Run `/qa` on a feature branch or a staging URL. On a feature branch it reads the diff, identifies the affected pages and tests them; other modes run a full exploration, a quick smoke test, or a regression comparison against a baseline ([qa deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). Each bug it fixes gets a regression test. Use `/qa-only` when you want a report without code changes.

7. **Ship, deploy and document**
   `/ship` syncs main, runs tests, audits coverage, pushes and opens the pull request, and it bootstraps a test framework if the project lacks one ([ship deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). It checks the Review Readiness Dashboard first and asks, without blocking, if the engineering review is missing. `/land-and-deploy` merges, waits for CI and the deploy, and verifies production, with a dry run on first use. `/canary` watches production afterward and `/document-release` updates docs that drifted.

8. **Reflect and carry lessons forward**
   Run `/retro` at the end of the week for a commit-based retrospective with per-person breakdowns and test health trends ([retro deep dive](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). Use `/learn` to review, prune and export the project learnings gstack records across sessions. Then decide which skills your team used, which it skipped, and whether any need changing. The pack is MIT licensed and designed to be forked, which [Customizing and Extending gstack](../../skills/customizing-and-extending-gstack-skills/SKILL.md) covers.

## When to Use

- You are a founder or technical lead who ships product code with Claude Code and wants review, QA and release steps to run on every change, which is the audience the [README](https://github.com/garrytan/gstack) names first.
- You are new to Claude Code and a blank prompt gives you inconsistent results. Structured roles give each session a defined starting point and a defined output.
- A feature idea is still fuzzy. `/office-hours` and `/plan-ceo-review` are built to reframe and rescope requests before any code exists, which is cheaper than discovering the wrong scope in review.
- You run several agent sessions in parallel. The README argues that a shared process keeps each session on a known stage, and it describes running many sprints at once in Conductor.
- Your web app has a staging URL and little automated coverage. `/qa` and `/ship` add browser testing, regression tests and test bootstrapping as part of the release path.

## When Not to Use

- The change is trivial. The README's own example says a typo fix in a README needs no gstack, and running the planning chain on it only adds questions.
- Your team already has a mature review, testing and release pipeline that the gstack steps would duplicate. Adopt single skills such as `/review` or `/qa` instead of the full sprint.
- You need guardrails to act as a security boundary. The documentation describes `/careful` and `/freeze` as accident prevention, and `/freeze` does not stop shell commands from editing files.
- You disagree with the pack's opinions, such as preferring the complete implementation by default. Augment Code's review calls gstack opinionated and workflow-heavy, and fighting the defaults on every run costs more than writing your own smaller skills.

## Skills

This method includes the following skills:

- [gstack Setup Guide: Install and Configure the Skill Pack](../../skills/installing-and-configuring-gstack-skill-pack/SKILL.md): Install gstack for Claude Code or another agent, set up its slash commands, and enable team mode.
- [Navigating gstack Slash Commands and Specialist Skills](../../skills/navigating-gstack-slash-commands-and-specialist-skills/SKILL.md): Find the right command for a task and chain the specialist skills in sprint order.
- [Structuring AI Coding Sessions with gstack Phases](../../skills/structuring-ai-coding-sessions-with-gstack-phases/SKILL.md): Run one feature through think, plan, build, review, test, ship and reflect.
- [Using gstack's Role Perspectives: CEO, Engineering, QA](../../skills/using-multi-agent-perspectives-for-development/SKILL.md): Use the CEO, eng manager, staff engineer and QA lead roles, plus a second model, on one piece of work.
- [Orchestrating gstack Power Tools in Complex Workflows](../../skills/orchestrating-power-tools-in-gstack-workflows/SKILL.md): Combine the safety, second-opinion, browser and deploy tools around risky work.
- [Customizing and Extending gstack with Your Own Skills](../../skills/customizing-and-extending-gstack-skills/SKILL.md): Fork gstack, edit skill templates, and add skills that encode your team's conventions.
- [Evaluating gstack Against Your Current AI Coding Setup](../../skills/comparing-gstack-to-other-ai-coding-frameworks/SKILL.md): Run a fair trial of gstack against rules files, conventions files or your own skills.

## FAQ

**What is the gstack framework?**

gstack is a collection of Claude Code skills, published by Garry Tan in the [garrytan/gstack repository](https://github.com/garrytan/gstack), that assigns a specialist role to each slash command and runs them in sprint order. `/office-hours` and the plan reviews shape the idea, `/review` and `/qa` check the work, and `/ship` and `/land-and-deploy` release it. The skills are Markdown files, and the whole pack is free under the MIT license. Its docs describe it as a process more than a toolbox, because each skill reads what the previous one wrote.

**How do I install gstack?**

The [README install section](https://github.com/garrytan/gstack) gives a one-line command that clones the repository into `~/.claude/skills/gstack` and runs `./setup`, followed by adding a gstack section to CLAUDE.md. Team mode adds a bootstrap to a shared repository so teammates get the skills automatically. Other agents are supported through `./setup --host` with a host name. The [installation skill](../../skills/installing-and-configuring-gstack-skill-pack/SKILL.md) walks through each option and the common failures.

**How does gstack compare with other frameworks such as Cursor rules or Aider conventions?**

[Cursor rules](https://cursor.com/docs/context/rules) and [Aider conventions files](https://aider.chat/docs/usage/conventions.html) supply standing guidance that shapes how the model writes code. gstack supplies a sequence of role-specific skills that plan, review, test and ship work, and it passes artifacts between them. The two layers can run together. The comparison table above summarizes the differences.

**Where are the gstack docs and examples?**

The repository has a [skill deep dives page](https://github.com/garrytan/gstack/blob/main/docs/skills.md) with the philosophy, modes and example sessions for each skill, including a worked `/office-hours` reframe and sample `/review`, `/qa` and `/autoplan` output. The README contains an end-to-end example that runs from `/office-hours` to `/ship`. The [Builder Ethos](https://github.com/garrytan/gstack/blob/main/ETHOS.md) explains the principles injected into every skill. Read the deep dive for a skill before relying on its defaults.

**Does gstack only work with Claude Code?**

Claude Code is the primary host, and the default install targets it. The [README](https://github.com/garrytan/gstack) says gstack works on ten AI coding agents, with `./setup --host` flags for Codex, OpenCode, Cursor, Factory Droid, Kiro and others, and an instruction-only digest for agents that read rules files. Features that rely on Claude Code hooks, such as the safety guardrails, may behave differently elsewhere. Check the host table before assuming a skill works identically in another agent.

**What are the common criticisms of gstack?**

[TechCrunch](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/) reported a vlogger calling it "a bunch of prompts" and a common complaint that developers who use Claude Code already have their own versions. Augment Code's [review](https://www.augmentcode.com/learn/garry-tan-gstack-claude-code) says its author does not take Tan's productivity claims at face value and describes the pack as opinionated and workflow-heavy. Both pieces point to the same test: run the skills on your own code and judge the results. A short trial on one real feature is the cheapest way to do that.

**Do I have to use every skill?**

No. The README's quick start suggests running `/office-hours`, `/plan-ceo-review`, `/review` and `/qa` and stopping there to decide whether the pack suits you. The Review Readiness Dashboard treats only the engineering review as required by default, and you can turn even that off ([dashboard docs](https://github.com/garrytan/gstack/blob/main/docs/skills.md)). You can adopt the review and QA skills on their own and add the planning skills later.

**How do I keep gstack up to date?**

Run `/gstack-upgrade`, which detects global and vendored installs and shows what changed, or set `auto_upgrade: true` in `~/.gstack/config.yaml`, per the [README troubleshooting notes](https://github.com/garrytan/gstack). Team mode runs an auto-update check at the start of Claude Code sessions, throttled to once an hour. Read the [changelog](https://github.com/garrytan/gstack/blob/main/CHANGELOG.md) after upgrading, because commands are sometimes renamed.

## Sources

- [garrytan/gstack README](https://github.com/garrytan/gstack)
- [gstack Skill Deep Dives](https://github.com/garrytan/gstack/blob/main/docs/skills.md)
- [gstack Builder Ethos](https://github.com/garrytan/gstack/blob/main/ETHOS.md)
- [Contributing to gstack](https://github.com/garrytan/gstack/blob/main/CONTRIBUTING.md)
- [gstack changelog](https://github.com/garrytan/gstack/blob/main/CHANGELOG.md)
- [Adding a New Host to gstack](https://github.com/garrytan/gstack/blob/main/docs/ADDING_A_HOST.md)
- [Augment Code: Garry Tan open-sources gstack](https://www.augmentcode.com/learn/garry-tan-gstack-claude-code)
- [TechCrunch: Why Garry Tan's Claude Code setup has gotten so much love, and hate](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/)
- [Claude Code docs: skills](https://code.claude.com/docs/en/skills)
- [Agent Skills overview](https://agentskills.io)
- [Cursor docs: rules](https://cursor.com/docs/context/rules)
- [Aider docs: coding conventions](https://aider.chat/docs/usage/conventions.html)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
