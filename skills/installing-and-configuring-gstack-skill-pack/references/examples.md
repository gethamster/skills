# Examples: gstack Setup Guide

## A solo developer installs gstack for one side project

**Scenario:**

Illustrative scenario: a developer works alone on a small web app in Claude Code and wants to try gstack without changing any other project on the machine.

**Walkthrough:**

The developer pastes the README's install instruction into Claude Code, which clones gstack into `~/.claude/skills/gstack` and runs `./setup`. Setup asks about command names, and the developer picks short names because no other skill pack is installed. The summary reports that every skill registered and that the bundled browser installed.

Next, the developer adds the gstack section to the app's CLAUDE.md, copying the skill list from the current README. To check the install, they run `/office-hours` on a planned feature and `/review` on an open branch. Both respond with their structured workflows, so the developer stops there and decides to use the pack for the next feature before trying the rest.

## A team of four standardizes on one version

**Scenario:**

Illustrative scenario: four engineers share one repository. Two already installed gstack on their own at different times, one uses prefixed names, and the other two have never installed it.

**Walkthrough:**

The tech lead agrees with the team on prefixed names, because two engineers also use another skill pack. From inside the repository, the lead runs the README's team-mode command with `optional`, which bootstraps the repo and commits the change, and pushes it.

The two engineers without gstack get a nudge in their next Claude Code session and install it. The two with older installs now receive the hourly update check. After a week, the team switches the setting to `required`, because every pull request in the repository is now expected to go through `/review` and `/qa`. The lead updates the CLAUDE.md gstack section to the prefixed command names so the instructions match what everyone can run.

## A developer adds gstack to a second agent

**Scenario:**

Illustrative scenario: a developer uses Claude Code for most work and Codex CLI for some tasks, and wants the same review workflow in both.

**Walkthrough:**

The developer reruns setup with `--host codex`, which generates Codex versions of the skills in the Codex skills directory. In Codex, the outside-review skill that calls Claude Code is available, while `/codex` itself is not, because each harness omits its own wrapper.

Before relying on it, the developer runs one review in each agent on the same branch and compares the output. One command behaves differently in Codex, so the developer notes it in the project's AGENTS.md and keeps using Claude Code for that step. Later, after a gstack upgrade, the developer reruns setup for the Codex host so its generated skills stay in sync.
