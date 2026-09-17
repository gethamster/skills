---
name: authoring-blueprints-from-scratch
description: "1. Establish narrative intent:"
metadata:
  category: "Ops"
---

**Starting point:** You have a feature brief or decision artifact, and you need to write the current-state blueprint for the system or feature it describes.

**Extraction process:**

1. **Establish narrative intent:**

- Why does this feature/system exist? What problem does it solve?
- What constraints or decisions shaped its current design?
- What trade-offs did the decision encode? (What alternatives were rejected and why?)

2. **Build the "why" section first:**

- Open with the decision context: "We decided to build X because of Y constraint."
- Link to the decision artifact (brief, initiative, goal).
- Name the trade-offs: "This eliminated alternative Z because of constraint A."

3. **Describe current state:**

- "Here's what actually shipped and how it works."
- Focus on user-facing behavior and internal architecture as it relates to the decision.
- Call out conventions or patterns specific to this feature.

4. **Capture consequences:**

- How does this decision affect adjacent systems?
- What constraints does it create for future choices?
- What becomes possible now that this feature exists?

**Concrete example: Blueprint for "User Onboarding"**

```
## User Onboarding

We built a guided onboarding flow to reduce time-to-first-value 
for new users. Prior to this ([goal: Improve Activation Rate](#ref:...)), 
users hit a blank slate and had no guidance on core features, 
resulting in a 40% drop-off in week one.

The onboarding flow walks users through three core actions: 
(1) creating a brief, (2) writing a goal, (3) creating an initiative. 
This sequence matches our core mental model and lets users experience 
leverage quickly.

We opted for in-app guided tours over email drip campaigns because 
we needed real-time feedback to optimize the sequence; email would 
hide drop-off points. This trade-off means we can't reach users 
between sessions, but gives us 24-hour iteration cycles instead of 
weekly email windows.

Onboarding is gated: it only appears for users created in the last 
7 days. We chose 7 days (not 1 day) to catch returning users who 
signed up but didn't complete day-one onboarding.
```

**Narrative hooks to include:**

- **Causality:** "We did X because Y constraint meant Z was impossible."
- **Constraints:** "We chose this design to optimize for A while accepting limitation B."
- **Alternatives considered:** "We considered X but rejected it because Y."
- **Consequences:** "This decision means that systems depending on us need to handle Z."

**Anti-pattern:** Writing the blueprint as a todo list. "Build onboarding. Add tour. Track events." That would be a spec, not a narrative of why onboarding exists and how it works.
