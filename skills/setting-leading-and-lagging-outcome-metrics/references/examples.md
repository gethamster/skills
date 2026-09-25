# Examples: Setting Leading and Lagging Metrics for Roadmap Outcomes

## Annual contracts and a slow retention signal

**Scenario:**

Illustrative scenario: a B2B analytics product sells annual contracts. The roadmap outcome is higher renewal, but renewals happen once a year, so the lagging metric would take most of a year to show whether this quarter's work helped.

**Walkthrough:**

The team maps the chain backward from renewal. Accounts that renew tend to have several people viewing shared reports each week, and those accounts usually set up a scheduled report in their first month. The team checks last year's data and finds that accounts with a scheduled report in month one renewed more often than those without.

They choose two leading indicators: the share of new accounts with a scheduled report in month one, and the number of weekly report viewers per account. Both can move within weeks. They agree that if the first indicator has not moved after two review cycles, they will switch initiatives. Renewal stays on the roadmap as the lagging metric, with a note that it cannot be read until contracts come up.

## A leading indicator that moved on its own

**Scenario:**

Illustrative scenario: a consumer app's outcome is higher second-month retention. The team picked "sessions per user in week one" as its leading indicator, and it rose sharply after a new push notification schedule shipped.

**Walkthrough:**

Two months later, retention has not changed. The team compares cohorts and sees that the extra sessions were short visits triggered by notifications, and those users did not come back more often later. The indicator measured activity the team could inflate, and that activity did not lead to retention.

At the review, they replace it with "users who complete a core task on three separate days in week one" and add notification opt-out rate as a counter-metric. The failed indicator and the reason for dropping it go into the metric log, so the next team does not reuse it.

## Setting thresholds before the data arrives

**Scenario:**

Illustrative scenario: a marketplace team is testing a new seller onboarding flow. The lagging metric is the share of new sellers who make a first sale within a month. The leading indicator is the share who publish a complete listing within three days.

**Walkthrough:**

Before launch, the team writes the decision thresholds next to the outcome: a clear rise in complete listings means continue, a small rise means adjust the flow, and no change after two review cycles means try a different initiative. They also note that first sales need roughly a month to show up.

When the first readings arrive, the rise is small. Because the rule was agreed in advance, the review spends its time on what to adjust instead of debating whether the result counts. The team simplifies the photo step and schedules the next reading.
