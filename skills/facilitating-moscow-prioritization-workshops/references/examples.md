# Examples: Facilitating MoSCoW Prioritization Workshops with Stakeholders

## Example: SaaS Product Team Prioritizing Q3 Feature Backlog

**Scenario:**

A B2B SaaS company has 28 features requested by customers, sales, and engineering. The product manager needs to align the VP of Sales (who wants CRM integration), the CTO (who wants to address tech debt), and the Head of Customer Success (who wants improved onboarding) on what ships in Q3. They have capacity for roughly 15-18 features depending on complexity.

**Walkthrough:**

The product manager sends the 28-item list to all three stakeholders plus two senior engineers 48 hours before the session. Each person pre-categorizes independently.

In the workshop, they establish definitions: Must-have = the product loses existing customers without it or fails a compliance audit; Should-have = directly tied to Q3 revenue targets; Could-have = improves experience but isn't blocking deals; Won't-have = deferred to Q4 or later.

Silent voting reveals 16 items in consensus: 6 Must-haves (including a security patch and a billing fix both agreed on), 5 Should-haves, 3 Could-haves, and 2 Won't-haves. The remaining 12 items are contested.

The biggest conflict: CRM integration. Sales says Must-have (three enterprise deals depend on it), CTO says Could-have (complex integration with high maintenance cost). The facilitator asks both to present evidence. Sales shows signed LOIs contingent on integration. CTO shows the 3-sprint estimate. The group moves it to Should-have with a condition: if one sprint can deliver a basic webhook integration, it becomes Must-have. The CTO agrees to spike it.

After resolving all contested items, the final Must-have list totals 8 items consuming 55% of Q3 capacity. Should-haves add 7 more items. The group confirms verbally, and the product manager distributes the documented list that afternoon. This output directly feeds into building prioritized roadmaps from MoSCoW outputs.

## Example: Government Agency Prioritizing Compliance System Requirements

**Scenario:**

A government IT team is modernizing a legacy compliance system. They have 35 requirements gathered from 4 departments (Legal, Finance, Operations, IT Security). Each department considers their own requirements most critical. The project has a fixed 6-month delivery timeline and a constrained team of 8 developers.

**Walkthrough:**

The project lead organizes two workshops: one for the 20 functional requirements and one for the 15 non-functional/technical requirements. She invites one representative from each department plus the tech lead.

She defines Must-have as 'legally mandated or the system fails audit,' which is unambiguous in a compliance context. This immediately clarifies the conversation — Legal's regulatory requirements are objectively Must-have, while Finance's reporting dashboard preferences are Should-have at most.

During silent voting on functional requirements, 14 items reach consensus quickly. The 6 contested items all involve departments wanting their specific workflow automated first. The facilitator uses a decision matrix: each contested item is scored on regulatory risk (H/M/L), number of affected users, and implementation complexity.

Scoring reveals that Operations' bulk-upload feature affects 200 daily users and is medium complexity, while Finance's custom report builder affects 12 users and is high complexity. The group moves bulk-upload to Must-have and custom reporting to Could-have without further debate — the data spoke for itself.

The final output: 10 Must-haves (58% of capacity), 7 Should-haves, 2 Could-haves, and 1 Won't-have. Each department head signs the documented list, which becomes the contractual scope baseline.
