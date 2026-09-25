---
name: "constitutional-ai"
category: "Development"
description: "Constitutional AI is Anthropic's method for training a harmless, non-evasive assistant from written principles, self-critique and RLAIF."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Constitutional AI: Self-Critique, Revision and RLAIF

> Created by **Yuntao Bai, Jared Kaplan and colleagues at Anthropic** - [https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback)

## Overview

Constitutional AI (CAI) is a training method from Anthropic, introduced in the December 2022 paper [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073) by Yuntao Bai, Jared Kaplan and colleagues. It trains an AI assistant to be harmless without any human labels that identify harmful outputs. The only human oversight is a short list of principles written in plain language, which the authors call a constitution, plus a small number of examples used for few-shot prompting. Training runs in two phases: supervised learning on the model's own critiqued and revised answers, then reinforcement learning from AI feedback, which the paper named RLAIF.

The method grew out of a problem in Anthropic's earlier work. In [Training a Helpful and Harmless Assistant](https://arxiv.org/abs/2204.05862), the team used human preference labels (RLHF) to train an assistant for both helpfulness and harmlessness. The [Constitutional AI paper](https://arxiv.org/pdf/2212.08073) reports that the resulting assistant often refused controversial questions and could get stuck giving evasive answers for the rest of a conversation, because crowdworkers had rewarded evasiveness as a response to harmful requests. CAI set out to train an assistant that still declines unethical requests but always engages and explains its objections. The paper lists three further motivations: using AI systems to help supervise other AI systems, making the principles behind a model's behavior explicit, and shortening iteration time, since changing the objective no longer means collecting a new set of human labels.

The supervised phase starts from a helpful-only model that has not been trained for harmlessness. That model answers red-team prompts, which are prompts written to draw out harmful behavior, and its first answers are often harmful. A critique request drawn from the constitution is then appended, and the model writes a critique of its own answer. A revision request follows, and the model rewrites the answer in light of the critique. The loop can repeat with a different, randomly drawn principle each time. A pretrained model is then fine-tuned on the revisions, mixed with ordinary helpful answers so it stays useful. The paper calls this model SL-CAI.

The reinforcement learning phase replaces human harmlessness labels with AI labels. The SL-CAI model writes two answers to each harmful prompt. A separate feedback model is shown the conversation, one principle, and both answers as a multiple-choice question, and its probabilities for option A and option B become a soft preference label. Those AI labels for harmlessness are mixed with human labels for helpfulness, a preference model is trained on the mix, and the SL-CAI model is fine-tuned with reinforcement learning against that preference model. Human feedback was still used for helpfulness in the paper. Only the harmlessness labels came entirely from AI.

