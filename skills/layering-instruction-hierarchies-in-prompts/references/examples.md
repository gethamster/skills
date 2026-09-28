# Examples: Layering Instruction Hierarchies in Claude Prompts

## Slimming an overgrown CLAUDE.md

**Scenario:**

Illustrative scenario: a team's CLAUDE.md has grown to several screens covering style, deployment steps, database migration rules and a code review checklist, and Claude has started applying the review checklist to simple refactors.

**Walkthrough:**

The team inventories every section and applies the placement test. Style conventions and a note that one service uses a nonstandard config loader stay in CLAUDE.md. Deployment and migration procedures become two skills, and the review checklist becomes a command invoked only during reviews. A formatting rule that was repeatedly ignored moves to a hook.

CLAUDE.md shrinks to a short page with pointer lines to the new skills, and the next refactor task runs without the review checklist interfering.

## Scoping a bug fix at the turn level

**Scenario:**

Illustrative scenario: a developer wants Claude to fix an intermittent authentication failure and initially types only a request to fix the login bug.

**Walkthrough:**

The developer rewrites the turn prompt. It names the session handler file, pastes the exact error and the failing test name, states that the public API signature must not change, and asks for the existing auth test suite to run. The prompt ends with a done condition: the named test passes ten runs in a row and no other auth test regresses. Project conventions are left out because CLAUDE.md already covers them.

Claude's output now arrives with test results the developer can check directly.

## Resolving a clash between layers

**Scenario:**

Illustrative scenario: Claude keeps generating code with an old logging library even though the team migrated to a new one weeks ago.

**Walkthrough:**

The developer searches the instruction stack and finds the new library named in CLAUDE.md but the old one still referenced in a code-generation skill written before the migration. Because both are persistent, Claude sees conflicting guidance whenever the skill loads. The developer updates the skill to point at the CLAUDE.md convention instead of naming a library itself. A fresh-session test on a small feature confirms Claude now uses the new library consistently.
