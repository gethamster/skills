# Examples: Separating Generation from Decision-Making

## Support triage agent

**Scenario:**

Illustrative scenario: a support agent reads each incoming ticket, drafts a reply, assigns a queue, and issues refunds under a policy cap, all through one large prompt.

**Walkthrough:**

The team logs one run and finds the prompt doing four jobs. Drafting the reply is labeled text and stays with the LLM. Choosing among the billing, technical and account queues is labeled decision, because the options are fixed but picking one requires reading the ticket. Calculating the refund and checking it against the cap are labeled rule and moved into code with tests.

Queue assignment runs on every ticket, so it becomes the first migration candidate, while the refund path stays in code behind validation.

## Research assistant with source filtering

**Scenario:**

Illustrative scenario: a research agent fetches a batch of web pages per query, asks an LLM to judge each page's relevance in prose, then writes a summary from the pages it liked.

**Walkthrough:**

The audit shows the relevance step producing paragraphs that code then parses for words like relevant. The team relabels it as a decision with three options: relevant, partially relevant, not relevant. The summary remains text for the LLM. Deduplicating pages by URL and counting sources are labeled rules and moved to code.

Because relevance runs once per page, far more often than summarization, it is chosen as the first operation to migrate.

## Coding agent retry loop

**Scenario:**

Illustrative scenario: a coding agent runs tests after each edit, and on failure an LLM writes a long explanation that ends with a recommendation to retry, change approach, or ask a human.

**Walkthrough:**

The team splits this call in two. The explanation is text and stays optional for logs. The recommendation is a decision with a fixed option list, including an escalate option, so it is labeled for Jev. Parsing test output for pass or fail counts is a rule and moves to code.

Applying the edit and running tests stay with the tool runner behind argument checks. The retry decision runs after every failed test, so it becomes the first migration candidate.
