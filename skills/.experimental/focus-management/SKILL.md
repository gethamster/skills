---
name: focus-management
description: "Guides the now/next/later focus system for initiatives. Focus is a third dimension independent of state and health. Now must stay small (5-7 max). The routine suggests, the team decides. Use when setting or changing an initiative's focus, when the focus routine detects overcrowding or misplacement, or when reviewing focus alignment in the weekly meeting."
metadata:
  category: "Workflows"
---

# Focus Management

Focus (now/next/later) is a third dimension — independent of state (draft/refining/shipping/done/blocked/archived) and health (not started/on track/at risk/off track). An initiative can be in Shipping state and Now focus, or Shipping state and Later focus. Focus is a commitment mechanism: the group commits to work at the initiative level by setting focus to now/next/later.

The focus routine monitors initiative placement and emits suggestions. The routine never auto-moves. The team decides in the weekly review.

## Trigger conditions

- When setting or changing an initiative's focus (now/next/later)
- When the focus routine detects overcrowding in Now (more than 5-7 initiatives)
- When the focus routine detects a blocked initiative sitting in Now
- When the focus routine detects an off-track initiative sitting in Now
- When the focus routine detects an initiative in Later that is actively being worked on
- When reviewing focus alignment in the weekly meeting
- When a user asks to prioritize or deprioritize work
- When creating a new initiative (focus must be set at creation)

## Core guidance

1. **Always set focus at initiative creation.** Never leave focus unset. An initiative without a focus column is invisible to the focus system and will not be monitored.

2. **Never have more than 5-7 initiatives in Now.** If you do, something must move to Next or Later. Now means: this is the work the team is actively committed to right now. If everything is Now, nothing is Now.

3. **Always move blocked initiatives out of Now.** A blocked initiative in Now is wasting focus capacity. Move it to Next or Later until it is unblocked. When the blocker resolves, bring it back to Now if it is still the highest-priority work.

4. **Always move off-track initiatives out of Now.** Off-track work in Now crowds out work that can actually progress. Move it to Next or Later until it is back on track. When health returns to on-track, bring it back to Now if it is still the highest-priority work.

5. **Always document the reason for every focus change.** Record why the move happened: "Moved to Next because blocked on API design review," "Moved to Later because priority shifted to launch readiness," "Moved to Now because blocker resolved and this is the highest-leverage work." Without a documented reason, the team cannot audit focus decisions or learn from patterns.

6. **Never auto-move initiatives between focus columns.** Routines suggest, the team decides in the weekly review. The focus routine emits suggestions (e.g., "Now has 9 initiatives — consider moving 2 to Next"). The team reviews, discusses, and applies the changes together. This preserves collective ownership of priorities.

7. **When an initiative in Later is actively being worked on, move it to Now or Next.** Later means: not currently committed to. If someone is working on it, the focus column is lying. Move it to Now (if it is active priority) or Next (if it is queued for imminent work).

8. **Treat focus as a commitment, not a prediction.** Now is what the team is committed to shipping. Next is what is queued to enter Now when capacity frees. Later is everything else — still important, but not now. Do not put something in Now just because you hope to start it soon.

## Concrete examples

### Example 1: Now overcrowding

**Before:** Now has 9 initiatives: Onboarding Redesign, Billing v2, Search Relevance, Mobile Nav, API Rate Limiting, Notifications, Docs Migration, Analytics Audit, and SSO Integration.

**Routine suggestion:** "Now has 9 initiatives (limit is 5-7). Consider moving at least 2 to Next. Candidates: Docs Migration (state: draft, health: not started), Analytics Audit (state: refining, health: not started)."

**Team decision (weekly review):** Moved Docs Migration to Later (not started, no urgency this quarter). Moved Analytics Audit to Next (planned for next sprint). Now has 7.

**Reason documented:** "Docs Migration moved to Later — not started and not urgent this quarter. Analytics Audit moved to Next — planned for next sprint. Now reduced from 9 to 7."

