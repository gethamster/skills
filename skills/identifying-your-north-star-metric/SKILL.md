---
name: identifying-your-north-star-metric
description: "This skill teaches you how to discover and define the single metric that best captures the core value your product delivers to customers, forming the foundation of the North Star Framework."
metadata:
  method: north-star-framework
---

# Identifying Your Product's North Star Metric

> This skill teaches you how to discover and define the single metric that best captures the core value your product delivers to customers, forming the foundation of the North Star Framework.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for initial identification, plus 1-2 weeks of validation |
| Outcome | You produce a clearly defined, validated North Star Metric that the entire product organization can use to align decisions, prioritize work, and measure whether your product is delivering increasing value to customers over time. |
| Prerequisites | Basic understanding of product analytics and how your product is instrumented, Familiarity with your product's business model and revenue drivers, Access to user behavior data or analytics tools (e.g., Amplitude, Mixpanel, or even spreadsheets), Understanding of what is a product manager's role in defining strategy and success metrics |
| Part of | [North Star Framework](../../methods/north-star-framework/METHOD.md) |

## Overview

Every product team faces a common challenge: dozens of metrics are moving in different directions, stakeholders disagree on what matters most, and teams optimize for local metrics that don't compound into real business outcomes. Identifying your North Star Metric solves this by forcing you to answer a deceptively hard question: what single measurement best represents the value customers get from your product? This is the foundational skill within the [North Star Framework](https://tryhamster.com/methods/north-star-framework), and everything else—mapping input metrics, aligning teams, building dashboards—depends on getting this right.

The North Star Metric (NSM) is not a vanity metric like page views, nor is it a pure business metric like revenue. It sits at the intersection of customer value and business value. For Spotify, it's time spent listening. For Airbnb, it's nights booked. For Slack, it's messages sent within organizations. Each of these metrics captures the core exchange of value: when the number goes up, customers are getting more value, and the business grows sustainably. Understanding what is a product manager's core responsibility helps clarify why this skill matters—product managers are uniquely positioned to bridge customer needs with business outcomes, and the North Star Metric is the instrument that makes that bridge measurable.

This skill matters because choosing the wrong metric can be worse than having no metric at all. A poorly chosen NSM can misalign incentives, encourage short-term gaming, or focus teams on activity rather than outcomes. The process of identification is as valuable as the result—it forces deep thinking about your product's value proposition, your customers' jobs-to-be-done, and the relationship between customer success and business growth.

## How It Works

The core mental model behind identifying a North Star Metric is the **value exchange loop**: your product delivers value to customers, customers signal that value through their behavior, and that behavior drives sustainable business growth. Your NSM should sit at the heart of this loop—it should go up when customers get more value and, as a consequence, when your business becomes healthier.

Think of it as a funnel with three filters. First, the metric must reflect **customer value received**, not just customer activity. There's a critical difference between 'users who logged in' (activity) and 'users who completed a project' (value received). Second, the metric must be **leading**, not lagging—it should predict future revenue and retention, not just report on the past. Third, the metric must be **influenceable** by the product team. If your team can't move it through product decisions, it's not a useful North Star.

The reason this is an intermediate skill rather than a beginner one is that it requires judgment, not just analysis. You'll find that multiple candidate metrics seem reasonable, and the data alone won't tell you which is right. You need to combine quantitative analysis (which metrics correlate with retention and revenue?) with qualitative understanding (what moment represents real value for your customer?). The best North Star Metrics often feel obvious in hindsight but require significant exploration to surface. They emerge from a deep understanding of your product's value proposition—the kind of understanding that what is a product manager fundamentally responsible for cultivating through continuous customer discovery and strategic thinking.

