# FAQ: Navigating gstack Slash Commands

## Where do I see every gstack command?

The README's tables list the specialist skills and the power tools, and the skill deep dives page describes each one with its modes and examples. Your project's CLAUDE.md gstack section lists what your team expects to use. Compare the two after upgrades, because new commands appear often.

## Which command should I run first on a new feature?

Start with `/office-hours`. It challenges the framing, tests your premises and writes a design doc that the plan reviews read. The README's quick start follows it with `/plan-ceo-review`, then `/review` on a branch and `/qa` on a staging URL.

## What is the difference between /plan-eng-review and /review?

`/plan-eng-review` runs before code and locks the architecture, data flow, edge cases and test plan. `/review` runs on a branch with changes and looks for bugs that pass CI but fail in production, fixing mechanical ones itself. Use the first to shape the work and the second to check it.

## Do I have to type the command, or will Claude pick it?

Both work. Claude Code can load a skill automatically when your request matches its description, and gstack adds trigger phrases such as "run a security check." Typing the command removes any doubt about which specialist ran, so type it for steps that matter.

## When should I use /autoplan instead of the individual reviews?

Use `/autoplan` when you want the CEO, design, developer experience and engineering reviews run in one pass and are happy for routine questions to be decided by its encoded principles. It stops only for taste decisions. Run the reviews one at a time when you want to make each decision yourself.
