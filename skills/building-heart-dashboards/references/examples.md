# Examples: Building HEART Metric Dashboards for Product Teams

## Cutting an overloaded dashboard down

**Scenario:**

Illustrative scenario: a product team's UX dashboard has grown to dozens of charts over two years. Nobody reads past the first screen, and the weekly review keeps running out of time.

**Walkthrough:**

The team lays its current goals table next to the dashboard and checks each chart against it. Many charts have no matching goal; they were added for one-off questions. Those move to an archive view.

The remaining metrics are sorted into primary and secondary. The summary row ends up with one metric each for Adoption, Task success and Happiness, the three categories the team chose for this year. Retention stays in a secondary section because it changes slowly. The weekly review now covers the summary row in a few minutes and spends the rest of the time on whichever metric moved.

## A launch dashboard for a new feature

**Scenario:**

Illustrative scenario: a design tool is about to launch shared component libraries. The feature team wants a dashboard ready on launch day so it can decide within a few weeks whether to invest more.

**Walkthrough:**

The dashboard has three sections. Adoption shows new teams creating a library each week as a share of active teams. Task success shows the share of attempts to publish a library update that succeed, with a failure breakdown by error type. Happiness shows the feature-level satisfaction score from a sampled survey, marked as preliminary until enough responses arrive.

Each chart carries a one-line description and a baseline where one exists. The launch date and a later bug-fix release are annotated. A data quality check alerts the analyst if the publish events drop sharply, which catches a tracking bug in the first week before anyone mistakes it for a product problem.

## Connecting a HEART dashboard to quarterly goals

**Scenario:**

Illustrative scenario: a subscription app's leadership sets quarterly objectives, and the product team wants its HEART dashboard to be part of that conversation rather than a separate report.

**Walkthrough:**

The team maps each quarterly objective about the user experience to one HEART goal and puts that goal's primary metric at the top of the dashboard. Business metrics such as revenue stay on the finance dashboard, linked from the header.

At the quarterly review, the team presents the HEART summary row with baselines and trends, then the release annotations that explain the biggest movements. When one objective is missed, the team shows the survey themes and task failure breakdown behind the number, which turns the discussion toward what to fix next.
