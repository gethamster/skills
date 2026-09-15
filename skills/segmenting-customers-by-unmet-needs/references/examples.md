# Examples: Segmenting Customers by Unmet Needs

## Example: B2B Project Management SaaS (Mid-Market Focus)

**Scenario:**

A senior product manager at a project management SaaS company surveyed 320 mid-market customers who all share the core job 'manage cross-functional projects to deliver outcomes on time and within budget.' The survey covered 35 desired outcome statements across 8 job steps. The product team had been segmenting by industry (tech, healthcare, financial services) but found that feature requests did not align neatly with those industry labels.

**Walkthrough:**

After cleaning 22 straight-liner responses, the PM computed opportunity scores for all 35 outcomes across 298 respondents. PCA reduced the 35 outcomes to 7 factors: planning speed, resource visibility, risk detection, stakeholder communication, dependency tracking, status reporting, and post-project learning. 31. ' Demographic overlays revealed that Resource Optimizers skewed toward companies with 200-500 employees running 10+ concurrent projects, while Velocity Seekers skewed toward smaller teams under 100 employees.

The PM recommended targeting Resource Optimizers for the next two quarters because the segment was largest, most underserved, and aligned with a planned capacity-planning feature. This decision replaced a previous roadmap item targeting 'healthcare customers' that the industry-based segmentation had suggested.

## Example: B2C Personal Finance App (Consumer Market)

**Scenario:**

A senior product manager at a personal finance app surveyed 450 users who share the core job 'manage personal finances to build long-term financial security.' The survey included 22 desired outcome statements. The team had been using age-based cohorts (Gen Z, Millennials, Gen X) for segmentation, but engagement data showed that age was a poor predictor of feature usage.

**Walkthrough:**

Opportunity scores were computed across all 22 outcomes for 412 clean responses. Because the outcome count was under 25, clustering ran directly on the opportunity score matrix without PCA. 28, smallest segment at 22%. ' The demographic overlay showed Automation Seekers were evenly distributed across age groups, disproving the hypothesis that younger users wanted automation most.

Goal Planners skewed toward users who had been on the app less than 6 months, suggesting new users have unmet onboarding needs around goal-setting. The PM prioritized Insight Hunters for the next release cycle because their unmet needs aligned with a planned analytics dashboard, and the segment's higher-than-average subscription tier made the revenue case clear.

## Example: B2B Enterprise Security Platform (Large Enterprise)

**Scenario:**

A senior product manager at an enterprise security platform needed to reconcile conflicting feedback from large customers. Some CISOs wanted faster threat detection. Others wanted better compliance reporting. The team surveyed 180 security decision-makers at companies with 1,000+ employees, covering 28 desired outcome statements related to the core job 'protect organizational assets from security threats while maintaining operational efficiency.'

**Walkthrough:**

After cleaning, 163 responses remained. PCA compressed 28 outcomes into 6 factors: detection speed, false positive reduction, compliance automation, incident response coordination, vendor consolidation, and team skill development. 29). The PM chose k=4 because the fifth cluster in the k=5 solution contained only 11% of respondents and its profile overlapped heavily with another cluster.

The four segments: 'Speed-First Defenders' (31%, dominated by detection speed and incident response), 'Compliance Drivers' (26%, dominated by compliance automation and audit readiness), 'Signal Clarifiers' (24%, dominated by false positive reduction and alert fatigue), and 'Platform Consolidators' (19%, dominated by vendor consolidation and total cost of ownership). Firmographic overlays showed Compliance Drivers concentrated in financial services and healthcare, industries with heavy regulatory burden. Speed-First Defenders appeared across all industries. The PM recommended a dual-segment strategy: build compliance automation features for the Compliance Drivers segment (high willingness to pay, clear ROI story) while improving detection speed for Speed-First Defenders (largest segment, strong competitive differentiation angle).

The two segments required different sales decks, different demo scripts, and different pricing justification narratives, which the marketing team adopted the following quarter.

## Example: Small Team Using Manual Clustering (Early-Stage Startup)

**Scenario:**

A senior product manager at a seed-stage HR tech startup had only 85 survey responses from HR managers who share the job 'hire qualified candidates efficiently while ensuring fair evaluation.' With 18 outcome statements and no budget for statistical software, the PM needed a practical approach to outcome-based segmentation without formal clustering tools.

**Walkthrough:**

The PM calculated opportunity scores in a Google Sheet for all 18 outcomes across 85 respondents, then sorted respondents by their top 3 highest-scoring outcomes. Three natural groupings emerged through manual inspection. ' Without formal cluster validation, the PM ran 5 brief phone calls per group to verify the patterns held. Four of five Volume Handlers confirmed that their daily pain was drowning in applications.

The demographic overlay was simple: Volume Handlers tended to be at companies hiring 20+ roles simultaneously, while Candidate Advocates tended to be at companies competing for scarce technical talent. The startup chose to target Fairness Guardians first because the founder had deep expertise in structured interviewing and the segment aligned with the product's existing scorecard feature. This manual approach took about 6 hours total and, while less rigorous than algorithmic clustering, produced a segmentation that directly informed the next three months of feature development.
