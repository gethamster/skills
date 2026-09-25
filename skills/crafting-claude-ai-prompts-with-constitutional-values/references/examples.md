# Examples: Claude AI Prompts Built on Constitutional Values

## A landing page brief that kept asking for statistics

**Scenario:**

Illustrative scenario: a marketing team's prompt for landing pages says "write persuasive copy with strong statistics to build trust." Drafts come back either with vague claims ("many teams report...") or with a note from Claude that it has no data to cite.

**Walkthrough:**

The team realizes the prompt asks for evidence it never supplies. They add a sources block with the two figures they can support, each with its origin, and an instruction to use only those figures and to flag any other claim that would need data. They keep the request for persuasive copy, since that is a normal task.

The next draft uses both figures accurately and flags one sentence about time savings as unsupported. The team either finds a source for it or cuts it. Drafts now arrive ready for review instead of needing a fact-check pass that removes half the claims.

## A help article that read like marketing

**Scenario:**

Illustrative scenario: a support team uses the same prompt as marketing to write help articles. The drafts open with benefits and bury the steps readers came for.

**Walkthrough:**

The team rewrites the goal and audience: the reader is an existing customer who is stuck on a task and wants the steps in order, with the fix for the most common error. They add a short example of a good help article in example tags and a constraint with a reason: no promotional language, because readers arrive frustrated and want the answer.

The drafts change immediately. The prompt did not need more rules; it needed the reader and the purpose. The support team saves it as a separate template from the marketing one.

## A comparison page and a keyword instruction

**Scenario:**

Illustrative scenario: an SEO lead wants a comparison page to include a target phrase many times and adds "repeat the keyword in every section."

**Walkthrough:**

Claude's draft uses the phrase in every section, and the result reads awkwardly. The lead replaces the instruction with a reason-based one: use the phrase naturally in the title, the first paragraph and one heading, because that is how readers search, and otherwise write for clarity.

The revised draft reads well and still uses the phrase where it matters. The lead adds the same wording to the team's template library so other writers do not rediscover the problem.
