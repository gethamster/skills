---
name: detecting-and-flagging-blueprints-for-refresh
description: "On brief.status = \"approved\":"
metadata:
  category: "Ops"
---

**Recognize signals that a blueprint may be out of sync:**

**Signal 1: Brief status changes to "approved"**

- If the brief references a feature or system documented in a blueprint, that blueprint likely needs refresh.
- Action: Pull the brief details and review the affected blueprint section. Does the current-state narrative match what was decided? Add a note linking the new decision.

**Signal 2: Initiative status changes to "shipped"**

- If the initiative ships a feature or architecture change, the related blueprints need update.
- Action: Identify which blueprint(s) cover the shipped feature. Review the "current state" section and update to reflect what shipped.

**Signal 3: Quarterly decision-lineage audit**

- Every quarter, scan blueprints for outdated references or decisions that should have been reflected but weren't.
- Action: Spot-check 3-5 key blueprints. Check: Does the current-state narrative match today's product? Are recent approved briefs or shipped initiatives reflected?

**Example trigger rule:**

```
On brief.status = "approved":
  If brief.tags include ["feature-flag", "authentication", "data-model"]:
    Flag the matching blueprint(s) for review
    Notify owner: "A decision in [brief title] may affect [blueprint title]. Review within 2 weeks."
```

**Anti-pattern:** Blueprints with stale decision references. If a blueprint links to a decision but the described state doesn't match, this suggests the blueprint wasn't refreshed when the decision shipped or was later superseded.
