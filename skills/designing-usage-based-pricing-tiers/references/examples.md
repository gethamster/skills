# Examples: Designing Usage-Based Pricing Tiers for AI Products

## Writing Assistant for Small Agencies

**Scenario:**

Illustrative scenario: a writing assistant sells to freelancers and small agencies. It currently has one flat plan. Usage data shows three groups: freelancers who draft a handful of pieces a week, agencies that draft daily, and a few content shops that run the tool all day.

**Walkthrough:**

The team uses drafts generated as the value metric, since customers already think in drafts. It plots monthly drafts per account and sees clear gaps between the three groups. It sets three paid tiers with boundaries in those gaps and included drafts just above each group's usual month. The top tier fails the margin check at full use, so the team lowers its included drafts and adds a published overage rate that makes upgrading to an enterprise plan cheaper for the heaviest shops. Team features such as shared style guides go to the middle tier; single sign-on and admin controls go to enterprise.

## Document Processing API

**Scenario:**

Illustrative scenario: a document processing API bills developers per page. Most customers send small, steady volumes, but a few send large monthly batches. Developers asked for committed pricing so they can budget.

**Walkthrough:**

The team keeps pages as the unit and turns the usage distribution into three committed tiers with included pages and a declining per-page overage. Each tier is tested at full use against the margin floor. Because batch customers can send work asynchronously, the team offers a cheaper batch rate that reflects its own lower cost for non-urgent processing. Every tier gets a dashboard showing pages used and a threshold email, so customers see an approaching limit before the invoice.

## Support Copilot Priced by Seat and Usage

**Scenario:**

Illustrative scenario: a support copilot drafts replies for human agents. Buyers are support leaders who budget per agent seat, but some teams use the copilot on every ticket while others use it occasionally.

**Walkthrough:**

The team keeps a per-seat price, because that is how the buyer budgets, and adds a pooled allowance of AI drafts per seat shared across the team. Pooling means light users offset heavy ones within the same customer. The margin check is done at the pooled maximum, not per seat. Teams that exceed the pool pay a published rate per extra draft or move to a higher tier with a larger pool. The specification notes that the seat price covers the human workflow features and the pool covers the AI cost.
