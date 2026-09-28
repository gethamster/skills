# Examples: Recovering from Verification Failures

## Code change failing a test suite

**Scenario:**

Illustrative scenario: an agent is asked to fix a bug in a billing module, and its first patch breaks a rounding test.

**Walkthrough:**

The verifier records the failing test name and assertion message in the progress file, along with the attempt number. The failure is classified as fixable because the assertion points at a specific function. The agent retries with the assertion text included in its input, and the second patch passes the rounding test but its diff touches a file outside the permitted scope. That scope violation is recorded and classified as blocked, since editing that file is on the approval list.

The loop stops and hands the case to an engineer with the goal, both diffs, both failures and the reason for the stop. The engineer approves the extra file, the decision is written into state, and the loop resumes verification.

## Document extraction with a flagged field

**Scenario:**

Illustrative scenario: a small model extracts invoice fields, and a per-field verifier flags the due date as possibly lifted from unrelated text.

**Walkthrough:**

The flag and the source passage are written into the case record. One retry with the flag attached produces the same date, which trips the stall rule. The case escalates to a larger model with the full history, and its extraction returns a different date. The same per-field verifier runs on the new result and passes.

The record shows one retry, one escalation and the final verified value, so an auditor can see why the expensive model was used.

## Support routing with an ambiguous request

**Scenario:**

Illustrative scenario: an agent must route a customer message, and the verification step finds that two queues fit equally well.

**Walkthrough:**

The verifier reports that both a refund queue and a fraud queue remain plausible. Because the policy treats unresolved ambiguity as blocked, no retry is attempted. The agent writes the message, both candidate routes and the verifier output into the ticket as a structured note. A support lead picks the fraud queue and adds a one-line reason.

That decision is stored in state, and the team later reviews such handoffs to refine the routing options.
