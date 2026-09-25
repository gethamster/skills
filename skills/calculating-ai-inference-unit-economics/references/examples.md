# Examples: Calculating AI Inference Unit Economics

## Document Q&A With Retrieval

**Scenario:**

Illustrative scenario: a small team sells a contract Q&A tool to legal departments. Each question triggers an embedding call, a vector search and one generation call. The team has watched its model invoice grow each month but has never broken it down, and it wants to know what one answered question costs before it sets plan limits.

**Walkthrough:**

The team lists three request types: short factual questions, analytical questions that pull more context, and whole-document summaries. It samples a few hundred logged requests of each type and records input, output and cached tokens from the provider's usage fields. Summaries turn out to carry far more input than expected, because the full contract is sent each time. Pricing each type at the vendor's current rates shows summaries costing roughly ten times a short question. The team adds vector hosting and monitoring as fixed costs, divides them by monthly volume, and reconciles the total against last month's invoice. The first pass comes in well under the invoice; the gap turns out to be retries on timeouts, which the team then adds as a per-request cost. The final table shows that plan limits need to count summaries separately from questions.

## Writing Assistant With a Long System Prompt

**Scenario:**

Illustrative scenario: a solo developer runs a writing assistant with a long, fixed system prompt and short user inputs. There is no retrieval. The developer plans a flat monthly plan of $20 and wants to know how many rewrites per month that price can cover.

**Walkthrough:**

The developer measures two request types, quick edits and long drafts. Because the system prompt is identical on every call, most input tokens can be served from the prompt cache, which the vendor bills at a fraction of the base input rate. The developer models each request with and without caching and sees that caching roughly halves the cost of a quick edit, while long drafts are dominated by output tokens and barely change. The cost table then gives a cost per edit and per draft. Dividing the $20 price by a target margin gives a budget per user, which becomes the monthly allowance for drafts, with edits counted at a lower weight. The developer notes that the result depends on the cache hit rate and adds it to the list of numbers to watch.

## Self-Hosted Model With API Fallback

**Scenario:**

Illustrative scenario: a support automation company runs an open-weight model on rented GPUs for routine replies and sends hard cases to a frontier API. Finance asks what a resolved ticket costs, and the answer depends on how busy the GPUs are.

**Walkthrough:**

The team splits cost into two parts. For the self-hosted path, it divides the monthly GPU rental by the number of requests actually served, which makes the cost per request depend on utilization rather than tokens. For the API path, it prices tokens at the vendor's rates as usual. It then measures what share of tickets escalate to the API and how many model calls a resolved ticket takes on each path. The table shows that at current volume the GPUs sit idle much of the night, so each self-hosted request carries a large share of fixed cost. The team presents two numbers to finance: cost per resolved ticket at current utilization and at planned utilization, and notes that escalation rate is the variable that moves cost most.
