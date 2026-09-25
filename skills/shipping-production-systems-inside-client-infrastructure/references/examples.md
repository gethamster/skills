# Examples: Shipping Production Systems Inside Client Infrastructure

## A thin slice that exposed a network rule

**Scenario:**

Illustrative scenario: an FDE is deploying a forecasting service into a retailer's private cloud. The plan assumes the service can call the retailer's inventory API directly.

**Walkthrough:**

On the second day, the FDE deploys a thin slice through the retailer's pipeline: read one store's inventory, produce a forecast, show it on a simple page. The call to the inventory API fails because production workloads may only reach it through an internal gateway. Because the slice ran early, the FDE has time to request gateway access and adjust the design. The constraint goes into the decision log and into a note for the product team, since other retailers may run the same gateway pattern.

## Staged rollout across sites

**Scenario:**

Illustrative scenario: an FDE team has built a maintenance scheduling tool for a manufacturer with four plants. The customer wants it live everywhere by the end of the month.

**Walkthrough:**

The team proposes starting with one plant. Before release, they agree the signals with the plant manager: schedules generated on time, no increase in missed maintenance, and planners able to override the tool. The first plant runs for a week; one data mapping issue appears and is fixed with a small change. The team then releases to the remaining plants in pairs. Each release is small enough to roll back, and the customer's change board approves each without delay.

## Handover that found a hidden dependency

**Scenario:**

Illustrative scenario: at the end of a mission, an FDE prepares to hand a data pipeline to a hospital's analytics team. Documentation is written and a walkthrough is scheduled.

**Walkthrough:**

The FDE asks a member of the customer's team to run a full deploy and respond to a test alert while the FDE watches. The deploy works, but the test alert goes to the FDE's own email because the alert rule was created under the FDE's account during hardening. The FDE moves the rule to the team's on-call group, checks the other schedules and credentials for the same problem, and adds a line to the handover checklist for future engagements.
