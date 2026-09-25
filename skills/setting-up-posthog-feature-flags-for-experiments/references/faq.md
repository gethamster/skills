# FAQ: PostHog Experiment Variant Configuration with Feature Flags

## What kind of flag does a PostHog experiment need?

A multivariate flag with at least two variants, where the first variant is named `control`. If you do not link an existing flag, the experiment wizard creates one for you with `control` and `test`. Boolean and remote config flags cannot back an experiment.

## How does PostHog decide which variant a user gets?

It assigns users based on their distinct ID, and the assignment is stable across sessions and devices. The split between variants is even by default and can be edited. The rollout percentage decides what share of eligible users enter the experiment at all.

## Why are some users missing from my experiment results?

The usual causes are reading the flag with a method that does not record exposure, reading it before flags or the properties it depends on are available, or web SDK deduplication hiding returning users. Break down the exposure event by variant to look for empty values. PostHog's troubleshooting guide covers each case and its fix.

## Can each variant carry its own configuration?

Yes. Multivariate flags can have a different payload per variant, returned as JSON, which is useful for copy, limits or layout options. Keep in mind that reading only the payload does not record an exposure, so still read the variant with the exposure-recording call.

## How do I stop the page from flashing the control version?

Make flag values available before the page renders. PostHog's options are to wait for flags to load before showing the page, or to bootstrap the SDK with flag values computed on your server. Bootstrapping takes more engineering but keeps the page fast.
