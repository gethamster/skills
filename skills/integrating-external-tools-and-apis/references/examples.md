# Examples: Integrating External Tools and APIs into LangChain

## Order lookup tool for a support agent

**Scenario:**

Illustrative scenario: a support team wants its agent to answer "where is my order?" questions using an internal orders API that returns a large nested JSON document.

**Walkthrough:**

The developer writes a get_order_status function that takes a single typed order_id argument and injects the API client at build time. They decorate it with @tool and describe it as returning shipping status, carrier and estimated delivery for one order, to be used only when the customer supplies an order ID. The return value is trimmed from the full API document to four fields. In testing, the agent asks the customer for an order ID when none is given instead of guessing one.

When the orders API is pointed at a dead endpoint, middleware returns a short message saying the lookup is temporarily unavailable, and the agent tells the customer to try again rather than inventing a delivery date.

## Splitting a generic database tool

**Scenario:**

Illustrative scenario: an analytics agent has one run_sql tool that accepts arbitrary query text, and it keeps writing queries against tables that do not exist.

**Walkthrough:**

The team replaces run_sql with three narrow tools: revenue_by_month, top_customers and churn_for_segment, each with typed parameters such as a start month and a segment chosen from a fixed list. Each description states which question it answers and which it does not. The queries themselves now live in code, so the model only supplies validated parameters. Misrouted calls drop because the descriptions make the choice obvious.

The team also closes a security gap, since the agent can no longer issue free-form SQL against production.

## Recoverable errors for a ticketing API

**Scenario:**

Illustrative scenario: an internal IT agent creates tickets through an API that rejects requests with an unknown priority value, and the agent keeps failing silently.

**Walkthrough:**

The developer constrains the priority argument to the values the API accepts, so most bad calls are blocked by the schema. For the remaining validation errors, middleware converts the API's rejection into a message naming the invalid field and the allowed format. On the next turn the model corrects the argument and the ticket is created. Authentication failures are treated differently: middleware stops the run and flags it for an administrator, because retrying cannot fix an expired credential.
