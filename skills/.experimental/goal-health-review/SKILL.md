---
name: goal-health-review
description: "Guides the weekly goal review meeting: compare goals vs initiatives, prioritize newly unblocked work, assign owners. Enforces the 'one weekly meeting' principle — 30 minutes of decisions, not 45 minutes of status. Use when running a weekly goal review, planning meeting, or direction review."
metadata:
  category: "Ops"
---

# Goal Health Review

A skill for the weekly goal review meeting — the one meeting where the team compares goals vs initiatives, prioritizes newly unblocked work, and assigns owners. This is 30 minutes of decisions, not 45 minutes of status updates.

## When to use this skill

- When running a weekly goal review or planning meeting
- When a user asks to review goal health or initiative status
- When preparing for or conducting the weekly direction review
- When the team needs to compare goals against initiative roll-ups and decide what to focus on next

## Core guidance

### 1. Start with goals filtered to At Risk and Off Track

Always open the meeting with the Goals list filtered to At Risk and Off Track. These goals need attention first — they are the ones where delivery is slipping or the target is in jeopardy. On Track goals get a quick scan, not a deep dive. The meeting exists to make decisions about what's broken, not to admire what's working.

### 2. Never spend meeting time on status updates

Status is already visible in the tool — initiative roll-ups, task completion, and progress are all there. The meeting is for decisions, not narration. If someone starts reporting what's done, cut it off: "We can see that in the tool. What decision do we need to make?"

### 3. Always assign owners during the meeting, not after

"We'll assign an owner later" means it won't happen. Every decision that requires action gets an owner before the meeting ends. If no owner can be assigned, the decision is deferred explicitly with a named person responsible for resolving the blocker.

### 4. Always check focus alignment

After reviewing at-risk goals, check the Now / Next / Later focus board. If Now has more than 5–7 initiatives, something needs to move to Next or Later. A bloated Now means the team is pretending to focus on everything, which means focusing on nothing. Force the cut.

### 5. Always end with a written decisions list

The last 3 minutes of the meeting produce a written list of decisions made. Each decision has: what was decided, who owns it, and when it's due. If no decisions were made, the meeting was wasted — say so and fix the format next week.

### 6. Limit the meeting to 30 minutes

If the meeting is taking longer, you are doing status instead of decisions. Time-box each section: 5 min goals at risk, 10 min initiative check, 5 min focus alignment, 5 min owner assignment, 5 min decisions list. If a topic needs more time, schedule a follow-up — don't let it consume the review.

## Concrete examples

### Example 1: A focused week with one at-risk goal

```
Meeting: Weekly Goal Review
Time: 30 min

1. Goals at Risk (5 min)
   - Goal: "Reduce activation friction" — status: At Risk
     - Initiative roll-up: 2 of 4 initiatives complete, 1 blocked on design review
     - Decision: Unblock the design review by assigning Sarah to run it tomorrow
     - Owner: Sarah

2. Initiative Check (10 min)
   - Onboarding flow: 80% complete, on track — no discussion needed
   - Activation email: blocked on copy approval → decision: Eyal approves copy by EOD
     - Owner: Eyal
   - Analytics dashboard: not started, was deprioritized last week — confirm still Later
     - Decision: stays in Later, no owner needed

3. Focus Alignment (5 min)
   - Now: 5 initiatives — within range, no changes needed

4. Owner Assignment (5 min)
   - Sarah: run design review for onboarding
   - Eyal: approve activation email copy by EOD

5. Decisions List (5 min)
   - [DECIDED] Unblock onboarding design review → Sarah, by tomorrow
   - [DECIDED] Approve activation email copy → Eyal, by EOD today
   - [CONFIRMED] Analytics dashboard stays in Later
```

### Example 2: A week where focus needs rebalancing

```
Meeting: Weekly Goal Review
Time: 30 min

1. Goals at Risk (5 min)
   - Goal: "Ship v2 API" — status: Off Track
     - Initiative roll-up: 0 of 3 initiatives started, all blocked on auth refactor
     - Decision: Move auth refactor to Now, pull it from Next
     - Owner: Marcus (leads auth refactor)
   - Goal: "Improve retention" — status: At Risk
     - Initiative roll-up: 1 of 2 complete, retention experiment inconclusive
     - Decision: Extend experiment by one week, no new initiatives this week
     - Owner: Priya

2. Initiative Check (10 min)
   - Auth refactor: ready to start, was in Next → move to Now
   - Retention experiment: needs one more week of data
   - Docs site: complete, no action

3. Focus Alignment (5 min)
   - Now: 9 initiatives — TOO MANY
   - Decision: Move "docs site polish" and "internal tooling" to Next
   - Now is now 7 initiatives — still at the edge, acceptable this week

4. Owner Assignment (5 min)
   - Marcus: lead auth refactor (Now)
   - Priya: extend retention experiment, report back next week

5. Decisions List (5 min)
   - [DECIDED] Auth refactor moved to Now → Marcus leads
   - [DECIDED] Retention experiment extended one week → Priya owns
   - [DECIDED] Docs site polish and internal tooling moved to Next
   - [FLAGGED] Now still at 7 — review again next week, target 5
```

