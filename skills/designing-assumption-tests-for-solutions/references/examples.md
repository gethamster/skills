# Examples: Designing Assumption Tests for OST Solutions

## Three ways to help people share an article

**Scenario:**

Illustrative scenario: a trio at a local news site has three candidate solutions for the opportunity "I know someone who should read this article": social share buttons, emailing the full article, and a subscriber gift link.

**Walkthrough:**

The trio story-maps each solution and lists assumptions. Some are shared: readers want to share articles at all. Others are specific: readers will notice a gift link at the end of an article, recipients will open a forwarded email, emailed articles will get past spam filters.

On the assumption map, "readers want to share articles" is critical to all three and has little direct evidence, so the trio tests it once with data mining: how often do readers already copy article links? The spam filter assumption is a feasibility risk, so the engineer runs a short research spike. The gift link's discoverability gets a prototype test with a few readers. Each test has a pass line written on the board before anything runs.

## A test that fails cleanly

**Scenario:**

Illustrative scenario: a team at a fitness app believes members will book a coach session from inside a workout summary. The pass line, written in advance, is that at least half of a small group of members in a prototype test find the booking option without prompting.

**Walkthrough:**

In the prototype test, only one member out of the small group finds the option. Because the line was set beforehand, nobody argues that the result was "promising." The team records the assumption as refuted on the tree.

The trio does not drop the whole idea yet. The failed assumption was about discoverability, not desire, so it tests a new placement for the option in the next round alongside the other two candidate solutions.

## Covering the ethical category

**Scenario:**

Illustrative scenario: a trio at a lending app plans to nudge users toward a higher loan amount after approval, as one of three solutions for "I don't know how much I can afford to borrow."

**Walkthrough:**

When the trio walks the ethical category, it writes the assumption "Suggesting a higher amount will not push people into loans they cannot repay." It has no evidence for this, and the consequence of being wrong is serious, so the assumption lands in the riskiest corner of the map.

The trio mines existing repayment data for customers who borrowed near their approved maximum. The results show higher late-payment rates, so the team drops the nudge and concentrates on the two solutions that help customers see what they can afford.
