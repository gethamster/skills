# Examples: Representing Current Agent State

## Refund triage state

**Scenario:**

Illustrative scenario: a support team routes refund requests with an AI judgment step and wants every decision to be reviewable later.

**Walkthrough:**

The team defines state as an object with three fields: the customer's message as text, the last few transactions as an array, and the refund policy text. For each ticket, code builds this object and asks independent questions against it, such as whether the request falls within policy. After the refund action, the payment system's response is written into a history field, together with the verifier's verdict. The whole object is saved as a database checkpoint keyed by ticket ID.

When a reviewer questions a decision a week later, they load the checkpoint and see exactly what the model saw. When a ticket is reopened, the next run starts from that checkpoint rather than from the chat transcript.

## Code-fixing loop with a progress file

**Scenario:**

Illustrative scenario: an agent works through a list of 8 failing tests in a repository across several sessions.

**Walkthrough:**

The team keeps a progress file in the repo with the goal, the list of tests, each test's status, and a history of attempted fixes with their test output. Each iteration loads the file, picks one failing test, applies a change, reruns the suite and records the actual output. When test 3 still fails after a fix, the failure output goes into history before the retry, so the next attempt can see what did not work. The session ends after 5 tests pass.

The next morning a fresh session reads the file, sees 3 remaining, and skips the fixes already rejected. No context from the previous session is needed.

## Handoff through an issue comment

**Scenario:**

Illustrative scenario: a data-cleanup agent must stop and hand a batch to a person when its verifier flags ambiguous records.

**Walkthrough:**

Machine state lives in a checkpoint with record IDs, the cleanup rule applied, and verifier results per record. When 12 of 400 records fail verification twice, the loop stops retrying them. It writes a summary into an issue comment: the goal, what was done, which records failed, and the verifier evidence for each. The engineer who picks it up reads the comment, fixes the rule for those records, and marks them resolved in the checkpoint.

The next run loads the checkpoint, skips the resolved records, and continues. Having both artifacts lets the machine and the person work from the same facts.
