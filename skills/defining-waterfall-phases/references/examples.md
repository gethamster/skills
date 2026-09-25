# Examples: Defining Waterfall Phases with Entry and Exit Criteria

## Payroll system replacement

**Scenario:**

Illustrative scenario: a mid-sized company is replacing its payroll software. The contract with the implementation partner lists the documents the partner must deliver, and the finance team must approve each one.

**Walkthrough:**

The project manager starts from the contract's deliverable list and groups it into six phases: requirements, design, configuration, testing, parallel run and go-live. The parallel run gets its own phase because payroll errors are costly and the finance team wants to compare old and new results before switching.

For the testing phase, the entry criteria are an approved test plan, a configured system in the test environment and masked copies of real employee data. The exit criteria are that all planned test cases have run, no open defects affect pay calculations, and the finance lead has signed the test report. The exit criteria of testing are written to match the entry criteria of the parallel run exactly.

## Hardware product with a regulated component

**Scenario:**

Illustrative scenario: a small device maker is developing a product with a component that needs safety certification. Late design changes would force a new certification.

**Walkthrough:**

The team defines the phases around the certification: requirements, concept design, detailed design, prototype build, verification, certification submission and production. The detailed design exit criteria require that every safety requirement is traced to a design element and a planned verification test.

The phase definition also sets out the feedback route. If verification finds a design problem, a change request is raised against the specific design element, and the team assesses whether it affects certification before anything is reopened. This keeps the rest of the approved design stable.

## Internal data migration

**Scenario:**

Illustrative scenario: an IT team must move a customer database to a new platform over a fixed weekend, with no ability to extend the downtime.

**Walkthrough:**

The team defines phases for analysis, mapping design, build of migration scripts, rehearsal, cutover and verification. Rehearsal gets its own phase with strict exit criteria: two complete rehearsals on production-sized data, each finishing inside the planned window with reconciliation checks passing.

The cutover phase's entry criteria reference those exit criteria directly. When the first rehearsal overruns, the team does not start cutover planning as if it had passed. They record the gap, fix the slow scripts and run the rehearsals again.
