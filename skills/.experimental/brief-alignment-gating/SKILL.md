---
name: brief-alignment-gating
description: "Governs the alignment voting gate between direction and delivery. Enforces that no brief enters delivery without explicit team alignment. Use when calling for alignment, interpreting vote results, or deciding if a brief is ready for delivery."
version: "1.0.0"
metadata:
  category: "Workflows"
---

# Brief Alignment Gating

This skill governs the gate between direction and delivery. No brief enters delivery without explicit team alignment — no exceptions. Alignment is not a courtesy; it is the checkpoint that prevents rework, scope drift, and wasted delivery cycles.

## Trigger conditions

- When a brief is ready for alignment review
- When a user asks to call for alignment or request review on a brief
- When interpreting alignment vote results (thumbs up, thumbs sideways, thumbs down)
- When deciding if a brief is ready to enter delivery
- When a brief owner asks whether they can proceed to delivery

## Core guidance

**Always require alignment votes before a brief enters delivery — no exceptions.** A brief without a completed alignment vote round is not ready for delivery. This is a hard gate, not a suggestion.

**Always require at least 50% participation from relevant team members before declaring alignment.** If 8 people are relevant and only 2 vote, you do not have alignment — you have a sample. State the participation threshold explicitly when calling for alignment.

**Never proceed to delivery with unresolved thumbs-down votes.** A thumbs-down is a hard block. The brief owner must address the concern, update the brief, and re-call for alignment. "We'll figure it out during implementation" is not a resolution.

**Always include specific non-goals in the brief before calling for alignment.** Non-goals are part of alignment. What you are NOT doing is as important as what you are doing. A brief without non-goals is not ready for alignment voting.

**Always have the brief owner respond to every dissenting vote.** Silence is not a response. The owner must acknowledge each thumbs-down and thumbs-sideways with a written reply — either addressing the concern, updating the brief, or explaining why the concern is out of scope.

**Call for alignment only when the brief has a clear purpose, success criteria, and non-goals.** Do not call for alignment on a brief that is still being drafted. The brief must be complete enough that a voter can assess whether the direction is sound.

**Treat thumbs-sideways as a signal to iterate, not a soft approval.** A thumbs-sideways means the voter has reservations but is not blocking. The owner should address the concern if feasible, but the brief can proceed if all other votes are thumbs-up and no thumbs-down remain.

**Re-call for alignment after any material brief change.** If the owner updates the purpose, success criteria, non-goals, or constraints based on feedback, the previous alignment is void. Re-call for a new vote round.

**Record the alignment outcome.** State the result: how many voted, how many thumbs-up, how many sideways, how many down, and the decision to proceed or iterate. This record is the audit trail for why delivery was authorized.

## Concrete examples

### Example 1: Clean alignment, proceed to delivery

**Brief:** "Add CSV export to the analytics dashboard so users can download their event data for offline analysis."

**State before alignment:** Purpose, success criteria, non-goals, and constraints are all written. Non-goals include: "No PDF export. No scheduled exports. No custom column selection in v1."

**Votes cast (6 relevant team members, 5 voted):**

- 4 thumbs-up
- 1 thumbs-sideways ("Would like custom columns eventually, but fine for v1")
- 0 thumbs-down

**Owner response to sideways:** Acknowledged. Noted that custom columns are tracked as a follow-up brief.

**Decision:** Participation is 5/6 (83%) — above the 50% threshold. No thumbs-down. Proceed to delivery.

### Example 2: Blocked by thumbs-down, iterate

**Brief:** "Replace the current search backend with a vector database to improve semantic search quality."

**Votes cast (7 relevant team members, 5 voted):**

- 2 thumbs-up
- 1 thumbs-sideways ("Concerned about migration risk for existing users")
- 2 thumbs-down ("No non-goals — what about reindexing cost? What about the current keyword search? Are we dropping it?" / "Success criteria say 'better search results' — that's not measurable")

**Owner response:** The two thumbs-down votes identify real gaps: missing non-goals and vague success criteria. The owner adds non-goals ("Not replacing keyword search — adding semantic search alongside it. Not migrating existing indices in this brief.") and rewrites success criteria ("Search relevance score improves by 20% on the test query set. Existing keyword search results remain unchanged.").

**Decision:** Do not proceed. Owner updates the brief and re-calls for alignment.

### Example 3: Insufficient participation, do not declare alignment

**Brief:** "Add a team activity feed to the dashboard showing recent brief, task, and delivery updates."

**Votes cast (10 relevant team members, 3 voted):**

- 3 thumbs-up
- 0 thumbs-sideways
- 0 thumbs-down

**Decision:** Participation is 3/10 (30%) — below the 50% threshold. Do not declare alignment. The owner must follow up with non-responders and re-call for alignment. Three thumbs-up is not consensus; it is a sample.

## Anti-patterns

**Proceeding to delivery with a thumbs-down unresolved because "we'll figure it out during implementation."**
Failure mode: The unresolved concern becomes a real problem mid-delivery. The team builds the wrong thing or discovers the concern was valid after spending delivery cycles. The thumbs-down voter was right, but nobody listened. Rework cost: the entire delivery cycle plus the alignment cycle they skipped.

**Calling for alignment on a brief with no non-goals.**
Failure mode: Without non-goals, voters cannot assess scope boundaries. They approve a brief that implicitly includes everything, then discover during delivery that the owner assumed things were out of scope that the team assumed were in scope. Non-goals are not optional — they are part of the alignment contract.

**Ignoring a thumbs-sideways because "it's not a blocker."**
Failure mode: A thumbs-sideways is a signal that someone sees a risk. Ignoring it does not eliminate the risk — it just removes the early warning. The owner should at minimum acknowledge the concern and explain why it is acceptable to proceed. If the concern is valid and addressable, address it before proceeding.

**Having 2 of 8 team members vote and calling it aligned.**
Failure mode: Low participation means the silent majority has not consented. The brief proceeds with the approval of the two people who happened to respond, then hits resistance during delivery from people who were never asked. Alignment requires participation, not just the absence of objections.

**Declaring alignment without recording the outcome.**
Failure mode: Without a recorded result, there is no audit trail. When delivery hits friction and someone asks "did we agree on this?", there is no evidence of what was agreed. The alignment record is the contract between direction and delivery.

## Validation criteria

- The brief has a written purpose, success criteria, and non-goals before alignment is called
- At least 50% of relevant team members cast a vote
- Every thumbs-down vote has a written response from the brief owner
- Every thumbs-sideways vote has at least an acknowledgment from the brief owner
- No unresolved thumbs-down votes remain before proceeding to delivery
- The alignment outcome is recorded: participation count, vote breakdown, and the proceed/iterate decision
- If the brief was materially changed after a vote round, a new alignment round was called before delivery
