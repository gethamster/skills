# FAQ: Drafting AI Constitution Principles for Constitutional AI

## How many principles should an AI constitution have?

There is no fixed number. The original Constitutional AI paper used 16 critique and revision pairs and 16 comparison principles, and Anthropic's collective experiment compared a public constitution against an Anthropic-written one of 58 principles. The paper found that adding more principles did not raise harmlessness scores but did make revisions more diverse. Start small, cover each concern once or twice, and add principles when a pilot shows a gap.

## Should principles be general or specific?

Mostly general, with a few specific ones where you need precise control. Anthropic reported that long, specific principles tended to hurt generalization, and later research found that the largest models could generalize from a single broad principle. The same research found detailed principles still improved control over particular harms.

## Can I rank principles so the important ones win?

Not through the constitution's order. During Constitutional AI training one principle is sampled at a time, so the model never sees a ranking. Put the priority into the wording of each principle, or enforce absolute limits with a separate mechanism such as input and output filtering.

## Where should candidate principles come from?

Published sets are a good starting point because they have been used in real training runs: the appendix of the original paper, Anthropic's 2023 list, and the public constitution from the collective experiment. Add principles written from your own model's failures on red-team prompts. Record the source of each one so reviewers can see why it is there.

## Do I need to write principles about tone?

Yes, if you care how refusals sound. Anthropic added principles against condescending or preachy answers after its model became judgmental, and the paper saw over-trained models add the same reassuring boilerplate to many answers. Tone principles are also how you give a product its own refusal style.

## What is the difference between this and Claude's published constitution?

This skill covers the short, instruction-style principles used in Constitutional AI training. Anthropic's January 2026 constitution for Claude is a document that explains the reasons behind the behavior it asks for, and it is covered on its own page, [Claude's Constitution](https://tryhamster.com/methods/claude-s-constitution).
