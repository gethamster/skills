# Examples: Designing Outcome-Based Reward Signals

## Support ticket routing with a composite loss

**Scenario:**

Illustrative scenario: a team trains a model to route support tickets to one of five queues and wants confidence values software can threshold.

**Walkthrough:**

They define correct as the queue that finally resolved the ticket, joined from the ticketing system after closure. Each example stores the ticket state, the routing question, the resolved queue and a schema listing the five queues. They start with cross-entropy plus Brier at equal weight, following the open-reimplementation pattern, and use the negative loss as the policy-gradient reward. After training, they fit a temperature on a held-out month of tickets.

Their per-queue audit shows the rarely used billing queue is overconfident, so they add more billing examples rather than changing the scoring rule.

## Dropping an accuracy-only reward

**Scenario:**

Illustrative scenario: an engineer's fraud-flag model pays a reward of one for a correct flag and zero otherwise, and its confidence values cluster near the top of the range.

**Walkthrough:**

Accuracy looks healthy, but binned checks show that decisions stated at very high confidence are right far less often than claimed. The engineer recognizes that the reward never looked at the probability, only the chosen label. They replace it with a Brier-based reward over both classes so wrong-side probability mass is penalized. Confidence values spread out and begin to match observed rates in each bin.

Accuracy barely moves, which confirms the change affected calibration rather than decision quality.

## Catching a bad ground truth

**Scenario:**

Illustrative scenario: a team labels document-classification outcomes by taking the majority vote of three general chat models, then trains against those labels.

**Walkthrough:**

Training reward rises steadily and held-out calibration against the same labels looks excellent. A small hand-reviewed sample, however, shows the model is confidently wrong on the same categories where the chat models tended to agree incorrectly. The reward had faithfully taught the model to be calibrated to the proxy, not to reality. The team switches to labels resolved by the downstream human workflow for a subset and reweights training toward them.

They keep the hand-reviewed sample as a standing check on label quality.
