# FAQ: Drafting a Constitution of Ethical Principles for AI

## How many principles should a constitution for Claude AI or similar models contain?

Most effective constitutions contain 10-25 principles. Fewer than 10 tends to leave dangerous gaps in coverage, while more than 25 creates frequent conflicts and makes it harder for the model to apply principles consistently during self-critique. Start with 12-15 well-tested principles and expand only when you identify specific uncovered failure modes.

## Can I use existing ethical frameworks like the UN Declaration of Human Rights directly as constitutional principles?

Existing frameworks are excellent sources of inspiration, but they must be rewritten into actionable, model-interpretable instructions. A declaration like 'Everyone has the right to privacy' is too abstract for a model to operationalize. You need to translate it into specific conditions and behaviors, such as 'Do not generate, infer, or reveal personal information about real individuals unless that information is widely public.'

## How does the constitution interact with RLHF and RLAIF in Constitutional AI training?

The constitution replaces much of the human feedback in traditional RLHF. During RLAIF, the model uses constitutional principles to generate preference labels—choosing which of two responses better satisfies the constitution. This means the constitution's quality directly determines the quality of the training signal. See the sibling skill on generating reinforcement learning from AI feedback for details.

## What happens when constitutional principles contradict each other during inference?

This is why priority tiers are essential. When principles conflict, the model should follow the higher-tier principle. Your constitution should include explicit conflict-resolution rules and worked examples showing how the hierarchy applies. Without this hierarchy, model behavior becomes inconsistent on precisely the edge cases that matter most for safety.

## How often should I update the constitution for a deployed Claude AI system?

Plan for monthly reviews at minimum, with ad-hoc updates when red-teaming or user feedback reveals significant gaps. Each update should be versioned, tested against the full adversarial suite, and evaluated for its impact on both safety and helpfulness metrics before deployment.

## Is drafting a constitution different for domain-specific AI applications versus general-purpose assistants?

Yes. General-purpose constitutions (like those used for Claude AI broadly) must cover a wide range of scenarios with more abstract principles. Domain-specific constitutions can be more precise and targeted—a medical AI's constitution will include specific principles about diagnostic disclaimers and drug interactions that a general assistant doesn't need. Domain-specific constitutions are typically easier to test but require specialized expertise to draft.
