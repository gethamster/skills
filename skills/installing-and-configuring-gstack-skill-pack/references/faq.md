# FAQ: gstack Setup Guide

## What do I need installed before I set up gstack?

The README lists Claude Code, Git and Bun, plus Node.js on Windows. On Windows, gstack runs through Git Bash or WSL. The `/cso` security skill has extra build prerequisites, and setup leaves it unavailable when they are missing. Everything else installs without them.

## Why does a gstack slash command not appear after installation?

The usual causes are an incomplete setup run, a name collision with a skill you already have, or a missing gstack section in the project's CLAUDE.md. Rerun `./setup` from `~/.claude/skills/gstack` and read the final summary, which names any skill it did not register and why. If a name collides, rename your own skill or switch to prefixed names. Then confirm the CLAUDE.md section lists the current skills.

## Should I use short or prefixed command names?

Short names such as `/qa` are quicker to type. Prefixed names such as `/gstack-qa` avoid collisions when you run other skill packs, which is the case the README calls out. Pick one per team and record it in CLAUDE.md, because mixed naming makes shared instructions unreliable. Setup remembers the choice across upgrades.

## What does team mode change?

Team mode bootstraps a shared repository so teammates get gstack automatically, without vendoring gstack files into the repo. Each Claude Code session then runs a quick update check, throttled to once an hour. With `required`, teammates without gstack are blocked until they install it; with `optional`, they are nudged. It is the simplest way to keep everyone on the same version.

## Can I install gstack for Codex, Cursor or other agents?

Yes. Rerun setup with a `--host` flag, such as `--host codex` or `--host cursor`, or let setup auto-detect installed agents. Each host gets generated versions of the skills in its own skills directory. For agents that only read rules files, the README provides an instruction-only digest you can copy into a file such as AGENTS.md.

## How do I update or remove gstack?

Run `/gstack-upgrade`, or set `auto_upgrade: true` in `~/.gstack/config.yaml`. To remove it, run the uninstall script at `~/.claude/skills/gstack/bin/gstack-uninstall`, which also removes gstack's hooks and state. The script does not edit CLAUDE.md, so delete the gstack sections from each project by hand.
