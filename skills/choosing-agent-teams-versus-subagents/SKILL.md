---
name: "choosing-agent-teams-versus-subagents"
description: "Choose a single session, subagents, or an agent team by weighing context, peer messaging, file overlap, token cost and experimental limits."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "claude-code-agent-teams"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Claude Code Agent Teams vs Subagents: Choosing Well

> Choose a single session, subagents, or an agent team by weighing context, peer messaging, file overlap, token cost and experimental limits.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 15-30 minutes per decision |
| Outcome | A short written decision naming the execution mode (single session, subagents or agent team), the reason, the expected cost, and the condition that would make you switch. |
| Prerequisites | Working familiarity with interactive Claude Code sessions, Basic understanding of how subagents are delegated and report results, Access to Claude Code settings if you plan to enable experimental features, A written description of the task you want to run |
| Part of | [Claude Code Agent Teams](../../methods/claude-code-agent-teams/METHOD.md) |

## Overview

Claude Code gives you three ways to spend model effort on a task: one interactive session, subagents launched from that session, or an agent team of several coordinated sessions. Picking the wrong one costs you either time or tokens. A single session that should have delegated fills its context with exploration noise, while an agent team spun up for a small fix pays coordination overhead for nothing. This skill is the decision itself, made before you type the first prompt. For background on how teams are built and launched, see the [Claude Code Agent Teams method page](https://tryhamster.com/methods/claude-code-agent-teams).

The core distinction is structural. The [Claude Code glossary](https://code.claude.com/docs/en/glossary) describes subagents as running within a single session and reporting only to the parent, while agent team members are independent sessions coordinated by a team lead, each with its own context window, a shared task list and peer-to-peer messaging. The [parallel agents documentation](https://code.claude.com/docs/en/agents) frames agent teams the same way: multiple coordinated sessions with a shared task list and inter-agent messaging, managed by a lead. Cost and maturity sit on top of that structure. Anthropic's [agent teams documentation](https://code.claude.com/docs/fr/agent-teams) warns that teams add coordination overhead and use considerably more tokens than a single session, and a [practitioner comparison of subagents and agent teams](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows) notes that teams remain experimental and disabled by default.

| Dimension | Single session | Subagents | Agent team | Source |
|---|---|---|---|---|
| Context | One shared window | Run inside the parent session | Own window per teammate | [glossary](https://code.claude.com/docs/en/glossary) |
| Communication | You and one model | Report only to the parent | Peer messaging, any teammate reachable | [glossary](https://code.claude.com/docs/en/glossary) |
| Coordination | None needed | Parent delegates and collects | Lead plus shared task list | [agents docs](https://code.claude.com/docs/en/agents) |
| Cost | Baseline | Not quantified in these docs | Considerably more tokens than one session | [team docs](https://code.claude.com/docs/fr/agent-teams) |
| Maturity | Standard use | Documented option | Experimental, off by default | [comparison](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows) |

Read the table left to right as an escalation path. Start with the simplest option that can do the job and move right only when a concrete need forces you to. The questions that force a move are few: does the work overflow one context, does it split into parts that can run at once, and do those parts need to talk to each other rather than only to you. If the answer to the last question is no, subagents usually cover it. If you cannot name what teammates would say to each other, you probably do not need a team.

The output of this skill is a short written decision: which mode, why, what it is likely to cost, and what would make you switch. That record lets a teammate or reviewer challenge the choice before tokens are spent rather than after.

## How It Works

The decision runs as a series of gates. Each gate asks whether a cheaper, simpler mode is still sufficient, and you only pass to the next gate when the answer is no.

**Gate one: context fit.** A single session holds everything in one window. That is an advantage when the task needs one continuous line of reasoning, such as tracing a bug through a few files and fixing it, because every decision stays visible to the model making the next one. It becomes a liability when exploration output crowds out the work. A [Claude Code architecture guide](https://cc.bruniaux.com/guide/architecture) recommends delegating exploration to sub-agents to preserve the main context, which is the usual first reason to leave single-session mode.

**Gate two: shape of the side work.** Subagents fit when side work is a question with an answer: search this directory, summarize this module, run these tests and report failures. The [Claude Code glossary](https://code.claude.com/docs/en/glossary) is explicit that subagents run within a single session and report only to the parent, so they suit hub-and-spoke work where the parent integrates every result. If workers never need each other's findings mid-task, this shape is enough, however large the total job is.

**Gate three: peer dependency.** Agent teams earn their cost when workers must exchange information while working, for example a frontend worker asking the backend worker about a response shape, or reviewers challenging each other's findings. Teams provide a shared task list and inter-agent messaging managed by a lead, as the [parallel agents documentation](https://code.claude.com/docs/en/agents) describes. The glossary adds that you can interact with any teammate directly, which matters when you want to steer one stream without routing everything through the lead.

**Gate four: read versus write.** Anthropic introduced teams as best for tasks that split into independent, read-heavy work in its [Claude Opus 4.6 announcement](https://anthropic.com/news/claude-opus-4-6). A [practitioner agent teams guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/guide/workflows/agent-teams.md) reports that teams struggle with write-heavy tasks where multiple agents modify the same files, and the [agents documentation](https://code.claude.com/docs/en/agents) notes teammates do not receive isolated worktrees. A plan with several workers editing overlapping files therefore adds conflict risk that a single writer avoids.

**Gate five: cost and maturity.** The [agent teams documentation](https://code.claude.com/docs/en/agent-teams) states that token costs scale linearly with the number of teammates and that adding teammates does not speed work up proportionally. Evidence on payoff is thin and disputed: a [Reddit benchmark post](https://reddit.com/r/ClaudeAI/comments/1ss7f38/we_ran_52_controlled_benchmarks_on_claude_code) claims teams cost 73-124% more than sequential execution with zero quality gain, but that is practitioner data, and no controlled, independent comparison of the three modes has been published. Maturity limits also apply. The [practitioner comparison](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows) lists no /resume for in-process teammates, one team per lead, no nested teams, a fixed lead, permissions inherited at teammate creation, and split panes that need tmux or iTerm2.

A task that clears every gate toward a team is less common than it looks. The typical good fit is read-heavy or cleanly partitioned work, with real cross-worker questions, that you can finish in one sitting. Everything else is usually better served by a single session with well-scoped subagents.

## Step-by-Step Guide

### Step 1: Write down the task and its finish line

Before choosing a mode, describe the task in two or three sentences and state what done looks like: a merged fix, a review report, a migrated module. The mode decision depends on the shape of the work, and you cannot judge shape from a vague goal. List the files or directories you expect to touch and whether the work mostly reads or writes. This list becomes the input for every later check.

> **Pro tip:** If you cannot state the finish line, run a short single-session planning pass first. Planning in one context is cheap and tells you whether parallel streams even exist.

### Step 2: Test whether one session is enough

Ask whether the task needs one continuous line of reasoning that fits in a single context. Bug fixes across a handful of files, focused refactors and small features usually do. Staying in one session keeps every decision in one place and avoids the extra tokens and coordination overhead that teams add, as the [agent teams documentation](https://code.claude.com/docs/fr/agent-teams) warns. Move on only if exploration would crowd out the actual work or if genuinely separate work streams exist.

> **Pro tip:** A practical signal: if you would do the task yourself in one sitting without handing anything off, keep it in one session.

### Step 3: Offload side questions to subagents

When the main thread needs answers it should not generate itself, such as a codebase search, a test run summary or a scan of one module, delegate those jobs to subagents. They run within the session and report only to the parent, per the [Claude Code glossary](https://code.claude.com/docs/en/glossary), which keeps the parent's context focused on decisions. A [Claude Code architecture guide](https://cc.bruniaux.com/guide/architecture) recommends exactly this: delegate exploration to preserve the main context. Check that each delegated job returns something the parent can use without a follow-up conversation.

> **Pro tip:** Phrase every subagent job as a question with a defined answer format, for example a list of file paths or a pass/fail summary with failing test names.

### Step 4: Look for real peer dependencies

Ask whether separate workers would need to talk to each other while working, not just hand results back at the end. Examples include a frontend worker that needs the backend worker's response shape, or reviewers who should test each other's conclusions. This is the capability agent teams add: a shared task list and inter-agent messaging managed by a lead, as the [parallel agents documentation](https://code.claude.com/docs/en/agents) describes. If you cannot name the messages teammates would exchange, subagents are the better fit.

> **Pro tip:** Draft two or three sample messages one worker would send another. If they read like status reports to a manager, use subagents instead.

### Step 5: Check file overlap before choosing a team

Map which workers would edit which files. Teammates do not receive isolated worktrees, according to the [Claude Code agents documentation](https://code.claude.com/docs/en/agents), so overlapping edits can conflict. Anthropic positioned teams for independent, read-heavy work in the [Opus 4.6 announcement](https://anthropic.com/news/claude-opus-4-6), and a [practitioner guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/guide/workflows/agent-teams.md) reports they struggle when several agents modify the same files. If overlap cannot be removed by reassigning ownership, keep the writing in a single session or sequential subagents.

### Step 6: Price the run

Estimate cost before committing. The [agent teams documentation](https://code.claude.com/docs/en/agent-teams) states that token costs scale linearly with the number of teammates and that more teammates do not speed work up proportionally. Independent evidence is thin: a [Reddit benchmark post](https://reddit.com/r/ClaudeAI/comments/1ss7f38/we_ran_52_controlled_benchmarks_on_claude_code) claims teams cost 73-124% more than sequential runs with no quality gain, but it is practitioner data rather than a controlled study. Decide what speed or coverage you are buying with the extra tokens and whether that is worth it for this task.

> **Pro tip:** Start small, for example two or three teammates, and add more only if the first run shows independent work sitting idle.

### Step 7: Confirm the experimental limits fit your plan

Agent teams are experimental and disabled by default, and a [practitioner comparison](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows) notes they are enabled with the `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` variable on v2.1.32 ([source](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows)) or later. The same source lists constraints: no /resume for in-process teammates, one team per lead, no nested teams, a fixed lead, permissions inherited at teammate creation, and split panes that need tmux or iTerm2. Check each against your plan, such as whether you expect to pause overnight and resume. If a limit breaks the plan, fall back to subagents and record why.

> **Pro tip:** If the work will span several stop-and-start sessions, the resume limitation alone is usually enough reason to avoid a team.

## Best Practices

- Default to the simplest mode and escalate on evidence. Each step from single session to subagents to a team adds coordination, which the [agent teams documentation](https://code.claude.com/docs/fr/agent-teams) calls out explicitly. Escalate only when you can name the specific need that forces the move.
- Decide on communication pattern, not task size. A large job can still be hub-and-spoke work where every worker reports to one parent, which is exactly how the [Claude Code glossary](https://code.claude.com/docs/en/glossary) describes subagents. The deciding factor is whether workers need each other's output mid-task.
- Keep writing in fewer hands than reading. Reviews and investigations parallelize well, but overlapping edits do not because teammates share the working tree, per the [agents documentation](https://code.claude.com/docs/en/agents). Where possible, split a job into a parallel read phase and a narrower write phase.
- Write the decision down with a switch condition. Record the mode, the reason and what would change it, for example switching to a team if frontend and backend streams keep blocking on each other's questions. A written trigger turns a hunch into something a reviewer can challenge.
- Define reusable roles once so switching modes is cheap. The [agent teams documentation](https://code.claude.com/docs/en/agent-teams) lets a role defined as a subagent be referenced when spawning teammates, so you can start with subagents and promote the same role to a team without rewriting instructions.
- Treat cost and quality claims skeptically in both directions. No controlled, independent comparison of teams, subagents and single sessions has been published, and the [benchmark post](https://reddit.com/r/ClaudeAI/comments/1ss7f38/we_ran_52_controlled_benchmarks_on_claude_code) showing higher cost is practitioner data. Run a small trial on your own repository before standardizing on either choice.

## Common Mistakes

- **Reaching for an agent team because the task feels big.** — Size alone does not justify a team. Check whether workers must message each other; if they only report back, subagents that report to the parent handle it with less overhead, as the [glossary](https://code.claude.com/docs/en/glossary) describes.
- **Running several teammates that write to the same files.** — Teammates do not get isolated worktrees, per the [agents documentation](https://code.claude.com/docs/en/agents). Assign non-overlapping files to each writer, or keep the overlapping edits sequential in one session.
- **Starting team work you will need to pause and resume later.** — In-process teammates are not restored by /resume, according to the [practitioner comparison](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows). Plan team runs to finish in one sitting, or use subagents for long-running, interruptible work.
- **Adding teammates to make a slow run go faster.** — Token costs scale linearly with teammates while speed does not, per the [agent teams documentation](https://code.claude.com/docs/en/agent-teams). Add a teammate only when there is independent work waiting for one.
- **Staying in one bloated session because delegation feels like extra setup.** — When search results and logs crowd the context, the model loses track of decisions. Delegate exploration to subagents to preserve the main context, as the [architecture guide](https://cc.bruniaux.com/guide/architecture) recommends.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/claude-code-agent-teams/METHOD.md) — Claude Code Agent Teams

## Related Skills

- [Decomposing Tasks for Agent Teams](../decomposing-tasks-for-agent-teams/SKILL.md)
- [Designing Agent Roles and Scopes](../designing-agent-roles-and-scopes/SKILL.md)
- [Coordinating Inter-Agent Communication](../coordinating-inter-agent-communication/SKILL.md)
- [Reviewing and Synthesizing Teammate Outputs](../reviewing-and-synthesizing-teammate-outputs/SKILL.md)
- [Parallelizing Independent Work Across Sessions](../parallelizing-independent-work-across-sessions/SKILL.md)
- [Managing Shared Task State](../managing-shared-task-state/SKILL.md)

## Sources

- [Claude Opus 4.6](https://anthropic.com/news/claude-opus-4-6)
- [Orchestrate teams of Claude Code sessions - Claude Code Docs](https://code.claude.com/docs/en/agent-teams)
- [Orchestrer des équipes de sessions Claude Code](https://code.claude.com/docs/fr/agent-teams)
- [Glossary - Claude Code Docs](https://code.claude.com/docs/en/glossary)
- [Agent Teams Workflow - claude-code-ultimate-guide - GitHub](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/guide/workflows/agent-teams.md)
- [Subagents vs Agent Teams vs Workflows: Claude Code's](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows)
- [Run agents in parallel - Claude Code Docs](https://code.claude.com/docs/en/agents)
- [We ran 52 controlled benchmarks on Claude Code. Agent Teams cost 73-124% more than sequential with zero quality gain.](https://reddit.com/r/ClaudeAI/comments/1ss7f38/we_ran_52_controlled_benchmarks_on_claude_code)
- [Claude Code Architecture \& Agent Loop \| Claude Code Guide](https://cc.bruniaux.com/guide/architecture)
