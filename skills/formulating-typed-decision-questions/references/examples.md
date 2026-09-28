# Examples: Formulating Typed Decision Questions

## Splitting a compound support question

**Scenario:**

Illustrative scenario: a support team's first draft asks one Noul question, "Is the customer upset and requesting a refund?", and routes anything above a made-up 0.7 to billing.

**Walkthrough:**

The team notices calm refund requests landing in the general queue because the combined probability stays low when the customer is not upset. They split the draft into two Noul questions, requests_refund and customer_upset. Code now routes on requests_refund alone and uses customer_upset only to raise priority. Both questions are batched against the same message in one request.

After rerunning an invented sample of 40 tickets, calm refund requests reach billing as intended.

## Choosing between Choice and Score for triage

**Scenario:**

Illustrative scenario: an operations team wants to triage incoming bug reports and first writes a Score question rating severity from one to ten.

**Walkthrough:**

Their code only has three queues: fix now, next sprint and backlog. Mapping a ten-point score onto three queues forces arbitrary cut-offs that nobody can defend. They replace it with a Choice question whose three options match the queues exactly, each with a one-line definition. They keep a separate Score for customer impact because the backlog is sorted by it.

Each answer now maps directly to a handler with no conversion step.

## Defining the uncertain band before launch

**Scenario:**

Illustrative scenario: a team adds a Noul question, contains_personal_data, to screen documents before they are shared externally.

**Walkthrough:**

Before the first run they write the interpretation rule beside the question: above an example 0.85 blocks sharing, below 0.2 allows it, and anything between goes to a reviewer. They choose a wide review band on purpose because a missed case is costly. On a small invented test set, several documents fall in the middle band and reviewers confirm most contain names in footers. The team rewords the question to mention names and contact details explicitly and reruns.

The review band narrows in practice without changing the thresholds.