### Example 2: Blocked initiative in Now

**Before:** Billing v2 is in Now, state: shipping, health: at risk. It has been blocked for 6 days on a third-party payment provider API issue. The team cannot make progress.

**Routine suggestion:** "Billing v2 is in Now but has been blocked for 6 days (blocked on payment provider API). Consider moving to Next until unblocked."

**Team decision (weekly review):** Moved Billing v2 to Next. Promoted Search Relevance from Next to Now (it was next in priority and unblocked).

**Reason documented:** "Billing v2 moved to Next — blocked on payment provider API for 6 days, cannot progress. Search Relevance moved to Now — next priority, unblocked, ready to ship."

### Example 3: Initiative in Later being actively worked on

**Before:** Mobile Nav is in Later, but the routine detects commits, task updates, and status changes on it for 2 consecutive weeks. State: shipping, health: on track.

**Routine suggestion:** "Mobile Nav is in Later but shows active work (commits, task updates, status changes for 2 weeks). Consider moving to Now or Next."

**Team decision (weekly review):** Moved Mobile Nav to Now. It is actively being worked on and is a current priority. Demoted API Rate Limiting from Now to Next to maintain the 5-7 limit.

**Reason documented:** "Mobile Nav moved to Now — actively worked on despite Later status, was misclassified. API Rate Limiting moved to Next — lower priority than Mobile Nav, freed Now capacity."

## Anti-patterns

### 1. Having 15 initiatives in Now and calling it focused

**Failure mode:** When everything is Now, the team has no shared understanding of what actually matters this week. Attention fragments, context-switching costs compound, and nothing ships faster. Now becomes a backlog, not a commitment.

### 2. Leaving a blocked initiative in Now for 3 weeks because "it'll be unblocked soon"

**Failure mode:** A blocked initiative in Now occupies a focus slot that could be used by work that can actually progress. The team loses capacity without realizing it — Now looks full but nothing is moving. The slot is wasted for the entire duration of the block.

### 3. Auto-moving initiatives without team review

**Failure mode:** When the routine auto-moves initiatives, the team loses ownership of priority decisions. People stop trusting the focus system because it changes without their input. The weekly review becomes meaningless — the system already decided. Focus becomes a machine output, not a team commitment.

### 4. Changing focus without documenting why

**Failure mode:** Without a documented reason, the team cannot reconstruct why a priority shift happened. When someone asks "why is this in Later?" three weeks later, nobody remembers. The team loses the ability to audit decisions, learn from patterns (e.g., "we keep over-committing to Now"), and onboard new members to the priority logic.

### 5. Leaving focus unset at initiative creation

**Failure mode:** An initiative without a focus column is invisible to the focus routine. It will not be monitored for overcrowding, blocking, or misplacement. It exists in the system but is not part of the focus commitment. New initiatives silently accumulate outside the system.

### 6. Treating Now as a wishlist instead of a commitment

**Failure mode:** Now becomes a list of things the team hopes to do rather than what it is committed to shipping. The 5-7 limit becomes meaningless because the team does not enforce the commitment discipline. Focus loses its power as a forcing function for prioritization.

## Validation criteria

- Every initiative has a focus value set (now, next, or later) — none are unset
- Now never exceeds 7 initiatives; if it does, the routine flags it and the team moves items in the next weekly review
- No blocked initiative remains in Now for more than one weekly review cycle without a team decision to keep it there
- No off-track initiative remains in Now for more than one weekly review cycle without a team decision to keep it there
- No initiative in Later shows active work signals (commits, task updates, status changes) without being moved to Now or Next within one weekly review cycle
- Every focus change has a documented reason (who decided, what moved, from what column to what column, why)
- The focus routine never auto-moves initiatives — it only emits suggestions that the team reviews and applies
- The weekly review includes a focus alignment pass: review Now count, check for blocked/off-track items in Now, check for active items in Later
