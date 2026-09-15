# Examples: Running Build-Measure-Learn Cycles

## Example: Early-Stage B2B SaaS Testing Core Value Proposition

**Scenario:**

A three-person team building a workflow automation tool for recruiting agencies has 50 beta users. They believe recruiters will pay for automated candidate follow-up emails, but they have no evidence yet. Engineering capacity is limited to one developer. The team can ship small changes weekly.

**Walkthrough:**

0. Because they only have 50 users, they cannot run a proper A/B test, so they design a concierge MVP: the product manager manually sends follow-up emails on behalf of 10 recruited volunteers for two weeks, simulating what the automated feature would do. The build step takes two days (setting up email templates and a tracking spreadsheet). 1 for the rest.

While the sample is small, the qualitative signal is strong: 8 of 10 participants said they would pay for this feature and three sent unsolicited testimonials. The team marks the hypothesis as validated with a note about sample limitations, decides to build a real (minimal) automated version, and queues a follow-up cycle to test willingness to pay at $49/month.

## Example: Growth-Stage Consumer App Testing Retention Mechanic

**Scenario:**

A fitness app with 200,000 monthly active users has strong acquisition but poor 30-day retention (22%). The product team suspects that a social accountability feature (workout partners) will improve retention. They have a dedicated experimentation platform and can run A/B tests at scale.

**Walkthrough:**

' Success metric is 30-day retention rate, threshold is 30%, failure is below 25%. They calculate a required sample of 2,000 users per group to detect this effect with 95% confidence. The build takes one week: a simple partner-matching screen in onboarding that pairs users randomly and sends mutual push notifications on workout days. No chat, no profile pages.

They ship via feature flag to 50% of new users. 1% in the control. The result falls in the inconclusive zone (above baseline but below the 30% threshold). The team marks the hypothesis as partially supported, investigates further, and discovers that users who actually completed a workout with their partner retained at 41%, but only 35% of paired users ever worked out together.

The next cycle's hypothesis focuses on increasing partner workout completion rather than the pairing mechanism itself.

## Example: Enterprise SaaS Testing Pricing Model Change

**Scenario:**

A project management platform serving mid-market companies (500-2,000 employees) charges per seat at $12/month. The team hypothesizes that switching to per-project pricing would increase expansion revenue because large teams resist adding seats but readily create new projects. They have 400 paying customers and a six-week sales cycle.

**Walkthrough:**

' Given the long sales cycle and small customer count, a full A/B test is impractical. The team designs a painted-door test: they add a 'Switch to per-project pricing' banner to the billing page for 200 randomly selected accounts and track click-through rate as a proxy for interest. The build takes three days (banner, tracking event, a landing page explaining the model that ends with 'Join the waitlist'). After four weeks, 34 of 200 accounts (17%) clicked the banner and 18 (9%) joined the waitlist.

More importantly, the team calls all 18 waitlist accounts for [customer discovery interviews](https://tryhamster.com/skills/conducting-customer-discovery-interviews) and learns that the appeal is not about procurement friction but about project-level budget control. They mark the original hypothesis as invalidated (wrong mechanism) but generate a refined hypothesis about project-level billing as a budget management tool. The next cycle tests this refined framing with a concierge pricing offer to 10 willing accounts.

## Example: Small Team Marketplace Testing Supply-Side Hypothesis

**Scenario:**

A two-person team running a freelance design marketplace has 80 active designers (supply) and 300 active clients (demand). Job fill rate is 45%, meaning 55% of posted jobs get no qualified applicants. The team believes the problem is that designers do not see relevant jobs fast enough.

**Walkthrough:**

5. The team cannot build a real-time matching algorithm in one week, so they run a Wizard of Oz experiment: for 40 designers (half the supply), a team member manually scans new jobs each morning and sends personalized email alerts using a template. The build takes one day (email template, tracking spreadsheet, daily 30-minute manual process). 7 in the control group.

Job fill rate for jobs that were sent as alerts was 62%. The team validates the hypothesis, documents the learning, and builds a simple keyword-matching notification system over the following week. The next cycle tests whether the improved fill rate holds as the system scales from manual to automated matching.
