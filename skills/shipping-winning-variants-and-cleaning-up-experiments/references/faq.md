# FAQ: Shipping the Winning Variant and Cleaning Up Feature Flags

## How long should I wait between rolling the flag to 100% and deploying the hardcoded code change?

Wait at least 24-48 hours at 100% flag rollout before deploying the code change. This period lets you observe the winning variant at full traffic under real production conditions. You are looking for any performance issues, edge cases, or metric anomalies that did not appear during the experiment when only a portion of users saw the variant. If your experiment ran on a small user base (under 1,000 users per variant), consider waiting longer because the experiment may not have surfaced rare edge cases.

## What happens if I archive a feature flag that is still being evaluated by production code?

Archived flags in PostHog return a default value when evaluated, typically false for boolean flags or the first defined variant for multivariate flags. If the default does not match your winning variant, users will see the wrong experience. Always verify that flag evaluations have dropped to zero in PostHog's Feature Flags activity panel before archiving. If you accidentally archive too early, you can unarchive the flag immediately in PostHog to restore its configuration.

## Should I clean up the flag before or after interpreting the experiment results?

Always interpret results fully before starting cleanup. Flag cleanup should happen after you have reviewed all metrics, discussed results with stakeholders, and made a deliberate decision about which variant to ship. The sibling skill [Interpreting Bayesian and Frequentist Results in PostHog](https://tryhamster.com/skills/interpreting-bayesian-and-frequentist-experiment-results) covers the analysis phase. Cleanup is the final step in the experiment lifecycle, not something you do in parallel with analysis.

## How do I handle cleanup when the experiment's feature flag is shared with other experiments or feature rollouts?

Do not share feature flags between experiments. Each experiment should have its own dedicated flag. If you have accidentally reused a flag, you will need to create a new flag for the ongoing use case before archiving the experiment flag. Copy the rollout configuration to the new flag, update all code references to point to the new flag key, deploy the change, verify the old flag has zero evaluations, and then archive it.

This is painful, which is exactly why the sibling skill [Setting Up PostHog Feature Flags for Experiment Variants](https://tryhamster.com/skills/setting-up-posthog-feature-flags-for-experiments) emphasizes creating a dedicated flag per experiment.

## Why does my post-rollout conversion rate differ from the experiment's winning variant rate?

Small differences (under 10% relative deviation) are normal and expected. Experiment cohorts are randomized samples that may not perfectly represent your full user base, especially for segments that joined after the experiment started or were excluded by targeting rules. Large differences suggest a problem. Check whether the flag is actually serving the winning variant to 100% of traffic by verifying the flag configuration in PostHog.

Also check whether the experiment had targeting filters (like "new users only") that are now gone at 100% rollout. The winning variant might perform differently for existing users who were not part of the experiment.

## Can I skip the flag rollout step and go straight to hardcoding the winner in code?

You can, but you lose your fastest rollback mechanism. If the winning variant behaves unexpectedly at full traffic, a flag change takes seconds while a code revert takes minutes to hours depending on your deployment pipeline. The only scenario where skipping the flag rollout is acceptable is when your deployment pipeline can ship a revert in under 5 minutes and you have high confidence from a large experiment sample size. Even then, the flag rollout step costs very little effort and provides significant safety.

## How do I handle flag cleanup for experiments that involved both PostHog and an external tool like Webflow?

Create a cleanup checklist that lists every system where the flag is evaluated. For a PostHog-plus-Webflow setup, this typically includes the Webflow custom code embed (where the PostHog JavaScript snippet checks the flag and swaps page elements), the main application codebase (if the flag is also checked server-side or in the app), and any analytics or event tagging that references the variant. Each system needs its own update. Coordinate the changes so they deploy in the same window.

The Webflow update is usually a manual edit to the page's custom code, while the application update goes through your normal PR and deployment process.
