---
name: identifying-underserved-outcome-opportunities
description: "This skill teaches you how to use opportunity scoring, combining importance and satisfaction ratings, to quantify which desired outcomes are most underserved by current solutions and represent the strongest targets for product innovation."
metadata:
  method: jobs-to-be-done-jtbd-framework
---

# Identifying Underserved Outcome Opportunities

> This skill teaches you how to use opportunity scoring, combining importance and satisfaction ratings, to quantify which desired outcomes are most underserved by current solutions and represent the strongest targets for product innovation.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 3-5 hours (including survey design, data collection, and analysis) |
| Outcome | You produce a ranked opportunity landscape showing exactly which customer outcomes are underserved, overserved, or appropriately served, giving your team a quantified, evidence-based foundation for deciding where to invest next. |
| Prerequisites | Familiarity with writing desired outcome statements (the input to this skill), A defined core functional job with at least 15-20 desired outcome statements, Access to a survey tool and a representative customer sample (minimum 50-100 respondents), Basic spreadsheet skills for scoring calculations and sorting |
| Part of | [Jobs-to-be-Done (JTBD) Framework](../../methods/jobs-to-be-done-jtbd-framework/METHOD.md) |

## Overview

Identifying underserved outcome opportunities is the analytical engine of the [Jobs-to-be-Done (JTBD) Framework](https://tryhamster.com/methods/jobs-to-be-done-jtbd-framework). Once you have a set of desired outcome statements and a job map, you face a critical question: which of the dozens or even hundreds of outcomes should you prioritize? Intuition, executive opinion, and competitor mimicry are the usual answers. This skill replaces all three with a quantified scoring method that reveals precisely where customers are struggling most with current solutions. The result is an opportunity landscape, a ranked list of outcomes sorted by the gap between how important each outcome is to the customer and how satisfied they are with how well it is currently achieved.

The technique was formalized by Tony Ulwick as the Opportunity Algorithm, and it works because it captures the asymmetry between importance and satisfaction. An outcome that is highly important but poorly satisfied is an underserved opportunity, the kind of gap that customers will pay to close. An outcome that is well satisfied but not very important is overserved, meaning resources spent improving it are wasted. The scoring formula penalizes overserved outcomes and amplifies underserved ones, producing a single number that ranks every outcome on a common scale. This makes trade-off conversations concrete rather than political.

The concrete artifact you produce is an opportunity score table: a spreadsheet or document listing every desired outcome, its average importance rating, its average satisfaction rating, its calculated opportunity score, and its classification (underserved, appropriately served, or overserved). Teams that master this skill stop arguing about what to build next and start arguing about how to build it, which is a far more productive disagreement. Anyone learning how to become a product manager will find this skill indispensable, because it replaces subjective feature debates with customer-grounded evidence. The output feeds directly into [segmenting customers by unmet needs](https://tryhamster.com/skills/segmenting-customers-by-unmet-needs) and into [applying JTBD insights to product strategy and roadmaps](https://tryhamster.com/skills/applying-jtbd-to-product-strategy), making it a foundational step in the JTBD workflow.

## How It Works

The core insight behind opportunity scoring is that importance and satisfaction are independent dimensions, and the relationship between them tells you where value lives. A customer can rate an outcome as extremely important and extremely well-satisfied, meaning there is no opportunity because the job is getting done. Alternatively, a customer can rate an outcome as extremely important and poorly satisfied, meaning there is a large, painful gap that no current solution closes well. The opportunity score captures this gap in a single number.

The standard formula is: Opportunity Score = Importance + max(Importance - Satisfaction, 0). On a 1-to-5 rating scale, this produces scores from 2 to 10. On a 1-to-10 scale, scores range from 2 to 20. The formula has a built-in floor: if satisfaction exceeds importance, the second term is clamped to zero. This means an overserved outcome can never score higher than its importance rating alone, which prevents well-served trivial outcomes from polluting the top of the list.

The formula works because it double-weights importance when satisfaction lags behind. Think of it this way: if an outcome is important (score 9) but poorly satisfied (score 3), the gap is 6, and the total opportunity score is 9 + 6 = 15. That is a screaming signal. If another outcome is moderately important (score 6) and moderately satisfied (score 5), the gap is only 1, and the total is 6 + 1 = 7. The first outcome is more than twice as attractive as the second, even though both have gaps. The doubling of importance ensures that big-gap, high-importance outcomes dominate the ranking, which matches economic reality: customers pay more and switch faster for outcomes that matter a lot and are poorly served.

A common threshold for classifying outcomes: scores above 10 (on a 20-point scale) or above 5 (on a 10-point scale) are underserved. Scores between 6 and 10 (20-point) are appropriately served. Scores below 6 are overserved. These thresholds are guidelines, not absolutes. In highly competitive markets, even a score of 9 can represent a meaningful opportunity if no competitor has cracked it.

The method assumes that averages across your survey population represent the market. This is often wrong. Different customer segments may rate the same outcome very differently. A power user might rate "minimize the time it takes to configure the report" as critically important (9/10) and poorly satisfied (3/10), while a casual user might rate it low-importance (4/10) and well-satisfied (7/10). Averaging across both groups produces a misleading middle score. This is why opportunity scoring is often followed by [segmenting customers by unmet needs](https://tryhamster.com/skills/segmenting-customers-by-unmet-needs), where you cluster respondents by their outcome ratings to find segments with distinctly different opportunity profiles.

Within the [Jobs-to-be-Done (JTBD) Framework](https://tryhamster.com/methods/jobs-to-be-done-jtbd-framework), opportunity scoring sits between outcome statement creation and strategic application. It is the step that transforms qualitative customer language into quantitative investment guidance.

## Step-by-Step Guide

### Step 1: Step 1: Assemble Your Desired Outcome Statements

Gather the complete set of desired outcome statements that describe what the customer is trying to achieve at each step of their core functional job. These should come from the [writing desired outcome statements](https://tryhamster.com/skills/writing-desired-outcome-statements) process and be structured in the standard format: direction of improvement + unit of measure + object of control. Review each statement for clarity and independence. Remove any statements that overlap significantly or that describe solution features rather than customer outcomes.

Aim for 15 to 100 statements, depending on job complexity. If you have fewer than 15, your job map may be underspecified. If you have more than 100, look for opportunities to consolidate without losing resolution.

> **Pro tip:** Read each statement aloud and ask: 'Could a customer rate this on importance and satisfaction without needing to ask clarifying questions?' If not, rewrite it. Ambiguous statements produce noisy data that undermines the entire analysis.

### Step 2: Step 2: Design the Opportunity Survey

Create a survey that presents each desired outcome statement twice: once asking the respondent to rate how important the outcome is when they perform the job, and once asking how satisfied they are with how well their current solution achieves the outcome. , 1 = Not at all important, 5 = Extremely important). Place the importance question first for each outcome, then the satisfaction question, so respondents anchor on what matters before evaluating performance. Group outcomes by job step to help respondents maintain context.

Include a brief description of the job at the top so respondents are answering from the right frame of reference. Keep the survey under 20 minutes total to avoid fatigue-driven abandonment.

> **Pro tip:** A 1-to-5 scale is easier for respondents and produces less noise than a 1-to-10 scale, especially with smaller samples. The 1-to-10 scale gives more granularity but requires more respondents (150+) to produce stable averages. For most teams, 1-to-5 with 75-100 respondents is the sweet spot.

### Step 3: Step 3: Recruit and Survey a Representative Customer Sample

Distribute the survey to customers who have recently performed the job. 'Recently' matters because distant memories inflate satisfaction (people forget the pain) and compress importance (the job feels less urgent when it is not in front of you). Target a minimum of 50 respondents for directional insights and 100+ for statistically stable averages. Recruit from your actual customer base or from the broader market if you are exploring a new category.

Screen for people who have performed the core functional job within the last 30 to 90 days. Avoid surveying only your most loyal or most vocal customers, because they represent a biased slice of the market.

> **Pro tip:** Offering a small incentive ($10-25 gift card) typically doubles response rates without biasing answers. If you are surveying your own user base, avoid framing the survey as being about your product. Frame it as being about the job itself. This prevents respondents from conflating their satisfaction with your product with their satisfaction with the outcome in general.

### Step 4: Step 4: Calculate Opportunity Scores

For each desired outcome statement, calculate the average importance rating and the average satisfaction rating across all respondents. Then apply the opportunity algorithm: Opportunity Score = Importance + max(Importance - Satisfaction, 0). If you used a 1-to-5 scale, multiply both importance and satisfaction averages by 2 before applying the formula to normalize to a 2-to-20 range, which makes the classification thresholds easier to apply. Record all three values (importance, satisfaction, opportunity score) in a spreadsheet.

Sort the entire list by opportunity score in descending order. This sorted list is your opportunity landscape.

> **Pro tip:** Use the max() function (or an IF statement in your spreadsheet) to clamp negative gaps to zero. Without this, an overserved outcome where satisfaction is 9 and importance is 4 would produce a score of 4 + (4-9) = -1, which is meaningless. The clamped formula produces 4 + 0 = 4, correctly flagging it as low opportunity.

### Step 5: Step 5: Classify Each Outcome

Apply classification thresholds to segment your outcomes into three buckets. 9 are appropriately served (moderate opportunity), and outcomes scoring below 6 are overserved (low opportunity or potential cost reduction target). Mark each outcome in your spreadsheet with its classification. Count the number of outcomes in each bucket.

A healthy innovation opportunity exists when you have at least 5 to 10 outcomes in the underserved bucket. If nearly everything is appropriately served, you may be in a mature market where differentiation requires targeting specific segments rather than the aggregate population.

> **Pro tip:** If you find that all your outcomes cluster between 8 and 11 with no clear separation, your survey sample may be too homogeneous. Consider whether you are surveying a single customer type. Breaking the data into segments often reveals hidden pockets of underservedness that the average obscures.

### Step 6: Step 6: Visualize the Opportunity Landscape

Create a scatter plot with importance on the Y-axis and satisfaction on the X-axis. Each point represents one desired outcome. Draw a diagonal line from the upper-left corner (high importance, low satisfaction) to the lower-right corner (low importance, high satisfaction). Outcomes above and to the left of the line are underserved.

Outcomes below and to the right are overserved. Label each point with a short identifier or number that maps back to the full outcome statement. This visualization makes it immediately obvious where the clusters of opportunity are and where resources are being wasted on well-served outcomes. Share this chart with stakeholders.

It communicates more in one glance than a sorted spreadsheet.

> **Pro tip:** Color-code the dots using your classification buckets (red for underserved, yellow for appropriately served, green for overserved). Add a text callout for the top 5 underserved outcomes directly on the chart so the visual tells the story without requiring a legend lookup.

### Step 7: Step 7: Identify Opportunity Clusters and Themes

Look at your top-scoring underserved outcomes and ask whether they cluster around specific steps in the job map. If the top 6 outcomes all relate to the 'monitoring' step of the job, that tells you something different than if they are scattered evenly across all steps. Clustered opportunities suggest a specific phase of the job is failing, which may point toward a focused product solution. Scattered opportunities suggest the entire job is underserved, which may require a broader platform play.

Also check whether the top outcomes share a common theme, such as time, accuracy, cost, or risk. Thematic clusters help frame the value proposition for whatever you build.

> **Pro tip:** Map your top 10 outcomes back onto the job map from [creating job maps](https://tryhamster.com/skills/creating-job-maps). Physically highlight the job steps that contain underserved outcomes. This creates a visual narrative about which parts of the customer's process are broken, which is much more compelling in a stakeholder presentation than a list of scores.

### Step 8: Step 8: Validate Findings with Qualitative Context

Quantitative scores reveal where opportunities exist. They do not explain why those outcomes are underserved or what is currently failing. Before making strategic decisions, go back to your interview transcripts or conduct 5 to 8 follow-up interviews focused on the top underserved outcomes. Ask customers to walk through the last time they tried to achieve that outcome, what went wrong, what workarounds they use, and how painful the gap is in terms of time or money.

This qualitative layer adds the narrative and context that makes the data actionable. It also serves as a sanity check. Occasionally, a high opportunity score is an artifact of confusing survey language rather than a real unmet need.

> **Pro tip:** During follow-up interviews, read the exact outcome statement to the customer and ask them to confirm or deny that it is a real pain point. If they say 'I'm not sure what that means,' the statement itself was poorly written, and the survey data for that outcome may be unreliable.

### Step 9: Step 9: Prioritize and Hand Off to Strategy

Produce the final deliverable: a prioritized opportunity table listing each outcome, its opportunity score, its classification, the job step it belongs to, and a brief qualitative note explaining the nature of the gap. Highlight the top 5 to 10 outcomes as the primary innovation targets. Add a short summary at the top explaining the overall opportunity landscape: how many outcomes are underserved, whether they cluster or scatter, and what the dominant themes are. Hand this artifact to the team responsible for [applying JTBD insights to product strategy](https://tryhamster.com/skills/applying-jtbd-to-product-strategy).

This table becomes the foundation for ideation, roadmap planning, and feature prioritization.

> **Pro tip:** Include the overserved outcomes in your deliverable, not just the underserved ones. Overserved outcomes are candidates for cost reduction, simplification, or removal. Pointing out that you are currently over-investing in well-served areas is often the most persuasive argument for reallocating resources toward underserved opportunities.

## Best Practices

- Survey respondents who have performed the job recently (within 30-90 days). Memory decay inflates satisfaction and compresses importance, making everything look appropriately served. Stale data produces a flat, uninformative opportunity landscape.
- Keep importance and satisfaction questions paired together for each outcome rather than asking all importance questions first and then all satisfaction questions. Pairing maintains context and produces more accurate ratings. Separating them forces respondents to rate satisfaction for outcomes they rated important 15 minutes ago, which degrades accuracy.
- Score and classify before discussing results with the team. If stakeholders see raw data before it is scored, they will cherry-pick outcomes that confirm their existing roadmap. Present the scored, sorted landscape as a fait accompli, and let the conversation focus on what to do about it rather than whether the data is right.
- Always include at least 3-5 outcomes you suspect are overserved. This creates a balanced survey and gives you ammunition for resource reallocation arguments. If you only include outcomes you think are underserved, you lose the contrast that makes the analysis persuasive.
- Run the analysis at the segment level, not just the aggregate level. Averaging importance and satisfaction across all customers can mask segment-specific opportunities where a particular group is deeply underserved. Use demographic or behavioral data from the survey to slice the results. See [segmenting customers by unmet needs](https://tryhamster.com/skills/segmenting-customers-by-unmet-needs) for detailed guidance.
- Update the opportunity landscape at least annually, or after major market shifts (new competitor launch, regulatory change, technology disruption). Opportunity scores are not permanent. Competitor improvements shift satisfaction ratings, and changing customer expectations shift importance ratings.
- Use a consistent scale across all studies in your organization. Mixing 1-to-5 and 1-to-10 scales across different product lines makes cross-portfolio comparison impossible. Standardize on one scale and document it so future teams can compare against baseline data.
- Treat outcomes scoring between 10 and 12 (on a 20-point scale) as a gray zone requiring qualitative validation. These are not slam-dunk opportunities, but they are not non-opportunities either. A brief round of follow-up interviews can determine whether they represent real gaps or statistical noise.

## Common Mistakes

- **Surveying satisfaction with your own product rather than with the customer's current best solution for the job** — The survey must ask how well the outcome is currently being achieved across all solutions the customer uses, not just your product. If you ask about your product specifically, you measure product satisfaction, not market opportunity. A customer might be dissatisfied with your product but perfectly well-served by a competitor, meaning there is no market opportunity, just a product quality issue. Frame the satisfaction question as: 'When you perform this job using whatever tools or methods you currently use, how satisfied are you with how well this outcome is achieved?' This captures the market gap, not the product gap.
- **Treating all outcomes with positive gaps as equally actionable opportunities** — Not all underserved outcomes are worth pursuing. An outcome can have a high opportunity score but be technically infeasible to improve, outside your strategic scope, or addressable only with a solution that has no viable business model. After scoring, apply a feasibility filter. Ask: Can we realistically improve satisfaction on this outcome?

Is improving it aligned with our product vision? Would customers pay for the improvement? The opportunity score tells you where demand exists. It does not tell you where you should compete.

Use it as an input to strategic judgment, not a substitute for it.
- **Using too few respondents and treating noisy averages as precise signals** — 2 is statistically meaningless. Teams that treat these small differences as real end up chasing phantom opportunities. With fewer than 50 respondents, only look at the top and bottom quartiles of your opportunity scores and ignore small rank differences in the middle. With 50-100 respondents, you can trust the top 10-15 rankings.

With 150+ respondents, you can start making fine-grained rank comparisons. If you cannot reach 50 respondents, supplement the quantitative scores with qualitative interview data and treat the scores as directional, not definitive.
- **Forgetting to clamp the gap term to zero for overserved outcomes** — If you use a raw formula of Importance + (Importance - Satisfaction) without the max() function, overserved outcomes produce negative gaps that artificially depress their scores below their importance level. An outcome with importance 3 and satisfaction 8 would score 3 + (3-8) = -2, which is nonsensical. The correct formula uses max(Importance - Satisfaction, 0), so the same outcome scores 3 + 0 = 3. This is a spreadsheet error that is easy to make and difficult to notice unless you specifically check whether any opportunity scores are below their corresponding importance ratings.

If you find scores below the minimum possible importance value, your formula is wrong.
- **Writing outcome statements that embed solutions, then wondering why the opportunity scores are confusing** — If an outcome statement reads 'Minimize the time it takes to configure the dashboard,' the satisfaction rating is anchored to dashboard-based solutions. Customers who do not use dashboards will rate satisfaction as irrelevant or low, inflating the opportunity score for reasons unrelated to a genuine unmet need. The outcome should be solution-agnostic: 'Minimize the time it takes to see the current status of the project.' Solution-embedded outcomes produce artificially high opportunity scores for customers who do not use that solution and artificially low scores for customers who do. If your top-scoring outcomes all reference specific tools or features, go back to [writing desired outcome statements](https://tryhamster.com/skills/writing-desired-outcome-statements) and rewrite them.
- **Presenting opportunity scores without the underlying importance and satisfaction values** — Stakeholders who see only the opportunity score cannot distinguish between a high-importance, low-satisfaction outcome (strong opportunity) and a moderate-importance, very-low-satisfaction outcome (weaker opportunity, same score). Always present all three numbers side by side. Two outcomes can have the same opportunity score of 14, but one has importance 9 / satisfaction 4 and the other has importance 7 / satisfaction 0. The first is a better strategic bet because the baseline importance is higher, meaning more customers care about it.

The three-column view preserves this distinction.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/jobs-to-be-done-jtbd-framework/METHOD.md) — Jobs-to-be-Done (JTBD) Framework

## Related Skills

- [Conducting JTBD Customer Interviews](../conducting-jtbd-customer-interviews/SKILL.md)
- [Applying JTBD Insights to Product Strategy and Roadmaps](../applying-jtbd-to-product-strategy/SKILL.md)
- [Defining the Customer's Core Functional Job](../defining-core-functional-jobs/SKILL.md)
- [Writing Desired Outcome Statements](../writing-desired-outcome-statements/SKILL.md)
- [Creating Job Maps to Visualize Customer Processes](../creating-job-maps/SKILL.md)
- [Segmenting Customers by Unmet Needs](../segmenting-customers-by-unmet-needs/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
