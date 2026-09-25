# Examples: Orchestrating gstack Power Tools

## Debugging a billing bug without collateral edits

**Scenario:**

Illustrative scenario: customers report duplicate invoice emails. The billing code lives in one directory, and the repository also holds authentication and notification code that must not change in this fix.

**Walkthrough:**

The developer runs `/investigate`, which freezes edits to the billing directory automatically and starts tracing the data flow. Midway, the agent tries to adjust a notification helper; the freeze blocks the edit, and the developer sees that the helper was a symptom and not the cause.

The investigation finds a retry path that sends the email before the invoice is marked as sent. The developer approves the fix, runs `/review`, and then `/codex` in review mode because the code touches billing. Both reviewers accept the fix, and Codex adds one finding about a missing test for the retry path, which the developer adds before running `/unfreeze`.

## First deploy of a new service

**Scenario:**

Illustrative scenario: a small team is shipping a new internal service through gstack for the first time.

**Walkthrough:**

The lead runs `/setup-deploy`, which detects the hosting platform, the production URL and the deploy command. On the first `/land-and-deploy`, gstack walks through the steps as a dry run, and the lead notices the health check points at the wrong path. They correct the configuration.

The next run merges the approved pull request, waits for CI and the deploy, and checks production. The lead then starts `/canary`, which watches the new service for errors during the first hours after release.

## A cleanup task near production data

**Scenario:**

Illustrative scenario: an engineer needs to remove unused tables from a staging database and tidy related scripts, working from a machine that also has production access configured.

**Walkthrough:**

The engineer runs `/guard`, which turns on destructive-command warnings and freezes edits to the scripts directory. When the agent proposes a `DROP TABLE` command, `/careful` pauses it, and the engineer checks that the connection string points at staging before approving.

Because the team has its own data-reset script, the engineer adds its name to the per-project careful patterns file so future sessions warn before running it. At the end, the engineer runs `/unfreeze` and closes the session.
