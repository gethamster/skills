# Examples: Defining MVP Scope Using MoSCoW Categories

## Example: Defining MVP scope for a B2B invoicing SaaS

**Scenario:**

A startup is building an invoicing tool for freelancers. They have 47 user stories, 12 weeks of development capacity with a 3-person team, and pressure from investors to launch quickly. Stakeholders disagree on whether recurring invoices, multi-currency support, and a client portal should be in the MVP.

**Walkthrough:**

The product manager applies the litmus test to all 47 stories. Core invoicing (create, send, mark paid) passes the viability gate — without it, the product can't deliver its core job. Tax calculation passes the legal/compliance gate for target markets. User authentication passes the technical dependency gate.

Recurring invoices fail the viability test — freelancers can manually create invoices for the first release. Multi-currency fails too — the initial launch targets US-based freelancers only. The client portal is clearly a Could-have.

The Must-have list totals 18 stories estimated at roughly 7 weeks — 58% of the 12-week capacity, safely under the 60% threshold. Should-haves (recurring invoices, multi-currency, PDF customization) are tagged as Release 1.1 candidates.

When the investor asks about multi-currency, the PM shows the scope document: 'It's the top Should-have for Release 1.1, targeted for week 14. Adding it to MVP would push launch by 2 weeks and require removing either tax calculation or payment tracking — which would you prefer to cut?' The investor agrees to the current scope.

## Example: Negotiating scope reduction for an enterprise feature release

**Scenario:**

A product team at an enterprise software company has 6 weeks to deliver a new analytics dashboard. The initial Must-have list from the stakeholder workshop contains 24 items consuming an estimated 8 weeks of effort — well over the 60% threshold and exceeding total capacity.

**Walkthrough:**

The product lead flags the capacity problem and reconvenes the stakeholders. She walks through each Must-have using the litmus test. Three items (SSO integration, data export, real-time alerts) are revealed to be Must-haves — they're contractually required for the launch customer.

Twelve items pass the viability gate: core dashboard views, filtering, date ranges, and basic charting. The remaining nine items — custom report builder, scheduled email reports, drag-and-drop layout, advanced drill-downs, role-based views, benchmark comparisons, embedded sharing, annotation tools, and dark mode — are reclassified.

The trimmed Must-have list of 15 items estimates at 3.5 weeks (58% of capacity). Six items move to Should-have, and three to Could-have. The team documents each reclassification with a one-line rationale. The scope document is shared company-wide, and the engineering lead confirms the timeline is achievable. Two weeks into development, the sales team requests adding the custom report builder. The PM asks them to identify a swap — they can't, and agree to wait for Release 1.1.
