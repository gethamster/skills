# Examples: Building Prioritized Roadmaps from MoSCoW Outputs

## Example: SaaS Product Launch Roadmap from MoSCoW Analysis

**Scenario:**

A B2B SaaS team has completed a MoSCoW prioritization for their project management tool. They have 8 Must-haves (task creation, assignment, status tracking, due dates, team invites, basic notifications, login/auth, admin dashboard), 6 Should-haves (file attachments, comments, search, calendar view, email integration, reporting), 4 Could-haves (time tracking, Gantt charts, custom fields, dark mode), and 3 Won't-haves (AI assistant, mobile app, marketplace integrations).

**Walkthrough:**

The team starts by mapping dependencies. They discover that the reporting Should-have depends on a data aggregation layer that's also needed by the admin dashboard Must-have — so they architect the data layer as part of Phase 1. They also find that file attachments (Should-have) are a prerequisite for comments (Should-have), which dictates the order within Phase 2.

**Phase 1 (MVP — 10 weeks):** All 8 Must-haves plus the data aggregation infrastructure. Milestone: 'Teams can create, assign, and track tasks with basic notifications and admin oversight.'

**Phase 2 (Enhancement — 6 weeks):** File attachments, comments, search, and calendar view. Email integration is deferred to Phase 3 because it requires a third-party integration that isn't scoped yet. Milestone: 'Teams can collaborate on tasks with files and discussion, and find work quickly via search and calendar views.'

**Phase 3 (Optimization — 4 weeks):** Email integration, reporting, time tracking (promoted from Could-have based on customer interview feedback). Milestone: 'Managers can generate reports and track time, and the tool integrates with team email workflows.'

**Future Considerations:** Gantt charts, custom fields, dark mode, AI assistant, mobile app, marketplace integrations — reviewed quarterly.

The team presents two roadmap views: a timeline with phase blocks and milestones for leadership, and a detailed Kanban-style board showing item sequencing and dependencies for the development team.

## Example: Internal IT Infrastructure Upgrade Roadmap

**Scenario:**

An IT department has used MoSCoW to prioritize 20 infrastructure upgrade items after a security audit. Must-haves include firewall upgrade, MFA rollout, endpoint encryption, and patch management automation. Should-haves include network segmentation, SIEM deployment, and backup modernization. Could-haves include zero-trust architecture, SOC monitoring, and automated compliance reporting. Won't-haves include full cloud migration and IoT security framework.

**Walkthrough:**

Dependency analysis reveals that network segmentation (Should-have) is a prerequisite for the zero-trust architecture (Could-have) and would significantly improve the effectiveness of the firewall upgrade (Must-have). The team decides to pull network segmentation into Phase 1.

**Phase 1 (Critical — 8 weeks, hard deadline from compliance):** Firewall upgrade, MFA rollout, endpoint encryption, patch management automation, network segmentation. Milestone: 'All critical security audit findings remediated; compliance deadline met.'

**Phase 2 (Hardening — 6 weeks):** SIEM deployment, backup modernization. Milestone: 'Security events are centrally monitored and backup recovery meets 4-hour RTO target.'

**Phase 3 (Maturity — Q3):** Zero-trust architecture, automated compliance reporting. Milestone: 'Zero-trust principles enforced across all network segments; compliance reports generate automatically.'

The compliance deadline anchors Phase 1's end date. The team works backward to confirm capacity is sufficient, identifies that they'll need a contractor for the network segmentation work running in parallel with MFA rollout, and adjusts the budget accordingly.
