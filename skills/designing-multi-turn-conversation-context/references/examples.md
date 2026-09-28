# Examples: Designing Multi-Turn Conversation Context Strategies

## Refactoring a payments module across phases

**Scenario:**

Illustrative scenario: a developer needs to refactor a payments module touching about a dozen files and expects the work to take most of a day.

**Walkthrough:**

She starts an exploration session asking Claude to map where payment state is read and written, then has it save findings to a notes file. She clears and opens a planning session that reads only the notes file and produces a plan document with numbered items and status markers. Coding happens in three sessions, one per file group, each starting from the plan and ending with tests passing and statuses updated. When Claude re-suggests a rejected interface midway through the second coding session, she rewinds to before that exchange instead of arguing.

At the end she adds two gotchas to CLAUDE.md about the test fixtures. The final commit session reviews the diff against the plan with a clean context.

## Recovering a debugging session that went stale

**Scenario:**

Illustrative scenario: after a long debugging session on a flaky integration test, Claude starts editing a config file back to a version the developer already changed.

**Walkthrough:**

The developer recognizes the reverted file state as a rot signal. He asks Claude to write a handoff note listing the hypotheses already ruled out, the current suspect, and the files changed. He checks the note, corrects one hypothesis Claude had recorded as confirmed when it was only suspected, and saves it. He clears the session and starts fresh with the handoff and the failing test output.

The new session proposes a targeted experiment on the first turn instead of revisiting ruled-out causes.

## Building team memory over a sprint

**Scenario:**

Illustrative scenario: a small team uses Claude Code daily on a shared repository and keeps hitting the same setup surprises in new sessions.

**Walkthrough:**

They agree that every session ends with a short memory review. Whoever ran the session adds any new gotcha to CLAUDE.md as a one-line rule with a reason, and removes rules that proved wrong. Task-specific notes go into per-ticket plan files rather than CLAUDE.md. After a couple of weeks, new sessions stop tripping over the local database setup and the deprecated build script.

They also notice the file stays short because obsolete rules are pruned as often as new ones are added.
