# Examples: Shaping Product Pitches

## Example: SaaS Reporting Feature for a Small Product Team

**Scenario:**

A B2B project management tool with 2,000 active accounts and a four-person engineering team. The most common support ticket category is "how do I see my team's progress this month." The team works in six-week cycles. One product person acts as the shaper.

**Walkthrough:**

The shaper reviewed the last 30 support tickets in the reporting category and identified a pattern: team leads want a weekly summary of completed and in-progress work per project, but currently must click into each project individually and count items. " The shaper set a six-week appetite because the problem affects a large segment of paying customers and touches core data models. For the solution, the shaper drew three fat-marker sketches: a new summary view accessible from the main navigation showing project names with progress bars, a detail panel that expands when clicking a project to show completed and active items for the selected week, and a "share" action that generates a read-only link. The breadboard showed: Summary View (affordances: project list, week selector, share button) with connections to Detail Panel (affordances: item list, status filters) and Share Link (affordances: copy URL, set expiration).

Rabbit holes identified: the current database does not index items by completion date (resolution: the shaper ran a test query and confirmed adding an index would take under an hour), and the "share" feature could expand into a full permissions system (resolution: cut to simple expiring link with no authentication). No-gos included: no PDF export, no custom date ranges beyond weekly, no per-person breakdown. The pitch was three pages plus two sketched photos, and the betting table approved it in their next session.

## Example: E-Commerce Checkout Flow Improvement for a Mid-Size Team

**Scenario:**

An online retailer with 50,000 monthly orders, an eight-person product and engineering team, and a checkout abandonment rate of 68%. Analytics show the address entry step has the highest drop-off. The team uses two-week small batches alongside six-week big batches.

**Walkthrough:**

The shaper examined session recordings and found that mobile users were abandoning at the address form because it required 11 fields on a single scrolling page with no autofill support. " The shaper set a two-week small batch appetite. The reasoning: this is a high-impact conversion problem, but the solution should be narrow since the team has a six-week project running in parallel. The solution sketch showed a single fat-marker screen: a simplified address form with an address autocomplete field at the top (using a third-party geocoding API the company already pays for but does not use in checkout), followed by only three editable fields (apartment number, phone, delivery instructions).

The breadboard was simple: Checkout Cart connects to Address Step (affordances: autocomplete input, edit fields, continue button) connects to Payment Step. Rabbit holes: the geocoding API returns addresses in a format that may not match the warehouse system's required format (resolution: the shaper tested 20 sample addresses and confirmed the mapping works for US addresses but not Canadian ones). No-gos: no Canadian address support in this batch, no guest checkout changes, no payment step modifications. The pitch was one and a half pages.

The betting table slotted it into the next cycle as a small batch.

## Example: Internal Tool for a Large Organization

**Scenario:**

A 200-person company where the operations team manually reconciles vendor invoices against purchase orders using spreadsheets. The reconciliation takes one full-time employee three days per week. The product team shapes internal tools alongside customer-facing features.

**Walkthrough:**

The shaper spent two hours shadowing the operations team member who does reconciliation. The core problem: invoices arrive as PDFs via email, purchase orders live in the ERP, and the employee manually cross-references invoice line items against PO line items in a spreadsheet, flagging discrepancies for the finance director. " The shaper set a six-week appetite because the ROI (recovering 24 hours per week of skilled labor) justified a full cycle investment. The solution used breadboards rather than fat-marker sketches because the tool is workflow-heavy with minimal visual design: Upload Screen (affordances: drag-and-drop PDF upload, PO number lookup) connects to Match Review (affordances: auto-matched line items listed with confidence scores, unmatched items flagged, approve or reject buttons per line) connects to Discrepancy Report (affordances: list of rejected matches, export to ERP format, email to finance director).

The shaper identified three rabbit holes: PDF parsing accuracy for different vendor invoice formats (resolution: tested three PDF parsing libraries against 15 real invoices and found one that handled 13 of 15 correctly, with the two failures being image-based PDFs that would need manual entry), line item matching logic when descriptions differ between invoice and PO (resolution: flagged as needing fuzzy matching but scoped to a simple keyword overlap score rather than ML-based matching), and ERP integration for pushing approved matches (resolution: removed from scope, replaced with CSV export that the ops team can import manually). No-gos: no automatic approval of matches without human review, no image-based PDF support (manual entry fallback), no direct ERP write-back. The pitch was four pages with two breadboard diagrams and became the top-priority bet for the next cycle.

## Example: Mobile App Feature for a B2C Startup

**Scenario:**

A fitness app startup with 15,000 monthly active users and a three-person team (one designer, two engineers). User interviews revealed that people stop using the app after two weeks because they cannot see their progress over time. The team runs four-week cycles instead of six.

**Walkthrough:**

The shaper (who is also the founder) re-read transcripts from eight user interviews. " The appetite was set at four weeks (a full cycle for this team). The solution included three fat-marker sketches: a progress tab in the bottom navigation showing a simple line chart of workout frequency per week, a personal records section listing the user's best performance for each exercise type, and a milestone card that appears after completing 10, 25, 50, and 100 workouts. The sketches were intentionally rough, showing only the data displayed and the navigation path, not colors, typography, or exact layout.

Rabbit holes: calculating personal records requires retroactively processing all historical workout data (resolution: the shaper wrote a quick database query and confirmed the dataset is small enough to compute on the fly for current user volumes, with a note to revisit if users exceed 100,000), and the milestone card could expand into a full gamification system (resolution: scoped to four fixed milestones with no badges, streaks, or social sharing). No-gos: no social comparison features, no streak tracking, no coach commentary on progress, no integration with external fitness devices. The pitch was two pages with three phone-sized sketches photographed from a notebook. The team bet on it for their next cycle and shipped it in three and a half weeks.
