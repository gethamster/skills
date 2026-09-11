# FAQ: Segmenting Customers by Unmet Needs

## How many survey responses do I need for reliable outcome-based segmentation?

Aim for a minimum of 100 clean responses after removing straight-liners and incomplete surveys. With 100 responses, you can reliably extract 3-4 segments. For 5-6 segments, target 200-400 responses. Below 100, clusters are unstable, meaning re-running the algorithm produces different groupings each time.

If you are stuck below 100, use the manual sorting approach described in the examples rather than pretending algorithmic clustering will be reliable at that sample size.

## How do I segment customers by unmet needs if I only have qualitative interview data?

Qualitative data alone cannot produce statistically rigorous segments, but it can produce useful hypotheses. Review 15-20 JTBD interview transcripts and tag each interviewee's top 3-5 pain points using your desired outcome statements. Sort interviewees by their dominant pain points and look for natural groupings. You will typically see 2-3 patterns emerge.

Treat these as hypothesis segments and design a quantitative survey to validate whether those patterns hold at scale. The qualitative-first approach is slower but ensures your outcome statements are grounded in real language before you survey broadly.

## Should I segment customers by unmet needs before or after building a job map?

After. The job map structures the full set of job steps, and desired outcome statements are written for each step. You need those outcomes to exist before you can survey customers on importance and satisfaction. The recommended sequence is: [define the core functional job](https://tryhamster.com/skills/defining-core-functional-jobs), [create a job map](https://tryhamster.com/skills/creating-job-maps), [write desired outcome statements](https://tryhamster.com/skills/writing-desired-outcome-statements), survey customers, [identify underserved outcomes](https://tryhamster.com/skills/identifying-underserved-outcome-opportunities), and then segment.

Skipping ahead to segmentation without this foundation means you are clustering on incomplete or poorly defined outcomes.

## How long do outcome-based segments remain valid before I need to refresh them?

Typically 12-18 months in fast-moving markets (SaaS, consumer tech) and 18-24 months in slower markets (industrial, enterprise infrastructure). The segments themselves, the clusters of needs, tend to be more stable than their sizing. A 'Speed Seekers' segment does not disappear, but it may shrink from 35% to 20% if a competitor launches a fast solution. Schedule a lighter re-survey (importance and satisfaction only, no new outcome discovery) annually to re-estimate segment sizes and check for shifts in the underserved landscape.

## Why does my segmentation result keep producing one dominant segment and several tiny ones?

This usually indicates one of three problems. First, your outcomes may not differentiate enough. If 25 of your 30 outcomes are uniformly underserved across all respondents, the clustering algorithm has little variation to work with. Check whether your outcomes span diverse job steps.

Second, your sample may be too homogeneous. If you surveyed only power users or only enterprise accounts, you may have pre-filtered out the variation that segmentation needs. Broaden your sample. Third, your k value may be too high.

Try k=3 instead of k=5 and see if the dominant segment splits into two meaningful groups at the lower k.

## Can I combine outcome-based segments with behavioral data from my product analytics?

Yes, and this is an advanced practice that strengthens both the segmentation and your ability to operationalize it. After defining outcome-based segments from survey data, map each surveyed user to their product analytics profile. Look for behavioral signatures that correlate with segment membership: feature usage patterns, session frequency, workflow sequences. If you find strong correlations, you can build a predictive model that assigns non-surveyed users to segments based on their in-product behavior alone.

This makes the segmentation live and operational rather than a static research artifact.

## How do I present outcome-based segments to stakeholders who are used to demographic personas?

Start by acknowledging that demographic personas are familiar and useful for some purposes, then show a concrete example where two demographic personas have opposite unmet needs, or where two customers in different demographics share the same pain. Use the overlay data from Step 6 to show how outcome segments relate to familiar demographic categories without being defined by them. Frame outcome segments as 'what to build and why' and demographic profiles as 'who to target and where.' Most stakeholders convert quickly once they see that outcome segments produce clearer roadmap decisions than personas like 'Marketing Mary' ever did.
