# Examples: Building V2MOM Templates and Worksheets

## Example: Early-Stage Startup (12 People, One Team)

**Scenario:**

A seed-stage SaaS startup with 12 employees and no formal planning process. The CEO wants to introduce V2MOMs for the first time. There is one product team, one sales function, and the CEO. The planning period is the next quarter. Everyone uses Google Docs.

**Walkthrough:**

The CEO creates a single V2MOM template in Google Docs with all five sections, a metadata header (Owner, Time Period, Parent V2MOM, Status), and word limits for each section. " The Vision prompt asks for one sentence under 30 words. Methods are capped at five. The CEO fills out the company V2MOM first as the example, sharing it with the team.

She then asks the product lead and sales lead to each write their own V2MOM using the same template, linking to the company V2MOM as the parent. Because the team is small, the pilot step is informal: the CEO reads both V2MOMs in 15 minutes, notices the sales lead's Measures section lacks baselines, and adds a clarifying note to the template prompt. The entire process from template design to three completed V2MOMs takes about four hours spread across two days.

## Example: Mid-Size B2B Company (200 People, Multiple Departments)

**Scenario:**

A Series B B2B company with 200 employees across engineering, product, marketing, sales, and customer success. The VP of Product is introducing V2MOMs to replace a loosely followed OKR process. Planning is quarterly. The company uses Notion as its primary workspace.

**Walkthrough:**

The VP of Product builds the template as a Notion database template with structured properties for Owner, Time Period, Parent V2MOM (a relation property linking to other V2MOM entries), and Status (Draft, Active, Archived). Each section is a toggle block with the prompt text built in so it cannot be accidentally deleted. She creates the company-level V2MOM first, then asks three department heads (engineering, marketing, customer success) to pilot the template for their teams. During the pilot, the engineering lead reports that the Obstacles section feels redundant because his team already tracks risks in Jira.

" The marketing lead asks whether Methods should map 1:1 to OKR key results. The VP adds a small FAQ callout to the Methods section clarifying the difference. After two rounds of revision over one week, she publishes the template to the company Notion workspace with a 4-minute Loom walkthrough. Within two weeks, 14 team-level V2MOMs are created, all linked to the company V2MOM through the parent relation field.

## Example: Large Enterprise Division (1,500 People, Global Teams)

**Scenario:**

A division of a Fortune 500 company with 1,500 employees across North America, Europe, and Asia. The SVP wants to implement V2MOMs for annual planning, cascading from division level to department level to team level. The company uses Confluence. There are strict compliance requirements around document retention.

**Walkthrough:**

The planning operations team creates three template variants: Division, Department, and Team. All three share the same five-section structure and prompts, but the word limits and Method counts differ. The Division template allows up to 75 words for Vision and up to 10 Methods. The Team template caps Vision at 30 words and Methods at 5.

Every template includes a Parent V2MOM field that is a Confluence page link, creating a navigable hierarchy. The metadata header adds fields required by compliance: Document ID, Approval Date, and Approver Name. The team pilots the Department template with four department heads across two regions. The pilot reveals that the Asia-Pacific teams need the template available in Mandarin, so the team creates a translated version with identical structure.

After piloting, the final templates are published as Confluence blueprints with page restrictions that prevent editing the prompt text. An internal wiki page serves as the README, including a completed example V2MOM from the SVP and a FAQ. Rollout happens in waves: division V2MOM in week 1, department V2MOMs in week 2, team V2MOMs in weeks 3-4. The planning operations team reviews all V2MOMs for structural completeness (all fields filled, parent linked) before marking them Active.

## Example: Individual Contributor Using a Personal V2MOM

**Scenario:**

A senior product manager at a 50-person company where V2MOMs are used at the team level but not the individual level. She wants to create a personal V2MOM to align her own priorities with her team's V2MOM. She uses a plain markdown file in her personal notes app.

**Walkthrough:**

She copies the team V2MOM template and strips it down for individual use. The Vision becomes a one-sentence statement of what she will accomplish this quarter. Values become her three personal operating principles for the quarter, ranked. Methods are her three to four major projects or workstreams, each linked to a specific Method in her team's V2MOM.

Obstacles are the two or three things most likely to pull her off track (scope creep from stakeholders, a pending reorg, a skill gap in data analysis). Measures are personal KPIs: ship two features by end of quarter, conduct 12 customer interviews, reduce average spec review time from 5 days to 2 days. The Parent V2MOM field links to her team's V2MOM page. She fills the whole thing out in 25 minutes during a Monday morning focus block, then shares it with her manager in their next 1:1 as a conversation starter.

Her manager asks her to add a leading indicator to her Measures section, which takes five minutes. The personal V2MOM becomes a recurring reference point in weekly 1:1s for the rest of the quarter.
