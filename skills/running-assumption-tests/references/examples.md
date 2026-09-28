# Examples: Running Assumption Tests

## Example: B2B SaaS Team Testing a New Reporting Feature

**Scenario:**

A 4-person product team at a mid-stage B2B analytics platform has identified through customer interviews that managers need faster access to team performance summaries. They've generated three solution ideas: an automated weekly email digest, a real-time dashboard widget, and a Slack bot integration. The team has a weekly discovery cadence and can access 8-10 customers for testing within 48 hours through their recruitment pipeline. They need to decide which solution to invest a sprint in building.

**Walkthrough:**

The team starts by mapping assumptions for all three ideas in a 30-minute session. The email digest has 11 assumptions; the dashboard widget has 9; the Slack bot has 14 (many around feasibility of the Slack API and whether teams actually check Slack for work updates vs. chat). They score all assumptions silently, then reveal. The highest-risk assumption across all three ideas is shared: "Managers will actually open a weekly email digest" (uncertainty: 4, impact: 5, risk score: 20).

They know from their own product data that their existing notification emails have a 12% open rate. They design a smoke test: send 50 of their existing manager-tier users a prototype email with the subject line "Your Team's Weekly Performance Summary" containing a link to a mockup. Success criterion: open rate above 25% (meaningfully above their baseline 12%). They deploy the test on Tuesday, collect results by Thursday.

Open rate: 38%. Assumption validated. They move to the next riskiest assumption, "Managers can extract actionable insights from the digest in under 2 minutes", and design a prototype test for the following week. Two weeks later, two of the email digest's top assumptions are validated, while testing of the Slack bot's feasibility assumption revealed critical API rate limits.

The team confidently commits the email digest to their next sprint.

## Example: Small Startup Testing Product-Market Fit for a New Feature

**Scenario:**

A 2-person founding team building a personal finance app has noticed through support tickets that users keep asking for a way to set savings goals. The founders have limited time (maybe 6 hours per week for discovery) and a small user base of 800 monthly active users. They want to know if a savings goal feature is worth building before their next fundraise.

**Walkthrough:**

With limited capacity, the founders focus ruthlessly on the single highest-risk assumption. They brainstorm 7 assumptions for the savings goal feature and land on the riskiest: "Users will set a savings goal if we give them the option" (uncertainty: 4, impact: 5). Their concern is that users say they want this but might not follow through, a classic stated-preference trap. They design a fake-door test: add a "Set a Savings Goal" button to the app's home screen that, when tapped, shows a "Coming Soon, join the waitlist" modal.

Success criterion: at least 5% of monthly active users tap the button within 7 days (40+ users out of 800). They ship the fake door on Monday. By the following Monday, 67 users (8.4%) have tapped it and 41 joined the waitlist. Assumption validated.

They move to the next riskiest assumption: "Users who set a goal will return to check progress at least once per week." Since they can't test return behavior without building something, they run a concierge test: they manually email the 41 waitlist users a weekly savings progress update based on their transaction data and track open rates and replies. After 3 weeks, 28 of 41 are still opening the emails. Both core desirability assumptions are validated, giving the founders concrete evidence for their investor pitch.

## Example: Enterprise Product Team Validating a Platform Integration

**Scenario:**

A product trio at a large enterprise HR software company has identified through customer opportunity mapping that recruiters waste significant time switching between their ATS and LinkedIn. The proposed solution is a deep LinkedIn integration that pulls candidate profiles directly into the ATS. The team operates in 2-week sprints, has access to 15 enterprise recruiting teams for research, and faces a 3-month timeline pressure from the VP of Product.

**Walkthrough:**

The team maps 16 assumptions across all four categories. The feasibility assumption "LinkedIn's API allows the data access we need" scores risk 20 (uncertainty 4, impact 5). The viability assumption "LinkedIn's API terms of service permit this use case" scores risk 25 (uncertainty 5, impact 5), if LinkedIn doesn't allow it, the entire idea is dead regardless of desirability. They test viability first: the engineering lead spends 4 hours reviewing LinkedIn's current API documentation and terms of service, then writes a one-page summary.

Result: LinkedIn's API explicitly prohibits scraping profile data for ATS pre-population without a partnership agreement. The viability assumption is invalidated. Rather than killing the idea entirely, the team iterates: they pivot to a browser extension that lets recruiters manually push individual profiles to the ATS with one click, a different mechanism that doesn't require API access to LinkedIn's data. This new solution has a different assumption set.

They map 12 new assumptions, and the riskiest is now "Recruiters will install a browser extension" (uncertainty: 3, impact: 4, risk: 12). They design a survey sent to 15 recruiting teams: "If a browser extension let you send LinkedIn profiles to [ATS] with one click, would you install it?" with follow-up: "How many browser extensions do you currently use for recruiting?" Success criterion: 10 of 15 teams express interest AND average current extension usage is above 1. Result: 12 of 15 are interested, average extensions in use is 2.3.

Validated. The whole viability-to-pivot-to-desirability cycle took 8 days. Without assumption testing, the team would have spent 6 weeks building an API integration that LinkedIn's terms prohibit.

## Example: B2C Mobile App Testing a Social Feature

**Scenario:**

A product team at a fitness tracking app (2 million MAU) is exploring adding a social feed where users can share workout achievements. The team has robust in-app analytics, can deploy experiments to a percentage of users, and conducts weekly customer interviews. They're nervous about the social feature because their user base tends to be private about fitness data.

**Walkthrough:**

The team generates 13 assumptions. The highest-risk is a desirability assumption: "Users are comfortable sharing workout data with other users" (uncertainty: 5, impact: 5, risk: 25). They know from customer interviews that privacy is a recurring theme, so this assumption is genuinely uncertain. They design a two-part experiment.

First, a one-question in-app survey shown to 1,000 randomly selected users: "Would you share your workout achievements with friends in the app?" with options: Definitely / Maybe / Probably not / Never. Success criterion: fewer than 40% say "Probably not" or "Never." Result: 52% say Probably not or Never. The assumption fails the survey test.

But the team knows stated preference can diverge from behavior, so they design a follow-up behavioral test: they deploy a prototype "Share Achievement" button to 500 users after workout completion. Success criterion: at least 8% of users who see the button tap it within one week. Result: 4.2% tapped it. The assumption is invalidated by both stated preference AND behavior.

The team pivots: instead of a public social feed, they explore a private sharing feature (share with one specific friend via direct message). They map new assumptions for this modified idea. The riskiest: "Users have at least one friend also using the app." A quick data query shows only 11% of users have a connected friend.

This assumption is also invalidated. The team kills the social direction entirely and redirects toward the next opportunity on their tree, saving months of development on a feature their users demonstrably don't want.
