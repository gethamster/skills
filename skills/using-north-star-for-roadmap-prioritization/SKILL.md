---
name: using-north-star-for-roadmap-prioritization
description: "This skill teaches you how to evaluate and rank every initiative on your product manager roadmap by scoring its expected impact on your North Star Metric and input metrics, replacing opinion-driven prioritization with a repeatable, data-informed process."
metadata:
  homepage: https://tryhamster.com
  method: north-star-framework
---

# Using the North Star Metric to Prioritize Your Product Manager Roadmap

> This skill teaches you how to evaluate and rank every initiative on your product manager roadmap by scoring its expected impact on your North Star Metric and input metrics, replacing opinion-driven prioritization with a repeatable, data-informed process.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for initial scoring of a full roadmap |
| Outcome | You produce a stack-ranked product roadmap where every initiative is scored and justified by its expected contribution to the North Star Metric, enabling faster alignment with stakeholders and more confident resource allocation decisions. |
| Prerequisites | A defined North Star Metric for your product (see: Identifying Your Product's North Star Metric), Mapped input metrics that drive the North Star (see: Mapping Input Metrics That Drive Your North Star), An existing backlog or list of candidate roadmap initiatives, Basic familiarity with prioritization frameworks like RICE or ICE, Access to product analytics data for baseline metric values |
| Part of | [North Star Framework](../../methods/north-star-framework/METHOD.md) |

## Overview

Most product teams struggle with prioritization not because they lack ideas, but because they lack a consistent lens for evaluating them. The North Star Metric provides exactly that lens. When you've identified the single metric that captures the core value your product delivers to customers—and you've mapped the input metrics that drive it—you have everything you need to transform roadmap prioritization from a political exercise into an analytical one.

This skill sits at the operational heart of the North Star Framework. While sibling skills focus on defining the metric, mapping inputs, and aligning teams, this skill is where the framework earns its keep in day-to-day product management. Every product manager roadmap decision—whether to build a new onboarding flow, invest in performance improvements, or launch a new feature—can be evaluated through the same question: how much will this move our North Star Metric and its inputs?

The technique works by creating a scoring model that maps each candidate initiative against your input metrics, estimates the magnitude and confidence of impact, and accounts for implementation effort. The result isn't a perfect prediction—it's a structured conversation tool that makes trade-offs explicit and defensible. Teams that adopt this approach report faster prioritization cycles, fewer re-litigated decisions, and stronger alignment between product, engineering, and leadership because everyone is debating the same numbers instead of competing narratives.

## How It Works

The core mental model is straightforward: your North Star Metric is a function of its input metrics, and every initiative on your roadmap will affect one or more of those inputs. If your North Star is Weekly Active Learners on an education platform, your input metrics might include new user activation rate, lesson completion rate, and return visit frequency. A proposed initiative like "gamified streaks" primarily impacts return visit frequency, while "simplified onboarding" primarily impacts new user activation.

The technique works by making these connections explicit and quantifiable. For each initiative, you estimate which input metrics it will affect, how much it could move each one, and how confident you are in that estimate. You then weight these scores by the relative importance of each input metric to the North Star—because not all inputs contribute equally. An input metric that's currently the bottleneck to growth deserves a higher weight than one that's already performing well.

This creates a common currency for comparison. A flashy feature request and a mundane infrastructure improvement can be placed side-by-side on the same scale. The scoring model also naturally surfaces important trade-offs: an initiative might score highly on impact but poorly on confidence (it's a big bet), or it might reliably improve a metric that isn't currently the binding constraint.

Critically, the model is not meant to produce a "correct" ranking automatically. It's a structured framework for making assumptions visible. When two initiatives score similarly, the interesting question becomes: what would need to be true for one to beat the other? This turns prioritization meetings from debates about opinions into debates about assumptions—which is a much more productive conversation for any product manager roadmap review.

## Step-by-Step Guide

### Step 1: Step 1: List Your Input Metrics and Assign Strategic Weights

Start by listing all the input metrics you've mapped to your North Star Metric. Then assign each a strategic weight reflecting its current importance to moving the North Star. A metric that's currently a bottleneck or has the most room for improvement should receive a higher weight. Distribute 100 points across your input metrics—this forces prioritization and makes the relative importance explicit.

> **Pro tip:** Review recent trends for each input metric before weighting. If lesson completion rate has been flat for three quarters while activation rate is climbing, completion is likely the constraining factor and deserves more weight.

### Step 2: Step 2: Catalog All Candidate Roadmap Initiatives

Gather every initiative currently being considered for the roadmap into a single list—feature requests, technical debt items, experiments, partnerships, and infrastructure improvements. Include initiatives from all sources: customer feedback, sales requests, engineering proposals, and leadership priorities. Each item should have a brief description of its scope and intended outcome. Don't filter yet; the scoring model will do the filtering for you.

> **Pro tip:** Include items you think are obvious winners and obvious losers. The scoring sometimes surprises you, and it builds credibility for the process when teams see their pet projects evaluated fairly.

### Step 3: Step 3: Score Each Initiative's Impact on Each Input Metric

For every initiative, estimate its impact on each input metric using a consistent scale (e.g., 0 = no impact, 1 = marginal, 2 = moderate, 3 = significant, 5 = transformative). Be specific about the mechanism: how exactly will this initiative move this metric? If you can't articulate the causal pathway, the score should be low. Have the product manager and at least one domain expert score independently before comparing, to avoid groupthink.

> **Pro tip:** Score independently first, then discuss discrepancies. If you score 'gamified streaks' as a 4 on retention but engineering scores it as a 2, the gap reveals different assumptions about implementation scope that need resolution before committing.

### Step 4: Step 4: Estimate Confidence Levels for Each Impact Score

Assign a confidence percentage to each impact score reflecting how certain you are in the estimate. A score backed by A/B test data from a similar feature might warrant 80-90% confidence. A score based on intuition about a novel feature might only warrant 20-30%. Confidence accounts for uncertainty without throwing out valuable but speculative ideas entirely. Multiply each impact score by its confidence to get a confidence-adjusted impact score.

> **Pro tip:** Low confidence doesn't mean 'don't build it'—it means 'validate first.' Use low-confidence, high-impact items to identify where you need experiments or prototypes before committing full resources.

### Step 5: Step 5: Calculate Weighted Impact Scores

For each initiative, multiply its confidence-adjusted impact score for each input metric by that metric's strategic weight, then sum the results. This gives you a single composite impact score per initiative. The formula is: Total Impact = Σ (Impact Score × Confidence % × Metric Weight) for each input metric. Build this in a spreadsheet where columns are input metrics and rows are initiatives so the math is transparent and adjustable.

> **Pro tip:** Share the spreadsheet with stakeholders before the prioritization meeting. When people can see the formula and adjust assumptions themselves, they're far more likely to trust the output.

### Step 6: Step 6: Factor in Effort and Calculate an Efficiency Ratio

Estimate the implementation effort for each initiative using a consistent unit—t-shirt sizes (S/M/L/XL mapped to numbers), story points, or person-weeks. Then divide the total weighted impact score by the effort estimate to get an impact-per-effort ratio. This surfaces the high-leverage opportunities: initiatives that move the North Star significantly relative to their cost. Present both the raw impact ranking and the efficiency ranking—they tell different stories.

> **Pro tip:** Don't let effort dominate the final ranking. A high-effort, high-impact initiative might be the most important thing on the roadmap even if its efficiency ratio is lower. Use efficiency to identify quick wins, not to avoid strategic bets.

### Step 7: Step 7: Stack-Rank and Identify Your Top Tier

Sort initiatives by the efficiency ratio to create your initial stack ranking. Then review the top tier (typically your next quarter's worth of capacity) holistically. Check for dependencies, sequencing constraints, and portfolio balance—you likely need a mix of quick wins, medium bets, and one or two strategic investments. Adjust the ranking based on these practical constraints while documenting why you deviated from the pure score.

> **Pro tip:** Aim for roughly 70% of your capacity on high-confidence, high-efficiency items and 30% on high-impact, lower-confidence bets. This gives you reliable progress while still swinging at transformative opportunities.

### Step 8: Step 8: Validate with Stakeholders and Lock the Roadmap

Present the scored and ranked product manager roadmap to stakeholders, walking through the scoring model, the top-tier rationale, and key trade-offs. The goal isn't to re-litigate every score but to confirm strategic alignment and surface any information the model missed. If a stakeholder disagrees with a ranking, ask them to identify which input score or weight they'd change—this keeps the conversation structured. After alignment, lock the roadmap for the planning period and set a review cadence.

> **Pro tip:** Create a one-page summary showing: the top 5 initiatives, their expected impact on each input metric, and the total expected North Star movement. This becomes your product manager roadmap communication artifact for leadership and cross-functional teams.

## Best Practices

- Re-weight input metrics every quarter based on fresh data. The bottleneck shifts as you improve metrics—last quarter's constraint may not be this quarter's constraint, and your roadmap priorities should shift accordingly.
- Score confidence independently before sharing with the group to avoid anchoring bias. Have each scorer submit their impact and confidence ratings in writing before any group discussion begins.
- Keep the scoring model visible and editable by all stakeholders. Transparency builds trust—when engineering, design, and leadership can all see and challenge the assumptions, the resulting product manager roadmap has genuine buy-in.
- Track actual metric movement after shipping and compare it to your predicted impact scores. This calibration loop is the single most valuable practice for improving future prioritization accuracy over time.
- Separate the scoring session from the decision session. Score initiatives in one meeting, let the numbers settle, then make ranking decisions in a follow-up. This prevents real-time score manipulation to justify predetermined conclusions.
- Include a 'do nothing' baseline for each metric to make impact estimates relative rather than absolute. Knowing that lesson completion rate will naturally improve 2% from seasonality means an initiative only gets credit for impact above that baseline.

## Common Mistakes

- **Scoring impact without specifying the causal mechanism** — Teams often assign high impact scores based on gut feeling ('this will definitely improve retention') without articulating how the initiative actually moves the input metric. Require a one-sentence hypothesis for every non-zero impact score: 'Gamified streaks will increase return visit frequency by creating a loss-aversion trigger for users with 3+ day streaks.' If you can't write the hypothesis, score it zero and flag it for user research.
- **Treating all input metrics as equally important** — Skipping the strategic weighting step produces misleading rankings because it assumes every input metric contributes equally to the North Star. In reality, one metric is almost always the binding constraint. A product manager roadmap that evenly distributes effort across all inputs will underperform one that concentrates on the bottleneck. Use data on metric trends and sensitivity analysis to identify which input is the lever with the most room to move.
- **Using the scoring model to justify a decision already made** — This happens when a leadership-favored initiative gets inflated scores to place it at the top. The tell-tale sign is scores that get adjusted upward during group discussion after someone influential expresses a preference. Prevent this by collecting scores independently before discussion, and by tracking the delta between individual scores and final group scores—large deltas in one direction signal social pressure, not genuine reassessment.
- **Never updating the model after shipping initiatives** — The scoring model is only useful if it improves over time, and it can only improve if you compare predictions to actual outcomes. After shipping an initiative, measure its actual impact on the relevant input metrics and compare to your estimate. Were you consistently overconfident? Did certain initiative types always underperform? Without this feedback loop, your scoring accuracy plateaus and the process becomes performative rather than informative.
- **Prioritizing only by efficiency ratio and starving strategic bets** — Small, high-efficiency items (quick wins) will always dominate a pure efficiency ranking. If you only optimize for efficiency, you'll ship incremental improvements forever and miss transformative opportunities. Use efficiency ranking to fill 60-70% of capacity with reliable progress, but explicitly reserve capacity for high-impact, lower-efficiency strategic initiatives that could step-change the North Star.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/north-star-framework/METHOD.md) — North Star Framework

## Related Skills

- [Identifying Your Product's North Star Metric](../identifying-your-north-star-metric/SKILL.md)
- [Mapping Input Metrics That Drive Your North Star](../mapping-input-metrics-to-north-star/SKILL.md)
- [Building Dashboards to Track Your North Star and Inputs](../building-north-star-metric-dashboards/SKILL.md)
- [Running a North Star Framework Workshop with Stakeholders](../running-north-star-workshops/SKILL.md)
- [Iterating and Evolving Your North Star Metric Over Time](../iterating-and-evolving-north-star-metric/SKILL.md)
- [Aligning Cross-Functional Teams Around a North Star Metric](../aligning-teams-around-north-star-metric/SKILL.md)
