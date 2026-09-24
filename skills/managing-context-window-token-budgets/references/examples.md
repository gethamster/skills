# Examples: Managing Context Window Token Budgets in Claude

## Debugging a flaky test without drowning in logs

**Scenario:**

Illustrative scenario: a developer chasing an intermittent test failure has run the full suite three times, and each run pasted thousands of lines of output into the session.

**Walkthrough:**

The developer notices Claude has started suggesting fixes for tests that already pass, a sign the window is crowded with irrelevant output. They run a focused compaction naming the flaky checkout test and the suspected race condition. They then switch to running only the failing test with output piped through a filter that keeps the assertion error and the last few lines. The next suggestions target the actual race, and the window stays small for the rest of the investigation.

## Mapping an unfamiliar module through a subagent

**Scenario:**

Illustrative scenario: an engineer joining a team needs to know every place a payments client is instantiated across a large repository before changing its constructor.

**Walkthrough:**

Instead of asking the main session to grep and open dozens of files, the engineer delegates the search to a subagent with instructions to return file paths and one line of purpose per call site. The subagent spends its own window on the exploration and returns a short list. The main session receives only that list, then reads the three call sites that need changes. The engineer finishes the refactor with most of the main window still free.

## Switching tasks mid-afternoon

**Scenario:**

Illustrative scenario: after finishing a database migration, a developer wants to fix an unrelated CSS layout bug in the same session.

**Walkthrough:**

The developer first adds one migration gotcha they discovered to CLAUDE.md so it persists. They run /clear because the layout bug shares no files or decisions with the migration. They open the new task with a scoped prompt naming the component file, the browser where the bug appears and what a correct layout looks like. Claude works from a clean window without migration history pulling its attention, and the fix lands in a few turns.
