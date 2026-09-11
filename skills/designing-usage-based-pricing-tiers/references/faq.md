# FAQ: Designing Usage-Based Pricing Tiers for AI Products

## How many tiers should I have for usage-based pricing AI products?

For self-serve products, 3–4 tiers (including a free tier) is optimal. For sales-assisted products, 4–5 tiers work well, with the top tier being 'contact us' for custom enterprise deals. Research on pricing page conversion consistently shows that more than 5 visible options increases decision paralysis and decreases conversion rates. If your customer segments genuinely require more granularity, use add-ons or configurable options within a tier rather than adding more tiers to the core structure.

## Should I design usage-based tiers before or after calculating my unit economics?

Always calculate unit economics first. Tier design depends on knowing your cost curve at various usage levels, which is the output of the [calculating AI inference unit economics](https://tryhamster.com/skills/calculating-ai-inference-unit-economics) skill. Without a cost model, you're drawing tier boundaries blind—you won't know whether a tier is profitable until after customers are on it. The sequence in the [AI Pricing Playbook](https://tryhamster.com/methods/ai-pricing-playbook) is intentional: unit economics first, then tier design, then overage and rate limit policies.

## How do I handle customers whose usage fluctuates dramatically month to month?

High usage variance is one of the hardest challenges in usage-based pricing AI tier design. Three approaches work: (1) Offer committed-use tiers with rollover credits—customers buy a block of usage monthly and unused credits roll over for 1–2 months, smoothing their costs. (2) Offer a pay-as-you-go option alongside your tiers, priced at 1.3–1.5x the best tier rate, for customers who refuse to commit. (3) Bill based on the trailing 3-month average usage rather than monthly peaks. Approach 1 is most common for mid-market, approach 3 is most common for enterprise contracts.

## Why does my tier structure keep resulting in customers bunching at the lowest paid tier?

This usually means one of two things: your lowest tier's included usage is too generous (customers don't need to upgrade), or the price jump to the next tier is too steep relative to the incremental value. Check the 80th percentile of usage in your lowest tier—if it's well below the tier limit, you've set the boundary too high. Also check whether the feature gates on higher tiers are things your customers actually need. If the only difference between tiers is usage volume, customers will optimize to stay low. Add feature differentiation that aligns with the natural sophistication growth of your customer personas.

## How do I set pricing for a usage metric when I have no historical usage data?

Pre-launch tier design is hypothesis-driven. Start with competitor benchmarking using the [benchmarking AI product pricing](https://tryhamster.com/skills/benchmarking-ai-product-pricing) skill to establish market reference points. Then interview 15–20 prospective customers about their expected usage volumes and willingness to pay—use the Van Westendorp price sensitivity method. Discount their stated usage estimates by 30–40% (prospects overestimate). Design your initial tiers with these estimates but plan to revisit at 60 and 90 days post-launch. Set tier boundaries slightly more generous than your model suggests to avoid early churn, then tighten once you have real data.

## Should I offer annual pricing discounts on usage-based tiers?

Yes, but structure them carefully. For the usage component, annual commitment should lock in a lower per-unit rate (typically 15–20% discount) in exchange for a committed minimum monthly usage volume. If the customer uses less than the committed amount, they still pay the committed floor. If they exceed it, the overage rate applies. This protects your revenue predictability while giving the customer a lower effective rate. For the platform/feature component, standard annual discounts (2 months free on annual billing) work fine. The key is separating the commitment discount from the usage mechanics—customers commit to a tier and a minimum volume, not to a specific total dollar amount.

## How often should I revisit and adjust my usage-based pricing tiers?

Review your tier metrics quarterly and make structural changes no more than once per year for existing customers (frequent pricing changes erode trust). Quarterly reviews should track: usage distribution shifts, gross margin per tier, upgrade/downgrade rates, overage frequency, and competitive pricing changes. If a quarterly review shows a metric drifting more than 15% from your design assumptions, flag it for potential adjustment. When you do make changes, grandfather existing customers for 90–120 days and communicate changes 60 days in advance. New customers can go on new pricing immediately. The exception is adding new tiers or add-ons—those can be launched anytime since they don't disrupt existing customers.
