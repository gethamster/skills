# Examples: Applying Loop Termination and Continuation Rules

## Code-fix loop with a scope violation

**Scenario:**

Illustrative scenario: an agent is fixing a failing test suite in one service, with a budget of eight iterations and an allowed scope of that service's directory.

**Walkthrough:**

The pre-start rules define done as all tests passing, the build succeeding, and the diff touching only files inside the service directory. On iteration three the tests pass, but the verifier flags a change to a shared config file outside scope. The done check fails on the scope condition, so the loop does not exit as done even though the agent reports success. The failure rules treat a scope violation as an immediate stop, so the controller preserves state, records the out-of-scope file as the cause, and hands the run to the owning engineer.

The engineer reverts the config change, narrows the plan, and restarts from the saved state rather than from scratch.

## Research summary loop that stalls

**Scenario:**

Illustrative scenario: an agent compiles a summary of vendor contracts and must cite a source for each of twelve required fields, with a stall rule of two unchanged iterations.

**Walkthrough:**

The verifier counts fields with a valid citation after each iteration. Iterations one through four raise the count steadily, and each verdict is continue. Iterations five and six both end with the same two fields uncited and the same retrieval error in the log. The stall rule fires, so the loop stops instead of burning the remaining budget.

The handoff record lists the ten passing fields as partial progress and the two failing fields with the error, and a person supplies the missing documents so the loop can resume.

## Outbound email loop with an approval gate

**Scenario:**

Illustrative scenario: an agent drafts and sends follow-up emails to customers after support tickets close, with sending to external addresses marked as an approval-gated action.

**Walkthrough:**

Each iteration drafts one email and runs checks for correct recipient, ticket reference and tone rubric. When all checks pass, the next planned action is send, which matches the gated action type, so the verdict is pause rather than continue. The approver sees the draft, the ticket and the check results in one view. On approval the loop sends and continues to the next ticket; on rejection it records the reason and stops that item.

After a week the team reviews the run log and finds most rejections cite the same phrasing problem, so they add a check rather than widen the gate.