The word "constitution" has been used for two different things since. In the paper, the constitution was a set of critique, revision and comparison instructions that the authors say were chosen "in a fairly ad hoc and iterative way for research purposes." In May 2023 Anthropic published [the principles it used to train Claude](https://www.anthropic.com/news/claudes-constitution), drawn from sources such as the UN Declaration of Human Rights and Apple's terms of service. In January 2026 it published [a new constitution](https://www.anthropic.com/news/claude-new-constitution) that explains the reasons for the behavior it asks for, where the earlier version was a list of standalone principles, and said the approach has grown out of the Constitutional AI techniques it has used since 2023. That document has its own page at [Claude's Constitution](https://tryhamster.com/methods/claude-s-constitution). This page covers the training technique.

Other groups have tested and reused the method. Researchers at Google compared the two approaches in [RLAIF vs. RLHF](https://arxiv.org/abs/2309.00267) and found that preference labels from an off-the-shelf language model gave performance comparable to human labels on summarization, helpful dialogue and harmless dialogue. Hugging Face published [an open recipe](https://huggingface.co/blog/constitutional_ai) that applies the critique and revision loop to Mistral 7B Instruct and trains on the result. Nathan Lambert's [RLHF book](https://rlhfbook.com/c/12-synthetic-data) describes CAI as "the earliest documented, large-scale use of synthetic data for RLHF training."

Few teams will train a frontier model, but the parts of the method work at smaller scale. A team fine-tuning an open model can use the critique and revision loop to build a training set, use a principle-guided feedback model to label preference pairs, and use the same prompts to grade outputs during evaluation. The skills below cover each of those pieces, from writing the principles to red teaming the finished model.

## Core Principles

### Written principles are the only harmlessness supervision

In CAI, people do not label individual outputs as harmful. They write the principles, and the model applies them. The paper describes this as encoding the training goals "in a simple list of natural language instructions or principles" ([Bai et al.](https://arxiv.org/pdf/2212.08073)). The practical effect is that changing what the model should avoid means editing text rather than commissioning a new labeling project. It also means the principles deserve the care a team would otherwise spend on labeling guidelines, because every label downstream comes from them.

### Critique before revising

The supervised phase asks the model to explain what is wrong with its answer before it rewrites it. In the paper's experiments, critiqued revisions scored as more harmless than direct revisions for small models and made no noticeable difference for large ones ([Bai et al.](https://arxiv.org/pdf/2212.08073)). The authors kept the critique step anyway because it gives more transparency into the model's reasoning. They also note that the critiques were often inaccurate or overstated, so a critique is a draft to check before anyone relies on it.

### Sample principles one at a time

The model does not check every principle on every pass. At each critique and revision step, and for each comparison label, one principle is drawn at random. Anthropic's [2023 explanation](https://www.anthropic.com/news/claudes-constitution) puts it this way: the model "does not look at every principle every time, but it sees each principle many times during training." The paper found that ensembling over principles made the preference model more robust than using a single principle for every label.

### Harmless without being evasive

A model that refuses everything is harmless and useless. CAI's revision and comparison instructions aim for answers that engage with a sensitive request and explain why the assistant will not help with the harmful part. The paper reports that RL-CAI was "virtually never evasive" on red-team prompts, and that crowdworkers evaluating the models were told to prefer the less evasive answer when two answers were equally harmless ([Bai et al.](https://arxiv.org/pdf/2212.08073)). The paper counts evasiveness as a failure mode in its own right.

### AI feedback replaces human labels where it is good enough

The paper replaced human labels only for harmlessness, and kept human labels for helpfulness. The authors describe their ultimate goal as making human supervision "more efficient, transparent, and targeted" ([Bai et al.](https://arxiv.org/pdf/2212.08073)). Before relying on AI labels, the authors checked how well language models could pick the better response on a set of helpful, honest and harmless comparisons, and found that ability improved with model size and with chain-of-thought reasoning.

### Soft, calibrated labels

The feedback model's normalized probabilities are used as targets rather than a hard pick of A or B. The paper found soft labels "led to much better results than hard labels" when no chain of thought was used ([Bai et al.](https://arxiv.org/pdf/2212.08073)). With chain-of-thought labeling the model usually commits to one answer, so the authors clamped its probabilities to a 40-60 percent range, because without clamping the trained models learned to give more extreme responses.

### Watch for over-training

A preference model is a proxy, and pushing a policy too hard against it degrades real quality, a pattern [Gao, Schulman and Hilton](https://arxiv.org/abs/2210.10760) measured for reward models in general. The CAI paper saw this directly: over-trained RL-CAI models became overly harsh or added boilerplate such as "you are valid, valued, and cared for" to most red-team answers ([Bai et al.](https://arxiv.org/pdf/2212.08073)). Rewriting principles to discourage over-reactive or accusatory answers helped.

## Constitutional AI Compared with RLHF and Later Variants

The table places the original method among the approaches that came before and after it. Each row names where the training signal comes from.

| Approach | Where the feedback comes from | What it showed |
|---|---|---|
| RLHF, as in [InstructGPT](https://arxiv.org/abs/2203.02155) and Anthropic's [HH assistant](https://arxiv.org/abs/2204.05862) (2022) | Human labelers compare or rank model outputs to train a reward model | The baseline CAI set out to improve on |
| [Constitutional AI](https://arxiv.org/pdf/2212.08073) (December 2022) | AI labels for harmlessness from 16 written principles, human labels for helpfulness | Less harmful at a given level of helpfulness, and non-evasive |
| [RLAIF vs. RLHF](https://arxiv.org/abs/2309.00267), Google (September 2023) | An off-the-shelf language model labels all preferences | Comparable to RLHF on summarization and dialogue tasks |
| [Collective Constitutional AI](https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input) (October 2023) | Principles drafted with about 1,000 members of the American public | Lower bias than the Anthropic-written constitution on nine social dimensions, equally helpful and harmless |
| [Specific versus general principles](https://arxiv.org/abs/2310.13798) (October 2023) | A single principle, roughly "do what's best for humanity" | The largest models generalized from it; detailed lists still gave finer control |
| [Constitutional Classifiers](https://www.anthropic.com/research/constitutional-classifiers) (February 2025) | A constitution used to generate synthetic data for input and output classifiers | Input and output filters that resist universal jailbreaks |

## Steps

1. **Assemble a helpful model and red-team prompts**
   Start from a model that follows instructions well and has not been trained for harmlessness, because the method needs harmful first drafts to correct. The paper used a helpful-only RLHF model. Collect prompts that try to draw out harmful behavior: the paper combined human-written red-team prompts from [Ganguli et al.](https://arxiv.org/abs/2209.07858) with many more generated by few-shot prompting a pretrained model. Also collect ordinary helpfulness prompts, which you will need later to keep the model useful. Check the red-team set for coverage across the kinds of harm you care about before generating anything.

2. **Write the constitution as instructions**
   Write each principle as a pair of instructions: a critique request that asks the model to find a specific kind of problem, and a revision request that asks it to fix that problem. For the reinforcement learning phase, write comparison principles in the form "choose the response that is more X." Keep each principle short and broad, since Anthropic found that longer, more specific principles tended to reduce generalization ([Anthropic, 2023](https://www.anthropic.com/news/claudes-constitution)). Add a few worked examples of critiques and revisions in the same format, which the paper used to stop the model confusing its critique and revision roles.

3. **Run the critique and revision loop**
   For each red-team prompt, sample the model's answer, append a randomly drawn critique request, sample the critique, then append the matching revision request and sample the revision. Repeat the loop a few times with fresh principles if you want a sequence of revisions. The paper found the first revision almost always removed most of the harm, with later revisions giving smaller gains that were harder to see by inspection. Read a sample of critiques and revisions by hand before scaling up, since critiques can overstate problems.

4. **Fine-tune on revisions mixed with helpful answers**
   Pair each red-team prompt with its revised answers, and add answers from the helpful model to the helpfulness prompts. Fine-tune a pretrained model on the mix, which produces the SL-CAI model. The helpful answers matter: Hugging Face's [open recipe](https://huggingface.co/blog/constitutional_ai) warns that the data needs enough helpful examples so the revisions do not "nerf" the model. Compare SL-CAI with the starting model on both harmlessness and helpfulness before moving on.

5. **Label preference pairs with a feedback model**
   Have the SL-CAI model write two answers to each red-team prompt. Show a feedback model the conversation, one randomly drawn comparison principle, and both answers as options A and B, and read off its probabilities for each option. Use the normalized probabilities as soft labels. If you ask the feedback model to reason step by step first, expect confident labels and clamp them, as the paper did. Swap the order of A and B on a sample to check for position bias, which [Lee et al.](https://arxiv.org/pdf/2309.00267) found in smaller labelers.

6. **Train the preference model and run RLAIF**
   Train a preference model on the AI-labeled harmlessness pairs mixed with helpfulness comparisons. The paper used human labels for helpfulness, and a team without them can try AI labels for both, as Lee et al. did. Fine-tune the SL-CAI model with reinforcement learning against the preference model, which gives the RL-CAI policy. Keep the policy from drifting too far from its starting point, and save snapshots at intervals so you can compare them.

7. **Evaluate with people and watch for over-training**
   Compare snapshots with human raters on both helpfulness and harmlessness, and tell raters to prefer a thoughtful, non-evasive answer when two answers are equally harmless, as the paper did. Look for the over-training signs the paper reported: overly harsh answers and the same reassuring boilerplate appended to many replies. When a behavior is wrong, the fix the method offers is to add or rewrite a principle and regenerate the data. Red team the final model again, since a new model has new weaknesses.

## When to Use

- You are fine-tuning or post-training an open model for a product and need harmlessness training data, but cannot afford to have people label thousands of harmful outputs. CAI turns a short list of principles into that data.
- Your current safety-tuned model refuses too often or lectures users. The method's explicit aim of harmless but non-evasive answers, and its comparison principles against preachy responses, target that failure.
- Your policy changes often, for example because legal or product requirements shift. Editing principles and regenerating labels is faster than recollecting human labels, which was one of the paper's stated motivations.
- You need to explain what values a model was trained on. The constitution is a short, readable artifact that reviewers can inspect and argue with.
- You are building preference data or an automated grader and want its judgments tied to named criteria. Principle-guided comparison gives each label a stated reason.

## When Not to Use

- You are building an application on a hosted model you cannot train. Constitutional AI is a training method, so use system prompts, evaluation and guardrails instead; the method's ideas can still shape your review prompts.
- Your helpful starting model is weak. The method depends on the model following critique and revision instructions and judging comparisons well, and the paper found that ability grows with model size.
- You need guarantees that specific content never appears. A trained model can still be jailbroken, and Anthropic itself added separate [Constitutional Classifiers](https://www.anthropic.com/research/constitutional-classifiers) to filter inputs and outputs for the most serious harms.
- The judgments require expertise the feedback model lacks, such as clinical or legal correctness. AI labels will be confidently wrong in those areas, so route them to qualified people.

## Skills

This method includes the following skills:

- [Drafting AI Constitution Principles for Constitutional AI](../../skills/drafting-ai-constitution-principles/SKILL.md): Write the critique, revision and comparison principles that drive every label in Constitutional AI training.
- [Generating Reinforcement Learning from AI Feedback (RLAIF)](../../skills/generating-reinforcement-learning-from-ai-feedback/SKILL.md): Produce principle-guided AI preference labels for harmlessness and turn them into a reward signal.
- [Scaling Constitutional AI Training Without Human Labels](../../skills/scaling-constitutional-training-without-human-labels/SKILL.md): Decide which labels AI feedback can replace, which still need people, and how to grow the pipeline.
- [Implementing AI Self-Critique and Revision](../../skills/implementing-ai-self-critique-and-revision/SKILL.md): Run the critique and revision loop that builds the supervised training set.
- [Evaluating AI Alignment with Preference Models](../../skills/evaluating-ai-alignment-with-preference-models/SKILL.md): Train, test and monitor the preference model that scores outputs against the constitution.
- [Balancing Helpfulness and Harmlessness in AI Responses](../../skills/balancing-helpfulness-and-harmlessness-tradeoffs/SKILL.md): Keep the trained model from becoming evasive, preachy or over-cautious while it becomes safer.
- [Constitutional AI Red Teaming with Adversarial Prompts](../../skills/crafting-red-team-prompts-for-safety-testing/SKILL.md): Build the red-team prompt sets that feed training and test the finished model.

## FAQ

**What is Constitutional AI in simple terms?**

It is a way to train an AI assistant to avoid harmful answers using a written list of principles instead of human labels on harmful outputs. The model critiques and rewrites its own answers against those principles, and is fine-tuned on the rewrites. Then another model compares pairs of answers using the same principles, and those comparisons train a reward signal for reinforcement learning. Anthropic introduced it in a [December 2022 paper](https://arxiv.org/abs/2212.08073).

**What is RLAIF, and is it the same as Constitutional AI?**

RLAIF, reinforcement learning from AI feedback, is the second phase of Constitutional AI: preference labels come from a model rather than from people. Constitutional AI also includes the supervised critique and revision phase, and it specifies that the AI feedback is guided by written principles. Lambert's [RLHF book](https://rlhfbook.com/c/12-synthetic-data) notes that the paper's title caused early confusion between the two ideas, and that RLAIF has since become a default method in post-training.

**How is Constitutional AI different from RLHF?**

Both train a preference model and then optimize a policy against it with reinforcement learning. In RLHF, people compare outputs to create the preference data. In Constitutional AI, a model makes the harmlessness comparisons using written principles, and the paper kept human comparisons only for helpfulness. The pipeline after the labels are made is the same, which the paper states directly.

**Does Constitutional AI remove humans from alignment?**

No. People write the principles, choose the prompts, and judge the results, and in the original paper they also supplied the helpfulness labels. The authors wrote that their goal was not to remove human supervision but to make it more efficient, transparent and targeted ([Bai et al.](https://arxiv.org/pdf/2212.08073)). They also warned that needing less human feedback makes it easier to deploy models that people have not tested thoroughly.

**What was in the original constitution?**

The paper used 16 principles for the supervised phase and 16 for the reinforcement learning phase, listed in its appendix and in Anthropic's [supplementary repository](https://github.com/anthropics/ConstitutionalHarmlessnessPaper). Many were similar, general instructions to remove harmful, unethical, racist, sexist, toxic, dangerous or illegal content, while others targeted areas such as advice for crime or content unsuitable for children. The principles Anthropic later used for Claude, published in [May 2023](https://www.anthropic.com/news/claudes-constitution), drew on a wider set of sources.

**Is Constitutional AI the same as Claude's constitution?**

No. Constitutional AI is the training technique. Claude's constitution is the document of values Anthropic trains Claude with, and its [January 2026 version](https://www.anthropic.com/news/claude-new-constitution) explains the reasons behind the behavior it asks for, where the earlier version was a list of standalone principles. The document is covered on its own page, [Claude's Constitution](https://tryhamster.com/methods/claude-s-constitution).

**Can I use Constitutional AI with open-source models?**

Yes. Hugging Face's [open recipe](https://huggingface.co/blog/constitutional_ai) generated critiques and revisions with Mistral 7B Instruct, using red-team prompts from Anthropic's public dataset and Anthropic's constitution, then trained with supervised fine-tuning followed by DPO on the preference pairs. They found they had to write their own few-shot examples, and that the self-critique step sometimes missed responses that broke a principle.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
