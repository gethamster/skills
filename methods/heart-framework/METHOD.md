---
category: Experience
---

# HEART Framework: How Every Product Manager Can Measure UX at Scale

> Created by **Kerry Rodden** — [https://kerryrodden.com/heart/](https://kerryrodden.com/heart/)

## Overview

The HEART Framework was created by Kerry Rodden and the Google research team to solve a persistent challenge: how do you measure user experience at scale in a way that is both meaningful and actionable? Before HEART, many product teams relied on vanity metrics or a hodgepodge of analytics that failed to connect user sentiment to business outcomes. HEART provides a structured vocabulary—Happiness, Engagement, Adoption, Retention, and Task Success—that gives every product manager a comprehensive lens through which to evaluate product health.

What makes HEART especially powerful is its companion process: Goals-Signals-Metrics (GSM). Rather than jumping straight to dashboard numbers, GSM forces teams to first articulate *what* success looks like for a given feature or product (Goals), *what* user behaviors would indicate progress toward that goal (Signals), and only then *which* specific metrics to track (Metrics). This prevents the common anti-pattern of measuring what's easy rather than what matters.

For a product manager, the HEART Framework serves multiple roles. It's a strategic alignment tool during roadmap planning, a communication bridge in cross-functional meetings, and a rigorous evaluation system during post-launch reviews. Whether you're an associate product manager defining your first KPIs or a senior product manager presenting quarterly results to leadership, HEART provides the structure to ensure that user-centered measurement is embedded in every decision.

The framework is intentionally modular. Not every product or feature requires all five HEART categories. A product manager should select the dimensions most relevant to their current goals—for instance, a new feature launch might prioritize Adoption and Task Success, while a mature product might focus on Retention and Happiness. This flexibility is what has made HEART a staple methodology at Google and across the broader product management community.

## Core Principles

### Happiness

Happiness captures subjective, attitudinal aspects of user experience—satisfaction, perceived ease of use, and net promoter likelihood. It is typically measured through surveys, in-app feedback, and satisfaction scores. This dimension ensures a product manager never loses sight of how users *feel* about the product, not just how they behave.

### Engagement

Engagement measures the depth and frequency of user interaction with a product. Metrics might include session duration, number of actions per session, or feature-specific interaction rates. For a product manager, engagement signals whether the product is delivering enough value to command users' ongoing attention and investment.

### Adoption

Adoption tracks how many new users start using a product or feature within a defined time window. It covers metrics like new signups, first-time feature usage, or onboarding completion rates. Monitoring adoption helps a product manager understand whether discovery, marketing, and onboarding flows are converting awareness into active usage.

### Retention

Retention measures whether users come back over time. It's typically expressed as cohort-based return rates (e.g., Day 7, Day 30 retention) or churn rates. Retention is arguably the most critical long-term health metric because it reveals whether the product delivers sustained value—something every product manager must obsess over.

### Task Success

Task Success evaluates how efficiently and effectively users accomplish specific goals within the product. Common metrics include task completion rate, error rate, and time-on-task. This dimension is especially important for workflow-heavy products where usability directly impacts user outcomes and satisfaction.

### Goals-Signals-Metrics (GSM) Process

GSM is the engine that powers HEART. For each HEART dimension, teams articulate a Goal (the desired outcome), identify Signals (observable user behaviors that indicate progress), and define Metrics (quantifiable measures derived from those signals). GSM prevents metric sprawl and ensures every number on a dashboard ties back to a clear product objective.

## Steps

1. **Step 1: Choose the Relevant HEART Categories**
   Not every HEART dimension applies to every product or feature. Begin by selecting which of the five categories—Happiness, Engagement, Adoption, Retention, Task Success—are most relevant to your current product context. A new onboarding flow might prioritize **Adoption** and **Task Success**, while a mature social product would focus on **Engagement** and **Retention**. As a product manager, resist the urge to track everything; focus creates clarity.

2. **Step 2: Define Goals for Each Category**
   For each selected HEART category, articulate a clear, qualitative goal. Goals should describe the desired user outcome, not a metric. For example, under Happiness: *'Users feel confident and satisfied completing their first project.'* Under Retention: *'Users return weekly because they find ongoing value.'* Write goals collaboratively with your design, engineering, and research partners to ensure alignment.

3. **Step 3: Identify Signals That Indicate Progress**
   Signals are observable user actions or attitudes that would suggest you're moving toward your goal. For a Happiness goal, a signal might be *'users rate their experience 4+ stars in the in-app survey.'* For an Engagement goal, a signal could be *'users interact with the core feature at least 3 times per session.'* List multiple candidate signals per goal before narrowing down.

4. **Step 4: Translate Signals into Quantifiable Metrics**
   Convert each signal into a specific, measurable metric with a clear data source. Examples: *Average satisfaction score (from quarterly NPS survey)*, *Weekly active users / Monthly active users ratio (from product analytics)*, *Percentage of new users completing onboarding within 24 hours (from event tracking)*. Each metric should be unambiguous enough that any team member can compute it independently.

5. **Step 5: Instrument and Baseline Your Metrics**
   Work with engineering to ensure the necessary event tracking, survey triggers, and data pipelines are in place. Collect baseline measurements before making product changes. A product manager should document the baseline, the data source, and the measurement cadence (daily, weekly, monthly) for each metric. Without baselines, you cannot measure impact.

6. **Step 6: Build a HEART Dashboard**
   Create a centralized dashboard that visualizes your HEART metrics in one place. Organize it by HEART category so stakeholders can quickly assess product health across all dimensions. Include trend lines, targets, and annotations for major releases. Tools like Looker, Amplitude, or even a well-structured spreadsheet work—what matters is accessibility and regular review.

7. **Step 7: Review, Interpret, and Act**
   Schedule regular review cadences—weekly for fast-moving products, bi-weekly or monthly for mature ones. During reviews, don't just read numbers; interpret them. If Adoption is rising but Retention is falling, you're acquiring users who don't find lasting value. Use HEART insights to prioritize your roadmap, design experiments, and communicate product strategy to leadership.

8. **Step 8: Iterate on Your Goals-Signals-Metrics**
   HEART is not a set-it-and-forget-it framework. As your product evolves, revisit your GSM mappings quarterly. Goals shift as you move from growth to maturity. Signals become irrelevant as user behavior changes. Metrics need recalibration as you hit or miss targets. A disciplined product manager treats the HEART Framework as a living system, not a static artifact.

## When to Use

- When launching a new product or major feature and you need a comprehensive measurement plan that covers both attitudinal and behavioral user experience dimensions.
- When your product team has an abundance of analytics data but lacks a coherent framework to prioritize which metrics actually matter for user-centered decision-making.
- When aligning cross-functional stakeholders—engineering, design, marketing, and leadership—around a shared definition of product success that goes beyond revenue or growth metrics.
- When preparing for a product manager interview or quarterly business review and you need a structured way to present how your product is performing across multiple UX dimensions.
- When transitioning from a feature-shipping mindset to an outcomes-driven culture and you need a framework that forces goal articulation before metric selection.

## When Not to Use

- When you're in the earliest discovery or ideation phase and don't yet have a live product or prototype generating user data—HEART requires observable signals to be meaningful.
- When the decision at hand is purely a business model or pricing question with no direct UX component; financial frameworks like unit economics analysis would be more appropriate.
- When you only need to track a single, well-understood metric (e.g., conversion rate for an A/B test)—HEART's breadth adds unnecessary overhead for narrowly scoped experiments.
- When your team lacks the instrumentation or analytics infrastructure to collect the signals required; invest in event tracking and data pipelines first before adopting HEART.

## Skills

This method includes the following skills:

- [Measuring Adoption Rates and Task Success for New Features](../../skills/measuring-adoption-and-task-success/SKILL.md) — Methods for tracking new user onboarding funnels, feature adoption curves, and task-completion rates to evaluate Adoption and Task Success.
- [Tracking Engagement and Retention Metrics at Scale](../../skills/tracking-engagement-and-retention-metrics/SKILL.md) — How to instrument and analyze behavioral data—session frequency, feature usage, and cohort retention—to measure the Engagement and Retention dimensions.
- [Measuring User Happiness Through Surveys and Satisfaction Scores](../../skills/measuring-user-happiness-surveys/SKILL.md) — Techniques for designing and deploying user satisfaction surveys, NPS, and sentiment analysis to quantify the Happiness dimension of HEART.
- [Defining Goals, Signals, and Metrics with the HEART Framework](../../skills/defining-heart-goals-signals-metrics/SKILL.md) — How to use the Goals-Signals-Metrics (GSM) process to translate each HEART dimension into measurable, actionable product metrics.
- [Running HEART Framework Workshops with Cross-Functional Teams](../../skills/running-heart-framework-workshops/SKILL.md) — A facilitation guide for leading collaborative sessions where designers, engineers, and PMs align on HEART goals, signals, and success metrics.
- [Presenting HEART Metrics in Product Manager Interviews](../../skills/presenting-heart-metrics-in-interviews/SKILL.md) — How to articulate UX measurement strategies using the HEART framework when answering product manager interview questions about metrics and impact.
- [Building HEART Metric Dashboards for Product Teams](../../skills/building-heart-dashboards/SKILL.md) — Step-by-step guidance on creating live dashboards that visualize all five HEART dimensions to inform roadmap decisions and stakeholder reviews.

## FAQ

**How does a product manager choose which HEART categories to focus on?**

Start with your product's current strategic priorities. If you're launching a new feature, Adoption and Task Success are typically most relevant. For mature products, Retention and Happiness take precedence. Engagement is universally useful but should be defined carefully to avoid vanity metrics. Most teams focus on 2-3 categories at a time rather than all five.

**What is the difference between the HEART Framework and Google's PULSE metrics?**

PULSE (Page views, Uptime, Latency, Seven-day active users, Earnings) measures system and business performance. HEART was specifically designed to capture user experience quality. PULSE metrics are important but don't tell you how users feel or whether they're succeeding at their tasks. A product manager often uses both frameworks in parallel for a complete picture.

**Can the HEART Framework be used for B2B SaaS products or only consumer products?**

HEART works well for B2B SaaS products. The categories are universal—B2B users also have satisfaction levels, engagement patterns, adoption journeys, retention curves, and task success rates. The key difference is that B2B signals often come from account-level data and longer time horizons rather than individual user sessions.

**How does the Goals-Signals-Metrics process prevent teams from tracking vanity metrics?**

GSM forces you to start with a meaningful goal before selecting any metric. By requiring an explicit link from goal to signal to metric, it filters out numbers that look impressive but don't indicate actual user experience improvement. If you can't trace a metric back to a clear user-centered goal, it doesn't belong on your HEART dashboard.

**How do product manager interview questions relate to the HEART Framework?**

Many product manager interviews ask candidates to define success metrics for a product or feature. The HEART Framework gives you a structured, impressive answer format. You can walk interviewers through your category selection, GSM mapping, and how you'd use the resulting metrics to make product decisions—demonstrating both strategic thinking and analytical rigor.

**How often should a product manager update HEART metrics and dashboards?**

Behavioral metrics like Engagement and Retention should update daily or weekly via automated dashboards. Attitudinal metrics like Happiness typically update on survey cadences—monthly or quarterly. Review the full HEART dashboard in team rituals at least bi-weekly. Reassess and revise your Goals-Signals-Metrics mappings quarterly or after major product launches.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
