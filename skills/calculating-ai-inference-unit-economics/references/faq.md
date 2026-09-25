# FAQ: Calculating AI Inference Unit Economics

## How do I cost a request that calls several models?

Trace one user action through your logs and list every call it makes: embeddings, rerankers, the main generation, guardrail checks and any agent steps. Price each call separately at its own model's rates and sum them. For agent workflows where the number of calls varies, record the median and an upper percentile of calls per action. The upper case matters because long chains can dominate the monthly bill.

## Should I do this before or after designing tiers?

Before. Tier limits, overage rates and margin floors are all calculated from cost per value unit. Without it, a tier is a guess about your own margin. You can sketch tiers in parallel, but do not publish them until the cost table exists and has been checked against an invoice.

## How do self-hosted models change the calculation?

With an API, cost follows tokens. With self-hosted models, cost follows utilization, because you pay for GPUs whether or not they are busy. Divide the monthly hardware or rental cost by the requests actually served, and show that number at current and target volume. Include the engineering time needed to run the serving stack, which API pricing already covers.

## Why does my model drift from the invoice each month?

Usually because the mix changed. Customers adopt heavier features, paste longer inputs or run more agent tasks, and a blended cost hides that. Other causes are retries, background jobs, a model or tokenizer change, or a vendor price change. Reconcile monthly by request type and treat any unexplained gap as a missing cost to find.

## What should I do with costs that are hard to allocate?

Allocate them with a written rule rather than leaving them out. Prompt maintenance time, evaluation runs and observability can be split by request volume or by feature. The exact rule matters less than using it consistently and showing it to finance. Costs left out of the model tend to reappear later as a margin surprise.
