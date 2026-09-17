---
name: analyzing-active-evaluation-behavior
description: "This skill teaches you how to track and interpret consumer behavior during the active evaluation phase of the McKinsey Consumer Decision Journey—specifically how people research, compare, and progressively narrow or expand their brand consideration set before buying."
metadata:
  homepage: https://tryhamster.com
  method: mckinsey-consumer-decision-journey
---

# Analyzing Active Evaluation Behavior with Customer Journey Analytics

> This skill teaches you how to track and interpret consumer behavior during the active evaluation phase of the McKinsey Consumer Decision Journey—specifically how people research, compare, and progressively narrow or expand their brand consideration set before buying.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for initial setup; ongoing monitoring |
| Outcome | You gain the ability to identify exactly where and why consumers add or drop your brand during evaluation, enabling you to intervene at the moments that actually determine purchase decisions. |
| Prerequisites | Understanding of the McKinsey Consumer Decision Journey framework, Familiarity with web analytics tools (GA4 or similar), Basic knowledge of mapping initial consideration sets, Access to brand mention or social listening tools |
| Part of | [McKinsey Consumer Decision Journey](../../methods/mckinsey-consumer-decision-journey/METHOD.md) |

## Overview

The active evaluation phase is where purchase decisions are truly won or lost. Unlike the old funnel model—where brands assumed a steady narrowing from awareness to purchase—McKinsey's research showed that consumers actively add brands during this phase just as often as they eliminate them. A consumer might start with three brands in mind, discover two more through Google searches and Reddit threads, and ultimately drop four of the five after reading reviews. Understanding this dynamic reshuffling is the core of customer journey analytics applied to the decision journey.

Analyzing active evaluation behavior means building a systematic practice of tracking which touchpoints cause consumers to include or exclude your brand. This goes beyond pageview-level analytics. It requires stitching together signals from comparison site visits, review platform engagement, social media research patterns, peer conversations, and direct brand interactions to reconstruct the evaluative arc each consumer travels.

This skill is essential because most marketing teams over-invest in awareness (top of funnel) and conversion (bottom of funnel) while neglecting the messy middle where brand preference actually forms. When you understand active evaluation behavior, you can allocate budget and content to the touchpoints that genuinely shift consideration—not just the ones that are easiest to measure.

## How It Works

Active evaluation behavior analysis works by treating the evaluation phase as a series of discrete events where a consumer's consideration set changes. Each event has a trigger (what prompted the research), a touchpoint (where the research happened), and an outcome (brand added, brand reinforced, or brand eliminated).

The conceptual model borrows from customer journey analytics by mapping these events across time and channels. Unlike linear funnel analytics that measure progression through stages, active evaluation analysis measures lateral movement—how the consideration set expands and contracts simultaneously. A consumer reading a 'best project management tools' article might add two new brands while mentally eliminating one they previously considered, all in a single session.

The mechanism relies on three data layers. The first is behavioral data: what pages, searches, and content a consumer engages with during evaluation. The second is competitive data: where your brand appears alongside competitors in comparison contexts. The third is qualitative data: what consumers say about their evaluation process in surveys, reviews, and social discussions. By triangulating these three layers, you build a picture of evaluation dynamics that no single data source can provide.

This approach aligns with the broader McKinsey Consumer Decision Journey framework by acknowledging that the path from initial consideration to purchase is non-linear and heavily influenced by consumer-driven research rather than brand-pushed messaging.

## Step-by-Step Guide

### Step 1: Step 1: Define Your Evaluation Touchpoint Inventory

Before you can analyze behavior, you need a comprehensive map of every touchpoint where active evaluation happens in your category. This includes your own properties (comparison pages, pricing pages, feature pages, case studies) and third-party properties (review sites like G2 or Capterra, comparison articles from publishers, Reddit threads, YouTube reviews, social media discussions).

Create a spreadsheet with columns for: touchpoint name, platform/channel, type (brand-owned vs. third-party), whether you can track behavior directly, and estimated influence level. For B2B SaaS, your inventory might include G2 comparison pages, Capterra reviews, competitor blog comparisons, your own pricing page, product demo videos, and industry analyst reports.

Don't limit this to digital touchpoints. If your category involves in-store evaluation, peer recommendations, or sales conversations, include those too. The goal is completeness—you'll prioritize later.

> **Pro tip:** Interview 5-10 recent customers and ask them to walk you through their evaluation process step by step. You'll discover touchpoints you never considered, like niche Slack communities or specific influencers.

### Step 2: Step 2: Instrument Evaluation-Stage Tracking

Set up analytics to capture evaluation-specific behaviors. In GA4 or your analytics tool, create event tracking for signals that indicate active evaluation rather than casual browsing. Key evaluation signals include: visiting a pricing or comparison page, viewing three or more product feature pages in a session, returning to the site after visiting a competitor's site (detectable via referral data), downloading comparison guides, and engaging with review content.

