# Examples: Onboarding Experiment Hypotheses and Success Metrics

## From a replay pattern to a hypothesis

**Scenario:**

Illustrative scenario: an analytics product sees many new users stop at the "connect a data source" step. Replays show users opening the list of sources, scrolling, and leaving without choosing one.

**Walkthrough:**

The team writes the mechanism first: users do not know which source fits their stack, so the long list stalls them. The hypothesis becomes: "For new self-serve users, replacing the full source list with three suggested sources based on the framework they chose will increase onboarding completion, because users will recognize the right source quickly. We also expect time on the step to fall and first data received to rise, and support contacts in the first week not to worsen."

The primary metric is a funnel from exposure to onboarding completed, with a conversion window matching the usual setup time. First data received is a secondary metric, support contacts are the counter metric, and an unrelated pageview metric someone proposed is dropped because it cannot confirm or contradict the mechanism.

## Choosing a retention primary metric

**Scenario:**

Illustrative scenario: a habit-tracking app wants to test a new first-day checklist. Completion of onboarding is already high, and the real concern is whether users come back.

**Walkthrough:**

Because nearly everyone completes onboarding, a completion funnel would have little room to move. The team makes a retention metric the primary, starting from the experiment exposure and counting whether users log a habit again within the first week. Onboarding completion stays as a secondary metric to catch any drop.

They set the MDE from the product question: the smallest retention improvement that would justify building out the checklist further. The calculator shows a longer run than a completion test would need, and the team accepts it because retention is the outcome they care about.

## A counter metric that changed the decision

**Scenario:**

Illustrative scenario: a team plans to test removing an optional profile step from onboarding, expecting completion to rise.

**Walkthrough:**

While writing the decision rule, the designer points out that the profile step collects the team size used to personalize the next screen. The team adds activation of the first collaborative feature as a counter metric and writes down that a completion win paired with a counter metric loss means iterate before shipping.

Writing this before launch removes the argument that would otherwise happen at the end, when a completion win would be tempting to ship regardless of what happened downstream.
