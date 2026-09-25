# FAQ: Kanban Flow Metrics

## What is the difference between lead time and cycle time?

It depends on the source. The Kanban Guide uses cycle time for the time from started to finished. Kanban University's guide uses lead time for the time from the commitment point to completion and customer lead time for the time from request to delivery. Choose definitions, write them on the board and use them consistently.

## My tool does not record column timestamps. What can I do?

Record at least the start and finish date on each card, by hand if necessary. That is enough for cycle time, throughput and work item age. For a cumulative flow diagram, count the cards in each column at the same time each day and keep the counts in a spreadsheet.

## How should blocked time be handled?

Keep it inside cycle time, because the customer waits either way. Mark blocked items visibly and record how long they were blocked so you can see how much delay comes from blockers. Removing blocked time from the metric makes the system look faster than it is.

## Why does throughput swing so much from week to week?

Items differ in size, arrivals vary, and holidays and incidents affect capacity. Look at throughput as a range over several weeks. If the swings are extreme, check whether large items are mixed with small ones or whether work is released in batches.

## Can flow metrics forecast when a specific feature will be done?

For one item, the SLE gives a probability-based answer from your cycle time history. For a batch of items, throughput history can be used to forecast how many items will finish in a period. Forecasts are only as good as the stability of the system, so revisit them as new data arrives.

## How many weeks of data do we need?

There is no fixed amount. A few weeks of finished items gives a rough picture, and the SLE becomes more reliable as history grows. The Kanban Guide says a best guess will do until there is enough history for a proper SLE calculation.
