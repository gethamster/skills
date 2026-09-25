# Examples: Accelerating Decision Tempo Under Uncertainty

## Pricing page test stuck in review

**Scenario:**

A growth team has debated a pricing page change across several meetings, each ending with a request for more data.

**Walkthrough:**

Illustrative scenario: the team estimates that competitor pricing and visitor behaviour shift roughly weekly, so a decision that has sat for three weeks is already behind. They classify the change as medium stakes and reversible, and set a one-hour Orient time box with the product lead as decision owner. They rewrite the choice as a hypothesis: if the annual plan is shown first, annual signups rise within two weeks, and a drop in total signups would disprove it. When the hour ends they ship the change to part of traffic and schedule a check at day fourteen.

At the check, signups hold steady and annual share rises, so they keep the change and log what they expected versus what happened.

## Incident response on an unfamiliar failure

**Scenario:**

An on-call engineer faces an outage whose symptoms do not match any known runbook.

**Walkthrough:**

Illustrative scenario: customer impact grows every few minutes, so the engineer sets a 30-minute Orient box before committing to a remediation. Instead of waiting for a root cause, they frame a hypothesis: rolling back the last deploy restores error rates within ten minutes, and flat error rates would disprove it. They roll back, watch the dashboard, and see no change at the ten-minute mark. That disconfirming result becomes the next observation, pointing them toward a dependency instead.

The second cycle restores service, and in the weekly review they log that they missed a pattern: the same dependency caused a similar alert two months earlier.

## Quarterly review of hiring decisions

**Scenario:**

A engineering manager wants to know whether her quick hiring calls are reliable.

**Walkthrough:**

Illustrative scenario: she pulls her log of 12 hiring decisions from the last two quarters, each recorded with the signal she expected to confirm the hire. She marks which early concerns turned out to be accurate and which strong impressions proved wrong. Two hires where she overrode a weak reference check both struggled, while her calls on technical depth held up well. She keeps short interview debriefs for technical judgment but adds a longer, day-long box whenever reference feedback is mixed.

The review turns a vague feeling about her judgment into specific rules for where to go fast and where to slow down.
