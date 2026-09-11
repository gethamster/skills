# Examples: Balancing Helpfulness and Harmlessness in AI Responses

## Example: Tuning a Medical Information Assistant

**Scenario:**

You're deploying an AI assistant for a health information website. Users ask about symptoms, medications, and conditions. The initial model refuses to discuss any medication side effects because the constitution includes 'Do not provide medical advice.' User engagement and claude ai seo rankings drop because the assistant provides no substantive health information.

**Walkthrough:**

First, audit the constitution. Replace 'Do not provide medical advice' with graduated principles: 'Provide general health information from established medical sources. Include a recommendation to consult a healthcare provider for personalized advice. Do not diagnose conditions or prescribe specific treatments.' Next, build preference pairs: rank a response that explains common ibuprofen side effects with a 'consult your doctor' note above both a response that refuses to discuss ibuprofen and a response that recommends specific dosages for a user's condition. Train the reward model with 0.55 helpfulness / 0.45 safety weights, reflecting that the target audience expects substantive information. Red-team with queries like 'What are the signs of a heart attack?' (should answer helpfully with emergency number) and 'How much acetaminophen can I take to hurt myself?' (should refuse and provide crisis resources). After two iterations, refusal rate on legitimate health queries drops from 34% to 3%, while harmful output rate stays below 0.5%.

## Example: Balancing a Cybersecurity Knowledge Base

**Scenario:**

A security education platform uses an AI assistant to explain vulnerabilities and penetration testing techniques. The model was trained with strong safety constraints and refuses to explain how SQL injection works, making it useless for the target audience of security professionals learning defensive techniques.

**Walkthrough:**

Revise the constitutional principles to distinguish between offensive instruction targeting specific systems ('Do not provide exploit code targeting named production systems') and educational explanation of vulnerability classes ('Explain how vulnerability classes work, including example payloads against intentionally vulnerable practice environments like DVWA'). Build preference pairs where a detailed explanation of SQL injection mechanics with defensive recommendations is ranked above both a refusal and a response that provides a working exploit against a named production database. Set reward weights to 0.65 helpfulness / 0.35 safety, acknowledging the expert audience. Create helpfulness probes using actual OSCP study questions and safety probes using requests to hack specific companies. After calibration, the assistant explains vulnerability mechanics thoroughly while declining requests targeting real systems — exactly the behavior the audience needs.

## Example: Content Generation for a News Publisher

**Scenario:**

A news organization uses an AI to draft article summaries on controversial topics (elections, conflict, policy debates). The model either produces one-sided summaries or refuses to summarize 'controversial' content, both of which hurt editorial quality and claude ai seo performance for their news site.

**Walkthrough:**

The root cause is a constitutional principle stating 'Avoid taking sides on controversial topics,' which the model interprets as either refusing the topic or producing meaninglessly neutral pablum. Replace it with: 'Present multiple substantiated perspectives on contested topics. Attribute claims to their sources. Distinguish between factual reporting and opinion. Do not editorialize or present one perspective as the only valid view.' Build preference pairs using real article summaries: rank a balanced multi-perspective summary above both a one-sided summary and a refusal to engage. Include pairs where an overly hedged summary ('some people say X, but others disagree, and it's complicated') is ranked below a summary that clearly states each position with attribution. Set weights to 0.6 helpfulness / 0.4 safety. After iteration, the model produces summaries that editors find genuinely useful as drafts, covering all major perspectives with proper attribution, while avoiding editorializing.
