# FAQ: Batching and Parallelizing Decisions

## How many questions can I put in one batch?

The dossier's published measurement used a [13-question briefing](https://github.com/Foadsf/jev-for-engineers), which shows batches of that size working in practice. The real limit is independence and snapshot size, not a fixed count. Group every question that passes the independence test for a given snapshot, then confirm answer agreement on replayed data.

## Does batching change the answers I get?

In the one published comparison it did not: the batched run showed [no change in the answers](https://github.com/Foadsf/jev-for-engineers). That result does not transfer automatically to your questions. Replay recorded snapshots through both paths and check agreement per question, because a shift usually signals a hidden dependency or wording that leaks between questions.

## What should happen if one answer in a batch has low confidence?

Handle it through that question's own fallback or escalation path and act on the other answers normally. Each question returns its own [typed answer, per-option probability and confidence score](https://madewithjev.com/how-to-use-jev), so there is no reason to discard the batch. Only a failed or malformed call should trigger a fallback for every question at once.

## Is batching the same as running calls concurrently?

No. Concurrent calls still pay for a separate request per question and send the state each time, even if they overlap in time. Batching sends one request with one copy of the state, and Jev is described as answering the questions in [a single parallel pass](https://x.com/eng_khairallah1/status/2102767762829447540). Concurrency can help across tiers or across separate snapshots, but within a tier, batching is the simpler and cheaper option.

## How do I handle questions that need results from a tool call?

Put them in a later tier. Code runs the tool, writes the result into state, and the next tier is batched from the refreshed snapshot. Mixing pre-tool and post-tool questions in one call means some questions judge a state that is already out of date.
