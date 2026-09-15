# FAQ: Prioritizing Product Ideas Using ICE Confidence Scoring

## How do I handle ICE scoring when different team members have wildly different scores for the same idea?

High spread (a gap of 4+ between the highest and lowest score on any dimension) is a feature, not a bug. It means team members are operating on different assumptions or have access to different information. Pause and discuss the specific item for 2-3 minutes. Ask each outlier scorer to share the evidence or reasoning behind their number.

Often, one person has data the others lack, such as a support ticket pattern or a customer interview quote. Share that information, then let each person revise their score independently. If the spread remains after discussion, use the average but note the disagreement in your scoring log so you know this idea needs more evidence before committing resources.

## Should I use ICE scoring before or after generating step-projects for my ideas?

Score ideas with ICE first, then design step-projects only for the top-ranked ideas. The purpose of ICE scoring is to narrow a broad idea list down to the 2-4 ideas worth investing in. Designing step-projects for every idea in the bank wastes effort on ideas that will never be tested. After ICE scoring, use the [designing step-projects](https://tryhamster.com/skills/designing-step-projects-as-experiments) skill to create focused experiments for your top picks.

However, if scoring reveals that a top idea has very low Confidence, the appropriate step-project is a validation experiment, not a feature build.

## How long should an ICE scoring session take for a team of 5 people with 15 ideas?

Plan for 75-90 minutes. Allow 5 minutes for aligning on the Impact metric and scoring rubric. Budget 30-40 minutes for independent scoring across all three dimensions (participants score silently in a shared spreadsheet). Reserve 20-25 minutes for discussing high-spread items, which typically account for about a third of the ideas.

Use the final 10-15 minutes to review the ranked list, discuss the top 5, and assign next actions. If you go over 90 minutes, fatigue will compress scores toward the middle and reduce the ranking's usefulness.

## Why does my ICE ranking keep changing every quarter even though the ideas are the same?

This is expected and healthy. ICE scores reflect the team's current evidence and assumptions, both of which change as you run experiments, talk to customers, and observe the market. An idea that scored Confidence 3 last quarter might score 7 this quarter because a step-project validated a key assumption. Conversely, an idea that scored Impact 9 might drop after the team hits its target metric and shifts to a new goal.

Stable rankings would actually be a warning sign, because they would mean the team is not learning. If you want to track how scores evolve, keep a version history of your scoring sheet with dates so you can see the trajectory of each idea over time.

## How is ICE scoring different from RICE scoring, and when should I use each?

RICE adds a Reach dimension (how many users or accounts the idea affects) and divides by Effort instead of multiplying by Ease, producing a score with a different scale and interpretation. RICE works well when you have reliable quantitative data on reach, such as the number of users in a specific segment or the percentage of customers affected by a problem. ICE is faster and works better in high-uncertainty environments where reach estimates would be guesses anyway. For most teams using the GIST Planning Framework, ICE is the better default because the Ideas layer emphasizes speed and iteration over precision.

If you are a larger team with a mature analytics stack and well-defined user segments, consider switching to RICE for ideas past the initial validation stage.

## Can I use ICE scoring to prioritize tasks or bugs, or is it only for product ideas?

ICE scoring is designed for ideas, which are hypothetical solutions with uncertain outcomes. Tasks and bugs are typically not hypothetical. You know the bug exists and you know fixing it will improve the user experience. For tasks, a simple effort-versus-urgency matrix or a MoSCoW prioritization is usually more appropriate.

For bugs, severity and frequency are better dimensions than Impact, Confidence, and Ease. Where ICE could apply to bugs is when you are deciding between investing in a systemic fix (rebuild the error handling system) versus a tactical fix (patch this one bug). The systemic fix is an idea with uncertain impact, and ICE can help evaluate whether the larger investment is justified.

## How do I present ICE scoring results to stakeholders who were not in the session?

Lead with the ranked list and the goal it was scored against. Show the full breakdown (I, C, E, and composite) rather than just the final number, because stakeholders will want to understand why certain ideas ranked higher. " Call out any manual adjustments you made after the scoring discussion and explain the strategic reasoning. If a stakeholder's pet idea ranked low, point to the specific dimension that dragged it down and suggest what evidence would need to change for the score to improve.

For tips on presenting this in stakeholder reviews or interviews, see the [presenting GIST plans](https://tryhamster.com/skills/presenting-gist-plans-to-stakeholders) skill.
