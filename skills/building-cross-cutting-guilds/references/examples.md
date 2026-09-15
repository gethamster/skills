# Examples: Building Guilds for Cross-Tribe Knowledge Sharing

## Example: Web Platform Guild at a 120-person SaaS company with four tribes

**Scenario:**

A SaaS company has grown to four product tribes, each with two to three squads. Three of the four tribes have front-end engineers using React, but each tribe has drifted to different state management approaches, component libraries, and testing strategies. New hires are confused because the "right way" to build a component depends on which tribe they join. A senior front-end engineer in Tribe C notices that the same rendering bug was fixed independently in Tribes A and C within the same month.

**Walkthrough:**

The engineer runs the pain-signal survey from Step 1 and finds that 7 out of 12 front-end engineers across three tribes mention "inconsistent component patterns" or "duplicate utility libraries" as a recurring frustration. She recruits a coordinator from Tribe A (not her own tribe, to avoid Tribe C dominance) and two seed members from Tribes B and D. " Success in six months: a published component style guide and a shared testing utility package. Sunset criteria: when the style guide is adopted by at least three tribes and the testing package is in use.

The first session is a 35-minute working session where one engineer from each tribe demos their current component structure in 5 minutes, followed by 15 minutes of group discussion to identify the three largest divergences. The output is a decision record listing the top three areas for convergence. Over the next three months, the guild produces a shared component template, a recommended testing approach document, and a migration guide. Attendance stabilizes at 9 people.

At the six-month mark, three tribes have adopted the shared patterns. The guild rewrites its charter to focus on performance optimization, entering a new phase.

## Example: Data Privacy Guild at a 300-person fintech with eight tribes

**Scenario:**

A fintech company operating in multiple regulatory jurisdictions has eight product tribes. The legal team has flagged that different tribes are implementing GDPR consent flows inconsistently, creating compliance risk. There is no central engineering authority for data privacy because each tribe owns its own data pipeline. The VP of Engineering asks whether a guild could help without creating a top-down mandate that would violate squad autonomy.

**Walkthrough:**

The VP identifies a privacy-aware engineer in Tribe E as coordinator and asks (not mandates) her to explore interest. She posts in the engineering-wide Slack channel: "I am exploring whether a Data Privacy Guild would be useful. " Within a week, 14 engineers from six tribes respond. She recruits seed members from three different tribes and writes a charter: purpose is to create a shared consent-flow reference implementation and a data deletion playbook.

Success criteria: both artifacts reviewed by legal and adopted by at least five tribes within six months. The first session brings 11 attendees. The coordinator presents a 10-minute overview of the regulatory requirements (provided by legal) and then facilitates a 20-minute mapping exercise where each tribe describes their current consent flow in two sentences. The guild discovers that three tribes have nearly identical implementations and two have significant gaps.

Over the next four months, the guild produces a reference consent-flow library, a data deletion runbook, and a quarterly audit checklist. Legal reviews and approves all three. The guild sunsets after seven months because the artifacts are stable and maintained by the platform team. 5 hours per person per month for active participants.

## Example: Incident Response Guild at a 60-person B2B startup with two tribes

**Scenario:**

A small B2B startup has two product tribes. They have experienced three significant production incidents in the past quarter, and each time the response was ad hoc. Engineers from both tribes scrambled without a shared playbook, communication was chaotic, and the post-incident reviews produced recommendations that were never tracked. The CTO wants to improve incident response without hiring a dedicated SRE team.

**Walkthrough:**

The CTO asks an engineer from Tribe A who led the best post-incident review to coordinate the guild. With only two tribes, the coordinator recruits one seed member from each tribe plus an on-call engineer from the platform team (three seed members total). The charter is tight: purpose is to create a shared incident response playbook and a blameless post-incident review template. Success in three months: both artifacts published and used in the next incident.

Sunset criteria: when the playbook has been used in two real incidents and the review template is integrated into the team's standard process. The guild meets biweekly for 30 minutes. Session one: the coordinator walks through the last incident timeline and the group identifies the three biggest coordination failures. Session two: one member presents an incident response framework they found useful at a previous company and the group adapts it.

Session three: the group reviews a draft playbook and stress-tests it against a past incident scenario. By week six, the playbook and review template are published. The next real incident uses both artifacts, and the post-incident review identifies two improvements to the playbook. The guild runs one final session to incorporate those improvements, then sunsets.

Total lifespan: 10 weeks, four sessions, two durable artifacts.

## Example: Machine Learning Guild at a 500-person e-commerce company with twelve tribes

**Scenario:**

A large e-commerce company has twelve product tribes. Five of them have hired ML engineers in the past year, but these engineers are scattered across squads and have no shared forum. Each ML engineer is choosing their own model serving infrastructure, experiment tracking tools, and feature store approach. The Head of ML (a new role) wants to create alignment without centralizing all ML work into a single tribe, which would conflict with the company's squad-based autonomy model.

**Walkthrough:**

The Head of ML identifies two coordinators (not herself, to avoid the guild becoming a management tool) from different tribes. They run the pain-signal survey and find that all 14 ML engineers across five tribes name "no shared experiment tracking" and "duplicated feature engineering" as their top frustrations. The charter defines two success criteria at six months: a recommended experiment tracking stack evaluated and documented, and a shared feature store proof-of-concept available for any squad to use. The guild launches with 12 attendees from five tribes.

The first session is structured as a lightning round: each tribe's ML engineer describes their current stack in three minutes using a shared template (model serving, experiment tracking, feature store, monitoring). The coordinator compiles these into a comparison matrix and posts it in the artifact repository. Sessions two through four each tackle one area of the matrix: a member presents their approach, the group discusses tradeoffs, and the guild votes on a recommended default. By month four, the guild has published a recommended experiment tracking setup with a migration guide and a shared feature store library that three tribes adopt.

The guild continues beyond six months but rewrites its charter to focus on ML model monitoring and fairness evaluation. Membership grows to 18 as the artifacts attract ML engineers from tribes that had not initially participated. The guild becomes a signature element of the company's spotify engineering culture, cited in recruiting materials.
