# Examples: Mapping Features and Capabilities to Strategic Goals

## Example: B2B SaaS startup mapping features to four quarterly goals

**Scenario:**

A 15-person B2B SaaS company selling project management software has set four Q2 goals: increase trial-to-paid conversion from 8% to 14%, reduce churn from 5% monthly to 3%, expand average contract value by 20%, and launch a partner integration marketplace. The team has 28 items in the backlog ranging from small UI fixes to a major API overhaul.

**Walkthrough:**

The PM starts by listing the four goals with their metrics on a whiteboard. She then prints the 28 backlog items on cards and begins sorting. " After the first pass, 4 items are unmapped: a dark mode feature request, a mobile app polish sprint, a legacy database migration, and a logo redesign. The PM reviews each.

Dark mode and logo redesign go to the parking lot. " The database migration gets elevated to a prerequisite for the API overhaul and placed under the marketplace goal. Coverage check shows: conversion (7 items), churn (8 items), ACV (5 items), marketplace (6 items), unmapped (2 items). The distribution feels balanced given the team's emphasis on retention this quarter.

Stakeholder review surfaces one change: the VP of Sales moves a competitive comparison feature from conversion to ACV, arguing it helps upsell conversations more than initial trials. The mapping is finalized and encoded as labels in their project management tool.

## Example: Enterprise product team with cross-functional goals and 60+ epics

**Scenario:**

A 120-person enterprise software company has three product lines and five strategic goals for the year: regulatory compliance readiness, platform scalability to 10x current load, enterprise buyer experience improvements, new vertical expansion (healthcare), and developer ecosystem growth. They have 64 epics across three teams.

**Walkthrough:**

The head of product assigns each product line lead to independently map their team's epics to the five goals. Team A (core platform) maps 22 epics. Fourteen map clearly: 8 to scalability, 4 to compliance, 2 to developer ecosystem. Six are ambiguous, and two are unmapped.

Team B (enterprise experience) maps 18 epics. Twelve map to buyer experience, 3 to healthcare vertical (new buyer personas for health systems), and 3 are unmapped. Team C (integrations) maps 24 epics. Fifteen map to developer ecosystem, 5 to healthcare vertical (HL7/FHIR integrations), and 4 are unmapped.

The head of product compiles the mappings and spots a problem: compliance has only 4 mapped epics despite being the highest-urgency goal due to a regulatory deadline in Q3. He works with Team A to decompose a vague "compliance initiative" epic into 6 specific capabilities (audit logging, data residency controls, consent management, role-based access overhaul, encryption upgrade, compliance reporting dashboard). This brings compliance coverage to 10 items. The 9 unmapped epics across all teams are reviewed.

Five go to the parking lot. Two are reclassified as technical prerequisites and attached to scalability. Two reveal a missing goal around internal developer productivity, which the team decides to track informally but not elevate to strategic goal status this year. The final mapping is presented at the quarterly business review with a coverage heat map showing effort allocation percentages per goal.

## Example: Early-stage consumer app mapping limited resources to focused goals

**Scenario:**

A 4-person consumer app startup with a calorie-tracking product has two goals for the next 8 weeks: increase day-7 retention from 22% to 35%, and grow weekly organic installs from 500 to 2,000. They have 12 feature ideas and capacity for about 5 of them.

**Walkthrough:**

The founder lists both goals with metrics. For retention, the success metric is day-7 return rate measured via analytics. For organic growth, the success metric is weekly installs from App Store search and word-of-mouth. She maps each of the 12 ideas.

Push notification reminders, streak rewards, and meal plan suggestions map to retention with clear mechanisms: notifications drive re-engagement, streaks create commitment, and meal plans give users a reason to return daily. Social sharing templates, App Store screenshot refresh, and a referral reward system map to organic growth. A barcode scanner improvement maps to retention ("reduces food logging friction from 45 seconds to 8 seconds per item, which is the top dropout point"). A widget for the home screen maps to retention ("puts calorie count in constant view, reinforcing daily habit").

Recipe integration and grocery list features are unmapped. The founder considers them and decides recipes could support retention by adding a content dimension, but the mechanism is weak and unproven. Both go to the parking lot. Coverage check shows: retention (5 items), organic growth (3 items), unmapped (2 items), parking lot (2 items).

Given the 5-item capacity, she prioritizes the three highest-leverage retention items (push notifications, barcode scanner, streaks) and the two highest-leverage growth items (social sharing, referral rewards). The mapping made this prioritization conversation take 20 minutes instead of the usual multi-day debate.

## Example: Platform team using mapping to negotiate with internal stakeholders

**Scenario:**

A platform engineering team at a mid-size e-commerce company supports three product teams. Each product team has submitted requests totaling 40 items for the platform team's Q3 capacity of roughly 15 items. The platform team has two goals: reduce median API response time from 400ms to under 150ms, and achieve 99.95% uptime SLA compliance.

**Walkthrough:**

The platform lead collects all 40 requests and maps each to the two goals. Caching layer upgrades, query optimization, and CDN expansion map clearly to API response time. Automated failover, monitoring alert improvements, and disaster recovery testing map to uptime SLA. But 18 of the 40 items are feature-specific requests from product teams ("add a recommendations endpoint," "support bulk order imports") that do not directly advance either platform goal.

The lead creates the mapping document and shares it with all three product teams. " The 18 non-goal items are reclassified: 6 are actually product team work that can use existing APIs. , the bulk import endpoint can be built as part of the API optimization effort since it tests throughput). 4 genuinely require dedicated platform capacity and get queued behind goal-mapped work.

The mapping reduced the negotiation from 40 competing items to a focused discussion about 4 items that need explicit trade-offs against goal-mapped work.
