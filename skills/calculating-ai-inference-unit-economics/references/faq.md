# FAQ: Calculating AI Inference Unit Economics

## How do I calculate inference costs when I'm using multiple models in a single request chain?

Trace the full request lifecycle through your system, logging every external model or API call. Sum the token costs of each call in the chain separately—don't estimate the 'main' call and add a percentage buffer. For a typical RAG workflow that calls an embedding model, then a reranker, then a generation model, you'll have three distinct cost lines. If you have agentic workflows where the number of calls varies per request, measure the average and P95 chain depth from production logs and model both. The P95 is particularly important because a few runaway chains can dominate your monthly bill.

## How long should the initial cost model take to build from scratch?

For a product with 3-5 request types and a single API provider, expect 2-4 hours for the initial build: about 1 hour to catalog request types and pull log samples, 1 hour to measure token distributions, 30 minutes to map pricing and calculate costs, and 30-60 minutes to add fixed costs, build scenarios, and validate against actual spend. Products with self-hosted models, multiple providers, or complex agentic workflows can take a full day. The good news is that refreshes take 30-60 minutes once the structure exists—you're just updating numbers, not rebuilding the framework.

## Should I calculate inference unit economics before or after designing my pricing tiers?

Always before. Your cost-per-request is the foundation that every pricing decision rests on. Without it, you're guessing at tier boundaries, markup rates, and overage pricing. The [AI Pricing Playbook](https://tryhamster.com/methods/ai-pricing-playbook) sequences this skill first deliberately—you need the cost floor before you can decide how much to mark up, which features to bundle, or where to set tier thresholds. Think of it as measuring ingredients before writing a recipe. That said, the cost model and pricing tiers iterate together: once you design tiers, you'll want to model the expected request mix per tier and verify the economics still work.

## How do I handle inference costs for self-hosted models vs. API-based models?

For API-based models, cost-per-token is explicit in the provider's pricing. For self-hosted models, you need to calculate an effective per-token cost: take your total infrastructure cost for the inference cluster (GPU instances, networking, storage, DevOps allocation) and divide by your measured throughput in tokens per month. The key metric to measure is tokens-per-second at your production batch size and sequence lengths—not the peak throughput cited in benchmarks. Also factor in utilization: if your GPUs are only 60% utilized (common during off-peak hours), your effective per-token cost is 67% higher than the theoretical maximum. Model both the fully-utilized and actual-utilization costs so you understand your optimization opportunity.

## Why does my cost model keep drifting from actual spend month to month?

The three most common causes of model drift are: (1) request mix shift—the proportion of expensive vs. cheap request types changes as users adopt new features or change behavior, which changes your blended cost even if per-type costs are stable; (2) token consumption creep—prompts get longer as your team adds instructions, guardrails, or examples, silently increasing input tokens by 20-50% over a few months; (3) hidden retry and error costs—failed requests that consume tokens before failing aren't always captured in your model. Fix this by tracking actual per-type token distributions monthly, comparing prompt lengths against your baseline, and adding a retry rate multiplier based on your error monitoring.

## How do I account for costs that only apply at scale, like rate limiting overhead and queueing infrastructure?

Costs that emerge only at scale—queue management systems, rate limiting infrastructure, load balancing across multiple API keys or model endpoints, and burst pricing from providers—should be modeled as a step function, not a smooth curve. Below certain volume thresholds, these costs are zero. Above them, they can be significant. Build a 'scaling triggers' section in your cost model that lists each infrastructure component, the volume threshold at which it becomes necessary, and its cost. For example: 'At >500 requests/second sustained, we need a dedicated queue service ($200/month) and a second API key with separate rate limits.' Include these in your projected volume scenarios so you're not surprised when you cross a threshold.

## What target gross margin should I aim for when building machine learning pricing models?

Traditional SaaS targets 75-85% gross margins. AI-powered products typically operate at 50-70% in their first year, improving toward 65-80% as they optimize prompts, implement caching, shift to cheaper models, and scale volume to amortize fixed costs. If your cost model shows margins below 50%, investigate before launching: you likely need prompt optimization, model downgrades for simpler tasks, or caching strategies before your pricing can work. If margins are above 80%, you may be under-investing in AI quality or have room to lower prices aggressively to capture market share. The target depends on your business model—pure API products need higher margins than products where AI is one feature among many.
