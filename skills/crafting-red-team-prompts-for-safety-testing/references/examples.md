# Examples: Constitutional AI Red Teaming with Adversarial Prompts

## Building a first red-team set for a support assistant

**Scenario:**

Illustrative scenario: a team preparing Constitutional AI training for a customer-support model has no red-team prompts at all. Their taxonomy lists fraud, harassment, privacy and self-harm, plus sensitive-but-legitimate topics such as billing disputes and account security.

**Walkthrough:**

Three people each write a few dozen prompts per category, including multi-turn conversations that start with an ordinary support request and escalate. The team then few-shot prompts a model with those seeds, one category at a time, and keeps the plausible outputs after deduplication.

They set aside a held-out pool that includes every multi-turn seed and a set of safe contrast prompts, such as a user asking how to report a fraudulent charge. The rest goes into the training pool for the critique and revision loop.

## Finding a role-play weakness after training

**Scenario:**

Illustrative scenario: after a round of Constitutional AI training, the model's harm rate on the held-out pool is low, and the team runs its jailbreak variants before release.

**Walkthrough:**

Direct requests are handled well, but role-play variants that ask the model to act as a character with no rules get harmful answers on a noticeable share of prompts in two categories. The base prompts for those variants pass, so the weakness is in the attack style.

They add training prompts with role-play framing in those categories and a principle asking the model to stay itself when asked to adopt a persona that would cause harm. The next round's held-out results for role-play variants improve, and the team adds new role-play variants to the held-out pool so the fix is tested on prompts it did not train on.

## Catching over-refusal in the red-team results

**Scenario:**

Illustrative scenario: a team's red-team report shows a sharp drop in harmful answers after training, and the release looks ready.

**Walkthrough:**

The safe contrast prompts in the held-out pool tell a different story: the model now refuses many ordinary questions about medication schedules and home security. The harm rate improved partly because the model refuses whole topics.

They pass the findings to the owners of the constitution, who narrow two principles, and to the training team, who add helpful answers on those topics to the supervised data. The next report shows both numbers side by side, which becomes the standard format for every red-team review.
