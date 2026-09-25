# FAQ: Structuring Machine-to-Machine Decision Outputs

## Does machine readable AI decision outputs integration depend on a specific vendor's API?

No. The skill is about the contract on your side: which fields you accept, how you validate them and how you route on confidence. Vendor payloads are mapped into that contract by an adapter. That separation matters most when a provider's exact output format is not publicly documented.

## What fields should a decision contract include?

At minimum, include a decision type, the decision value, a required confidence, a contract version and a request identifier. Add an optional distribution over the alternatives when the model provides one, because it shows how close the runner-up was. Type each field strictly: enums for choices, bounded numbers for scores, booleans for yes or no decisions.

## How do I choose the confidence threshold for acting automatically?

Start conservatively and adjust from evidence. Log decisions, confidence and real outcomes, then look at how often decisions at each confidence level turned out correct. Set thresholds separately per decision type, and set them stricter where the action is costly to reverse. There is no universal threshold to copy from the public material.

## What should happen when a response fails validation?

Treat it as a failure, not something to repair. Send the case to an error or escalation path with the raw payload attached, and never act on a defaulted value. Track the rejection rate per decision type, because a spike usually signals a model or vendor change that needs an adapter fix.

## Can I keep the model's explanation text alongside the decision?

You can log any auxiliary text for human debugging, but no code path should read it to decide what to do. Decision models of this kind are described as returning decisions and probabilities rather than generated text, so the contract should not depend on prose at all. If a reviewer needs context, show the distribution and the input that produced the decision.