One important nuance: a North Star Metric is not permanent. Products evolve, markets shift, and your understanding deepens. But you need to commit to one for long enough to align your team and learn from it—typically 6-12 months minimum. The [iterating and evolving your North Star Metric](https://tryhamster.com/skills/iterating-and-evolving-north-star-metric) skill covers when and how to revisit it.

## Step-by-Step Guide

### Step 1: Step 1: Articulate Your Product's Core Value Proposition

Before looking at any data, write down in one or two sentences what value your product delivers to customers. Focus on the outcome they achieve, not the features you provide. For a project management tool, the value isn't 'task lists and Gantt charts'—it's 'teams ship projects on time with less coordination overhead.' Interview 5-10 customers and ask them to describe the moment they first felt your product was worth paying for. Look for patterns in their language.

> **Pro tip:** Use the 'jobs-to-be-done' framing: 'When [situation], customers hire our product to [outcome], so they can [benefit].' This structure forces you past feature-level thinking.

### Step 2: Step 2: Identify the 'Value Moment' in Your Product

Map the customer journey and pinpoint the specific action or event that represents value being received. This isn't the signup or first login—it's the moment the customer's problem is actually being solved. For a collaboration tool, it might be 'a team member responds to a shared document.' For an e-commerce platform, it might be 'a buyer receives their order and doesn't return it.' List 3-5 candidate value moments, then rank them by how directly they represent the core value you articulated in Step 1.

> **Pro tip:** If you're unsure, look at what churned users did NOT do. The actions that separate retained users from churned users often point directly to your value moment.

### Step 3: Step 3: Generate Candidate North Star Metrics

For each value moment, brainstorm metrics that quantify it. A good NSM typically combines three dimensions: breadth (how many customers), depth (how much value per customer), and frequency (how often). For Spotify, 'total hours listened per week' combines all three. For each candidate, write it out as a specific, measurable statement: 'Weekly active teams that complete at least one project milestone.' Aim for 3-6 strong candidates. Don't filter too aggressively at this stage—you want options to compare.

> **Pro tip:** Test each candidate against this template: 'If [metric] goes up, we are confident that customers are getting more value AND the business will grow.' If either clause fails, refine the metric.

### Step 4: Step 4: Validate Candidates Against Historical Data

Pull your analytics data and test each candidate metric's correlation with two outcomes: customer retention (do customers who score high on this metric stick around?) and revenue growth (does this metric's movement predict future revenue?). You don't need sophisticated statistical analysis—even plotting the metric against 90-day retention in a spreadsheet will reveal patterns. If a candidate metric has no meaningful correlation with retention or revenue, it's measuring activity, not value. Eliminate those candidates.

> **Pro tip:** Look at cohort data, not just aggregate numbers. A metric might look good in aggregate but fail for specific customer segments. Your NSM should work across your most important segments.

### Step 5: Step 5: Apply the Six Criteria Test

Score each remaining candidate against six criteria: (1) It expresses value—when it moves, customers are getting more value. (2) It represents vision—it points toward where your product is heading. (3) It's a leading indicator—it predicts future success, not just reports on the past. (4) It's actionable—your product team can influence it directly. (5) It's understandable—you can explain it to any team member in one sentence. (6) It's measurable—you can track it reliably with your current instrumentation. Score each criterion 1-5 and compare totals. The highest-scoring candidate is your frontrunner.

> **Pro tip:** The 'understandable' criterion is more important than it seems. If people can't remember the metric or explain it to a new hire, it won't drive alignment—which defeats the entire purpose of having a North Star.

### Step 6: Step 6: Stress-Test with Thought Experiments

Take your top candidate and deliberately try to break it. Ask: 'Could we game this metric in a way that hurts customers?' (If yes, refine it.) 'Would this metric still be relevant if we doubled our user base?' (If no, it may be a growth-stage metric, not a true North Star.) 'If this metric plateaued, would we be worried even if revenue kept growing?' (If no, it might not be fundamental enough.) Run these scenarios with your team—different perspectives will surface blind spots you missed alone.

> **Pro tip:** The most common failure mode is choosing a metric that can be inflated through low-quality activity. If your metric is 'messages sent,' teams might optimize for notification spam. Consider adding a quality qualifier, like 'messages sent that receive a reply within 24 hours.'

### Step 7: Step 7: Define the Metric Precisely

Once you've selected your NSM, write a precise definition document. Include: the exact formula for calculating it, the data sources used, how frequently it's measured (daily, weekly, monthly), any segments or filters applied, and boundary conditions (e.g., 'we count a project as completed only if at least two team members contributed'). This definition prevents future debates about whether the metric went up or down. Circulate it to engineering, data, and product teams for feedback on feasibility.

> **Pro tip:** Include specific examples of what counts and what doesn't count. 'A weekly active project is one where at least one task was completed or one comment was added by a human user (automated actions excluded).' Edge cases will arise—define them upfront.

### Step 8: Step 8: Validate with Stakeholders and Commit

Present your recommended NSM to key stakeholders—executive team, product leads, engineering leaders—along with the evidence from your analysis. Explain why alternatives were rejected. The goal is not unanimous enthusiasm; it's informed commitment. Leadership needs to understand that the NSM is a strategic choice, not a perfect truth. Agree on a review period (typically 6-12 months) where the team commits to this metric before revisiting. This step connects directly to the [aligning teams around a North Star Metric](https://tryhamster.com/skills/aligning-teams-around-north-star-metric) skill.

