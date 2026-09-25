# FAQ: Shipping Winning Variants and Cleaning Up Flags

## What does End experiment do in PostHog?

It lets you choose a variant to keep, rolls that variant out to all users by changing the flag, and ends the experiment so results stop updating. If a variant was already rolled out to everyone, it marks the experiment complete without changing the flag. The experiment creator is notified of the primary metric outcome unless they ended it themselves.

## Can I remove the flag from PostHog right after ending the experiment?

Not while code still checks it. PostHog's stale flag guide says disabling a flag your code still checks turns the feature off for everyone. Remove the references from code, deploy, and then disable or delete the flag.

## Can PostHog remove the flag from my code?

With the GitHub integration connected, the end experiment dialog can open a draft pull request that removes the flag checks and keeps the shipped variant's code path. PostHog says to review the PR before merging. Without the integration, search for the flag key and remove each reference yourself.

## Does deleting the flag delete the experiment's results?

No. PostHog lets you delete flags linked to experiments that are not running without losing the experiment's historical data. Archive the experiment and keep its description as the record of what happened.

## Why bother cleaning up a flag that is already at 100%?

It still costs something. PostHog notes that every active flag counts toward feature flag billing even when fully rolled out, and a flag check that always returns the same value is dead code for future readers. Removing it keeps both the bill and the codebase smaller.
