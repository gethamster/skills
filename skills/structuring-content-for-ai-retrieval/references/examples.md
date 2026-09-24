# Examples: Structuring Content for AI Retrieval

## Splitting an overloaded product page

**Scenario:**

Illustrative scenario: a software company's single product page covers features, pricing, setup and a comparison with rivals, and it rarely appears in AI answers for any of those questions.

**Walkthrough:**

The team lists the questions buyers ask an assistant and finds four distinct needs mixed on one page. They keep the product page focused on what the tool does and move setup, pricing and the comparison into separate pages, each with headings that map to its own questions. Every section is rewritten to name the product explicitly and answer its question in the opening sentences. They build a small prompt set for each new page and run it several times on each engine they target.

Over the following weeks they track whether each page is cited at all, before looking at how much of the answer it contributes.

## Finding a blocked crawler

**Scenario:**

Illustrative scenario: a publisher's in-depth guides score well in internal quality reviews but never show up as sources in generative answers.

**Walkthrough:**

Before touching the writing, an editor runs the access check. The robots file contains a broad rule added during a past migration that blocks several AI crawlers, and some guides render their main text only after scripts load. The team narrows the robots rule to the paths they actually want excluded and moves the core text into the delivered HTML. They record the new configuration and add the access check to their release checklist.

Only after the guides start appearing for their target prompts do they begin representation work.

## Catching a rewrite that hurt retrieval

**Scenario:**

Illustrative scenario: a health information site rewrites a symptoms page to add expert quotations and study references, hoping to be cited more often.

**Walkthrough:**

The editor saves a baseline by running the page's prompts several times and noting how often it is cited. After the rewrite, answers that still cite the page quote it more fully, but the page now appears for fewer of its prompts. Reviewing the new version, the editor sees the direct answers to the core questions have been pushed below long introductory quotations. They restore the direct answers to the top of each section and move the quotations beneath them as support.

A rerun of the same prompts shows inclusion back near baseline, and the team keeps the revised structure.
