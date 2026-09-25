# FAQ: Setting Rate Limits and Overage Pricing for AI

## How do I set limits without usage data?

Start from cost and capacity. Set volume caps from the margin floor and velocity limits from your vendor headroom, then place both generously and mark them provisional. Review them after the first months of real traffic, and tell customers in advance that limits may be adjusted.

## Should I set limits before or after designing tiers?

After. Tier design decides included usage and price, and the limit policy turns those into caps and overage rules. Velocity limits can be set earlier, since they depend on capacity rather than price.

## Should limits count tokens or requests?

Count whatever the customer is billed for, usually a value unit such as documents or conversations. Tokens make sense for developer products where customers already think in tokens. Internally, you may still enforce a token ceiling per request to stop unusually long inputs from breaking the cost model.

## How do I handle customers who say limits are too tight?

Check the data first. If many ordinary customers hit the limit, it is in the wrong place and should move. If only a few heavy accounts hit it, offer them a higher tier, a committed contract, or paid extra usage rather than raising the limit for everyone.

## Why is overage revenue falling even though usage is growing?

Customers may be upgrading, which is the intended effect, or the included usage may be too generous. Check where customers sit relative to their caps. If most are far below, the tiers include too much; if customers are upgrading, overage is doing its job.
