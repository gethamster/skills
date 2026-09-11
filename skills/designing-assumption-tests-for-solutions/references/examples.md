# Examples: Designing Assumption Tests and Experiments for Solutions

## Example: Testing a Smart Notification Feature for a Project Management Tool

**Scenario:**

A product trio at a SaaS project management company has identified an opportunity: 'Project managers miss critical updates because they're buried in a noisy notification feed.' They've generated a solution: 'AI-powered smart notifications that surface only high-priority updates based on the user's role and recent activity.' The team needs to validate this before committing a quarter of engineering effort.

**Walkthrough:**

The team lists 12 assumptions. After mapping them on the risk matrix, four stand out as high-risk:

1. **Desirability**: Project managers will trust an AI to filter their notifications (high uncertainty—users have shown distrust of automated filtering in past research).
2. **Feasibility**: The existing activity data is sufficient to build a useful priority model (uncertain—the data team hasn't audited this).
3. **Usability**: Users will understand why certain notifications were surfaced and others weren't (uncertain—transparency in AI filtering is notoriously hard).
4. **Viability**: The ML infrastructure costs will stay within the per-user margin (uncertain—no cost estimate exists).

For assumption #1, they run a **concierge test**: a designer manually curates a 'smart' notification digest for 8 power users over 5 days and collects daily feedback. Success criterion: at least 6 of 8 users rate the curated digest as more useful than the current feed.

For assumption #2, an engineer runs a **data spike**: query the activity logs for 100 projects and assess whether role-based activity patterns are detectable. Success criterion: the engineer can manually classify at least 80% of notifications as high/low priority using available data fields.

Results after one week: The concierge test passes (7/8 users prefer the curated digest), but the data spike reveals that role data is missing for 40% of accounts. The team pivots the solution to use explicit user preferences instead of role inference, then designs a follow-up prototype test for the updated approach. The Opportunity Solution Tree is updated with experiment nodes showing what was learned.

## Example: Fake-Door Test for a Collaborative Budgeting Feature

**Scenario:**

A fintech product team has an opportunity: 'Couples struggle to align on monthly spending priorities.' One proposed solution is a shared budgeting workspace where both partners can set and negotiate spending limits per category. The team suspects desirability is the riskiest assumption—couples may not want to share financial details within the app.

**Walkthrough:**

The team designs a **fake-door test**. They add a banner to the dashboard of existing users who have linked accounts: 'New: Share your budget with your partner. Get started →'. Clicking the banner leads to a waitlist page that says 'Coming soon—join the waitlist to be the first to try Shared Budgets.'

Success criterion (defined before launch): At least 8% of users who see the banner click through, and at least 30% of those who click submit their email for the waitlist.

After 5 days and 2,400 banner impressions: 11.2% clicked through and 42% submitted an email. The desirability assumption is validated. The team moves to the next riskiest assumption—usability—and designs a prototype test of the budget negotiation workflow using Figma. This disciplined, step-by-step approach to assumption testing is a hallmark of the product manager certification skill set and keeps the team anchored to the Opportunity Solution Tree throughout discovery.
