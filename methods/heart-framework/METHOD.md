---
name: "heart-framework"
category: "Experience"
description: "The HEART framework is Google's UX metrics framework: five categories plus a Goals-Signals-Metrics process that ties every metric to a product goal."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# HEART Framework: Google's UX Metrics Framework

> Created by **Kerry Rodden** - [https://kerryrodden.com/heart/](https://kerryrodden.com/heart/)

## Overview

The HEART framework is a UX metrics framework from Google that breaks the broad idea of "user experience" into five categories: Happiness, Engagement, Adoption, Retention, and Task success. Kerry Rodden, Hilary Hutchinson and Xin Fu described it in their paper for CHI 2010, [Measuring the User Experience on a Large Scale](https://research.google.com/pubs/archive/36299.pdf), together with a companion process called Goals-Signals-Metrics. The paper describes the five letters as "categories, from which teams can then define the specific metrics that they will use to track progress towards goals." HEART tells a team which aspects of the experience to consider, and Goals-Signals-Metrics turns the aspects it chooses into numbers it can track.

Rodden was part of a group of quantitative UX researchers at Google who treated large-scale usage analysis as one more UX research method, and that group developed both HEART and the Goals-Signals-Metrics process ([Rodden's HEART page](https://kerryrodden.com/heart/)). According to the paper, the framework "originated from our experiences of working with teams to create and track user-centered metrics for their products." The researchers saw patterns in the metrics they kept suggesting and generalized them into a framework that other teams could remember and reuse. By the time the paper appeared, the authors had applied the framework and process to more than 20 products and projects across Google ([Rodden, Hutchinson and Fu](https://research.google.com/pubs/archive/36299.pdf)). The paper also thanks Aaron Sedley, Geoff Davis and Melanie Kellar for contributing to HEART.

HEART was a response to the metrics most teams already tracked. The paper groups those into PULSE: Page views, Uptime, Latency, Seven-day active users, and Earnings. The authors call them "extremely important" but describe them as "either very low-level or indirect metrics of user experience," which makes them a poor way to judge an interface change. They are also ambiguous. More page views on a feature might mean people like it, or it might mean a confusing interface has them clicking around looking for a way out. The paper describes HEART as a "complementary metrics framework" built because of the shortcomings the authors saw in PULSE.

Two of the categories come from established UX practice. The paper says Happiness incorporates satisfaction and Task success incorporates effectiveness and efficiency, while Engagement, Adoption and Retention are "new categories, made possible by large-scale behavioral data." The framework is meant to be used selectively. In the authors' words, "It is not always appropriate to employ metrics from every category, but referring to the framework helps to make an explicit decision about including or excluding a particular category." Their example is Engagement in an enterprise product, which may not be meaningful when users are expected to use the product as part of their work.

The Goals-Signals-Metrics process is what makes the categories usable. A team first states its goals for the product or feature, then identifies signals, the user behaviors or attitudes that would show success or failure, and only then defines the metrics it will put on a dashboard. The paper's reasoning is blunt: "No matter how user-centered a metric is, it is unlikely to be useful in practice unless it explicitly relates to a goal." The [goals signals metrics process](../../skills/defining-heart-goals-signals-metrics/SKILL.md) has its own skill page with a worked template. Rodden's later post, [How to make HEART metrics work in practice](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice), warns that teams excited by the acronym often jump straight to brainstorming metrics for a dashboard, which she calls "very unlikely to lead to a successful outcome."

The framework spread well beyond Google. In the same post, Rodden writes that HEART has been applied by teams across the tech industry and appears in introductory product resources, including the book Escaping the Build Trap. She and Chris Chapman cover it in depth in Chapter 7, "Metrics of User Experience," of their book [Quantitative User Experience Research](https://quantuxbook.com/). Independent guides such as the [Interaction Design Foundation's overview](https://ixdf.org/literature/topics/heart-framework) and [Amplitude's HEART guide](https://amplitude.com/blog/heart-framework-software-ux) add practical advice, for example applying HEART at the level of a feature rather than a whole product family.

HEART has limits that its authors state plainly. The paper says metrics "should be triangulated with findings from other sources, such as usability studies and field studies," and that they are "primarily useful for evaluation of launched products, and are not a substitute for early or formative user research." A team that has nothing live yet, or that wants metrics to replace talking to users, is asking the framework to do something it was not designed for.

## Core Principles

### The categories are prompts for metrics

Happiness, Engagement, Adoption, Retention and Task success are categories, and each one can hold many different metrics. A photo app and a payroll tool will both have a Task success category, but the tasks and the measures will have nothing in common. Treating HEART as a fixed list of five KPIs misses the point of [the original paper](https://research.google.com/pubs/archive/36299.pdf), which expects every team to define its own metrics within each category. The value of the categories is that they make a team think about attitudes, behavior over time, new users, returning users and task outcomes before settling on anything.

### Goals come before metrics

A metric is only useful if a team knows what it is supposed to show. The Goals-Signals-Metrics process forces that order: goal, then signal, then metric. [Amplitude's guide](https://amplitude.com/blog/heart-framework-software-ux) warns against picking metrics first and working backwards, noting that using the most easily available metric tends not to be a good idea. When a proposed metric cannot be traced back to a goal the team agreed on, it belongs off the dashboard.

### Choose categories deliberately

HEART is a checklist for making choices, and dropping a category is a legitimate choice. The paper's enterprise example sets Engagement aside at the product level when people use the product as part of their work, while noting it can still matter for a single feature. Rodden's [practical advice](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice) is to "Omit HEART categories that are less relevant to your project." The [IxDF guide](https://ixdf.org/literature/topics/heart-framework) goes further and suggests narrowing to no more than three goals at once.

### Signals must move for the right reasons

A good signal is sensitive and specific to the goal. The paper puts it this way: signals "should move only when the user experience is better or worse, not for other, unrelated reasons." It also notes that failure is sometimes easier to detect than success, through events such as abandoned tasks or undo actions. Logs and surveys were the two signal sources the Google team used most often, according to [Rodden, Hutchinson and Fu](https://research.google.com/pubs/archive/36299.pdf).

### Normalize everything that grows with the user base

Raw counts rise whenever more people use the product, so they say little about the experience of any one person. The paper advises that "ratios, percentages, or averages per user are often more useful," and recommends reporting Engagement as an average per user. Its Gmail example replaced seven-day active users with the percentage of active users who visited on five or more days in the last week, which the team found was strongly predictive of longer-term retention ([CHI paper](https://research.google.com/pubs/archive/36299.pdf)).

### Separate new users from existing users

A single active-user count mixes people trying the product for the first time with people who have used it for years. Adoption and Retention split them apart. The paper's example is Google Finance during the stock market crisis of September 2008, when page views and seven-day active users surged and the team used Adoption and Retention to tell new visitors from existing users checking their investments ([Rodden, Hutchinson and Fu](https://research.google.com/pubs/archive/36299.pdf)). Without that split, the team could not tell how to respond to the spike.

### A few metrics, never just one

Rodden's [post on applying HEART](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice) says it is better to have a few well-chosen metrics than an overwhelming dashboard, and also warns against narrowing to a single metric. Chris Chapman argues in [North Star ... a path to being lost](https://quantuxblog.com/north-star-a-path-to-being-lost) that focusing on one metric devalues the others and leads people to assume everything will improve together. He also notes that HEART metrics come from different sources and methods, which reduces the risk of one misleading number steering the team.

## HEART Versus PULSE

The [CHI paper](https://research.google.com/pubs/archive/36299.pdf) introduces HEART by contrast with PULSE, the business and technical metrics that most organizations already used to track product health. The two sets answer different questions, and the authors present HEART as a complement to PULSE. The table summarizes the paper's comparison.

| Aspect | PULSE | HEART |
|---|---|---|
| Stands for | Page views, Uptime, Latency, Seven-day active users, Earnings | Happiness, Engagement, Adoption, Retention, Task success |
| Main focus | Business and technical health of a product ([paper](https://research.google.com/pubs/archive/36299.pdf)) | Quality of the user experience and progress toward product goals |
| Data it adds | Traffic, availability, speed and revenue | Attitudes from surveys plus behavior per user from logs |
| Known weakness | Indirect and ambiguous for judging interface changes | Each metric must be chosen and validated by the team |
| Active users | Counts users but mixes new and returning ones | Splits them into Adoption and Retention |

The paper gives a thought experiment for the active-user weakness: with 100% turnover in the user base from week to week, seven-day active users could still rise in theory ([Rodden, Hutchinson and Fu](https://research.google.com/pubs/archive/36299.pdf)). In practice that means watching PULSE for system and business health and HEART for whether a design change made the experience better.

## Steps

1. **Set the scope**
   Decide whether you are measuring a whole product, a redesign or a single feature. The paper notes that goals for a project or feature may differ from those for the product as a whole, so write the scope down before discussing goals. [Amplitude's guide](https://amplitude.com/blog/heart-framework-software-ux) recommends working at the feature level, because a product with many features produces unclear or contradictory results. A good scope names the users it covers and the decision the metrics will inform. If nobody can name that decision, the exercise will produce a dashboard nobody uses.

2. **Choose the relevant categories**
   Go through the five categories and decide, one at a time, whether each matters for this scope. The paper notes that Adoption and Retention are especially useful for new products, new features and redesigns, and tend to stabilize for established products. Record why you excluded a category as well as why you kept one, since the paper's point is that the decision should be explicit. Expect tension between categories: [Amplitude](https://amplitude.com/blog/heart-framework-software-ux) points out that Adoption targets new users while Retention targets existing ones.

3. **Agree on goals with the team**
   Write one goal per chosen category in terms of the user experience, such as "new users can set up a project without help." The [CHI paper](https://research.google.com/pubs/archive/36299.pdf) notes that team members often disagree about goals and treats the process as a chance to reach consensus and buy-in. Do not worry yet about whether a goal can be measured, which the paper also advises. Rodden suggests a collaborative session with key members of the team for this part of the process.

4. **Identify signals for each goal**
   For each goal, list the behaviors or attitudes that would show success or failure, and name the data source for each: logs, a survey, or something else. Check whether the relevant actions are logged today or could be. Prefer signals that are sensitive to design changes and specific to the goal, and include failure signals such as abandonment where they are clearer than success. Rodden's [practical guide](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice) suggests weighing both how easy a signal is to track and how likely it is to respond to design changes.

5. **Turn signals into metrics**
   Define each metric precisely enough that two analysts would compute the same number: the numerator, the denominator, the time window and the population. Normalize counts into ratios, percentages or averages per user. Filter out automated traffic and confirm that every important user action is logged, two accuracy problems the paper names ([Rodden, Hutchinson and Fu](https://research.google.com/pubs/archive/36299.pdf)). Keep the list short, with secondary metrics on a separate view.

6. **Instrument, baseline and publish**
   Add the missing events or survey, collect a baseline before the next change ships, and put the metrics on a dashboard grouped by category. A baseline turns later numbers into evidence; without one, a team cannot say whether a change helped. Rodden [advises](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice) starting with a single receptive team and a specific project rather than an organization-wide dashboard. Set a review rhythm that matches how fast the metrics can move.

7. **Review, triangulate and iterate**
   Read HEART metrics together, because a rise in one category can hide a fall in another. When a metric moves unexpectedly, check it against qualitative research before acting, as the paper recommends triangulating with usability and field studies. Revise goals, signals and metrics as you learn which ones actually track the experience. Rodden's guidance is that the first pass through the process is only the beginning, and that teams must be ready to refine their choices.

## When to Use

- You are launching or redesigning a feature and need to know whether the change made the experience better, beyond whether traffic or revenue moved.
- Your team has plenty of analytics but no agreement on which few numbers matter, and you need a structured way to choose them.
- Product, design and engineering disagree about what success means for a project, and a goals discussion would surface that disagreement early.
- You need to split an active-user count into new and returning users to understand growth or a sudden traffic spike.
- You want to pair survey-based measures of satisfaction with behavioral measures, so neither one is read alone.
- You are building product manager skills in metric design, and want a framework with a published origin to practice on real features.

## When Not to Use

- You are still in discovery with nothing live, because the paper describes HEART metrics as mainly useful for evaluating launched products.
- You lack the logging, survey tooling or analysis time to collect signals; the [IxDF guide](https://ixdf.org/literature/topics/heart-framework) notes that HEART takes significant investment in analytics infrastructure and survey tools.
- The question is about system health or revenue alone, where PULSE-style metrics such as uptime, latency and earnings answer it directly.
- You want metrics to stand in for talking to users; HEART metrics are proxies and need qualitative research beside them.

## Skills

This method includes the following skills:

- [Defining Goals, Signals, and Metrics for HEART](../../skills/defining-heart-goals-signals-metrics/SKILL.md): Use the Goals-Signals-Metrics process to turn a HEART category into goals, signals and precisely defined metrics.
- [Measuring Adoption and Task Success with HEART](../../skills/measuring-adoption-and-task-success/SKILL.md): Define who counts as adopted and measure completion, errors and time on the tasks that matter.
- [Tracking Engagement and Retention Metrics](../../skills/tracking-engagement-and-retention-metrics/SKILL.md): Measure engagement per user and cohort retention from behavioral logs.
- [Measuring User Happiness Through Satisfaction Surveys](../../skills/measuring-user-happiness-surveys/SKILL.md): Run a sampled, in-product satisfaction survey that can be tracked over time.
- [Running HEART Framework Workshops](../../skills/running-heart-framework-workshops/SKILL.md): Facilitate the session where a team agrees on goals and brainstorms signals together.
- [Building HEART Metric Dashboards for Product Teams](../../skills/building-heart-dashboards/SKILL.md): Put a short, prioritized set of HEART metrics on a dashboard people review.
- [HEART Framework Interview Answers for PM Metrics Questions](../../skills/presenting-heart-metrics-in-interviews/SKILL.md): Structure answers to product manager metrics questions with HEART and Goals-Signals-Metrics.

## FAQ

**What does HEART stand for?**

HEART stands for Happiness, Engagement, Adoption, Retention, and Task success. Happiness covers attitudes such as satisfaction and perceived ease of use, usually measured by survey. Engagement, Adoption and Retention describe behavior over time: how intensely people use the product, how many new people start, and how many come back. Task success covers efficiency, effectiveness and error rate, as defined in the [original paper](https://research.google.com/pubs/archive/36299.pdf).

**Who created the HEART framework?**

It was developed by a group of quantitative UX researchers at Google, and Kerry Rodden led that early team, according to her post [How to make HEART metrics work in practice](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice). Rodden, Hilary Hutchinson and Xin Fu published it in the paper [Measuring the User Experience on a Large Scale](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/) at CHI 2010. The paper also credits Aaron Sedley, Geoff Davis and Melanie Kellar for contributing. Rodden's own [HEART page](https://kerryrodden.com/heart/) lists the paper as the academic reference.

**Do I need to use all five categories?**

No. The paper says it is not always appropriate to use metrics from every category, and asks teams to make an explicit decision about including or excluding each one. Rodden's [practical guide](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice) repeats the advice: use HEART as a starting point, but do not use every category or force goals to fit them. The [IxDF guide](https://ixdf.org/literature/topics/heart-framework) suggests narrowing to no more than three goals at a time.

**What is the Goals-Signals-Metrics process?**

It is the companion process to HEART. A team states its goals, identifies signals in behavior or attitudes that would show success or failure, and then builds metrics from those signals for tracking on a dashboard ([Rodden, Hutchinson and Fu](https://research.google.com/pubs/archive/36299.pdf)). The order matters because it keeps easy-to-collect numbers from replacing meaningful ones. The skill page on [defining goals, signals and metrics](../../skills/defining-heart-goals-signals-metrics/SKILL.md) walks through it step by step.

**Does HEART work for enterprise and B2B products?**

Yes, with adjustments. The paper's own example is enterprise software, where Engagement may not be meaningful at the product level because people use the product as part of their work, so the team may focus more on Happiness or Task success. Engagement can still be useful for a single optional feature. The paper notes that its products covered both consumer and business categories ([CHI paper](https://research.google.com/pubs/archive/36299.pdf)).

**How is Happiness usually measured?**

Through surveys. The paper describes the iGoogle team tracking satisfaction with a weekly in-product survey on a 7-point bipolar scale, and using the recovery of that score after a redesign to conclude that the early dip was probably change aversion. Google later documented its Happiness Tracking Surveys in a separate [HaTS paper](https://research.google.com/pubs/archive/43221.pdf), which notes that the HEART paper explored happiness measurement only briefly. The [happiness surveys skill](../../skills/measuring-user-happiness-surveys/SKILL.md) covers sampling and question design.

**Should HEART replace a single North Star metric?**

HEART argues against relying on any single number. Chris Chapman, Rodden's co-author, writes that focusing on one metric devalues others and that HEART's mix of sources reduces the risk of a misleading signal ([North Star ... a path to being lost](https://quantuxblog.com/north-star-a-path-to-being-lost)). Rodden likewise warns against both metric overload and single-metric tunnel vision. A short set of metrics across two or three categories is the usual middle ground.

**Is HEART useful in product manager interviews?**

Yes. Analytics and metrics questions are a common part of product manager interviews, according to [Exponent's question guide](https://www.tryexponent.com/blog/top-product-manager-interview-questions), and HEART with Goals-Signals-Metrics gives a clear structure for answering them. The [HEART framework interview skill](../../skills/presenting-heart-metrics-in-interviews/SKILL.md) shows how to choose categories out loud and explain each metric's link to a goal.

## Sources

- [Rodden, Hutchinson and Fu: Measuring the User Experience on a Large Scale (CHI 2010, PDF)](https://research.google.com/pubs/archive/36299.pdf)
- [Google Research: publication page for the CHI 2010 paper](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/)
- [Kerry Rodden: The HEART framework for UX metrics](https://kerryrodden.com/heart/)
- [Kerry Rodden: How to make HEART metrics work in practice](https://quantuxblog.com/how-to-make-heart-metrics-work-in-practice)
- [Chapman and Rodden: Quantitative User Experience Research](https://quantuxbook.com/)
- [Chris Chapman: North Star ... a path to being lost](https://quantuxblog.com/north-star-a-path-to-being-lost)
- [Mueller and Sedley: HaTS, Happiness Tracking Surveys (PDF)](https://research.google.com/pubs/archive/43221.pdf)
- [Interaction Design Foundation: What is the HEART Framework?](https://ixdf.org/literature/topics/heart-framework)
- [Amplitude: How to Use the HEART Framework to Improve Software UX](https://amplitude.com/blog/heart-framework-software-ux)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
