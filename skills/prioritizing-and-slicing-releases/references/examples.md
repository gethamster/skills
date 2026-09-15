# Examples: Prioritizing Stories and Slicing Release Increments

## Example: B2B SaaS invoicing tool for freelancers (small team, 3 developers)

**Scenario:**

A three-person engineering team with one designer and one PM has a story map for a freelancing invoicing app. The backbone covers: Create Invoice, Send Invoice, Track Payment, Manage Clients, and Generate Reports. There are roughly 45 stories on the map. The team has 8 weeks to ship an MVP that can support a beta group of 20 freelancers.

**Walkthrough:**

' The team walks the backbone and selects one story per column: 'Create a single-item invoice' under Create Invoice, 'Email invoice as PDF' under Send Invoice, 'Mark invoice as paid manually' under Track Payment, 'Add a new client with name and email' under Manage Clients, and nothing under Generate Reports (the team agrees the journey is complete without reports for now). That gives five stories above the first line. Rough sizing puts this at three weeks of work. The team adds two more stories: 'Edit a draft invoice' and 'View list of sent invoices,' bringing the total to seven stories and roughly four weeks.

The first line is drawn. Release 2 adds recurring invoices, automatic payment reminders, and a basic revenue dashboard, targeting the following four weeks. The map now has two clear slices, each with a summary card. Sprint planning pulls the seven Release 1 stories into the first two sprints.

## Example: E-commerce checkout redesign (large team, cross-functional)

**Scenario:**

A 12-person product team at a mid-size e-commerce company has mapped the checkout journey from Cart Review through Payment, Shipping Selection, Order Confirmation, and Post-Purchase (returns, tracking). The map has 80+ stories. Stakeholders want the redesigned checkout live for Black Friday, which is 14 weeks away. The team must preserve the existing checkout in parallel during the transition.

**Walkthrough:**

The team defines three releases. Release 1 (weeks 1-6) is the walking skeleton: simplified cart review, credit card payment only, flat-rate shipping, basic confirmation page, and a link to the existing returns flow. This is 18 stories. Release 2 (weeks 7-10) adds PayPal and Apple Pay, real-time shipping rate calculation, order tracking emails, and guest checkout.

This is 22 stories. Release 3 (weeks 11-14) adds gift cards, saved payment methods, multi-address shipping, and a redesigned returns portal. During the slicing session, the engineering lead flags that real-time shipping rate calculation depends on an API integration that has a 3-week lead time. The team moves the API setup story into Release 1's first sprint as a technical enabler, even though the user-facing shipping feature stays in Release 2.

A summary card for each slice is created and shared with the VP of Commerce, who agrees to the sequence after negotiating gift card support from Release 3 into Release 2 in exchange for deferring saved payment methods.

## Example: Mobile fitness app for casual users (B2C, early-stage startup)

**Scenario:**

A two-person founding team is building a fitness app. Their story map covers: Set Goals, Browse Workouts, Complete a Workout, Track Progress, and Social Sharing. They have 30 stories and four months of runway. They need to ship an App Store-ready version in six weeks to start acquiring beta users, then iterate based on feedback.

**Walkthrough:**

The founders write the outcome statement: 'After Release 1, a user can pick a beginner workout, follow along with a timer, and see their workout logged in a simple history.' They walk the backbone: 'Set a fitness goal' gets one story (choose from three preset goals), 'Browse Workouts' gets two stories (view a curated list of five workouts and filter by duration), 'Complete a Workout' gets three stories (step-by-step exercise display with timer, rest timer between sets, and workout completion screen), 'Track Progress' gets one story (list of completed workouts with dates), and 'Social Sharing' gets zero stories in the first slice because the journey is functional without it. The total is seven stories, estimated at four weeks. Release 2 adds custom goals, a workout builder, streak tracking, and share-to-Instagram. Release 3 adds social feeds, friend challenges, and Apple Health integration. The founders photograph the sliced map and use it as their investor update roadmap, with each slice tied to a user growth hypothesis: 'R1 tests retention, R2 tests engagement depth, R3 tests viral growth.'

## Example: Internal HR onboarding portal (enterprise, regulated industry)

**Scenario:**

A corporate IT team is building an onboarding portal for new hires at a 5,000-person financial services company. The story map covers: Pre-Start Setup, Day-One Orientation, Compliance Training, Benefits Enrollment, Team Introduction, and 90-Day Check-In. There are 60 stories. The VP of HR wants the portal live for a cohort of 40 new hires starting in 10 weeks.

Compliance training must be trackable for regulatory audits.

**Walkthrough:**

The team recognizes that compliance training is non-negotiable for the first slice due to regulatory requirements, even though it is not the most exciting user experience improvement. Release 1 (weeks 1-6) includes: 'New hire receives login credentials via email' (Pre-Start), 'View Day 1 agenda and office map' (Orientation), 'Complete three mandatory compliance modules with completion certificates' (Compliance), 'Select health insurance plan' (Benefits), and 'View team org chart with photos and roles' (Team Introduction). The 90-Day Check-In column is left empty because the first cohort will not reach day 90 before Release 2. The compliance module requires integration with the existing LMS, flagged as a four-week effort.

The team front-loads this work in Sprint 1. Release 2 adds interactive orientation videos, elective training modules, 401k enrollment, mentor matching, and the 90-day check-in survey. The sliced map is presented to the VP of HR and the compliance officer together, with the compliance officer confirming that the Release 1 training tracking meets audit requirements.
