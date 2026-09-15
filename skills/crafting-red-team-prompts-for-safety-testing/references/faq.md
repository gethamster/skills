# FAQ: Crafting Red-Team Prompts to Stress-Test AI Safety

## How many red-team prompts do I need for a meaningful safety evaluation?

Aim for a minimum of 200-300 prompts covering all risk categories and escalation levels. Fewer than 100 prompts typically leaves significant coverage gaps. The exact number depends on your risk taxonomy breadth—more categories and subcategories require more prompts for statistical significance.

## Can I use AI to help generate red-team prompts?

Yes, and it's increasingly common. You can use one model to generate adversarial prompts for another, which is conceptually aligned with how Constitutional AI uses AI feedback. However, always have human experts review and supplement AI-generated prompts, since models tend to generate predictable attack patterns and miss creative edge cases.

## How do claude seo prompts relate to red-team safety testing?

Claude seo prompts designed for content generation can themselves be red-team targets—testing whether SEO optimization pressure causes the model to sacrifice accuracy, produce biased content, or bypass safety guidelines. They also serve as a prompt engineering framework for structuring systematic adversarial queries during safety evaluations.

## What's the difference between red-teaming and standard model evaluation?

Standard evaluation measures general performance on representative tasks (accuracy, fluency, helpfulness). Red-teaming specifically targets adversarial edge cases designed to elicit failures. Think of standard evaluation as checking whether the car drives well on normal roads, and red-teaming as crash-testing it against barriers.

## How often should I update my red-team prompt library?

Update after every major model training run, whenever new adversarial techniques are published in safety research, and at minimum quarterly. Retire prompts the model handles consistently across multiple runs, and replace them with more challenging variants to maintain evaluation sensitivity.

## Should red-team prompts be kept secret from the model training team?

Ideally, yes—at least a held-out subset should remain unknown to the training team to prevent overfitting to specific test cases. In practice, share general categories and patterns to inform training improvements, but maintain a confidential 'challenge set' that serves as an unbiased final validation.
