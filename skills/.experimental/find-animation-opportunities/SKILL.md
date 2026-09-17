---
name: find-animation-opportunities
description: "Search a codebase or UI for places that don't animate but should, and reject everything that shouldn't. Read-only; it proposes motion with exact values, it does not implement it. Use when the user asks \\\"what could be animated here?\\\" or wants to \\\"make this feel more alive\\\". For fixing existing animations, use improve-animations or review-animations instead."
version: "1.0.0"
---

# Finding Animation Opportunities

A search skill. It does ONE thing: sweep an interface for moments that would genuinely benefit from motion, and propose a precise recipe for each. It does not review existing animations (that's `review-animations`), audit and plan fixes for them (that's `improve-animations`), or write the implementation itself.
