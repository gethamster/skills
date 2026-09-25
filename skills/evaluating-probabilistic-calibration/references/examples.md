# Examples: Evaluating Probabilistic Calibration

## Support ticket routing model

**Scenario:**

Illustrative scenario: a team routes support tickets automatically and wants to know if the model's confidence can gate auto-assignment. They have about 5,000 logged tickets with the model's chosen queue, its probability and the queue a human finally assigned.

**Walkthrough:**

They treat the final human assignment as the outcome and bin predictions into ten equal-width bins. Most predictions land above 0.8, so the lower bins are nearly empty and flagged as thin. The reliability plot shows the 0.9-1.0 bin close to the diagonal but the 0.8-0.9 bin clearly below it. The weighted ECE is modest, yet the plot reveals the overconfident band that the score alone would hide.

The team reports that only the top bin matched its observed accuracy well enough to consider for automation, pending more data in the band below.

## Two task types, one blended score

**Scenario:**

Illustrative scenario: an operations team runs one decision model for two jobs, classifying invoices and flagging duplicate payments. A single combined ECE looked acceptable, and they want to confirm it before widening automation.

**Walkthrough:**

They split the log by task type and rebuild the tables. Invoice classification sits slightly above the diagonal, meaning mild underconfidence. Duplicate flagging sits well below it, meaning clear overconfidence. In the combined score these errors partly cancelled, which explains why the blended ECE looked fine.

The team keeps separate calibration reports for each task from then on and holds back automation on duplicate flagging.

## Checking bin count robustness

**Scenario:**

Illustrative scenario: an evaluator has only 600 labelled outcomes for a new document extraction task and finds a large gap in one bin at ten bins.

**Walkthrough:**

Before reporting, they rerun the analysis at five bins and at twenty bins. At five bins the gap shrinks and merges into a neighbouring bin that looks well calibrated. At twenty bins the suspicious region splits into bins with only a few dozen predictions each, with wide bootstrap error bars. Because the conclusion changes with granularity, they report the task as not yet evaluable.

They schedule a rerun once the log reaches a larger size they choose in advance.
