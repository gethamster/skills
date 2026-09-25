# Examples: Mapping Product Initiatives to Business Outcomes

## A payments backlog with four reasons for one feature

**Scenario:**

Illustrative scenario: a subscription service's roadmap includes "add a second payment provider." Three stakeholders support it, each for a different reason, and the team has two outcomes this quarter: fewer failed renewals and more completed checkouts in two new countries.

**Walkthrough:**

The product manager asks each stakeholder to write the hypothesis. Finance expects lower fees, which serves neither outcome. Support expects fewer failed renewals from expired cards, which points at a different fix: card-updater reminders. The international lead expects more checkouts in the new countries, where local payment methods are common.

Only the third hypothesis maps cleanly. The item is rewritten as "offer the most common local payment method in the two new countries," linked to the checkout outcome with medium confidence based on market research. The fee question goes to finance as a separate business decision, and card-updater reminders join the renewal outcome as a new, cheaper initiative.

## Finding an outcome with no initiatives

**Scenario:**

Illustrative scenario: a team maps its backlog against three outcomes: activation, weekly engagement and expansion to larger accounts. The backlog holds a few dozen items.

**Walkthrough:**

After mapping, almost everything sits under engagement, a handful of items sit under activation, and nothing sits under expansion. Several items cannot be mapped at all; two turn out to be a security requirement and a contract commitment, which get labelled with those goals.

The empty expansion column is the main finding. The team has been told expansion is a priority but has no idea what larger accounts need. Instead of inventing features to fill the column, the product manager schedules interviews with admins at larger accounts and adds "discovery on expansion" to the roadmap as the first initiative under that outcome.

## Rating confidence to decide what to test first

**Scenario:**

Illustrative scenario: a team has four mapped initiatives under an activation outcome. Two are large builds, two are small changes, and the team can only take on part of the work this cycle.

**Walkthrough:**

The team rates each link by its evidence. One large build rests on usage data showing where new users stall, so it gets high confidence. The other large build rests on a competitor having the feature, so it gets low confidence. The small changes rest on interview findings and get medium confidence.

They commit to the high-confidence build and both small changes, and turn the low-confidence build into a quick prototype test with a handful of new users. The map records the plan and the evidence, so when the prototype results arrive the team can update the rating instead of reopening the whole debate.
