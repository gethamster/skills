# Examples: Migrating From Flat to Usage-Based AI Pricing

## Mid-Market Document Platform

**Scenario:**

Illustrative scenario: a document intelligence platform sells flat per-seat plans to mid-market legal and finance teams. After adding AI review, a minority of accounts drive most of the model cost, and margin on the top plan has fallen below the floor.

**Walkthrough:**

The team applies a hybrid structure, a platform fee with included documents and a published overage rate, to each account's recent usage. Most accounts see little change, some see a lower bill, and a small heavy group sees a large increase. New customers move first. Existing accounts get a bill preview for two cycles, then migrate in waves starting with those whose bill falls. Heavy accounts get a time-boxed discount and a call from their account manager to discuss a committed contract. Annual contracts move at renewal.

## Prosumer Writing Assistant

**Scenario:**

Illustrative scenario: a writing assistant has a large base of individual subscribers on one flat monthly plan. A small share run automated workflows through it and cost many times their subscription.

**Walkthrough:**

Because the base is large and self-serve, the team relies on in-product communication rather than calls. It adds a usage meter to the app months before any change, so customers see their own consumption. It then introduces two tiers with included usage, keeping the price of the lower tier equal to the old plan so most subscribers see no change. Heavy users receive notice, a preview of their new bill, and bonus credits for the first months. The team writes the announcement to state plainly what stays unlimited and what does not.

## Developer API Moving From Flat Tiers to Metering

**Scenario:**

Illustrative scenario: a developer API sold flat monthly tiers with generous request allowances. As customers moved to longer, more complex requests, the cost per request rose and the flat tiers stopped covering it.

**Walkthrough:**

The team switches to metered pricing based on compute consumed per request rather than request count. Developers get a usage dashboard, spend caps and threshold alerts before the switch. For one billing cycle, invoices show both the old and new amounts, and only the old amount is charged. Metering errors found in that cycle are fixed before the cutover. After the switch, the team publishes a short page explaining how each request type is counted, which cuts support questions.
