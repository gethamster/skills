# Examples: Measuring Adoption and Task Success with HEART

## Saved filters in an analytics tool

**Scenario:**

Illustrative scenario: a reporting product ships saved filters so analysts can reuse complex queries. The product manager wants to know within a month whether people use them and whether saving works smoothly.

**Walkthrough:**

The team rejects "opened the filter menu" as the adoption event because many people open it by accident. Adoption is defined as saving a first filter and then applying it again on a later day, which shows both intent and reuse. The metric is new adopters each week as a share of weekly active analysts.

For task success, the key task is saving a filter. The start event is clicking "Save filter" and the success event is the filter appearing in the saved list. The team adds a failure event for name conflicts, which turn out to be common. The task metrics are save completion rate, error rate per attempt, and median time from click to saved.

The first review shows adoption growing slowly but a high error rate on name conflicts. The team fixes the naming flow first, because more promotion would only send more people into a failing step.

## A new checkout address form

**Scenario:**

Illustrative scenario: an online store replaces its address form with one that suggests addresses as the shopper types. Adoption is not a question, since every buyer sees the form. Task success is the whole point.

**Walkthrough:**

The team runs an A/B test with the old and new forms. The start event is the shopper reaching the address step, and success is moving to the payment step. Failure events include validation errors and returning to edit the address after seeing shipping costs.

Alongside completion and errors, the team measures median time on the step. To capture perceived difficulty, a small sample of buyers answers one post-task ease question after the order is placed. When completion is the same in both versions but the new form has fewer errors and a shorter median time, the team ships it.

## Admin roles in a B2B product

**Scenario:**

Illustrative scenario: a B2B product adds custom admin roles. Only account administrators can use the feature, and most accounts have one or two of them.

**Walkthrough:**

Adoption is normalized by the right population: accounts with an active administrator, rather than all users. The adoption event is creating a custom role and assigning it to at least one person, since creating a role without assigning it is often an experiment.

Task success is hard to read from logs because administrators often explore the screen without a clear task. The team runs a short remote benchmarking study with assigned tasks, such as "create a role that can view but not edit billing," and records completion, errors and time. The study shows that most failures come from one confusing permission label, which the team rewrites before the next release.