> **Pro tip:** Anticipate the 'but what about revenue?' objection. Show the correlation between your NSM and revenue. Make it clear: you're not ignoring revenue, you're identifying the leading indicator that drives it.

## Best Practices

- Choose a metric that a customer would recognize as valuable—if you told a customer 'we're trying to increase X,' they should nod and say 'yes, that would make the product better for me.' This customer-resonance test eliminates most vanity metrics immediately.
- Prefer rate or ratio metrics over raw counts for your NSM when possible. 'Weekly active teams completing milestones' is better than 'total milestones completed' because it's harder to game and more reflective of broad-based value delivery rather than power-user activity.
- Score your candidate metrics independently before discussing them as a group to avoid anchoring bias. Have each team member rank the candidates privately, then reveal and discuss the differences—disagreements often surface the most important insights.
- Document the 'why not' for rejected candidates as carefully as the 'why' for your chosen NSM. When someone proposes switching to a different metric six months later (and they will), you'll have your reasoning ready.
- Your North Star Metric should be stable enough to measure over quarters but sensitive enough to respond to product changes within weeks. If it takes six months to move, your team will lose faith. If it fluctuates wildly day-to-day, you'll over-react to noise.
- Explicitly separate your North Star Metric from your company-level financial KPIs. Your NSM feeds into revenue, but it is not revenue. This distinction is what makes the North Star Framework powerful—it keeps your team focused on the value creation that drives financial outcomes rather than optimizing for short-term extraction.

## Common Mistakes

- **Choosing revenue or a revenue-adjacent metric as your North Star Metric** — Revenue is a trailing indicator—it tells you what already happened, not whether you're creating the value that will sustain growth. Teams that use revenue as their NSM tend to optimize for short-term monetization tactics (more aggressive upsells, paywalls) at the expense of long-term customer value. Instead, find the metric that predicts revenue. If your NSM goes up and revenue eventually follows, you've found the right leading indicator.
- **Picking a metric the product team cannot influence through product decisions** — This typically happens when teams choose metrics driven primarily by marketing spend or sales activity, like 'new signups' or 'total registered users.' If your product team ships a great feature and the NSM doesn't move, the metric isn't reflecting product value. Your NSM should be something a product engineer can connect to their sprint work. Test this by asking: 'If we improve onboarding, would this metric go up?' If the answer is unclear, your metric is too far from the product experience.
- **Selecting a composite index or overly complex formula as the NSM** — Some teams create weighted indices combining multiple metrics into a single score. While intellectually appealing, these metrics fail the understandability test. When you say 'our Health Score is 73,' nobody in the room intuitively knows whether that's good, bad, or what caused it to change. The cognitive overhead kills adoption. Your NSM should be explainable in one sentence to a new team member on their first day. If it requires a footnote or a spreadsheet to understand, simplify it.
- **Treating the NSM identification process as a one-person exercise** — When a single product manager identifies the NSM in isolation, even if the analysis is excellent, the rest of the organization feels no ownership over it. The NSM becomes 'that metric the PM chose' rather than 'our North Star.' The identification process should involve input from at least 3-5 people across product, engineering, data, and customer-facing teams. Different perspectives catch blind spots: engineers know what's measurable, customer success knows what drives satisfaction, and data teams know what the numbers actually show.
- **Changing the North Star Metric too frequently based on short-term results** — When the NSM doesn't show immediate improvement after a product change, some teams panic and switch metrics. But value creation is often non-linear—you might need to ship three improvements before the metric meaningfully moves. Commit to your NSM for at least 6 months. If after that period, with genuine effort, the metric doesn't correlate with customer outcomes, revisit it using the [iterating and evolving your North Star Metric](https://tryhamster.com/skills/iterating-and-evolving-north-star-metric) process. Premature switching destroys the alignment benefits the framework is designed to create.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/north-star-framework/METHOD.md) — North Star Framework

## Related Skills

- [Mapping Input Metrics That Drive Your North Star](../mapping-input-metrics-to-north-star/SKILL.md)
- [Building Dashboards to Track Your North Star and Inputs](../building-north-star-metric-dashboards/SKILL.md)
- [Running a North Star Framework Workshop with Stakeholders](../running-north-star-workshops/SKILL.md)
- [Using the North Star Metric to Prioritize Your Product Roadmap](../using-north-star-for-roadmap-prioritization/SKILL.md)
- [Iterating and Evolving Your North Star Metric Over Time](../iterating-and-evolving-north-star-metric/SKILL.md)
- [Aligning Cross-Functional Teams Around a North Star Metric](../aligning-teams-around-north-star-metric/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
