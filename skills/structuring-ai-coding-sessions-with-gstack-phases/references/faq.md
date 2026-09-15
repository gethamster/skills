# FAQ: Structuring AI Coding Sessions from Decision-Making to Execution

## How long should the problem framing phase take for a typical coding session?

For a well-understood bug fix or small feature, 5-10 minutes is sufficient. Write three to five sentences covering the symptom, the suspected cause, and the testable success criteria. For novel work touching multiple systems or requiring architectural decisions, spend 15-30 minutes. The test is whether you could hand your problem statement to another developer and they would understand what needs to be true when the work is done.

If the answer is no, your framing is not complete yet. The framing phase should never exceed 20% of your total estimated session time.

## Should I structure AI coding sessions differently for bug fixes versus new features?

Yes, but the phases remain the same. For bug fixes, problem framing emphasizes diagnosis: what is the observable symptom, what is the expected behavior, and how can you reproduce it. Architecture review is usually short because the fix is constrained to the existing system. For new features, problem framing emphasizes scope: what is included, what is explicitly excluded, and what are the acceptance criteria.

Architecture review takes longer because you are making design choices that did not exist before. The phased structure adapts by changing the time allocation per phase, not by skipping phases.

## How do I apply gstack's phased workflow when I am using a different AI agent than Claude Code?

The phased workflow is agent-agnostic. The principles of problem framing before code generation, architecture review with multi-perspective evaluation, task decomposition with verifiable done criteria, and end-to-end verification work with any AI coding agent. What changes is the invocation mechanism. With Claude Code, you use gstack's slash commands to invoke specific skills.

With other agents (Cursor, GitHub Copilot, Aider), you implement the same phases by structuring your prompts to match each phase's purpose. The session log format and artifact chain are identical regardless of which agent you use.

## How do I handle a session where the AI agent's architecture suggestion contradicts my team's existing patterns?

This is exactly what the architecture review phase is designed to catch. When the agent proposes an approach that conflicts with your team's conventions, do not simply override it or accept it. Instead, ask the agent to explain the trade-offs of its approach versus your team's established pattern. Sometimes the agent identifies a genuine improvement that your team should consider adopting.

More often, the agent is optimizing for the isolated problem without awareness of your broader system context. In either case, document the conflict and the decision in your session log, because it becomes a useful reference for future architectural discussions.

## Why does my session keep producing code that needs significant rework despite following the phases?

The most common cause is insufficient specificity in the problem statement or architecture document. If your success criteria say "the feature should work well" instead of "the API returns a 200 response with a JSON body containing the user's subscription status within 500ms," the agent fills the ambiguity with its own assumptions, and those assumptions may not match your requirements. The second most common cause is skipping the context reset between tasks in a long session, which causes the agent to accumulate contradictory context. Review your problem statements for testable specificity and check whether you are providing fresh context boundaries for each task.

## Can I use gstack's phased workflow for non-coding work like infrastructure configuration or data pipeline design?

Yes. The phased workflow applies to any technical work where decisions have cascading consequences. For infrastructure work, problem framing defines the operational requirements (availability targets, cost constraints, compliance needs). Architecture review evaluates IaC approaches (Terraform modules, CloudFormation stacks, Pulumi programs).

Task decomposition breaks the work into independently deployable and verifiable changes. The only adaptation needed is in the verification phase, where you verify infrastructure state (resource exists, configuration matches, connectivity works) rather than running unit tests. Several gstack framework examples in the community involve Terraform and Kubernetes configurations using this exact approach.

## Should I complete the entire phased workflow in a single sitting or can I split it across multiple sessions?

You can and should split across sessions for complex work. The key requirement is that each phase produces a written artifact that can bootstrap the next session. Your problem statement is a markdown file. Your architecture decision is a markdown file.

Your task breakdown is a markdown file or a list of issues. As long as these artifacts exist outside the AI conversation, you can pick up at any phase in a new session by providing the relevant artifacts as context. This is one reason the documentation step matters so much: it is not just for your team, it is the handoff mechanism between your past self and your future self.
