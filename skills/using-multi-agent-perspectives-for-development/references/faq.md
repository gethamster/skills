# FAQ: Using Multi-Agent Perspectives (CEO, Engineer, QA) in Development

## How do I use multi-agent perspectives for a quick bug fix that will only take 10 minutes?

You probably should not use the full three-perspective cycle. The overhead of formal CEO scoping, engineer implementation, and QA verification exceeds the value for trivial changes. Use a heuristic: if the fix touches logic, state management, or security-sensitive code, run at least a lightweight QA pass after the fix. If it is purely cosmetic or mechanical (typo, formatting, dependency bump), just fix it directly.

Reserve the full cycle for changes where a mistake would cost you more than the 15-20 minutes the process adds.

## Should I use multi-agent perspectives before or after I've written any code?

Always start with the CEO perspective before writing code. The entire point of the CEO phase is to scope the work and make deliberate trade-off decisions before implementation effort is invested. If you write code first, you become anchored to your implementation and the CEO perspective becomes a rationalization exercise rather than a genuine scoping exercise. The one exception is exploratory prototyping: if you genuinely do not know whether something is technically feasible, a quick spike in the engineer perspective can inform the CEO's scoping decisions.

But label it as a spike, not as the implementation.

## Can I use the same AI conversation for all three perspectives, or do I need separate sessions?

You can use the same conversation, but you must explicitly mark transitions and reset context at each switch. The risk of a single conversation is context drift: by message 40, the agent has partially forgotten the CEO specification and the QA phase becomes shallow. For tasks that fit in under 20 messages total, a single conversation works fine. For larger tasks, consider starting a fresh conversation for the QA phase and providing it with the specification file and the code diff as explicit inputs rather than relying on conversation history.

## How do I handle disagreements between the CEO and engineer perspectives?

Disagreements are expected and healthy. The CEO perspective optimizes for business value per unit of effort, while the engineer perspective optimizes for technical correctness and maintainability. When the engineer discovers that the CEO's specification is technically naive or that a much better approach requires modest scope expansion, document the specific disagreement. " Let the CEO perspective make the trade-off explicitly.

Do not let the engineer make business trade-offs silently.

## Why does my QA perspective keep finding only superficial issues instead of real bugs?

This usually happens because the QA perspective is not given enough context to do deep verification. If you just say "review this code," the agent will produce generic observations about naming conventions and comment quality. Instead, give QA three explicit inputs: the CEO specification (so it can verify the right thing was built), the engineer's implementation notes (so it knows where the risky decisions were), and specific instructions to check edge cases, error handling, and security. Also, ask QA to generate concrete test cases with specific inputs and expected outputs rather than just listing concerns.

The quality of QA output is directly proportional to the specificity of the QA prompt.

## How long should a complete CEO-engineer-QA cycle take for a medium-sized feature?

For a feature that would normally take one developer 4-8 hours of heads-down coding, expect the full three-perspective cycle to take 5-10 hours total. The CEO phase adds 30-60 minutes upfront but typically saves 1-2 hours of rework by preventing scope drift. The QA phase adds 30-90 minutes but catches issues that would otherwise surface as post-merge bugs (which cost 3-5x more to fix). Net, you spend roughly the same total time but shift effort from reactive bug-fixing to proactive quality assurance.

Over multiple sessions, the process gets faster as you develop muscle memory for the transitions.

## Can multiple team members each take a different perspective simultaneously?

Yes, and this is one of the most effective configurations for teams. Assign the CEO perspective to the product owner or tech lead, the engineer perspective to the implementing developer, and the QA perspective to a different developer who did not write the code. This natural separation of concerns maps well to existing team roles and prevents the cognitive blending that happens when one person tries to hold all three perspectives. The key coordination mechanism is the shared task brief and specification document, which ensures all three perspectives are working from the same understanding of the problem.
