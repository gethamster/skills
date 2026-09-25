# Examples: Claude Topic Clusters with Constitutional Alignment

## A cluster that shrank before it was written

**Scenario:**

Illustrative scenario: a company that sells scheduling software wants a cluster around "employee shift scheduling." Claude's first pass produces a long list of candidate pages, many of them variations such as "shift scheduling tips," "shift scheduling best practices" and "how to schedule shifts better."

**Walkthrough:**

The team asks Claude which candidates a reader would treat as the same question. Claude merges the three variations into one page about building a fair weekly schedule and explains that the three differ only in wording. It also suggests that "what is shift scheduling" belongs on the pillar page as an opening section rather than on its own page.

Search Console data then removes two more candidates with no measurable demand and no internal use. The final plan is a pillar and a handful of cluster pages, each with a distinct reader question and a line of evidence. The writers start with fewer pages and none that compete with each other.

## Search data that changed the page type

**Scenario:**

Illustrative scenario: a finance blog plans a cluster page on "how much house can I afford," written as an article.

**Walkthrough:**

When the team checks the live results, the top results are all calculators. Claude had proposed an explanatory article because the prompt asked for articles. The team updates the brief: the page becomes a simple calculator with a short explanation of its assumptions and a link to the pillar on mortgage basics.

They add a line to the prompt template asking Claude to note when a question is usually answered by a tool, so future plans flag this before the data check. The change came from the data step, which is why that step sits between planning and writing.

## Overlap found only after drafting

**Scenario:**

Illustrative scenario: a developer tools company has drafted a pillar on API authentication and several cluster pages. Two drafts, one on token expiry and one on refresh tokens, turned out longer than planned.

**Walkthrough:**

Claude compares the drafts side by side and reports that both pages spend most of their length explaining the same token lifecycle. It proposes merging them into one page on the token lifecycle and keeping a short section on expiry errors in the troubleshooting page.

The subject expert agrees, the pages are merged, and the linking plan is updated so every former link points to the combined page. The cluster now has one strong page on the topic instead of two that split attention.
