# Examples: Running Waterfall Testing Phases from Unit to Acceptance

## Claims processing system for an insurer

**Scenario:**

Illustrative scenario: a team is delivering a new claims processing system under a contract that names acceptance testing by the insurer's claims staff as the release condition.

**Walkthrough:**

The test lead writes the test plan during design, with four levels and entry and exit criteria for each. The traceability matrix links every requirement to at least one system test and, for business rules, to an acceptance test agreed with the claims manager.

System testing reveals that one rule about partial payments behaves as specified but produces results the claims staff would not accept. The defect is raised as a change request because it changes an approved requirement. After the change is approved and implemented, regression tests run on the payment module, and acceptance testing proceeds with the updated case. The test summary shows full coverage and no open severe defects, and the insurer signs acceptance.

## Firmware update for a medical device accessory

**Scenario:**

Illustrative scenario: a small device company is releasing a firmware update for a charging accessory. Its quality system requires documented verification of every requirement.

**Walkthrough:**

The team pairs each design document with its test level, following the V-model: module designs with unit tests, the architecture with integration tests, the system specification with system tests. Unit tests are reviewed by a second engineer, and every requirement in the matrix points to a test record.

At the test readiness review, the build is stable but one test fixture is not calibrated. The review holds system testing until calibration is done, because results from an uncalibrated fixture would not count as evidence. Testing starts a few days later and the records go straight into the quality file.

## Internal HR portal

**Scenario:**

Illustrative scenario: an internal team is replacing an HR self-service portal. Earlier phases slipped, and management asks whether testing can be shortened.

**Walkthrough:**

The test lead shows the traceability matrix and which requirements would go untested if the window were cut. Several concern payroll data, where a defect would affect every employee. The sponsor chooses to move the release date and keep the full test window for those areas.

To save some time safely, the team runs lower-risk tests for cosmetic requirements in parallel with system testing of the payroll features. The test summary reports the parallel approach openly so the gate can take it into account.
