# FAQ: Structuring Shared Agent State

## Should state be text or JSON?

The creator's loop allows either, describing state as the text or JSON that captures the current situation. JSON or another typed structure is easier to validate, diff and feed into permission checks. Free text still works for evidence that varies in shape, such as a document excerpt. A common compromise is a typed envelope with a few text fields inside it.

## How is a state snapshot different from agent memory or chat history?

History is an append-only record of what was said. A snapshot is the current situation, rebuilt or updated by code, with named fields for goal, completed work, evidence and gaps. You can keep history for audit while decisions read only the snapshot. The snapshot should make sense on its own, without the transcript.

## Who is responsible for writing results back into state?

The harness code that executes tools. It knows what actually ran, what the tool returned and whether verification passed. A generating model can help summarise a long result into the evidence field, but code decides what gets written and when. That keeps the record tied to real outcomes rather than to what a model believes happened.

## How large should a snapshot be?

Large enough that a careful human could answer every decision that reads it, and no larger. Keep the canonical record complete and give each decision a scoped view with only the fields it needs. If a view keeps growing, check whether evidence can be summarised or referenced instead of copied in full.

## How do I know my state structure is the problem and not the model?

Replay the stored snapshot for a bad decision and read it as a human. If the right answer is not supported by what the snapshot contains, the state is at fault. If the snapshot clearly supports a different answer, look at the question wording, the threshold or the model instead.
