# FAQ: Using gstack's Role Perspectives

## Are gstack's roles separate AI agents?

Mostly no. Each role is a skill, a set of instructions that Claude Code follows, so the CEO, eng manager, staff engineer and QA lead are one model applying different mandates at different times. The genuine exception is `/codex`, which sends the work to OpenAI's Codex CLI for an independent review. Use it when you need a view that does not share Claude's blind spots.

## In what order should I run the roles?

Run them in the order the sprint implies: CEO review on the idea, eng manager review on the plan, design or developer experience review where they apply, then the staff engineer review and QA on the code. `/autoplan` runs the plan-stage reviews for you in that order, with engineering last. Running a later role first means it works without the artifact it expects.

## Which CEO review mode should I choose?

Choose by the decision you need. Scope expansion looks for the ambitious version, selective expansion keeps your scope and offers additions one at a time, hold scope reviews the existing plan rigorously, and scope reduction finds the minimum version. If you are unsure, selective expansion keeps control with you.

## What do I do when two roles disagree?

Write the disagreement down, read each role's reasoning, and decide yourself. gstack's Builder Ethos says models recommend and users decide, even when two models agree. Record the decision and the reason in the plan or pull request so it is not relitigated.

## Is the /codex second opinion worth running on every change?

Usually not. It adds a separate provider and extra review time. Reserve it for code where a missed bug is expensive, such as payments, authentication, migrations or concurrency, and use challenge mode when you want it to actively try to break the code.
