# FAQ: Structuring AI Coding Sessions with gstack Phases

## Do I need to run every phase for every change?

No. The README's own example says a typo fix needs no gstack at all. Size each change first: small, contained changes need only a few phases, while new features and user-facing changes benefit from the full sequence. Write down the phases you chose so the decision is visible.

## How do I know when a phase is finished?

A phase is finished when its artifact exists and you have read and accepted it. For Think that is the design doc, for Plan the approved plan and test plan, for Review a clean engineering review on the dashboard, for Test the QA results, and for Ship a verified deploy. If you cannot point to the artifact, the phase is not done.

## What should I do when the plan turns out to be wrong during the build?

Stop building and go back to the plan. Amend it in plan mode and rerun the engineering review on the change, so the test plan and review stay aligned with the code. Continuing without updating the plan leaves later phases checking against an outdated target.

## How do I keep a multi-day feature coherent across sessions?

Run `/context-save` before you stop and `/context-restore` when you return. The saved context records git state, decisions and remaining work, so the new session does not have to reconstruct them. Save at phase boundaries, since those are natural resume points.

## Can I run several features in parallel with this structure?

Yes. The README describes running many Claude Code sessions in parallel with Conductor, each in its own workspace. Keep each session in a named phase so you can see which ones need a decision from you and which can keep running.
