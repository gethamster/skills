# Examples: Breaking Step-Projects into Daily Tasks

## Tasks for a smoke test

**Scenario:**

Illustrative scenario: a step-project tests whether users want to share dashboards with people outside their account. The step is a fake-door test: a "Share externally" button that records clicks and shows a short message.

**Walkthrough:**

The team lists three deliverables: the button and message, the click event in analytics, and a short analysis at the end. Broken down with the engineer, that becomes a handful of tasks: add the button behind a flag, write the message, add and verify the event, enable the flag for a sample of users, and prepare the query for the result.

The event task is sequenced first, so nothing reaches users before measurement works. Each task is tagged with the step's code. The whole step fits comfortably in one sprint, and no task takes more than a day.

## Cutting a step back to its question

**Scenario:**

Illustrative scenario: a step-project is meant to test whether a simplified pricing page increases trial starts. The first task list includes a full design system update, new illustrations and localization.

**Walkthrough:**

The product manager reads the list against the hypothesis. The question is about the page's structure and wording, so localization, new illustrations and the design system work are not needed to answer it. Those tasks move to a note for the full build if the idea succeeds.

What remains is a new page layout using existing components, copy changes, an A/B split and the tracking to compare trial starts. The step now fits its time box, and the team can read the result within the planned end date.

## Closing tasks when an idea is stopped

**Scenario:**

Illustrative scenario: halfway through a step-project, early interview results clearly reject the idea's main assumption. The step's owner and the team agree to stop the idea at the weekly board review.

**Walkthrough:**

Because every task is tagged with the step's code, the team finds all its open tasks in a minute. They close them with a note linking to the interview summary, and archive the partly built prototype branch.

The step's record in the idea bank lists what was built, what was learned, and why the idea was stopped. The freed capacity goes to the next step on the GIST board at the next sprint planning.
