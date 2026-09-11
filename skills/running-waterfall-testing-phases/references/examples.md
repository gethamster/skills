# Examples: Running Structured Testing and Verification Phases

## Example: Testing a Payroll System Migration Using the Waterfall Model

**Scenario:**

A mid-size company is migrating from a legacy payroll system to a new platform. The waterfall model was chosen because requirements are stable (payroll calculations are governed by tax law), the system must pass a compliance audit, and the deployment date aligns with the start of a new tax quarter. Development is complete, and the project enters the testing phase with 247 documented requirements.

**Walkthrough:**

The test lead creates a Test Strategy specifying four testing levels with the following approach:

**Unit Testing (2 weeks):** 412 unit test cases validate individual calculation modules — gross pay, federal tax withholding, state tax, deductions, overtime. Entry criteria: all modules code-reviewed and deployed to the unit test environment. Exit criteria: 100% of unit tests pass, zero Critical defects. Result: 8 defects found (3 High — incorrect overtime boundary calculation for salaried exempt employees, 5 Medium). All resolved and retested.

**Integration Testing (1.5 weeks):** 89 integration test cases verify data flows between modules — employee master data feeding into calculation engines, calculation results flowing to the general ledger export, and the tax filing interface. A Critical defect is discovered: the state tax module truncates decimal places when passing data to the GL export, causing penny-level rounding errors that compound across thousands of employees. Defect is fixed, retested, and regression tests confirm no side effects.

**System Testing (3 weeks):** 534 test cases covering end-to-end payroll runs for different employee types, edge cases (new hires mid-pay-period, terminations, retroactive adjustments), performance testing with 10,000 employee records, and security testing of role-based access controls. The RTM is updated daily. 22 defects are found — 1 Critical (system timeout during large batch processing, resolved by optimizing a database query), 6 High, 15 Medium. All Critical and High defects are resolved. Medium defects have documented workarounds.

**Acceptance Testing (1 week):** The payroll manager and HR director execute 45 UAT scenarios using anonymized copies of real employee data. They validate that pay stubs look correct, tax withholdings match manual calculations, and reports satisfy audit requirements. 3 Medium defects are logged (formatting issues on reports). UAT sign-off is obtained.

The Test Summary Report shows: 247/247 requirements traced to test cases, 1,080 test cases executed, 34 total defects found and resolved, 3 remaining Medium defects accepted as known issues with a patch scheduled for the following month. The phase gate review approves deployment.

## Example: Acceptance Testing a Regulated Medical Device in a Waterfall Model Project

**Scenario:**

A medical device company is developing embedded software for a patient monitoring system. FDA regulations require documented evidence of verification and validation following a waterfall model lifecycle. There are 182 requirements, 43 of which are safety-critical.

**Walkthrough:**

The test team creates a separate test plan for safety-critical requirements with enhanced rigor. The RTM flags all 43 safety-critical requirements with a 'Safety' tag, and each receives at minimum three test cases: one positive, one negative, and one boundary condition test.

Unit testing uses code coverage tools to demonstrate that safety-critical modules achieve 100% branch coverage (compared to 80% for non-safety modules). Integration testing includes fault injection — deliberately simulating sensor failures, communication dropouts, and corrupt data packets to verify the system degrades safely.

System testing includes a 72-hour continuous operation test monitoring for memory leaks, timing drift, and alarm accuracy. Acceptance testing is conducted with clinical staff in a simulated hospital environment.

The Test Summary Report becomes a key artifact for the FDA 510(k) submission. The RTM serves as the primary evidence that every requirement has been verified. Defect reports demonstrate that all safety-related defects were resolved and retested. The auditor can trace from any requirement to its test cases, test results, and any associated defects — this traceability is what makes the waterfall model's structured testing phase valuable in regulated industries.
