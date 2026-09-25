# FAQ: Orchestrating gstack Power Tools

## How many power tools does gstack have?

The README headline says eight, and the power tools table now lists more, including the safety commands, second-opinion reviewers, gstack's own browser, deploy setup, memory tools, the upgrader and iOS testing commands. The exact set changes between releases. Check the table for your installed version.

## Is /freeze safe enough to protect production code?

No. `/freeze` blocks the Edit and Write tools outside one directory, but shell commands such as `sed` can still change files elsewhere, and the docs describe it as accident prevention. Use it to keep a debugging session focused. Keep real protection in permissions, branch rules and credentials.

## What is the difference between /careful, /freeze and /guard?

`/careful` warns before destructive commands such as recursive deletes, dropped tables and force pushes. `/freeze` limits edits to one directory. `/guard` turns on both at once for production work, and `/unfreeze` removes the directory boundary.

## When should I use /codex instead of relying on /review?

Use `/codex` in addition to `/review` when a missed bug would be costly, for example in payment, authentication, migration or concurrency code. Codex reviews the diff independently, and gstack shows which findings both reviewers raised. For routine changes, `/review` alone is usually enough.

## Do I need /setup-deploy before /land-and-deploy?

The README describes `/setup-deploy` as the one-time setup for `/land-and-deploy`, detecting your platform, production URL and deploy commands. Run it once per project. The first `/land-and-deploy` run then does a dry-run walk-through so you can check the pipeline before anything irreversible happens.
