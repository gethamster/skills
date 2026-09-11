# FAQ: Modeling Token Cost Pass-Through and Markup Strategy

## How do I model token cost pass-through when my product uses multiple LLM providers?

Add a provider column to your token inventory and use each provider's specific pricing for cost calculations. Calculate a weighted average cost per feature based on how traffic is distributed across providers (e.g., 70% OpenAI, 30% Anthropic). In your scenario engine, model each provider's pricing independently — a price drop from OpenAI doesn't affect your Anthropic costs. If you use a router that dynamically selects providers based on cost or quality, model the router's allocation logic as a variable and stress-test what happens when the optimal routing changes.

## What markup multiple should I target for AI features?

There's no universal number, but observed ranges are 2.5–8× on raw token cost depending on the value of the output and the non-token cost layer. Low-value, high-volume features (auto-tagging, sentiment analysis) typically sustain 2.5–4× because customers are price-sensitive and alternatives are abundant. High-value, low-volume features (document drafting, code generation, complex analysis) can sustain 5–8× because the output replaces expensive human labor. Start by calculating the markup required to hit your target gross margin, then validate against competitive benchmarks and customer willingness to pay.

## Should I model token cost pass-through before or after designing my pricing tiers?

Build the pass-through model first. Your pricing tiers are a customer-facing abstraction on top of the underlying economics, and you can't design a sustainable tier structure without knowing what each tier costs to serve. The pass-through model tells you the cost floor for each tier; the tier design (covered in [Designing Usage-Based Pricing Tiers for AI Products](https://tryhamster.com/skills/designing-usage-based-pricing-tiers)) then layers in customer value perception, competitive positioning, and packaging strategy. Doing it in reverse order means you'll design tiers that feel right commercially but may be margin-negative on your highest-usage tier.

## How do I handle token cost pass-through when I'm self-hosting open-source models instead of using API providers?

Replace per-token API pricing with your fully-loaded inference cost per token. Calculate this by summing GPU instance costs, networking, storage, model serving infrastructure (vLLM, TGI), and ops team time, then dividing by total tokens processed per month. The per-token cost will be lower than API pricing at high utilization (typically above 60–70% GPU utilization) but higher at low utilization because you're paying for idle capacity. Your model needs a utilization variable that adjusts effective per-token cost as usage scales, and your scenario engine should include a 'utilization drop' scenario showing what happens to margin if usage dips below your breakeven utilization rate.

## Why does my modeled margin keep drifting from actual margin month over month?

The three most common causes are: (1) your average tokens-per-request estimate is stale — actual usage patterns shift as customers discover new ways to use the product, typically toward higher token consumption; (2) your cache hit rate has changed but isn't reflected in the model — a product change or new user cohort can drop cache effectiveness significantly; (3) your usage mix across features has shifted — if high-cost features grow faster than low-cost features, blended cost per request increases even if individual feature costs are stable. Fix this by adding a monthly reconciliation step that compares modeled vs. actual cost per feature, identifies the top three variance drivers, and updates model inputs accordingly.

## How long should the initial token cost pass-through model take to build?

For a product with 3–5 AI features and one LLM provider, expect 2–4 hours for the initial build if you already have token usage data accessible. If you need to instrument logging to capture token counts, add 1–2 days for instrumentation and a week of data collection before you can build a reliable model. The scenario engine adds another 1–2 hours. Quarterly updates should take 30–60 minutes once the model structure is stable. The biggest time sink on the first build is usually getting accurate token usage data — most teams don't log input and output tokens separately at the feature level until they need this model.

## How do I account for prompt engineering improvements that reduce token usage over time?

Add a 'prompt efficiency' variable to each feature in your model, starting at 1.0 (baseline). As your prompt engineering team optimizes prompts — reducing system prompt length, improving few-shot examples, or implementing chain-of-thought compression — update this multiplier downward (e.g., 0.85 after a 15% token reduction). Track this variable over time to quantify the ROI of prompt engineering investment. In your scenario engine, include an 'optimization roadmap' scenario that models planned efficiency improvements and their cumulative margin impact. This also helps justify prompt engineering headcount to finance — you can show exactly how much margin each optimization wave produces.
