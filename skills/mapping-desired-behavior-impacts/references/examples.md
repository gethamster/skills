# Examples: Mapping Desired Behavior Impacts on Actors

## Example: SaaS Onboarding Improvement

**Scenario:**

A B2B SaaS company has a goal to increase free-trial-to-paid conversion from 8% to 15% within 6 months. They've identified three key actors: new trial users, sales development reps (SDRs), and existing customers who might refer others.

**Walkthrough:**

For **new trial users**, the team maps these impacts:

1. *Positive*: Trial users complete their first workflow within 30 minutes of signup (leverage: high, uncertainty: medium)
2. *Positive*: Trial users invite a teammate during the first week (leverage: high, uncertainty: high)
3. *Negative*: Trial users abandon the product after hitting a paywall before seeing value (leverage: high, uncertainty: low)

For **SDRs**:
1. *Positive*: SDRs reach out to trial users who completed a workflow but haven't converted within 5 days (leverage: medium, uncertainty: low)

For **existing customers**:
1. *Defensive*: Existing customers continue renewing despite a competitor's aggressive discounting (leverage: medium, uncertainty: medium)

The team writes causal hypotheses: 'We believe that if trial users complete their first workflow within 30 minutes, conversion will increase because users who experience the core value proposition early are 3x more likely to upgrade based on our historical cohort data.'

They prioritize the first trial user impact (high leverage, testable) and the negative impact (high leverage, low uncertainty — they can fix the paywall timing quickly). The teammate-invite impact is flagged as a big bet requiring experimentation. This impact layer then feeds directly into deliverable brainstorming.

## Example: Internal Platform Team Reducing Deployment Friction

**Scenario:**

An internal platform team's goal is to reduce average deployment cycle time from 5 days to 1 day across 12 product teams. Actors include: application developers, QA engineers, team leads, and the security review board.

**Walkthrough:**

For **application developers**, the team identifies:
1. *Positive*: Developers self-serve environment provisioning instead of filing tickets (leverage: very high, uncertainty: low)
2. *Positive*: Developers run integration tests locally before pushing to CI (leverage: medium, uncertainty: medium)

For **QA engineers**:
1. *Positive*: QA engineers approve deployments within 2 hours of request instead of 24+ hours (leverage: high, uncertainty: medium)

For **the security review board**:
1. *Negative*: The security board blocks deployments for non-critical findings (leverage: high, uncertainty: low)
2. *Defensive*: The security board maintains compliance audit pass rates while reviewing faster (leverage: high, uncertainty: medium)

The team realizes that the security board's negative impact — blocking deployments unnecessarily — is actually the highest-leverage item. One behavioral change (the board triaging critical vs. non-critical findings and only blocking on critical ones) could eliminate 60% of the deployment delay. This insight would have been missed in a feature-first approach, where the team might have focused on CI/CD tooling improvements.
