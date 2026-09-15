# Examples: Selecting the Right MVP Type for Your Idea

## Example: Solo founder testing a B2C meal planning app idea

**Scenario:**

A solo non-technical founder believes busy parents would pay $10/month for personalized weekly meal plans that account for dietary restrictions, grocery budget, and cooking skill level. She has no engineering skills, $500 in budget, and wants to validate demand within two weeks.

**Walkthrough:**

The riskiest assumption is demand: will busy parents actually pay for meal plans when free recipes are everywhere? The risk category is demand, so the mapping points to a landing page MVP. Resource fit is perfect because a landing page requires only copywriting and a basic web builder, both within the founder's skills and budget. She builds a one-page site on Carrd ($19/year) with a clear headline ('Personalized Weekly Meal Plans for Busy Families, $10/month'), three bullet points explaining the service, and a Stripe checkout button.

She defines her success metric as 20 paid signups within 14 days, with a kill criterion of fewer than 5 signups. She spends $400 on Facebook ads targeting parents aged 28-42 in her metro area. The scope boundary explicitly excludes building any meal planning functionality. 2% conversion rate, validating demand.

She refunds all charges with a thank-you note and moves to a concierge MVP to test whether she can actually deliver personalized plans that parents use.

## Example: B2B SaaS team testing an AI document review tool

**Scenario:**

A three-person team (two engineers, one domain expert) wants to build an AI-powered contract review tool for mid-market legal teams. They have a working prototype of the NLP model but are unsure whether legal teams will trust AI-generated annotations enough to change their workflow. Budget is $15,000 for the first three months. Timeline pressure is moderate.

**Walkthrough:**

The riskiest assumption is not feasibility (the prototype already works) but problem-solution fit: will legal teams actually use AI annotations in their existing review process? The risk category is problem-solution fit, pointing to a concierge MVP. However, the team realizes that the real question is whether lawyers will trust the annotations when they appear to come from software, not a human. This shifts the risk to usability of an automated experience, pointing to a Wizard of Oz MVP.

They build a simple web interface where lawyers upload contracts and receive annotated documents within 2 hours. Behind the scenes, the NLP model generates annotations and the domain expert reviews and corrects them before delivery. The success metric is whether 8 of 10 pilot lawyers accept at least 70% of annotations without modification after three documents each. The scope boundary excludes real-time processing, user accounts, billing, and integrations with legal software.

Over four weeks, they onboard 12 lawyers from three firms. Seven of twelve accept 75%+ of annotations. The five who do not cite specific annotation categories where trust is low. This produces a clear roadmap for which annotation types to prioritize in the single-feature MVP that follows.

## Example: Small agency testing a productized service offering

**Scenario:**

A five-person digital marketing agency wants to launch a productized SEO audit service at $299/audit, targeting e-commerce stores with 500-5,000 SKUs. They currently do custom SEO work but believe a standardized offering could scale. They have deep SEO expertise, an existing client base to draw from, and want to validate the concept within three weeks with minimal new tooling.

**Walkthrough:**

The riskiest assumption is viability: can they deliver a standardized audit at a fixed price without spending more in labor than the $299 price covers? Demand is moderate-confidence because existing clients frequently ask for audits, but the team has never timed the workflow for a standardized version. The risk category points to a piecemeal MVP. They assemble the audit workflow from existing tools: Screaming Frog for crawl data, Ahrefs for backlink analysis, Google Sheets for the standardized report template, Calendly for booking, Stripe for payment, and Zapier to connect them.

The success metric is completing 10 audits within the three-week window, with an average labor time under 4 hours per audit (which makes the $299 price viable at their internal cost rate). The scope boundary excludes building any custom software, creating a dedicated website, or hiring additional staff. They email 50 existing contacts offering the service. Fourteen express interest, and 10 purchase.

5 hours, well above the 4-hour target. But they identify two steps that account for 60% of the time and can be templated. 2 hours. They validate both demand and near-viability, with a clear optimization path before scaling.

## Example: Large team choosing between MVP types for an internal tool

**Scenario:**

A product team of eight at a mid-size company (400 employees) has been asked to build an internal tool that helps sales reps find the right case study to share with prospects based on industry, company size, and deal stage. Engineering capacity is available but the VP of Sales is skeptical the team understands the workflow well enough to build the right thing. Timeline is six weeks to demonstrate value.

**Walkthrough:**

The riskiest assumption is problem-solution fit: does the team understand the sales rep workflow well enough to build a tool that reps will actually use instead of their current habit of asking colleagues in Slack? The VP's skepticism makes this the clear top risk. The risk category points to a concierge MVP. A product manager volunteers to manually serve as the 'case study finder' for 15 sales reps over two weeks.

When a rep needs a case study, they message the PM in Slack with the prospect details, and the PM searches the existing library and responds within 30 minutes. The success metric is whether reps use the service at least three times per week and whether the case studies the PM finds are used in prospect communications. The scope boundary excludes any engineering work, any new tools, and any changes to the existing case study library. 1 requests per week.

The PM documents every search pattern, noting that 80% of requests can be served by filtering on just three attributes: industry, deal size, and use case. This learning shapes the single-feature MVP that engineering builds in the remaining four weeks, resulting in a search tool that the VP of Sales champions because the workflow was validated with real usage data before a line of code was written.
