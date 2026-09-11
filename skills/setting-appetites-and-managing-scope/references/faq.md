# FAQ: Setting Appetites and Cutting Scope

## How do I set an appetite when I have no historical data on my team's velocity?

Start with small batch projects (one to two weeks) for the first two or three cycles. The cost of miscalibration is low because the worst case is a two-week project that does not ship, which you can re-pitch. After delivering three or four small batch projects, you will have an intuitive feel for how much scope fits in a given time. Then graduate to six-week appetites.

Avoid trying to calculate velocity from story points or hours. The appetite is a value judgment, not a capacity calculation.

## Should I set the appetite before or after shaping the solution?

Set a preliminary appetite before shaping, then confirm it after. You need a rough appetite before shaping because the appetite constrains how ambitious the solution should be. If the problem is worth two weeks, the shaper should not design a six-week solution. After shaping, revisit the appetite: does the shaped solution feel feasible within the appetite?

If not, either cut scope or consider whether the problem warrants a larger appetite. The appetite should never be derived from the solution. It flows from the problem's value.

## How do I handle stakeholders who insist everything is a must-have?

Reframe the conversation around the problem statement, not the feature list. Instead of asking "is this feature important?" ask "if we shipped without this, would the user's core problem still be solved?" Most stakeholders will agree that a problem can be solved without every bell and whistle once the question is posed this way. If they still insist, ask them to rank all must-haves in order of importance. The act of ranking forces them to acknowledge relative priority, and the bottom third of the ranked list almost always turns out to be nice-to-haves.

## What happens if the team finishes all must-haves early but does not want to add nice-to-haves?

That is perfectly fine. The extra time can go to polish, bug fixing, writing tests, improving performance, or exploring a technical risk for the next cycle. The nice-to-have list is a menu of options, not a second backlog. Forcing the team to pull in nice-to-haves defeats the purpose of having scope flexibility.

Some of the best product quality comes from teams who finish early and use the remaining time to refine what they already built.

## How is fixed time variable scope different from cutting features from a sprint backlog?

In sprint-based workflows, scope cutting usually happens reactively. The team commits to a set of stories, falls behind, and negotiates which stories to drop at the end. The scope cut feels like a failure. In appetite-setting, scope cutting happens proactively, before work begins.

The team starts the cycle knowing exactly what is and is not included, and they have pre-approval to drop nice-to-haves. The psychological difference is significant: reactive cutting feels like broken promises, while proactive cutting feels like smart planning.

## Can I use appetite-setting outside of the Shape Up framework?

Yes, and many teams do. The principle of declaring a time budget based on strategic value and then designing the scope to fit is useful in any context. You can apply it to Kanban teams, Scrum teams, or even non-software projects like marketing campaigns or content production. The key elements to preserve are: appetite comes from problem value (not estimation), scope is explicitly split into must-have and nice-to-have, and the time boundary is non-negotiable.

Without those three elements, you are just doing deadline-driven work.

## Why does my must-have list keep growing during the build cycle?

This usually happens because the problem statement was too vague, leaving room for the building team to discover new aspects of the problem that feel essential. It can also happen when the team mistakes user expectations for must-haves. A user might expect a feature, but that does not make it a must-have for solving the declared problem. To prevent list growth, review the problem statement with the team at kickoff and at the midpoint.

If genuinely new must-haves emerge (because the build reveals something the shaper missed), add them but move a current must-have to nice-to-have to keep the total scope constant.
