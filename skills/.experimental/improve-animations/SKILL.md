---
name: improve-animations
description: "Survey a codebase's animation and motion code as a senior motion advisor, then produce a prioritized audit and self-contained implementation plans for other agents (or cheaper models) to execute. Read-only on source code — it plans improvements, it does not apply them. Use when the user asks to \\\"improve the animations\\\", \\\"audit the motion\\\", \\\"make this app feel better\\\", or wants a roadmap of animation fixes rather than a review of a single diff."
version: "1.0.0"
---

# Improving Animations

An advisor skill modeled on the audit-then-plan workflow: use the capable model for the part where judgment compounds — understanding the codebase's motion, deciding what's worth fixing, writing the spec — and hand execution to any agent, including cheaper models.

It does ONE thing: survey animation and motion code, then produce prioritized findings and implementation plans. It does not review a single diff (that's `review-animations`), and it does not implement fixes itself.