### Example 3: A quiet week — no goals at risk

```
Meeting: Weekly Goal Review
Time: 15 min (finished early — good)

1. Goals at Risk (3 min)
   - No goals At Risk or Off Track. Quick scan confirms all On Track.
   - No decisions needed here.

2. Initiative Check (5 min)
   - All initiatives on track, no blockers reported.
   - One newly unblocked initiative: "search relevance tuning" — ready to start.
   - Decision: Move search relevance to Now, assign owner.
   - Owner: Lena

3. Focus Alignment (3 min)
   - Now: 4 initiatives — room for one more. Search relevance added.
   - Now: 5 initiatives — within range.

4. Decisions List (4 min)
   - [DECIDED] Search relevance tuning moved to Now → Lena owns
   - [NOTE] No at-risk goals this week — keep an eye on retention metric next week
```

## Anti-patterns

### Anti-pattern 1: Status round-robin

**What:** Each person reports what they did last week, one by one.

**Why it fails:** This is the single biggest meeting killer. Status is visible in the tool — initiative roll-ups, task completion, and progress are all there. Spending 20 minutes narrating what the tool already shows leaves no time for decisions. The meeting ends with everyone informed but nothing decided.

**Fix:** Open with goals at risk. If someone starts narrating status, redirect: "We can see that — what decision do we need to make?"

### Anti-pattern 2: Leaving owner assignment for after the meeting

**What:** "We'll figure out who owns this after the meeting."

**Why it fails:** Post-meeting owner assignment has a ~50% follow-through rate. The person who was supposed to assign it gets distracted, the decision sits in a doc, and next week the team discovers nobody picked it up. An unassigned decision is a non-decision.

**Fix:** No decision leaves the meeting without a name attached. If the right person isn't in the room, defer the decision to a named person who will resolve it within 24 hours.

### Anti-pattern 3: Bloated Now, no cuts made

**What:** Now has 15 initiatives. The team reviews them all, agrees it's too many, and moves nothing to Next or Later.

**Why it fails:** A Now with 15 items is a Now with no focus. The team will spread thin, everything will move slowly, and next week the same 15 items will still be there with minimal progress. The meeting failed its core purpose: forcing prioritization.

**Fix:** If Now has more than 7 initiatives, the meeting must move at least 2 to Next or Later before it ends. This is a hard rule, not a suggestion.

### Anti-pattern 4: Ending without a written decisions list

**What:** The meeting ends, everyone leaves, and there's no written record of what was decided.

**Why it fails:** Without a written decisions list, decisions evaporate within hours. People remember different things, actions get dropped, and next week nobody can recall what was agreed. The meeting becomes a recurring conversation that never produces durable outcomes.

**Fix:** The last 3 minutes produce a written list. Each item: what was decided, who owns it, when it's due. Post it in the team channel before the meeting ends.

### Anti-pattern 5: Letting the meeting run long

**What:** The meeting was scheduled for 30 minutes but ran 60. The team "needed the time."

**Why it fails:** A 60-minute review means the team spent 30 minutes on status and 30 minutes on decisions. The status portion was wasted — it's all in the tool. The habit of running long normalizes the idea that the meeting is for information sharing, not decision-making.

**Fix:** Hard stop at 30 minutes. If decisions are unfinished, they become the first agenda item next week. The time pressure forces the team to prioritize decisions over narration.

## Validation criteria

- The meeting starts with goals filtered to At Risk / Off Track — not a status round-robin
- No time is spent narrating status that's visible in the tool
- Every decision has a named owner before the meeting ends
- Now has no more than 7 initiatives after focus alignment; if it started higher, at least 2 were moved
- The meeting ends with a written decisions list posted to the team channel
- The meeting finishes in 30 minutes or less
- If no decisions were made, the meeting is flagged as wasted and the format is adjusted for next week
