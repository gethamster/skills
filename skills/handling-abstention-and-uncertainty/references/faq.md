# FAQ: Handling Abstention and Uncertainty

## What confidence threshold should I use for automation?

There is no universal answer. Public material on RLCD does not specify an accept-versus-escalate cutoff, and the practitioner guidance does not fix an acceptable calibration error. Derive the threshold for each decision type from logged outcomes and the relative cost of a wrong action versus a review. Start conservative and lower it as evidence accumulates.

## Should every low-confidence decision go to a human?

Not necessarily. For some decision types a safe default, such as leaving the current state unchanged or asking the user, is cheaper than a review and just as safe. A three-band policy of act, review and fallback lets you reserve reviewer time for cases where human judgment changes the outcome. Decide the bottom band per decision type based on what the fallback costs.

## How many logged outcomes do I need before setting a threshold?

No published rule sets a minimum. What matters is that the confidence buckets around your candidate threshold hold enough examples that their observed accuracy is stable rather than noise. If a bucket is sparse, widen it or keep collecting before automating at that level. Rare decision types may need a longer logging period or review of every case until data builds up.

## If a decision is above threshold, can I assume it is correct?

No. Calibration describes how often decisions at a confidence level are right across many cases, not whether a specific one is. A threshold controls the error rate of the automated stream as a whole. Where a single error is unacceptable, require review or make the downstream action easy to reverse.

## How often should thresholds be revisited?

Recalculate on a regular schedule and immediately after any change to the model version, input sources or decision schema. Continuous audit sampling of automated decisions tells you between recalculations whether accuracy in the automated band is holding. If it drops below what the threshold assumed, raise the threshold or pause automation for that type until fresh outcomes are in.
