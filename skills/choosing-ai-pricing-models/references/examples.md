# Examples: Choosing Between AI Pricing Models

## Self-Serve Document Extraction Tool

**Scenario:**

Illustrative scenario: a seed-stage team sells invoice and receipt extraction to small accounting firms, mostly by card. Some firms process a few dozen documents a month and a few process thousands. The team currently charges a flat monthly fee and has noticed that its largest firms cost more to serve than they pay.

**Walkthrough:**

The team lists one value unit, documents processed, and finds that customers can count it from their own records. Cost variance is wide: the heaviest firm costs many times the median. Buyer fit favors something simple, since owners buy by card and dislike surprises. Scoring gives the highest total to a subscription with included documents and a per-document overage, with pure usage close behind. The team picks the hybrid, writes a one-sentence description for the pricing page, and records pure usage as the runner-up in case self-serve buyers later prefer paying only for what they use.

## Enterprise Support Automation

**Scenario:**

Illustrative scenario: a growth-stage company sells an AI support agent to large retailers through a sales team, with annual contracts approved by procurement. The product team wants per-resolution pricing because it matches the value story. Finance worries about forecasting revenue.

**Walkthrough:**

The team first tries to write a resolution definition a customer would sign. It settles on "the customer asks for no further help after the agent's last reply", modeled on published definitions in the market, and adds a dispute window. Attribution then scores reasonably well. Buyer fit is weaker, because procurement needs an annual number. The winning design is a platform fee with a committed block of resolutions per year and a published rate above the block. The decision note flags that the model depends on the definition holding up in the first quarter of disputes.

## Developer API for Code Review

**Scenario:**

Illustrative scenario: a company offers an AI code review API to engineering teams. Usage ranges from a few reviews a week to continuous review on every commit in large monorepos. Buyers are engineers with cloud budgets who are used to metered APIs.

**Walkthrough:**

Cost variance is the dominant criterion, so the team weights it most heavily. Seat pricing scores poorly because one busy repository can cost more than a whole small team. Buyers are comfortable with metering, so pure usage scores high on buyer fit. The team chooses usage pricing per review with volume discounts, plus a spend cap customers can set. It records seat plus usage as the runner-up for a future enterprise plan, where procurement may want a fixed base.
