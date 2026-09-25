# FAQ: Representing Current Agent State

## Should agent state be plain text or structured JSON?

It depends on the source. Plain text suits a single message or document when the question is about its content. Structured data suits records, chat logs and anything your code updates field by field. Many loops use an object that holds a text field for the message alongside typed fields for status and history.

## What is the minimum a loop's state should contain?

At minimum, include the goal, current progress, the actions taken with their observed results, the verification evidence, the remaining work, and any retry or failure history. Termination and escalation decisions depend on those fields. Domain facts are added on top, based on what each decision needs.

## Where should state live between runs?

State should live somewhere outside the model that the next run can read on its own. Common choices are a progress file, a database checkpoint, a trace or an issue comment. Pick based on scale and audience: files for single tasks, checkpoints for many cases, and comments when people need to follow along.

## How often should state be written?

Write state after every verification step, whether it passed or failed. On failure, record the evidence before retrying. On success, persist before choosing the next action. Writing at this rhythm means a crash loses at most one action's progress.

## How do I know my state representation is incomplete?

Watch for three signs: a fresh run repeats work already done, a model asks about facts you know exist, or a reviewer cannot explain why an action was taken. Each points to a missing field or a missed write. A useful test is to resume a killed run from the artifact alone and see what breaks.
