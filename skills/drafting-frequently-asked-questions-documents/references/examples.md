# Examples: Drafting the FAQ Section of a PR/FAQ

## An integration that depends on a partner

**Scenario:**

Illustrative scenario: a B2B analytics company has a press release for a connector that pulls deal data from a popular CRM into its dashboards. The press release promises setup in minutes.

**Walkthrough:**

The external FAQ is quick to write: price, setup, which CRM plans are supported, what happens to the data. The internal FAQ is not. Writing the dependency question, the product manager realizes the CRM vendor rate-limits its API on lower plans and could change its terms at any time. The honest answer is that the connector's promise depends on a partner who has no reason to help.

The FAQ states this as the top reason the product could fail and lists two options: a partnership conversation, or narrowing the launch to plans with higher limits. The press release is revised to promise setup in minutes only for those plans.

## A consumer feature with an unclear market

**Scenario:**

Illustrative scenario: a small team behind a meal-planning app wants to add grocery delivery. The press release reads well, and the team is excited.

**Walkthrough:**

The internal FAQ asks how many users have the problem badly enough to pay for delivery through the app. The team realizes it has no evidence: users praise the recipes, but nobody has asked for delivery. The answer is written as an open question with a plan: add a waitlist button to the shopping list screen and count sign-ups before the next review.

The economics section is also open, because delivery margins depend on a partner the team has not spoken to. The FAQ ends up recommending a no-go for now, with a clear condition for revisiting.

## An internal platform tool with an internal customer

**Scenario:**

Illustrative scenario: a platform team at a large company proposes a self-service tool for other engineering teams to create test environments. The customers are internal engineers.

**Walkthrough:**

The external FAQ is written for those engineers as customers: how to request an environment, how long it lives, who to ask for help. The internal FAQ covers what engineers use today (a ticket to the platform team and a wait), the cost of running environments, and the security review needed before engineers can create them without approval.

The failure question produces the most useful answer: teams may keep filing tickets out of habit. The FAQ proposes measuring ticket volume after launch as the sign the tool is working.
