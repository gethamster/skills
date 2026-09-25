# Examples: Deploying AI Agents for SEO and Keyword Research Automation

## Keyword expansion for a new product category

**Scenario:**

Illustrative scenario: an ecommerce team launching a line of trail running shoes asks the agent for keyword targets in the UK market, naming two competitor category pages.

**Walkthrough:**

The agent calls the keyword research function with the seed topic, market, language and both competitor URLs, and receives an invented set of 40 keyword records with volume and intent fields. It then calls SERP collection for the top five terms to see which page types rank. The persona tells it to group terms by intent, so it returns a category-page cluster and a buying-guide cluster. Every volume figure in the answer is tagged with the keyword tool as its source, and the practitioner spot-checks two against the provider dashboard.

## Refreshing an underperforming blog post

**Scenario:**

Illustrative scenario: a content lead submits a brief with an existing article URL that has slipped in rankings, asking what to change.

**Walkthrough:**

The agent runs keyword research on the article's topic, then passes the resulting records and the URL to the content-optimization function. That function, written by the team, extracts headings and body text and compares term coverage with competitor pages. The agent next calls the audit tool on the same URL and gets findings such as a missing meta description and a redirect chain. The final answer lists content gaps first and technical fixes second, each tied to the tool that surfaced it.

## Catching a silent registration failure

**Scenario:**

Illustrative scenario: after a refactor, the agent starts giving audit advice without any audit findings in the logs.

**Walkthrough:**

The developer checks the tool-call log and sees that no audit function was invoked on any run. Asking the agent to list its tools confirms the audit plugin is absent. The refactor had moved kernel setup into a new class and dropped the line adding the audit plugin. Restoring registration in the shared kernel fixes it, and the team adds a startup check that fails if expected plugins are missing.
