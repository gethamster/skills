# Examples: Transitioning Field Learnings into Core Product Features

## Example: B2B SaaS Data Onboarding (Small FDE Team)

**Scenario:**

A three-person forward-deployed engineering team at a data analytics platform has completed eight enterprise deployments over 12 months. Each deployment required building a custom data ingestion pipeline because every customer stored source data in a different schema with different quality issues. The team has one customer facing engineer responsible for proposing product improvements.

**Walkthrough:**

The engineer catalogs all eight ingestion pipelines and identifies the common problem: every customer needs schema mapping, null handling, and deduplication before data reaches the platform. The exact transformations differ, but the problem class is identical across all eight customers. Frequency score: 5. The engineer examines the eight implementations and finds that five use a similar declarative mapping file with customer-specific field names.

Two use imperative scripts. One is entirely manual. Generalizability score: 3, because the declarative pattern transfers but needs a configuration UI. Strategic fit: 5, because reducing onboarding time is the company's top retention priority.

The proposal documents that average onboarding takes 14 days with custom pipelines, that a configurable ingestion module could reduce this to 3 days based on the declarative pipeline's performance at three customer sites, and that the effort is estimated as Medium. The product team accepts the proposal and ships a configurable data ingestion module within one quarter. Post-launch validation at two customer sites confirms onboarding drops to 4 days, slightly above the estimate but well within the 80% effectiveness threshold.

## Example: Developer Tools Company (Large Team, B2B)

**Scenario:**

A developer tools company with 15 forward-deployed engineers serves 40+ enterprise customers. Field engineers frequently build monitoring dashboards tailored to each customer's infrastructure. The team lead wants to systematize the field-to-product feedback loop.

**Walkthrough:**

The team lead runs a catalog exercise across all 15 engineers over a two-week period, collecting 87 custom solutions in a shared spreadsheet. After deduplication and grouping, 12 distinct problem classes emerge. The top candidate is custom alerting rules: 28 of the 87 solutions involve writing customer-specific alerting logic on top of the platform's existing monitoring data. Frequency score: 5.

Generalizability is scored at 4 because most alerting rules follow a common pattern of metric threshold plus time window plus notification channel, and several implementations already use a configuration file that could become a product-level template. Strategic fit: 4, as the product roadmap includes an observability expansion but has not specifically planned alerting features. The team lead writes the proposal with evidence from six customer deployments where custom alerting reduced mean-time-to-detection by 60-75%. The product team accepts and assigns a squad to build a rule-based alerting engine.

The team lead designates two field engineers as design collaborators who contribute 23 edge case scenarios from their deployments. The shipped feature covers 19 of the 23 edge cases. The remaining four are documented as future iterations.

## Example: B2C Fintech Platform (Single FDE, Early Stage)

**Scenario:**

A single customer facing engineer at a fintech startup works directly with three pilot banking customers. During the pilot, the engineer built a custom reconciliation workflow for each bank because the platform's built-in reconciliation could not handle multi-currency transactions with partial settlements. The startup's product team has only four engineers and limited capacity for new features.

**Walkthrough:**

The engineer catalogs three reconciliation workflows and identifies the shared problem: multi-currency partial settlement matching. Frequency score: 3, based on three pilot banks plus two prospects who raised the same issue during sales demos. Generalizability: 2, because each workflow is tightly coupled to the bank's ledger format and settlement timing conventions. Strategic fit: 5, because the startup cannot expand beyond pilot banks without solving this problem at the platform level.

Despite the low generalizability score, the combination of high strategic fit and existential business importance justifies a proposal. The engineer writes a concise proposal emphasizing that zero of the three pilot banks can go live without this capability and that two prospective banks listed it as a hard requirement. The engineer proposes a phased approach: first, abstract the settlement matching logic into a configurable module while keeping ledger format adapters as lightweight plugins. Effort estimate: Large for the full solution, Small for the matching engine alone.

The product team accepts the phased approach and ships the matching engine in six weeks. The engineer builds the three ledger adapters as thin wrappers, reducing future per-customer work from two weeks to two days.

## Example: Healthcare SaaS (Regulated Environment, B2B)

**Scenario:**

A customer facing engineer at a healthcare data platform has deployed the product at six hospital systems over 18 months. At four of the six hospitals, the engineer built custom audit logging that exceeds the platform's built-in logging to meet HIPAA audit requirements. Each implementation captures slightly different events but all serve the same compliance need.

**Walkthrough:**

The engineer catalogs the four custom audit logging implementations and maps each to the underlying HIPAA requirement it satisfies. The problem is identical across all four: the platform's default audit log does not capture data access events at the field level, which HIPAA auditors require. Frequency score: 5, because the remaining two hospitals are smaller and have not faced an audit yet but will eventually need the same capability. ' Generalizability: 4, because three of the four implementations use the same event capture pattern with a customer-specific output format.

Strategic fit: 5, as the company is pursuing SOC 2 certification and plans to expand into larger health systems where compliance is non-negotiable. The proposal leads with the regulatory angle: 'Every enterprise healthcare customer will require field-level audit logging. ' The product team fast-tracks the feature and ships a configurable audit logging module with selectable event types and output format options within one quarter. The engineer validates at two existing hospital sites, confirming the generalized version passes mock HIPAA audits without custom code.
