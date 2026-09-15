# FAQ: Running Build-Measure-Learn Cycles

## How long should one build measure learn loop cycle take?

Most teams should target one to two weeks for early-stage products and two to four weeks for products with longer feedback loops (enterprise SaaS, marketplaces, hardware). If your cycles consistently exceed four weeks, look at the build step first, because scope creep there is the most common cause of slow cycles. Some teams run sub-week cycles for lightweight tests like landing page experiments or email subject line tests. The key is that the measurement window must be long enough to collect a meaningful sample, which sets the floor for cycle duration.

## How do I run a build measure learn loop when I have very few users?

With fewer than 200 users, quantitative A/B testing is usually impractical because you cannot reach statistical significance in a reasonable timeframe. Switch to qualitative experiment designs: concierge MVPs where you deliver the value manually to 5-15 users and interview them, Wizard of Oz tests where you simulate the feature behind the scenes, or painted-door tests that measure interest (clicks, signups) rather than downstream behavior. The hypothesis structure stays the same, but your evidence is behavioral observation and structured interviews rather than conversion rate statistics. Document qualitative findings with the same rigor: count themes, quote users, and state whether the hypothesis is supported or not.

## Should I run the build measure learn loop before or after designing validated learning experiments?

The [experiment design](https://tryhamster.com/skills/designing-validated-learning-experiments) is a sub-step within the loop, specifically Steps 2 and 3 of this guide. Think of validated learning experiment design as the methodology you apply inside each cycle, and the build measure learn loop as the repeating rhythm that sequences those experiments over time. You design the experiment as part of planning each cycle, not as a separate phase. If you are new to both skills, start with a single hypothesis, design your first experiment, and run it through the full loop.

The orchestration skill develops through repetition.

## How do I handle stakeholders who want to override experiment results?

This is the most common organizational failure in running build measure learn cycles. Prevention is better than cure: involve stakeholders in Step 2 (defining the success threshold) so they are co-owners of the criteria. When results arrive, present the learning card showing the threshold they agreed to alongside the actual result. If a stakeholder still wants to override, ask them to state their alternative hypothesis in writing and commit to a follow-up cycle.

This channels disagreement into the experimental process rather than around it. If overrides become chronic, escalate the pattern as a process issue, because a team that cannot act on its data is not actually running the loop.

## How many build measure learn cycles should I run before deciding to pivot?

There is no fixed number, but a useful heuristic from the [pivot-or-persevere framework](https://tryhamster.com/skills/defining-pivot-or-persevere-decisions) is to review after every three to five cycles and ask: are we converging on a product thesis, or are we wandering? If three consecutive cycles invalidate core assumptions (not peripheral ones), that is strong signal for a pivot conversation. If cycles are producing mixed results with no clear pattern, the problem might be hypothesis quality rather than product-market fit. Review your learning cards as a set and look for the narrative thread before concluding that a pivot is needed.

## Why does my build measure learn loop result keep being inconclusive?

Inconclusive results usually trace back to one of three root causes. First, insufficient sample size: you did not have enough users in the experiment to detect the effect size you cared about. Recalculate your required sample and extend the measurement window or find a higher-traffic surface. Second, the success threshold was too aggressive, creating a zone where meaningful improvement still counts as inconclusive.

Recalibrate by asking what the minimum practically significant change would be. Third, the experiment design did not isolate the variable cleanly, so the treatment and control groups differ on more than one dimension. Tighten the experiment design in your next cycle. If all three factors are solid and results are still inconclusive, the honest interpretation may be that the effect does not exist at a meaningful magnitude.

## Can I run multiple build measure learn loops in parallel?

Yes, but only if the experiments do not interact. Two experiments targeting different user segments or different parts of the product can run simultaneously without contaminating each other. Two experiments targeting the same user segment will confound results because you cannot attribute behavioral changes to either treatment. A practical rule: if the same user could be in both experiments, do not run them in parallel.

Larger teams with distinct squads often run parallel loops on different product surfaces (onboarding squad runs one cycle while activation squad runs another), which works well as long as each squad's experiment scope is clearly bounded.
