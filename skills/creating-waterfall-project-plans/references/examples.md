# Examples: Creating Waterfall Project Plans and Gantt Charts

## Example: Enterprise ERP Implementation Waterfall Chart

**Scenario:**

A manufacturing company is implementing a new ERP system using the Waterfall methodology. The project spans 9 months with 5 phases: Requirements Gathering (6 weeks), System Design (8 weeks), Configuration & Development (12 weeks), Testing & Validation (8 weeks), and Deployment & Training (4 weeks). The team includes 3 business analysts, 4 developers, 2 QA engineers, and 1 project manager.

**Walkthrough:**

**WBS Decomposition:** The project manager starts with the 5 phases and decomposes each. The Requirements phase breaks into: stakeholder interviews (2 weeks), process mapping (2 weeks), requirements document drafting (1 week), and requirements sign-off (1 week). Similar decomposition happens for all phases, resulting in 87 tasks across the project.

**Dependency Mapping:** Phase boundaries are strict finish-to-start gates. Within the Configuration phase, tasks are more nuanced: the finance module and inventory module can be configured in parallel (start-to-start), but integration testing can't begin until both finish (finish-to-start from both).

**Resource Allocation:** The 3 business analysts are fully loaded during Requirements but only needed 25% during Configuration. The 4 developers are idle during Requirements but fully allocated during Configuration. The resource histogram shows a developer conflict in week 14 where one developer is assigned to both module configuration and a data migration task simultaneously. The PM resolves this by shifting the data migration to week 15, adding 1 week to the non-critical path.

**Critical Path:** The critical path runs through Requirements → System Design → Finance Module Configuration → Integration Testing → UAT → Deployment. The inventory module has 3 weeks of float because it's simpler. The waterfall chart clearly shows this path highlighted in red.

**Milestones:** Six milestones are set: Requirements Approved, Design Approved, Configuration Complete, Testing Complete, UAT Sign-off, and Go-Live. Each milestone links to a formal phase gate review with defined entry criteria.

**Baseline:** The final waterfall chart shows a 38-week schedule with a 2-week contingency buffer before go-live, baselined and distributed to all stakeholders.

## Example: Regulatory Compliance Documentation Project

**Scenario:**

A pharmaceutical company needs to produce FDA submission documentation for a new medical device. The project follows Waterfall because regulatory requirements are fixed and sequential. Duration is 6 months with phases: Regulatory Analysis (3 weeks), Document Planning (2 weeks), Document Authoring (10 weeks), Internal Review (4 weeks), and Submission Preparation (3 weeks).

**Walkthrough:**

**WBS Structure:** The Document Authoring phase is the most complex, breaking into 6 parallel document streams: Clinical Evaluation Report, Risk Management File, Design History File, Software Validation Report, Biocompatibility Assessment, and Labeling Package. Each stream has its own sub-tasks for drafting, SME review, and revision.

**Key Dependencies:** The Clinical Evaluation Report has a finish-to-start dependency on an external literature review being delivered by a CRO (contract research organization) in week 5. This external dependency is flagged as a risk. The Internal Review phase can begin for early documents before all authoring is complete — a start-to-start relationship with a 6-week lag.

**Critical Path Analysis:** The critical path runs through the Clinical Evaluation Report because it has the longest authoring time and depends on the external CRO deliverable. If the CRO is late by even 1 week, the entire submission date slips. The PM adds a mitigation: the CRO contract includes a weekly progress check, and an alternative data source is identified as a backup.

**Waterfall Chart Output:** The Gantt chart uses swimlanes for each document stream, with the critical path highlighted. Milestones include: Regulatory Gap Analysis Complete, Document Plan Approved, All Drafts Complete, Internal Review Complete, and Submission Package Shipped. The plan is baselined and presented to the VP of Regulatory Affairs for approval.
