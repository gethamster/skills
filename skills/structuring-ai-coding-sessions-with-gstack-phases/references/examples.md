# Examples: Structuring AI Coding Sessions from Decision-Making to Execution

## Example: Solo Developer Fixing a Payment Processing Bug

**Scenario:**

A solo developer at a small SaaS startup needs to fix a bug where Stripe webhook events are occasionally dropped, causing customers to be charged without their subscription status updating. The codebase is a Node.js API with about 15,000 lines of code. The developer has 3 hours to fix and deploy the solution.

**Walkthrough:**

The developer starts by writing a problem statement: "Stripe webhook events for subscription updates are dropped approximately 2% of the time, causing customer records to show 'active' when the subscription has been canceled or updated. Success criteria: webhook processing succeeds for 99.9% of events over a 7-day window, with failed events retried automatically and alerting when retries are exhausted." They feed this to Claude Code with an explicit instruction not to generate code yet. The agent asks three clarifying questions about the current webhook handler, the database transaction model, and whether idempotency keys are used. These questions reveal that the current handler has no idempotency protection, which the developer had not considered as part of the problem.

For architecture review, the agent proposes three approaches: (1) add retry logic within the existing handler, (2) introduce a message queue between webhook receipt and processing, or (3) use Stripe's built-in retry mechanism with idempotent event processing. The developer selects option 3 as the lowest-risk approach, since it leverages Stripe's infrastructure rather than building custom retry logic. A QA perspective review flags that the idempotency check needs a database index on the event ID column, and that the current test suite has no webhook integration tests.

The task breakdown produces four tasks: add an events table with unique constraint on Stripe event ID, modify the webhook handler to check for duplicate events before processing, add integration tests using Stripe's test webhook events, and update the monitoring dashboard. Each task is completed in a separate prompt with fresh context. End-to-end verification confirms that replaying the same webhook event twice results in only one database update, and the monitoring dashboard shows the new retry metrics. Total session time: 2 hours 15 minutes, including 25 minutes on framing and architecture.

## Example: Team Lead Planning a Database Migration at a Growth-Stage Company

**Scenario:**

A team lead at a 50-person company needs to migrate a core PostgreSQL table from a monolithic schema to a partitioned schema to handle growing query volumes. The table has 200 million rows, the application serves 10,000 requests per minute during peak hours, and the migration must complete with zero downtime. The team has two backend engineers and one week.

**Walkthrough:**

The team lead frames the problem with quantified constraints: "Migrate the events table (200M rows, 45GB) from a single table to range-partitioned by month. Success criteria: all queries continue to return correct results during and after migration, p99 query latency stays below 200ms, zero application errors during migration, and migration completes within 5 business days." The AI agent's clarifying questions surface that the application uses several raw SQL queries that reference the table directly and will need modification for the partitioned schema.

Architecture review generates three migration strategies: (1) pg_partman with online partitioning, (2) logical replication to a new partitioned table with a cutover, and (3) a custom dual-write migration with incremental backfill. The engineer perspective evaluates each for operational complexity. The QA perspective identifies that strategy 1 requires PostgreSQL 14+ (the production database is on 13), eliminating it immediately. This catch, made during a 5-minute perspective review, saves what would have been a day of wasted implementation work. Strategy 2 is selected.

The implementation plan produces 12 tasks across the week: create the partitioned table structure, set up logical replication, backfill historical data in batches, modify application queries, run shadow traffic comparison, perform cutover, verify data integrity, and clean up. Each task has a done criterion and an estimated duration. The team lead assigns tasks to the two engineers, with each engineer completing their tasks using structured AI sessions following the same phased workflow. The session logs from each engineer's work become the migration runbook, which proves critical when a similar migration is needed for two other tables the following quarter.

## Example: Junior Developer Adding a Feature to an Open-Source Project

**Scenario:**

A junior developer with 8 months of experience wants to add dark mode support to a React component library used by 500+ projects. They are contributing to an open-source project they did not write, so they need to understand existing patterns before modifying code. The component library has 40 components, a Storybook setup, and uses CSS-in-JS with styled-components.

**Walkthrough:**

The developer starts with a problem statement that acknowledges their knowledge gaps: "Add a dark mode theme to the component library so that consuming applications can toggle between light and dark themes. Success criteria: all 40 components render correctly in both themes, the API for toggling themes follows the existing ThemeProvider pattern, no visual regressions in existing light theme, and the solution is documented in Storybook." They prompt the AI agent to first analyze the existing codebase's theming approach before proposing solutions. The agent identifies that the library uses a ThemeProvider with a single light theme object, and that 12 of the 40 components have hardcoded color values that bypass the theme.

Architecture review produces three approaches: (1) extend the existing theme object with a mode property and dark color tokens, (2) create a separate dark theme object and switch between them at the provider level, and (3) use CSS custom properties for colors with theme-level overrides. The developer applies a CEO perspective, which asks whether users of the library have requested dark mode (yes, it is the most-upvoted issue). The engineer perspective recommends approach 2 because it aligns with the library's existing pattern and requires the least refactoring of component internals. The QA perspective flags the 12 components with hardcoded colors as the primary risk.

Task decomposition produces 8 tasks: audit all 40 components for hardcoded colors (the agent generates a script to find them), create the dark theme token object, refactor the 12 hardcoded components to use theme tokens, build a theme toggle component, add Storybook dark mode decorator, write visual regression tests, update documentation, and submit the PR. The developer completes each task in a separate session, using the prior session's log as context. The final PR includes a session summary that explains every design decision, which the maintainers praise as the most thorough contribution documentation they have received.

## Example: B2B Platform Team Implementing Multi-Tenant Data Isolation

**Scenario:**

A platform team at a B2B SaaS company serving 200 enterprise customers needs to implement row-level security for a new reporting module. Compliance requirements mandate that no customer can ever access another customer's data, even in error. The existing codebase uses a shared database with tenant_id columns but no database-level enforcement. The team has a tech lead, two senior engineers, and three weeks.

**Walkthrough:**

The tech lead frames the problem with compliance language baked into the success criteria: "Implement database-level tenant data isolation for the reporting module such that a query executed in the context of tenant A can never return rows belonging to tenant B, regardless of application-level bugs. Success criteria: all reporting queries are filtered at the database level via PostgreSQL row-level security policies, a test suite demonstrates isolation by attempting cross-tenant access and verifying denial, the implementation passes the compliance team's penetration testing checklist, and query performance degrades by no more than 10% compared to the current unprotected queries."

Architecture review generates approaches spanning row-level security policies, separate schemas per tenant, and application-middleware enforcement. The CEO perspective validates that database-level enforcement is non-negotiable for the enterprise sales pipeline (three prospects have asked for SOC 2 evidence of data isolation). The engineer perspective notes that separate schemas would require rewriting the ORM layer, while RLS policies can be applied incrementally. The QA perspective designs a specific attack scenario: a modified API request that substitutes a different tenant_id in the query parameters, which the RLS policy must block regardless of what the application layer does.

The 3-week implementation plan breaks into three phases: week 1 establishes RLS policies on the reporting tables with integration tests, week 2 modifies the application's database connection to set the tenant context at session level, and week 3 runs performance benchmarks and compliance testing. Each engineer's daily AI sessions follow the phased workflow, with session logs shared in the team's engineering channel. When the compliance team runs penetration testing, the session logs serve as evidence of the threat modeling performed during architecture review, satisfying a SOC 2 control that would otherwise require separate documentation.
