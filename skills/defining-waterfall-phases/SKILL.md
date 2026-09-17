---
name: defining-waterfall-phases
description: "This skill teaches you how to structure the core waterfall model phases — requirements, design, implementation, verification, and maintenance — with clear entry criteria, deliverables, and exit criteria so each phase completes fully before the next begins."
metadata:
  homepage: https://tryhamster.com
  method: waterfall
---

# Defining and Sequencing Waterfall Model Phases

> This skill teaches you how to structure the core waterfall model phases — requirements, design, implementation, verification, and maintenance — with clear entry criteria, deliverables, and exit criteria so each phase completes fully before the next begins.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | You can confidently decompose any waterfall model project into well-defined, properly sequenced phases with unambiguous criteria that prevent scope leakage and phase overlap. |
| Prerequisites | Basic understanding of software development lifecycles, Familiarity with the waterfall methodology concept, Understanding of project scope and stakeholder roles |
| Part of | [Waterfall](../../methods/waterfall/METHOD.md) |

## Overview

The waterfall model is built on a deceptively simple idea: finish one phase completely before starting the next. In practice, however, most waterfall projects fail not because the model is flawed, but because teams never clearly define what 'finished' means for each phase. This skill closes that gap by teaching you how to structure each phase with explicit entry criteria, key activities, deliverables, and exit criteria.

