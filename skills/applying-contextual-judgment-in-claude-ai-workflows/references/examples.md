# Examples: Claude Constitutional Reasoning in AI Workflows

## A comparison page that has to be candid

**Scenario:**

Illustrative scenario: a small software company wants a page comparing its product with a larger, better-known competitor. The existing prompt says "highlight our strengths, keep it positive, mention the competitor by name." The first drafts read like ads and one of them states a competitor limitation nobody on the team can confirm.

**Walkthrough:**

The team rewrites the prompt around the goal: help evaluators who already know the competitor decide whether the smaller product fits their case. It adds the reason for candor (poor-fit trials cost the support team time) and a priority (an unsupported claim about the competitor is worse than a missing one). It supplies the competitor's public documentation as the only allowed source for competitor claims.

Claude's next draft includes a short section on cases where the competitor is the better choice and marks two claims it could not verify from the documentation. The team removes those two claims and publishes after legal review. The prompt now carries the goal, the reason and the source rule, so later comparison pages start from the same footing.

## An unattended pipeline that keeps stopping to ask

**Scenario:**

Illustrative scenario: an overnight job asks Claude to write meta descriptions for a batch of product pages. Many outputs come back as questions ("Should I mention the price?") instead of descriptions, and nobody is awake to answer.

**Walkthrough:**

The prompt never said the job was unattended. The team adds one paragraph: this runs without a human, so do not ask questions; choose the most plausible reading, write the description, and record any assumption in a separate notes field. It also states the priorities that were missing: accuracy to the page first, then clarity, then including the product name.

The next run produces descriptions for every page, and the notes field shows a handful of pages where the product data was contradictory. A reviewer checks only those pages in the morning. The fix was context about the deployment, which is what the constitution says Claude needs to choose sensible defaults.

## A research summary with a conflicting instruction

**Scenario:**

Illustrative scenario: an analyst asks Claude to summarize customer interviews "in the most positive light for the board deck." Several interviews describe a serious onboarding problem.

**Walkthrough:**

Claude drafts the summary but notes up front that leaving out the onboarding problem would give the board a misleading picture, and offers a version that leads with the positives and includes the problem in one clear paragraph. The analyst reads the reasoning and agrees: the board will hear about onboarding from the sales team anyway.

The team then updates its standing research prompt. It keeps the request for a confident, readable tone and adds that material risks must always appear, with the reason (the board relies on these summaries for decisions). Future summaries carry the risk section by default, and the question no longer comes up each time.
