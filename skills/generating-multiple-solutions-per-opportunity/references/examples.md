# Examples: Generating Multiple Solutions for Each Opportunity

## Example: E-Commerce Team Addressing Cart Abandonment

**Scenario:**

A product team at an e-commerce company has identified the opportunity: 'Customers abandon their cart when they encounter unexpected shipping costs at checkout, leading to lost conversions.' This opportunity was surfaced through continuous discovery interviews and validated with quantitative data. The team needs to generate multiple solutions before committing to assumption tests.

**Walkthrough:**

The team runs a 60-minute solution generation session. During brainwriting, they capture 14 initial ideas. After clustering, they identify five distinct solution concepts:

1. **Shipping cost estimator on product pages** — Show estimated shipping cost before the customer reaches checkout, eliminating the surprise entirely.
2. **Free shipping threshold nudge** — Display a progress bar showing how close the customer is to qualifying for free shipping, reframing the cost as an avoidable fee.
3. **Subscription-based free shipping** — Offer an annual membership (like Amazon Prime) that eliminates shipping costs for members.
4. **Local pickup network** — Partner with physical retail locations for free in-store pickup, removing shipping cost entirely for customers near a partner store.
5. **Transparent total price display** — Redesign product cards to always show the total price including shipping, so there's never a 'surprise' — the product price absorbs the shipping cost perceptually.

Each concept addresses the same opportunity through a fundamentally different mechanism: pre-informing, incentivizing a higher cart value, subscription bundling, logistics redesign, and price presentation. The team documents key assumptions for each (e.g., 'Customers will increase their cart size to hit a free shipping threshold' for concept #2) and adds all five as solution branches to their OST. They then prioritize which assumptions to test first.

## Example: SaaS Onboarding Drop-Off

**Scenario:**

A B2B SaaS product team has identified the opportunity: 'New users fail to complete setup because they don't understand which integrations are relevant to their workflow, causing them to abandon onboarding.' The team is tempted to just build a better setup wizard, but commits to generating multiple solutions first.

**Walkthrough:**

Using reverse brainstorming, the team first asks: 'How could we make integration selection even MORE confusing?' Ideas include 'show all 200 integrations at once,' 'use only technical jargon,' and 'require users to configure settings they don't understand.' Flipping these produces solution candidates.

They then use analogy mapping, looking at how Netflix recommends shows (collaborative filtering), how a doctor triages symptoms (guided diagnostic), and how IKEA uses room displays (contextual showcasing). This yields three distinct solution concepts:

1. **Guided diagnostic flow** — Ask 3-4 questions about the user's role and workflow, then auto-recommend a specific integration bundle. The user just confirms.
2. **Peer-based recommendation engine** — Show 'Teams like yours typically use these integrations' based on company size, industry, and role data collected at signup.
3. **Integration-free quick start** — Let users skip integrations entirely and start with manual data entry or CSV upload. Introduce integrations later when the user has enough context to understand their value.

Solution 3 was the unexpected breakthrough — the team had assumed integrations were essential for onboarding, but the reverse brainstorm revealed that forcing integration choice upfront might itself be the problem. They add all three solutions to the OST and design experiments for each.
