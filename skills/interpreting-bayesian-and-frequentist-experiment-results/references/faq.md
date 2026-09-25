# FAQ: Bayesian vs Frequentist Results in PostHog Experiments

## Which statistics engine does PostHog use by default?

Bayesian. PostHog's getting started guide lists Bayesian as the default with frequentist as the alternative.

## What does win probability mean in PostHog?

PostHog calls it chance to win: the probability, under its model, that the variant is better than control on that metric. At the default confidence level, a chance to win above that level marks a significant win, and one below its complement marks a significant loss. Always read it together with the credible interval, which shows how large the effect might be.

## What is the difference between a credible interval and a confidence interval?

PostHog describes a 95% credible interval as a range with a 95% probability of containing the true effect, given the model and data. A 95% confidence interval means that if the experiment were repeated many times, 95% of such intervals would contain the true effect. In practice both are shown as bars on the delta chart, and a bar that does not cross zero is significant.

## Does the Bayesian engine let me check results whenever I want?

It does not remove the risk of stopping early on noise. David Robinson's simulations show Bayesian stopping rules also raise error rates when used for early stopping. If you need to monitor continuously, use sequential testing in PostHog's frequentist engine, which is designed for that.

## What should I do when nothing is significant?

Check that the planned sample was reached, the variants were really different and tracking worked, and whether the effect you hoped for was smaller than the MDE. If all of that holds, record the null result and move on. A clean null result tells you the change does not matter enough to measure at this scale.
