# Examples: Modeling Token Cost Pass-Through and Markup Strategy

## Example: B2B SaaS with AI Document Summarization (Series A, 200 Customers)

**Scenario:**

A document management SaaS with 200 paying customers ($500/month per customer) has added an AI summarization feature that processes uploaded documents. The feature uses GPT-4o with an average of 4,000 input tokens and 400 output tokens per request. Customers make an average of 150 requests/month, but the top 10% of customers average 800 requests/month. Current gross margin across the business is 72%, and the board wants AI features to sustain at least 60% margin.

**Walkthrough:**

The team builds the token inventory: one feature, GPT-4o, 4,000 input / 400 output average, 12,000 input / 1,200 output at P95. At GPT-4o pricing ($2.50/1M input, $10/1M output), the average request costs $0.014 in tokens. Adding $0.002 for monitoring, logging, and RAG embedding costs brings the total variable cost to $0.016 per request. Fixed AI infrastructure (one ML engineer at $15k/month plus tooling at $2k/month) divided by 30,000 total monthly requests gives $0.00057 per request fixed allocation — rounding to $0.001. Fully loaded cost: $0.017 per request. At 60% target margin: customer price = $0.017 / 0.40 = $0.043 per request, a 2.5× markup. For the average customer at 150 requests/month, this is $6.45/month — easily absorbed in a $500 subscription. For the top-10% customer at 800 requests, it's $34.40/month. The team decides to include 200 AI requests in the base subscription and charge $0.04 per additional request. The scenario model shows that if GPT-4o prices drop 50%, the per-request cost falls to $0.009 and margin jumps from 60% to 78% at current pricing — the team plans to increase the included allocation from 200 to 350 requests per month after two quarters of sustained lower pricing, effectively passing through savings as increased usage allowance rather than a price cut.

## Example: AI Writing Assistant API (Seed Stage, Usage-Based Pricing)

**Scenario:**

A startup sells an AI writing API to developers. The product supports three tiers of quality: Fast (GPT-4o-mini), Standard (GPT-4o), and Premium (Claude 3.5 Sonnet). Average token usage is 300 input / 1,500 output for all tiers. The company has 50 API customers, burns $80k/month, and needs to reach profitability within 12 months. Current pricing is a flat $0.02 per API call across all tiers.

**Walkthrough:**

The model immediately reveals the problem: flat pricing across tiers ignores massive cost differences. GPT-4o-mini costs $0.000045 input + $0.0009 output = $0.00095 per request. GPT-4o costs $0.00075 + $0.015 = $0.01575. Claude 3.5 Sonnet costs $0.0009 + $0.0225 = $0.0234. At $0.02 per call, Fast tier has 95% margin, Standard has −21% margin (losing money on every call), and Premium has −17% margin. Usage data shows 60% of calls go to Standard and Premium — the company is losing money on the majority of its requests. The fix: tier-specific pricing. At 65% target margin: Fast = $0.003/call (rounded from $0.0027), Standard = $0.045/call, Premium = $0.067/call. The team runs competitive benchmarks and finds these prices are 20% below comparable APIs, validating the model. The scenario engine shows that even a 40% drop in Claude pricing only reduces Premium per-call cost to $0.014, keeping margin above 75% at the new pricing. The breakeven calculation shows the company needs 2.1M monthly API calls at the new blended rate to cover $80k monthly burn — currently at 800k calls, so they need 2.6× growth, which the 12-month forecast supports. The team implements the new tiered pricing with a 60-day grandfather period for existing customers.

## Example: Enterprise Customer Support Platform (Growth Stage, 2,000 Customers)

**Scenario:**

An enterprise support platform with 2,000 customers on per-seat pricing ($50–$200/seat/month) has embedded AI across five features: ticket auto-routing (low token), response drafting (high token), sentiment analysis (medium token), knowledge base search (medium token with RAG), and conversation summarization (high token). The platform processes 5M AI requests/month across all features. Engineering wants to switch from GPT-4o to a mix of models (GPT-4o-mini for routing and sentiment, GPT-4o for drafting and summarization, an embedding model for search). The CFO needs to understand margin impact before approving.

**Walkthrough:**

The team builds a five-row token inventory with current (all GPT-4o) and proposed (mixed model) costs. Current state: routing costs $0.003/request (low tokens), drafting $0.032/request (high output), sentiment $0.008/request, KB search $0.015/request (including embedding), summarization $0.022/request. Blended average across 5M requests at current usage mix: $0.018/request, total monthly token cost: $90,000. Proposed mixed-model state: routing on GPT-4o-mini drops to $0.0004/request, sentiment to $0.001/request. Drafting and summarization stay on GPT-4o. New blended average: $0.011/request, total monthly token cost: $55,000 — a 39% reduction. With 2,000 customers averaging 2.5 seats at $120/seat (midpoint), monthly revenue is $600,000. Current AI cost ratio: $90k / $600k = 15% of revenue. Proposed: $55k / $600k = 9.2% of revenue. The model also flags a risk: if the model switch degrades quality on routing and sentiment, support ticket escalations increase, which drives more human agent time — a cost not captured in the token model. The team adds a quality-adjusted scenario that models a 10% escalation rate increase, adding $12k/month in agent costs, netting the savings to $23k/month instead of $35k. The CFO approves the switch with a 30-day quality monitoring period and an automatic rollback trigger if escalation rate increases more than 5%.

## Example: AI Tutoring Platform (Pre-Revenue, Projecting for Investor Deck)

**Scenario:**

An edtech startup building an AI tutoring platform needs to project unit economics for a seed round pitch. The product hasn't launched but has 500 beta users. Each tutoring session averages 15 back-and-forth exchanges, each exchange uses approximately 800 input tokens (student question + conversation history) and 600 output tokens (tutor response). The team plans to use Claude 3.5 Sonnet. They're projecting 10,000 paying users at $29/month within 18 months.

**Walkthrough:**

The model starts with per-session cost. Each session = 15 exchanges × (800 input + 600 output tokens) = 12,000 input + 9,000 output tokens per session. At Claude 3.5 Sonnet pricing ($3/1M input, $15/1M output): input cost = $0.036, output cost = $0.135, total = $0.171 per session. Beta data shows users average 12 sessions/month, so monthly AI cost per user = $2.05. At $29/month subscription, AI cost is 7.1% of revenue — well within healthy margins. But the model flags two risks. First, the input token count grows with conversation history: by exchange 15, the context window contains all previous exchanges, so the actual input token count is not 800 × 15 = 12,000 but closer to 800 + 1,600 + 2,400 + ... = approximately 60,000 input tokens total for the session. Recalculated: input cost = $0.18, output cost = $0.135, total = $0.315 per session, monthly cost = $3.78 per user (13% of revenue). Second, power users (top 10% in beta) average 35 sessions/month, pushing their monthly cost to $11.03 — 38% of the $29 subscription. The team adds a session limit of 20/month on the base plan with a $49/month unlimited plan. The scenario model shows that at projected 10,000 users with 70% on base and 30% on unlimited, blended margin is 72% at current Anthropic pricing and improves to 81% if pricing drops 30% (which the 18-month timeline makes likely). The investor deck now shows realistic unit economics with identified risks and mitigation strategies.
