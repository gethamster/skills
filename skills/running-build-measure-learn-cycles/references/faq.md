# FAQ: Running Build-Measure-Learn Cycles

## How long should one build measure learn cycle take?

There is no fixed length; the aim is to minimize total time round the loop. Set a duration that lets enough target customers encounter the test to produce a readable signal, for example one to three weeks for many software tests. Fix the stop date and the decision date during planning. If cycles keep getting longer, the build is usually the stage that grew.

## What does planning the loop in reverse mean?

It means deciding what you need to learn first, then the metric that would show it, then the smallest build that would generate that metric. You still run the loop forwards: build, measure, learn. Planning in reverse keeps the build small and ensures every number you collect maps to a decision. Starting from the build tends to produce features and data with no clear question behind them.

## What counts as completing the learning step?

The learning step is complete when the team has compared the evidence with the hypothesis and criteria set in advance and recorded a decision. That decision is one of three: persevere, pivot, or revise and rerun the test. A dashboard review with no written decision does not count. The record should name the next assumption so the following cycle can start immediately.

## Do I always need to build software for the Build stage?

No. The build output is the smallest thing that can test the hypothesis, which can be a landing page, a clickable prototype, a manual service delivered by the team, or a feature flag on an existing product. Choose the cheapest artifact that produces real customer behavior for the metric you picked. Software is only needed when nothing simpler can generate that behavior.

## Can we run more than one cycle at the same time?

You can, as long as the tests do not share customers or metrics in ways that confound each other. Two tests on the same onboarding flow, for example, make it hard to know which change moved the numbers. Parallel cycles on independent assumptions, such as pricing and a new channel, are usually fine. Keep a separate record and decision date for each one.
