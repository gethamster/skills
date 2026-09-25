# FAQ: Scaling Constitutional AI Training Without Human Labels

## Does Constitutional AI need any human labels at all?

The original paper used no human labels for harmlessness, but it kept human labels for helpfulness and used human raters to evaluate its models. The authors expected helpfulness could also be learned without human feedback and left that to future work. Later research used AI labels for helpfulness too, with results comparable to human labels on the tasks tested.

## How much cheaper are AI labels?

Nathan Lambert's RLHF book estimates, as of 2026, that a human preference data point costs on the order of a dollar or more, while an AI label from a frontier model costs under a cent. The real saving is smaller once you add swapped-order labeling, chain-of-thought reasoning, validation and audits. Time also matters: AI labels are limited by inference capacity rather than by recruiting and scheduling labelers.

## Which labels should stay with people?

Keep people on the judgments that define the objective, on cases where the AI labeler disagrees with humans on your validation set, and on topics needing specialist knowledge. Later work summarized in Lambert's book found the best balance routes a set of challenging items to humans and sends the bulk to AI feedback. Final evaluation before deployment should stay human.

## Can generated prompts replace human red teamers?

They can add a great deal of volume, as the Constitutional AI paper did by generating most of its red-team prompts with a model. They can stay close to the seed prompts, though, so keep adding human-written prompts and run fresh human red teaming on finished models.

## What is the biggest risk of scaling this way?

The Constitutional AI paper names it: by reducing the need for human feedback, the method makes it easier to train and deploy models that people have not thoroughly tested. A human evaluation gate before deployment is the direct control for that risk.
