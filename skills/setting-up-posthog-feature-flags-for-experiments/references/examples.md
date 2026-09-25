# Examples: PostHog Experiment Variant Configuration with Feature Flags

## Three variants for a welcome screen

**Scenario:**

Illustrative scenario: a note-taking app wants to test two new welcome screens against the current one. One adds a short product tour, the other opens a sample notebook.

**Walkthrough:**

The team creates the experiment and lets the wizard create the flag, then adds a second test variant so the flag returns `control`, `tour` or `sample-notebook`, split evenly. They note that three groups need more total traffic than two and accept the longer run the calculator shows.

In code, the welcome component checks that the user has not finished onboarding, then reads the flag once and maps each value to a screen, with anything unexpected falling back to control. Each variant also carries a payload with its headline copy, so the product manager can fix a typo without a deploy. Before launch, an engineer overrides his own account into each of the three variants and confirms that exposure events carry the right value.

## Exposures with no variant

**Scenario:**

Illustrative scenario: a team's onboarding experiment targets users by a signup date property that the backend sets when the account is created. A day after launch, the exposure count is lower than signups.

**Walkthrough:**

Breaking down the exposure event by the flag's variant shows a large group with no value. The client reads the flag on the first onboarding screen, which often loads before the backend's signup property has been ingested, so the flag cannot be evaluated and those users are dropped. This matches the wrong-variant case in PostHog's troubleshooting guide.

The team moves the flag evaluation to the server, where the signup date is known, and passes the resolved variant to the client through bootstrapping. They reset the analysis, relaunch and see exposures with valid variants for nearly every new signup.

## A flag reused from a rollout

**Scenario:**

Illustrative scenario: a team already has a boolean flag that gradually rolled out a redesigned setup page to some users. They now want to run it as a proper experiment.

**Walkthrough:**

A boolean flag cannot back an experiment, which needs a multivariate flag with `control` as the first variant. The team creates a new experiment with its own flag instead of converting the old one, so the history of the rollout stays separate from the experiment.

They also enable per-session exposure deduplication in the web SDK, because many users already evaluated the old flag and the new experiment should count them when they return. The old boolean flag is removed from code after the experiment flag takes over.
