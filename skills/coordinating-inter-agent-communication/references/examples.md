# Examples: Coordinating Inter-Agent Communication

## Announcing an interface change to a dependent teammate

**Scenario:**

Illustrative scenario: a teammate owning a payments service renames a response field while a second teammate is building a checkout screen that reads it.

**Walkthrough:**

Illustrative scenario: the payments teammate finishes the rename and, following the team's message convention, sends one targeted message to the checkout teammate rather than a broadcast. The message names the endpoint, states the old field name and the new one, points to the updated type stub, and says the checkout code should switch to the new field before its task is marked done. It also states that no reply is needed unless the new name breaks something. The payments teammate then marks its task complete so the dependent task unblocks.

The checkout teammate reads the message, updates its code, and moves on without a clarifying round trip. When the lead later integrates both sides, the field names already match.

## Redirecting a teammate that drifted out of scope

**Scenario:**

Illustrative scenario: while watching the team, you notice a test-writing teammate editing application code in a module owned by another teammate.

**Walkthrough:**

Illustrative scenario: instead of asking the lead to pass on a correction, you message the test teammate directly. You state that the module belongs to another teammate, that its task is limited to test files, and that if the code looks wrong it should report the issue to the owning teammate instead of fixing it. The test teammate reverts its edits and sends a self-contained message to the module owner describing the suspected bug with the failing test name. You then tell the lead what happened so its view of ownership stays accurate.

The module owner fixes the bug within its own files, and the test passes without two agents editing the same code.

## Recovering the mailbox after a session resume

**Scenario:**

Illustrative scenario: your terminal session drops mid-run and you use /resume to continue, with several teammate tasks still open.

**Walkthrough:**

Illustrative scenario: after resuming, the lead starts drafting messages to the teammates it remembers. You stop it and ask it to confirm which teammates are actually running, which shows that the in-process teammates were not restored. You have the lead spawn replacements only for the open tasks. Each replacement gets a fresh briefing built from the task list and the decisions file the team kept: its task, owned files, current state, and the interface agreements made earlier.

Because those agreements lived in a file rather than only in old messages, the replacements pick up where their predecessors left off, and messaging resumes against a roster that exists.
