# Examples: Setting Rate Limits and Overage Pricing for AI

## Document Analysis API at a Small Startup

**Scenario:**

Illustrative scenario: a five-person startup offers a document analysis API. It has one plan with no limits, and a single customer recently sent a burst of requests that pushed the startup into its model vendor's rate limit, slowing every other customer.

**Walkthrough:**

The team separates the two problems. For capacity, it sets per-customer velocity limits well above normal bursts and checks that the sum of plausible peaks fits inside its own vendor limits. For margin, it sets monthly caps on each plan equal to included usage, with overage on the paid plans and a hard cap on the free plan. Customers get alerts before the cap, and the API returns a clear error with a retry time when a velocity limit is hit. The team publishes the limits in its documentation before turning them on.

## Image Generation for Consumers and Prosumers

**Scenario:**

Illustrative scenario: an image generation app serves hobbyists on a low monthly plan and professionals on a higher one. A few accounts generate images around the clock, and some appear to be shared.

**Walkthrough:**

For the low plan, the team chooses throttling over overage: after the monthly allowance, generation continues at a slower queue priority, because hobbyists dislike surprise bills. For the professional plan, it offers overage at a published per-image rate with an opt-in spend cap. It adds a rolling weekly limit aimed at continuous automated use and announces it in advance, stating who it affects and why. Account-sharing is handled separately through session limits rather than by tightening everyone's allowance.

## Enterprise Analytics With Negotiated Limits

**Scenario:**

Illustrative scenario: an analytics platform sells AI query features to large companies on annual contracts. Procurement asks for predictable spend, while data teams want to run heavy batch jobs at quarter end.

**Walkthrough:**

The team writes limits into each contract: an annual committed volume, a published overage rate, and a monthly spend ceiling the customer controls. Velocity limits are set per workspace, so a batch job in one team does not slow another. Quarter-end batch work is routed to an asynchronous path that costs less to serve, and the contract reflects that lower cost. Admins can set budgets for each department, and alerts go to both the department lead and the account admin.
