# FAQ: Implementing AI Self-Critique and Revision

## How many revision rounds should I run?

The original paper found the first revision almost always removed most of the harm, and later rounds gave smaller gains that were harder to see by inspection. It also found helpfulness scores fell as revisions increased. Start with one round, try a second on a sample, and keep extra rounds only if reading them shows a real improvement.

## Is the critique step necessary?

Not strictly. The paper compared critiqued revisions with direct revisions and found critiques helped smaller models and made little difference for large ones. The authors kept critiques because they show the model's reasoning, which also makes debugging much easier for a team.

## Can the same model critique and revise its own output?

Yes. In the original method the same helpful model writes the first draft, the critique and the revision, guided by the constitution and a few examples. The model does not need to be safety-trained for this; it needs to follow instructions well.

## What goes into the training data?

Each example is the original prompt paired with a revised answer. The paper trained on revisions from every round and mixed in the helpful model's answers to ordinary prompts so the fine-tuned model stayed helpful. You can also build preference pairs with the revision as the chosen answer and the first draft as the rejected one.

## Can I run the loop at inference time instead of training on it?

You can, as a review step on generated text, but it multiplies the number of model calls per answer and the critiques can still be wrong. In Constitutional AI the loop is a way to create training data, so the trained model produces the revised kind of answer in one pass.

## What are the signs the loop is going wrong?

Critiques that invent problems in harmless answers, revisions that refuse when engagement was possible, revisions that repeat the same reassuring phrases, and outputs where critique and revision are swapped. Track these per principle, because they usually trace back to one badly worded principle or example.
