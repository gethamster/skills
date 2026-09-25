---
name: "waterfall"
category: "Workflows"
description: "The waterfall methodology runs a project through sequential phases that each end in a signed-off deliverable. Learn its history, gates and limits."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Waterfall Methodology: Phases, Gates and When to Use It

> Created by **Winston W. Royce (first described, 1970)** - [https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)

## Overview

The waterfall methodology, also called the waterfall model, organizes a project as a sequence of phases in which each phase finishes and hands a reviewed deliverable to the next. Requirements are written and approved before design starts, design is approved before coding starts, and testing follows implementation. Atlassian's summary of [waterfall project management](https://www.atlassian.com/agile/project-management/waterfall-methodology) lists five phases: requirements, design, implementation, verification and maintenance. Most real projects add their own names and subdivisions, but the idea is the same: work flows one way, and each step builds on a baseline the previous step has frozen.

The model is usually traced to Winston W. Royce's paper "Managing the Development of Large Software Systems," printed in the [IEEE WESCON proceedings of August 1970](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf). His Figure 2 shows system requirements, software requirements, analysis, program design, coding, testing and operations as a descending staircase. Royce never used the word "waterfall." According to [Changelog's review of the original papers](https://changelog.com/posts/waterfall-doesnt-mean-what-you-think-it-means), the label comes from a 1976 paper by Thomas Bell and Thomas Thayer, who credited Royce's paper with introducing the concept of a waterfall of development activities. Phased development is older than both: the [Wikipedia history of the waterfall model](https://en.wikipedia.org/wiki/Waterfall_model) records Herbert D. Benington describing phased development of the SAGE air-defense software in 1956.

What Royce wrote is more nuanced than the model that carries his name. Right after the staircase diagram he says, "I believe in this concept, but the implementation described above is risky and invites failure," because testing is the first point at which timing, storage and input/output behavior are experienced rather than analyzed ([Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)). He then adds five fixes: do a preliminary program design first, document the design, do the job twice with a pilot version, plan and control testing, and involve the customer formally at several points. Craig Larman and Victor Basili point out in [their history of iterative development](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf) that many people wrongly read the paper as the model for a single-pass waterfall.

The single-pass version became standard through government contracting. Larman and Basili describe how the US Department of Defense standard DoD-Std-2167 required a strict, document-driven, single-pass waterfall, and how an October 1987 Defense Science Board report recommended iterative development instead ([Larman and Basili](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf)). The revised DoD-Std-2167A of February 1988 was meant to allow other life cycles, yet many readers still took it as a waterfall specification. That history explains why the word "waterfall" now stands for both a real planning discipline and a caricature of rigid process.

The case for waterfall rests on its gates and documents. Each phase ends with an approved artifact, such as a requirements specification, a design, a test report, that the next team can trust and that an auditor or customer can inspect. Scope and cost are estimated against a fixed baseline, and a change after sign-off goes through formal change control. Royce himself argued for heavy documentation: "The first rule of managing software development is ruthless enforcement of documentation requirements" ([Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)).

The case against it is the one Royce raised: the plan can only be checked against reality once the system is built and tested, when changes are most expensive. The [Agile Manifesto](https://agilemanifesto.org/) of 2001 answered by valuing "working software over comprehensive documentation" and "responding to change over following a plan." Today most teams treat waterfall development as a choice for the right conditions: stable requirements, fixed contracts, regulated deliverables and physical products whose design is costly to change.

This page covers waterfall as a project and software delivery model. The same word is also used for a finance chart, a browser network timeline and a content repurposing tactic, and two of this method's skills cover the last two. The FAQ below explains how they relate.

## Core Principles

### Sequential phases with a single direction of flow

Work moves through an ordered set of phases, and each phase starts from the approved output of the one before it. The sequence is what makes the plan predictable: every dependency points one way, so the schedule can be drawn as a chain. Royce accepted feedback between neighboring phases, and his Figure 3 caption hopes that "the iterative interaction between the various phases is confined to successive steps" ([Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)). Feedback that jumps back several phases is the failure the model tries to prevent.

### Requirements are fixed before design

The requirements phase produces a specification that the customer approves and that later phases treat as the baseline. A software requirements specification describes the functional and non-functional requirements of the system to be built and forms an agreement between customer and supplier ([Wikipedia: SRS](https://en.wikipedia.org/wiki/Software_requirements_specification)). Everything downstream, including design, estimates and test cases, is traced back to it. When the requirements are wrong, the whole chain inherits the error.

### Documentation is the deliverable at every phase

In waterfall, a phase is complete when its document is complete and approved. Royce explains why: until coding starts, "documentation, specification, design" denote a single thing, so if the documentation does not exist there is no design yet ([Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)). Documents also let specialists who did not write the design test and operate the system. The cost is time, and teams that skip it lose the model's main benefit.

### Gates decide whether the next phase starts

Each phase ends with a review against written exit criteria. NASA's software engineering handbook separates entrance criteria, the "activities and products that are to be completed before the review can begin," from exit criteria, the decisions and actions that complete it ([NASA SWEHB](https://swehb.nasa.gov/spaces/7150/pages/16449865/7.09+-+Entrance+and+Exit+Criteria)). A gate can approve, approve with conditions, or send the work back. It is the model's main quality control.

### Changes after sign-off go through change control

Once a deliverable is baselined, a change to it is a formal request. In PMI terms, any change to the baseline goes through a change control process, and a change control board generally has authority to approve or reject it ([PMP Cert Guide excerpt](https://www.pearsonitcertification.com/articles/article.aspx?p=3178907&seqNum=7)). The request is analyzed for its effect on scope, schedule, cost and risk before anyone decides. This keeps the plan honest while still allowing change.

### Testing verifies the whole system against the specification

Testing is a dedicated phase that checks the built system against the approved requirements, usually at several levels from units to acceptance. Royce called the test phase the biggest user of project resources and "the phase of greatest risk in terms of dollars and schedule" ([Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)), which is why he wanted earlier steps to find problems before it. A traceability matrix links each requirement to the tests that prove it.

### The customer is involved at defined points

Royce wrote that giving the contractor "free rein between requirement definition and operation is inviting trouble" and asked for formal customer commitment at several points before delivery ([Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)). In practice this means the customer signs the requirements, attends design reviews and runs acceptance testing. Customer involvement in waterfall is scheduled and formal, which differs from the continuous collaboration agile methods ask for.

## Steps

1. **Gather and approve requirements**
   Elicit requirements from stakeholders through interviews, workshops and analysis of existing systems and regulations. Write them as individual, testable statements in a requirements specification, split into functional and non-functional requirements. Review the document with the customer and the teams who will design and test against it. The phase ends when the specification is approved and baselined. From then on, changes to it go through change control.

2. **Design the system**
   Translate the approved requirements into an architecture and a detailed design: components, interfaces, data structures and how each requirement will be met. Royce recommended starting design early enough to expose storage, timing and resource limits before detailed work begins ([Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)). Record the design in documents that developers and testers can work from without the designers in the room. Close the phase with a design review against written exit criteria.

3. **Implement the design**
   Build the system to the approved design, module by module, with unit tests and peer review of the code. Royce asked for every piece of analysis and code to be checked by a second person who did not write it. Deviations from the design are raised as change requests rather than made quietly. The phase ends when the code is complete, unit tested and ready to be integrated.

4. **Integrate and test**
   Assemble the modules and test at increasing levels: integration, system and acceptance testing. The V-model pairs each design level with a test level, for example requirements with acceptance testing and module design with unit testing ([Wikipedia: V-model](https://en.wikipedia.org/wiki/V-model_%28software_development%29)). Log defects, fix them and retest until the exit criteria in the test plan are met. The customer's acceptance test is the final check that the system meets the specification.

5. **Deploy and hand over**
   Release the verified system into production using a written deployment plan that covers configuration, data migration, training and a rollback route. Hand over the operating documentation so the people running the system do not depend on the builders. Confirm with the customer that the delivered system is accepted. Close the project records, including the final baseline and the change log.

6. **Operate and maintain**
   Once the system is live, fix defects, apply updates and make small enhancements under the same change control used during the project. Larger changes are usually treated as a new project that starts again from requirements. Keep the documentation current, because maintainers rely on it more than anyone. Review the system periodically to decide when it needs replacing.

## Waterfall and Its Variants

The single-pass waterfall is only one of several sequential life cycles. The table compares the versions practitioners most often mean.

| Variant | How it differs from single-pass waterfall | Source |
|---|---|---|
| Royce's own version | Adds preliminary design, heavy documentation, a pilot built first ("do it twice"), planned testing and formal customer involvement | [Royce](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf) |
| DoD-Std-2167 waterfall | Strict, document-driven single pass required on defense contracts until the standard was revised | [Larman and Basili](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf) |
| V-model | Same sequence, with each design phase paired to the test level that verifies it | [Wikipedia: V-model](https://en.wikipedia.org/wiki/V-model_%28software_development%29) |
| Sashimi model | Peter DeGrace's variant in which adjacent phases overlap | [Wikipedia: Waterfall model](https://en.wikipedia.org/wiki/Waterfall_model) |
| Iterative and incremental | Repeats the whole cycle in small slices so feedback arrives early | [Larman and Basili](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf) |

## When to Use

- Requirements are well understood and stable, for example when replacing an existing system with known behavior or implementing a published regulation, because the model's savings depend on the baseline holding.
- The contract fixes scope, price and deliverables in advance, since the phase documents map directly to contract milestones and acceptance terms.
- Regulators or auditors require traceable documentation from requirements to tests, as in safety-critical or medical systems, because waterfall produces those artifacts as a matter of course.
- The product is physical or hard to change after design, such as hardware or construction, where late changes cost far more than extra time spent on design.
- Several vendors or teams depend on each other's finished outputs, so a signed interface specification is needed before each can start.

## When Not to Use

- The problem or the users' needs are still unclear, because a frozen requirements document will lock in guesses and the error surfaces only in testing.
- The team needs early feedback from real users, since waterfall delivers working software at the end of the project.
- The product is new and the technical approach is uncertain, where Royce's own advice to build a pilot first, or a fully iterative method, reduces risk better.
- Stakeholders expect to reprioritize frequently, as each change becomes a formal request with its own analysis and approval cost.

## Skills

This method includes the following skills:

- [Defining Waterfall Phases with Entry and Exit Criteria](../../skills/defining-waterfall-phases/SKILL.md): Set up the phases of a waterfall project, each with entry criteria, deliverables, exit criteria and an owner.
- [Writing Waterfall Requirements Specification Documents](../../skills/writing-waterfall-requirements-documents/SKILL.md): Write a requirements specification with testable, traceable statements that can be baselined before design.
- [Creating Waterfall Project Plans with WBS and Gantt Charts](../../skills/creating-waterfall-project-plans/SKILL.md): Build a work breakdown structure, a dependency network and a baselined Gantt chart schedule.
- [Conducting Phase Gate Reviews in a Waterfall Project](../../skills/conducting-phase-gate-reviews/SKILL.md): Run the review at the end of each phase and record a go, conditional go, recycle or stop decision.
- [Managing Change Requests in Waterfall Projects](../../skills/managing-change-requests-in-waterfall/SKILL.md): Take a scope change through impact analysis and a change control board decision, then update the baseline.
- [Running Waterfall Testing Phases from Unit to Acceptance](../../skills/running-waterfall-testing-phases/SKILL.md): Plan and run unit, integration, system and acceptance testing against a requirements traceability matrix.
- [Analyzing SEO Waterfall Charts for Page Load Speed](../../skills/analyzing-seo-waterfall-charts/SKILL.md): Read a browser network waterfall to find what delays page load and Core Web Vitals.
- [Building a Content Waterfall Strategy for Repurposing](../../skills/building-content-waterfall-strategies/SKILL.md): Plan how one pillar asset is cut into derivative pieces and released across channels in sequence.

## FAQ

**What is the difference between waterfall and agile?**

Waterfall runs each phase once, in order, and fixes requirements before design begins. Agile methods deliver working software in short iterations and expect requirements to change along the way. The [Agile Manifesto](https://agilemanifesto.org/) states the contrast as values, preferring "responding to change over following a plan." Atlassian notes that waterfall planning isolates teams into phases while agile allows cross-functional work across multiple phases. Choose based on how stable the requirements are and how costly late change is.

**Did Winston Royce invent the waterfall model?**

Royce's paper is the one usually cited, and it contains the familiar staircase diagram, but he did not use the word "waterfall" and he called the simple version "risky." The term came from Bell and Thayer's paper of 1976, as [Changelog's review of the sources](https://changelog.com/posts/waterfall-doesnt-mean-what-you-think-it-means) explains. Benington had described phased development years earlier. Royce's own recommendations, such as building the system twice, point toward iteration.

**Can you go back to a previous phase in the waterfall model?**

Yes, but deliberately. A problem found downstream is raised as a change request, its impact is analyzed, and if it is approved the earlier deliverable is revised and re-baselined. Royce accepted feedback between neighboring phases and warned that feedback reaching far back, for example from testing to requirements, is what causes large overruns. Variants such as the sashimi model allow neighboring phases to overlap on purpose.

**What are the phases of the waterfall model?**

The usual list is requirements, design, implementation, verification (testing) and maintenance, often with deployment as its own phase. Royce's original figure used system requirements, software requirements, analysis, program design, coding, testing and operations. Defense standards used their own names. Whatever the names, each phase needs defined inputs, outputs and exit criteria.

**What is a waterfall chart, and is it related to the waterfall model?**

Not directly. In finance and reporting, a waterfall chart "shows a running total as values are added or subtracted" and is also called a bridge chart ([Microsoft Support](https://support.microsoft.com/en-us/office/create-a-waterfall-chart-8de1ece4-ff21-4d37-acd7-546f5527f185)). In web performance, a waterfall chart is the timeline of network requests a browser makes while loading a page, covered in the [SEO waterfall chart skill](../../skills/analyzing-seo-waterfall-charts/SKILL.md). People searching for a waterfall chart in project management usually want a Gantt chart of a sequential plan. All three share only the cascading picture.

**What is a content waterfall?**

A content waterfall is a marketing tactic that takes one core piece of content, often called pillar content, and reuses it across channels, as the [Digital Marketing Institute glossary](https://digitalmarketinginstitute.com/resources/glossary/content-waterfall-gls) defines it. It borrows the waterfall image of one source feeding many downstream pieces. It is a separate practice from the project delivery model, and the [content waterfall skill](../../skills/building-content-waterfall-strategies/SKILL.md) covers it.

**Is waterfall still used?**

Yes, in whole or in part. Projects with fixed contracts, regulatory documentation or physical products still plan in sequential phases with gates, and many organizations use a waterfall plan at program level while teams iterate inside a phase. Even the defense standards that made single-pass waterfall common were revised to allow other life cycles, as [Larman and Basili](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf) describe. The model is best treated as one option chosen for the right conditions.

## Sources

- [Winston W. Royce: Managing the Development of Large Software Systems](https://github.com/tpn/pdfs/blob/master/Managing%20the%20Development%20of%20Large%20Software%20Systems%20-%201970%20%28waterfall%29.pdf)
- [Craig Larman and Victor R. Basili: Iterative and Incremental Development, A Brief History](https://www.cs.umd.edu/~basili/publications/journals/J90.pdf)
- [Changelog: Waterfall doesn't mean what you think it means](https://changelog.com/posts/waterfall-doesnt-mean-what-you-think-it-means)
- [Wikipedia: Waterfall model](https://en.wikipedia.org/wiki/Waterfall_model)
- [Atlassian: What is the Waterfall Methodology?](https://www.atlassian.com/agile/project-management/waterfall-methodology)
- [Manifesto for Agile Software Development](https://agilemanifesto.org/)
- [Wikipedia: V-model (software development)](https://en.wikipedia.org/wiki/V-model_%28software_development%29)
- [NASA Software Engineering Handbook: Entrance and Exit Criteria](https://swehb.nasa.gov/spaces/7150/pages/16449865/7.09+-+Entrance+and+Exit+Criteria)
- [Pearson IT Certification: Monitoring and Controlling the Project](https://www.pearsonitcertification.com/articles/article.aspx?p=3178907&seqNum=7)
- [Wikipedia: Software requirements specification](https://en.wikipedia.org/wiki/Software_requirements_specification)
- [Microsoft Support: Create a waterfall chart](https://support.microsoft.com/en-us/office/create-a-waterfall-chart-8de1ece4-ff21-4d37-acd7-546f5527f185)
- [Digital Marketing Institute: Content waterfall](https://digitalmarketinginstitute.com/resources/glossary/content-waterfall-gls)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
