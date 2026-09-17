---
name: shipping-winning-variants-and-cleaning-up-experiments
description: "This skill teaches you how to graduate a winning A/B test variant from experiment to production default, remove the losing variant's code paths, and archive the associated feature flag so your codebase and PostHog workspace stay clean."
metadata:
  homepage: https://tryhamster.com
  method: posthog-experiments-onboarding-a-b-test-method
---

# Shipping the Winning Variant and Cleaning Up Feature Flags After You PostHog Run Experiments

> This skill teaches you how to graduate a winning A/B test variant from experiment to production default, remove the losing variant's code paths, and archive the associated feature flag so your codebase and PostHog workspace stay clean.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 1-2 hours |
| Outcome | Every user receives the winning experience as the hardcoded default, all experiment branching logic is removed from the codebase, and the feature flag is archived in PostHog, leaving zero technical debt from the experiment. |
| Prerequisites | A completed PostHog experiment with a statistically significant winning variant, Familiarity with PostHog feature flags and the Experiments tab, Access to the codebase where feature flag evaluation logic lives, Understanding of your deployment pipeline (CI/CD, staging, production) |
| Part of | [PostHog Experiments Onboarding A/B Test Method](../../methods/posthog-experiments-onboarding-a-b-test-method/METHOD.md) |

## Overview

Running an experiment is only half the job. The other half, the part that most teams neglect, is shipping the winner cleanly. When you posthog run experiments through the [PostHog Experiments Onboarding A/B Test Method](https://tryhamster.com/methods/posthog-experiments-onboarding-a-b-test-method), every experiment creates a feature flag, branching code in your application, and a mental model in your team's head about which variant is "live." If you stop the experiment but leave the flag and branching logic in place, you accumulate what practitioners call "flag debt." Flag debt slows down future experiments because developers have to reason about stale conditional paths. It also introduces real production risk: a misconfigured flag rollout can accidentally re-enable a losing variant months after the experiment ended.

This skill covers the full post-experiment lifecycle. You will learn how to transition a feature flag from experiment mode to a 100%-rollout state, verify that the winning experience is reaching all users, remove the losing variant's code from your application, and archive the flag in PostHog. The concrete artifact you produce is a clean deployment where the winning variant is the new baseline, the codebase contains no references to the old experiment, and the PostHog workspace shows the flag as archived with a clear audit trail linking it to the original experiment and its results.

The skill matters most for teams running multiple onboarding experiments in sequence. If your first experiment's flag is still live when you launch your second experiment, you risk interaction effects between flags and confusing analytics. Cleaning up promptly is what separates teams that run one experiment a quarter from teams that run one a week. The discipline of shipping and cleaning is what makes the entire experimentation loop in the [PostHog Experiments Onboarding A/B Test Method](https://tryhamster.com/methods/posthog-experiments-onboarding-a-b-test-method) sustainable over time.

## How It Works

The mental model behind this skill is a three-phase state transition: Experiment Active, Winner Rolling Out, and Cleanup Complete. Understanding why each phase exists, and why you cannot skip any of them, prevents the most common post-experiment failures.

During the Experiment Active phase, your feature flag is managed by PostHog's experiment allocation engine. Users are bucketed into variants based on a hash of their distinct ID, and the flag's rollout percentage and variant weights are controlled by the experiment. When you stop the experiment, PostHog freezes the statistical results but does not automatically change the flag's behavior. This is by design. PostHog separates the experiment lifecycle from the flag lifecycle because teams need time to review results, discuss with stakeholders, and plan the rollout. The flag continues serving whatever distribution it had when the experiment was running. If your experiment was 50/50, half your users are still seeing the control after you click "stop."

The Winner Rolling Out phase is where you manually update the feature flag to serve the winning variant to 100% of traffic. You do this inside PostHog's Feature Flags interface by setting the rollout percentage to 100% and the variant payload to the winner. This is a deliberate, reviewable action. You are not merging code yet. You are telling PostHog, "From now on, every user who evaluates this flag should get variant B." This phase exists as a safety net. You can monitor dashboards and error rates to confirm the winning variant behaves correctly at 100% traffic before you commit to a code change. If something goes wrong, you can roll the flag back to the control variant in seconds, which is much faster than reverting a deployment.

The Cleanup Complete phase is the code-level change. Once you are confident the winning variant works at full traffic, you deploy a code change that removes the feature flag evaluation entirely. The winning variant's code becomes the only code path. The losing variant's code is deleted. The conditional logic that checked the flag is deleted. After this deployment, the feature flag in PostHog is no longer being evaluated by any client. You then archive the flag in PostHog, which removes it from the active flags list but preserves the audit trail. Archiving does not delete the flag's history, so you can always look back at what the experiment tested and when the flag was retired.

The reason you cannot skip the rollout phase and jump straight to code cleanup is risk management. If you deploy the hardcoded winner and discover a problem, your only option is a code revert, which takes minutes to hours depending on your pipeline. The flag rollout gives you a sub-second rollback mechanism. The reason you cannot skip code cleanup after the rollout is sustainability. Every unarchived flag is a branching point that developers must understand, QA must test, and future experiments must account for. Teams that skip cleanup routinely find themselves debugging "ghost" experiments six months later.

## Step-by-Step Guide

### Step 1: Step 1: Confirm the experiment has reached a valid conclusion

Open the Experiments tab in PostHog and navigate to your completed experiment. 05). Check all of your success metrics, not just the primary one. If a variant wins on the primary metric but loses badly on a guardrail metric like error rate or page load time, it may not be safe to ship.

