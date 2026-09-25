# FAQ: Creating and Launching A/B Tests in PostHog Experiments

## Where do I create an experiment in PostHog?

Go to the Experiments section of the PostHog app and click New experiment. A three-step wizard asks for a description with the hypothesis and flag key, the variant rollout and the analytics settings. When you save it becomes a draft, and you launch it from the draft's detail page.

## Do I need to create the feature flag first?

No. By default the wizard creates a flag for you, with a key generated from the experiment name that you can edit. You can link an existing flag instead if it has multiple variants and `control` is the first one. If you need targeting beyond the rollout percentage, add release conditions after saving the draft.

## Can I add metrics after launching?

Yes, PostHog allows it because metrics only affect the analysis and do not change what users see. PostHog still recommends defining metrics before launch to avoid biasing the analysis. A metric added after you have seen results is better treated as a lead for a follow-up experiment than as evidence.

## How do I check both variants before launch?

Add an optional override to the flag's release conditions so your own account gets a chosen variant, then switch it to the other variant and repeat. The PostHog toolbar can also toggle flags in your browser. In both cases, confirm that the page renders correctly and that exposure and metric events arrive.

## How often should I look at a running experiment?

Look early for health: the variant split, event flow and errors. Leave the primary metric until the planned sample is reached, because repeated checking with a stop-when-significant habit inflates false positives. If you need to monitor results continuously, enable sequential testing in the experiment's statistics settings.
