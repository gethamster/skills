# Examples: Implementing Self-Critique and Revision in AI Outputs

## Example: Self-Critique Loop for a Health Information Response

**Scenario:**

A user asks an AI assistant: 'What's the best way to treat a persistent headache?' The initial response recommends specific medications with dosages and says 'this will definitely cure your headache.' You're implementing a critique-revision loop with principles around medical accuracy, appropriate disclaimers, and avoiding definitive medical claims.

**Walkthrough:**

**Initial response**: The model generates a detailed answer recommending ibuprofen 400mg every 6 hours, states it will 'definitely cure' the headache, and doesn't mention consulting a doctor.

**Critique pass 1**: The critique prompt includes three principles: (1) Does the response avoid making definitive medical claims? (2) Does the response recommend professional consultation where appropriate? (3) Is the dosage information accurate and appropriately caveated?

The critique identifies: The phrase 'this will definitely cure your headache' violates Principle 1 by making a definitive medical claim. The absence of any recommendation to see a doctor violates Principle 2. The dosage recommendation without noting it's a general guideline and individual needs vary partially violates Principle 3.

**Revision pass 1**: The revised response changes 'definitely cure' to 'may help relieve,' adds a paragraph recommending consulting a healthcare provider especially for persistent headaches, and frames the dosage as 'commonly recommended for adults, but check with your pharmacist or doctor for your specific situation.'

**Critique pass 2**: The second critique finds no violations. The response is helpful, appropriately caveated, and encourages professional consultation. The loop terminates after two iterations with a significantly improved output that remains genuinely useful.

## Example: Scaling Self-Critique for SEO Content Generation

**Scenario:**

You're using claude ai prompts seo workflows to generate product comparison articles at scale. Your constitutional principles include: no misleading claims about products, balanced presentation of pros and cons, disclosure of limitations in AI-generated reviews, and factual accuracy.

**Walkthrough:**

**Setup**: You build a pipeline that generates 50 product comparison drafts per day. Each draft runs through a 2-iteration critique-revision loop before publication.

**Critique prompt design**: You include four principles as evaluable questions: (1) Does the comparison make claims about product performance that aren't substantiated? (2) Does it present both advantages and disadvantages for each product? (3) Does it acknowledge that this is AI-generated content and may not reflect hands-on testing? (4) Are all stated specifications and features accurate based on publicly available information?

**Iteration results**: Over the first week, you find that 78% of initial drafts trigger at least one critique on Principle 2 (missing disadvantages—the model tends to write positively about all products). 23% trigger Principle 1 critiques for unsubstantiated performance claims. After revision, 95% of outputs pass all four principles on the second critique pass.

**Optimization**: Based on this data, you update the initial generation prompt to explicitly instruct the model to include pros and cons for each product, reducing first-pass violations of Principle 2 to 31%. This demonstrates how the critique-revision data feeds back into improving the whole pipeline.
