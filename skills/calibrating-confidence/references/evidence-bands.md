# Confidence Evidence Bands

Confidence in RICE says how much support the Reach, Impact and Effort estimates have. The bands below start from the scale in Sean McBride's [Intercom post](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/) and attach to each band the kind of evidence his examples describe.

## The Bands

| Confidence | Intercom label | Evidence pattern from the Intercom examples |
|------------|----------------|---------------------------------------------|
| 100% | High confidence | Quantitative metrics for reach, user research for impact, an engineering estimate for effort |
| 80% | Medium | Data supports reach and effort, but impact is uncertain |
| 50% | Low | Reach and impact may be lower than estimated, and effort may be higher |
| Below 50% | Total moonshot | Little or no support for the estimates |

Some teams use a different floor. Nielsen Norman Group's description of RICE treats 25% as the value for wild guesses ([NN/g](https://www.nngroup.com/articles/prioritization-methods/)). Pick one scale for the team and keep it.

## Evidence Types, Strongest to Weakest

This ordering is a working guide for the team to adapt. It follows the Intercom examples and the approach of Itamar Gilad's [Confidence Meter](https://itamargilad.com/the-tool-that-will-help-you-choose-better-product-ideas/), which in his worked example gives near-zero confidence to an idea backed only by opinions and raises confidence as tests and real usage data arrive.

1. Results from a launch or controlled experiment of this idea or a close variant.
2. Product analytics that measure the behavior the estimate depends on.
3. User research: studies with prototypes, interviews with the affected users.
4. An estimate from the people who will build the work.
5. Survey or market data about stated interest.
6. Anecdotes: a few customer requests, a sales call.
7. Opinion: the team's conviction, a manager's belief, an industry trend.

An input supported only by items 6 and 7 is effectively unsupported for calibration purposes.

## Worked Calibrations

Illustrative scenario: three ideas in one scoring round, with the evidence for each input listed.

| Idea | Reach evidence | Impact evidence | Effort evidence | Confidence |
|------|----------------|-----------------|-----------------|------------|
| Faster report loading | Analytics on report views | Session recordings and a usability study | Engineering estimate | 100% |
| Team templates | Analytics on team accounts | Several customer requests only | Engineering estimate | 80% |
| AI summary panel | Guess at usage | Team conviction and an industry trend | Rough PM guess | Moonshot |

The third idea is not rejected. It is marked for a cheap test, such as a prototype shown to a handful of users, and rescored when the test reports back.

## When to Update

Update a Confidence value whenever new evidence arrives, including between planning rounds. Test results, research readouts, launch metrics and revised engineering estimates can all move an idea up or down a band. Lower values as readily as raising them.

## Warning Signs

- Most ideas sit in the same band. The scale is not separating anything; ask for the evidence again.
- Confidence rose but nothing new was learned. Someone is promoting an idea through the back door.
- Nobody can say which input is the weakest. The evidence has not been examined input by input.
