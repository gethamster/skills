# Examples: Conducting Non-Pitch Discovery Calls with Developers

## Example: Discovery Call with a Platform Engineer at a Series B Startup

**Scenario:**

You're building a developer tool in the CI/CD space. Your advisory board member is a platform engineer responsible for maintaining internal developer tooling for a 40-person engineering team. This is your second call with them.

**Walkthrough:**

You open by referencing the previous call: 'Last time you mentioned your team was migrating from Jenkins to GitHub Actions — how's that going?' The developer laughs and says 'Don't get me started.' You resist the urge to ask about specific pain points and instead say 'Walk me through what happened since we last talked.'

They describe a three-week migration that ballooned to eight weeks because of undocumented pipeline dependencies. You follow the thread: 'What kind of dependencies caught you off guard?' They describe secret management issues, custom scripts nobody understood, and test suites that assumed Jenkins-specific environment variables.

You catch an emotional signal when they say 'Honestly, I spent a full week just auditing what we even had.' You probe: 'Tell me about that audit process — what did you actually do, step by step?' They describe manually reading YAML files, grepping for environment variables, and maintaining a spreadsheet. You note the workaround's manual nature and the visible frustration.

At no point do you mention that your product could automate pipeline auditing. Instead, you ask 'Have you tried any tools for that audit process?' They mention trying a couple of open-source projects and being disappointed. You ask what specifically disappointed them — and get three highly specific feature gaps.

You close by summarizing: 'So the migration pain was really about invisible dependencies and the lack of tooling to audit what you already had. The audit itself was basically manual detective work.' They confirm and add a nuance you hadn't caught. You schedule a follow-up in six weeks. In your debrief, you note that this 'pipeline audit' pain thread has now appeared in 4 of your last 7 calls — a theme worth escalating.

## Example: Navigating the 'So What Are You Building?' Question

**Scenario:**

You're 20 minutes into a call with a senior backend developer. The conversation has been flowing well — they've described three distinct pain points around API observability. Then they ask directly: 'This is really interesting but I'm curious — what exactly are you working on?'

**Walkthrough:**

You give a one-sentence honest answer: 'We're exploring tools that help teams understand what's happening across their API surface area — still early and figuring out the right approach.' Then you immediately pivot: 'Actually, something you said a minute ago about not knowing which APIs are actually being called in production — can we go back to that? How do you currently figure that out when something breaks at 2am?'

The developer, satisfied with the brief answer, returns to their narrative and shares a detailed incident story that reveals three workflow steps you hadn't considered. The key is that your one-sentence answer was honest and unexciting enough that it didn't activate their 'I'm being sold to' filter, and your pivot was so naturally connected to their own stated interest that it felt like genuine curiosity, not deflection.

This approach works because it respects the developer's legitimate curiosity while maintaining the advisory dynamic. Refusing to answer would feel evasive and break trust. Over-answering would shift the call into pitch mode.
