# Examples: Reprioritizing and Moving Items Across Horizons

## Example: Early-stage SaaS startup with a 6-person team

**Scenario:**

A B2B SaaS startup has 12 items on their roadmap: 3 in Now, 4 in Next, and 5 in Later. The team ships biweekly. They recently received feedback from their top 3 paying customers all requesting the same integration that currently sits in Later. Meanwhile, one of the Now items (a dashboard redesign) has stalled for two sprints because the designer left the company.

**Walkthrough:**

During the biweekly review, the PM starts with Now. The dashboard redesign has been blocked for two sprints with no design resource available for at least 4 more weeks. This item is demoted to Next with the note: "Blocked on design hire. " This opens a Now slot.

Moving to Next, the PM checks which items meet graduation criteria. The integration requested by 3 top customers is examined. It was in Later, but the PM pulls it into the discussion because of the strong new evidence. It scores well: validated demand from paying customers representing 40% of MRR, technical spike completed last month (2 sprint estimate), and direct alignment with the retention strategy.

The team promotes it to Now, filling the slot freed by the dashboard demotion. The PM also identifies a Next item (email notification preferences) that has been sitting there for 10 weeks with no new supporting evidence. It is demoted to Later. The changelog is posted to the team Slack channel within the hour, and the customer success manager is alerted that the integration is now in active development so she can update the requesting customers.

## Example: Mid-size B2B company with multiple product teams

**Scenario:**

A company with 4 product squads runs a combined roadmap with approximately 50 items across horizons. Each squad manages their own Now (3-5 items each), but Next and Later are shared. The company just completed annual planning, which shifted the strategic priority from growth to retention. Several Now items were approved under the old growth-first strategy.

**Walkthrough:**

The head of product calls a special triggered review (outside the normal cadence) because the strategy shift is a significant event. The review starts with a re-evaluation of all Now items against the new retention-first strategy. Three items across two squads were growth-focused: a new onboarding flow for trial users, a freemium tier expansion, and a viral sharing feature. The onboarding flow still has retention value (better onboarding reduces churn), so it stays in Now with an updated rationale.

The freemium expansion is demoted to Later because it directly contradicts the focus on converting existing users. The viral feature is demoted to Next because it has partial retention value through network effects, but it is not the highest priority under the new strategy. These three moves free up capacity for retention-focused items. Two items are promoted from Next to Now: a customer health scoring system (strong engineering readiness, directly supports retention) and an in-app feedback widget (customer demand from 12 support tickets in the last month).

The review produces a detailed changelog that the head of product presents at the all-hands, framing the changes as a natural consequence of the strategic shift rather than a repudiation of past decisions.

## Example: Consumer mobile app with fast iteration cycles

**Scenario:**

A consumer app ships weekly and has a roadmap with about 25 items. The team runs weekly Now reviews and monthly Next/Later reviews. Usage analytics from the latest release show that a feature shipped two weeks ago (dark mode) drove a 15% increase in evening session length, validating a hypothesis about user engagement patterns. Meanwhile, a planned performance optimization in Now is showing diminishing returns after 3 weeks of work.

**Walkthrough:**

In the weekly Now review, the team evaluates the performance optimization. The first two weeks of work captured the easy wins, reducing load time by 40%. The remaining work targets an additional 10% improvement but requires significant architectural changes. The team decides to demote the remaining optimization scope to Next, as the law of diminishing returns makes it a poor use of the Now slot compared to alternatives.

The dark mode success triggers a promotion discussion about a related Later item: customizable themes. The dark mode data provides direct evidence that visual personalization drives engagement. The PM pulls the themes item into the monthly Next/Later review agenda, where it is promoted from Later to Next with the supporting data attached. Additionally, the team notices that a social sharing feature has been in Next for 6 weeks with zero new evidence since it was placed there.

The team demotes it to Later. The changelog is brief: 3 items moved, each with one sentence of rationale, shared in the team's standup the next morning.

## Example: Enterprise platform with quarterly stakeholder commitments

**Scenario:**

An enterprise platform team has external commitments to key accounts. A Later item (SSO support) was on the roadmap as a future consideration. Two enterprise prospects worth a combined $800K ARR have now made SSO a requirement for signing. The sales team is pressuring the PM to put it in Now immediately.

The current Now column is fully staffed with 4 items, all with committed delivery dates communicated to existing customers.

**Walkthrough:**

The PM resists the pressure to simply add SSO to Now without displacing anything. Instead, she runs an expedited review focused on this specific item. First, she evaluates SSO against graduation criteria: customer demand is strong ($800K ARR at stake), technical feasibility is moderate (estimated 3 sprints, requires identity provider research), and strategic alignment is high (enterprise expansion is a key OKR). SSO clearly meets the criteria for promotion.

The question is what it displaces. She reviews the 4 Now items: two have committed delivery dates to existing customers (cannot move without relationship damage), one is a compliance requirement with a regulatory deadline (cannot move), and one is a reporting feature requested by a single account worth $200K ARR. The reporting feature is the displacement candidate. The PM contacts the account manager for the reporting customer, explains the delay, and offers a workaround using CSV exports.

The reporting feature is demoted to Next with a target re-promotion in 6 weeks. SSO is promoted to Now. The full rationale, including the ARR comparison and the workaround offered, is documented in the changelog and shared with the sales VP and the affected account managers within 2 hours of the decision.
