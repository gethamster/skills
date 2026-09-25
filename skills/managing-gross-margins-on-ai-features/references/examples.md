# Examples: Managing Gross Margins on AI-Powered Features

## Document Analysis Startup Finds Its Heavy Accounts

**Scenario:**

Illustrative scenario: a seed-stage company sells AI document analysis on flat monthly plans. Company-level margin looks acceptable, but the model invoice is growing faster than revenue.

**Walkthrough:**

The team ties every metered request to a customer and ranks accounts by cost-to-revenue ratio. A small group of accounts turns out to be processing very long documents many times a day, and several cost more than they pay. The team first adds caching for repeated document context and routes short classification steps to a smaller model, which recovers part of the gap without customers noticing. For the remaining heavy accounts, account owners propose a higher tier with a larger document allowance. The dashboard now shows margin by customer, with the floor drawn in.

## Support Agent Margin Drops After a Feature Launch

**Scenario:**

Illustrative scenario: a mid-market support platform launches a new agent feature that looks up order history and drafts refunds. Within weeks, margin on the top plan falls toward the floor.

**Walkthrough:**

The margin dashboard shows that tokens per conversation rose sharply after launch, because the agent makes several tool calls and carries long histories. The weekly review assigns the product owner to cut context: summarize older turns, cache tool definitions and cap the number of lookups per conversation. Evaluations confirm resolution quality holds. Margin recovers most of the way. The quarterly review then moves the agent feature's heaviest workflow to an add-on, since it serves a narrower set of customers.

## Developer Tool With a Runaway Job

**Scenario:**

Illustrative scenario: a small developer tools company offers AI code review. One night a customer's misconfigured pipeline sends the same large repository for review in a loop.

**Walkthrough:**

The provider-side spend limit and the per-customer daily cap stop the loop before it produces a large bill. An alert reaches the on-call engineer with the customer and feature attached. The next morning the team contacts the customer, fixes the pipeline configuration together, and adds deduplication so identical review requests within a short window reuse the previous result. The incident becomes a backlog item to add per-repository rate limits.
