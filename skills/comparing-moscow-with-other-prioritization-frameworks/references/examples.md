# Examples: MoSCoW vs RICE, ICE and WSJF

## A fixed launch with a long list of ideas

**Scenario:**

Illustrative scenario: a product team must ship a new billing product on a date set by a partner agreement. The backlog holds many ideas, and the team already scores ideas with RICE.

**Walkthrough:**

The team names two decisions. What will ship on the date is a scope decision that the partner, finance and support must accept, so they run MoSCoW with those stakeholders. The Musts come from the partner contract and from the consequence test.

Inside the Should and Could categories, the team keeps using RICE to order the work, so it knows what to build first once the Musts are done. When a high-scoring idea is proposed as a Must, the team applies the consequence test, finds a workaround, and keeps it as a high-ranked Should.

## A growth team triaging experiments

**Scenario:**

Illustrative scenario: a growth team runs many small experiments each month and has no fixed release date. A new manager proposes running MoSCoW on the experiment backlog.

**Walkthrough:**

The team names the decision: which experiments to run next. There is no timeframe to protect and no cross-business commitment, so the Must test has nothing to test against. The team keeps ICE for fast triage and agrees definitions for each rating level, since ICE assessments without shared definitions become unreliable.

MoSCoW is kept for the one decision where it fits: the quarterly platform release that the growth team depends on, which has a fixed date and several stakeholders.

## A portfolio team sequencing large jobs

**Scenario:**

Illustrative scenario: a platform group receives requests from several product teams and works in a continuous flow. Some requests lose value quickly if delayed, and others can wait.

**Walkthrough:**

The decision is order in a continuous flow, where the cost of waiting differs between jobs. The group adopts WSJF, estimating relative user and business value, time criticality, risk reduction and job size for each request.

Where a product team has a fixed launch that depends on the platform, the group runs a short MoSCoW pass for that launch to agree which platform items are Musts for the date. Those Musts are then placed at the front of the WSJF sequence, and the rest of the queue stays ordered by score.
