# FAQ: Designing Outcome-Based Reward Signals

## Why use a proper scoring rule instead of a simple correct or incorrect reward?

A strictly proper scoring rule gives its best expected score when the model reports its true belief, so honest probabilities are the winning strategy. A binary reward pays the same regardless of stated confidence, so it gives no pressure toward calibration. Open reimplementations such as OpenJev rely on proper rules for this reason. The result is a reward that improves confidence, not just decisions.

## Should I use cross-entropy, the Brier score, or both?

Cross-entropy gives strong gradients and punishes confident misses hard, which helps learning but amplifies label noise. The Brier score is bounded and considers the whole distribution. Combining them, as one open implementation does, balances those traits. Treat the weighting as something to tune against held-out calibration rather than a fixed rule.

## What does post-hoc temperature scaling add if the reward is already calibration-aware?

Training rewards shape the policy, but the final probabilities can still drift from observed accuracy on new data. Temperature scaling fits one parameter on held-out data to correct that drift without changing which decision is chosen. It is cheap to refit when inputs shift. Think of it as a final adjustment, not a substitute for a good reward.

## Is this the exact reward TypeSafe uses for Jev?

No one outside TypeSafe can say, because the company has not published its reward function or training procedure. The patterns on this page come from open reimplementations and independent write-ups. They follow the stated goal of matching probabilities to correctness rates. Label any production system built this way as your own design informed by those sources.

## How do I know my reward design is working?

Bin held-out predictions by stated confidence and compare each bin's average confidence with its observed accuracy, separately for each decision type. If bins line up with actual rates, the reward is doing its job. Watch also for probability collapse toward extremes during training. A rising reward with worsening per-task calibration means something in the labels or weighting needs attention.
