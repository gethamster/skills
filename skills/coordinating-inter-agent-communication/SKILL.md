---
name: "coordinating-inter-agent-communication"
description: "Keep independent Claude Code teammates aligned through targeted, self-contained mailbox messages, direct interventions and careful recovery after resume."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "claude-code-agent-teams"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Claude Code Agent Teams Inter-Agent Communication

> Keep independent Claude Code teammates aligned through targeted, self-contained mailbox messages, direct interventions and careful recovery after resume.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 20-40 minutes to set conventions, then ongoing during a team run |
| Outcome | Teammates exchange the information they need at their shared boundaries, stay in sync with the task list, and do not stall or duplicate work. |
| Prerequisites | Agent Teams enabled in Claude Code, A decomposed task list with file or module ownership per teammate, Agreed shared contracts such as API shapes or type stubs where teammates meet |
| Part of | [Claude Code Agent Teams](../../methods/claude-code-agent-teams/METHOD.md) |

## Overview

In an agent team, each teammate is a separate Claude Code session with its own context window, and teammates can message each other directly rather than routing everything through the lead, as the [Claude Code agent teams documentation](https://code.claude.com/docs/en/agent-teams) describes. The [Claude Code glossary](https://code.claude.com/docs/en/glossary) draws the contrast with subagents: subagents report only to their parent, while teammates can be contacted by the lead, by each other and by you. For background on the feature itself, see the [Claude Code Agent Teams method page](https://tryhamster.com/methods/claude-code-agent-teams).

That design hands you a real coordination problem. Because no teammate can see another's context, anything one agent learns that another needs has to travel as a message. A backend teammate that renames an endpoint knows it did; the frontend teammate does not until someone tells it. Coordinating inter-agent communication is the skill of making those messages happen at the right moments, with enough content that the receiver can act without guessing, and without turning the mailbox into a noisy chat room that burns tokens.

The skill covers three situations. First, peer-to-peer exchanges between teammates whose tasks touch, such as the dependent cards in a [dev.to multi-agent workflow write-up](https://dev.to/javatarz/multi-agent-development-workflows-with-claude-code-n23), where teammates use direct messaging alongside a shared task list with dependency tracking. Second, you contacting a teammate directly to redirect, unblock or question it, rather than asking the lead to relay. Third, communication after a session resume, when the teammates the lead remembers may no longer exist.

The inputs are the team's task list, the file or module ownership each teammate holds, and any shared contracts such as API shapes. The outputs are short, self-contained messages, a record of decisions that affect more than one teammate, and a task list that agrees with what the messages say. You know the skill is working when teammates rarely stall waiting on each other, the lead's synthesis step finds few surprises, and no teammate rebuilds something another already changed.

It is not a substitute for good decomposition. If two teammates need to talk constantly, their boundary is probably in the wrong place, and the fix belongs in how tasks and roles were split, not in more messages. Treat heavy message traffic as a diagnostic signal about the plan.

## How It Works

Each teammate runs as an independent session with its own context window, and the [agent teams documentation](https://code.claude.com/docs/en/agent-teams) describes a lead that coordinates the work plus inter-agent messaging between members. The [Claude Code Guide agent teams workflow](https://cc.bruniaux.com/guide/workflows/agent-teams) describes the same arrangement as a mailbox system: a teammate addresses a message to another teammate, and it is delivered to that teammate's mailbox. Nothing is shared implicitly. Apart from the shared task list and the files in the repository, a message is the only channel through which one teammate's findings enter another's context.

Three channels therefore carry information, and each suits different content. The shared task list carries status: what is claimed, blocked or done, and the [dev.to workflow write-up](https://dev.to/javatarz/multi-agent-development-workflows-with-claude-code-n23) notes that dependency tracking there can auto-unblock tasks as prerequisites complete. Files carry the work itself. Messages carry everything else: decisions, questions, warnings about changed interfaces and requests for review. Mixing these up causes most communication failures. A teammate that announces completion in a message but never updates its task leaves dependents waiting, and the [documentation](https://code.claude.com/docs/en/agent-teams) warns that task status can lag because teammates sometimes fail to mark tasks complete, which can block dependent tasks.

The lead has a distinct role. Only the lead can manage the team, and teammates cannot spawn their own teammates, per the [agent teams documentation](https://code.claude.com/docs/en/agent-teams). The [Claude Code Guide architecture notes](https://cc.bruniaux.com/guide/architecture) list passing context explicitly to each worker and making decisions that span multiple workers among a coordinator's responsibilities. In practice, peer messages settle questions that live on the boundary between two teammates, and anything that changes the plan for others, or overrides a task's agreed scope, goes through the lead.

You are a participant too. The [glossary](https://code.claude.com/docs/en/glossary) states that you can interact with any teammate, not only the lead, so a correction reaches the agent doing the work without a relay that might paraphrase it. Split-pane display, which makes watching several teammates practical, requires tmux or iTerm2 according to a [practitioner comparison](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows).

Messages cost tokens. Each teammate consumes tokens independently in its own context window, as the [documentation](https://code.claude.com/docs/en/agent-teams) explains, so every message is processed in the receiver's context and broadcast chatter multiplies that cost. Targeted messages to the one teammate who needs the information are cheaper and clearer than announcements to everyone.

Session resume is the sharp edge. In-process teammates are not restored by /resume or /rewind, and after resuming the lead may try to message teammates that no longer exist, according to the [agent teams documentation](https://code.claude.com/docs/en/agent-teams); a [best-practices guide](https://claudefa.st/blog/guide/agents/agent-teams-best-practices) flags the same constraint. Messages addressed to a vanished teammate reach no one, so after any resume you re-establish who is actually running before relying on the mailbox. Shutdown also takes time, because teammates finish their current request or tool call before stopping ([documentation](https://code.claude.com/docs/en/agent-teams)), so a stop request is not instant.

## Step-by-Step Guide

### Step 1: Map the communication boundaries

Before spawning anyone, walk the task list and mark every pair of tasks that share an interface, a data shape or a file boundary. These pairs are where messages will be needed; everywhere else, teammates should be able to work silently. Write the partner's role into each task description so the teammate knows who to tell when its side changes. If one task touches many others, consider whether the lead should own that decision instead of a teammate.

The output is a short list of expected message routes.

> **Pro tip:** If a single teammate appears in most of your boundary pairs, split its work or move the shared decision into a planning task that completes before parallel work starts.

### Step 2: Set message conventions in the spawn prompt

Tell every teammate, in its initial instructions, what warrants a message: an interface change, a blocker, a question only a specific teammate can answer, or completion of work another task depends on. Tell it equally what does not warrant one, such as routine progress, which belongs in the task list. Require that any message announcing completion is paired with marking the task complete. Conventions set up front are cheaper than correcting behavior mid-run.

> **Pro tip:** Give teammates a fixed message shape, for example: what changed, where, what you need from the receiver, and whether a reply is required.

### Step 3: Write self-contained messages

Each message should make sense to a receiver that has none of the sender's context, because it genuinely does not. Name the file, function or endpoint, state the old and new behavior, and say what the receiver should do next. Avoid references like 'the change we discussed', since the receiver never saw that discussion. This mirrors the coordinator guidance to pass context explicitly to each worker.

A receiver that has to ask a clarifying question costs a round trip and tokens in two contexts.

### Step 4: Route cross-cutting decisions through the lead

Let teammates settle questions that sit on their own shared boundary, such as the exact field name in a response both of them use. When a decision changes scope, affects teammates outside the pair, or conflicts with the plan, escalate it to the lead instead. The lead is the only session that can manage the team and see the whole plan, so it is the right place for trade-offs. Ask the lead to record the decision where every affected teammate will see it, then message each one.

Peer agreements that silently reshape the plan are how integration surprises happen.

> **Pro tip:** When a teammate asks you something that affects others, answer through the lead so the decision lands in one record rather than scattered peer threads.

### Step 5: Contact teammates directly when you intervene

If you see a teammate drifting out of its owned files, stuck in a loop, or working from a wrong assumption, message that teammate yourself rather than asking the lead to relay. A direct message avoids paraphrase and reaches the agent at the point of the problem. State the correction, the reason, and the boundary it should stay within. Afterwards, tell the lead what you changed so its picture of the team stays accurate.

Keep interventions rare, since each one interrupts the teammate's own flow.

### Step 6: Reconcile messages with the task list

Periodically compare what messages claim against what the task list shows. A teammate that reported finishing a prerequisite but left its task open is blocking dependents, which is a documented failure mode. Message that teammate to mark the task complete, or ask the lead to update it after verifying the work. Also check the reverse: tasks marked done with no message to the dependent teammate when a handoff needed explanation.

The task list should always tell the same story as the mailbox.

> **Pro tip:** Make this check part of every time you look in on the team, not something you do only when work seems stalled.

### Step 7: Re-establish the roster after resume

After /resume or /rewind, assume in-process teammates are gone, because they are not restored. Before any messaging, have the lead confirm which teammates actually exist, and tell it to stop addressing the old ones. Spawn replacements for unfinished work and give each a fresh, self-contained briefing: the task, owned files, current state from the task list, and any decisions made before the resume. Do not rely on replacements inheriting earlier messages, since those lived in contexts that no longer exist.

> **Pro tip:** Keep important cross-teammate decisions in a file or task description, not only in messages, so a replacement teammate can be briefed from a durable record.

## Best Practices

- Keep status in the task list and reasoning in messages. Status in messages gets lost and does not unblock dependents, while reasoning in task fields clutters the list everyone scans.
- Message the one teammate who needs the information rather than broadcasting. Each teammate processes messages in its own context and consumes tokens independently, so broadcasts multiply cost and noise.
- Write every message as if the receiver just arrived. Teammates share no context, so a message that names files, behaviors and the requested action prevents clarifying round trips.
- Pair every completion message with a task update. Task status can lag when teammates forget to mark work complete, and dependents stay blocked until someone notices.
- Record decisions that affect more than two teammates through the lead. A single durable record survives resumes and gives the lead's synthesis step something to check against.
- Treat heavy message traffic between two teammates as a planning signal. Constant back-and-forth usually means their boundary cuts through shared work, which is cheaper to fix by redrawing ownership than by messaging more.

## Common Mistakes

- **Assuming teammates know what others have done because they work in the same repository.** — Each teammate has its own context window and only sees another's changes if it reads the files or receives a message. Send an explicit message whenever a change affects a teammate's side of a boundary.
- **Announcing completion in a message but leaving the task open.** — Dependent tasks unblock from the task list, not from the mailbox. Require teammates to mark tasks complete as part of finishing, and check for mismatches when work stalls.
- **Letting two teammates agree on a change that alters the plan for others.** — Peer messages should settle only their shared boundary. Escalate scope changes and cross-cutting decisions to the lead so every affected teammate is informed and the decision is recorded.
- **Continuing to message teammates after /resume as if nothing changed.** — In-process teammates are not restored by /resume or /rewind, and messages to them reach no one. Confirm the live roster first and brief replacements from durable records.
- **Relaying corrections through the lead when you could message the teammate directly.** — You can interact with any teammate. Direct messages avoid paraphrase and reach the agent at the point of the problem; then inform the lead of what you changed.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/claude-code-agent-teams/METHOD.md) — Claude Code Agent Teams

## Related Skills

- [Decomposing Tasks for Agent Teams](../decomposing-tasks-for-agent-teams/SKILL.md)
- [Designing Agent Roles and Scopes](../designing-agent-roles-and-scopes/SKILL.md)
- [Reviewing and Synthesizing Teammate Outputs](../reviewing-and-synthesizing-teammate-outputs/SKILL.md)
- [Parallelizing Independent Work Across Sessions](../parallelizing-independent-work-across-sessions/SKILL.md)
- [Choosing Agent Teams Versus Subagents](../choosing-agent-teams-versus-subagents/SKILL.md)
- [Managing Shared Task State](../managing-shared-task-state/SKILL.md)

## Sources

- [Orchestrate teams of Claude Code sessions - Claude Code Docs](https://code.claude.com/docs/en/agent-teams)
- [Glossary - Claude Code Docs](https://code.claude.com/docs/en/glossary)
- [Subagents vs Agent Teams vs Workflows: Claude Code's](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows)
- [Claude Code Agent Teams Best Practices \& Troubleshooting](https://claudefa.st/blog/guide/agents/agent-teams-best-practices)
- [Claude Code Architecture \& Agent Loop \| Claude Code Guide](https://cc.bruniaux.com/guide/architecture)
- [Multi-Agent Development Workflows with Claude Code](https://dev.to/javatarz/multi-agent-development-workflows-with-claude-code-n23)
- [Agent Teams Workflow \| Claude Code Guide](https://cc.bruniaux.com/guide/workflows/agent-teams)