Record the winning variant name, the lift percentage, and the confidence level in a brief summary. This summary becomes your audit trail for why you chose to ship this variant.

> **Pro tip:** If the experiment is inconclusive, do not default to shipping the control. Decide whether to extend the experiment, redesign the variant, or accept the null result. Shipping the control is a valid decision, but it should be deliberate and documented, not an accident of inaction.

### Step 2: Step 2: Stop the experiment in PostHog

Click the "Stop" button on your experiment in the PostHog Experiments tab. This freezes the experiment results and stops new users from being allocated into experiment cohorts. Note that stopping the experiment does not change the feature flag's behavior. Users who were already bucketed into variants will continue seeing their assigned variant because the feature flag is still active and still distributing traffic according to the experiment's allocation logic.

Stopping the experiment simply tells PostHog to stop collecting experiment-specific data and to preserve the final results.

> **Pro tip:** After stopping, wait at least one full analytics cycle (typically 24 hours) before proceeding. This ensures any delayed events from the final day are captured and your results snapshot is complete.

### Step 3: Step 3: Update the feature flag to serve the winning variant at 100%

Navigate to the Feature Flags section in PostHog. Find the flag associated with your experiment (it will have the same name or a linked reference). Edit the flag's rollout conditions. Set the rollout percentage to 100% and configure the flag to return only the winning variant's value.

If your flag was a boolean (true/false) and the winning variant was the treatment, set it to return true for all users. If your flag used multivariate payloads (like "control" and "test"), set the variant distribution to 100% for the winner and 0% for everything else. Save the flag. At this point, every user evaluating this flag will receive the winning variant.

> **Pro tip:** If your experiment had more than two variants (A/B/N testing), make sure you zero out all losing variants, not just one. A common mistake is setting the winner to 100% but leaving the distribution controls showing stale percentages for other variants.

### Step 4: Step 4: Monitor production metrics at 100% rollout

With the flag now serving the winning variant to all users, watch your production dashboards for 24-48 hours. Pay attention to the same metrics your experiment tracked: conversion rate, error rate, page load time, and any guardrail metrics you defined. Compare the all-traffic performance to the experiment's treatment group performance. A small discrepancy is normal because experiment cohorts are sometimes not perfectly representative of your full user base.

A large discrepancy, say more than 20% deviation from the experiment's measured lift, suggests something is wrong. Also monitor for technical issues like increased error logs, support tickets, or performance degradation that might not show up in your experiment metrics.

> **Pro tip:** Set up a PostHog dashboard or a simple alert in your monitoring tool that compares the current day's key metrics to the 7-day average. This gives you an early warning system without requiring you to stare at charts.

### Step 5: Step 5: Deploy the code change that hardcodes the winning variant

