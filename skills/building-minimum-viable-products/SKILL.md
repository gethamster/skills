---
name: "building-minimum-viable-products"
description: "Scope, build and launch the smallest product or service that tests one risky hypothesis with real target customers."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "lean-startup-framework"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# How to build a minimum viable product that tests one bet

> Scope, build and launch the smallest product or service that tests one risky hypothesis with real target customers.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Typically a few days to a few weeks per MVP, depending on the type you choose |
| Outcome | A launched, instrumented MVP with a pre-set success threshold that produces behavioral evidence for or against one riskiest assumption. |
| Prerequisites | A written list of the business assumptions behind your idea, Access to a reachable group of the customers your idea targets, A way to record customer behavior, such as analytics events or a structured log, Basic familiarity with the Build-Measure-Learn loop |
| Part of | [Lean Startup Framework](../../methods/lean-startup-framework/METHOD.md) |

## Overview

A minimum viable product is the smallest usable artifact or service that can test one selected hypothesis with real customers, which is how [LeanStartup.co describes the output of the build stage](https://leanstartup.co/resources/articles/lean-startup-method). It is not version one of your product with a few features removed. Its job is to start learning, and [the official Lean Startup principles](https://theleanstartup.com/principles) frame the MVP as the way to begin the learning process as quickly as possible rather than as a complete product. For background on the wider method, see the [Lean Startup Framework](https://tryhamster.com/methods/lean-startup-framework) page.

This skill covers the practical work: choosing which assumption the MVP tests, cutting every feature that does not help test it, picking the cheapest MVP type that still produces behavioral evidence, instrumenting it, and putting it in front of the customers your hypothesis names. The input is a list of business assumptions plus a falsifiable hypothesis about the riskiest one. The output is a running experiment whose success metric and decision threshold were fixed before launch, as [Umbrex's guide to the Build-Measure-Learn loop](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop) recommends.

Scoping is where teams get stuck. In [a survey of 272 mobile startups discussed in a Hilaris review](https://hilarispublisher.com/open-access/lean-startup-as-an-entrepreneurial-strategy-limitations-outcomes-and-learnings-for-practitioners-52478.html), 62% of respondents called the MVP a vital concept while 82% ([source](https://hilarispublisher.com/open-access/lean-startup-as-an-entrepreneurial-strategy-limitations-outcomes-and-learnings-for-practitioners-52478.html)) named defining and designing an MVP as one of the method's disadvantages. Agreeing that MVPs matter is easy. Deciding what goes in one, and what stays out, is the hard part, and it is what the steps below are built around.

Pick the type by what the hypothesis needs you to observe. The table is a starting reference, not a complete catalog.

| MVP type | Use it when | What it tests |
|---|---|---|
| Concierge ([Umbrex](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop)) | You can deliver the value by hand before automating | Whether customers want the outcome enough to use it |
| Landing page or smoke test | Nothing exists yet and demand is the open question | Whether the segment takes a committing action |
| Manual back end behind a real interface | The experience matters but automation is costly | Whether customers use the workflow repeatedly |
| Clickable prototype | The risk is usability or comprehension | Whether customers can finish the core task |
| Single-feature product | The value only exists in working software | Whether usage and retention hold around one job |

Whatever the type, apply one test before you build: will this artifact generate the learning the hypothesis needs with less effort than any alternative? If a simpler format would answer the same question, build the simpler one. If no format you can afford would produce readable behavior, the hypothesis probably needs to be narrowed first.

## How It Works

An MVP works as a filter between an assumption and a decision. Every choice you make while building it should raise the odds that customer behavior will clearly support or reject one hypothesis. Anything that does not do that is cost without learning.

The chain runs in a fixed order. You start from the assumptions that must be true for the business to work: target customer, customer problem, proposed solution, acquisition channel, pricing and revenue model, the list [Umbrex suggests writing down first](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop). You rank them by risk and select the one that is both most uncertain and most damaging if false, which [a Lean Startup method overview](https://tryhamster.com/methods/lean-startup) calls the riskiest assumption, the one thing that must be true for the business to work. You then rewrite it as a falsifiable prediction about what a named customer group will do. Writing that hypothesis well is covered in [Designing Validated Learning Experiments](https://tryhamster.com/skills/designing-validated-learning-experiments).

Only then does scope enter. [LeanStartup.co's process](https://leanstartup.co/resources/articles/lean-startup-method) sequences the work as identify assumptions, select the riskiest, design the MVP, formulate the MVP hypothesis, run the test, review results, incorporate the learning and repeat, and it limits the feature set to what helps test the current theory. That constraint is what makes an MVP minimum. Features are excluded not because they are unimportant but because they do not change the answer to this particular question.

Type selection follows from what the hypothesis needs to observe. If people can deliver the value, a concierge MVP lets you [deliver it manually before automating the underlying system](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop). If the question is whether anyone will commit, a page that asks for a sign-up or payment may be enough. If the question is whether a workflow gets reused, customers need something they can actually use more than once. Polish, completeness and production-scale automation are not prerequisites when a simpler artifact can generate the learning.

Measurement is designed before launch. You fix a success metric and a decision threshold in advance so the result is compared with the original standard rather than one chosen after seeing the data, and you instrument the MVP with event tracking, funnels or cohorts [to capture customer behavior](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop). Choosing the metric itself is covered in [Choosing Actionable Over Vanity Metrics](https://tryhamster.com/skills/choosing-actionable-over-vanity-metrics).

Each stage has a distinct output. Build produces the smallest usable artifact or service able to test the hypothesis with real customers. Measure produces behavioral evidence tied to the predefined metrics and thresholds. Learn produces a decision to persevere, pivot or stop, followed by a revised hypothesis. The full loop mechanics live in [Running Build-Measure-Learn Cycles](https://tryhamster.com/skills/running-build-measure-learn-cycles); this skill concentrates on making the build stage cheap and the measure stage trustworthy.

You can tell the MVP failed as an instrument, as opposed to the idea failing, when the result cannot be read. The usual causes are that the wrong people used it, the key behavior was never tracked, or nobody agreed beforehand what counted as success. Fix the instrument and rerun before drawing conclusions about the idea.

## Step-by-Step Guide

### Step 1: List the business assumptions

Write down every assumption that must hold for the business to work, grouped by target customer, customer problem, proposed solution, acquisition channel, pricing and revenue model, following [Umbrex's Build-Measure-Learn guide](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop). Phrase each as a statement that could turn out false, such as a claim about who has the problem or what they would pay. Keep solution ideas separate from problem claims, because teams tend to jump to testing the solution before confirming the problem. The output is a single list the whole team can see and argue with.

> **Pro tip:** Ask each person to add the assumption they are least sure about. The uncomfortable ones rarely surface in a group brainstorm.

### Step 2: Select the riskiest assumption and write the hypothesis

Rank the list by two questions: how uncertain is this, and how badly does the business break if it is wrong. The top item is your riskiest assumption, [the one thing that must be true for the business to work](https://tryhamster.com/methods/lean-startup). Convert it into a falsifiable hypothesis that names a customer group, a behavior and an observable result. A hypothesis like customers will love it cannot fail, so it cannot teach you anything.

> **Pro tip:** Resist testing the assumption you are most confident about first. Comfortable tests produce comfortable results and little learning.

### Step 3: Cut the feature set to the hypothesis

Draft the features you think the MVP needs, then strike every one that does not help test the current hypothesis, which is the scoping rule in [LeanStartup.co's method overview](https://leanstartup.co/resources/articles/lean-startup-method). For each remaining feature, ask whether removing it would make the result impossible to read. If the answer is no, it goes on a later list. The output is a short, defensible scope where every item traces back to the hypothesis.

> **Pro tip:** Keep a visible parking lot for cut features. People accept cuts more readily when they can see the idea was recorded rather than dismissed.

### Step 4: Choose the cheapest MVP type that still yields behavior

Match the format to what you need to observe, using the reference table above. A concierge MVP fits when the team can [deliver the value manually before automating](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop). A landing page fits a pure demand question, while a single-feature product fits when value depends on repeated use of working software. Compare the options on cost to build and on whether the resulting behavior would actually answer the hypothesis.

### Step 5: Set the success metric and decision threshold

Before anyone builds, agree on the one metric that reflects the hypothesis and the value that counts as support, as [Umbrex recommends](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop). Also agree what result would count as rejection and what falls in between. Write these down with a date, so the standard cannot drift once data arrives. Without them, any outcome can be rationalized as encouraging.

> **Pro tip:** Frame the threshold as an example target the team signs off on, for instance a share of trial users who return within a set window, and record who agreed.

### Step 6: Instrument the behavior you need

Add event tracking, funnel steps or cohort tags for the exact actions the metric depends on. For a concierge MVP, instrumentation can be a structured log of each request, delivery and repeat order. Test the tracking yourself end to end before launch, because missing events are the most common reason an MVP result cannot be read. The output is a data trail that maps directly to the success metric.

> **Pro tip:** Log the date each customer first arrived. It makes cohort comparisons possible later without rebuilding the data.

### Step 7: Launch to the named customers and read behavior

Release the MVP to the specific customer group the hypothesis names, not to friends, colleagues or investors, a point the [Lean Startup method overview](https://tryhamster.com/methods/lean-startup) makes about testing with real users. Watch what they do: sign-ups, usage, repeat use, purchases or referrals. Treat enthusiasm in conversations as context, not evidence. When the test window closes, compare the result with your pre-set threshold and decide whether to persevere, pivot or stop.

> **Pro tip:** Recruit through the channel you would actually use to acquire customers. It tests reachability as a side effect.

## Best Practices

- Tie every feature to the hypothesis in writing. When [LeanStartup.co's process](https://leanstartup.co/resources/articles/lean-startup-method) limits scope to what tests the current theory, a written trace is what lets you enforce that rule in a scoping argument.
- Test one riskiest assumption per MVP. Bundling several hypotheses into one build means a bad result cannot tell you which assumption failed.
- Prefer manual delivery when it answers the question. A concierge approach, where you [deliver value by hand before automating](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop), costs little and shows you the real workflow before you code it.
- Fix the metric and threshold before build starts. Deciding afterward invites the team to pick whichever number looks best, which destroys the test.
- Instrument before launch and verify the tracking yourself. A launched MVP without working measurement burns customer attention you may not get back.
- Launch to the customers named in the hypothesis. The [Lean Startup method overview](https://tryhamster.com/methods/lean-startup) warns against relying on friendly audiences, because their behavior does not predict how real customers will act.
- Budget the MVP in time, not features. Set a time box, for example two weeks, and cut scope to fit it rather than extending the date to fit the scope.

## Common Mistakes

- **Building a broad feature set before naming the hypothesis being tested.** — Write the hypothesis first, then include only features that help test it, as [LeanStartup.co's method](https://leanstartup.co/resources/articles/lean-startup-method) calls for. Everything else waits for evidence.
- **Treating polish, completeness or production-scale automation as prerequisites for the first test.** — Ask whether a simpler artifact, such as a manual service or a landing page, would generate the same learning. [Umbrex's guidance](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop) favors the smallest thing that can test the hypothesis.
- **Counting customer enthusiasm or stated preferences as validated demand.** — Measure what the intended customer group does, such as signing up, paying or returning. Compliments in interviews are a reason to test, not a test result.
- **Launching to friends, colleagues or investors because they are easy to reach.** — Recruit from the segment the hypothesis names. Friendly users forgive gaps real customers would not, so their behavior inflates the result.
- **Measuring activity without deciding what result supports or rejects the hypothesis.** — Set the success metric and decision threshold before launch, then compare against them. Without criteria, the data produces debate instead of a decision.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/lean-startup-framework/METHOD.md) — Lean Startup Framework

## Related Skills

- [Making Pivot-or-Persevere Decisions](../identifying-pivot-or-persevere-decisions/SKILL.md)
- [Running Build-Measure-Learn Cycles](../running-build-measure-learn-cycles/SKILL.md)
- [Setting Up Innovation Accounting](../setting-up-innovation-accounting/SKILL.md)
- [Conducting Customer Discovery Interviews](../conducting-customer-discovery-interviews/SKILL.md)
- [Choosing Actionable Over Vanity Metrics](../choosing-actionable-over-vanity-metrics/SKILL.md)
- [Designing Validated Learning Experiments](../designing-validated-learning-experiments/SKILL.md)

## Sources

- [Lean Startup as an Entrepreneurial Strategy: Limitations, Outcomes, and Learnings for Practitioners](https://hilarispublisher.com/open-access/lean-startup-as-an-entrepreneurial-strategy-limitations-outcomes-and-learnings-for-practitioners-52478.html)
- [The Lean Startup Method 101: The Essential Ideas](https://leanstartup.co/resources/articles/lean-startup-method)
- [Lean Startup Build–Measure–Learn Loop \| Agile - Umbrex](https://umbrex.com/resources/frameworks/organization-frameworks/lean-startup-build-measure-learn-loop)
- [The Lean Startup Method: Build, Measure, Learn Faster - Hamster](https://tryhamster.com/methods/lean-startup)
- [Methodology - The Lean Startup](https://theleanstartup.com/principles)
