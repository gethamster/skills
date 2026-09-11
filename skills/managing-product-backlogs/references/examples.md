# Examples: Managing and Refining a Product Backlog

## Example: Early-stage B2B SaaS startup with 5 developers

**Scenario:**

A seed-stage startup building an invoicing tool for freelancers has a 4-person engineering team plus a designer. The CEO acts as product owner. They have 150 items scattered across a Notion doc, a Slack channel, and the CEO's notebook. There is no formal backlog, no estimates, and sprint planning is a 3-hour debate every two weeks.

**Walkthrough:**

The team consolidates all 150 items into a single Linear board in one 2-hour session. Each item gets a one-line title and a source tag (customer request, internal idea, bug report). The CEO then spends 90 minutes sorting the list into rough priority order, grouping items under 5 epics: onboarding, invoice creation, payment tracking, reporting, and integrations. In the first refinement session, the team picks the top 15 items and writes user stories with acceptance criteria for each.

They use planning poker to estimate the top 15, using a completed 'create invoice' story as their reference 1-pointer. Seven items score 8 or higher and are split into smaller stories. After splitting, the top of the backlog contains 22 refined, estimated items representing about 3 sprints of work at the team's estimated capacity of 35 points per sprint. The next sprint planning session takes 45 minutes instead of 3 hours because the team simply pulls from the refined queue.

After 3 sprints, the CEO prunes the backlog from 150 items to 65, closing 85 items that were duplicates, outdated, or clearly below the priority line for the next 6 months.

## Example: Mid-size e-commerce company with multiple stakeholder groups

**Scenario:**

An e-commerce company with 200 employees has three product teams (buyer experience, seller tools, and platform infrastructure). The buyer experience team has a backlog of 300+ items with competing requests from marketing, merchandising, customer support, and the VP of Product. Priority conflicts are escalated to the VP weekly, consuming hours of leadership time.

**Walkthrough:**

The product manager implements a WSJF scoring model. Each item receives scores from 1-10 on three dimensions: business value (based on revenue impact and customer satisfaction data), time criticality (deadline-driven or competitive pressure), and risk reduction (does it reduce uncertainty or address a known technical risk). The effort estimate, already captured in t-shirt sizes, is converted to a numeric scale (S=2, M=5, L=8, XL=13). WSJF is calculated as (value + urgency + risk) / effort.

The product manager publishes the scored and ordered backlog to all stakeholders via a shared dashboard. 4), the numbers make the trade-off transparent without requiring VP intervention. The team holds two 45-minute refinement sessions per week, refining 6-8 items per session. Over two months, priority escalations to the VP drop from 4 per week to 1 per month because stakeholders can see the reasoning behind the ordering.

## Example: B2C mobile app team managing a mix of features, bugs, and tech debt

**Scenario:**

A fitness app with 500,000 monthly active users has a 7-person mobile team. Their backlog has 90 items: 40 feature requests, 35 bugs, and 15 tech debt items. The engineering lead complains that tech debt never gets addressed because features always win. Bugs accumulate and user ratings are dropping.

**Walkthrough:**

The product owner restructures the single backlog by applying consistent prioritization criteria across all item types. ' This framing makes the user impact of bugs visible alongside feature requests. ' The team agrees to a sustainable allocation: roughly 60% features, 20% bugs, 20% tech debt each sprint. During refinement, the product owner interleaves bug and tech debt items into the ordered backlog at positions that reflect their actual impact.

The GPS migration (tech debt) and the route-saving bug both rank in the top 10 because they directly cause the 1-star reviews that threaten growth. 2, and the engineering lead reports that the codebase improvements are making feature delivery faster.

## Example: Large enterprise team adopting agile with legacy constraints

**Scenario:**

A financial services company is transitioning a 15-person team from waterfall to agile. They have a 200-page requirements document that was the basis for a 12-month project plan. Leadership expects the same scope delivered but in an agile fashion. The team has never written a user story or estimated in story points.

**Walkthrough:**

The product owner and a scrum master decompose the requirements document into epics and stories over a one-week workshop. The 200-page document yields 12 epics and roughly 180 stories. Rather than refining all 180, they focus only on the first 2 epics (40 stories) that represent the foundational capabilities. The team runs a calibration session where they estimate 10 well-understood stories from the first epic to establish a baseline velocity.

With an average of 5 points per story and 40 stories in the first 2 epics, they estimate 200 points of work. Running 2-week sprints with 15 people, they discover their initial velocity is 45 points per sprint after the first 3 sprints. The product owner uses this data to show leadership that the original 12-month timeline maps to roughly 800 story points at current velocity, requiring approximately 18 sprints (9 months) if scope remains fixed. This transparent data enables a productive conversation about scope trade-offs rather than a political argument about timelines.

The team refines only 2-3 sprints ahead, treating the remaining 140 stories as rough placeholders that will be refined as they approach the top of the backlog.