Create a pull request or code change that removes all feature flag evaluation logic for this experiment. isFeatureEnabled('your-experiment-flag')`. Replace the conditional branching with the winning variant's code only. Delete the losing variant's code entirely.

Do not comment it out or wrap it in a dead code block. Commented-out code creates confusion for future developers who will not know whether it is intentionally dead or accidentally disabled. Run your full test suite to make sure the removal did not break anything. Deploy to staging, verify the winning experience loads correctly, and then deploy to production.

> **Pro tip:** Search your entire codebase for the flag's key string (e.g., `your-experiment-flag`) to make sure you catch every reference. Flags are sometimes evaluated in unexpected places like analytics wrappers, server-side middleware, or configuration files.

### Step 6: Step 6: Verify the flag is no longer being evaluated

After your code deployment reaches production, go back to the PostHog Feature Flags interface and check the flag's evaluation activity. PostHog shows recent evaluations for each flag. Over the next few hours, the evaluation count for this flag should drop to zero. If evaluations are still happening, it means some part of your codebase, or an older cached version of your application, is still checking the flag.

Investigate and remove any remaining references. This verification step is critical because archiving a flag that is still being evaluated will cause those evaluation calls to return a default value, which might not match the winning variant and could break the user experience.

> **Pro tip:** Mobile apps and SPAs with aggressive caching may continue evaluating stale flags for hours or even days after deployment. If you have a mobile app, you may need to wait for a forced app update cycle before evaluations fully stop.

### Step 7: Step 7: Archive the feature flag in PostHog

Once evaluations have dropped to zero, return to the Feature Flags section in PostHog. Find your experiment's flag and archive it. Archiving removes the flag from the default active flags list but preserves its full history, including creation date, variant configuration, rollout changes, and linked experiment results. This is not the same as deleting.

You should almost never delete a flag because deletion erases the audit trail. Archiving keeps the workspace clean while maintaining the historical record. Add a note to the flag's description before archiving, something like "Experiment concluded [date]. Winner: variant B (+12% onboarding completion).

" This note makes it trivial for anyone reviewing flag history to understand what happened.

> **Pro tip:** Some teams create a quarterly review calendar event to audit for flags that were stopped but never archived. This catch-all prevents flags from slipping through the cracks when engineers get pulled onto other work.

### Step 8: Step 8: Update your experiment log and notify the team

Add a final entry to your team's experiment log, spreadsheet, or documentation system. Record the experiment name, the winning variant, the measured lift on each metric, the date the winner was shipped, the PR or deployment reference for the code change, and the date the flag was archived. Notify stakeholders (product managers, designers, other engineers) that the experiment is fully closed. This communication prevents someone from accidentally referencing a flag that no longer exists or asking about an experiment whose results are now production defaults. If you use a tool like Notion, Confluence, or a shared spreadsheet to track experiments, mark this experiment's status as "Shipped and Cleaned Up" rather than just "Completed."

> **Pro tip:** Include a screenshot of the final experiment results in your log entry. PostHog's experiment results page can change format over time, and a screenshot preserves the exact numbers you used to make your decision.

## Best Practices

- Always separate the flag rollout from the code deployment. Rolling the flag to 100% first gives you a sub-second rollback mechanism if the winning variant behaves differently at full traffic than it did during the experiment. Skipping this step and going straight to a code deployment means your only rollback is a full code revert, which is slower and riskier.
- Search your entire codebase for the flag key string, not just the files you remember editing. Feature flag checks often get added to logging wrappers, analytics calls, server-side rendering logic, and configuration files that are easy to forget. A global search for the flag name catches these orphaned references before they cause problems.
- Archive flags rather than deleting them. Archived flags in PostHog preserve the full history of variant configurations, rollout changes, and linked experiment results. Deleting a flag erases this audit trail, which makes it impossible to reconstruct what happened when someone asks about an old experiment six months later.
- Add a descriptive note to the flag before archiving, including the experiment name, the winning variant, the measured lift, and the PR reference for the code change. This note transforms the archived flag from a cryptic identifier into a self-documenting record of what was tested, what won, and where the code change landed.
- Set a hard deadline for flag cleanup after shipping the winner. Many teams use a rule like "flag must be archived within one sprint of the experiment ending." Without a deadline, cleanup gets deprioritized indefinitely, and you accumulate flag debt that makes future experiments harder to reason about.
- Monitor for stale flag evaluations after code deployment, especially if you have mobile apps or aggressively cached single-page applications. A flag that is being evaluated after its code is supposedly removed indicates an incomplete cleanup. PostHog's flag evaluation activity panel shows you whether evaluations are still happening.
- When removing the losing variant's code, delete it entirely rather than commenting it out. Commented-out code creates ambiguity for future developers who cannot tell whether the code is intentionally dead or accidentally disabled. If you need to reference the losing variant later, the code is preserved in your version control history.
- Coordinate flag cleanup across frontend and backend if your experiment spanned both layers. A common failure mode is removing the frontend flag check but leaving the backend still branching on the flag, or vice versa. Both layers must be cleaned up in the same deployment cycle.

## Common Mistakes

- **Stopping the experiment but never updating the feature flag, leaving 50% of users on the control variant indefinitely** — Stopping an experiment in PostHog freezes the results but does not change the feature flag's behavior. Users continue receiving whatever variant they were allocated during the experiment. You must manually navigate to the Feature Flags section and update the flag to serve the winning variant at 100%. The telltale sign of this mistake is that your post-experiment conversion rate is suspiciously close to the blended rate during the experiment rather than matching the winning variant's rate.

Check your flag's rollout configuration immediately after stopping any experiment.
- **Deploying the hardcoded winner without first rolling the flag to 100% and monitoring** — This skips your fastest rollback mechanism. If the winning variant performs differently at 100% traffic than it did at 50% (due to interaction effects, infrastructure scaling, or edge cases in user segments that were underrepresented in the experiment), your only option is a full code revert. Rolling the flag to 100% first gives you a one-click rollback to the control variant while you investigate. The monitoring period should be at least 24-48 hours and should cover the same metrics your experiment tracked plus any infrastructure health metrics.
- **Archiving a feature flag while it is still being actively evaluated by production code** — When you archive a flag that is still being called by your application, the flag evaluation returns a default value (typically false or the first variant). If the default does not match the winning variant, users will see the wrong experience. Before archiving, always check the flag's evaluation activity in PostHog. Evaluations should be at zero for at least several hours after your code deployment.

If evaluations persist, search your codebase again for the flag key. The most common culprit is a cached bundle on a CDN that has not been invalidated yet.
- **Leaving losing variant code in the codebase as commented-out blocks "just in case"** — Commented-out code creates maintenance burden and confusion. Future developers will not know whether the code is deliberately dead or was accidentally commented out during a merge conflict. ), which is the correct place to retrieve old code if you ever need it. Delete the code, delete the conditional branching logic, and let your version control system serve as the archive.

If your team has anxiety about this, add a commit message that explains the experiment and links to the results.
- **Cleaning up the flag in the frontend but forgetting about server-side or API-level flag checks** — Experiments that span multiple layers of the stack require cleanup in every layer. A frontend-only cleanup leaves the backend still branching on a flag that will eventually be archived, causing undefined behavior. Before starting cleanup, grep the flag key across all repositories, not just the one you are most familiar with. Many teams maintain a simple checklist of repositories to search when cleaning up any flag: frontend, backend API, mobile apps, background workers, and infrastructure configuration.
- **Not documenting which variant won and why before archiving the flag** — Six months from now, someone will ask, "Why does the onboarding flow work this way?" If the only record is an archived flag named `experiment-onboarding-v3` with no context, the answer is lost. Before archiving, add a description to the flag that includes the experiment name, winning variant, lift percentage, confidence level, date shipped, and PR reference. Also update your team's experiment log. This documentation takes five minutes and saves hours of archaeology later.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/posthog-experiments-onboarding-a-b-test-method/METHOD.md) — PostHog Experiments Onboarding A/B Test Method

## Related Skills

- [Running A/B Tests in the PostHog Experiments Tab](../running-ab-tests-in-posthog-experiments-tab/SKILL.md)
- [Setting Up PostHog Feature Flags for Experiment Variants](../setting-up-posthog-feature-flags-for-experiments/SKILL.md)
- [Comparing PostHog Experiments with Eppo, LaunchDarkly, and Other Platforms](../comparing-posthog-experiments-with-alternative-platforms/SKILL.md)
- [Designing Experiment Hypotheses and Success Metrics for Onboarding](../designing-onboarding-experiment-hypotheses-and-metrics/SKILL.md)
- [Segmenting New User Cohorts for Onboarding Experiments](../segmenting-new-user-cohorts-for-onboarding-tests/SKILL.md)
- [Interpreting Bayesian and Frequentist Results in PostHog](../interpreting-bayesian-and-frequentist-experiment-results/SKILL.md)
- [Integrating PostHog A/B Tests with Webflow and Marketing Pages](../integrating-posthog-experiments-with-webflow-and-marketing-pages/SKILL.md)
