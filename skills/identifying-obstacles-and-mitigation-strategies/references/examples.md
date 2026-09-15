# Examples: Identifying Obstacles and Building Mitigation Strategies

## Example: B2B SaaS Product Team Launching a New Integration

**Scenario:**

A 12-person product team at a mid-stage B2B SaaS company is building a V2MOM for Q3-Q4. Their Vision is to become the default workflow tool for marketing teams. One of their key Methods is launching a native integration with a major CRM platform by October 1. The team has 4 engineers, a dependency on the CRM vendor's API team, and a tight holiday code freeze starting November 15.

**Walkthrough:**

The team runs assumption extraction on the CRM integration Method and surfaces seven assumptions: the CRM vendor's API documentation is accurate, the vendor's sandbox environment is available by August 1, two senior engineers remain allocated full-time through October, the security review takes no more than two weeks, the design team delivers the integration UX by July 15, no critical bugs from the Q2 release divert engineering capacity, and the partner agreement is signed by July 1. They invert each assumption into obstacle statements. " The mitigation plan assigns the engineering lead as owner, defines the trigger as "no sandbox access confirmed by July 25" (giving a one-week buffer), and specifies the countermeasure: switch to mock API testing for the first two sprints using the existing documentation, which allows development to proceed while sandbox access is resolved. The residual impact is that mock-based development may require a refactoring sprint once real sandbox access arrives, potentially pushing the launch to October 15.

The team documents this in their V2MOM and notifies the partner manager to escalate sandbox access immediately.

## Example: Early-Stage Startup Founder Writing a Personal V2MOM

**Scenario:**

A solo founder with two contractors is writing a personal V2MOM for the next 6 months. Her Vision is to reach $10K MRR with her developer tools product. Her Methods include shipping three key features, building a content marketing engine, and closing two enterprise pilot customers. She has limited runway (8 months of cash) and no dedicated marketing person.

**Walkthrough:**

Working alone, she extracts assumptions from each Method by writing them on index cards. The content marketing Method assumes she can write 2 blog posts per week while also doing product work, that organic search traffic will begin compounding within 3 months, and that she can learn basic SEO without hiring a consultant. She scores "content output drops below 1 post per week due to product demands" as Likelihood 3, Severity 2, Priority 6, making it Tier 1. " The countermeasure is pre-authorized: she will batch-write 8 posts over one weekend per month and schedule them, switching from a continuous writing model to a batch model.

The residual impact is that posts may feel less timely, but volume is preserved. For the enterprise pilot Method, she scores "both target companies enter budget freeze in Q4" as Likelihood 2, Severity 3, Priority 6. Her countermeasure is to expand the pilot prospect list from 2 to 5 companies by July 15, increasing the probability that at least 2 close even if some freeze budgets. She documents both mitigations directly in her V2MOM and reviews them biweekly during her solo planning sessions.

## Example: Enterprise Engineering Organization Cascading Obstacle Registers

**Scenario:**

A 200-person engineering division at an enterprise company uses cascading V2MOMs. The VP of Engineering has an organizational V2MOM with a Method to migrate the core platform from a legacy monolith to microservices within 18 months. Four teams each have their own V2MOMs with Methods that depend on the migration timeline. The company has a hiring freeze and a simultaneous compliance deadline in Q2.

**Walkthrough:**

The VP's planning session surfaces 22 raw obstacles, which they score and triage into 5 Tier 1, 8 Tier 2, and 9 Tier 3 items. " The mitigation plan assigns the Director of Platform as owner. The trigger is "compliance work exceeds 30% of senior engineer allocation in any sprint" (set at 30% rather than 40% to allow response time). The countermeasure is to bring in a pre-vetted compliance consulting firm for the audit preparation work, freeing internal engineers to stay on migration.

This countermeasure was pre-negotiated with the CFO during planning and has budget approval conditional on the trigger firing. The VP shares this obstacle register with all four downstream teams. " Their countermeasure is to begin the adapter layer design in parallel as a contingency. This cross-team obstacle visibility prevents the situation where Team 3 discovers the slip in Q3 with no backup plan.

## Example: Marketing Team V2MOM with Budget and Headcount Constraints

**Scenario:**

A 6-person marketing team at a Series B company has a V2MOM with a Vision of becoming the category-defining brand in their space. Methods include launching a podcast, running 4 virtual events, and publishing an annual industry report. The team recently lost their content lead, budget is frozen until the next funding round, and two other teams are competing for the same design resources.

**Walkthrough:**

The team runs assumption extraction and identifies 18 obstacles across their three Methods. The industry report Method scores highest for risk: "If we cannot hire a replacement content lead by month 3 and design resources remain contested, the industry report timeline pushes past the industry conference in November, eliminating the primary distribution moment" (Likelihood 3, Severity 3, Priority 9). Rather than listing "hire content lead" as the countermeasure (since the hiring freeze makes that unlikely), the team builds a realistic mitigation. " The owner is the marketing director.

The countermeasure is to restructure the report from an 80-page designed PDF to a 20-page data brief with 5 companion blog posts, reducing design dependency by 70% and writing load by 50%. The residual impact is a less visually polished deliverable, but the data and insights, which are the actual value, ship on time for the conference. The team also scores their podcast Method obstacle: "If the team lead who volunteered to host leaves the company, the podcast has no host and no backup" (Likelihood 2, Severity 2, Priority 4, Tier 2). The monitoring plan assigns a team member to check in monthly on the host's engagement and to begin training a backup host by month 2 regardless, converting a monitoring plan into a preventive action.
