# Examples: Calibrating Confidence to Outcomes

## Support ticket routing

**Scenario:**

Illustrative scenario: a team uses a decision model to route incoming support tickets to one of six queues and wants to auto-route anything the model marks as highly confident.

**Walkthrough:**

They log each routing decision with its confidence and task type 'routing', then treat the queue where the ticket was finally resolved as ground truth. After a few weeks they build a bucket table for routing only. The top bucket, with a mean stated confidence of 0.93, shows 91 of 100 tickets landing in the right queue, close to the stated level. A middle bucket at a mean of 0.72 shows only 55 of 100 correct, which reveals overconfidence in that band.

They allow auto-routing only for the top bucket and keep the middle band in the manual queue while they investigate.

## Separating two tasks that looked fine together

**Scenario:**

Illustrative scenario: an operations team runs one model for two jobs, classifying invoices as approved or held, and extracting the invoice due date, and their pooled calibration table looks acceptable.

**Walkthrough:**

On review they notice the pooled table mixes both jobs, so they split the log by task type. The approval task stays close to its stated confidence across buckets. The date extraction task, however, is correct only 70 of 100 times in the bucket where it claims a mean of 0.9. The pooled view had hidden this because approval decisions outnumbered extractions heavily.

They keep automation on approvals and route date extraction through a validation rule until the extraction mapping improves.

## Re-checking after a model upgrade

**Scenario:**

Illustrative scenario: a fraud screening service switches to a new model version that its provider says is better calibrated, and the team's existing auto-clear rule was set on the old version's mapping.

**Walkthrough:**

Because every log row carries a model version, they start a fresh mapping for the new version rather than extending the old one. For the first stretch they run the new model in shadow, logging its decisions and confidence while the old rule stays in force. Once enough cases resolve, they compare the new bucket table with the old one. The high-confidence buckets now track outcomes more closely, but a low bucket has grown underconfident, with 80 of 100 correct at a stated mean of 0.6.

They adopt the new version and note in the report that the escalation rule for the low band may be sending too much work to reviewers.
