# FAQ: Choosing Between AI Pricing Models: Seat vs. Usage vs. Outcome

## How do I choose an AI pricing model when I don't have production usage data yet?

Run a structured estimation exercise: build 5 synthetic customer profiles (from your ideal customer research) and estimate their monthly usage patterns based on the problem frequency they face. For cost data, run 100+ representative requests through your AI pipeline and measure actual inference costs. Use these estimates to populate the Action Inventory and score the four dimensions with explicit uncertainty ranges—e.g., 'Cost Predictability: 3 (±1, pending production data).' Then commit to revisiting the scorecard within 60 days of having real customer data. The framework still works with estimates; it just requires a faster feedback loop to validate or correct initial scores.

## Should I choose my AI pricing model before or after calculating unit economics?

Choose the model first—it's a prerequisite for meaningful unit economics. Unit economics calculations require knowing the revenue structure: is revenue per-seat (fixed per user), per-usage (variable per action), or per-outcome (variable per success)? Without that structure, you can't calculate contribution margin, payback period, or LTV in a way that informs actual pricing decisions. That said, the pricing model selection itself requires rough cost data (inference cost per action), so there's a lightweight cost estimation step embedded in the scorecard process. Once you've selected the model, feed the decision into [calculating AI inference unit economics](https://tryhamster.com/skills/calculating-ai-inference-unit-economics) for the detailed analysis.

## What if my scorecard shows two models tied or within 0.5 points?

A close score between two models is a strong signal to build a hybrid that combines their strengths. Identify which dimensions each model wins on: if usage-based wins on Cost Predictability and Margin Safety, but per-seat wins on Buyer Expectations, your hybrid is likely a seat-based platform fee (satisfying buyer expectations) plus usage-based variable pricing (protecting margins). The tied score tells you the market needs both predictability AND cost alignment—a pure model won't deliver both. Design the hybrid in Step 7 using the specific dimension strengths as your guide.

## How often should I re-evaluate my AI pricing model choice?

Fully re-score the complete four-dimension scorecard every 6 months, and spot-check the two cost-related dimensions (Cost Predictability and Margin Safety) quarterly. Outside that regular cadence, trigger an immediate re-evaluation when: inference costs change by more than 30% (new model generation, provider price change, or migration to self-hosted), your usage distribution shifts materially (e.g., power users grow from 10% to 30% of your base), a major competitor changes their pricing model, or you're expanding into a new market segment with different buyer expectations. Most companies find they evolve their model once in the first 18 months and then stabilize.

## Why does my pricing model recommendation keep changing every time a stakeholder weighs in?

This usually means your dimension scores aren't grounded in data—they're grounded in opinions. When scores are based on 'I think our cost variability is moderate,' any stakeholder can argue 'I think it's low,' and the model shifts. Fix this by replacing subjective assessments with specific data: actual coefficient of variation from production cost data, actual competitive pricing pages, actual back-test revenue under each model. Data-backed scores are hard to argue with. If disagreement persists even with data, the issue is usually about dimension weights, not scores—and that's a legitimate strategic conversation about whether the company prioritizes margin protection vs. market adoption vs. value capture.

## Can I use different AI pricing models for different customer segments?

Yes, and this is increasingly common. Developer-focused products often offer usage-based pricing for self-serve individual users and seat-based or committed-use pricing for enterprise teams—same product, different models for different segments. The key requirement is that the models must be economically equivalent at scale: a customer shouldn't be able to game the system by signing up as individuals rather than a team to get cheaper pricing. Run the scorecard separately for each segment, weight Buyer Expectations heavily, and ensure the models converge at boundary cases. The operational complexity of managing multiple models is real, so limit yourself to 2-3 segment-specific models maximum.

## How do I handle pricing for AI features embedded in an existing non-AI product?

This is the most common scenario—you're adding AI capabilities to an existing per-seat SaaS product. You have three options: absorb AI costs into existing pricing (works only if AI usage is light and margins can handle it), gate AI features behind a higher tier (simple but creates a binary have/don't-have split), or add a usage-based AI component on top of existing seat pricing (most flexible but adds billing complexity). Run the scorecard specifically for the AI component, but weight Buyer Expectations at 35%+ because existing customers have strong expectations about how your product is priced. The most successful approach for established products is usually a tier upgrade that includes an AI usage allowance, with transparent overage pricing above the allowance. See [migrating from flat to usage-based pricing](https://tryhamster.com/skills/migrating-from-flat-to-usage-based-pricing) for the transition playbook.
