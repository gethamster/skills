# Examples: Checking Post-Action Results

## Code change verified by build and diff scope

**Scenario:**

Illustrative scenario: an agent is asked to rename a function across a small service and reports that all call sites were updated.

**Walkthrough:**

The expected outcome was written first: the old name no longer appears, the build passes, and the diff touches only the service's source directory. After the action, the verifier runs typecheck and the test suite, then searches the repository for the old name. It finds two remaining references in a script the agent missed, so the build passes but the search check fails. The diff check also shows an unrelated config file was reformatted, which is out of scope.

Both failures, with the file paths, go back into state for the next iteration. The agent's report of success is ignored in favour of this evidence.

## Invoice extraction checked field by field

**Scenario:**

Illustrative scenario: a cheap model extracts vendor, invoice number, date and total from a scanned invoice into a record.

**Walkthrough:**

Instead of asking whether the record looks right, the verifier asks one question per field: is this value present in the source text, and was it taken from the right part of the document. The vendor, number and date pass. The total field scores high on the question of whether it was lifted from unrelated text, because it matches a subtotal line. Only that field is flagged and escalated to a stronger model with the source attached.

The final record stores each field's verdict and score so a reviewer can see which value was corrected and why.

## Support ticket closure verified in the helpdesk

**Scenario:**

Illustrative scenario: an agent resolves a billing question, posts a reply and marks the ticket resolved.

**Walkthrough:**

The expected outcome lists three facts: the ticket status is resolved, a public reply from the agent exists in the thread, and the customer's account shows the promised credit. The verifier re-reads the ticket and the account after the action rather than trusting the tool responses. Status and reply check out, but the account shows no credit because the billing call timed out silently. The verdict is failed on one expectation, with the account read attached.

The loop reopens the ticket and retries only the credit step, instead of sending the customer a second reply.
