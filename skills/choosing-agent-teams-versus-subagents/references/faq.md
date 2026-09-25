# FAQ: Choosing Agent Teams Versus Subagents

## What is the main difference between subagents and agent teams in Claude Code?

Subagents run inside a single session and report only to the parent, while agent team members are independent sessions with their own context windows. The [Claude Code glossary](https://code.claude.com/docs/en/glossary) adds that teams share a task list and use peer-to-peer messaging, and you can interact with any teammate directly. In practice, subagents suit hub-and-spoke delegation and teams suit work where workers must talk to each other.

## Are agent teams always more expensive than subagents?

Anthropic's [agent teams documentation](https://code.claude.com/docs/fr/agent-teams) says teams use considerably more tokens than a single session and add coordination overhead. The sources here do not quantify subagent cost against teams directly, and no controlled comparison of the modes has been published. Treat teams as the higher-cost option and verify on your own workload.

## When is a single session enough?

A single session is enough when the task needs one continuous line of reasoning and its exploration does not crowd the context. Short bug fixes, focused refactors and small features usually qualify. Once search results and logs start pushing out the decisions you care about, delegate exploration to subagents rather than jumping straight to a team.

## Can I start with subagents and switch to a team later?

Yes, and it is often the safest path. The [agent teams documentation](https://code.claude.com/docs/en/agent-teams) lets reusable roles defined as subagents be referenced when spawning teammates, so role instructions carry over. Write your switch condition down at the start so the move is triggered by evidence, such as workers repeatedly blocking on each other.

## Do I need to enable anything to use agent teams?

Yes. Agent teams are experimental and disabled by default, and a [practitioner comparison](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows) notes you enable them with the `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` environment variable on v2.1.32 ([source](https://developersdigest.tech/blog/claude-code-subagents-vs-agent-teams-vs-workflows)) or later. Subagents need no such flag, which is one more reason to try them first.
