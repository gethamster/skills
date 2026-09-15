# FAQ: Evaluating Spotify Model Tradeoffs and Common Pitfalls

## How long does a full spotify model pros cons evaluation take?

Plan for 2-4 hours to build the initial scorecard, including current-state mapping, scoring, and failure mode research. Add 1-2 hours for stakeholder review and discussion. If you are evaluating all five elements (squads, tribes, chapters, guilds, and role structure), the failure mode research is the most time-intensive step because it requires reading external case studies and post-mortems. For a focused evaluation of only 2-3 elements, you can complete the process in a single half-day session.

## Should I evaluate spotify model tradeoffs before or after talking to teams?

Build the initial scorecard with leadership first, then validate with team leads and individual contributors before finalizing. Starting with teams creates a different problem: team-level enthusiasm or resistance will anchor the evaluation before you have assessed organizational feasibility and strategic benefit. The leadership draft establishes the structural assessment, and the team validation catches feasibility gaps that leadership cannot see from above, especially around technical architecture constraints and day-to-day workflow realities.

## What if leadership has already decided to adopt the Spotify Model and the evaluation feels like a formality?

Reframe the scorecard as an adoption sequencing tool rather than a go/no-go gate. Instead of asking 'should we adopt?' ask 'which elements should we adopt first, and what prerequisites do we need to address?' This gives the evaluation genuine influence over the implementation plan even when the high-level decision is already made. The most valuable output in this situation is the prerequisite list: concrete work that must happen before each element can succeed. Leadership usually accepts sequencing recommendations even when they resist stop/go recommendations.

## How do I handle disagreements between stakeholders on element scores?

When two stakeholders assign different scores to the same element, the disagreement is almost always about the underlying facts rather than the score itself. An engineering VP who scores squad feasibility at 4 and a staff engineer who scores it at 2 probably disagree about how coupled the codebase actually is. Resolve the disagreement by identifying the factual question behind the score gap, then gather evidence. If you cannot resolve it with evidence in the meeting, note the disagreement and assign the lower score as the conservative default.

You can always raise a score later when a prerequisite is addressed.

## Can I use this evaluation process for frameworks other than the Spotify Model?

Yes. The three-dimensional scoring approach (feasibility, benefit, risk) works for any organizational framework you are considering, including SAFe, LeSS, team topologies, or custom structures. The key adaptation is replacing the Spotify-specific failure mode catalog with failure modes documented for the framework you are evaluating. The process of decomposing a framework into independent elements, scoring each one, and producing a selective adoption recommendation is universally applicable.

## Why does my tradeoff scorecard keep producing 'adapt' recommendations instead of clear adopt or skip decisions?

This usually means your scoring is compressed toward the middle, with most elements getting 3s across all dimensions. Middle scores happen when evaluators hedge because they are uncertain, not because the element is genuinely moderate on all dimensions. ' The thought experiment forces a more definitive assessment. Also check whether your current-state document is detailed enough.

Vague current-state descriptions produce vague scores.

## How often should we re-evaluate the scorecard after initial adoption?

Revisit the scorecard quarterly during the first year of adoption, then semi-annually after that. The first year is when your feasibility and risk assumptions will be tested by reality. Elements you adopted may encounter failure modes you underestimated, and elements you deferred may become feasible as prerequisites are addressed. Each review should take 30-60 minutes if you keep the scorecard updated with observed outcomes.

If you only review annually, you risk continuing with elements that are not working or missing the window to add elements that have become viable.
