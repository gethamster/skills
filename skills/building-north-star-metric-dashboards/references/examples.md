# Examples: Building North Star Metric Dashboards That Trace the Work

## A dashboard that finds an input with no bets

**Scenario:**

Illustrative scenario: a small accounting app for freelancers tracks "freelancers who send an invoice and get paid in the same month" as its North Star. It has three inputs: new users connecting a bank account, invoices sent per active user, and invoices paid on time.

**Walkthrough:**

The team lays out the page in the order of the tree and pulls current bets in from its roadmap tool. The bets zone shows six items under invoices sent and none under invoices paid on time, even though that input has been flat for two months.

At the next review, the product lead points to the empty column. The team moves one designer onto an opportunity under the neglected input: reminders that clients receive before an invoice is due. Two weeks later the bet appears on the page in the "trying" column.

## A health panel that explains a stalled input

**Scenario:**

Illustrative scenario: a video-editing tool's North Star is "projects exported each week." One input, project completion rate, starts falling while no new bets are affecting it.

**Walkthrough:**

The health panel shows the cause. Render failures have risen since an infrastructure change, and cycle time for fixes has lengthened. Without the panel, the team would have started investigating onboarding.

The annotation on the input chart links the drop to the infrastructure change date. Engineering gets a bet under the health input to fix the render pipeline, and the review records that the completion rate recovered after the fix shipped.

## A definition change that looked like growth

**Scenario:**

Illustrative scenario: a community app counts "weekly contributors," defined as members who post or comment. An analyst widens the definition to include reactions, and the chart jumps the following week.

**Walkthrough:**

At the review, a team lead starts to credit the jump to a recent feature. The analyst points out that there is no annotation for the definition change, and the team realizes the jump is an artifact.

The team adds a dated annotation, restates the history under the new definition so the trend is continuous, and adds a rule that any definition change gets an annotation before it ships. The definition printed next to the chart is updated the same day.
