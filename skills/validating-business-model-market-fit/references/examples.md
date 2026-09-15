# Examples: Validating Business Model-Market Fit

## Example: SaaS Project Management Tool Discovering an ARPU-Channel Mismatch

**Scenario:**

A project management SaaS targets teams of 5-15 at SMBs, charging $8/user/month. Product-market fit is strong with a 60 NPS. The company relies on content marketing and self-serve signup for acquisition. However, growth plateaus at $3M ARR. CAC is $180, average deal size is $960/year (10 users × $8 × 12), and churn is 5% monthly, yielding an LTV of roughly $1,440 at 75% gross margin. LTV:CAC is 8:1—looks great on paper.

**Walkthrough:**

Running the model market fit validation reveals the problem is hidden in Layer 3. The 5% monthly churn means only 54% of customers survive to month 12. The team digs into cohort data and finds that customers acquired through content marketing churn at 7%/month, while referral customers churn at 2%/month. The content-acquired cohort has an LTV of $864—barely 4.8:1 on a $180 CAC, and the payback period is 15 months while most of those customers churn before month 12.

Willingness-to-pay research (Layer 1) reveals the SMB market would accept $12-15/user/month, but the team's real problem is revenue model compatibility (Layer 2): these small teams frequently resize, add contractors temporarily, and resent paying for inactive seats. A significant portion of churn is actually teams downsizing seats, not leaving entirely.

The fix involves two model adjustments: raising price to $12/user/month for new customers (validated via A/B pricing test showing only a 6% conversion drop, offset by 50% ARPU increase) and introducing a 'flexible seat' billing model that charges for peak active users per month rather than provisioned seats. This reduces involuntary churn by 40% and increases net revenue retention to 105%. The improved ARPU also makes paid acquisition channels viable, unlocking the next growth phase. This is model market fit validation connecting directly to [channel-business model fit](https://tryhamster.com/skills/matching-channel-to-business-model) in the Four Fits loop.

## Example: Developer API Platform Validating Usage-Based Pricing Against Enterprise Budgeting

**Scenario:**

A developer API platform offers usage-based pricing at $0.001 per API call. Developer adoption is strong, but converting free-tier users to paid and expanding paid accounts is slower than expected. The team suspects a model market fit problem.

**Walkthrough:**

The team runs the three-layer validation. Layer 1 (willingness to pay) shows developers find the price fair. Layer 2 (revenue model compatibility) reveals the core issue: enterprise engineering teams—the highest-value segment—struggle with usage-based billing because their finance teams require predictable monthly costs for budget approval. Engineers love the product but can't get purchase orders approved because no one can forecast the monthly bill.

The team introduces committed-use pricing tiers: prepay for 1M, 5M, or 20M API calls per month at a 20-30% discount over pay-as-you-go. This gives finance teams a predictable line item while preserving the usage-aligned value metric. Within one quarter, enterprise conversion from free to paid increases by 3x, and average deal size jumps from $800/month to $3,200/month. Payback period drops from 14 months to 5 months. Model market fit is validated—the price was fine, but the billing mechanic was incompatible with how the highest-value segment purchases.
