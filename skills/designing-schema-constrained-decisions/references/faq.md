# FAQ: Designing Schema-Constrained Decisions

## Why not just ask a general model to reply in JSON?

Asking for JSON constrains format, but it does not define the answer space or give you a probability trained against outcomes. Without an enumerated set of legal values, the model can still return a label your code has no path for. The design work on this page is about deciding which values exist and what they mean, which is needed regardless of the model you call.

## How many values should a choice field have?

The dossier does not give a universal number, so size it to your actions. A useful rule is one value per distinct code path plus a fallback. If you find yourself above, for example, 15 values, check whether some can be merged because they trigger the same action or split into a two-stage decision.

## Should a score be continuous or a small integer scale?

Either can work if each point on the scale has a defined meaning that can be checked against an outcome. Small integer scales are easier to label consistently and easier to turn into ground truth. Continuous scores make sense when the downstream action itself is continuous, such as a sort order or a price adjustment.

## What goes into a structured training example?

The glossary description lists [a state, a structured question, a correct answer, and a defined output schema](https://globaladvisors.biz/2026/09/21/term-reinforcement-learning-for-calibrated-decisions-rlcd-artificial-intelligence). The state is the context available at decision time, the question names the decision, and the correct answer must be a legal schema value. Including the schema in the example keeps the boundary explicit for both training and evaluation.

## Is there an official schema format for RLCD models?

Not publicly. The practitioner guide notes that [TypeSafe has published the name and the goal](https://systemonemodels.org/guides/rlcd-explained) rather than full technical detail, so field names and API representation are not documented. Design your schema around your own actions and validation needs, and adapt the transport format to whatever model you integrate with.
