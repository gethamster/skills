# Examples: Designing Schema-Constrained Decisions

## Support ticket routing

**Scenario:**

Illustrative scenario: a support platform wants a model to route incoming tickets to one of its queues instead of having an agent triage them manually.

**Walkthrough:**

The team starts from actions: each queue is a code path, so the answer space becomes an enum of billing, technical, account_access and shipping, plus needs_review for anything else. Two labelers tag 50 historical tickets and disagree on 9, mostly between account_access and technical, so the team rewrites both definitions to separate login failures from product bugs. The context schema includes subject, body, customer plan and product area, but excludes the resolving agent's queue because it is set after routing. Each training example carries the ticket state, the question which queue should handle this ticket, the correct queue and the schema.

In production, any response outside the enum is rejected and any legal answer below the chosen threshold goes to a human triager.

## Invoice approval as a yes/no decision

**Scenario:**

Illustrative scenario: a finance team wants invoices under a set amount to be approved automatically when they match an existing purchase order.

**Walkthrough:**

The team defines yes operationally: the vendor, amount and line items match an open purchase order within an agreed tolerance. Everything that is not clearly yes is no, and no always routes to a clerk, so no separate fallback is needed. The output schema has a boolean approve field and a numeric probability field, with no free-text reason. Instead, a reason_code enum covers vendor_mismatch, amount_mismatch, missing_po and other for rejected cases.

Ground-truth labels come from past clerk decisions, and the team discards historical cases where the approval was later reversed for reasons invisible at decision time.

## Lead scoring on a bounded scale

**Scenario:**

Illustrative scenario: a sales team wants each inbound lead scored so the highest-priority ones reach a rep first.

**Walkthrough:**

The team chooses a score rather than a choice because reps work leads in order, not by bucket. They define the score as an integer from 1 to 5 and write what each endpoint means in terms of outcome: 5 means likely to book a meeting within two weeks, 1 means unlikely to respond. Because the meaning is tied to an observable outcome, each historical lead can be given a correct score from what actually happened. The context schema lists company size, source channel and pages viewed, all available when the lead arrives.

After launch, the team notices many leads cluster at 3 and escalations pile up there, which prompts them to review whether the middle of the scale is defined sharply enough.
