# Examples: Scaling Agile Practices Using Spotify Structures

## Example: Series B Startup Growing from 4 to 12 Squads

**Scenario:**

A B2B SaaS company has 35 engineers in a single tribe of 4 squads, growing to 90 engineers over 12 months. They plan to add 8 new squads. The product covers three domains: a core platform, an analytics module, and an integrations layer. The single tribe lead is already struggling to hold context across all four squads.

**Walkthrough:**

The engineering VP maps the current structure and finds that the 4 existing squads align roughly to two clusters: two squads focused on the core platform and two squads split between analytics and integrations. Dependency data shows the core platform squads coordinate heavily with each other but rarely with the analytics/integrations squads. The VP defines the split: Tribe A (Core Platform) with the 2 existing squads plus 4 new squads covering core features, and Tribe B (Extend) with the 2 existing squads plus 4 new squads covering analytics, integrations, and a new API marketplace. Each tribe gets a dedicated tribe lead hired from within.

The existing chapter for backend engineering now spans both tribes, so the VP formalizes the chapter lead's cross-tribe role and adds a biweekly sync. No additional governance is added at this stage because 2 tribes can coordinate informally. The quarterly review at month 3 shows dependency conflicts between the tribes dropped by 40% compared to the pre-split baseline, and both tribe leads report being able to hold full context for their domain.

## Example: Enterprise Company Managing 8 Tribes

**Scenario:**

A large fintech company has 400 engineers organized into 8 tribes of 5-8 squads each. Cross-tribe dependencies are causing quarterly planning to take 3 weeks. Three tribes share a payments processing platform, and changes to that platform create bottlenecks. Architecture decisions are inconsistent across tribes, with each tribe using different API standards and deployment patterns.

**Walkthrough:**

The head of engineering conducts a dependency analysis and finds that the payments platform is the root cause of 60% of all cross-tribe dependencies. Rather than splitting any tribe, she creates a dedicated Platform tribe by extracting the payments-related squads from the three affected tribes into a single new tribe with a clear mission: provide stable, versioned APIs that other tribes consume without coordination. This reduces the 3 existing tribes' dependency surface immediately. For governance, she introduces a quarterly planning cadence where tribe leads align on shared priorities over 3 days instead of the ad-hoc 3-week process.

She also launches an Architecture Guild with representatives from each tribe and a mandate to produce shared API standards within 60 days. At the 90-day retrospective, quarterly planning completed in 4 days, cross-tribe dependency escalations dropped by 50%, and the Architecture Guild delivered a shared API style guide that 6 of the 9 tribes adopted immediately.

## Example: Fully Remote Company Scaling Across Time Zones

**Scenario:**

A remote-first B2C company with 120 engineers spread across US, Europe, and APAC time zones has 3 tribes of 5-6 squads each. Chapters are struggling because chapter members are in different time zones, making synchronous meetings difficult. Two squads in the growth tribe have missions that overlap significantly, causing ownership confusion over the onboarding flow.

**Walkthrough:**

The VP of Engineering starts with the acute problem: the two overlapping squads. She pulls both squads into a 2-hour mission clarification workshop (async-friendly, using a shared Miro board with a 48-hour comment window for APAC members). They discover that one squad owns user acquisition up to signup, and the other owns activation from signup through day-7 retention, but the onboarding flow from signup to first value spans both missions. She spawns a third squad, Onboarding, by pulling 2 engineers from each existing squad and hiring 3 new engineers.

The interface contract is explicit: Acquisition owns the signup form and hands off a user_created event, Onboarding consumes that event and owns the flow through first-value-moment, then emits a user_activated event that the Retention squad consumes. For the chapter time-zone problem, she splits the backend chapter into two sub-chapters (Americas and EMEA/APAC) with a shared async channel and a monthly recorded sync that alternates between a US-friendly and APAC-friendly time. Chapter leads from each sub-chapter meet biweekly during the EU-US overlap window to ensure standards stay consistent. At the 90-day review, onboarding conversion improved by 12%, and chapter participation (measured by attendance and async contribution) increased by 35%.

## Example: Early-Stage Company Deciding Whether to Adopt Tribes at All

**Scenario:**

A seed-stage startup with 18 engineers in 3 squads is considering whether to formalize a tribe structure. They have one informal tech lead who coordinates across all three squads. They expect to grow to 30-40 engineers in the next year.

**Walkthrough:**

The CTO runs through the scaling assessment and finds no pressure points: the tech lead holds full context comfortably, cross-squad dependencies are resolved in the daily standup, and all engineers know each other well enough for informal coordination. She decides not to introduce a tribe structure yet. Instead, she documents the trigger thresholds that would prompt formalization: if they exceed 5 squads or 35 engineers, if the tech lead reports inability to hold full context, or if cross-squad dependency resolution starts taking more than 2 days. She establishes a single frontend chapter (4 engineers across the 3 squads) with a weekly sync to maintain UI consistency, and a lightweight guild for infrastructure practices.

The scaling plan is a 3-page document listing these thresholds and the planned responses. Six months later, when headcount reaches 28 and a fourth squad is about to launch, the CTO revisits the plan, decides the thresholds have not yet been hit, and continues without formal tribe structure but schedules the next review for when the fifth squad forms.
