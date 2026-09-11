# Examples: Writing Compelling Vision and Values Statements

## Example: Early-Stage B2B SaaS Startup (10-Person Team)

**Scenario:**

A seed-funded project management tool for design agencies has 50 paying customers, $15K MRR, and a six-month runway. The CEO is writing the company's first V2MOM for Q3-Q4 to align the entire team of 10 on what matters most. The competitive landscape includes three well-funded alternatives. The team needs to find product-market fit before the next fundraise.

**Walkthrough:**

The CEO gathers inputs: customer interview transcripts showing that design agencies love the visual timeline feature but churn when they outgrow the free tier, NPS data showing a score of 42, and investor feedback emphasizing the need for clear growth metrics before a Series A. " For values, the brainstorm produces: speed to market, customer love, hiring great people, technical quality, and revenue growth. "), the ranked list becomes: (1) Customer retention: reduce churn to under 5% monthly by solving the top three reasons customers leave. (2) Speed to market: ship one meaningful feature per sprint, cutting scope rather than slipping dates.

(3) Revenue growth: prioritize features that expand seat count within existing accounts over net-new acquisition features. , a retention-critical bug requires pausing feature work), retention wins. This V2MOM gives every team member a clear basis for daily prioritization decisions without waiting for CEO approval.

## Example: Enterprise Product Division (150-Person Team)

**Scenario:**

A VP of Product at a mid-market enterprise software company is writing the annual V2MOM for a 150-person product and engineering division. The division manages three product lines, two of which are mature and one is a recent acquisition. The company's board-level V2MOM emphasizes profitability over growth for the upcoming year. Cross-functional alignment between product, sales, and customer success has been a recurring challenge.

**Walkthrough:**

The VP gathers inputs from the board-level V2MOM (which emphasizes operating margin improvement), the last two quarters of product analytics (showing the acquired product has 60% lower engagement than the core products), sales pipeline data (showing 40% of deals involve multi-product bundles), and exit interview themes from three senior engineers who cited "unclear priorities" as a reason for leaving. " Values after consolidation and ranking: (1) Platform integration: every feature decision must move toward a single integrated experience, not three separate products. (2) Margin discipline: no new project is approved without a clear path to positive unit economics within two quarters. (3) Customer retention: invest in reducing churn of existing high-value accounts over acquiring new logos.

(4) Engineering velocity: reduce time-to-ship by eliminating cross-team dependencies, not by adding headcount. (5) Talent retention: make priority clarity a competitive advantage in recruiting. The conflict scenario between values 1 and 2: "The integration project will cost $500K in engineering time with no direct revenue impact for 6 months. " Answer: Yes, because integration (value 1) outranks margin discipline (value 2), and the long-term margin improvement from reduced maintenance costs justifies the short-term investment.

This clarity prevents months of back-and-forth between product managers arguing for their own product line.

## Example: Consumer Mobile App (Cross-Functional Squad)

**Scenario:**

A squad lead at a consumer fintech company is writing a quarterly V2MOM for a cross-functional squad of 8 (2 designers, 3 engineers, 1 data analyst, 1 PM, 1 QA). The squad owns the savings product within a broader personal finance app. The company-level V2MOM emphasizes user growth and engagement. The squad's previous quarter was spent on technical debt, and leadership is expecting visible user-facing progress this quarter.

**Walkthrough:**

The squad lead reviews the company V2MOM (emphasizing DAU growth to 500K), the squad's backlog (37 tickets, 12 of which are carryover tech debt items), user research from the last round of interviews (users want automated savings rules but find the current manual process confusing), and analytics showing that only 18% of app users have activated the savings feature. " Values: (1) User simplicity: every interaction must be completable in under 3 taps, and we cut features before adding complexity. (2) Activation over depth: prioritize getting more users into savings over adding advanced features for power users. (3) Shipping cadence: release to production at least every two weeks, using feature flags to decouple deployment from launch.

The conflict test between values 1 and 2: "Users request a feature to customize savings rule thresholds, but adding it requires a settings screen with 5 input fields. " Answer: No, because user simplicity (value 1) outranks activation (value 2), and a complex settings screen will reduce the activation rate we are trying to grow. Instead, ship smart defaults that work for 80% of users. This V2MOM keeps the small squad focused and prevents scope creep from well-intentioned feature requests.

## Example: Internal Platform Team (Non-Revenue Function)

**Scenario:**

An engineering manager leads an internal developer platform team of 12 engineers at a 500-person company. The team builds shared infrastructure (CI/CD pipelines, internal APIs, monitoring tools) used by all other engineering teams. The team has no direct revenue and often struggles to articulate its value in business terms. The previous quarter saw two major incidents caused by teams using the internal platform incorrectly.

**Walkthrough:**

The EM gathers inputs: incident post-mortems (both incidents traced to undocumented API changes), developer experience survey results (NPS of internal platform is 22, with "hard to find documentation" as the top complaint), and the CTO's V2MOM (which lists "engineering efficiency" as value 2). " Values: (1) Reliability: never ship a platform change without a rollback plan and migration guide. Any change that risks a P1 gets an additional review cycle. (2) Self-service: build documentation and guardrails into the platform itself rather than relying on Slack support.

Every new API ships with a runbook. (3) Developer speed: measure success by how fast product teams ship, not by how many platform features we release. (4) Transparency: publish weekly platform health metrics and roadmap updates to all engineering. The conflict test: "A product team urgently needs a new API endpoint, but shipping it without documentation would violate the self-service value.

" Answer: No, because reliability (value 1) and self-service (value 2) both outrank developer speed (value 3). Ship the endpoint with at minimum a runbook, even if it takes an extra day. This decision framework prevents the platform team from becoming a firefighting bottleneck.
