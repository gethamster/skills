# Examples: Bayesian vs Frequentist Results in PostHog Experiments

## A clear Bayesian win with an honest range

**Scenario:**

Illustrative scenario: an onboarding experiment reaches its planned sample. On the Bayesian engine at the default confidence level, the test variant's chance to win on onboarding completion is above the threshold and the variant shows green.

**Walkthrough:**

The analyst reads the credible interval before writing anything. It sits entirely above zero, but its lower end is a small improvement and its upper end a large one. In the write-up she reports the chance to win and the full interval, and says the change very likely helps while its size is uncertain.

She then checks the supporting metrics. First data received is also up, though not significantly, and support contacts are flat. The pattern is coherent, so the team ships, and the product manager uses the lower end of the interval when forecasting the effect.

## A frequentist result misread as a probability

**Scenario:**

Illustrative scenario: a team runs a frequentist experiment on a new setup wizard. At the planned end, the primary metric's p-value is just under alpha and the variant is marked significant.

**Walkthrough:**

A stakeholder summarizes the result as "a high chance the wizard is better". The analyst corrects the wording: the p-value is the probability of a difference at least this large if the wizard had no effect, which is a different statement. The confidence interval does not cross zero but comes close to it.

The team agrees the evidence supports shipping but that the effect may be small. They ship, note the uncertainty in the description, and plan a follow-up test of a larger change to the same step.

## A lone significant secondary metric

**Scenario:**

Illustrative scenario: an experiment on onboarding copy shows no significant change in completion, the primary metric. One of several secondary metrics, visits to the pricing page, is significant.

**Walkthrough:**

The team is tempted to claim the copy change increased purchase intent. The analyst points out that the primary metric did not move, the other secondary metrics are flat, and PostHog's docs note that each extra metric adds another chance of a false positive.

They keep control, record the null result for completion, and log the pricing visit signal as a hypothesis for a separate experiment where it would be the primary metric.
