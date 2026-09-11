# Examples: Managing Change Requests in Waterfall Projects

## Example: Processing a Mid-Development Feature Change in an ERP Implementation

**Scenario:**

Your team is in the development phase of a waterfall model ERP implementation for a manufacturing company. The finance director submits a change request to add a new currency conversion module that wasn't in the original requirements. The project is on a fixed-price contract with a go-live date 4 months away.

**Walkthrough:**

The Change Control Manager logs the request as CR-023 and assigns it for impact analysis. The technical lead traces the change: it requires a new database table and API endpoints (development impact: 15 days), modifications to 3 existing reporting modules (8 days), 40+ new test cases and regression testing on financial reports (12 days of QA), and updates to the user training materials (3 days). Total estimated impact: 38 person-days and a 3-week schedule extension.

The impact analysis also reveals a dependency on a third-party exchange rate API that requires a separate vendor agreement (additional cost: $4,200/year, procurement lead time: 2 weeks).

The CCB reviews CR-023 at their weekly meeting. The finance director presents the business case: the company is expanding into European markets in Q2, and without multi-currency support, the finance team will need manual workarounds costing an estimated 20 hours per month. The CCB weighs the options:

- **Approve**: Accept the 3-week delay and additional cost. This requires sponsor sign-off because it exceeds the 10% schedule threshold.
- **Approve with Conditions**: Implement a simplified version (single additional currency, EUR only) that reduces the impact to 18 person-days and a 2-week delay.
- **Defer**: Add the module in a Phase 2 release post go-live, keeping the current timeline intact.

The CCB chooses 'Approve with Conditions'—the simplified EUR-only version. The sponsor co-signs. The project manager updates the Gantt chart, adds the new requirements to the spec (version 2.3), and notifies the development and QA teams of the revised plan. CR-023 is marked 'Approved with Conditions' in the change log with full rationale documented.

## Example: Rejecting a Low-Value Change to Protect a Regulatory Deadline

**Scenario:**

A healthcare software project following the waterfall model is in its testing phase, 6 weeks from a regulatory submission deadline. A marketing stakeholder submits CR-041 requesting changes to the patient dashboard color scheme and the addition of the company's updated branding assets.

**Walkthrough:**

The impact analysis reveals that while the branding changes themselves are minor (3 days of front-end work), they would invalidate 28 completed UI test cases that reference specific visual elements, requiring re-execution (5 days of QA effort) and updates to the validation documentation package being prepared for the regulatory submission (2 days).

The CCB evaluates: the total impact is 10 person-days during the most time-constrained phase of the project, for a change that has no clinical or functional value. The regulatory submission deadline is immovable, and the team has only 4 days of schedule buffer remaining.

The CCB rejects CR-041 with the rationale: 'Cosmetic branding changes do not justify the risk to the regulatory submission timeline. Recommend deferring to a post-submission maintenance release.' The marketing stakeholder is notified with the documented rationale. The CCB also suggests submitting the request as a planned enhancement for the first post-launch update cycle.

This rejection is exactly how change control should work—it protected the project's critical path from a low-priority distraction by using objective impact data rather than politics.
