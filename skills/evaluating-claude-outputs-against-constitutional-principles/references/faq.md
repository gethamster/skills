# FAQ: Evaluating Claude Outputs Against Constitutional Principles

## How long should evaluating a single piece of Claude-generated content take?

A calibrated reviewer should spend 10-15 minutes per 1,500-word article once the rubric is established. The first few evaluations will take 20-30 minutes as you internalize the dimensions and anchor points. If you are consistently spending more than 20 minutes per piece after the first month, your rubric likely has too many dimensions or the anchor point descriptions are ambiguous. Simplify and recalibrate.

## Should I evaluate content before or after human editing?

Evaluate twice if resources allow: once before editing to assess Claude's raw output quality (this feeds back into prompt improvement), and once after editing to assess your published content quality. If you can only evaluate once, evaluate after editing. The published version is what readers and search engines encounter, so that is the version whose quality matters most. However, you lose diagnostic signal about prompt effectiveness when you only evaluate post-edit content, because the editor may have fixed problems you would want the prompt to prevent.

## Can I use Claude itself to evaluate its own content against constitutional principles?

You can, and it is useful as a first-pass filter, but do not rely on it as your only evaluation layer. Claude tends to rate its own output generously on dimensions like honesty and balanced perspective because it was trained to produce content that satisfies those criteria. Use Claude for a preliminary scan that catches obvious violations (unsourced statistics, superlatives without evidence, missing disclaimers), then have a human reviewer apply the full rubric. This hybrid approach is roughly 40% faster than pure human evaluation while catching about 80% of what a human reviewer would catch.

## How do I handle disagreements between reviewers on the same content?

Disagreements of one point on any dimension are normal and expected. Disagreements of two or more points indicate that the rubric definition or anchor points for that dimension are ambiguous. When you encounter a two-point gap, have both reviewers share the specific passages they cited and their rationale. Usually the disagreement traces to different interpretations of a sub-property.

Revise the sub-property wording to eliminate the ambiguity, then re-score the contested piece together. Document the resolution so future reviewers benefit from the precedent.

## How many dimensions should my evaluation rubric have?

Start with four: honesty, accuracy, balanced perspective, and helpfulness. These map directly to the most SEO-relevant principles in Claude's Constitution. Add a fifth dimension only when you encounter a recurring failure mode that the existing four do not capture, such as 'appropriate caution' for health or financial content, or 'brand voice consistency' for agency work. Going beyond six dimensions creates reviewer fatigue and reduces inter-rater reliability.

If you feel you need seven dimensions, check whether two of your existing ones can be merged.

## Why does my evaluation score keep drifting upward over time?

Score drift is the most common long-term failure mode. It happens for three reasons: reviewer familiarity (the same person reviewing similar content gets desensitized to subtle issues), rubric anchoring decay (reviewers gradually forget what a '3' looks like), and selection bias (you unconsciously prompt for content that scores well on the rubric without addressing the underlying quality gaps). Combat drift by recalibrating reviewers quarterly using a fixed reference set of pre-scored content, rotating reviewer assignments across content types, and periodically having an outside person evaluate a small sample blind.

## How does this evaluation process connect to AI SEO and getting cited by LLMs?

AI search engines like Perplexity and Google AI Overviews preferentially cite content that is accurate, well-sourced, and balanced. These are exactly the dimensions your rubric measures. Content that scores above 4 on accuracy (verifiable claims with sources) and above 4 on balanced perspective (fair treatment of alternatives) is significantly more likely to be selected as a citation source by AI systems. The evaluation process ensures your content meets the quality threshold that both human readers and AI citation algorithms reward, making it a practical claude content optimizer workflow for AI-era search visibility.
