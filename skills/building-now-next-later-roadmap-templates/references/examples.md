# Examples: Building Now-Next-Later Roadmap Templates

## Example: Early-Stage SaaS Startup (4-Person Team, Google Sheets)

**Scenario:**

A pre-Series A SaaS startup with one product manager, two engineers, and one designer needs a roadmap they can share with their three angel investors and early customers. Budget for tooling is zero. The team uses Google Workspace for everything. They have about 15 initiatives across all horizons.

**Walkthrough:**

The PM creates a Google Sheet with three column groups separated by gray spacer columns: Now (columns A-G), Next (columns I-L), and Later (columns N-P). " Row 2 contains one-sentence horizon definitions. Row 3 is the header row. Now columns are: Title, Owner, Status (dropdown: Not Started, In Progress, Blocked, Done), Effort (S/M/L), Confidence (🟢🟡🔴 via dropdown), Link to Spec.

Next columns are: Title, Problem Statement, Confidence, Open Questions. Later columns are: Title, Strategic Theme, Hypothesis. Conditional formatting turns the Confidence column green, yellow, or red. The PM populates 6 items in Now, 5 in Next, and 4 in Later.

She shares a view-only link with investors and pins it in the team Slack. The first review meeting surfaces that engineers want a "Blocked By" column in Now, so she adds it in week two. By week three, the template is stable and the team reviews it every Monday in 20 minutes.

## Example: Mid-Size B2B Product Team (12 People, Notion)

**Scenario:**

A B2B product team with two squads, a group PM, and regular stakeholder reviews with sales and customer success. The company uses Notion as its internal wiki. They have about 22 initiatives and need both a team view (detailed) and a stakeholder view (simplified).

**Walkthrough:**

The group PM creates a single Notion database called "Product Roadmap" with properties: Title, Horizon (Select: Now, Next, Later), Squad (Select: Growth, Platform), Confidence (Select: High, Medium, Low with green/yellow/red colors), Owner (Person), Status (Select: Not Started, In Progress, Blocked, Shipped), Problem Statement (Text), Effort (Select: S, M, L, XL), Open Questions (Text), Strategic Theme (Select from company OKRs), and Spec Link (URL). She creates two Board views: "Team View" grouped by Horizon, showing all fields, and "Stakeholder View" grouped by Horizon, showing only Title, Confidence, and Squad. The Stakeholder View uses a filter to hide items with Status = Shipped. A callout block above both views contains the legend: horizon definitions, confidence definitions, and the last-reviewed date.

She shares the Stakeholder View link with sales and CS leads with comment-only permissions. During the first review, the team realizes they need a "Customer Segment" property on Next items so sales can see which prospects benefit. She adds it in week two. The template stabilizes by week three and becomes the single artifact referenced in all cross-functional meetings.

## Example: Enterprise Product Org (3 Product Lines, Miro)

**Scenario:**

An enterprise company with three product lines, each with its own PM, needs a unified roadmap view for the CPO's quarterly board presentation. The company uses Miro for cross-team workshops. Total initiative count across all lines is about 40, and the board wants a single visual they can absorb in 90 seconds.

**Walkthrough:**

" Inside the frame, three horizontal swim lanes represent the three product lines (Payments, Analytics, Compliance). Each swim lane is divided into three vertical sections: Now, Next, Later. Now cards are blue with solid borders and carry Title, Owner, Status, Confidence dot, and Effort. Next cards are light blue with dashed borders and carry Title, Problem Statement, and Confidence dot.

Later cards are white with gray text and carry only Title and Strategic Theme. A legend frame in the top-left defines horizons and confidence levels, plus the last-reviewed date. The total card count is 38 items, within the 25-per-product-line guideline since no single line exceeds 14. For the board presentation, the PM duplicates the frame, removes the Owner and Status fields from Now cards to simplify, and exports it as a single-page PDF.

The board can scan all three product lines and all three horizons in one view. After the board meeting, the CPO requests a "Revenue Impact" tag on Now items, which gets added in the next iteration. The working Miro board is updated weekly by each PM; the board PDF is regenerated quarterly.

## Example: Solo Product Manager Using ProductBoard

**Scenario:**

A solo PM at a 30-person company uses ProductBoard for feature tracking and wants to create a now next later roadmap template within the tool rather than maintaining a separate artifact. The company has about 18 features in various stages.

**Walkthrough:**

The PM creates a custom Roadmap view in ProductBoard using the timeline-free "Column" layout. She defines three columns mapped to a custom Status field: Now, Next, Later. Each feature card in ProductBoard already carries a title, description, and user impact score. She adds a custom field called "Confidence" with three options (High, Medium, Low) and color-codes them green, yellow, red.

For Now features, she ensures the Owner and Effort fields are filled. For Next features, she writes a one-line problem statement in the description and leaves Effort blank. For Later features, she tags each with a strategic objective from the company's OKR list and writes a hypothesis in the description. She creates two views: "Internal Roadmap" showing all fields, and "Customer-Facing Roadmap" showing only Title, Confidence, and the column position, with internal-only features filtered out.

The customer-facing view is published via ProductBoard's portal feature. She adds a text widget at the top of each view serving as the legend. During her first solo review, she realizes three Later items have enough customer evidence to move to Next, which validates that the confidence indicators are working. The template stabilizes after two cycles and she reviews it every Friday in a 15-minute solo session.
