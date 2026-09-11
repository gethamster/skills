# FAQ: Migrating from Flat Subscription to Usage-Based AI Pricing

## How long should the full migration from flat subscription pricing models to usage-based take?

Plan for 2-4 quarters of active migration work after 4-8 weeks of planning and data analysis. The timeline depends on your customer count, contract complexity, and cohort sequencing. A self-serve SMB product with 10,000 customers can migrate in 2 quarters with automated tooling. An enterprise product with 50 accounts on annual contracts may take 4 quarters because you're constrained by renewal windows. Never compress the observation periods between cohort waves—30 days minimum per wave is the floor for detecting problems before they compound.

## Should I migrate to usage-based pricing before or after redesigning my pricing tiers?

Design the tiers first, then plan the migration. You can't build a migration plan without knowing the destination pricing structure—every calculation in the migration (customer segmentation, included-usage baselines, grandfathering terms, projected revenue impact) depends on the new tier design. Complete [designing usage-based pricing tiers](https://tryhamster.com/skills/designing-usage-based-pricing-tiers) and [choosing your AI pricing model](https://tryhamster.com/skills/choosing-ai-pricing-models) before starting this skill. However, be prepared to adjust the tier design based on migration-specific learnings—shadow billing data or new-customer cohort results may reveal that your tier boundaries need shifting.

## What's an acceptable churn rate during a pricing migration?

Target cumulative logo churn directly attributable to the pricing change of under 5%, with net revenue retention above 95%. Some churn is actually healthy—dormant accounts and deeply unprofitable customers leaving during a migration can improve your overall unit economics. The key distinction is between involuntary churn (customers who leave because they can't afford the new pricing) and voluntary churn (customers who leave because they weren't getting value). If exit surveys show most churned customers citing price as the primary reason and they were active users, your transition protections are insufficient. If most cite low usage or switching to competitors, the migration may have simply accelerated pre-existing churn.

## How do I handle enterprise customers on multi-year contracts mid-term?

Don't break existing contracts. For multi-year enterprise deals, introduce the usage-based structure as an amendment or addendum at the next renewal or QBR, not as a mid-contract change. You can introduce usage metering and reporting mid-contract—frame it as 'visibility into your AI consumption'—without changing the billing. This creates a shadow billing period that runs for the remainder of the contract term, giving both sides real data to negotiate the renewal on usage-based terms. If an enterprise customer's usage makes them significantly margin-negative and renewal is more than 12 months away, negotiate a voluntary early renewal with an incentive (e.g., a modest discount on the new usage-based rate or an extended included-usage allowance).

## Why does my revenue forecast keep drifting after migrating to usage-based subscription pricing models?

Usage-based revenue is inherently more variable than flat subscription revenue, but if your forecasts consistently miss by more than 10-15%, the issue is usually one of three things: insufficient historical data feeding the forecast model (you need at least 6 months of metered data to capture seasonal patterns), failure to account for usage growth trends (most active accounts grow usage 3-8% per quarter, which compounds), or not segmenting the forecast by customer cohort (enterprise accounts have different usage volatility than SMB accounts). Build separate forecast models by segment and include committed-revenue floors (base commitments) as the stable layer with usage-variable revenue as a probabilistic layer on top. Review and recalibrate monthly for the first year.

## Can I migrate only my AI features to usage-based pricing while keeping the rest of the platform on flat subscription?

Yes, and this is often the best approach for platform products where AI is one feature set among many. Structure it as a base platform fee (flat subscription for core features) plus an AI consumption add-on (usage-based for AI features). This isolates the migration risk to the AI portion while preserving the predictability of the platform revenue. Customers understand the rationale intuitively: 'The platform costs the same to serve everyone, but AI features have variable costs that scale with your usage.' The key implementation detail is making the AI consumption add-on visible as a separate line item on the invoice so customers can see exactly what drives any variability in their bill.

## How do I handle customers who game the system by keeping usage artificially low to stay on a cheaper tier?

First, verify it's actually gaming and not legitimate low usage—many teams overestimate this risk. If real gaming exists (e.g., customers batching work to stay under limits or splitting usage across multiple accounts), address it structurally rather than punitively. Set tier minimums based on team size or connected resources (e.g., 'Teams tier requires minimum 3 seats'), implement per-seat plus per-usage pricing that makes account splitting uneconomical, and use quarterly true-ups where customers who consistently use 80%+ of their tier allowance are recommended to upgrade. Avoid punitive enforcement—it damages trust. Most customers will naturally tier up as the value of the AI features becomes embedded in their workflows.
