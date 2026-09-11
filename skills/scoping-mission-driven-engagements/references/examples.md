# Examples: Scoping Mission-Driven FDE Engagements

## Example: Fintech Data Pipeline Acceleration (Small FDE Team)

**Scenario:**

A two-person FDE team is deployed to a mid-size fintech company whose daily trade reconciliation pipeline takes 11 hours to complete, frequently missing the regulatory reporting deadline at 9 AM. The customer has asked for "a better data platform," which is far too broad. The FDE team has 8 weeks.

**Walkthrough:**

The lead FDE interviews the head of operations, the data engineering manager, and a compliance analyst separately. All three name the reconciliation deadline as the critical pain point. " Constraints include: no changes to the upstream trading systems, all data must remain within the existing AWS VPC, and the compliance team must approve any changes to the reconciliation logic. Exit criteria: 14 consecutive successful runs under 2 hours, a runbook delivered to the data engineering team, and one handoff training session completed with Maria Torres, Senior Data Engineer, who is named as the owner.

The customer's request for "a better data platform" is logged in the scope pressure appendix as a candidate for a future engagement. The three-way sign-off meeting takes 45 minutes, surfaces one disagreement about the 95% threshold (the compliance analyst wanted 99%), and resolves it by agreeing on 95% with an escalation protocol for the remaining 5%. The engagement ships on time in week 7.

## Example: Healthcare SaaS Integration (Enterprise Customer)

**Scenario:**

A solo FDE is deployed to a large hospital network that purchased a healthcare SaaS platform but cannot go live because the platform does not integrate with their EHR system. The customer's IT director has a list of 12 integration requirements. The FDE has 12 weeks and this is the first engagement with this customer.

**Walkthrough:**

The FDE spends two days reviewing the 12 requirements and maps each to a measurable business impact. Three of the requirements, patient demographic sync, appointment scheduling sync, and insurance eligibility check, account for roughly 80% of the go-live blocking value. " The remaining nine requirements are documented in the scope pressure log with preliminary estimates. Constraints include HIPAA data handling requirements, a two-week EHR change freeze in week 6-7, and a requirement that all integration code passes the hospital's security review.

Exit criteria include: three departments live for two consecutive weeks, the hospital's integration engineer (James Park) can troubleshoot common sync errors using the runbook, and the error rate is verified by the hospital's quality team. The brief is signed by the FDE's VP of Engineering, the hospital's IT director, and the FDE. During week 4, the IT director asks the FDE to also build a custom reporting dashboard. The FDE logs it in the scope pressure log, references the brief in the next weekly check-in, and the request is deferred to Mission 2.

## Example: E-Commerce Recommendation Engine (B2C, Growth-Stage Company)

**Scenario:**

An FDE is deployed to a growth-stage e-commerce company that wants to improve product recommendations on their site. The VP of Product has described the goal as "make our recommendations as good as Amazon's." The FDE has 6 weeks and the company has a small engineering team of four people.

**Walkthrough:**

The FDE recognizes that "as good as Amazon's" is not a measurable outcome. 2% click-through rate and contributes to 3% of total revenue. " This is specific, measurable, and tied to a business metric the VP of Product cares about. js frontend and PostgreSQL backend, will not require additional infrastructure budget, and will not modify the checkout flow.

The handoff recipient is the company's senior full-stack engineer, Priya Sharma, who will attend a weekly pairing session with the FDE to build context. Exit criteria include: the 3% CTR sustained for two weeks, the recommendation model retraining pipeline documented and executable by Priya, and the A/B test framework the FDE built is integrated into the company's deployment process. The VP of Product signs off alongside the FDE's manager. In week 3, the VP asks whether the FDE can also improve search.

The FDE logs it, notes that search optimization could be a strong Mission 2 candidate, and stays focused on recommendations. 4% CTR by week 5.

## Example: Manufacturing IoT Data Pipeline (Large Enterprise, Multi-Stakeholder)

**Scenario:**

A two-person FDE team is deployed to a manufacturing conglomerate with 14 factories. The operations VP wants real-time equipment monitoring. The IT VP wants data centralization. The plant managers want fewer false alerts. The FDE team has 10 weeks.

**Walkthrough:**

The FDE team conducts separate interviews with all three stakeholder groups and identifies that the false alert problem is the root cause blocking adoption of the existing monitoring system. If alerts are not trusted, no one looks at the dashboards, and the data centralization and real-time monitoring investments have zero value. " The scope is limited to three factories, not fourteen, because the FDE team cannot instrument fourteen factories in ten weeks and constraining the scope makes success achievable. Constraints include: no firmware changes to the existing IoT sensors, all data processing must occur within the company's on-premises Kubernetes cluster, and the plant managers at the three pilot factories must approve any changes to alert thresholds.

The handoff recipient is the company's newly hired IoT platform engineer, David Kim, who joins the FDE team in week 2 for the duration. Exit criteria: four consecutive weeks of sub-15% false positive rate at all three pilot sites, David can deploy a threshold change independently, and a documented playbook exists for rolling the solution to the remaining eleven factories. The three-way sign-off includes both VPs and the FDE team lead. The IT VP's data centralization request is logged as Mission 2.

The operations VP's real-time monitoring dashboard is logged as Mission 3, contingent on Mission 1 succeeding. By week 9, the false positive rate is at 11% across all three pilot factories.
