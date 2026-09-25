# Examples: Building Mental Models for Rapid Orientation

## Product team rebuilding a churn model

**Scenario:**

Illustrative scenario: a subscription product sees cancellations rise among small accounts, and the team's long-held belief is that churn is driven by price.

**Walkthrough:**

The team lists fresh observations separately: more cancellations from small accounts, a spike in onboarding support tickets, and no change in pricing page visits. Naming lenses reveals that the pricing story came from a painful episode a few years earlier. Analysis splits the belief into elements, tagging price sensitivity as an assumption with little current evidence. Synthesis produces a primary model that onboarding friction is driving early churn and a rival model that a competitor's free tier is pulling small accounts away.

Response options include simplifying onboarding and interviewing churned users about alternatives, and the team sets a trigger: if onboarding fixes do not move early retention, the rival model becomes primary.

## Operations lead orienting during a recurring incident

**Scenario:**

Illustrative scenario: a platform team keeps seeing intermittent slowdowns, and doctrine says these are always caused by database load.

**Walkthrough:**

The on-call lead writes down what was observed without interpretation: slowdowns cluster at certain times, database metrics look normal during some of them, and a new caching layer shipped recently. She notes that the database explanation comes from team doctrine and past incidents. Breaking the situation into elements shows that the doctrine only explains part of the evidence. She synthesizes a rival model centered on cache eviction behavior and states what each model predicts for the next slowdown.

The response options now include instrumenting the cache, which would never have appeared under the old model.

## Founder orienting on an unfamiliar market

**Scenario:**

Illustrative scenario: a founder expanding into a new region assumes buyers there behave like those in the home market.

**Walkthrough:**

The founder lists early observations from a handful of sales calls, keeping them separate from impressions. Naming lenses surfaces that the whole team's experience comes from one market and one buying culture. Analysis tags the assumption that buyers want self-serve onboarding as unverified, since several calls involved procurement steps. Synthesis yields a primary model of committee-driven purchasing and a rival model of self-serve buyers who are simply cautious early on.

The founder derives options that work under both models, such as adding a lightweight procurement pack, and sets triggers tied to what the next calls reveal.
