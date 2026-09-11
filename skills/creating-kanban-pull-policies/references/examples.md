# Examples: Creating Explicit Pull Policies and Workflow Rules

## Example: Small startup product team (5 people)

**Scenario:**

A five-person startup team builds a B2B SaaS product. The board has four columns: Backlog, In Progress, Review, Done. There is no dedicated QA role. Developers review each other's work. The main pain point is that items move from In Progress to Review without being fully testable, causing long review cycles and frequent bounce-backs.

**Walkthrough:**

The team maps their workflow and identifies the In Progress to Review transition as the highest-pain boundary. They interview each developer and find three recurring issues: pull requests submitted without tests, pull requests referencing design specs that have changed, and pull requests with database migrations that have not been tested locally. They draft exit criteria for In Progress: "All new code paths have at least one unit test. PR description links to the current design spec (not a stale version).

" Entry criteria for Review include: "Reviewer has capacity (Review column WIP limit not reached). " They print these on a card pinned above the Review column in their digital tool. In the first week, three PRs are blocked from entering Review. Two are missing tests, one has a failing migration.

8 days. After three weeks, they add a fourth criterion: "No TODO comments remain in changed files," based on a pattern of unfinished work slipping through.

## Example: Enterprise product team with cross-functional handoffs

**Scenario:**

A 20-person enterprise team spans product management, UX design, frontend development, backend development, and QA. Their board has seven columns: Backlog, Refinement, Design, Frontend Dev, Backend Dev, QA, and Done. Items frequently stall at the Design to Dev transition because designers produce mockups that lack interaction specifications, and at the Dev to QA transition because features are deployed to staging without test data.

**Walkthrough:**

The team runs a 90-minute workshop with representatives from each function. They focus on the two highest-pain transitions. For Design exit criteria, they agree on: "Mockups include all states (default, hover, active, error, empty, loading). Interaction notes describe what happens on click, hover, and keyboard navigation.

Assets are exported in the correct format and uploaded to the shared library. " For Dev exit criteria (both frontend and backend): "Feature is deployed to staging environment. Test data has been seeded for all acceptance criteria scenarios. Release notes describe how to access and test the feature.

" Entry criteria for QA include: "QA column WIP limit is not reached. " The team posts these in their project management tool's column descriptions and creates a template checklist that is automatically added to every new card. In the first sprint-equivalent period, the Design to Dev bounce-back rate drops from 35% to 8%. The Dev to QA bounce-back rate drops from 25% to 5%.

The QA lead reports saving roughly four hours per week previously spent chasing missing test data.

## Example: Content marketing team (B2C)

**Scenario:**

A content marketing team of eight produces blog posts, social media content, and email campaigns. Their Kanban board has five columns: Ideas, Drafting, Editing, Approval, Published. The biggest problem is that drafts arrive in Editing without source links, proper formatting, or images, forcing editors to send pieces back repeatedly.

**Walkthrough:**

The content lead facilitates a 45-minute meeting with two writers, two editors, and the marketing director. They focus on the Drafting to Editing transition. Exit criteria for Drafting: "Post is written in the template format with H2 subheadings every 300 words. All statistics and claims have inline source links.

Featured image and at least two in-body images are selected and placed. Meta title and meta description are filled in. " Entry criteria for Editing: "Editor has capacity (Editing WIP limit of 3 not reached). " They add a self-review checklist as a card template, so writers must check each criterion before moving the card.

In the first two weeks, editors send back zero posts for missing sources (previously 40% of posts were bounced). One writer flags that the "two in-body images" criterion is too strict for short posts under 500 words. 1 days.

## Example: DevOps platform team with automated gates

**Scenario:**

A platform engineering team of 12 manages infrastructure for a large e-commerce company. Their board has columns: Backlog, Design, Implementation, Peer Review, Staging, Production. They want to automate as many pull policy checks as possible to reduce manual overhead and enforce consistency across a team that works across multiple time zones.

**Walkthrough:**

The team maps their workflow and identifies that most manual pull decisions happen at three boundaries: Design to Implementation, Peer Review to Staging, and Staging to Production. They draft criteria for each. For Design exit: "Architecture decision record (ADR) is written and linked. Threat model section is completed.

" These remain manual checks. For Peer Review to Staging: "PR has at least two approvals. All CI checks pass (lint, unit tests, integration tests). " These are automated via their CI/CD pipeline.

The card cannot move to Staging until the pipeline status shows green and the review tool shows no open threads. For Staging to Production: "Staging deployment has run for at least 24 hours without alerts. Canary metrics (error rate, latency p99) are within baseline thresholds. " The canary metric check is automated via monitoring tool integration, while the rollback plan is a manual checklist item.

After implementation, the team finds that the 24-hour staging window catches issues that previously reached production. Production incident rate drops by 40% in the first quarter. They also discover that the ADR criterion is rarely blocking because the team has internalized the habit, so they reduce it from a blocking criterion to a recommended practice after six months.
