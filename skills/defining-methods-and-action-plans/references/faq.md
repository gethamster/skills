# FAQ: Defining Methods and Actionable Steps in V2MOM

## How many methods should a V2MOM have?

Aim for 3-5 methods. Fewer than three suggests your vision is narrow enough that a single project plan would suffice, and you may not need a full V2MOM. More than five dilutes focus and makes it difficult for team members to hold the entire plan in their heads. If you are struggling to cut below six, check whether some candidates are actually action steps that belong underneath a broader method.

The constraint forces prioritization, which is the primary value of the methods step.

## How do I define methods when my vision is vague or still evolving?

If your vision is not stable enough to support method selection, you are not ready for this step. Return to the vision and values work first using the [Writing Compelling Vision and Values Statements](https://tryhamster.com/skills/writing-vision-and-values-statements) skill. A common workaround is to write "placeholder" methods and refine them later, but this backfires because teams begin executing against the placeholders and resist changing them. Spend the extra day getting the vision right.

Methods built on a shaky vision will need to be rewritten anyway.

## Should I define methods before or after identifying obstacles?

Define methods first, then identify obstacles. Methods describe what you plan to do. Obstacles describe what might prevent you from doing it. You cannot anticipate blockers for plans that do not exist yet.

However, the two steps inform each other iteratively. After completing your obstacle analysis with [Identifying Obstacles and Building Mitigation Strategies](https://tryhamster.com/skills/identifying-obstacles-and-mitigation-strategies), revisit your methods to confirm they are still viable given the obstacles you surfaced. Occasionally, a severe obstacle will force you to swap one method for an alternative.

## How detailed should action steps be compared to tasks in a project management tool?

Action steps in a V2MOM should be milestones, not tasks. A good action step represents 1-3 weeks of work and marks a meaningful checkpoint toward the method's completion. The individual tasks underneath (write the code, review the PR, deploy to staging) belong in your project management tool, not in the V2MOM. If your action steps feel like a sprint backlog, you have gone too granular.

If they feel like methods themselves, you have stayed too high. The test is whether a stakeholder who reads only the action steps can understand the execution plan without needing to open Jira.

## What do I do when action steps from different methods compete for the same person's time?

This is the most common planning failure, and it should be caught during Step 7 validation. When two action steps assigned to the same owner have overlapping deadlines, one of three adjustments is needed: shift a deadline so the steps are sequential, reassign one step to a different owner, or cut the lower-ranked method entirely. Do not leave the conflict unresolved with a vague plan to "figure it out later." Unresolved capacity conflicts become the primary source of missed deadlines in V2MOM execution.

## How do I handle methods that span multiple teams?

A method that requires work from another team is a coordination risk. The best approach is to split the method at the team boundary. Your V2MOM contains the portion you control, and you add the cross-team dependency as an explicit item in your dependencies field. Then coordinate with the other team to ensure their V2MOM includes a corresponding method or action step.

The [Cascading V2MOMs from Leadership to Individual Contributors](https://tryhamster.com/skills/cascading-v2moms-across-teams) skill covers this coordination pattern in detail. The worst approach is to list a method you cannot execute independently and then blame the other team when it stalls.

## Why does my methods list keep drifting from the original plan during execution?

Some drift is healthy and indicates the team is learning. Unhealthy drift has two common causes. First, the methods were not filtered rigorously against values, so they lacked strategic grounding and were easy to displace by whatever felt urgent that week. Revisit Step 3 and ensure your values filter is doing real work.

Second, the methods document is not visible or referenced in daily work. If it lives in a forgotten folder, it cannot anchor decisions. Pin it, reference it in standups, and review it formally every 4-6 weeks. Methods that survive regular review and still feel right are the ones worth keeping.
