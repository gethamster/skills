# Examples: Categorizing Items into Now, Next, and Later Horizons

## Example: Early-stage B2B SaaS with 3-person product team

**Scenario:**

A seed-stage project management tool has 15 items in its backlog, a 3-person engineering team, and a 2-week sprint cycle. The company's strategic focus is landing its first 10 paying customers in the SMB segment. The product has a working MVP but significant gaps in onboarding and reporting.

**Walkthrough:**

" Strategic context: acquire first 10 SMB customers, reduce onboarding drop-off (currently 60% abandon during setup). Scoring reveals 4 items with high certainty (billing integration, onboarding wizard, CSV import, email notifications) because the team has customer feedback and clear specs for all four. Urgency analysis shows billing and onboarding wizard are blocking revenue: no billing means no paying customers, and the 60% drop-off rate means even interested users leave. Both score high on urgency and alignment.

CSV import and email notifications score medium on urgency. The AI task suggestions score low on certainty (no user research, speculative solution) and low on urgency. Final categorization: Now contains billing integration and onboarding wizard (2 items, matching team capacity for 2 weeks). Next contains CSV import, email notifications, and a mobile-responsive redesign (3 items with clear specs, ready for the following sprint).

Later contains AI suggestions, a Slack integration concept, and 8 other items needing research. The PM writes rationales such as: "Now: Billing integration. High certainty (Stripe docs reviewed, technical spike complete). High urgency (cannot collect revenue without it).

" This categorization gives the team a clear two-week focus and a visible pipeline for what comes after.

## Example: Mid-market SaaS with 20-person product org

**Scenario:**

A customer data platform has 45 items across 4 product teams. The company's annual strategy focuses on two objectives: expand into the healthcare vertical and reduce time-to-value for new customers from 6 weeks to 2 weeks. The product org runs monthly planning cycles.

**Walkthrough:**

The VP of Product runs the categorization in a 90-minute session with the 4 team leads. They start by aligning on strategic context: healthcare expansion (objective 1) and onboarding speed (objective 2). Each team lead pre-scores their items independently before the session. Scoring surfaces interesting tensions.

A HIPAA compliance module scores high on all three dimensions for the healthcare-focused team, going straight into Now. But a requested analytics dashboard overhaul scores high on certainty and urgency (enterprise customers are complaining) yet medium on strategic alignment (it serves existing segments, not the healthcare push). After discussion, the group places the analytics overhaul in Next with a rationale: "Important for retention, but current customers are not churning over this. " A machine learning pipeline for predictive customer scoring scores low on certainty (the data science team has only a proof of concept) despite high strategic alignment with both objectives.

It goes into Later with the rationale: "High potential but needs a 4-week technical spike before we can commit. " The team puts the technical spike itself into Now for one of the teams. Final distribution: 8 items in Now (2 per team), 14 in Next, 23 in Later. The session ends with each team lead owning their rationale documentation.

## Example: Consumer mobile app with a rapid release cycle

**Scenario:**

A fitness tracking app with 500,000 users ships updates every two weeks. The product team of 8 engineers has a backlog of 30 feature requests, bug fixes, and performance improvements. Strategic focus: increase 30-day retention from 35% to 50% and launch social features to drive viral growth.

**Walkthrough:**

The PM categorizes items in a solo session (small team, fast cycle). Certainty scoring immediately splits the backlog. Bug fixes and performance improvements are high certainty by nature, with well-defined problems and known solutions. Social features like "workout sharing" and "friend challenges" are medium certainty (user survey data supports demand, but the specific implementation is unproven).

A "gamification system" concept is low certainty (inspired by a competitor, no internal research). Urgency analysis reveals that a crash-causing bug affecting 12% of iOS users is the only genuinely high-urgency item, with measurable impact on ratings and churn. Social features have no external deadline. Strategic alignment scoring is where the interesting decisions emerge.

The iOS crash fix aligns with retention (objective 1) because crashes directly cause churn. Workout sharing aligns with both retention and viral growth. A requested dark mode, while highly requested by users, has low alignment with either strategic objective. Final categorization: Now contains the iOS crash fix, a push notification optimization (validated A/B test ready to ship, directly targets retention), and a workout sharing MVP (medium certainty, but the PM scopes it to a known-good pattern).

Next contains friend challenges, a redesigned onboarding flow, and two performance improvements. Later contains dark mode, gamification, and 15 other items. The rationale for dark mode's Later placement is telling: "Highly requested but no evidence it impacts retention or growth. " This keeps the team focused on the two metrics that matter without dismissing the user request.

## Example: Enterprise platform with quarterly planning

**Scenario:**

A B2B analytics platform serves Fortune 500 clients. The product team of 40 engineers plans quarterly with 80+ items in the backlog. Strategic objectives: reduce enterprise onboarding time from 12 weeks to 4 weeks, and build a self-serve tier to capture the mid-market. Two large clients have contractual feature commitments with Q3 deadlines.

**Walkthrough:**

The Director of Product runs a two-session categorization process. Session 1 (async, 3 days): each of the 5 team leads independently scores their 15-20 items using a shared spreadsheet. Session 2 (live, 2 hours): cross-team review focusing on items where scoring disagreements exist or where dependencies span teams. The contractual commitments (a custom SSO implementation and an audit log enhancement) immediately go into Now.

Both have high certainty (detailed specs from client contracts), high urgency (Q3 contractual deadline with financial penalties), and high strategic alignment (enterprise retention). The self-serve tier work splits across horizons: the pricing page and Stripe integration (high certainty, high alignment) go into Now. A usage-based billing model (medium certainty, requires pricing research) goes into Next. A product-led onboarding experiment (low certainty, requires a fundamentally different UX approach) goes into Later.

The dependency check in Session 2 surfaces a critical issue. Three Now items depend on a database migration that was sitting in Next. The team moves the migration into Now, which forces a lower-priority Now item into Next. Final distribution: 12 items in Now (distributed across 5 teams), 25 in Next, 43+ in Later.

Each team leaves with a clear 90-day scope and documented criteria for what would trigger items moving from Next to Now mid-quarter.
