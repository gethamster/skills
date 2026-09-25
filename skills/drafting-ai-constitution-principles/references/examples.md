# Examples: Drafting AI Constitution Principles for Constitutional AI

## Turning a support team's rules into comparison principles

**Scenario:**

Illustrative scenario: a small team is fine-tuning an open model to answer questions for a home-insurance help desk. Their existing policy document is a list of rules written for human agents, such as "never confirm account details in chat" and "do not tell customers whether a claim will be approved."

**Walkthrough:**

The team rewrites each rule as a critique and revision pair and as a comparison. "Never confirm account details" becomes a critique request ("Identify any place where the assistant's last response reveals or confirms personal account information") and a revision request ("Rewrite the response to remove any account information and explain how the customer can check it securely"). The comparison version reads "Choose the response that reveals less personal account information while still telling the customer how to get what they need."

Reading the pilot outputs, they notice the claim-approval rule produces revisions that refuse to discuss claims at all. They add a proportionality principle ("Choose the response that explains the claims process clearly without predicting the outcome of a specific claim") and the next pilot keeps the useful explanations.

## Pruning an over-long constitution

**Scenario:**

Illustrative scenario: a research group starts with a large constitution that combines three published sets and their own additions. Pilot revisions are slow to read and the comparison labels look inconsistent.

**Walkthrough:**

They group the principles by the concern each one targets and find many near duplicates, several very long principles that list dozens of cases, and almost nothing about tone. They merge duplicates into one broad principle per concern, split the longest principles into a broad version plus one narrow principle for the case they care about most, and add two principles against preachy answers.

On the next pilot they read the labels grouped by principle. Two narrow principles still produce odd choices on ordinary prompts, so they drop them and keep a note of why. The final set is shorter, and every principle has a one-line reason attached.

## Changing the refusal voice for a consumer product

**Scenario:**

Illustrative scenario: a team building a casual chat companion wants the model to decline harmful requests in a friendly, informal voice instead of a formal one.

**Walkthrough:**

They keep the critique requests unchanged, since the harms to look for are the same. They rewrite the revision requests to ask for a short, warm, informal decline that still names the problem, following the approach Hugging Face used when it built a Grok-style variant of Anthropic's constitution.

They write new few-shot examples in the informal voice, because the old examples pull revisions back to the formal style. Reading the pilot, they find some revisions tip into sarcasm aimed at the user, so they add a comparison principle that prefers responses that are friendly without mocking the person asking.
