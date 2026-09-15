# Examples: Mapping User Personas to Journey Narratives

## Example: B2B SaaS onboarding for a project management tool

**Scenario:**

A 12-person product team at a project management SaaS company has a story map covering the user journey from signup to first project completion. They have three personas: Solo Freelancer (individual, no team, needs to track personal projects), Team Lead (manages 5-8 people, needs to assign and monitor work), and IT Admin (does not use the tool daily but must configure SSO and permissions). The backbone has eight activities: Sign Up, Configure Workspace, Invite Team, Create Project, Assign Tasks, Track Progress, Generate Reports, and Manage Billing.

**Walkthrough:**

The team starts with Solo Freelancer. " Walking the backbone, Priya engages with Sign Up (critical), Configure Workspace (helpful but only if minimal), skips Invite Team entirely, engages with Create Project (critical), Assign Tasks (helpful, self-assigns), Track Progress (critical), skips Generate Reports, and skips Manage Billing until trial ends. The team marks Invite Team, Generate Reports, and Manage Billing as skippable for this persona. Next, they walk Team Lead Marcus.

His narrative emphasizes inviting his team on day one and needing reports for weekly standups. He engages with all eight activities but his friction concentrates on Invite Team (bulk invite is clunky) and Generate Reports (cannot filter by team member). IT Admin Kenji engages only with Configure Workspace (SSO setup), Invite Team (bulk provisioning), and Manage Billing. The overlay reveals that Configure Workspace is a convergence zone but with radically different task needs per persona.

Sign Up through Create Project is the convergence core for the first release. Invite Team is a divergence seam: Priya skips it, Marcus needs simple invites, Kenji needs SAML provisioning. The team slices Release 1 around Priya and Marcus's shared journey and defers Kenji's admin tasks to Release 2.

## Example: Consumer mobile app for meal planning

**Scenario:**

A five-person startup is building a meal planning app. Their story map covers Discovery (browse recipes), Planning (build weekly plan), Shopping (generate grocery list), Cooking (follow recipe), and Reflection (rate and save favorites). They have two personas: Busy Parent (plans for a family of four, shops once a week, cooks in under 30 minutes) and Health-Focused Single (tracks macros, shops at specialty stores, willing to spend time cooking complex recipes).

**Walkthrough:**

" Walking the backbone, Alex's critical activities are Planning and Shopping. Discovery is helpful but only if filtered by cook time and kid-friendly tags. Cooking is critical but only step-by-step mode with timers. Reflection is nice-to-have.

Health-Focused Single Jordan's narrative centers on macro tracking and complex recipes. Jordan spends significant time in Discovery (browsing by nutritional profile), minimal time in Planning (plans day-by-day, not weekly), and skips the Shopping list because he shops at three different stores and maintains his own list. The divergence seam is sharp at Planning: Alex needs batch weekly planning, Jordan needs daily flexibility. The convergence zone is Discovery, but with different filter needs.

The team decides Release 1 targets Alex's journey because the family meal planning use case has higher market volume, and they design the recipe filter system to accommodate both filter types so Jordan is not locked out. Jordan-specific features (macro tracking integration, daily planning mode) move to Release 2.

## Example: Internal tool for HR onboarding workflow

**Scenario:**

An enterprise HR team is mapping a new employee onboarding system. The backbone covers Pre-Boarding (before day one), Day One Setup, First Week Training, 30-Day Check-In, and 90-Day Review. They have three personas: New Hire (the employee being onboarded), Hiring Manager (responsible for the new hire's integration), and HR Coordinator (manages compliance paperwork and system access). The team has 20 people in the workshop, split across HR and engineering.

**Walkthrough:**

The team selects New Hire and HR Coordinator as the first two personas, deferring Hiring Manager to a follow-up session to keep the workshop manageable. " Sam's journey concentrates on Pre-Boarding (completing forms, getting equipment) and Day One Setup (finding her desk, meeting her manager, accessing systems). Training, Check-In, and Review are important but lower friction because they are scheduled and guided. " Dana's journey concentrates heavily on Pre-Boarding (tracking form completion across multiple hires) and has light engagement with every other activity for compliance verification.

The divergence seam is at Pre-Boarding: Sam needs a simple, reassuring checklist, while Dana needs a multi-hire dashboard with completion tracking and escalation alerts. The convergence zone is Day One Setup, where both personas need system access provisioning to work. The team slices Release 1 around the Pre-Boarding and Day One activities, building Sam's checklist view and Dana's dashboard view as two interfaces on the same underlying data model.

## Example: E-commerce platform for handmade goods marketplace

**Scenario:**

A marketplace startup connecting artisan sellers with buyers has a story map covering Browse, Evaluate (view product detail, read reviews), Purchase, Track Order, and Post-Purchase (leave review, request return). Two personas: Gift Buyer (purchases for others, needs fast shipping confirmation and gift wrapping, browses by occasion) and Collector (purchases for self, cares deeply about maker provenance, browses by artisan rather than category). The team has limited engineering resources and can only ship one focused release.

**Walkthrough:**

Gift Buyer Maria's narrative: "Maria's sister's birthday is in six days. " Maria's critical path runs through Browse (by occasion and shipping speed), Evaluate (focused on delivery estimate and gift options, not maker bio), and Purchase (gift wrapping, gift note, express shipping). Track Order is critical because she is shipping to someone else and needs to confirm delivery. Post-Purchase is skippable because she rarely returns gifts.

Collector James's narrative centers on discovering new artisans, reading their stories, and adding to his collection over time. James's critical path is Browse (by artisan, by material, by region) and Evaluate (maker bio, provenance details, material sourcing). Purchase is straightforward for him, and Track Order is low-priority because he is patient. Post-Purchase is important because he leaves detailed reviews.

The divergence seam is at Browse and Evaluate: Maria needs occasion-based navigation and delivery speed filters, James needs artisan-based navigation and rich provenance content. The team decides to ship Release 1 targeting Maria because gift-driven purchases have higher average order value and urgency-driven conversion. They ensure the Browse architecture supports both navigation paradigms so adding James's artisan browsing in Release 2 does not require a rebuild.
