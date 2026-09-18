---
category: Development
---

# PostHog Experiments: A Practical Method for Onboarding A/B Tests

> Created by **PostHog growth team, demonstrated by Joshua** — [https://www.youtube.com/watch?v=WyYPPSyKmXo](https://www.youtube.com/watch?v=WyYPPSyKmXo)

## Overview

PostHog experiments emerged from the PostHog growth team's own work improving their product's onboarding funnel. The method was demonstrated publicly by Joshua, a member of the growth team, in a walkthrough that showed the end-to-end workflow of hypothesizing an onboarding improvement, wiring up feature flags, launching the experiment, and reading the results. While A/B testing as a discipline stretches back to Ronald Fisher's agricultural trials in the 1920s and was refined by internet companies like Google and Amazon in the 2000s, PostHog's contribution is a tightly integrated open-source implementation that bundles feature flags, event tracking, experiment configuration, and statistical analysis into a single platform. This removes the duct-tape layer that teams historically needed between separate tools for flagging, analytics, and experiment evaluation.

The underlying mental model is straightforward but often misapplied. You form a hypothesis about a specific change to your product experience, typically phrased as "If we change X, then metric Y will improve by Z%." You then use a feature flag to randomly assign incoming users to either the control (unchanged experience) or one or more test variants. Both groups use the product simultaneously under identical external conditions. After enough users have passed through each variant, you evaluate whether the observed difference in your target metric is statistically meaningful or just noise. PostHog offers both Bayesian analysis, which gives you a probability that one variant is better, and frequentist analysis, which tests against a null hypothesis with a p-value. The Bayesian approach tends to be more intuitive for product teams because it answers "what's the probability that variant B beats control?" rather than the more convoluted "can we reject the hypothesis that there's no difference?"

What separates PostHog experiments from generic A/B testing advice is the tight coupling between feature flags and experiment lifecycle. In many organizations, the flag system and the analytics system are operated by different teams or even different vendors. This creates friction: engineers toggle flags in LaunchDarkly or a homegrown system, analysts query Amplitude or Mixpanel separately, and the mapping between flag state and metric movement is maintained manually or not at all. PostHog collapses these into one workflow. You create the experiment, PostHog generates the feature flag, you instrument your code to read the flag, PostHog tracks the events, and the experiments tab shows results in context. This integration is especially valuable for onboarding flows, where the experiment lifecycle tends to be short (days to weeks, not months) and the number of simultaneous tests can be high.

Compared to dedicated experimentation platforms like Eppo, Statsig, or Optimizely, PostHog experiments occupy a pragmatic middle ground. Eppo and Statsig offer deeper statistical rigor, warehouse-native architectures, and advanced features like CUPED variance reduction or sequential testing. Optimizely and VWO provide visual editors for marketing teams who want to test without writing code. PostHog's strength is that experimentation is one capability inside a broader product analytics suite, so teams that already use PostHog for event tracking, session replays, or feature flags get experiments essentially for free, with no data integration overhead. For onboarding specifically, this means you can define your experiment, watch session replays of users in each variant, check funnel dropoff by variant, and review the statistical outcome all in one place.

The method has evolved as PostHog itself has matured. Early versions required more manual instrumentation and lacked the guided experiment creation flow that exists today. The addition of minimum sample size calculators, automatic significance detection, and the ability to set multiple metrics per experiment (a primary goal metric plus secondary guardrail metrics) addressed common failure modes where teams either called experiments too early or measured the wrong thing. The growth team's public documentation and tutorial videos also reflect a broader industry shift toward transparency in experimentation methodology, making it easier for smaller teams to adopt practices that were previously gatekept by dedicated data science functions at large tech companies.

Teams that benefit most from this method are product and growth teams at early-to-mid stage companies with enough traffic to reach statistical significance in a reasonable timeframe, who are already using PostHog or considering it, and who want to test changes to high-impact user journeys like onboarding, activation, and upgrade flows. If you have fewer than a few hundred users per week flowing through the funnel you want to test, the math gets slow and the method loses its advantage over qualitative approaches. If you have tens of millions of daily active users and a dedicated data science team, you may outgrow PostHog's built-in analysis and want a warehouse-native platform. For the broad middle of the market, the integrated approach works well.

## Core Principles

### One hypothesis per experiment

Each experiment should test a single, well-defined hypothesis. When you bundle multiple changes into one variant, you cannot attribute the result to any individual change. Teams often fall into this trap when redesigning onboarding because there are so many things they want to fix simultaneously. The discipline of isolating one variable forces clarity about what you actually believe will move the metric.

If you skip this, a winning result teaches you nothing about why it won, and a losing result doesn't tell you which change hurt.

### Feature flags are the experiment backbone

Every experiment variant must be controlled by a feature flag, not a deploy. This ensures that variant assignment is consistent per user across sessions, that you can kill a bad variant instantly without rolling back a deployment, and that the mapping between who saw what and what they did is tracked automatically. When teams run experiments through deploy-and-measure approaches instead, they introduce time-based confounds (Monday users vs. Friday users, pre-launch excitement vs.

steady-state behavior) and lose the ability to do a clean rollback.

### Define success metrics before launching

Lock in your primary metric, any secondary metrics, and any guardrail metrics before the experiment goes live. The primary metric is what you're trying to improve. Secondary metrics capture related outcomes you want to monitor. Guardrail metrics are things you don't want to break, like overall retention or support ticket volume.

If you pick metrics after seeing results, you'll unconsciously cherry-pick the metric that shows the variant winning. This is the experimentation equivalent of drawing the bullseye around the arrow.

### Respect the sample size requirement

Calculate the minimum sample size needed to detect the effect size you care about, and do not peek at results or call the experiment before reaching it. PostHog provides a sample size calculator during experiment setup. Peeking inflates your false positive rate dramatically. A team that checks daily and stops the moment results look significant will "find" effects that don't exist roughly 30-40% of the time.

If your traffic is too low to reach the required sample in a reasonable timeframe, that's a signal to test a bigger change or use a different evaluation method entirely.

### Run control and variant simultaneously

Both the control experience and the variant must be live at the same time, serving real users under the same external conditions. This is the entire point of a controlled experiment: eliminating time-based and environment-based confounds. A before-and-after comparison (ship the change, compare this week to last week) is not an experiment. It's a vibe check.

Seasonality, marketing campaigns, press coverage, and app store featuring can all change user behavior between periods, making it impossible to attribute metric changes to your product change.

### Measure the full funnel, not just the step you changed

When testing an onboarding change, track the impact downstream through activation, retention, and ideally early revenue or engagement. It is common for a change to improve completion of one step while degrading a later outcome. For example, removing a required profile setup step might increase the percentage of users who reach the dashboard, but those users may be less engaged because they skipped the context-setting that the step provided. If you only measure step completion, you'll ship a change that hurts the business.

### Clean up after every experiment

When an experiment concludes, ship the winning variant to 100% of users and remove the feature flag from your codebase. Feature flags left permanently in code create technical debt that compounds quickly. After a year of experimentation, a codebase can accumulate dozens of dead flags, each with conditional logic paths that no one remembers the purpose of. PostHog's experiment archiving workflow helps track which flags are still active, but the engineering discipline of removing the code branch is on you.

## Steps

1. **Step 1: Identify the onboarding bottleneck and form a hypothesis**
   Start by reviewing your onboarding funnel in PostHog (or whatever analytics you have) to find the step with the largest dropoff. Look at session replays of users who abandon at that step to understand why. Common reasons include confusion about what to do next, a step that requires too much effort, or a step whose value isn't clear to the user. ' A good hypothesis is falsifiable and specific enough that you'll know exactly what to measure.

Watch out for vague hypotheses like 'improving the UX will increase signups,' which give you no clear success criterion.

2. **Step 2: Define your primary metric, secondary metrics, and guardrails**
   Choose one primary metric that your hypothesis directly predicts will change. This is typically a conversion rate at a specific funnel step or an activation metric. Then pick 1-3 secondary metrics that you want to monitor for additional insight, such as time-to-complete or downstream engagement. Finally, set guardrail metrics: things you do not want to regress, like overall 7-day retention or support ticket creation rate.

Write all of these down before you touch the experiment configuration. The most common mistake here is choosing a vanity metric (like page views) instead of a meaningful outcome metric (like percentage of users who send their first message). Another pitfall is having no guardrails and accidentally shipping a variant that improves step completion but degrades long-term retention.

3. **Step 3: Create the experiment and feature flag in PostHog**
   Navigate to the Experiments tab in PostHog and create a new experiment. PostHog will generate a linked feature flag automatically. Configure the flag with your variants (typically 'control' and 'test', though you can add more for A/B/n tests). Set the traffic allocation, usually 50/50 for two variants.

Use PostHog's sample size calculator to determine how many users you need per variant, based on your baseline conversion rate and the minimum detectable effect you care about. If the required sample size means the experiment will run longer than 4 weeks, consider whether you can increase traffic to the funnel, test a larger change with a bigger expected effect, or accept that experimentation isn't the right tool for this decision. Set targeting rules on the feature flag if you want to limit the experiment to specific user segments, like new users only.

4. **Step 4: Instrument your code to read the feature flag and render variants**
   In your application code, use PostHog's SDK to check the feature flag value for each user and render the appropriate experience. For a frontend onboarding change, this typically means a conditional block where 'control' renders the existing flow and 'test' renders the new version. Make sure the flag check happens early enough in the user journey that users are assigned before they see any part of the experience being tested. A common bug is checking the flag too late, which means users see a flash of the control experience before being switched to the variant, contaminating the data.

Test both variants manually in a development or staging environment before going live. Verify that PostHog is receiving the correct events for each variant by checking the live events stream.

5. **Step 5: Launch the experiment and resist peeking**
   Activate the experiment in PostHog. From this point, users are randomly assigned to variants as they enter the onboarding flow. Monitor the experiment for technical issues in the first few hours: are events firing correctly, is the flag resolving as expected, are there errors in either variant? Once you've confirmed that the infrastructure is working, step away.

Do not check results daily. Set a calendar reminder for when you expect to reach the required sample size. If you absolutely must peek (to check for catastrophic regressions), look only at guardrail metrics, not at the primary metric. The reason for this discipline is well-documented: repeated significance testing without correction inflates your false positive rate far beyond the nominal 5%.

6. **Step 6: Analyze results after reaching sample size**
   When the experiment reaches the pre-calculated sample size, open the results in PostHog's experiments tab. Review the primary metric first: is there a statistically significant difference? If you chose Bayesian analysis, look for a probability of 95% or higher that one variant beats the other. 05.

Then review secondary metrics and guardrails. A variant that improves the primary metric but degrades a guardrail metric is usually not worth shipping. If results are inconclusive (neither variant is clearly better), that is a valid and informative outcome. It means the change you tested doesn't matter enough to users to produce a measurable difference, which frees you to focus on something else.

Do not extend the experiment hoping for significance. That's the same as peeking.

7. **Step 7: Ship the winner and clean up**
   If the variant won, roll the feature flag to 100% of users so everyone gets the improved experience. Then remove the flag check from your codebase entirely and delete the conditional code path for the control. If the control won (the change made things worse), roll back the variant, remove the code, and document what you learned. Archive the experiment in PostHog.

This cleanup step is non-negotiable. Every feature flag left in your code is a branch of conditional logic that future developers have to understand and maintain. Teams that skip cleanup end up with codebases where no one knows which flags are still active, which were experiments, and which are permanent feature toggles. Document the experiment's hypothesis, results, and decision in a shared location where future team members can learn from it.

## When to Use

- When you have a specific, testable hypothesis about your onboarding flow, like 'moving the team invite step from position 3 to position 5 will increase the percentage of users who complete setup,' and enough weekly signups (typically 200+ per variant per week) to reach statistical significance within 2-4 weeks. The method works best when you have a clear before/after measurement point and the change is scoped to one step or screen.
- When your onboarding funnel analytics show a sharp dropoff at a specific step (for example, 60% of users abandon at the 'connect your data source' screen) and you have a concrete alternative design to test against the current experience. The experiment structure forces you to define exactly what 'better' means before you ship the change, which prevents the common failure mode of redesigning a step, noticing a different metric looks good, and declaring victory.
- When you are running PostHog (or planning to adopt it) for product analytics and want experimentation without integrating a separate A/B testing vendor. The value here is the zero-integration-cost path: your events, feature flags, and experiment analysis all live in one system. If you already have PostHog tracking onboarding events, you can launch an experiment in under an hour without any new instrumentation.
- When you want to test onboarding variants across different user segments, such as new users from organic search versus those from a paid campaign, and you need feature flags that respect cohort-based targeting. PostHog's flag targeting lets you run segment-specific experiments so you can learn whether an onboarding improvement that works for self-serve signups also works for users who arrive via a sales-assisted invite.
- When your team has been making onboarding changes based on intuition or qualitative feedback alone and you want to introduce a repeatable, evidence-based process. The method provides enough structure (hypothesis, flag, metrics, sample size, analysis, cleanup) that even teams without a dedicated data scientist can run credible experiments. It is particularly useful as a first experimentation framework before scaling to more complex setups.
- When you need to run multiple concurrent onboarding experiments, like testing a new welcome modal on step 1 while also testing a different activation prompt on step 4, and you need a system that handles mutual exclusion or independent flag assignment correctly. PostHog's experiment setup lets you control whether users can be in multiple experiments simultaneously.

## When Not to Use

- When your weekly signup volume is too low to reach statistical significance in a reasonable timeframe. If you get 50 new users per week and you need 400 per variant for a detectable effect size, you are looking at a 16-week experiment. Over that duration, so many external factors change (product updates, seasonality, marketing shifts) that the result becomes unreliable. In low-traffic situations, you are better served by qualitative user testing, session replay analysis, or larger, more dramatic changes that don't require statistical validation to evaluate.
- When the change you want to test is a fundamental architectural shift, like moving from a self-serve onboarding model to a guided setup wizard with human touchpoints. These changes affect so many variables simultaneously that an A/B test cannot isolate what is working. The method assumes you are testing a scoped change within a stable system. If the system itself is being redesigned, use a phased rollout with cohort-based analysis instead, or simply ship the new approach and compare cohort-level retention over time.
- When you don't yet know what your onboarding funnel looks like. Running experiments before you have reliable funnel instrumentation means you'll measure the wrong things or miss key dropoff points entirely. If you can't confidently say 'X% of users complete step 3 and Y% reach activation,' your priority is building that measurement foundation, not layering experiments on top of noisy data.
- When the experiment could cause real harm to a subset of users. For example, if you are in a healthcare, financial, or safety-critical product context and the variant might degrade a user's ability to complete a critical task, the ethical risk of randomly assigning users to a potentially worse experience outweighs the learning. In these cases, staged rollouts with monitoring and rapid rollback are safer than true randomized experiments.
- When your team lacks the discipline to wait for results. If stakeholders will pressure you to call the experiment after three days because the early numbers look good, you will get false positives and make decisions based on noise. The method only works if you commit to the pre-calculated sample size and the pre-defined success criteria. Without that commitment, you are adding process overhead without gaining decision quality.

## Skills

This method includes the following skills:

- [Running A/B Tests in the PostHog Experiments Tab](../../skills/running-ab-tests-in-posthog-experiments-tab/SKILL.md) — Step-by-step walkthrough of creating, launching, and monitoring an A/B test using PostHog's Experiments UI, including variant allocation and goal setup.
- [Setting Up PostHog Feature Flags for Experiment Variants](../../skills/setting-up-posthog-feature-flags-for-experiments/SKILL.md) — How to create and configure feature flags in PostHog to assign users to control and test variants in an A/B experiment.
- [Comparing PostHog Experiments with Eppo, LaunchDarkly, and Other Platforms](../../skills/comparing-posthog-experiments-with-alternative-platforms/SKILL.md) — How to evaluate PostHog's experimentation capabilities against dedicated tools like Eppo, Statsig, and LaunchDarkly based on analysis methods, integrations, and pricing.
- [Shipping the Winning Variant and Cleaning Up Feature Flags](../../skills/shipping-winning-variants-and-cleaning-up-experiments/SKILL.md) — How to roll out the winning experiment variant to 100% of users, remove the losing variant's code, and archive feature flags to keep your codebase clean after an experiment concludes.
- [Designing Experiment Hypotheses and Success Metrics for Onboarding](../../skills/designing-onboarding-experiment-hypotheses-and-metrics/SKILL.md) — How to formulate a clear hypothesis, choose primary and secondary conversion metrics, and define what winning looks like before launching an onboarding A/B test.
- [Segmenting New User Cohorts for Onboarding Experiments](../../skills/segmenting-new-user-cohorts-for-onboarding-tests/SKILL.md) — How to target experiments specifically to new users or sign-up cohorts using PostHog's person properties and cohort filters to avoid contaminating results with existing users.
- [Interpreting Bayesian and Frequentist Results in PostHog](../../skills/interpreting-bayesian-and-frequentist-experiment-results/SKILL.md) — How to read PostHog's experiment results dashboard, understand credible intervals vs p-values, and decide when an experiment has reached statistical significance.
- [Integrating PostHog A/B Tests with Webflow and Marketing Pages](../../skills/integrating-posthog-experiments-with-webflow-and-marketing-pages/SKILL.md) — How to implement PostHog experiments on no-code or marketing landing pages using the JavaScript snippet, Webflow custom code, and anti-flicker techniques.

## FAQ

**What are PostHog experiments in simple terms?**

PostHog experiments let you test two or more versions of a product experience on real users at the same time. Users are randomly assigned to a version using a feature flag, and PostHog tracks how each group behaves. After enough users have gone through the experience, PostHog tells you which version performed better with statistical confidence. It is essentially an A/B testing system built directly into PostHog's product analytics platform, so you don't need separate tools for flagging, event tracking, and analysis.

**How is PostHog A/B testing different from Optimizely or VWO?**

Optimizely and VWO are primarily designed for marketing and content teams, with visual editors that let you modify page elements without writing code. PostHog experiments are designed for product and engineering teams who are making code-level changes to their application. The key difference is integration depth: PostHog experiments use the same event stream and feature flag system you already use for analytics and rollouts, while Optimizely and VWO operate as separate layers. If your experiments involve changing application logic, API responses, or backend behavior (not just button colors), PostHog's approach is more natural.

**PostHog experiments vs Eppo: which should I use?**

Eppo is a warehouse-native experimentation platform built for teams with dedicated data scientists and a modern data stack (Snowflake, BigQuery, or Databricks). It offers advanced statistical methods like CUPED variance reduction, sequential testing, and experiment-level holdout groups. PostHog experiments are better suited for product and growth teams that want experimentation integrated into their existing PostHog analytics without managing a separate data pipeline. If you have a data team and a warehouse, Eppo gives you more statistical rigor.

If you want to go from hypothesis to running experiment in under an hour without touching your data warehouse, PostHog is the faster path.

**Does the PostHog experiments method work for small teams with low traffic?**

It depends on how low your traffic is. If you have at least a few hundred users per week entering the flow you want to test, you can run meaningful experiments on large effect sizes (20%+ improvement). If you have fewer than 100 users per week, experiments will take too long to reach significance and the results will be unreliable. Small teams in this situation should focus on qualitative research (user interviews, session replays, usability testing) and save experimentation for when traffic grows.

You can still use feature flags for phased rollouts without the statistical analysis layer.

**Should I use Bayesian or frequentist analysis in PostHog experiments?**

Bayesian analysis is generally better for product teams because it gives you a direct probability statement: 'There is a 96% chance that variant B is better than control.' This is intuitively easier to act on than a frequentist p-value, which answers a different and more confusing question. Frequentist analysis is more established in academic and enterprise contexts where teams have specific false positive rate requirements. If your team doesn't have strong statistical training, start with Bayesian. If you're in a regulated industry or working with a data science team that prefers frequentist methods, PostHog supports both.

**Why do PostHog experiments fail in practice?**

The most common failure mode is calling experiments too early, before reaching the required sample size. Teams see early results that look promising, ship the variant, and later discover the effect was noise. The second most common failure is testing changes that are too small to produce a detectable effect, leading to weeks of experimentation with inconclusive results. Third, teams sometimes instrument events incorrectly, so the experiment tracks the wrong thing.

Finally, some teams skip the hypothesis step and run experiments as a discovery tool rather than a validation tool, which leads to cherry-picked metrics and confirmation bias.

**Can I run PostHog experiments on marketing pages built with Webflow?**

Yes, but the implementation is different from in-app experiments. You embed PostHog's JavaScript snippet in your Webflow site, then use the feature flag to conditionally show or hide page elements using custom code or Webflow's conditional visibility features. The tradeoff is that Webflow experiments are limited to frontend, visual changes. You cannot test backend logic, API behavior, or deep application flows through a Webflow integration.

For landing page and signup flow experiments on marketing sites, this works well. For anything deeper in the product, you need the SDK integrated into your application code.

**How does this method work alongside product roadmaps and sprint planning?**

Experiments should be treated as first-class items in your sprint backlog, not side projects. Each experiment requires engineering time for instrumentation, QA time for testing both variants, and a waiting period for data collection. Plan for the full lifecycle: 1-2 days for setup and instrumentation, 1-3 weeks of data collection, a few hours for analysis, and a few hours for cleanup. If you're running continuous onboarding experiments, build this into your team's capacity planning.

The worst pattern is treating experiments as something that happens 'on the side,' which leads to abandoned experiments, unarchived flags, and wasted effort.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
