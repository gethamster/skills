# Examples: Defining Goals, Signals, and Metrics for HEART

## A redesigned help center search

**Scenario:**

Illustrative scenario: a software company has rebuilt the search box in its help center. The support lead wants to know whether customers now find answers on their own, and the product manager wants a small set of metrics to review a month after launch.

**Walkthrough:**

The team picks Task success and Happiness, and leaves out Adoption because nearly everyone who opens the help center already uses search. It writes down that Engagement was excluded on purpose: more searches per visit could mean people are struggling.

For Task success, the goal is "customers find the article that answers their question without contacting support." The team lists two signals: a search followed by an article view with no support ticket that day, and a failure signal, a search followed by opening the contact form. The metrics are the share of search sessions that end in an article view with no ticket, and the share that end in a contact form, both per week.

For Happiness, the goal is "customers feel search understands their question." The signal is the answer to a short sampled survey on the article page, and the metric is the weekly mean rating. The team tests both behavioral metrics on the old search's logs before launch and confirms that they do not simply rise and fall with traffic.

## Onboarding in a team collaboration tool

**Scenario:**

Illustrative scenario: a collaboration tool sells to small teams. New workspaces often stall after the first person signs up, and the growth team wants metrics for a new invitation flow.

**Walkthrough:**

The goal discussion surfaces a disagreement. Sales wants "more workspaces created," and design wants "new workspaces become places where a team actually works together." The team uses the process to settle on the second as the Adoption goal, since the first is a count that rises with marketing spend.

Signals include a second member joining, a shared item being created, and comments from two different people. The team chooses the second member joining within the first week as the main signal, because it is logged today and responds directly to the invitation flow. The metric is the share of workspaces created each week that have at least two active members seven days later.

A Retention row follows for the same cohort, using weekly returns by the workspace. Happiness is deferred until the team can run a survey, and the table says so.

## A photo backup feature on mobile

**Scenario:**

Illustrative scenario: a mobile app adds automatic photo backup. Leadership asks for "engagement numbers," but the product manager is not sure engagement is the right lens for a feature designed to run in the background.

**Walkthrough:**

The team questions the Engagement category directly. A backup feature that works well needs no attention, so more time spent in the backup screen would be a bad sign. The team records Engagement as excluded for this feature and explains why.

The chosen categories are Adoption and Task success. The Adoption goal is "people who take photos turn backup on." Its metric is the share of weekly active users with backup enabled. The Task success goal is "photos are backed up without the user needing to intervene," with a failure signal of backup errors that require a user action. The metric is errors needing user action per thousand backed-up photos, per week.

When leadership asks again for engagement, the product manager shares the table and the reason for the exclusion. The discussion moves to whether the adoption rate is high enough, which is the decision that matters.
