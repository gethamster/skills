# FAQ: Scaling Agile Practices Using Spotify Structures

## How do I know when a tribe is too large and needs to split?

The primary signal is coordination cost, not headcount. Watch for these indicators: the tribe lead cannot describe the current priorities of every squad without checking a document, cross-squad dependency resolution within the tribe takes more than one sprint, or team satisfaction surveys show declining sense of belonging. Headcount above 100 is a useful trigger for investigation, but some tribes function well at 120 while others struggle at 70. Pull dependency data and draw the graph before deciding.

## Should I scale the Spotify model before or after restructuring my product architecture?

They should evolve together, but if you must sequence, fix the most painful product architecture boundaries first. Splitting a tribe across a tightly coupled monolith just creates cross-tribe dependencies that are harder to manage than intra-tribe ones. If your codebase has clear module boundaries, your tribe boundaries should follow them. If it does not, invest in domain decomposition before reorganizing teams, or you will reorganize twice.

## How many tribes can one organization support before the model breaks down?

There is no hard limit, but practical experience suggests that beyond 10-12 tribes you need an additional coordination layer. Some organizations introduce a 'tribe of tribes' or 'alliance' concept where 3-4 related tribes share a higher-level planning cadence. Others add a portfolio-level product council. The Spotify model's original documentation did not address this scale, so you are extending the framework.

The principle remains the same: add the lightest coordination mechanism that addresses the specific problem you observe.

## How long should I wait after a structural change before evaluating whether it worked?

90 days is the standard evaluation period for tribe splits and squad spawns. The first 30 days are disruption, where productivity typically drops 15-25% as teams rewire communication channels and adjust to new contexts. Days 30-60 should show stabilization, with metrics returning to pre-change levels. Days 60-90 should show improvement on the specific metric that triggered the change.

If you do not see improvement by day 90, investigate the root cause rather than immediately rolling back or making another change.

## How do I prevent chapters from becoming ineffective as the organization scales?

Chapters lose effectiveness when they span too many tribes or when the chapter lead does not have enough time allocated for the role. As a rule of thumb, a chapter lead needs at least 20% of their time for chapter responsibilities, and that percentage increases with chapter size. When a chapter spans more than 4 tribes, split it into sub-chapters with a coordination layer. Measure chapter health by tracking artifact production (standards documents, shared tooling, onboarding improvements) and participation rates in chapter meetings.

If participation drops below 60%, the chapter is either too large, meeting at the wrong time, or solving a problem no one cares about anymore.

## Why does my scaling plan keep becoming obsolete before the next quarterly review?

This usually means your trigger thresholds are set too far from current conditions, so by the time a threshold is hit, the situation has already evolved past what the plan anticipated. Set thresholds closer to your current state, covering the next growth increment rather than trying to plan three increments ahead. A scaling plan that covers the transition from 6 tribes to 8 tribes is more useful than one that maps the journey from 6 to 20. Update the plan after each structural change to set new thresholds based on the new baseline.

## Can I use this scaling approach if we did not start with the Spotify model?

Yes. The principles of this skill, splitting organizational units along product domain boundaries, introducing governance reactively, monitoring dependency graphs, and evolving horizontal structures, apply regardless of whether you call your teams squads or pods or streams. The [Spotify Squad Model](https://tryhamster.com/methods/spotify-squad-model) provides useful vocabulary and a coherent set of building blocks, but the scaling technique works with any small-team-based agile structure. Start by mapping your current structure to the Spotify vocabulary (autonomous teams become squads, product areas become tribes, discipline groups become chapters), then apply the trigger-based scaling approach from Step 3 onward.
