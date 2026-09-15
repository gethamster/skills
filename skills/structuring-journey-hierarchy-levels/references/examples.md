# Examples: Structuring Journey Hierarchy Levels (L0-L3)

## Example: B2B SaaS Company with Sales-Led and Self-Serve Motions

**Scenario:**

A project management SaaS company serves both SMB customers (self-serve, $20/month) and enterprise customers (sales-assisted, $50K+ annually). They have 12 existing journey maps created by different teams over three years, with no consistent structure or level classification. The CX team has a mandate to build a unified journey management practice in Q1.

**Walkthrough:**

The team starts by auditing all 12 existing maps and classifying them by approximate scope. They find 2 maps covering broad lifecycle views, 4 covering onboarding variations, 3 covering support interactions, and 3 covering renewal and expansion. ' They decompose L0 into 6 L1 stages: Discovery, Evaluation, Purchase, Onboarding, Active Use, and Renewal. Each L1 gets an entry trigger and exit condition.

' They then decompose each L1 into L2 scenarios. Onboarding gets 3 L2s: Self-Serve Onboarding (SMB), Guided Onboarding (Enterprise), and Migration from Competitor. Renewal gets 2 L2s: Auto-Renewal (SMB) and Negotiated Renewal (Enterprise). The total hierarchy at L2 has 18 scenario journeys.

They decompose only the Enterprise Onboarding L2 into L3s for the first iteration, identifying 5 micro-journeys: kickoff meeting, data migration, team provisioning, admin training, and success milestone review. The hierarchy tree is published in Notion with links to the 12 existing maps placed at their correct nodes. Within two weeks, the product and success teams are using L-level language in sprint planning.

## Example: D2C E-Commerce Brand with Physical and Digital Products

**Scenario:**

A consumer skincare brand sells through their website, Amazon, and 200 retail partners. They have strong acquisition data but limited visibility into post-purchase experience. The brand team has basic journey maps for the website purchase flow but nothing covering retail or repeat purchase behaviors. They want a hierarchy that covers all channels.

**Walkthrough:**

' They identify 5 L1 stages: Awareness, Consideration, First Purchase, Product Experience, and Repurchase. They resist the urge to create separate L0s for online and retail customers, recognizing that many customers interact across both channels. At L2, they decompose based on channel and context. First Purchase gets 4 L2 scenarios: Website Direct Purchase, Amazon Purchase, Retail Discovery Purchase, and Subscription Enrollment.

Product Experience gets 3 L2s: First-Time Use, Routine Use, and Issue Resolution. The team then drills Subscription Enrollment into L3s because it is a high-priority growth initiative: browsing subscription options, selecting a plan, entering payment details, and confirming first shipment. Each L3 connects to specific website UI flows that the product team can directly optimize. The completed hierarchy reveals a major gap: there is no journey coverage for the retail channel after purchase.

The brand has no visibility into how retail customers experience the product or what drives them to repurchase. This gap becomes a Q2 research priority.

## Example: Healthcare Platform Connecting Patients, Providers, and Payers

**Scenario:**

A digital health platform serves three distinct user types: patients booking and managing care, providers delivering care through the platform, and insurance payers processing claims. Each user type has its own journey, but the journeys interconnect at shared touchpoints like appointment scheduling and billing. The team needs a hierarchy that accommodates multiple user types without creating three separate, disconnected frameworks.

**Walkthrough:**

The team defines one L0 for each user type that interacts with the platform: Patient Lifecycle, Provider Lifecycle, and Payer Lifecycle. They debate whether this violates the single-L0 rule, but conclude that these are genuinely separate relationships with the platform, not segments within one relationship. The Patient L0 gets 6 L1 stages: Symptom Awareness, Provider Search, Appointment Booking, Care Delivery, Follow-Up, and Ongoing Health Management. At L2, Appointment Booking decomposes into: First Visit Booking, Follow-Up Booking, Specialist Referral Booking, and Urgent Care Booking.

At L3, First Visit Booking breaks into: searching available providers, comparing provider profiles, selecting a time slot, entering insurance information, and receiving confirmation. ' This cross-hierarchy linkage is documented as a shared touchpoint annotation in the hierarchy tree. The hierarchy enables the team to assign clear ownership per user type while identifying the 8 shared touchpoints where cross-team coordination is essential.

## Example: Small Startup with Limited Resources

**Scenario:**

A 12-person fintech startup with a single product (a budgeting app) has no existing journey maps. The product manager wants to establish journey thinking but cannot justify weeks of workshop time. The team needs a lightweight hierarchy they can build in a single afternoon and evolve over time.

**Walkthrough:**

The product manager blocks a 3-hour session with the head of growth, the support lead, and one designer. They define L0 as 'User Lifecycle Journey,' from first app store discovery to account deletion or 12 months of inactivity. They identify 4 L1 stages based on their analytics funnel: Discovery (app store or referral to download), Setup (download to completing profile and linking a bank account), Active Budgeting (first budget created to ongoing use), and Lapsed/Re-engagement (30 days inactive to return or churn). They decompose only the Setup L1 into L2s because it has the highest drop-off: Organic Setup (user finds app and self-serves), Referral Setup (user invited by friend, different onboarding flow), and Switch from Competitor (user migrating data).

They defer L3 decomposition entirely, noting that they will add L3s under whichever L2 they decide to optimize first based on drop-off data. The entire hierarchy fits on a single Miro board with 12 nodes. It takes 2 hours to create and 30 minutes to document. The team immediately uses it to structure their next sprint planning conversation, identifying that Referral Setup has a 60% drop-off at bank linking, which becomes their first L3 to decompose and map in detail.
