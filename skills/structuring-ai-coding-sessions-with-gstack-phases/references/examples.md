# Examples: Structuring AI Coding Sessions with gstack Phases

## Sizing three changes in one morning

**Scenario:**

Illustrative scenario: a developer starts the day with three items: a misspelled label, a report that saved filters disappear after logout, and a request for a new export feature.

**Walkthrough:**

The label fix gets no gstack phases. The developer edits it directly and commits.

The filter bug gets a short sequence. The developer runs `/investigate`, which traces the data flow, freezes edits to the affected module and finds the cause before any fix. After the fix, `/review` checks the branch and `/ship` opens the pull request.

The export feature gets the full sprint, starting with `/office-hours` to find out what users actually want exported and why. The developer writes the three plans at the top of the session notes before running anything, which keeps the small items small and the large one properly planned.

## A feature that spans three days

**Scenario:**

Illustrative scenario: an engineer is building a notification settings page that will take several sittings to finish.

**Walkthrough:**

On day one the engineer runs `/office-hours` and `/autoplan`, answers two taste decisions, approves the plan in plan mode and starts building. Before stopping, they run `/context-save`, which records the branch state, the decisions made and the remaining tasks.

On day two they run `/context-restore` and continue from the saved state. Midway through, they find that the plan assumed a settings table that does not exist. They return to plan mode, amend the plan and rerun the engineering review on the change before building further.

On day three, `/review` and `/qa` pass, `/ship` opens the pull request, and after approval `/land-and-deploy` merges it and verifies production.

## Skipping a phase and adjusting the defaults

**Scenario:**

Illustrative scenario: a small team decided that internal admin screens could skip `/qa` to save time.

**Walkthrough:**

A week later, `/retro` shows a fix commit for an admin form that broke on submit. The team looks at the change and sees that a `/qa` run on the affected page would likely have exercised that form.

They update their sizing defaults: admin screens still skip the design reviews, but they keep `/qa` in its quick mode. The rule change goes into the project's CLAUDE.md so every session applies it.
