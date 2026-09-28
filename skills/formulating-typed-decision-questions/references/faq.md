# FAQ: Formulating Typed Decision Questions

## What is the difference between Choice, Score and Noul questions?

Choice selects one option from a list you define, Score places the state on a scale you describe, and Noul returns a calibrated probability that a statement is true. A [community reference](https://github.com/valentynkit/awesome-jev-typesafe) notes that Choice supports up to 255 options. Pick the type by the shape of the decision your code makes, not by the topic of the question.

## Why should each question contain only one judgment?

Each question returns a single typed value, and [the primitives documentation](https://docs.typesafe.ai/primitives) defines a question as one judgment about a state. When you pack two conditions into one question, a low answer cannot tell you which condition failed. Splitting them gives you separate signals that code can combine transparently.

## Can I ask several questions in one request?

Yes. The [quick start](https://docs.typesafe.ai/introduction/quickstart) shows mixing Noul, Choice and Score questions in one call against the same state. Because the questions are evaluated independently, none of them should rely on another's answer. Put any dependency between decisions into your code.

## How do I choose thresholds for Noul probabilities?

Treat thresholds as design decisions you write down before running, then tune them against sample states. A common pattern is a yes band, a no band and a middle band that routes to review, for example above 0.8, below 0.3, and in between. The costs of false positives and false negatives in your workflow should set how wide the middle band is.

## What should the state contain for good answers?

The state should contain everything a question refers to, because the model sees nothing else. [TypeSafe's state page](https://docs.typesafe.ai/concepts/state) gives a support message, a passage of text or application state as examples. Building and persisting that state is covered in the Representing Current Agent State skill.
