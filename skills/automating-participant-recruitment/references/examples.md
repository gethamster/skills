# Examples: Automating Continuous Research Recruitment

## Example: B2B SaaS Startup (15-person team, 2,000 active accounts)

**Scenario:**

A project management SaaS with a small product team (1 PM, 1 designer, 2 engineers) and approximately 2,000 active accounts across free and paid tiers. They're investigating why free users don't upgrade to paid, and they need 2 interviews per week. They use Segment for event tracking, Customer.io for email, and Calendly for scheduling. No dedicated researcher on the team.

**Walkthrough:**

The PM identifies two trigger events: 'user hits the free-tier project limit' (the moment they bump into the paywall) and 'user views the pricing page for the second time' (a consideration signal). She configures a Customer.io workflow that listens for either event from Segment, checks that the user is on the free plan, signed up at least 7 days ago (to filter out very new users still exploring), and hasn't been contacted for research in the last 90 days. Users who pass the filter receive a plain-text email from the PM's personal email address: 'Hi [first name], I noticed you're getting close to your project limit. I'm the PM working on our plans and pricing, and I'd love to hear about your experience, would you have 20 minutes this week for a quick video chat?

Here's my calendar: [Calendly link].' The Calendly event is set to 25 minutes with a 10-minute buffer, max 4 bookings per week, with 24-hour and 1-hour reminders. A Zapier integration posts each new booking to a #research-bookings Slack channel with the participant's name, plan, and trigger event. In the first week, 47 users hit the triggers, 41 pass the filter, the email gets a 14% open rate and 6% click rate, yielding 3 bookings.

Two show up. The PM adjusts the subject line to reference the specific project limit hit, and open rate jumps to 22% in week two, yielding 4 bookings and 3 shows, exceeding the weekly target.

## Example: Mid-Stage B2C App (50-person company, 80,000 MAU)

**Scenario:**

A consumer fitness app with 80,000 monthly active users wants to understand why users drop off after completing their first workout program. The product trio (PM, designer, engineer) aims for 3 interviews per week. They use Mixpanel for analytics, Intercom for in-app and email messaging, and SavvyCal for scheduling. They can offer a $15 Amazon gift card as an incentive.

**Walkthrough:**

The team sets up an Intercom automation triggered by the Mixpanel event 'program_completed' for users who then don't start a new program within 5 days, the exact moment of potential churn. The filter excludes users who have already been contacted in the past 60 days, users with fewer than 10 total workouts (to ensure they have enough experience to discuss), and users who have opted out of product emails. The in-app message fires as a banner the next time the user opens the app: 'You crushed your first program! 🎉 We're working on making what comes next even better. Got 20 min for a chat?

We'll send you a $15 Amazon card as a thank-you.' Tapping the banner opens an in-app browser to SavvyCal. Simultaneously, users who don't open the app within 48 hours get an email version of the same ask. The scheduling page passes a custom field with the program they completed and their total workout count.

In the first two weeks, the in-app banner converts at 11% (very high due to contextual relevance), the email converts at 4%, and the combined flow generates 5-6 bookings per week with a 70% show rate, netting the team 4 interviews per week, above their target. They reduce Intercom's send frequency to reach their 3/week goal more precisely and bank the surplus for weeks with higher no-show rates.

## Example: Enterprise B2B Platform (200-person company, 400 accounts with multiple users per account)

**Scenario:**

An enterprise analytics platform with 400 customer accounts, each with 5-50 users. The product trio needs to interview end-users (analysts) about a new dashboard feature, but must navigate account-level relationships managed by customer success managers (CSMs). They need 2 interviews per week. They use Amplitude for analytics, Salesforce for CRM, and Iterable for triggered email.

Scheduling via Calendly.

**Walkthrough:**

The biggest challenge here is the CS/Sales exclusion layer. The PM meets with the head of CS and agrees on rules: no contacting users at accounts in active renewal (a Salesforce field), no contacting users at accounts with a CSAT score below 7 (a CS health score), and CSMs get a 48-hour heads-up notification before any user at their account is contacted. The trigger event is 'user_created_custom_dashboard' in Amplitude, the exact feature they're researching. The Iterable workflow listens for this event, queries Salesforce via an API integration to check account health and renewal status, checks the user's 'last_research_contact' custom attribute for the 90-day cooldown, and if all filters pass, sends an email from the PM and simultaneously posts to a #cs-research-alerts Slack channel with the user's name, account, and CSM.

The CSM has 48 hours to flag a concern before the email sends (implemented as a delay step in the Iterable workflow with a Slack-based cancel trigger). The email is brief and references the specific dashboard: 'Hi [name], I saw you built a custom dashboard in [Product] this week. I lead the team working on dashboard tools and I'd love to hear what worked and what didn't, 20 minutes on a video call. Here's my calendar: [link].'

With 400 accounts and roughly 4,000 total users, the trigger fires 15-20 times per week, about 10 pass all filters, and a 15% booking rate yields 1-2 bookings per week. To hit the 2/week target reliably, the PM adds a second trigger for 'user_shared_dashboard_with_team' and volume stabilizes at 3-4 bookings per week with a 75% show rate.

## Example: Early-Stage Startup With Minimal Tooling (5-person team, 300 users)

**Scenario:**

A pre-Series A startup with 300 active users, no analytics platform, no marketing automation tool, and a tight budget. The solo PM wants to talk to 1 customer per week to validate their product direction. They use a simple PostgreSQL database and can write basic SQL. They have access to a free Calendly tier and Gmail.

**Walkthrough:**

With no event pipeline, the PM builds a scrappy version of the automated pipeline. She writes a daily SQL query against the production database that identifies users who completed a key action (e.g., created their first project) in the past 24 hours and haven't been emailed for research in the past 90 days (tracked in a 'last_research_email' column she added to the users table). The query runs as a scheduled cron job each morning and outputs results to a Google Sheet via a simple script. A Google Apps Script on the Sheet auto-sends a Gmail from the PM's address to each new candidate: 'Hey [first name], I'm [PM name], the founder building [Product].

I saw you just created your first project. I'd love to hear about your experience. Would you have 15 minutes for a quick call this week? Pick a time here: [Calendly link].'

The script also updates the 'last_research_email' timestamp in the Sheet and logs the contact. With 300 users, the trigger fires 2-5 times per day. The personal founder email gets a 25% response rate (founder emails always over-perform), yielding 3-4 bookings per week. With 80% show rates (people feel obligated to founders), the PM comfortably gets her 1-2 interviews per week.

Total setup time: about 3 hours, zero incremental cost.
