# Examples: Calibrating Confidence Thresholds and Escalation Paths

## Support ticket triage with a hidden refund policy

**Scenario:**

Illustrative scenario: a team routes incoming tickets to billing, technical or account queues and wants to automate the routing.

**Walkthrough:**

Illustrative scenario: after two weeks in shadow mode the team has 1,000 labeled tickets. The band table shows the top band right about 97% of the time for technical and account routing, but billing tickets in the same band are right only about 80% of the time. Investigation shows billing routing depends on a refund policy that is not in the ticket text. The team adds a short policy summary to the state, reruns the evaluation on the same fixed set, and billing accuracy in the top band rises to about 95%.

They automate technical and account routing above the top band and keep billing in escalation until a further week of data confirms the change.

## Model routing with an insufficient-savings fallback

**Scenario:**

Illustrative scenario: an agent decides whether each request goes to a small fast model or a large expensive one.

**Walkthrough:**

Illustrative scenario: the decision call itself adds cost, and on very short requests that cost exceeds what routing saves. The team adds an insufficient-savings trigger: if the request is under a length they chose, for example 200 tokens, the router is skipped and the request goes straight to the small model. For longer requests they automate routing to the small model only when confidence sits in bands that showed at least 95% observed accuracy. Anything below goes to the large model, which acts as the stronger fallback.

Fallback rate and savings are logged per day so the length cutoff can be revisited.

## Approval gate that never fully automates

**Scenario:**

Illustrative scenario: an agent proposes account credits and a decision model judges whether each proposal fits policy.

**Walkthrough:**

Illustrative scenario: the team prices a wrong approval as a direct financial loss and sets a required accuracy of 99.5% for automation. After a month of shadow data, no band reaches that level; the best band sits around 98%. Rather than lowering the bar, they use the decision to sort the queue: high-confidence approvals go to a reviewer with a one-click confirm, and low-confidence or rejected cases get a full review. Reviewer overrides are logged against the model and question version.

The branch stays in escalation, which is a legitimate outcome of calibration.
