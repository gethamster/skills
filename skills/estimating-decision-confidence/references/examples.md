# Examples: Estimating Decision Confidence

## Auto-routing support tickets by queue

**Scenario:**

Illustrative scenario: a support team uses a model to route incoming tickets to one of six queues and wants to skip manual triage when the model is confident.

**Walkthrough:**

The team writes the six queues as the candidate set, plus an unknown option, and defines correct as the queue the ticket was finally resolved in. Every routing decision is logged with the ticket ID, queue chosen, full probability distribution and model version. After a month of made-up data, they group records by probability range for each queue. Technical tickets labeled in the top range were right nearly as often as stated, but billing tickets in the same range were right noticeably less often.

They enable auto-routing for technical tickets only, keep billing on manual triage, and keep sampling auto-routed tickets so outcomes keep flowing.

## Replacing self-reported confidence in duplicate detection

**Scenario:**

Illustrative scenario: a finance team asks a model whether two invoices are duplicates and has it write down a confidence, which almost always comes back as very high.

**Walkthrough:**

Because nearly every self-report sits in the same narrow high band, the score cannot separate easy pairs from hard ones. The team switches to reading the model's output scores over the two candidates, yes and no, and logs both sources side by side for a few weeks. Once auditors confirm the true answer for each pair, they compare stated confidence with observed accuracy for each source. The score-based probabilities spread across ranges and track outcomes more closely, while the self-reports stay flat.

They retire the self-report field and use the score-based probability for routing.

## Explaining a confident miss to stakeholders

**Scenario:**

Illustrative scenario: a content moderation model marked a post as safe with a very high probability, the post turned out to violate policy, and stakeholders want to stop trusting high scores entirely.

**Walkthrough:**

The reviewer pulls every logged decision of that decision type in the same high probability range, with outcomes attached. In the made-up data, those decisions were correct at a rate close to their stated probability, which means the miss was one of the expected share of errors rather than a sign of breakdown. The reviewer explains that calibration speaks to groups of decisions, not guarantees on any single one. Instead of disabling automation, the team adds a lightweight spot check on a small sample of high-confidence approvals and makes approvals reversible for a short window.
