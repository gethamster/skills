# Examples: Applying MoSCoW to Project and Software Requirements

## Example: E-commerce Platform Relaunch

**Scenario:**

A mid-size retailer is relaunching their e-commerce platform with a hard deadline of Black Friday. The team has 4 months of development capacity with 8 engineers. The product owner has collected 87 requirements from merchandising, marketing, customer support, and the warehouse team.

**Walkthrough:**

The product owner normalizes all 87 requirements to the feature level and brings them into a Jira board with a custom MoSCoW field. The timebox is defined as "Black Friday launch, November 15 ship date."

In a 3-hour workshop with stakeholders from each department, the team classifies each requirement:

- **Must-have (23 items, ~55% of capacity)**: Product catalog browsing, shopping cart, checkout with credit card payment, order confirmation emails, basic inventory sync with warehouse, PCI compliance requirements, mobile-responsive product pages.
- **Should-have (18 items, ~25% of capacity)**: Wish lists, order tracking for customers, promotional discount codes, customer reviews display, PayPal integration.
- **Could-have (26 items)**: Product recommendations engine, loyalty points program, live chat support widget, social media sharing buttons, advanced search filters.
- **Won't-have this time (20 items)**: Marketplace for third-party sellers, subscription box service, AR product preview, integration with in-store POS system.

The Must-haves at 55% leave comfortable headroom. During sprint 3, a newly discovered legal requirement for cookie consent pushes a new Must-have in, and a Could-have (social sharing buttons) is removed to compensate. The MoSCoW change log captures this shift with the rationale. On November 15, all Must-haves and 16 of 18 Should-haves ship. The go/no-go decision takes 5 minutes.

## Example: Internal HR System Requirements Prioritization

**Scenario:**

An HR department is working with an internal development team to build a new employee self-service portal. There's no hard deadline, but leadership wants an MVP within one quarter. The team has 3 developers and a designer.

**Walkthrough:**

The HR business analyst creates a requirements spreadsheet with 42 items gathered from employee surveys, HR managers, and compliance. The timebox is set as "Q2 MVP delivery."

Rather than a large workshop, the team runs a lightweight Slack-based async classification: the BA proposes a MoSCoW category for each item with a one-line justification, and stakeholders have 48 hours to challenge any classification.

- **Must-have (12 items)**: View and download pay stubs, update personal contact info, submit PTO requests, view PTO balance, manager approval workflow for PTO, SSO authentication.
- **Should-have (10 items)**: View org chart, submit expense reports, upload tax documents, view company holiday calendar.
- **Could-have (11 items)**: Performance review self-assessment, training course catalog, peer recognition badges, dark mode.
- **Won't-have this time (9 items)**: Benefits enrollment (staying on current third-party system for now), AI-powered career path suggestions, Slack integration for PTO notifications.

Only 3 items were challenged—expense reports (HR wanted it as Must-have, but the team showed a workaround existed via email), performance reviews (engineering felt it was Must-have, but HR confirmed the annual cycle didn't start until Q4), and SSO (initially classified as Should-have but moved to Must-have after IT security flagged compliance policy). The entire classification took 4 days asynchronously with minimal meeting time.

The MoSCoW field was added to Jira, and the team referenced it in every sprint planning session. When the designer was out sick for two weeks in month 2, two Could-haves were dropped instantly without drama because the framework had already pre-authorized that flexibility.
