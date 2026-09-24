# FAQ: Separating Generation from Decision-Making

## How do I tell a decision from a rule?

Ask whether the answer is fully determined by structured data you already have. If a plain conditional over known fields would produce the right answer every time, it is a rule and belongs in code. If you need to understand unstructured text to pick among known options, it is a decision. When in doubt, try writing the conditional; if you cannot, it is probably a decision.

## Can one LLM call be both text and a decision?

Yes, and that is the most common finding in an audit. A call that picks a tool and writes a message is doing two jobs. Split it so the pick becomes a typed decision and the message remains generation, with code validating anything that gets executed. Each piece then gets its own owner and can be tested on its own.

## Why migrate the most frequent decision first?

[The method documentation](https://madewithjev.com/what-is-jev-engineering) recommends it because frequency multiplies any per-call savings and quickly produces examples you can evaluate. A rare decision gives you little evidence and little payoff. Among frequent candidates, prefer one that is low-risk so early mistakes are cheap.

## Does moving a decision to Jev remove the need for validation in code?

No. [The method documentation](https://madewithjev.com/what-is-jev-engineering) notes a typed decision can still be wrong, and [Vercel's guidance](https://vercel.com/i/jev-agent-control) keeps permission checks and argument validation in application code before tools run. The decision chooses; code still enforces the exact rules around the action.

## What should stay with the LLM after the split?

Anything whose correct output is open-ended: briefings, emails, code, explanations and syntheses, as [a practitioner guide](https://x.com/eng_khairallah1/status/2102767762829447540) describes. The LLM's prompts usually get shorter because routing, scoring and exact logic have moved out. That makes generation failures easier to diagnose too.