Create a custom audience segment in your analytics platform for 'active evaluators'—visitors whose behavior pattern matches evaluation rather than awareness or post-purchase activity. This typically means multi-page sessions focused on product details, pricing, and differentiation content, often with return visits over days or weeks.

For third-party touchpoints you can't directly instrument, use brand monitoring tools (Mention, Brandwatch, or even Google Alerts) to track when your brand appears in evaluative contexts—comparison articles, review discussions, 'vs' searches, and recommendation threads.

> **Pro tip:** Set up UTM parameters specifically for evaluation-stage content. Use utm_medium=evaluation or a similar convention so you can easily filter for evaluation touchpoints in your customer journey analytics reports.

### Step 3: Step 3: Map Consideration Set Dynamics

This is the core analytical step. You need to understand how your brand enters and exits consumer consideration sets. There are two complementary approaches.

Quantitative approach: Analyze search query data (via Google Search Console and paid search reports) for evaluation-intent keywords. Track queries containing 'vs,' 'alternative to,' 'compared to,' 'best [category],' and 'review.' Monitor which competitor brands appear alongside yours in these queries and how that changes over time. Use tools like Semrush or Ahrefs to track your share of voice in comparison and evaluation keywords.

Qualitative approach: Conduct win/loss interviews with recent customers and lost prospects. Ask specifically: 'Which brands did you consider? When did you add or remove each brand? What caused each addition or removal?' Document the trigger events that caused consideration set changes. Common triggers include a compelling review, a peer recommendation, a negative experience with a competitor's demo, or discovering a price discrepancy.

Combine both approaches into a consideration set flow diagram showing typical patterns: which brands consumers start with, which they add during evaluation, and which survive to the purchase decision.

> **Pro tip:** Pay special attention to brands that get added late in evaluation—these are often the ones that win. McKinsey's original research found that brands added during active evaluation have disproportionately high conversion rates.

### Step 4: Step 4: Identify Brand Addition and Elimination Triggers

With your data from Step 3, categorize the specific triggers that cause brands to be added to or eliminated from consideration sets. Create two lists: addition triggers (what causes consumers to discover and add your brand during evaluation) and elimination triggers (what causes consumers to drop your brand).

Common addition triggers include: appearing in a 'best of' article, strong G2/Capterra rating, recommendation from a peer or community, compelling comparison content that highlights unique strengths, and retargeting ads that surface at the right evaluation moment.

Common elimination triggers include: negative reviews mentioning specific pain points, pricing that's significantly above expectations, poor demo experience, missing a must-have feature discovered during comparison, slow or unhelpful sales response, and outdated content that suggests the product is stagnant.

Quantify these triggers where possible. If 40% of lost prospects mention pricing as the elimination trigger, that's a different strategic problem than if 40% mention missing a specific feature. This analysis directly informs where to invest in content, product, and experience improvements.

> **Pro tip:** Elimination triggers are often more actionable than addition triggers. Fixing a common reason people drop you can have a bigger impact than trying to get added to more consideration sets.

### Step 5: Step 5: Analyze Competitive Overlap in Evaluation Contexts

Map exactly where and how your brand co-appears with competitors during the evaluation phase. This competitive overlap analysis reveals your true competitive set (which may differ from who you think your competitors are) and shows where evaluation battles are happening.

Use customer journey analytics tools and search data to identify: which competitors appear in the same 'vs' searches as your brand, which competitors share review site categories with you, which brands consumers mention together in social discussions, and which competitors' content ranks for the same evaluation-intent keywords.

Create a competitive co-occurrence matrix showing how frequently each competitor appears alongside your brand in evaluation contexts. High co-occurrence with a specific competitor means you need differentiation content targeting that pairing specifically. Low co-occurrence with a brand you consider a competitor might mean consumers don't actually compare you—you're in different mental categories.

Audit the comparison and review content that exists for each competitive pairing. Is the existing content accurate? Is it favorable to you? Are there gaps where no comparison content exists, leaving consumers to guess?

> **Pro tip:** Check who's creating the comparison content consumers find. If a competitor controls the 'Brand A vs Your Brand' narrative by publishing their own comparison pages, you need to create balanced comparison content that consumers will trust more.

### Step 6: Step 6: Build Evaluation-Phase Intervention Points

Based on your analysis, identify the specific moments where intervention can change evaluation outcomes. An intervention point is a combination of a touchpoint, a consumer need at that touchpoint, and content or experience you can provide.

For each major evaluation touchpoint from your inventory, define: what consumers need at this point (information, reassurance, social proof, a direct comparison), what you currently provide, and what you should provide. Map these to your addition and elimination triggers.

For example, if your analysis shows that consumers who visit your pricing page and then visit a competitor's pricing page tend to eliminate you (detectable via exit page + competitor referral on return visits), the intervention might be: add a comparison pricing table directly on your pricing page, include an ROI calculator, or add testimonials from customers who evaluated competitors.

