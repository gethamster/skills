# Examples: Structuring Shared Agent State

## Support triage agent that kept re-asking for order numbers

**Scenario:**

Illustrative scenario: a support agent routes incoming tickets and sometimes asks the customer for details. Reviewers notice it asks for the order number again after the customer has already replied with it.

**Walkthrough:**

The team inspects a stored decision and sees the snapshot only held the original ticket text, because replies were appended to a transcript the decision never read. They add a completed-work field listing actions taken, such as 'requested order number', and an evidence field that includes the extracted order number from the reply. The missing-information list now drops 'order number' once it arrives. The write-back step runs when the reply is parsed, before the next routing question.

On replay, the same ticket now routes to fulfilment instead of looping back to the clarification step.

## Coding agent retry decision after a failed test run

**Scenario:**

Illustrative scenario: a coding agent decides after each test run whether to retry the same fix, try a different approach, or escalate. It keeps retrying the same patch several times.

**Walkthrough:**

The snapshot recorded that tests were run but not which tests failed or that the same patch had already been tried. The team adds structured fields for the last test result and a list of attempted approaches, both written by the tool runner. The retry question now sees that the identical approach failed before and that new failing output exists. Decisions shift toward trying a different approach or escalating once attempts pile up.

Stored snapshots let the team confirm the change came from better state, not from a different model.

## Research agent scoring sources with scoped views

**Scenario:**

Illustrative scenario: a research agent scores retrieved passages for relevance and separately checks whether a proposed web fetch is allowed. Both questions were fed the entire research history.

**Walkthrough:**

The team keeps one canonical record holding the research goal, passages already reviewed, current evidence and open questions. They derive a relevance view with the goal, open questions and the passage under review. They derive a gate view with the proposed URL, the allowed domain list and the run's permission scope as typed fields. Both views come from the same snapshot, so the relevance and fetch decisions agree on which questions are still open.

Reviewers can now read a single view and see exactly why a passage scored low.
