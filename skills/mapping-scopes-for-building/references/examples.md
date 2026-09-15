# Examples: Mapping Scopes Instead of Tasks

## Example: SaaS onboarding flow for a 6-week cycle (small team of 2)

**Scenario:**

A designer and a programmer are building a new user onboarding flow for a B2B SaaS product. The shaped pitch describes a 4-step wizard that collects company info, invites team members, configures initial settings, and shows a getting-started dashboard. The team is two people working a 6-week cycle.

**Walkthrough:**

After reading the pitch together, the team identifies four natural joints matching the wizard steps plus one additional scope for the overall wizard navigation and progress bar. They create five scopes: 'Set up company profile' (form, validation, API, database), 'Invite teammates' (email input, invitation sending, acceptance flow), 'Configure workspace settings' (preferences form, defaults logic, persistence), 'Getting-started dashboard' (checklist UI, completion tracking, first-run content), and 'Wizard navigation' (step indicator, back/forward, skip logic, progress persistence). Each scope is independently demoable. They mark 'Set up company profile' and 'Wizard navigation' as must-haves, 'Invite teammates' and 'Configure workspace settings' as must-haves with room to simplify, and 'Getting-started dashboard' as nice-to-have.

By week 3, the dashboard scope is still uphill and the team decides to simplify it to a static checklist page rather than a dynamic dashboard, cutting the scope down to a 2-day effort. They ship all five scopes on time.

## Example: E-commerce returns feature for a 6-week cycle (team of 3)

**Scenario:**

A team of one designer and two programmers is building a self-service returns feature for an e-commerce platform. The shaped pitch covers return initiation, label generation, refund processing, and a returns dashboard for customer service agents. The team has 6 weeks and the appetite is firm.

**Walkthrough:**

The team drafts an initial scope map with six scopes: 'Start a return' (order lookup, item selection, reason capture), 'Generate return label' (carrier API integration, PDF generation, email delivery), 'Track return status' (status model, customer-facing tracking page, status update webhook), 'Process refund' (refund calculation, payment provider integration, confirmation), 'CS agent dashboard' (list view, filters, detail view, manual override), and 'Return policy enforcement' (eligibility rules, time window checks, category exclusions). In the first two days of building, the team discovers that 'Generate return label' and 'Track return status' are more entangled than expected because the carrier API handles both. ' They also discover that 'Return policy enforcement' touches every other scope and is not independently completable. They dissolve it, distributing the eligibility checks into the 'Start a return' scope where they naturally belong.

The revised map has four scopes. By week 5, the CS agent dashboard is lagging. They simplify it to a basic list view without filters, cutting roughly 3 days of work. They ship the core returns flow on time.

## Example: Internal reporting tool for a 3-week cycle (solo developer)

**Scenario:**

A single developer is building an internal weekly metrics report for the operations team. The shaped pitch describes pulling data from three sources, computing key metrics, and displaying them in a simple dashboard with email delivery. The cycle is 3 weeks with a fixed appetite.

**Walkthrough:**

Working alone, the developer maps three scopes: 'Aggregate data sources' (connect to the three APIs, normalize data into a common format, store weekly snapshots), 'Compute and display metrics' (calculation logic for 5 key metrics, dashboard page with charts, date range selector), and 'Email weekly report' (scheduled job, HTML email template, recipient management). Each scope can be built and verified independently. The developer starts with 'Aggregate data sources' because the other scopes depend on having data available. By the end of week 1, the first scope is done and the second scope is halfway down the hill.

In week 2, the developer realizes the email scope is more complex than expected because of HTML rendering edge cases across email clients. They simplify by sending a plain-text email with a link to the dashboard instead of an inline HTML report. This cuts the scope from 3 days to 1 day. All three scopes ship within the 3-week cycle.

## Example: Mobile app feature for a 6-week cycle (cross-functional team of 4)

**Scenario:**

A team of two mobile developers, one backend developer, and one designer is adding a social sharing feature to a consumer fitness app. The shaped pitch covers share cards, social platform integrations, in-app activity feeds, and friend challenges. The team is large by Shape Up standards and coordination is a concern.

**Walkthrough:**

The team maps seven scopes: 'Design share card' (card layout, stat selection, branding), 'Generate share image' (server-side image rendering, caching, CDN delivery), 'Share to Instagram Stories' (Stories API integration, deep link handling), 'Share to other platforms' (generic share sheet, Twitter/Facebook metadata), 'Activity feed' (feed data model, feed UI, pagination), 'Friend challenges' (challenge creation, invitation, progress tracking, completion), and 'Push notifications for social' (notification triggers, templates, delivery). They immediately mark 'Friend challenges' and 'Push notifications for social' as nice-to-haves. ' Scopes are picked up by pairs rather than individuals, which keeps coordination manageable. By week 4, the core sharing scopes are done.

The team has time to start 'Activity feed' but decides to cut 'Friend challenges' entirely, deferring it to a future cycle. They ship five of seven scopes, and the product is shippable and valuable without the cut scopes.
