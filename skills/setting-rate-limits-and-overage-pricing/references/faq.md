# FAQ: Setting Rate Limits and Overage Pricing for AI APIs

## How do I set rate limits for an AI API when I don't have usage data yet?

If you are pre-launch, use beta or design-partner data and multiply consumption by 3-5x to approximate production behavior. If you have no data at all, start with generous limits (3-5x what you think is reasonable) and commit to tightening them after 30-60 days of real traffic. It is far easier to lower a generous limit with advance notice than to raise a tight limit after customers have already been blocked. Announce limits as 'introductory' in your docs so customers expect adjustments.

## Should I set rate limits before or after designing my pricing tiers?

Design your pricing tiers first using the [Designing Usage-Based Pricing Tiers](https://tryhamster.com/skills/designing-usage-based-pricing-tiers) skill, then layer rate limits on top. Tiers define the value proposition and price point; rate limits enforce the boundaries. If you design limits first, you risk building tiers around infrastructure constraints rather than customer value. That said, the two exercises inform each other — if your cost analysis reveals that a tier's included usage is unprofitable at the planned price, you need to adjust the tier price or the cap simultaneously.

## How do I handle customers who complain that rate limits are too restrictive?

First, check whether the complaint comes from a customer in the top 5-10% of consumption — if so, they are exactly the customer your limits are designed to upsell. Point them to the next tier and show the math proving it is cheaper than overages. If the complaint comes from a customer well within the expected distribution, your caps may be genuinely too tight — review your simulation data. In either case, never relax limits for a single customer on a self-serve plan; instead, offer a one-month courtesy credit and an upgrade path. Custom limits belong exclusively in enterprise contracts.

## What is the right overage rate multiplier relative to the base per-unit price?

A 1.2-1.5x multiplier over the current tier's effective per-unit rate is the standard range. Below 1.2x, the overage is so close to the base rate that customers have no incentive to upgrade. Above 2x, customers feel punished and churn rather than pay. The sweet spot depends on your tier spacing: if the jump from Tier N to Tier N+1 is a 2x price increase, a 1.5x overage multiplier creates a clean crossover point where upgrading becomes cheaper at about 30% over the cap.

## Should I use token-based limits or request-based limits for an LLM-powered API?

Use request-based limits as the customer-facing metric and track token consumption internally for cost management. Most customers understand 'you get 10,000 API calls per month' but struggle with '2 million tokens per month' because token counts are opaque and vary per request. If token variance per request is extreme in your product (e.g., 100 tokens for a summary vs. 10,000 for a long document), consider normalizing to 'standard request units' where one unit equals a defined token budget (e.g., 1 unit = 1,000 tokens), and larger requests consume proportionally more units.

## How often should I revisit and adjust my rate-limit policy?

Review quarterly at minimum, triggered by any of these events: model cost changes (which happen frequently in AI), significant shifts in your customer usage distribution, a new tier launch, or a spike in limit-related support tickets. Each review should re-run the simulation from Step 9 against the most recent 30-60 days of data. AI inference costs are dropping 30-50% annually, so a policy set in Q1 may be unnecessarily restrictive by Q3 — and customers notice if competitors are offering more generous allowances.

## Why does my overage revenue keep trending toward zero even though usage is growing?

This usually means your upgrade incentives are working as designed — customers who hit overage zones are upgrading to higher tiers, which is actually the ideal outcome since upgraded customers have higher LTV and lower churn. Verify by checking whether total revenue per customer is increasing even as overage revenue decreases. If total revenue is flat, the real problem may be that customers are self-throttling their usage to avoid overages rather than upgrading, which indicates your notification copy needs a stronger value proposition for the upgrade path or your tier spacing is too wide.
