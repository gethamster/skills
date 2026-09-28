# Examples: Chaining Prompts and Composing LLM Workflows

## Summarize then extract keywords

**Scenario:**

Illustrative scenario: a content team wants each long article turned into a short summary and a list of search keywords for tagging.

**Walkthrough:**

The first link uses a template with source_text and audience variables, calls the model and parses the reply as plain text. A mapping step builds a new dictionary containing the summary plus the original audience value. The second link's template asks for keywords from the summary and parses the reply into a list. The team invokes the first link alone on a few saved articles, confirms the summaries read well, then adds the second link.

A test asserts that the final output is a non-empty list of strings rather than checking exact keywords.

## Fan-out review of a support ticket

**Scenario:**

Illustrative scenario: a support tool needs a sentiment label, a product area and a suggested reply draft for each incoming ticket.

**Walkthrough:**

Sentiment and product area do not depend on each other, so they run as parallel branches on the same ticket text, each with its own template and structured parser. Their results merge into one dictionary alongside the original ticket. A final link reads all three values and drafts a reply in the right tone. Tracing shows which branch is slowest, and the team can swap the model for the classification branches without touching the drafting prompt.

The workflow stays a chain because nothing loops back.

## Recognizing when a chain should become a graph

**Scenario:**

Illustrative scenario: a report generator chain drafts a section, then the product owner asks for a quality check that sends weak drafts back for rewriting until they pass.

**Walkthrough:**

The developer first writes a loop around the chain invocation with a counter and a list of previous attempts. Reviewing the sketch, they see a backward arrow and state that must persist between attempts. They move the draft, check and rewrite cycle into a stateful graph, with each node invoking an existing chain. The linear preprocessing links stay as plain chains.

The loop is now visible as graph structure rather than buried in application code.
