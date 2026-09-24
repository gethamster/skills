# Examples: Implementing Agent Planning Strategies for Complex Tasks

## Migrating a report generator off the Stepwise planner

**Scenario:**

Illustrative scenario: an internal analytics agent used the Stepwise planner to answer questions like 'summarize last month's churn by region'. A package upgrade fails because the planner no longer exists.

**Walkthrough:**

The team inventories the planner call and finds it could use three functions: query metrics, group by dimension, and format summary. The old planner prompt contained a rule to always state the date range, which they move into the persona. They register the three functions on the kernel, enable automatic function calling in execution settings, and invoke the chat-completion service with the history and kernel. The trace for the saved test goal shows query, then group, then format, matching the old behavior.

One test fails because the model skipped grouping for a single-region question, which the team accepts as correct behavior after review.

## Fixing a plan that invents values

**Scenario:**

Illustrative scenario: a support agent answers 'what is the refund status for my last order?' with a plausible status, but traces show it never called the order lookup function.

**Walkthrough:**

The refund function accepted a free-text order description, so the model called it directly with a guessed description. The team changes the refund function to require an order ID and describes the lookup function as the way to obtain one. They add a persona instruction that refund answers must come from the refund function's result. On rerun, the trace shows lookup first, then refund status with the returned ID.

The final answer now matches the function output exactly.

## Scoping tools for a multi-purpose assistant

**Scenario:**

Illustrative scenario: an operations assistant has 40 registered functions across billing, inventory and HR. Plans for inventory questions sometimes call billing functions.

**Walkthrough:**

The team adds a lightweight classifier step in application code that labels each request as billing, inventory or HR. Only the matching plugin, plus a shared lookup plugin, is registered on the kernel for that request. Inventory plans now choose among eight functions instead of forty. Traces show irrelevant calls disappear and fewer rounds are needed per request.

The team logs classifier decisions next to traces so misroutes can be spotted separately from planning faults.
