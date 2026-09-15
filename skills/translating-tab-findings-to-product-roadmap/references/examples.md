# Examples: Translating TAB Findings into Product Roadmap Decisions

## Example: Translating Core Web Vitals DevTools Pain into a Roadmap Feature

**Scenario:**

A developer tools startup runs a TAB of 35 frontend engineers. Over two monthly cycles, 12 members independently describe frustration with debugging Largest Contentful Paint (LCP) regressions using standard core web vitals devtools. They describe spending 20-40 minutes per incident manually correlating Lighthouse reports with recent code changes.

**Walkthrough:**

The team synthesizes this into one unified theme and writes the opportunity statement: 'Senior frontend developers experience frustration debugging LCP regressions when using core web vitals devtools during pre-deploy checks because existing tooling doesn't correlate performance deltas with specific commits, resulting in 30+ minutes of manual investigation per incident.'

They score it: Frequency 4 (12/35 members), Severity 5 (blocks deployment workflow), Strategic Alignment 5 (core to product vision). Composite: 100.

This becomes the #1 'Next' roadmap item. Acceptance criteria: 'Developer can see a diff view showing which component changes caused LCP to increase by more than 200ms, with a direct link to the relevant commit, without leaving their existing core web vitals devtools workflow.' GTM positioning: 'For frontend teams who waste hours debugging LCP regressions before every deploy, [Product] automatically pinpoints the commit that broke your Core Web Vitals, so you ship fast without shipping slow.'

They share this with the 12 affected TAB members, invite them to a private beta, and later source three testimonials from this group.

## Example: Deprioritizing a Popular but Low-Severity Request

**Scenario:**

In the same TAB, 18 members mention wanting better dark mode support in the product's dashboard. It's the most frequently mentioned topic across two cycles.

**Walkthrough:**

The team scores it: Frequency 5 (18/35 members), Severity 1 (cosmetic preference, doesn't block any workflow), Strategic Alignment 2 (not a differentiator and easy for competitors to copy). Composite: 10.

Despite being the most frequently mentioned item, it scores far below the core web vitals devtools debugging feature. The team places it in 'Later' with a note: 'Cosmetic improvement — revisit when core workflow features are shipped.' They communicate this transparently to TAB members: 'We heard you on dark mode. It's on our radar, but we're prioritizing the LCP debugging workflow first because that's where we heard the most acute pain.' This honesty actually increases TAB trust.
