# Examples: Shipping Production Systems Inside Client Infrastructure

## Example: Deploying a Real-Time Data Pipeline at a Financial Services Firm

**Scenario:**

A three-person forward deployed engineering team is embedded at a mid-size financial services company to deploy a real-time transaction monitoring pipeline. The customer runs on-premises Kubernetes clusters, uses Jenkins for CI/CD, stores secrets in HashiCorp Vault, and has SOC 2 and PCI-DSS compliance requirements. Their security team requires a two-week review for any new service that touches cardholder data. The engagement has a six-week timeline.

**Walkthrough:**

During the discovery sprint, the team mapped 14 specific constraints including network segmentation between PCI and non-PCI zones, a mandatory Vault integration for all secrets, Jenkins pipeline templates that all services must use, and a requirement that all container images pass Twistlock scans with zero critical CVEs. They deployed a health-check service through Jenkins to the non-PCI Kubernetes cluster by day three, revealing that the cluster's ingress controller required a custom annotation their Helm charts did not include. They submitted the architecture for security review on day four, two weeks before planned production deployment. The security team flagged that the pipeline's Kafka consumer needed to run inside the PCI zone, which required a different service account configuration.

Because they caught this early, they adapted the deployment manifests and retested within two days. Integration adapters were built for the customer's existing Oracle database (JDBC), their internal REST API for account lookups, and their Splunk instance for audit logging. Load testing simulated 50,000 transactions per minute based on the customer's peak Black Friday traffic data. The staged rollout processed shadow traffic for one week before switching to live.

The handoff runbook included 23 pages of operational procedures, and the customer's SRE team completed a simulated incident exercise on day 38. The system ran for 45 days post-handoff with one minor escalation that resulted in a runbook update.

## Example: Integrating a Machine Learning Model into a Healthcare Platform

**Scenario:**

A solo forward deployed software engineer is deploying a diagnostic assist ML model into a regional hospital network's electronic health records system. The customer runs on AWS GovCloud, uses Terraform for infrastructure, has HIPAA BAA requirements, and their EHR vendor exposes a FHIR R4 API with strict rate limits of 100 requests per minute. The engagement timeline is four weeks.

**Walkthrough:**

The engineer spent the first two days mapping the FHIR API's actual behavior versus its documentation, discovering that certain resource types returned non-standard date formats and that the rate limit was enforced per IP, not per API key. The constraints matrix identified 11 items, with HIPAA's minimum necessary standard being the most impactful since it restricted which patient data fields the model could access. A health-check service was deployed through Terraform into GovCloud by day two, confirming that the engineer's IAM role had the correct permissions. The ML model was containerized with a thin FHIR adapter that handled rate limiting with a token bucket algorithm and translated non-standard date formats.

The security review was pre-cleared by submitting the Terraform plan and a data flow diagram showing that no PHI left the GovCloud VPC. Observability was wired into the customer's existing CloudWatch setup with custom metrics for model inference latency and FHIR API error rates. Load testing simulated the hospital's busiest clinic day with 2,400 patient encounters. The runbook focused heavily on model update procedures since new model versions would need to be deployed quarterly.

The customer's IT team completed the runbook walkthrough and a model update exercise before the engineer departed on day 26.

## Example: Shipping an Analytics Dashboard for a Retail Chain

**Scenario:**

A two-person forward deployed team is deploying a real-time store analytics dashboard across 200 locations for a national retail chain. The customer uses Azure, deploys through Azure DevOps, authenticates through Okta, and stores data in Snowflake. Each store has its own network with varying bandwidth. The timeline is five weeks, and the customer's IT team has two people who will maintain the system.

**Walkthrough:**

Discovery revealed that 40 of the 200 stores had intermittent connectivity with sub-1 Mbps upload speeds, which meant the original architecture of streaming raw events would not work for those locations. The team adapted the design to include a lightweight edge agent that aggregated data locally and synced batched summaries every 15 minutes. The deployment pathway was validated by pushing the edge agent to five pilot stores through Azure DevOps on day four. Integration adapters were built for Snowflake (using their Python connector with connection pooling), Okta (SAML federation for SSO), and the customer's existing Power BI instance for executive reporting.

The security review focused on data residency since the retail chain operated in three countries with different data protection laws. The team pre-segmented the Snowflake schema by region and demonstrated that no cross-border data movement occurred. Load testing simulated all 200 stores reporting simultaneously during a holiday sales event. The staged rollout went to 20 stores for one week, then 80, then all 200 over three weeks.

The handoff runbook was written specifically for the customer's two-person IT team, avoiding assumptions about Kubernetes expertise since the team managed Azure App Services exclusively. Post-deployment support lasted three weeks. The team tracked four escalations, all of which were edge agent connectivity issues at low-bandwidth stores. Each escalation resulted in a runbook update with specific diagnostic commands for the store-level network.

## Example: Embedding a Search Service into an Enterprise SaaS Platform

**Scenario:**

A forward deployed software engineer is deploying an advanced search service into a B2B SaaS company's multi-tenant platform. The customer runs on GCP, uses GitHub Actions for CI/CD, follows a trunk-based development workflow, and has 450 enterprise tenants with strict data isolation requirements. The engagement is three weeks with a target of zero-downtime migration from their existing Elasticsearch cluster.

**Walkthrough:**

The discovery sprint mapped the customer's multi-tenancy model, which used tenant-specific Elasticsearch indices with a routing layer that directed queries based on JWT claims. The key constraint was that the new search service had to maintain identical API contracts so that 450 tenants experienced no breaking changes. The engineer deployed a shadow instance of the new search service behind a feature flag on day two, processing duplicate queries from the existing routing layer without returning results to users. Integration adapters were built for the customer's event bus (Cloud Pub/Sub) to keep search indices synchronized, their authentication middleware for tenant isolation, and their internal admin API for index management.

The security review was expedited because the engineer used the customer's existing GCP project, service accounts, and VPC, adding no new network pathways. Load testing replayed 48 hours of production query logs against the shadow instance, comparing result quality and latency against the existing Elasticsearch cluster. Results showed p99 latency improvement from 340ms to 95ms with equivalent relevance scores. 1% for any batch.

The handoff runbook included tenant migration procedures, index rebuild steps, and relevance tuning workflows. The customer's platform team completed a simulated tenant migration exercise. Zero-downtime migration was achieved, and the system ran for 60 days post-handoff with no escalations.
