# Examples: Conducting Phase Gate Reviews

## Example: Requirements-to-Design Gate Review for an ERP Implementation

**Scenario:**

A mid-sized manufacturing company is implementing a new ERP system using the waterfall model. The requirements phase has just concluded, producing a 120-page Software Requirements Specification (SRS). The project manager needs to run the gate review before design begins.

**Walkthrough:**

The project manager established exit criteria at the start of the requirements phase: all functional requirements traced to business processes, all requirements reviewed by department leads, no open TBD items, and sign-off from the compliance officer on regulatory requirements.

Two weeks before the gate, the BA team completed the SRS and performed a self-assessment, finding 3 remaining TBD items related to inventory valuation methods. They escalated these to the finance director and resolved 2 of 3 before the gate package was distributed.

The gate review package was sent 5 business days before the meeting, including the SRS, traceability matrix, self-assessment checklist, and a note flagging the one remaining TBD item (a tax calculation edge case awaiting legal input).

During the 90-minute gate meeting, the team walked through each criterion. All passed except the TBD item. The compliance officer confirmed it was low-risk and wouldn't affect the initial design architecture. The steering committee issued a Conditional Go: proceed to design, with the TBD resolved within 10 business days and the SRS updated accordingly. The finance director was assigned as owner.

The decision record was signed, distributed, and the condition was tracked in the project's issue log. The item was resolved in 7 days, the SRS was updated, and the condition was formally closed.

## Example: Design-to-Development Gate with a No-Go Decision

**Scenario:**

A government agency is building a citizen portal using the waterfall model. The design phase produced detailed system architecture and UI wireframes, but the security review revealed significant gaps in the authentication design.

**Walkthrough:**

Exit criteria for the design gate included: system architecture approved by the enterprise architecture board, UI designs validated against accessibility standards (WCAG 2.1 AA), security architecture reviewed and approved by the CISO's team, and all interface specifications documented for third-party integrations.

During the gate review, the enterprise architecture and accessibility criteria passed. However, the security team presented findings showing that the proposed authentication flow didn't meet the agency's zero-trust requirements—a fundamental architectural concern, not a minor detail.

The gate decision authority (the program director) issued a No-Go decision. The decision record specified: the security architecture must be redesigned to incorporate zero-trust principles, the CISO's team would provide reference architecture patterns within 5 business days, and the gate would be re-reviewed in 3 weeks.

Rather than viewing this as a failure, the project sponsor acknowledged that catching this gap before development saved an estimated 8-12 weeks of rework. The redesigned security architecture passed the re-review, and the project proceeded to development on a revised but realistic timeline. The project plan and Gantt chart were updated to reflect the 3-week delay at this gate.
