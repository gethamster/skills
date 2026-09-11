# Examples: Writing Comprehensive Requirements Documents

## Example: E-Commerce Platform Requirements Document

**Scenario:**

A mid-size retailer is building a new e-commerce platform to replace their aging system. The project follows the waterfall model with a 12-month timeline. The requirements team consists of two business analysts working with stakeholders across merchandising, customer service, IT operations, and finance.

**Walkthrough:**

The team begins by mapping 14 stakeholder groups and scheduling elicitation over 3 weeks: interviews with department heads, a two-day workshop with cross-functional representatives, and document analysis of the existing system's user manual and defect log.

During elicitation, they discover a conflict: merchandising wants real-time inventory updates across all channels, but IT operations says the warehouse management system can only push updates every 15 minutes. This is documented as a conflict and escalated to the steering committee, which decides that 15-minute updates are acceptable for the website but real-time updates are required for in-store point-of-sale. This decision and its rationale are recorded in the requirements document.

The team structures the document into 6 functional domains: Product Catalog (28 requirements), Shopping Cart & Checkout (34 requirements), Payment Processing (19 requirements), Order Management (22 requirements), Customer Account Management (15 requirements), and Reporting & Analytics (12 requirements). Non-functional requirements add another 23 items covering performance (page load under 2 seconds at 5,000 concurrent users), security (PCI-DSS compliance), and availability (99.9% uptime).

Each requirement follows the standard template. Example: 'FR-CART-012: The system shall preserve shopping cart contents for a minimum of 30 days for authenticated users and 7 days for guest users (via browser cookie) so that customers can return to complete purchases without re-selecting items. Acceptance criteria: Cart contents persist across browser sessions and device switches for authenticated users.'

The RTM links each requirement to its elicitation source. Technical review catches 3 infeasible requirements and 5 ambiguous statements. Stakeholder review adds 4 missing requirements related to gift card processing that nobody mentioned during elicitation. After two review cycles, the document is baselined at v1.0 with 157 total requirements, and the project proceeds to design.

## Example: Regulatory Compliance System for Healthcare

**Scenario:**

A hospital network needs a new system to track and report compliance with HIPAA regulations. The project is mandated by a regulatory audit finding and must follow the waterfall model due to organizational governance requirements. The timeline is aggressive: 6 months from requirements to deployment.

**Walkthrough:**

Given the regulatory context, the requirements team starts with document analysis — reviewing HIPAA regulatory text, the specific audit findings, existing compliance procedures, and current manual tracking spreadsheets. This yields 40% of the requirements before a single interview.

Stakeholder elicitation focuses on the compliance officer, IT security team, department heads from clinical operations, and the legal team. A key insight from observation: nurses currently spend 20 minutes per shift manually logging access to patient records in a paper binder — a workaround for the lack of automated audit trails.

The requirements document places heavy emphasis on non-functional requirements: audit trail completeness (every data access must be logged with user ID, timestamp, patient record ID, and access type), data encryption standards (AES-256 at rest, TLS 1.3 in transit), and retention periods (audit logs retained for 7 years per HIPAA requirements). Each requirement explicitly references the HIPAA section it satisfies.

The traceability matrix uses a four-column backward trace: HIPAA Section → Audit Finding → Stakeholder Need → Requirement ID. This proves to auditors that every regulatory obligation maps to at least one system requirement.

The formal review includes the hospital's legal counsel, who identifies 3 requirements that don't fully satisfy the regulatory language. These are corrected before baselining. The baselined document contains 89 requirements and becomes the foundation for a design phase that the team can begin with confidence.
