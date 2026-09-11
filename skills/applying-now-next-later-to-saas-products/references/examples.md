# Examples: Applying Now-Next-Later Roadmaps to SaaS Products

## Example: Early-stage B2B SaaS with 50 customers

**Scenario:**

A 10-person startup building a project management tool for agencies has 50 paying customers, a single product manager, and a 4-person engineering team shipping weekly. They receive about 20 feature requests per week through Intercom and direct sales calls. The founder has been personally prioritizing requests based on whoever asked most recently, leading to context-switching and half-finished features.

**Walkthrough:**

The PM audits all sources and assembles a flat list of 38 items from Intercom tags, a Notion backlog, and the founder's email. She defines horizons: Now is "in development this week or next, fully specced" (capacity for 3-4 items), Next is "validated by 3+ customer conversations, design in progress" (8-12 items), and Later is "interesting signal, needs more evidence" (uncapped). She builds a simple scoring rubric in a spreadsheet with four columns: customer impact (weighted by MRR of requesting accounts), strategic alignment with their current focus on collaboration features, effort (S/M/L from the lead engineer), and confidence (evidence level 1-5). After scoring all 38 items, she places 4 in Now, 11 in Next, and 18 in Later, declining 5 that do not align with the product direction.

The biweekly review immediately reveals that 3 items in Next have enough evidence to graduate, which gives the team a clear pipeline for the following sprint. The founder stops ad-hoc reprioritizing because the rubric provides a shared language for why items are where they are.

## Example: Growth-stage B2B SaaS with 500 accounts

**Scenario:**

A 40-person company selling an analytics platform to e-commerce brands has 500 accounts across three segments: self-serve ($49/mo), mid-market ($499/mo), and enterprise ($5,000/mo). They have two product managers, 15 engineers in three squads, and deploy continuously. Feature requests come from Zendesk (support), Salesforce (sales), Productboard (PM research), and quarterly customer advisory board meetings. The roadmap has historically been a quarterly Gantt chart that is outdated by week 3.

**Walkthrough:**

The PMs consolidate requests from all four sources into Productboard, tagging each with segment and estimated ARR impact. They define horizons: Now covers the current two-week cycle per squad (3-5 items per squad, 9-15 total), Next covers items in discovery or design with engineering estimates complete (15-25 items), and Later captures themes from the advisory board and emerging usage patterns (30-40 items). 5x versus self-serve. During the first scoring pass, they discover that 60% of self-serve requests cluster around a single theme (better onboarding), which, aggregated, rivals enterprise request impact.

This insight promotes the onboarding theme from Later to Next as a single initiative rather than 12 individual requests. Each squad runs its own biweekly review for its Now column, while the PMs run a cross-squad review monthly to manage Next and Later. After two months, the team reports that sprint commitments feel more realistic because Now is explicitly scoped to capacity, and sales reps stop escalating because they can see their customer's request in Next with clear graduation criteria.

## Example: PLG SaaS with 10,000 free users and 800 paid

**Scenario:**

A product-led growth SaaS offering a design tool has 10,000 free-tier users and 800 paid users at $19/mo. The team is 6 engineers and 1 PM. Feature requests come overwhelmingly from free users through an in-app feedback widget, creating a volume problem: 200+ requests per month. The paid users rarely submit requests but churn at 8% monthly, and exit surveys cite missing features.

The PM cannot figure out what to build because the signal-to-noise ratio in the feedback is terrible.

**Walkthrough:**

The PM starts by separating signal sources. She pulls churn survey data from the last 6 months, in-app feedback from paid users only, and usage analytics showing feature adoption rates. Free-tier feedback goes into a separate "signal watch" queue reviewed monthly for patterns, not into the main roadmap intake. She defines horizons tied to the biweekly sprint cadence: Now (3-4 items in active development), Next (5-8 items in discovery), Later (themes from churn data and strategic bets).

The scoring rubric heavily weights churn correlation: if a missing feature appears in 10%+ of churn exit surveys, it gets a customer impact score of 5 regardless of request volume. After scoring, she finds three features that appear in 25%, 18%, and 12% of churn surveys respectively. All three enter Now or Next immediately. Meanwhile, the most-requested free-tier feature (dark mode, 300+ votes) goes to Later because it has zero correlation with paid conversion or churn.

5% within 6 weeks, validating the scoring approach.

## Example: Horizontal SaaS selling to multiple verticals

**Scenario:**

A 25-person company sells a CRM to three verticals: real estate, insurance, and financial advisors. Each vertical has a dedicated sales team that lobbies for vertical-specific features. The single product team cannot build three roadmaps, and the current approach of alternating between verticals each quarter leaves every vertical feeling underserved.

**Walkthrough:**

The PM creates one unified now next later SaaS roadmap but tags every item with its vertical applicability: single-vertical, two-vertical, or cross-vertical. The scoring rubric adds a "breadth" multiplier: cross-vertical items get a 2x multiplier on customer impact because they serve the entire customer base. Single-vertical items need to demonstrate outsized impact within their vertical to overcome the multiplier disadvantage. " After scoring, the roadmap naturally balances: Now contains 2 cross-vertical items and 1 item for each vertical.

Next contains a mix driven by evidence strength. The vertical sales teams stop lobbying because they can see their items on the roadmap with clear graduation criteria, and the breadth multiplier gives them an incentive to frame requests in cross-vertical terms when possible. The PM reviews the vertical distribution quarterly to ensure no vertical goes two full quarters without a Now item.
