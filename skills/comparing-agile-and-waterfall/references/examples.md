# Examples: Comparing Agile and Waterfall for Project Selection

## Example: Internal HR system migration at a mid-size company

**Scenario:**

A 200-person company is migrating from a legacy HR system to a modern SaaS platform. The requirements are well-documented in the vendor's implementation playbook. The project has a fixed deadline tied to the annual enrollment period in 4 months. The HR director is available for weekly check-ins but not daily.

The team of 5 has never worked in agile. Compliance requirements are moderate (employee data privacy, SOC 2).

**Walkthrough:**

The team scores requirements stability at 2 (mostly locked by the vendor playbook, but data mapping will surface unknowns). Risk scores 2 (proven vendor, but first integration with the company's payroll system). Stakeholder availability scores 2 (weekly, not daily). Team experience scores 1 (no agile experience, no coach available).

Compliance scores 2 (SOC 2 and privacy require documented controls). Total: 9, firmly in the waterfall band. The recommendation is waterfall with phase gates: requirements sign-off, data migration test, UAT, and go-live. The team documents the decision and sets a review trigger if data mapping reveals more than 15 fields needing custom logic, which would bump risk and requirements instability up and possibly shift toward a hybrid.

## Example: Consumer mobile app for a startup

**Scenario:**

A 12-person startup is building a fitness app for Gen Z users. The founding team has a vision but no validated feature set. The market is crowded, and the company plans to differentiate through user experience. The CTO and CEO are embedded with the 4-person engineering team. No regulatory requirements apply. The team has shipped two previous products using Scrum.

**Walkthrough:**

Requirements stability scores 5 (features will change weekly based on user testing). Risk scores 4 (new market entry, unproven product-market fit). Stakeholder availability scores 5 (founders sit with the team daily). Team experience scores 5 (experienced Scrum team).

Compliance scores 5 (no regulatory oversight). Total: 24, deep in the agile band. The recommendation is full agile with two-week sprints, continuous user testing, and weekly backlog reprioritization. The team moves to [running sprint planning](https://tryhamster.com/skills/running-sprint-planning-and-execution) immediately.

Review trigger: if the company takes on a healthcare partnership that introduces HIPAA requirements, re-score compliance and consider a hybrid track.

## Example: Enterprise banking platform upgrade

**Scenario:**

A regional bank with 2,000 employees is upgrading its core banking platform. The project involves 8 teams across 3 countries and 4 time zones. Requirements are defined by regulators and must be traceable. The bank's steering committee reviews progress monthly. Some teams have Kanban experience, others have only done waterfall. The project timeline is 18 months with regulatory audit at month 12.

**Walkthrough:**

Requirements stability scores 1 (regulatory requirements are fixed and contractually binding). Risk scores 3 (proven technology but complex integrations across legacy systems). Stakeholder availability scores 2 (monthly steering committee, no embedded product owner). Team experience scores 3 (mixed, some Kanban-capable teams, others waterfall-only).

Compliance scores 1 (banking regulation requires full traceability and formal sign-offs). Total: 10, at the waterfall end. However, the dimension-level analysis reveals that while the overall structure should be waterfall with formal gates aligned to the regulatory audit, the Kanban-experienced teams could run their component delivery in iterative cycles within each waterfall phase. The recommendation is waterfall at the program level with phase gates, with optional Kanban for component teams, and a dedicated compliance documentation track.

See [scaling agile across teams](https://tryhamster.com/skills/scaling-agile-across-teams) for the multi-team coordination approach.

## Example: B2B SaaS feature expansion

**Scenario:**

A 50-person B2B SaaS company is building a new reporting module for its existing product. The product manager has a prioritized list of 40 user-requested features but expects heavy reprioritization based on beta feedback. Two customer advisory board members are available for biweekly demos. The 6-person squad has run Scrum for two years.

No regulatory constraints beyond standard data privacy (GDPR).

**Walkthrough:**

Requirements stability scores 4 (prioritized list exists but will shift based on beta feedback). Risk scores 3 (new module on existing architecture, some data pipeline complexity). Stakeholder availability scores 4 (biweekly advisory board demos, daily product manager). Team experience scores 5 (two years of Scrum).

Compliance scores 4 (standard GDPR, no industry-specific regulation). Total: 20, solidly agile. The recommendation is Scrum with two-week sprints, beta user demos at each sprint review, and a lightweight GDPR checklist embedded in the definition of done. The team proceeds to [managing the product backlog](https://tryhamster.com/skills/managing-product-backlogs) to structure the 40 feature requests into epics and prioritized stories.

Review trigger: if an enterprise deal introduces SOC 2 Type II requirements, re-score compliance and add a documentation track.
