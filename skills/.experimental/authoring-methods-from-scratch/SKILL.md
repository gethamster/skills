---
name: authoring-methods-from-scratch
description: "Guides users through writing a strong method: purpose, prerequisites, steps, validation, troubleshooting."
version: "1.0.0"
category: "Ops"
---

# Authoring Methods from Scratch

A method is a how-to document capturing a repeated workflow. It is procedural and action-oriented — not narrative.

## What makes a strong method?

**Purpose** — What this method accomplishes and when to use it. Good: "Standardized workflow for delivering a brief from approval to shipped code." Bad: "Information about our delivery process."

**Prerequisites** — What must be in place before starting: connections, access, prior steps. Good: "GitHub App connected; team members have edit access to briefs." Bad: "Make sure everything is set up."

**Steps** — Sequential, numbered steps with the expected outcome after each. Good: "1. Approve the brief (status → 'approved'). 2. Generate a plan from the brief." Bad: "Step 1: Set up the environment. Step 2: Configure the system."

**Validation** — How to verify the method was executed correctly. Good: "Brief progresses from 'approved' → 'delivered'; GitHub PR exists and CI passes." Bad: "Check that it worked."

**Troubleshooting** — The 2–3 most common failure modes and their resolutions. Good: "If PR creation fails: check GitHub App permissions." Bad: Omitted entirely.

## How to write one

1. **Identify the workflow boundary:** What's the starting state and ending state? What triggers this workflow? Write it down in one sentence.
2. **Document prerequisites:** What connections, access, or prior steps must be in place? List them concretely — names of tools, permission levels, required statuses.
3. **Write sequential steps:** Number each step. After each step, state the expected outcome — what should be true when the step is complete. If you exceed ~15 steps, split into sub-methods.
4. **Add validation:** What does success look like? List the observable conditions that prove the method was executed correctly.
5. **Include troubleshooting:** What are the 2–3 most common failure modes? For each, write the resolution. If you can't name any, you haven't run the workflow enough times yet.

## Common mistakes

- Writing as narrative instead of steps. Methods are procedural and scannable, not storytelling. Save narrative for blueprints.
- Steps too abstract to follow without additional context. "Configure the system" is not a step; "Set the API key in Settings → Context" is.
- Missing validation. Without it, nobody knows whether the method was executed correctly.
- No troubleshooting section. The first person to hit a failure mode will have no guidance.
- One method covering multiple workflows. If you're documenting two distinct processes, split them.

## Prompts to get unstuck

- "What's the starting state and ending state?"
- "What must be true before I start?"
- "How do I know this step is done?"
- "What goes wrong most often?"
