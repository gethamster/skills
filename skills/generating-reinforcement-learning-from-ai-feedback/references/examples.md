# Examples: Generating Reinforcement Learning from AI Feedback (RLAIF)

## Example: Building an RLAIF Pipeline for a Customer Service Assistant

**Scenario:**

You are fine-tuning a language model to serve as a customer service assistant for a financial services company. The model must be helpful with account inquiries, refuse to provide specific financial advice (regulatory requirement), and never reveal internal system details. You have 10,000 representative customer prompts but no budget for human preference annotators.

**Walkthrough:**

**Constitution:** You draft three core principles: (1) 'Prefer responses that directly address the customer's question with accurate, actionable information about their account options,' (2) 'Prefer responses that clearly decline to provide personalized financial advice while offering to connect the customer with a licensed advisor,' and (3) 'Prefer responses that never reveal internal system architectures, employee names, or operational procedures.'

**Response Generation:** For each of the 10,000 prompts, you generate 3 candidate responses at temperature 0.9 from your SFT model, creating 30,000 comparison pairs (C(3,2) = 3 pairs per prompt).

**AI Preference Labeling:** You run each pair through your evaluator with each of the 3 principles, producing 90,000 labeled comparisons. After position-swap debiasing, you retain 68,000 high-confidence labels.

**Human Audit:** You sample 500 labels and find 88% agreement with human judgment. The main disagreement pattern: the evaluator sometimes prefers overly verbose responses. You add a length-neutrality instruction to the evaluation prompt and re-label the 12,000 pairs where the preferred response was more than 2x longer.

**Reward Model:** You train a reward model on the cleaned 68,000 labels, achieving 72% validation accuracy.

**RL Training:** You run 500 PPO steps with β=0.15. The resulting model correctly handles 94% of red-team prompts attempting to extract system information (up from 67% for the SFT baseline) while maintaining a 4.2/5 helpfulness score on standard customer queries (vs. 4.0 for the baseline). This demonstrates practical claude content optimization through RLAIF — the model is more aligned without any human preference labels.

## Example: Multi-Principle RLAIF for Reducing Harmful Outputs

**Scenario:**

A research team wants to reduce harmful outputs from a general-purpose language model. They have a constitution with 16 principles covering toxicity, bias, deception, and privacy. They need to generate RLAIF data that covers all principles without creating an unwieldy preference dataset.

**Walkthrough:**

**Principle Sampling Strategy:** Rather than labeling every pair against all 16 principles (which would create 16x data volume), the team assigns each comparison pair to the 2-3 most relevant principles based on the prompt topic. They build a simple prompt classifier that maps each user prompt to relevant constitutional principles.

**Targeted Response Generation:** For prompts related to sensitive topics (identified via keyword matching and a toxicity classifier), they generate 5 candidate responses instead of 2, increasing the quality variation in pairs most likely to surface safety-relevant distinctions.

**Ensemble Labeling:** For the highest-stakes comparisons (prompts about self-harm, illegal activities, discrimination), they run the AI evaluator 3 times per comparison with slightly varied prompt phrasings and take the majority vote. This reduces label noise on the most critical training examples.

**Results:** The multi-principle sampling approach produces 120,000 diverse preference labels that cover all 16 principles while keeping compute costs at roughly 40% of what an exhaustive labeling strategy would require. The resulting model shows balanced improvement across all safety dimensions rather than over-optimizing on a single principle.
