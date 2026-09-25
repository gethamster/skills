# Examples: Managing Change Requests in Waterfall Projects

## A regulation changes mid-build

**Scenario:**

Illustrative scenario: a team is building a reporting system for a lender under a fixed-price contract. During implementation, the regulator publishes an update that adds two fields to a required report.

**Walkthrough:**

The business analyst logs a change request citing the regulatory update. The impact analysis uses the traceability matrix to find every requirement, design element, report template and test case linked to that report. It shows modest development work but a larger testing effort, because the report feeds two downstream processes.

The change control board, including the customer's representative, approves the change as mandatory and agrees a contract amendment for the extra cost. The requirements specification, design, test plan and schedule are updated with new versions that reference the change request. The change is verified in system testing and closed.

## A stakeholder asks for a nice-to-have feature

**Scenario:**

Illustrative scenario: during design review of an internal booking tool, a department head asks for a calendar integration that was not in the approved requirements.

**Walkthrough:**

The project manager logs the request rather than agreeing to it in the meeting. The impact analysis shows that the integration would need a new interface, security review and extra testing, pushing the go-live date back noticeably.

The board sees two options: add it now with the later date, or defer it to a second release. It chooses to defer. The request stays in the log with its status, and the department head receives the reason in writing. When the second release is planned, the deferred request is its starting point.

## A defect fix that changes agreed behavior

**Scenario:**

Illustrative scenario: in system testing of a warehouse application, testers find that the approved requirement for rounding stock quantities produces results that the warehouse staff will not accept.

**Walkthrough:**

The fix looks small, but it changes behavior that the customer signed off in the requirements. The test lead raises it as a change request instead of a plain defect. The analysis shows that three reports and one interface depend on the rounding rule.

The board approves the change with the customer present, so the new rule is binding on both sides. The requirement, design notes and affected test cases are updated, regression tests are run on the dependent reports, and the request is closed once they pass.
