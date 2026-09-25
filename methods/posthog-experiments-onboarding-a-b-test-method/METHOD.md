---
name: "posthog-experiments-onboarding-a-b-test-method"
category: "Development"
description: "How to run PostHog Experiments on onboarding: feature flag variants, a pre-set hypothesis and metrics, sample size, Bayesian or frequentist reads."
metadata:
  datePublished: "2026-07-02"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# PostHog Experiments: A Method for Onboarding A/B Tests

> Created by **PostHog growth team, demonstrated by Joshua** - [https://www.youtube.com/watch?v=WyYPPSyKmXo](https://www.youtube.com/watch?v=WyYPPSyKmXo)

## Overview

PostHog Experiments is the A/B testing product inside PostHog, and this page describes a method for using it on onboarding flows: how to run experiments in PostHog from the first hypothesis to the cleanup of the feature flag. According to [PostHog's Experiments docs](https://posthog.com/docs/experiments), you define variants, pick the metrics you care about, and PostHog randomizes users, tracks their exposures, and runs the statistics, either Bayesian or frequentist. Each experiment is backed by a feature flag, so the same flag that decides who sees which onboarding screen also records who was exposed.

The workflow comes from a short PostHog tutorial, [How to A/B test your onboarding flow](https://www.youtube.com/watch?v=WyYPPSyKmXo), published on PostHog's YouTube channel in September 2025. In it, Joshua from the PostHog growth team shows how the team changes onboarding: instead of replacing a screen and shipping it, they keep the old and new versions side by side behind a flag and run an experiment. He creates an experiment for a new installation step, checks the flag's test variant in code, previews both variants with the PostHog toolbar, and ships with a 50/50 split. PostHog presents this as its own team's practice. It does not publish it as a named method, and this page is an independent write-up that fills in the steps around the video from PostHog's documentation.

The result shown in the video is a useful model of what the method produces. The onboarding completion rate was 64% in control and about 70% in the test variant, which Joshua calls "a 9% increase", and the team also tracked a second metric, whether users ingested an event, as a check that the extra completions were real setups ([PostHog tutorial video](https://www.youtube.com/watch?v=WyYPPSyKmXo)). That pairing of a primary metric with a supporting metric is the core habit of the method, and PostHog's own [analyzing results guide](https://posthog.com/docs/experiments/analyzing-results) uses an onboarding test to show why supporting metrics matter.

The mechanics are simple. PostHog's [creation wizard](https://posthog.com/docs/experiments/creating-an-experiment) walks through three steps: a description with the hypothesis and flag key, a variant rollout with the split and rollout percentage, and analytics with inclusion criteria and metrics. Your code then calls `getFeatureFlag()` to decide what each user sees, and that call records the exposure event the analysis is built on ([adding experiment code](https://posthog.com/docs/experiments/adding-experiment-code)). Metrics can be funnels, means, ratios or retention, and only events after a user's first exposure are counted ([experiment metrics](https://posthog.com/docs/experiments/metrics)).

Onboarding is a natural fit because the audience is well defined and the outcome is close in time. Every new signup passes through the flow, the change under test usually sits on one screen, and completion or activation can be measured within days. PostHog's [best practices](https://posthog.com/docs/experiments/best-practices) use onboarding as their main example, including the warning that a new onboarding flow should not be shown to users who have already completed the old one.

The discipline around the tool matters as much as the tool. Evan Miller's essay [How Not To Run an A/B Test](https://www.evanmiller.org/how-not-to-run-an-ab-test.html) shows that checking an experiment repeatedly and stopping at the first significant result can push the false positive rate far above the level the dashboard reports, and David Robinson's [simulations](http://varianceexplained.org/r/bayesian-ab-testing/) show that a Bayesian decision rule does not make that problem go away. The method therefore fixes the hypothesis, metrics and sample size before launch, or switches on PostHog's sequential testing when the team knows it will watch results as they come in ([frequentist statistics](https://posthog.com/docs/experiments/statistics-frequentist)).

The method is for product and growth teams who already capture onboarding events in PostHog, or are adopting it, and who have enough signups to reach a decision within a few weeks. It sits alongside the broader practice described in [Trustworthy Online Controlled Experiments](https://experimentguide.com/) by Ron Kohavi, Diane Tang and Ya Xu, and it deliberately stays small: one hypothesis, one flag, a short list of related metrics and a clean exit.

## Core Principles

### Every variant is a flag value

Each experiment in PostHog is backed by a multivariate feature flag, and users are assigned to a variant based on their distinct ID so they keep the same variant across sessions and devices ([traffic allocation](https://posthog.com/docs/experiments/traffic-allocation)). Building the change behind the flag lets old and new versions run at the same time, which is what the growth team does in the [tutorial video](https://www.youtube.com/watch?v=WyYPPSyKmXo). It also gives you a switch: pausing an experiment disables the flag, and the [lifecycle docs](https://posthog.com/docs/experiments/managing-lifecycle) show users then see the control variant. Pete Hodgson's [feature toggles article](https://martinfowler.com/articles/feature-toggles.html) calls these experiment toggles and notes they should stay in place, with the same configuration, only as long as needed for significant results.

### Write the hypothesis and metrics before launch

PostHog's [best practices](https://posthog.com/docs/experiments/best-practices) say a good hypothesis names the goal metric, how the change should improve it, and any important context, and PostHog's guides recommend defining metrics upfront to avoid biasing the analysis. The launch checklist also asks for secondary metrics and counter metrics before launch. Writing these down first stops the team from choosing, after the fact, whichever metric happens to look good.

### Only affected users enter the experiment

An onboarding test should include only users who will actually see the onboarding change. PostHog's [best practices](https://posthog.com/docs/experiments/best-practices) show filtering out ineligible users in code before the flag is checked, because checking the flag is what records exposure. Existing users who already finished onboarding add noise without any chance of being affected. Targeting new users through release conditions or cohorts does the same job at the flag level.

### Size the test before it starts

PostHog's [running time calculator](https://posthog.com/docs/experiments/sample-size-running-time) estimates the sample size and running time from your baseline, the minimum detectable effect (MDE) and daily exposures, with a default MDE of 30%. A smaller MDE needs much more data, because the required sample grows with the inverse square of the effect you want to detect. If the estimate runs longer than the team can wait, test a bolder change or pick a different way to learn.

### Decide how you will stop

Stopping the first time a result looks significant inflates false positives; Miller's [worked example](https://www.evanmiller.org/how-not-to-run-an-ab-test.html) gets a 26.1% false positive rate from a test run at a nominal 5% level when it is checked after every observation. Either wait for the planned sample, or enable [sequential testing](https://posthog.com/docs/experiments/statistics-frequentist) in PostHog's frequentist engine, which is designed for teams that monitor results continuously. Choosing the Bayesian engine does not remove this concern, as Robinson's [analysis](http://varianceexplained.org/r/bayesian-ab-testing/) explains.

### Read metrics as a system

PostHog tests each metric independently, and its [Bayesian statistics docs](https://posthog.com/docs/experiments/statistics-bayesian) note that with 5 metrics the chance that at least one shows a false positive is about 23%. The answer PostHog gives is to choose related metrics tied to the hypothesis and look for a coherent pattern. An onboarding win is more believable when completion rises and a downstream signal, such as the first ingested event in the tutorial, rises with it.

### Clean up after the decision

When an experiment ends, PostHog recommends sharing results, documenting them, removing the experiment and losing variant's code, archiving the experiment and then disabling or deleting the flag ([managing lifecycle](https://posthog.com/docs/experiments/managing-lifecycle)). Hodgson describes toggles as [inventory with a carrying cost](https://martinfowler.com/articles/feature-toggles.html) that teams should keep low. Every experiment you leave behind is a branch someone will have to read later.

## Steps

1. **Find the onboarding step to test**
   Open your onboarding funnel and find the step where the most users stop. Watch session replays of users who drop off there to form a view of why, since PostHog links every experiment variant to the replays of the people who saw it ([Experiments overview](https://posthog.com/docs/experiments)). Note the current conversion rate for that step, because it becomes the baseline for sizing. Pick one change that addresses the cause you observed. If the funnel is not instrumented yet, fix that first.

2. **Write the hypothesis and choose metrics**
   State the change, the metric it should move and why, following the format in PostHog's [best practices](https://posthog.com/docs/experiments/best-practices). Choose one primary metric, usually a funnel from exposure to onboarding completion or activation. Add a few secondary metrics that should move with it, and at least one counter metric that must not get worse. Set a conversion window that matches how long onboarding normally takes, since without one, trend metrics count conversions through the end of the experiment ([experiment metrics](https://posthog.com/docs/experiments/metrics)).

3. **Size the test**
   Enter the baseline, the MDE and expected daily signups into the running time calculator ([running time and sample size](https://posthog.com/docs/experiments/sample-size-running-time)). The calculator's formula is the power rule of thumb Evan Miller also gives, so you can check it by hand. Decide the stopping rule now: a fixed sample, or sequential testing if you will check results often. Write the planned end date next to the hypothesis.

4. **Create the experiment and its flag**
   Click New experiment and complete the three wizard steps: description, variant rollout and analytics ([creating an experiment](https://posthog.com/docs/experiments/creating-an-experiment)). The wizard creates the flag with `control` and `test` variants by default, split evenly. After saving the draft, use Manage release conditions to target new users, for example by a signup property or a cohort. Keep the default exposure event unless the flag is checked well before the onboarding screen appears, in which case use a custom exposure event.

5. **Add the variant code and test it**
   In the onboarding code, check eligibility first, then call `getFeatureFlag()` and render control or test ([adding experiment code](https://posthog.com/docs/experiments/adding-experiment-code)). Reading the value with that call, or its SDK equivalent, records the exposure; methods such as `getAllFlags()` do not. Force yourself into each variant with an optional override on the flag's release conditions, or with the toolbar as the video shows ([testing and launching](https://posthog.com/docs/experiments/testing-and-launching)). Confirm the metric events arrive for both variants before launch.

6. **Launch and check validity**
   Launch from the experiment page. PostHog's [launch checklist](https://posthog.com/docs/experiments/best-practices) asks you to confirm, one or two days after launch, that each variant receives the expected volume, logging works in the right ratios and errors have not risen. If PostHog reports a sample ratio mismatch, work through the causes in its [troubleshooting guide](https://posthog.com/docs/experiments/troubleshooting), such as bot traffic, changes to flag conditions and identity fragmentation. Leave the primary metric alone until the planned end, unless you enabled sequential testing.

7. **Read the results and decide**
   When the planned sample is reached, read the primary metric first: a variant is significant when its interval does not cross zero ([analyzing results](https://posthog.com/docs/experiments/analyzing-results)). Then check that the secondary and counter metrics tell the same story. A null result is a valid finding, and the analyzing results guide suggests checking sample size, implementation and effect size before concluding the change does nothing. Record the decision and the reason in the experiment description.

8. **Ship the winner and clean up**
   Use End experiment to pick the variant to keep and roll it out to all users ([managing lifecycle](https://posthog.com/docs/experiments/managing-lifecycle)). Then remove the flag check and the losing code path; with the GitHub integration connected, PostHog can open a draft pull request that does this. Deploy the code before disabling the flag, the order PostHog's [stale flag guide](https://posthog.com/docs/feature-flags/cleaning-up-stale-flags) recommends. Archive the experiment so its history stays available.

## PostHog vs Eppo and Other Platforms

Teams comparing Eppo vs PostHog Experiments are usually choosing between an experiment tool built into their analytics and a dedicated or warehouse-native platform. The table summarizes what each vendor's documentation says; check each vendor's current docs and pricing before deciding.

| Platform | What its docs describe |
|---|---|
| PostHog Experiments | Runs on PostHog flags and events; [Bayesian by default, frequentist optional](https://posthog.com/docs/experiments/start-here) |
| Eppo | [Warehouse-native analysis engine](https://docs.geteppo.com/) with an SDK that does no tracking of its own; [frequentist, sequential and Bayesian](https://docs.geteppo.com/statistics/) options |
| Statsig | Cloud product plus [Warehouse Native](https://docs.statsig.com/statsig-warehouse-native/introduction) (Enterprise tier), with CUPED and switchback tests |
| LaunchDarkly | [Bayesian and frequentist](https://launchdarkly.com/docs/guides/experimentation/bayesian-frequentist) experimentation; frequentist is the default |
| GrowthBook | Open source; [Bayesian by default](https://docs.growthbook.io/statistics/overview), frequentist with CUPED and sequential testing |
| Webflow Optimize | [A/B testing and personalization](https://webflow.com/optimize) for marketing sites |

## When to Use

- You have a specific change to one onboarding step and a funnel that shows users stopping there. The method turns that observation into a controlled comparison with a pre-agreed definition of success.
- Your product already sends onboarding events to PostHog. Any event, funnel or warehouse table you already have can become an experiment metric, so there is little new instrumentation ([Experiments overview](https://posthog.com/docs/experiments)).
- Enough new users reach the step for the running time calculator to give an end date the team will accept. The estimate tells you before launch whether the test is worth running.
- You want to learn whether an onboarding change holds up for a specific group, such as self-serve signups, and you can express that group as a flag release condition or cohort.
- The team has been changing onboarding on intuition and wants a repeatable process with a written hypothesis, a decision rule and a record of each result.

## When Not to Use

- Signups are too few for the calculator to give a usable duration. Session replays, interviews and bolder changes are better sources of learning at that volume.
- The change reworks the whole onboarding model, such as adding human-led setup. A single A/B test cannot say which of the many changes caused the result, so a staged rollout with close monitoring fits better.
- The onboarding funnel is not reliably instrumented. An experiment built on missing or broken events produces confident numbers about the wrong thing.
- Stakeholders will not wait for the planned sample and will not accept sequential testing. Calling results early turns noise into decisions, which defeats the purpose of running the test.

## Skills

This method includes the following skills:

- [Creating and Launching A/B Tests in PostHog Experiments](../../skills/running-ab-tests-in-posthog-experiments-tab/SKILL.md): Create an experiment in PostHog's Experiments tab, set its variants and metrics, launch it and monitor it to a decision.
- [PostHog Experiment Variant Configuration with Feature Flags](../../skills/setting-up-posthog-feature-flags-for-experiments/SKILL.md): Configure the multivariate flag behind an experiment: keys, variants, split, release conditions and exposure code.
- [Eppo vs PostHog Experiments: Choosing a Platform](../../skills/comparing-posthog-experiments-with-alternative-platforms/SKILL.md): Compare PostHog Experiments with Eppo, Statsig, LaunchDarkly and GrowthBook against your own requirements.
- [Shipping Winning Variants and Cleaning Up Flags](../../skills/shipping-winning-variants-and-cleaning-up-experiments/SKILL.md): End an experiment, roll out the winner, remove the losing code and retire the flag in the right order.
- [Onboarding Experiment Hypotheses and Success Metrics](../../skills/designing-onboarding-experiment-hypotheses-and-metrics/SKILL.md): Write a testable onboarding hypothesis and choose primary, secondary and counter metrics before launch.
- [PostHog Experiment Cohort Filters for New Users](../../skills/segmenting-new-user-cohorts-for-onboarding-tests/SKILL.md): Restrict an onboarding experiment to new signups with release conditions, person properties and cohorts.
- [Bayesian vs Frequentist Results in PostHog Experiments](../../skills/interpreting-bayesian-and-frequentist-experiment-results/SKILL.md): Read chance to win, credible intervals, p-values and confidence intervals, and turn them into a decision.
- [PostHog Experiments on Webflow and Marketing Pages](../../skills/integrating-posthog-experiments-with-webflow-and-marketing-pages/SKILL.md): Run PostHog experiments on Webflow and other marketing pages with the web snippet, custom code or the no-code toolbar.

## FAQ

**What are PostHog Experiments?**

PostHog Experiments is PostHog's A/B testing product. You define variants and metrics, and PostHog randomizes users, tracks exposures and runs the analysis with Bayesian or frequentist statistics ([Experiments docs](https://posthog.com/docs/experiments)). Every experiment is backed by a feature flag, and your code reads that flag to decide what each user sees. Because it uses the events you already send to PostHog, metrics usually need no new tracking.

**How do I run experiments in PostHog on an onboarding flow?**

Write a hypothesis and pick metrics, then create the experiment through the three-step wizard and target new users with release conditions. Add code that checks eligibility and calls `getFeatureFlag()` to render each variant, test both variants with overrides, and launch. Wait for the planned sample, read the primary metric alongside supporting ones, and end the experiment by shipping a variant. The [getting started guide](https://posthog.com/docs/experiments/start-here) walks through the same sequence.

**Should I use Bayesian or frequentist statistics in PostHog?**

Bayesian is the default, and it reports a chance to win and a credible interval ([Bayesian statistics](https://posthog.com/docs/experiments/statistics-bayesian)). The frequentist engine uses Welch's t-test and reports p-values and confidence intervals, and it is where PostHog offers sequential testing ([frequentist statistics](https://posthog.com/docs/experiments/statistics-frequentist)). PostHog's Bayesian engine uses non-informative priors, so its posterior is approximately the observed effect and its variance. LaunchDarkly.s [comparison of the two approaches](https://launchdarkly.com/docs/guides/experimentation/bayesian-frequentist) notes that with enough data the results are nearly identical, so the two engines mostly differ in how the result is expressed. Choose the one your team will read correctly, and pick sequential testing if you know you will check results often.

**How long should an onboarding experiment run?**

Long enough to reach the sample size the running time calculator recommends for your baseline and MDE ([running time and sample size](https://posthog.com/docs/experiments/sample-size-running-time)). PostHog's worked example needs 3,600 users per variant to detect a 20% relative change on a 10% conversion rate. PostHog also needs at least 50 exposures per variant before it shows results ([troubleshooting](https://posthog.com/docs/experiments/troubleshooting)). If the estimate is longer than you can wait, test a larger change.

**Can I run PostHog experiments on Webflow marketing pages?**

Yes. PostHog's [Webflow installation guide](https://posthog.com/docs/experiments/installation/webflow) adds the web snippet to the Head code in Webflow's site settings, which needs at least the Basic site plan, and then reads the experiment flag in custom code. PostHog also offers no-code web experiments built in the toolbar, which are in beta and suited to simple text and layout changes ([no-code web experiments](https://posthog.com/docs/experiments/no-code-web-experiments)). Code-based experiments remain the option for anything deeper in the product.

**What is the difference between PostHog and Eppo for experiments?**

PostHog runs experiments on its own flags and event data inside a broader analytics product. Eppo describes itself as a feature flagging and experimentation platform with a [warehouse-native analysis engine](https://docs.geteppo.com/) whose SDK sends no user data through Eppo, and it offers [frequentist, sequential and Bayesian analysis](https://docs.geteppo.com/statistics/). Teams whose source of truth is a data warehouse tend to look at Eppo or Statsig Warehouse Native. Teams already sending events to PostHog avoid a second data pipeline by staying in PostHog.

**What should happen to the feature flag after an experiment ends?**

End the experiment and keep the winning variant, then remove the flag check and the losing code path from your codebase ([managing lifecycle](https://posthog.com/docs/experiments/managing-lifecycle)). Deploy that change before disabling the flag, because disabling a flag that code still checks turns the feature off for everyone ([cleaning up stale flags](https://posthog.com/docs/feature-flags/cleaning-up-stale-flags)). PostHog notes that every active flag counts toward feature flag billing even when it is rolled out to all users. Archive the experiment afterward so the record stays available.

## Sources

- [PostHog: How to A/B test your onboarding flow (tutorial video)](https://www.youtube.com/watch?v=WyYPPSyKmXo)
- [PostHog docs: Experiments](https://posthog.com/docs/experiments)
- [PostHog docs: Getting started with experiments](https://posthog.com/docs/experiments/start-here)
- [PostHog docs: Creating an experiment](https://posthog.com/docs/experiments/creating-an-experiment)
- [PostHog docs: Adding experiment code](https://posthog.com/docs/experiments/adding-experiment-code)
- [PostHog docs: Experiment metrics](https://posthog.com/docs/experiments/metrics)
- [PostHog docs: Running time and sample size](https://posthog.com/docs/experiments/sample-size-running-time)
- [PostHog docs: Analyzing results](https://posthog.com/docs/experiments/analyzing-results)
- [PostHog docs: Bayesian statistics](https://posthog.com/docs/experiments/statistics-bayesian)
- [PostHog docs: Frequentist statistics](https://posthog.com/docs/experiments/statistics-frequentist)
- [PostHog docs: Experiments best practices](https://posthog.com/docs/experiments/best-practices)
- [PostHog docs: Managing lifecycle](https://posthog.com/docs/experiments/managing-lifecycle)
- [PostHog docs: Traffic allocation](https://posthog.com/docs/experiments/traffic-allocation)
- [PostHog docs: Testing and launching an experiment](https://posthog.com/docs/experiments/testing-and-launching)
- [PostHog docs: Experiment troubleshooting](https://posthog.com/docs/experiments/troubleshooting)
- [PostHog docs: Cleaning up stale feature flags](https://posthog.com/docs/feature-flags/cleaning-up-stale-flags)
- [PostHog docs: Webflow experiments installation](https://posthog.com/docs/experiments/installation/webflow)
- [PostHog docs: No-code web experiments](https://posthog.com/docs/experiments/no-code-web-experiments)
- [Evan Miller: How Not To Run an A/B Test](https://www.evanmiller.org/how-not-to-run-an-ab-test.html)
- [David Robinson: Is Bayesian A/B Testing Immune to Peeking? Not Exactly](http://varianceexplained.org/r/bayesian-ab-testing/)
- [Pete Hodgson on martinfowler.com: Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)
- [Kohavi, Tang and Xu: Trustworthy Online Controlled Experiments](https://experimentguide.com/)
- [Eppo docs](https://docs.geteppo.com/)
- [Eppo docs: Statistics](https://docs.geteppo.com/statistics/)
- [Statsig docs: About Warehouse Native](https://docs.statsig.com/statsig-warehouse-native/introduction)
- [LaunchDarkly docs: Bayesian versus frequentist statistics](https://launchdarkly.com/docs/guides/experimentation/bayesian-frequentist)
- [GrowthBook docs: Statistics overview](https://docs.growthbook.io/statistics/overview)
- [Webflow Optimize](https://webflow.com/optimize)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
