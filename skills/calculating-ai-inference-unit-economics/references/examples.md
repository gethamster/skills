# Examples: Calculating AI Inference Unit Economics

## Example: B2B SaaS with RAG-Powered Document Q&A

**Scenario:**

A 15-person startup sells a document intelligence platform to legal teams. Users upload contracts and ask questions. The product uses OpenAI GPT-4o for generation, a Pinecone vector database for retrieval, and OpenAI's embedding model for query and document embedding. Monthly volume: ~200,000 requests. The team currently has no cost model and just watches the monthly OpenAI invoice grow.

**Walkthrough:**

The team catalogs three request types: simple factual Q&A (60% of volume, ~800 input tokens including context, ~150 output tokens), complex analytical questions (30% of volume, ~3,200 input tokens with more retrieved chunks, ~600 output tokens), and document summarization (10% of volume, ~8,000 input tokens for long documents, ~1,200 output tokens). They pull 300 production requests per type and confirm these medians. At GPT-4o pricing of $2.50/1M input tokens and $10.00/1M output tokens, simple Q&A costs $0.0035/request, complex Q&A costs $0.014/request, and summarization costs $0.032/request. Adding Pinecone query costs ($0.08/query for their plan amortized) and embedding costs ($0.00002/query), orchestration adds ~$0.0001-$0.0003 per request. Fixed costs: Pinecone hosting at $70/month, monitoring at $200/month, and a 20% allocation of one ML engineer's time for prompt maintenance ($2,000/month). At 200K requests, fixed allocation is $0.0114/request. The blended weighted average is $0.0098/request, but the per-type costs range from $0.015 (simple) to $0.043 (summarization). At their current pricing of $500/seat/month with average usage of 5,000 requests per seat, they're earning $0.10/request—healthy margins across all types. But they identify that if complex and summarization requests grow to 60% of mix (which usage trends suggest), the blended cost rises 40%. They decide to implement per-request-type tracking to watch the mix shift and prepare tier adjustments.

## Example: Solo Developer Building an AI Writing Assistant

**Scenario:**

A solo developer is launching an AI writing assistant targeting freelance copywriters. The product uses Anthropic Claude 3.5 Sonnet via API for content generation and editing. No RAG, no vector database—just direct model calls with a system prompt and user input. Projected volume: 50,000 requests/month initially. Budget is tight; the developer needs to ensure they don't lose money on a $20/month subscription price.

**Walkthrough:**

There are two request types: short-form editing (70% of volume—user pastes a paragraph, model rewrites it, ~400 input tokens, ~350 output tokens) and long-form generation (30%—user provides a brief, model writes 500+ words, ~300 input tokens, ~800 output tokens). At Claude 3.5 Sonnet pricing of $3/1M input and $15/1M output tokens, short-form costs $0.0065/request and long-form costs $0.013/request. The developer implements prompt caching for the system prompt (~800 tokens, always identical), achieving a 92% cache hit rate, which cuts input costs by ~40% on cached requests. After caching, short-form drops to $0.0054 and long-form to $0.011. Fixed costs are minimal: $0 for infrastructure (serverless deployment on Vercel), $29/month for error monitoring, and $0 for the developer's own time (they're not counting labor as COGS yet). At 50K requests/month, fixed allocation is $0.00058/request—negligible. The weighted blended cost is $0.0068/request. With 50K requests/month split across 100 users (500 requests/user), each user's COGS is ~$3.40/month against $20/month revenue—an 83% gross margin. The developer validates by checking last month's Anthropic invoice: $310 actual vs. $340 modeled (within 9%). They're comfortable with their pricing but build a scenario for what happens if users average 1,000 requests/month: COGS rises to $6.80/user, still 66% margin. The model gives them confidence to launch.

## Example: Enterprise Platform with Self-Hosted Models and API Fallback

**Scenario:**

A 200-person company runs a customer support automation platform. They self-host Llama 3 70B on AWS GPU instances for routine classification and response drafting, and fall back to GPT-4o via API for complex escalations. Monthly volume: 2 million requests. Four NVIDIA A100 GPU instances run 24/7 for the self-hosted model.

**Walkthrough:**

The team identifies four request types: ticket classification (50% of volume, self-hosted Llama, ~200 input/~10 output tokens), routine response drafting (30%, self-hosted Llama, ~1,500 input/~400 output tokens), complex response generation (15%, GPT-4o API, ~3,000 input/~800 output tokens), and sentiment analysis (5%, self-hosted Llama, ~300 input/~5 output tokens). For self-hosted Llama, they calculate the cost differently: 4× A100 instances at $3.67/hour each = $10,732/month total GPU cost. They measure throughput at 850 tokens/second aggregate across all instances for their workload. Monthly token capacity: 850 × 3,600 × 24 × 30 = ~2.2 billion tokens. At 1.7M self-hosted requests consuming ~1.8B tokens total, their utilization is 82%. Effective cost: $10,732 / 1.8B tokens = $0.00000596/token—roughly 400x cheaper per token than GPT-4o input pricing. Self-hosted classification costs $0.0000013/request, routine drafting $0.0000113/request. But the 15% of requests hitting GPT-4o (300K/month) cost $0.0155/request—1,000x more per request than self-hosted. GPT-4o requests represent 15% of volume but 89% of variable model costs. Fixed costs include GPU instances ($10,732), ML ops engineer allocation ($8,000), monitoring ($500), and model evaluation pipeline ($1,200). Total fixed: $20,432/month, or $0.0102/request at 2M volume. The key insight from the model: optimizing the GPT-4o fallback rate from 15% to 10% would save $7,750/month in variable costs alone. The team prioritizes improving their routing classifier to keep more requests on the self-hosted model, and sets their machine learning pricing models to charge a premium for features that trigger GPT-4o escalation.

## Example: Consumer AI App with Freemium Model

**Scenario:**

A consumer startup offers an AI-powered meal planning app. Free users get 5 meal plans/week; paid users ($9.99/month) get unlimited plans plus grocery list optimization. The product uses GPT-4o-mini for meal plans and GPT-4o for the premium grocery optimization feature. 500,000 MAU, 15,000 paid users. Volume: ~3M free-tier requests and ~800K paid-tier requests per month.

**Walkthrough:**

Request types: basic meal plan generation (free tier, GPT-4o-mini, ~500 input/~300 output tokens), premium meal plan with dietary optimization (paid tier, GPT-4o-mini, ~900 input/~500 output tokens), and grocery list optimization (paid only, GPT-4o, ~1,200 input/~400 output tokens). GPT-4o-mini at $0.15/1M input and $0.60/1M output: basic meal plan costs $0.000255/request, premium meal plan costs $0.000435/request. GPT-4o grocery optimization costs $0.007/request. Free tier COGS: 3M × $0.000255 = $765/month, or $0.00153/user/month. Paid tier COGS: 600K premium plans × $0.000435 + 200K grocery optimizations × $0.007 = $261 + $1,400 = $1,661/month, or $0.111/user/month. Fixed costs: $2,000/month infrastructure + $3,000 ML ops allocation = $5,000/month. At 3.8M total requests, that's $0.0013/request. Paid user fully-loaded COGS: $0.111 + $0.33 (fixed allocation weighted by paid usage share) = ~$0.44/user/month against $9.99 revenue—95.6% gross margin. The grocery optimization feature is 84% of paid tier variable costs despite being only 25% of paid requests. The team realizes they could offer an intermediate tier without grocery optimization at $4.99/month with 97%+ margins, capturing users who want more meal plans but don't need grocery lists. The cost model directly informed their machine learning pricing models and tier design.
