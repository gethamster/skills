# Examples: Building a GO Product Roadmap Template

## Example: Early-Stage B2B SaaS (5-Person Product Team)

**Scenario:**

A Series A project management tool with one product manager, three engineers, and a designer. The CEO wants to see a roadmap for investor updates. The team has never used a formal roadmap before and works primarily from a Jira backlog. Budget for dedicated roadmap tools is zero.

**Walkthrough:**

The PM opens Google Sheets and creates a new spreadsheet. Row 1 is a merged header with the product vision: "Make project collaboration effortless for teams under 50 people." Row 2 has column headers: Column A is "Goals & Features," Column B is "Now: Q3 2025 (Jul-Sep)," Column C is "Next: Q4 2025 (Oct-Dec)," Column D is "Later: H1 2026." The PM defines three goals for Q3: "Increase weekly active users from 2,000 to 3,500," "Reduce churn rate from 8% to 5%," and "Achieve SOC 2 Type II compliance." Under the first goal, they nest three features: "Redesigned onboarding flow," "Team invite improvements," and "Weekly digest email." Each feature gets a status column (Not Started, In Progress, Shipped) and an owner column. Below the features, a green-highlighted row shows the metric: "WAU | Baseline: 2,000 | Target: 3,500 | Measured: weekly via Mixpanel." The PM duplicates this structure for the other two goals, populates Q4 at a higher level with only goals and tentative features, and leaves H1 2026 with theme-level items like "Enterprise readiness" and "Integrations expansion." Total build time: 50 minutes. The CEO uses the same sheet for investor updates by collapsing the feature rows and showing only goals and metrics.

## Example: Mid-Market B2C Mobile App (Multiple Product Squads)

**Scenario:**

A consumer fitness app with three product squads (Growth, Engagement, Monetization), each with its own PM. The VP of Product needs a unified roadmap for the quarterly all-hands and leadership team reviews. Each squad currently maintains its own Notion page with no consistent format.

**Walkthrough:**

The VP of Product creates a master Google Slides template with five slides. Slide 1 is the title slide with the product vision ("Help 10 million people build lasting fitness habits") and date range. Slide 2 is the executive summary showing all goals across squads in a three-column layout (Now, Next, Later) with color coding by squad: blue for Growth, green for Engagement, orange for Monetization. Each goal is a card with the goal statement and target metric only, no features.

Slides 3-5 are squad-specific detail slides, one per squad, using the full goal-feature-metric structure. " Each squad PM owns their detail slide and updates it weekly. The VP reviews the executive summary slide bi-weekly with the leadership team. The template is duplicated each quarter with a fresh copy, and the previous quarter's deck is archived with actual results filled into the metrics rows.

Total initial build: 75 minutes for the VP, plus 20 minutes per squad PM to populate their slide.

## Example: Enterprise B2B Platform (Dedicated Roadmap Tooling)

**Scenario:**

A 200-person product organization building an enterprise data analytics platform. Eight product managers cover different platform areas (ingestion, transformation, visualization, governance, etc.). The company uses Productboard and needs a template configuration that standardizes how all PMs enter and present roadmap data. Stakeholders include C-suite, sales, customer success, and engineering leadership, each needing different views.

**Walkthrough:**

The Director of Product Management creates a Productboard configuration that enforces the GO structure. " Every feature in Productboard must be tagged to at least one strategic goal, enforced by a required field rule. They create a "Roadmap View" in Productboard with rows grouped by Strategic Goal and columns set to quarterly time horizons. A second view, "Executive Roadmap," hides all features and shows only goals with their linked objectives and key results.

A third view, "Engineering Roadmap," shows features grouped by platform area with effort estimates and dependencies visible. The Director documents the configuration in a Confluence page that explains how each PM should enter new features (including required fields: goal linkage, effort t-shirt size, squad owner, target quarter). They also create a Productboard "Parking Lot" view for features submitted by sales or customer success that have not yet been linked to a goal. Each quarter, the Director exports the executive view to a Google Slides presentation for the board meeting, adding commentary about metric progress.

Total configuration time: 3 hours for initial Productboard setup, 45 minutes for documentation, and a 30-minute training session for PMs.

## Example: Non-Profit Digital Product (Volunteer Team, Minimal Tooling)

**Scenario:**

A non-profit building a volunteer coordination platform with a part-time product lead and four volunteer developers. Budget is effectively zero. Stakeholders include the board of directors (meets quarterly), the executive director (meets monthly), and the development team (meets weekly). The product lead needs a product roadmap template that all three audiences can use without a walkthrough.

**Walkthrough:**

The product lead creates a Notion database with four properties: "Goal" (title), "Time Horizon" (select: This Quarter, Next Quarter, Future), "Status" (select: Planning, Building, Shipped, Paused), and "Success Metric" (text). " Below the vision, they embed three filtered views of the same database: a board view grouped by Time Horizon for the executive director, a table view sorted by Status for the dev team, and a gallery view showing only goals (no features) for the board. Under each goal entry in the database, they use Notion's page content area to list supporting features as a simple checklist with owner initials and target completion dates. " Total build time: 35 minutes.

The product lead shares the Notion page link with all stakeholders and pins it in the team Slack channel.
