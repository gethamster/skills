# Examples: Creating Waterfall Project Plans with WBS and Gantt Charts

## Office network upgrade

**Scenario:**

Illustrative scenario: an IT team must replace the network equipment in a three-floor office over a fixed period, with work done outside business hours. Scope is fixed by the equipment order and the building layout.

**Walkthrough:**

The team builds a WBS with phases at the top: survey, design, procurement, installation per floor, testing and handover. Under installation, each floor has the same work packages: cabling checks, equipment mounting, configuration and floor testing. The WBS dictionary notes that facilities must approve out-of-hours access for each floor.

Dependency mapping shows the critical path runs through procurement, because the equipment has a long lead time. The team adds the supplier's delivery date as an external milestone with a named owner and schedules the design gate early enough to place the order on time. The Gantt chart shows the three floors in sequence after delivery, with a buffer before handover.

## Regulatory reporting system for a small insurer

**Scenario:**

Illustrative scenario: a small insurer must deliver a new regulatory report by a date set by its regulator. Requirements come from the published reporting rules and are unlikely to change.

**Walkthrough:**

The project manager builds the WBS from the deliverables: requirements specification, data mapping, report design, build, test report and submission. Each gate is a milestone. Estimates come from the analysts and developers who will do the work, with ranges for the data mapping, which depends on the quality of old data.

Resource leveling shows that the one analyst who knows the old data is needed in both data mapping and testing at the same time. The team moves test preparation to another analyst and accepts a slightly later test start. The final Gantt chart shows a visible buffer before the submission milestone, and the sponsor approves it as the baseline.

## Event venue fit-out

**Scenario:**

Illustrative scenario: a company is fitting out a rented space for a conference. The contract with the venue fixes the access dates, so the plan must work backwards from them.

**Walkthrough:**

The planner lists phases for design, supplier contracts, build, technical rehearsal and the event itself. The WBS includes the easily forgotten items: permits, insurance, signage approval and removal after the event. Finish-to-start dependencies dominate, but lighting and staging are allowed to overlap with a start-to-start link once the stage frame is up.

The critical path runs through the stage build and the technical rehearsal. The planner watches those tasks closely in weekly reviews and lets the tasks with float, such as signage printing, move within their windows.