Prioritize interventions by: volume of consumers at that touchpoint × likelihood that the intervention changes the evaluation outcome × feasibility of implementation. This gives you a ranked action plan.

> **Pro tip:** Don't just create more content—improve existing evaluation touchpoints first. A better pricing page, a more honest comparison page, or faster demo booking often outperforms new blog posts.

### Step 7: Step 7: Establish Ongoing Monitoring and Iteration

Active evaluation behavior shifts as markets evolve, competitors change tactics, and consumer preferences develop. Set up recurring monitoring to keep your analysis current.

Create a monthly dashboard that tracks: evaluation-intent search volume and your share of voice, review site ratings and sentiment trends, consideration set composition from win/loss interviews (quarterly), conversion rates from evaluation-stage touchpoints, and competitive content changes in your category.

Review this dashboard monthly with both marketing and product teams. Many elimination triggers are product issues masquerading as marketing problems—a feature gap that competitors highlight in comparisons isn't solved with better ad copy.

Iterate your intervention points quarterly. Test different approaches to the same evaluation moment (e.g., A/B test comparison page formats) and retire interventions that aren't changing evaluation outcomes. Feed your findings back into the broader McKinsey Consumer Decision Journey analysis to understand how evaluation dynamics connect to the initial consideration set and moment of purchase.

> **Pro tip:** Track the time consumers spend in active evaluation. If your category's average evaluation period is shortening, it often means one competitor is making the decision easier—study what they're doing differently.

## Best Practices

- Track both additions and eliminations separately—they have different triggers and require different responses. Most teams only analyze why they won; analyzing why you were eliminated is often more valuable.
- Use win/loss interview data as the qualitative backbone and analytics as the quantitative validation. Neither source alone gives you the full picture of active evaluation behavior.
- Segment your evaluation analysis by buyer persona. A technical evaluator and an executive sponsor evaluate completely differently—different touchpoints, different triggers, different timelines.
- Monitor third-party review sites and comparison content as actively as your own analytics. For many categories, the evaluation battle is won or lost on sites you don't control.
- Connect evaluation behavior data to revenue outcomes, not just traffic metrics. A touchpoint that influences 50 high-value purchases matters more than one that drives 5,000 pageviews from casual browsers.
- Update your evaluation touchpoint inventory quarterly. New review platforms, communities, and content formats emerge constantly—if you're not tracking the latest places consumers evaluate, your analysis has blind spots.

## Common Mistakes

- **Treating evaluation as a linear narrowing process instead of a dynamic reshuffling** — The core McKinsey insight is that consumers add brands during evaluation, not just eliminate them. Your customer journey analytics must track additions and expansions of the consideration set, not just attrition. Build your tracking to capture both directions of consideration set change.
- **Only analyzing owned touchpoints and ignoring third-party evaluation contexts** — Most active evaluation happens on sites you don't own—review platforms, Reddit, comparison blogs, YouTube. Set up brand monitoring and competitive intelligence for these third-party touchpoints. If you only analyze your own website data, you're seeing a fraction of the evaluation journey.
- **Conflating awareness-stage metrics with evaluation-stage behavior** — A consumer visiting your homepage from a display ad is an awareness touchpoint. A consumer visiting your pricing page after reading a G2 comparison is an evaluation touchpoint. Separate these in your analytics by creating evaluation-specific segments based on behavioral patterns (multi-page product sessions, comparison content engagement, return visits).
- **Treating all competitor comparisons as equal threats** — Build a competitive co-occurrence matrix to understand which competitors consumers actually compare you against. Invest differentiation content and resources against high-co-occurrence competitors, not the competitors your leadership team worries about. Your perceived competitive set and your actual evaluation competitive set are often different.
- **Collecting evaluation data but not connecting it to actionable intervention points** — Every piece of evaluation analysis should answer: 'What should we change or create to influence this evaluation moment?' If your analysis produces interesting dashboards but no action items, restructure it around the intervention framework—touchpoint × consumer need × content or experience response.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/mckinsey-consumer-decision-journey/METHOD.md) — McKinsey Consumer Decision Journey

## Related Skills

- [Mapping the Initial Consideration Set](../mapping-initial-consideration-sets/SKILL.md)
- [Optimizing Moment-of-Purchase Triggers](../optimizing-moment-of-purchase-triggers/SKILL.md)
- [Building Post-Purchase Loyalty Loops](../building-post-purchase-loyalty-loops/SKILL.md)
- [Creating Circular Consumer Journey Maps](../creating-circular-journey-maps/SKILL.md)
- [Replacing Funnel Thinking with the Decision Journey](../replacing-funnel-thinking-with-cdj/SKILL.md)
- [Identifying Touchpoints Across CDJ Stages](../identifying-touchpoints-across-cdj-stages/SKILL.md)
