# Examples: Handling Abstention and Uncertainty

## Support ticket routing with a cheap fallback

**Scenario:**

Illustrative scenario: a support team uses a decision model to assign incoming tickets to one of eight queues, with a few thousand tickets a day and misroutes costing a few minutes of agent time each.

**Walkthrough:**

The team logs two weeks of decisions in shadow mode with the queue an agent eventually handled each ticket in as the outcome. Grouping by confidence shows the high buckets roughly match their stated accuracy, while the middle range is noticeably overconfident. Because a misroute is cheap and reversible, they set a relatively low act threshold and send the middle band to a triage agent. Below a floor, tickets go to a general queue as the safe default instead of triage, which protects the triage agent's time.

A weekly audit of a small sample of auto-routed tickets keeps the error estimate current.

## Refund approvals with per-type thresholds

**Scenario:**

Illustrative scenario: an e-commerce company lets a model approve or deny refund requests, where small refunds are low risk and large ones involve real money and fraud exposure.

**Walkthrough:**

They split the decision into two types by order value, because the cost of a wrong approval differs by an order of magnitude. Each type gets its own logged outcomes and its own mapping. Small refunds automate above a moderate threshold since a wrong approval costs little. Large refunds use a much higher threshold, and any denial is always reviewed regardless of confidence because a wrong denial damages a customer relationship.

Reviewers record their verdict when closing each item, which feeds the next recalculation.

## Pausing automation after a model update

**Scenario:**

Illustrative scenario: a content platform auto-hides posts the model flags as spam above a threshold, then upgrades to a new model version.

**Walkthrough:**

Their policy treats a version change as a threshold reset, so for the first week every hide decision above a raised interim cutoff is sampled heavily for audit. The audit shows the new version is more confident overall, with its top bucket less accurate than stated. The team keeps the higher cutoff, which sends more posts to moderators for a while. Once enough outcomes accumulate, they rebuild the mapping and lower the threshold to where observed accuracy supports it.

The changelog records both moves and the data behind them.