Defining and sequencing waterfall phases is the foundational skill of the [Waterfall](https://tryhamster.com/methods/waterfall) methodology. Without it, downstream activities like [creating project plans and Gantt charts](https://tryhamster.com/skills/creating-waterfall-project-plans) or [conducting phase gate reviews](https://tryhamster.com/skills/conducting-phase-gate-reviews) have no anchor. When phases are poorly defined, teams experience scope creep between stages, ambiguous handoffs, and the dreaded 'we thought that was done' conversations late in the project.

This skill is especially valuable for project managers, product owners, and technical leads working on projects with stable, well-understood requirements — the exact environment where the waterfall model excels. By the end, you'll have a repeatable framework for structuring phases that any stakeholder can understand and any reviewer can audit.

## How It Works

The waterfall model works by enforcing a strict sequential flow where each phase acts as a self-contained stage with defined inputs and outputs. Think of it like a manufacturing assembly line: raw materials (requirements) enter at one end, and a finished product exits the other. No station starts work until the previous station signals completion.

Each phase serves a specific purpose in this chain:

- **Requirements** captures and documents what the system must do.
- **Design** translates requirements into a technical architecture and detailed specifications.
- **Implementation** builds the system according to the design.
- **Verification** tests the built system against the original requirements.
- **Maintenance** addresses issues and enhancements after deployment.

The critical mechanism that makes this work is the **entry/exit criteria pair**. Entry criteria define the preconditions a phase needs before work can start (e.g., 'all requirements signed off by stakeholders'). Exit criteria define what must be true before the phase is considered complete (e.g., 'design document reviewed and approved, traceability matrix updated'). These criteria are enforced through [phase gate reviews](https://tryhamster.com/skills/conducting-phase-gate-reviews), which are formal checkpoints where stakeholders approve the transition.

This structure creates a chain of accountability: every deliverable is traceable back to a requirement, every design decision is documented before code is written, and every test case maps to a specification. When done well, the waterfall model produces comprehensive documentation and predictable timelines — which is why it remains the standard in regulated industries, government contracts, and infrastructure projects.

## Step-by-Step Guide

### Step 1: Step 1: Identify and Name Your Phases

Start by selecting the phases appropriate for your project. The canonical waterfall model uses five phases — Requirements, Design, Implementation, Verification, and Maintenance — but real projects sometimes split or merge phases. For example, Design might split into High-Level Design (architecture) and Low-Level Design (detailed module specs), or a hardware project might add a Fabrication phase between Implementation and Verification.

List each phase in sequential order. Give each a clear, unambiguous name that your entire team and stakeholders will recognize. Avoid jargon-heavy names that only one discipline understands. The phase names will appear on your Gantt chart, in your [project plan](https://tryhamster.com/skills/creating-waterfall-project-plans), and in every status report, so clarity matters.

> **Pro tip:** Keep the number of phases between 4 and 7. Fewer than 4 usually means phases are too large to manage effectively. More than 7 creates excessive overhead from gate reviews.

### Step 2: Step 2: Define Entry Criteria for Each Phase

For each phase, document the specific conditions that must be true before that phase can begin. Entry criteria answer the question: 'What do we need in hand before we start this work?'

For the Requirements phase, entry criteria might include: project charter approved, stakeholders identified, and budget allocated. For the Design phase: requirements specification document signed off, traceability matrix initiated. For Implementation: design documents approved, development environment provisioned, coding standards documented.

Be specific and measurable. 'Requirements are done' is not an entry criterion. 'Requirements Specification v1.0 approved by Product Owner and all Section Leads, with no open Priority 1 TBDs' is an entry criterion. The more precise your entry criteria, the fewer arguments you'll have at gate reviews.

> **Pro tip:** Create a simple table for each phase with columns: Criterion, Responsible Party, Evidence/Artifact. This makes gate review meetings dramatically faster.

### Step 3: Step 3: Define Key Activities and Deliverables

For each phase, list the primary activities the team will perform and the deliverables those activities produce. Activities are the work; deliverables are the tangible outputs.

For example, in the Design phase, activities might include: architectural trade study, database schema design, API contract definition, and UI wireframing. Deliverables would be: System Architecture Document, Database Design Document, API Specification, and UI Wireframe Package.

Every deliverable should be a named artifact with a clear owner and a review/approval process. This is critical because deliverables become the entry criteria for the next phase. If your Design phase doesn't produce a formal API specification, your Implementation team has nothing concrete to build against — and you've broken the waterfall model's chain of traceability.

> **Pro tip:** Number your deliverables (e.g., D-DES-001: System Architecture Document). This numbering scheme makes traceability matrices and change requests much easier to manage later.

### Step 4: Step 4: Define Exit Criteria for Each Phase

Exit criteria are the conditions that must be satisfied before a phase can be declared complete and the next phase can begin. They are the mirror image of the next phase's entry criteria, but they focus on quality and completeness of the current phase's work.

Strong exit criteria include both completion checks and quality checks. For the Requirements phase: 'All requirements have unique IDs, all requirements are testable, requirements document has been reviewed by all stakeholder groups, and all review comments have been dispositioned.' For the Verification phase: 'All test cases executed, all Priority 1 and 2 defects resolved, test summary report approved by QA Lead.'

Avoid exit criteria that are purely procedural ('review meeting was held'). Focus on substantive conditions ('review meeting was held AND all action items from the review have been closed').

> **Pro tip:** Include a 'no open blockers' criterion for every phase. This catches the common situation where a review technically happened but critical issues were deferred without resolution.

### Step 5: Step 5: Map Dependencies and Handoffs Between Phases

Now that each phase has its own entry criteria, activities, deliverables, and exit criteria, map how they connect. Draw a simple flow diagram showing which deliverables from Phase N become inputs to Phase N+1.

This dependency map serves two purposes. First, it validates your criteria: if Phase 3 (Implementation) needs a database schema, you can verify that Phase 2 (Design) actually produces one. Second, it identifies handoff points where information or artifacts transfer between teams or roles.

For each handoff, document: what artifact is being transferred, who is responsible for producing it, who receives it, and what format it should be in. Handoff ambiguity is one of the most common sources of waterfall project failure.

> **Pro tip:** Use a RACI matrix at each handoff point. The person Responsible for producing the deliverable and the person Accountable for accepting it should never be the same individual.

### Step 6: Step 6: Establish Phase Gate Review Checkpoints

Between each phase, insert a formal gate review. This is where stakeholders evaluate the phase's exit criteria, inspect deliverables, and make a go/no-go decision for the next phase. Gate reviews are the enforcement mechanism that gives the waterfall model its rigor.

For each gate, define: who attends (decision makers vs. advisors), what artifacts are reviewed, what the possible outcomes are (approve, approve with conditions, reject), and what happens on rejection (rework scope, timeline impact).

Gate reviews should be scheduled in your [project plan](https://tryhamster.com/skills/creating-waterfall-project-plans) with sufficient lead time for reviewers to read the deliverables. A gate review where participants haven't read the materials is theater, not governance. For more detail on running effective gates, see [conducting phase gate reviews](https://tryhamster.com/skills/conducting-phase-gate-reviews).

> **Pro tip:** Send deliverables to reviewers at least 3-5 business days before the gate review. Include a review checklist so reviewers know exactly what to evaluate.

### Step 7: Step 7: Document Everything in a Phase Definition Document

Consolidate all of the above into a single Phase Definition Document (PDD). This document becomes the authoritative reference for how your waterfall project is structured. It should include: the ordered list of phases, entry criteria for each, key activities for each, deliverables for each, exit criteria for each, dependency map, and gate review procedures.

The PDD should be reviewed and approved by the project sponsor and key stakeholders before the project begins. It effectively becomes your project's constitution — the rules everyone agrees to follow.

Store the PDD in a location accessible to all team members and reference it in your project kickoff. When disputes arise about whether a phase is 'really done,' the PDD is the arbiter.

> **Pro tip:** Version-control the PDD. If you need to modify phase definitions mid-project, treat it as a formal change request through your [change management process](https://tryhamster.com/skills/managing-change-requests-in-waterfall).

## Best Practices

- Write entry and exit criteria that are binary — either satisfied or not. Avoid subjective criteria like 'design is sufficiently detailed' in favor of measurable criteria like 'all modules in the design document have sequence diagrams and interface definitions.'
- Keep each phase owned by a single accountable person (Phase Lead), even when multiple teams contribute. This prevents the diffusion of responsibility that causes deliverables to slip through cracks.
- Build a requirements traceability matrix (RTM) from day one and update it at every phase transition. The RTM is the connective tissue that links requirements → design elements → code modules → test cases, and it's what auditors and regulators look for first.
- Time-box your gate reviews. A well-prepared gate review should take 60-90 minutes. If it's taking longer, it usually means deliverables weren't reviewed in advance or exit criteria were ambiguous.
- Include a 'lessons learned' capture as an exit criterion for the final phase (Maintenance handoff). This closes the feedback loop and improves your phase definitions for future waterfall projects.
- Align your phase definitions with any regulatory or contractual requirements early. In industries like aerospace (DO-178C) or medical devices (IEC 62304), phase structure isn't optional — it's mandated.

## Common Mistakes

- **Defining vague exit criteria like 'requirements are complete' without specifying what completeness means** — Replace vague criteria with specific, verifiable conditions: 'All requirements have unique IDs, are testable, have been reviewed by all stakeholder groups, and all review comments have been dispositioned with no open Priority 1 items.'
- **Allowing phases to overlap by starting the next phase before the current phase's gate review is approved** — Enforce gate reviews as hard checkpoints. If schedule pressure tempts you to overlap phases, document the risk formally and get sponsor approval. Unauthorized overlap undermines the entire waterfall model's traceability and creates rework downstream.
- **Skipping the Maintenance phase definition because 'we'll figure it out after launch'** — Define Maintenance phase entry criteria, support processes, and transition procedures during project planning. The handoff from the development team to the operations/support team is one of the highest-risk transitions and must be planned, not improvised.
- **Creating identical phase structures for every project regardless of size or complexity** — Tailor the number of phases, depth of deliverables, and formality of gate reviews to the project's risk profile. A 3-month internal tool doesn't need the same phase rigor as a 2-year regulated medical device project. Scale the waterfall model to fit.
- **Treating the Phase Definition Document as a one-time artifact that never gets updated** — When scope changes or new constraints emerge, update the PDD through your formal [change request process](https://tryhamster.com/skills/managing-change-requests-in-waterfall). An outdated PDD is worse than no PDD because people make decisions based on incorrect assumptions.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/waterfall/METHOD.md) — Waterfall

## Related Skills

- [Conducting Phase Gate Reviews](../conducting-phase-gate-reviews/SKILL.md)
- [Building Content Waterfall Strategies](../building-content-waterfall-strategies/SKILL.md)
- [Running Structured Testing and Verification Phases](../running-waterfall-testing-phases/SKILL.md)
- [Managing Change Requests in Waterfall Projects](../managing-change-requests-in-waterfall/SKILL.md)
- [Creating Waterfall Project Plans and Gantt Charts](../creating-waterfall-project-plans/SKILL.md)
- [Analyzing SEO Waterfall Charts for Page Performance](../analyzing-seo-waterfall-charts/SKILL.md)
- [Writing Comprehensive Requirements Documents](../writing-waterfall-requirements-documents/SKILL.md)
