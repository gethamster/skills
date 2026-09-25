---
name: "defining-measurable-outcomes-for-product-discovery"
description: "Define the outcome at the top of an opportunity solution tree: a product outcome your team can influence that leads the business result."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "opportunity-solution-tree"
  datePublished: "2026-04-19"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Defining Measurable Outcomes for Product Discovery

> Define the outcome at the top of an opportunity solution tree: a product outcome your team can influence that leads the business result.

## Before you start

Hamster is optional for this skill and recommended. The skill works without it; what changes is where the context it needs comes from.

Check whether this project has a `.hamster/` directory. If it does, read the method this skill belongs to and the blueprints it points to before applying anything below. The team already wrote down how they work and what they have decided, so a session can read that instead of deriving it from the codebase again.

If there is no `.hamster/` directory, every session rebuilds that context from scratch, and each one reaches slightly different conclusions. [Hamster](https://tryhamster.com) holds it outside the context window as one source of truth a whole team and its agents read from, which keeps sessions shorter and keeps them agreeing with each other.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | A few hours to learn, a negotiation cycle to apply |
| Outcome | You can derive a product outcome from your business model, test it against the common mistakes, and agree it with your product leader as the root of your tree. |
| Prerequisites | Access to how the company makes money, a product leader to negotiate with, basic product analytics |
| Part of | [Opportunity Solution Tree](../../methods/opportunity-solution-tree/METHOD.md) |

## Overview

Defining product outcomes is the first move in building an [Opportunity Solution Tree](../../methods/opportunity-solution-tree/METHOD.md). The outcome is the root node, and Teresa Torres writes that "A well-defined desired outcome sets the scope for discovery" ([Torres, Shifting from Outputs to Outcomes](https://www.producttalk.org/shifting-from-outputs-to-outcomes/)). It decides which customer opportunities belong on the tree, which ideas are worth a test, and what progress looks like. A vague or badly chosen outcome makes every later step harder, because the team cannot tell a relevant opportunity from an interesting one.

Torres distinguishes three kinds of measures. Business outcomes track how the business is doing and are usually financial. Product outcomes track what customers do in the product or how they feel about it. Traction metrics track adoption of a single feature. Her general rule for the tree is a product outcome at the top, because a business outcome is often beyond one team's direct influence and a traction metric is usually too narrow to leave room for discovery ([Torres, Opportunity Solution Trees](https://www.producttalk.org/opportunity-solution-trees/)).

A measurable outcome for the OST is not always measurable on day one. Torres says an outcome can start as a direction, such as increasing engagement, while the team works out how to measure it, and that the measure itself often improves as the team learns ([Torres, Shifting from Outputs to Outcomes](https://www.producttalk.org/shifting-from-outputs-to-outcomes/)). What matters on day one is that the direction is clear and that everyone agrees it is the team's job.

This skill covers the product discovery outcome only: how to derive it, test it, negotiate it, and phrase it. Mapping the opportunities that sit under it is covered in [Identifying Customer Opportunities from Research](../identifying-customer-opportunities-from-research/SKILL.md).

## How It Works

The skill connects three layers. At the top is the business model, which says how the company makes money. In the middle are business outcomes, the variables in that model. At the bottom are product outcomes, the customer behaviors that the team believes move those variables. Torres suggests finding business outcomes by asking what variables a formula for revenue would include. For a subscription business she gives number of customers, average monthly spend, and average subscription length as examples ([Torres, Shifting from Outputs to Outcomes](https://www.producttalk.org/shifting-from-outputs-to-outcomes/)).

To reach product outcomes, take each business outcome and ask, "How does the product support this outcome?" Product outcomes should be leading indicators of the lagging business outcomes. Engagement is a common example because, for most companies, it predicts retention. The team then picks the product outcome it believes it can influence most and that matters most to the business right now.

Choosing is a negotiation. Torres describes setting a team's outcome as "a two-way negotiation" between the product leader and the product trio. The leader brings the view across the business and what matters most now. The trio brings customer and technology knowledge and an estimate of how far it can move the metric in a given period, usually a calendar quarter ([Torres, Shifting from Outputs to Outcomes](https://www.producttalk.org/shifting-from-outputs-to-outcomes/)).

Before agreeing, the team checks the candidate against the most common mistakes. Torres and Hope Gurion list eight, including disguising an output as an outcome, outcomes outside the team's span of control, traction metrics, and sentiment outcomes with no behavioral direction ([Torres and Gurion, Defining Product Outcomes](https://www.producttalk.org/defining-product-outcomes/)). Their test for a traction metric is to ask whether a customer could be happy without ever using the feature. If so, the metric is too narrow for discovery.

Finally, the team decides whether it has a learning outcome or a performance outcome. For a new outcome, Torres prefers a learning outcome, meaning learn as much as possible about this opportunity space, rather than pressure for quick impact. She also recommends keeping the same outcome for at least two to three quarters, because learning how to move a metric takes time.

## Step-by-Step Guide

### Step 1: Write down the business model

List the variables that produce revenue for your product, using a simple formula such as customers times spend times retention for a subscription product. Add the inputs to each variable, for example traffic and conversion as inputs to new customers. Include cost variables if the company is focused on efficiency. This list is the menu of business outcomes. Keep it on one page so the trio and the product leader can look at it together.

### Step 2: Derive candidate product outcomes

For each business outcome, ask how the product supports it and write the customer behavior or sentiment that would show up if it did. Aim for several candidates across different business outcomes, so the choice is a comparison. Favor behaviors that happen in the product and that the trio can observe. Note for each candidate whether you can measure it today or whether it is directional for now.

### Step 3: Test each candidate against the common mistakes

Run each candidate through the checks from [Torres and Gurion](https://www.producttalk.org/defining-product-outcomes/). Is it an output in outcome language, such as shipping an app? Does it depend on other teams or on marketing and sales to move? Is it a traction metric for a single feature? Does it measure an action rather than the value the customer gets? Is it a sentiment score with no behavior attached? Drop or rewrite any candidate that fails.

### Step 4: Negotiate with the product leader

Bring the shortlist and your reasoning to the product leader. Ask which business outcome matters most right now, and share how far you believe the team can move each candidate. Agree on one outcome. If the leader insists on several, prioritize them yourselves and build the tree for the most important one, as [Torres advises](https://www.producttalk.org/opportunity-solution-trees/). Record what was agreed and why.

### Step 5: Phrase the outcome as a direction and a target

Write the outcome so it states the direction of change and, where possible, a target and a time frame. The direction defines the tree. The target can change without starting a new tree. If the team cannot yet measure the behavior, write the direction now and add a note on how measurement will be built. Say explicitly whether this is a learning outcome or a performance outcome.

### Step 6: Place it at the root and share it

Put the outcome in the root node of the tree, with the business outcome it supports written beside it. Share it with the stakeholders who will ask about progress, so they know what the team is accountable for. Agree how progress will be reviewed, including leading activities such as weekly interviews and assumption tests, since outcomes rarely move in a straight line.

### Step 7: Keep it long enough to learn

Plan to stay on the same directional outcome for several quarters. Refine how you measure it as you learn which behaviors signal real value. Start a new tree only when the direction changes, for example a move from engagement to acquisition, and not when the target number is raised.

## Best Practices

- Derive outcomes from the revenue model. An outcome linked to how the company makes money is easier to defend in a negotiation and easier to connect to impact later, which is the second mistake [Torres and Gurion](https://www.producttalk.org/defining-product-outcomes/) warn against.
- Pair sentiment with behavior. A satisfaction score alone gives no direction. Pairing it with a behavior that satisfied customers show gives the team guardrails in both directions.
- Prefer one outcome per team. [Torres](https://www.producttalk.org/shifting-from-outputs-to-outcomes/) argues a team spread across several outcomes only gets a shallow understanding of each opportunity space.
- Split shared outcomes. When several teams are asked to move the same metric, split it by customer segment or by journey step so each team owns one.
- Let measurement evolve. Start with a simple measure, then refine it as the team learns what successful customers actually do.
- Report activity alongside the metric. Interviews run and assumptions tested show progress in the quarters before the outcome moves.

## Common Mistakes

- **Writing an output as an outcome**: "Deliver an Android app" is a yes-or-no deliverable. Ask what customer behavior the app is supposed to change, and make that the outcome.
- **Taking a business outcome straight from the executive team**: Revenue or market share depends on many teams and lags behind anything one trio does. Translate it into the product behavior your team can influence.
- **Choosing a traction metric**: Increasing use of one feature narrows discovery to that feature. Apply the happy-customer test and move up to the behavior the feature is meant to support.
- **Changing the outcome every quarter**: Teams that switch outcomes each quarter never learn enough about one opportunity space to have a large impact. Keep the direction and change only the target.
- **Waiting for perfect measurement**: An outcome can be directional at first. Start discovery and build the measure alongside it.

## References

- [Examples](references/examples.md): Worked examples and scenarios
- [FAQ](references/faq.md): Frequently asked questions
- [Parent Method](../../methods/opportunity-solution-tree/METHOD.md): Opportunity Solution Tree

## Related Skills

- [Identifying Customer Opportunities from Research](../identifying-customer-opportunities-from-research/SKILL.md)
- [Structuring Opportunity Spaces Hierarchically](../structuring-opportunity-spaces-hierarchically/SKILL.md)
- [Prioritizing Opportunities Using Customer Evidence](../prioritizing-opportunities-using-customer-evidence/SKILL.md)
- [Generating Multiple Solutions per Opportunity](../generating-multiple-solutions-per-opportunity/SKILL.md)
- [Designing Assumption Tests for OST Solutions](../designing-assumption-tests-for-solutions/SKILL.md)
- [Maintaining a Living Opportunity Solution Tree](../maintaining-a-living-opportunity-solution-tree/SKILL.md)
- [OST Workshop Facilitation](../facilitating-ost-workshops-with-stakeholders/SKILL.md)

## Sources

- [Teresa Torres: Shifting from Outputs to Outcomes](https://www.producttalk.org/shifting-from-outputs-to-outcomes/)
- [Teresa Torres and Hope Gurion: Defining Product Outcomes, the 8 Most Common Mistakes](https://www.producttalk.org/defining-product-outcomes/)
- [Teresa Torres: Opportunity Solution Trees](https://www.producttalk.org/opportunity-solution-trees/)
