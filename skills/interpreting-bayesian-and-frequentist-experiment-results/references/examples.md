# Examples: Interpreting Bayesian and Frequentist Results in PostHog

## Example: Onboarding tooltip experiment for a B2B SaaS tool (Bayesian, small team)

**Scenario:**

A 5-person product team at a B2B project management tool tested whether adding contextual tooltips to the onboarding checklist would increase checklist completion from 34% to 40%. They used PostHog's Bayesian mode, targeting new signups only. After 3 weeks, they had 1,200 users per variant. The primary metric was checklist completion rate. The guardrail metric was 7-day retention.

**Walkthrough:**

2% for the tooltip variant. 8 percentage points. 1%, meaning the interval excluded zero. The guardrail metric, 7-day retention, showed a win probability of 62% for the test variant (essentially neutral, no degradation).

The team had set a minimum meaningful effect of 2 percentage points before the experiment started. 4%) was below the 2pp minimum, which gave the PM slight pause. 8pp was well above the threshold, and the credible interval was still moderately wide because of the sample size. They decided to extend the experiment one more week.

8%. They wrote the interpretation memo, recommended shipping, and handed off to the engineer to follow the variant cleanup process.

## Example: Pricing page CTA experiment for a B2C subscription app (frequentist, high traffic)

**Scenario:**

A consumer subscription app with 50,000 new signups per month ran a frequentist experiment testing two CTA button texts on the pricing page shown during onboarding. The minimum detectable effect was calculated at 1.5pp, requiring 8,400 users per variant. The primary metric was subscription start rate. The guardrail was bounce rate on the pricing page.

**Walkthrough:**

After 10 days, the experiment reached 9,100 users per variant, surpassing the minimum sample. The team opened PostHog and checked the frequentist results. 05 threshold. 2% subscription start rate).

8%. The confidence interval excluded zero, confirming significance. 72). 1pp was above, and they had pre-committed to using point estimate for the practical threshold check), and clean guardrails, they wrote the memo and recommended shipping.

5pp practical threshold, leading to a brief discussion. They decided the evidence was strong enough given the cost of the change was negligible (a single text string), and shipped the variant.

## Example: Onboarding flow redesign experiment (Bayesian, inconclusive result)

**Scenario:**

A mid-stage startup redesigned their entire 5-step onboarding flow and ran a Bayesian experiment comparing the old flow (control) to the new flow (test). They targeted 2,000 users per variant over 4 weeks. The primary metric was activation (completing at least one core workflow within 48 hours of signup). Guardrails were support ticket creation rate and 14-day retention.

**Walkthrough:**

After 4 weeks, the experiment had 2,100 users per variant. 4%. The interval included zero, meaning the data had not ruled out that the new flow was actually worse. 7 percentage points.

3% for ticket creation rate. Fourteen-day retention was neutral at 54% win probability. The team wrote a memo documenting the inconclusive primary result and the potentially negative guardrail signal. Their decision: kill the experiment and not ship the redesign as-is.

The interpretation was that the new flow might produce a small conversion lift, but the effect was too small to detect confidently at their traffic level, and the support ticket increase suggested the new flow introduced confusion. They extracted the two individual steps from the redesign that user session recordings suggested were most effective, and planned two smaller, more focused experiments to test each step independently.

## Example: Multi-variant onboarding email sequence test (Bayesian, B2B, three variants)

**Scenario:**

A developer tools company ran an A/B/N experiment with three email sequence variants for post-signup onboarding: Variant A (existing 5-email sequence, control), Variant B (3-email sequence, shorter and more actionable), and Variant C (5-email sequence with personalized content based on signup role). They used Bayesian mode and ran for 6 weeks, collecting 3,400 users across the three variants. The primary metric was "first project created within 7 days."

**Walkthrough:**

The results page showed three variants with their respective win probabilities. Variant B (short sequence) had a 14% probability of being best. Variant C (personalized) had an 82% probability of being best. Control had a 4% probability of being best.

9%, excluding zero but with a wide range. 4%, solidly including zero. The team noted that Variant C was promising but had not crossed the 95% threshold. They decided to extend the experiment for 2 more weeks with a hard cutoff.

8%. This was close to but did not reach 95%. The team discussed the tradeoff: the personalized sequence required ongoing maintenance of role-based content, which had a real engineering cost. At 91% probability, there was roughly a 1-in-11 chance the variant was not actually better.

They decided to ship Variant C but scheduled a follow-up check at 12 weeks to verify the lift held with a larger sample in production. The memo documented the 91% threshold decision, the reasoning for accepting slightly higher uncertainty, and the follow-up plan.
