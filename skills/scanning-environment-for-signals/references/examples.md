# Examples: Scanning the Environment for Relevant Signals

## Product team catching churn early

**Scenario:**

Illustrative scenario: a product team of 6 people reports monthly retention as its main health metric and keeps learning about churn after it has happened.

**Walkthrough:**

The team pairs monthly retention, a lagging metric, with weekly active use of its core feature, a leading one. It adds support tickets and a customer feedback channel to its internal scan and a competitor changelog to its external scan. In one cycle the anomaly log shows three unrelated tickets mentioning slow exports, and weekly feature use dips in one customer segment. The observation note flags both without explaining them.

In Orient, the team connects them to a recent export change, well before the monthly retention number would have moved.

## Operations team scanning an unfamiliar source

**Scenario:**

Illustrative scenario: an operations team of 4 people watches uptime dashboards closely but has never tracked vendor or policy news.

**Walkthrough:**

During its scheduled source review, the team notices every source on its list is internal. It adds its main vendors' status pages and an industry policy newsletter to the external column. A few weeks later the newsletter mentions a proposed data residency rule that would affect one hosting region. Nothing in the internal dashboards would have shown this.

The team logs it as a weak signal and hands it to Orient, which gives it months rather than days to plan a response.

## Observing the result of a pricing test

**Scenario:**

Illustrative scenario: a small growth team runs a pricing page change and expects sign-ups to rise by a modest amount over 2 weeks.

**Walkthrough:**

Before launching, the team writes a one-line note of what it expects to see and which signal will show it. After the test, sign-ups rise as expected, but the anomaly log also shows an increase in refund requests from new accounts. Because the team treated its own action as a scanning target, it caught the side effect rather than celebrating the headline number. The observation note records both the intended and unintended result.

Orient then weighs whether the new page attracts the wrong customers.
