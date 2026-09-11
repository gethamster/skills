# FAQ: Customizing and Extending gstack with Your Own Skills

## How do I create a custom skill if I've never written a gstack skill file before?

Start by copying an existing skill file that is closest to what you want to build. Read through its YAML frontmatter to understand the metadata fields, then read the system prompt body to see how instructions are structured. Replace the content section by section with your own conventions, keeping the structural pattern intact. This is much faster and less error-prone than writing from a blank file, and you will naturally absorb the formatting conventions that make skills parse correctly.

## How long should a custom gstack skill's system prompt be?

Aim for 50-150 lines of instruction in the system prompt body. Below 50 lines, you probably have not been specific enough and the AI will fill gaps with its own assumptions. Above 150 lines, instruction dilution becomes a real problem and the AI will start dropping individual rules. If your conventions require more than 150 lines, split them into two or three focused skills and chain them using gstack's power tools.

Measure by testing: if the AI consistently follows all instructions across three diverse inputs, the length is right.

## Should I customize existing gstack skills or create new ones from scratch?

Modify existing skills when your team's convention is an addition or refinement of the default behavior. Create new skills when you are covering a workflow or domain that gstack does not address at all. The practical test is: does invoking the default skill get you 70% of the way to the correct output? If yes, modify the existing skill by appending your conventions.

If the default skill produces output that is mostly irrelevant to your need, create a new one. Modifications are faster to build and maintain because you inherit upstream improvements automatically.

## How do I handle merge conflicts when pulling upstream gstack updates into my custom fork?

The cleanest approach is to isolate your custom additions into clearly marked sections within modified files, using comment markers like `<!-- CUSTOM START -->` and `<!-- CUSTOM END -->`. When pulling upstream, conflicts will be limited to those sections and easy to resolve. For entirely new skill files, there are no conflicts at all because upstream will never have a file with your custom filename. Run your test suite after every upstream merge to verify that no default behavior change broke your custom conventions.

## Can I share custom gstack skills across multiple projects that use different tech stacks?

Yes, but with care. Create skills that are parameterized by tech stack rather than hard-coded to one. For example, a 'testing conventions' skill can include conditional sections: 'If the project uses Jest, follow these patterns. ' Alternatively, maintain a shared base fork with organization-wide conventions (code review standards, commit message format) and project-specific forks that add stack-specific skills.

The organization fork stays upstream of project forks, creating a clean inheritance chain.

## Why does my custom skill produce inconsistent output between sessions?

Inconsistency almost always points to vague instructions in the system prompt. The AI interprets ambiguous phrasing differently depending on context window contents and token sampling. Review your skill for any instruction that uses relative terms like 'appropriate,' 'clean,' or 'follow best practices' without defining what those mean concretely. Replace each vague instruction with a testable assertion.

Also check that your output format section is explicit. If you say 'produce a review' without specifying the structure, the AI will invent a different structure each time.

## How do I measure whether my custom skills are actually improving my team's workflow?

Track two metrics. First, count convention-related corrections in code review per sprint, before and after deploying the custom skill. This is your primary effectiveness signal. Second, measure the time teammates spend manually editing AI output after invoking the skill.

If they invoke `/api-response` and then spend five minutes reformatting the output, the skill is not specific enough. A well-tuned custom skill should produce output that needs zero to one manual edits. Review these metrics quarterly and update skills that are not performing.
