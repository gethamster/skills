# Examples: Identifying Minimum Requirements by Working Backwards from Launch

## Example: B2B SaaS Expense Reporting Tool (Small Team, 4 Engineers)

**Scenario:**

A startup team of 4 engineers and 1 PM is building an expense reporting tool for small businesses. Their press release promises three things: employees can submit expenses from their phone in under 60 seconds, managers can approve expenses with one tap, and finance teams get a monthly summary report automatically. The team has 10 weeks to launch an MVP. They are tempted to also build integrations with QuickBooks and Xero, receipt OCR, and a multi-currency converter.

**Walkthrough:**

The PM extracts the three promises and decomposes each. 'Submit in under 60 seconds' requires a mobile-responsive form, photo upload for receipts, and category selection. 'Approve with one tap' requires a manager dashboard, push notifications, and an approval workflow. 'Monthly summary report' requires a reporting engine, date-range filtering, and PDF or CSV export.

Consolidation reveals that both submission and approval share user authentication and a core expense data model. The PM then applies the simplest-version test: receipt OCR is replaced with manual entry plus photo attachment, multi-currency is deferred since all initial customers use USD, and the monthly report starts as a CSV export rather than a designed PDF. QuickBooks and Xero integrations are classified as post-launch because they do not appear in any press release promise. The final must-have list contains 11 items.

Engineering estimates 8 weeks, leaving 2 weeks of buffer. The PM documents QuickBooks integration, OCR, and multi-currency as the first three items on the post-launch product manager roadmap, each traced to a future promise that could be added to a v2 press release.

## Example: Consumer Fitness App (Growth-Stage, 12 Engineers)

**Scenario:**

A growth-stage company with 12 engineers is launching a new feature: AI-generated personalized workout plans. The press release promises that users receive a customized weekly plan based on their fitness level and equipment, can swap exercises they dislike, and see progress tracking over time. The CEO also wants a social sharing feature and integration with Apple Health. Launch target is 6 weeks.

**Walkthrough:**

The PM extracts three promises and decomposes. 'Customized weekly plan' requires a fitness assessment questionnaire, an exercise database tagged by muscle group and equipment, and an algorithm that assembles plans. 'Swap exercises' requires alternative exercise recommendations and UI for swapping within a plan. 'Progress tracking' requires workout logging and a simple chart showing completed workouts over time.

The simplest-version test simplifies the algorithm from a complex ML model to a rule-based engine with 4 fitness levels and 3 equipment categories, producing 12 plan templates that cover the matrix. Swap recommendations come from the exercise database's tags rather than a recommendation engine. Progress tracking starts as a weekly completion percentage rather than a detailed analytics dashboard. Social sharing and Apple Health integration are classified as post-launch because neither appears in the press release promises.

Engineering estimates 5 weeks for the simplified scope. The PM documents the ML-based personalization upgrade as a v2 initiative, with the rule-based engine designed to be replaceable once user data validates demand.

## Example: B2B Marketplace Platform (Large Team, Cross-Functional)

**Scenario:**

A large team across product, engineering, design, and data science is building a marketplace connecting manufacturers with distributors. The press release promises: distributors can discover manufacturers filtered by product category, location, and minimum order quantity; manufacturers can list their catalog with pricing in under 30 minutes; and both sides get a secure messaging channel to negotiate terms. The project has a 16-week timeline with 20 engineers.

**Walkthrough:**

The PM extracts three promises and runs decomposition workshops with engineering, design, and data science leads. 'Discover manufacturers' requires a search index, filter UI, manufacturer profile pages, and a data ingestion pipeline for manufacturer listings. 'List catalog in 30 minutes' requires a self-serve onboarding flow, a bulk CSV upload for products, and a pricing entry form. 'Secure messaging' requires a real-time messaging system, notification delivery, and content moderation for spam.

Consolidation reveals shared needs: user authentication, manufacturer and distributor account models, and an admin dashboard for the operations team. The simplest-version test challenges several gold-plated capabilities. Real-time messaging simplifies to near-real-time (30-second polling instead of WebSockets), which cuts 3 weeks of infrastructure work. The search index uses a managed service instead of a custom-built solution.

Bulk CSV upload supports a single template format rather than flexible schema detection. Content moderation starts as manual review by the ops team rather than automated ML filtering. The team initially proposed AI-powered manufacturer recommendations, advanced analytics dashboards for both sides, and a payment escrow system. All three are deferred because no press release promise requires them.

The final must-have list contains 24 items. Engineering estimates 14 weeks, leaving 2 weeks of buffer. The PM publishes the traceability matrix in Confluence and schedules weekly 15-minute reviews to absorb new information from the ongoing PR/FAQ review sessions.

## Example: Internal Tool Rebuild (Enterprise, Tight Deadline)

**Scenario:**

An enterprise company needs to rebuild an aging internal CRM tool used by 200 sales reps. The press release (written for the internal customer: sales reps) promises: reps can log a customer interaction in under 15 seconds, reps see a unified timeline of all interactions with a customer, and managers get a weekly pipeline summary. The legacy system has 47 features accumulated over 8 years. The rebuild has a 12-week window before the legacy system's hosting contract expires.

**Walkthrough:**

The PM resists the urge to replicate all 47 features and instead anchors to the three promises. 'Log interaction in 15 seconds' requires a streamlined input form with pre-populated customer data, interaction type dropdown, and free-text notes. 'Unified timeline' requires a data model that aggregates interactions across channels (email, phone, in-person) and a chronological view. 'Weekly pipeline summary' requires a deal-stage tracking field on each customer record and an automated email report.

The simplest-version test reveals that 31 of the legacy system's 47 features do not map to any of the three promises. Features like territory mapping, commission calculation, and custom report building are classified as post-launch. The PM interviews 10 sales reps and confirms that the three promises match their top pain points. Data migration from the legacy system is flagged as critical infrastructure: only customer records and interaction history need to migrate for launch, not the full legacy schema.

The final must-have list contains 15 items versus the legacy system's 47 features. Engineering confirms 10 weeks of build time. The PM creates a phased product manager roadmap showing which of the remaining 31 legacy features will be re-evaluated in quarters 2 and 3, with each feature requiring a fresh justification tied to a customer promise before being approved.
