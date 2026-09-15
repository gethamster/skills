# FAQ: Setting Metrics and Success Criteria for Each Roadmap Goal

## How many metrics should I attach to each roadmap goal?

One primary KPI and one to two supporting metrics. The primary KPI is the single number that answers "did we achieve the goal?" Supporting metrics serve as early-warning leading indicators or guardrails against negative side effects. More than three metrics per goal causes attention fragmentation, and teams end up tracking everything but acting on nothing. If you feel you need more, your goal may actually be multiple goals bundled together.

## Should I set metrics before or after mapping features to goals?

Set metrics before mapping features. In the [GO Product Roadmap](https://tryhamster.com/methods/go-product-roadmap) workflow, metrics sit between goal definition and feature mapping. The reason is practical: you need to know what you are optimizing for before you can evaluate which features are most likely to move the number. If you map features first, you risk choosing features based on intuition and then selecting metrics that flatter whatever you already decided to build.

## What do I do if I cannot measure my primary KPI with current instrumentation?

Treat instrumentation as a prerequisite task, not a blocker. If the metric requires new event tracking, API integration, or a new dashboard, add "set up measurement for [KPI]" as the first deliverable in the goal's feature list. Use a proxy metric in the interim if one exists, but document it as provisional and commit to switching to the real KPI once instrumentation is live. Never skip the metric just because measurement is hard.

That guarantees you will ship features with no idea whether they worked.

## How do I handle stakeholders who want different success criteria for the same goal?

Surface the disagreement explicitly in a calibration session rather than trying to accommodate everyone with extra metrics. Usually, the disagreement reveals that stakeholders have different definitions of the goal itself. Resolve the definition first, and the metric disagreement often dissolves. If two stakeholders genuinely want different outcomes, you may have two goals that need to be separated on the roadmap, each with its own KPI and success criteria.

## How often should I recalibrate targets after they are set?

Review targets at every quarterly roadmap review, which aligns with the [reviewing and adapting roadmap goals](https://tryhamster.com/skills/reviewing-and-adapting-roadmap-goals) cadence. Recalibrate if the baseline has shifted materially, if the planned features were descoped or delayed, or if market conditions changed. Document every recalibration with the old target, new target, and reasoning. Recalibration is not failure.

It is the product roadmap best practices equivalent of adjusting your GPS when you take a detour.

## Why does my primary KPI keep drifting away from the original goal?

KPI drift usually happens when the team substitutes an easier-to-measure metric for the original one during execution. Someone notices that the real KPI is hard to pull from the dashboard, so they start reporting a proxy, and over time the proxy becomes the de facto KPI. Catch this by comparing the metric currently being tracked to the success criteria statement written during goal setting. If they do not match, revert to the original or formally recalibrate with stakeholder agreement.

Never let a metric change informally.

## Can I use qualitative criteria instead of quantitative KPIs for some goals?

Use qualitative criteria only when quantitative measurement is genuinely impossible, which is rarer than most teams think. Even goals like "improve brand perception" can be quantified through NPS, sentiment analysis scores, or survey results. If you must use qualitative criteria, make them as structured as possible: define a rubric with specific levels (e.g., "3 out of 5 interviewed customers spontaneously mention the new capability as a reason for choosing us"). The goal is to remove subjective judgment from the pass/fail decision, whether the data is numerical or observational.
