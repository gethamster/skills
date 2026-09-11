# Examples: Defining and Sequencing Waterfall Phases

## Example: E-Commerce Platform Rebuild Using the Waterfall Model

**Scenario:**

A mid-size retailer is rebuilding their e-commerce platform. The project has a fixed budget, a hard launch date tied to a seasonal sale, and integrations with three external payment providers whose APIs are stable and well-documented. The CTO has chosen the waterfall model because requirements are well-understood and the external dependencies have fixed contracts.

**Walkthrough:**

The project manager defines five phases:

**Phase 1: Requirements (Weeks 1-4)**
- Entry: Project charter approved, stakeholder list finalized
- Activities: Stakeholder interviews, user story mapping, payment API review, requirements writing
- Deliverables: Software Requirements Specification (SRS), Requirements Traceability Matrix (RTM) v1.0
- Exit: SRS approved by Product Owner, CTO, and Payment Team Lead; all requirements have unique IDs and acceptance criteria; no open P1 questions

**Phase 2: Design (Weeks 5-8)**
- Entry: SRS v1.0 approved, RTM v1.0 baselined
- Activities: Architecture design, database modeling, API contract design, UI/UX wireframes
- Deliverables: Architecture Document, DB Schema, API Contracts, Wireframe Package
- Exit: All design docs reviewed and approved; RTM updated to link requirements → design elements; architecture validated against performance requirements

**Phase 3: Implementation (Weeks 9-16)**
- Entry: All design documents approved, dev environments provisioned, CI/CD pipeline configured
- Activities: Frontend development, backend development, payment integration, database implementation
- Deliverables: Source code (in version control), unit test results, build artifacts
- Exit: All modules built per design specs, unit test coverage ≥ 80%, no P1 build failures, code review completed for all modules

**Phase 4: Verification (Weeks 17-20)**
- Entry: All code delivered, unit tests passing, test environment mirrors production
- Activities: Integration testing, system testing, UAT, performance testing, payment end-to-end testing
- Deliverables: Test Plan, Test Cases, Test Execution Report, Defect Log, UAT Sign-off
- Exit: All test cases executed, zero open P1/P2 defects, UAT signed off by Product Owner, performance benchmarks met

**Phase 5: Maintenance (Week 21+)**
- Entry: Production deployment complete, monitoring dashboards live, support runbook delivered
- Activities: Bug fixes, monitoring, patch releases, knowledge transfer to support team
- Deliverables: Support Runbook, Incident Response Procedures, Monthly Health Reports
- Exit: (Ongoing) Quarterly review of support metrics against SLAs

Gate reviews are scheduled at weeks 4, 8, 16, and 20. The Phase Definition Document is reviewed and approved by the CTO and Product Owner before work begins.

## Example: Defining Phases for a Regulatory Compliance Project

**Scenario:**

A medical device company needs to develop embedded firmware for a new patient monitoring device. The project must comply with IEC 62304 (medical device software lifecycle), which mandates documented evidence of phase-based development. Regulatory auditors will inspect phase artifacts during the FDA submission.

**Walkthrough:**

The engineering lead maps IEC 62304 requirements directly onto waterfall model phases:

**Phase 1: Software Requirements** — Produces a Software Requirements Specification traceable to the system-level risk analysis. Exit criteria include: all requirements classified by safety class (A, B, or C), hazard analysis cross-referenced, and requirements reviewed by the regulatory affairs team.

**Phase 2: Architectural Design** — Produces Software Architecture Document with module decomposition. Exit criteria require that each module's safety classification is documented and that the architecture supports the fault-tolerance requirements identified in Phase 1.

**Phase 3: Detailed Design** — Produces detailed design specifications for each module. Exit criteria: every requirement traces to at least one design element, design review completed with clinical engineering present.

**Phase 4: Implementation and Unit Verification** — Source code with unit tests. Exit criteria: 100% unit test coverage for safety-class C modules, static analysis tool run with zero critical findings, code review for all safety-critical paths.

**Phase 5: Integration and System Testing** — Full integration test, system-level testing against requirements. Exit criteria: complete RTM showing requirement → design → code → test traceability, all tests passed or deviations formally justified.

**Phase 6: Release and Maintenance** — Regulatory submission package assembled, post-market surveillance plan in place.

This six-phase structure (splitting the canonical Design into Architectural and Detailed Design) directly satisfies the auditor's need to see documented evidence at each stage. The Phase Definition Document includes IEC 62304 clause references for each exit criterion.
