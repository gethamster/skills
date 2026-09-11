# Examples: Operating Autonomously in Customer Environments

## Example: Early-Stage Startup FDE at a Financial Services Client

**Scenario:**

A two-person FDE team from a data infrastructure startup is embedded at a mid-size financial services firm for a 12-week engagement. The startup's product is young, and the engineering standards document is only four pages long. The customer's compliance requirements are strict, and they have a strong internal platform team with opinions about how systems should be built.

**Walkthrough:**

Before the engagement, the lead FDE holds a 45-minute session with the startup's CTO to review the product roadmap and identify the three architectural decisions that are genuinely non-negotiable (data encryption at rest, event sourcing for audit trails, and no direct database access from customer code). Everything else is classified as Tier 1 or Tier 2. The DBD lists 15 example decisions across the three tiers, with Tier 1 including infrastructure tooling choices and monitoring setup, Tier 2 including any adoption of the customer's internal libraries or authentication systems, and Tier 3 limited to custom feature commitments and data residency changes. During week three, the customer's platform team pushes back on the FDE's event sourcing pattern, proposing their own CDC-based approach instead.

The FDE logs this as a Tier 2 decision, notifies the CTO within four hours, and negotiates a hybrid approach that preserves the audit trail requirement while using the customer's CDC infrastructure. The CTO reviews the log entry and agrees. By week eight, the Decision Log contains 23 entries, and a review surfaces a recurring pattern: seven entries involve the customer requesting direct SQL access to intermediate data stores. The FDE flags this as a product signal, and it later becomes a feature request for a self-serve query layer in the product roadmap.

## Example: Enterprise FDE at a Large Healthcare Organization

**Scenario:**

A solo FDE from a workflow automation company is embedded at a 5,000-person healthcare organization for a six-month engagement. The FDE's home company has mature engineering standards and a detailed product roadmap. The customer has a slow procurement process, strict HIPAA requirements, and a change advisory board that meets biweekly.

**Walkthrough:**

The FDE spends the first three days building a comprehensive DBD that accounts for the healthcare environment's regulatory constraints. Tier 3 is expanded beyond the normal template to include any decision involving PHI data flows, any integration with the customer's EHR system, and any change that would require change advisory board approval. This means roughly 40% of anticipated decisions land in Tier 3, which is unusually high. To prevent this from creating bottlenecks, the FDE negotiates a standing 15-minute daily Slack check-in with the home team's lead architect specifically for Tier 3 pre-approvals.

This reduces Tier 3 response time from 24 hours to under two hours. During month two, the customer's IT director asks the FDE to store workflow state in the customer's on-premises database rather than the product's cloud-hosted store. The FDE runs the reversibility test: switching back later would require a data migration affecting live patient workflows. This is clearly Tier 3.

The FDE discusses it in the next daily check-in, and together they design a hybrid storage approach that keeps workflow state in the cloud but syncs a read-only copy to the on-premises database for the customer's reporting needs. The solution satisfies the customer's requirement without creating an irreversible dependency. The post-engagement retrospective reveals that the daily Tier 3 check-in was the single most important practice for maintaining speed in a high-regulation environment.

## Example: Growth-Stage B2B SaaS FDE Supporting Multiple Accounts

**Scenario:**

An FDE at a growth-stage analytics company manages three concurrent customer deployments, spending roughly two days per week at each. Each customer is in a different industry (e-commerce, logistics, media) with different technical environments and different levels of technical sophistication.

**Walkthrough:**

The FDE creates separate DBDs for each account because the risk profiles differ significantly. The e-commerce customer has a modern cloud-native stack where most decisions are Tier 1. The logistics customer runs legacy on-premises infrastructure where even tooling choices can have cascading effects, so more decisions are Tier 2. The media customer is technically sophisticated but has an aggressive timeline, creating pressure to cut corners.

The FDE maintains a single Decision Log with account tags, allowing cross-account pattern analysis. After six weeks, the FDE notices that all three customers independently requested the same type of custom data transformation, each phrased differently but structurally identical. Because the decisions were logged with rationale and context, the FDE assembles a product signal brief showing three independent validations of the same feature gap. The product team prioritizes it for the next quarter.

The FDE also notices that their Tier 1 boundary at the media account has been drifting, with decisions that should have been Tier 2 getting classified as Tier 1 under timeline pressure. The weekly self-audit catches this in week five, and the FDE recalibrates before any damage is done, proactively flagging two prior decisions that need home team review.

## Example: New FDE on Their First Solo Deployment

**Scenario:**

A junior engineer with two years of experience has been promoted into a forward deployed engineer role at a developer tools company. This is their first solo deployment, a 10-week engagement at a mid-market SaaS company that wants to integrate the developer tools product into their existing CI/CD pipeline.

**Walkthrough:**

Recognizing that this FDE has limited field experience, the engineering manager deliberately sets tighter initial boundaries. The DBD classifies almost all integration decisions as Tier 2, with only pure implementation choices like variable naming, test structure, and local development environment setup in Tier 1. The FDE commits to logging every decision, including Tier 1 decisions that would normally be routine for a senior FDE. During week two, the customer asks the FDE to modify the product's webhook payload format to match their internal event schema.

The FDE correctly identifies this as a Tier 3 decision because it would create a customer-specific API surface. They schedule a sync with their manager, who helps them design an adapter layer that transforms the standard payload without modifying it. In the week four async update, the FDE reports that they have been logging 8-10 decisions per week and that the process feels slow. The manager reviews the log, identifies five decision categories that the FDE has been handling consistently well, and moves them to Tier 1.

By week seven, the FDE is operating at near-senior autonomy levels for this engagement's domain, with the log providing auditable evidence of sound judgment. The graduated trust model works because the FDE earned expanded boundaries through demonstrated alignment rather than simply being told to figure it out.
