# Article Anatomy — Skill Launch Format

Extracted from dexhorthy's show-me article (Aug 2026), the reference piece for this format. Eight sections, in order. Section headers are lowercase, casual, and short. The article is a visual tour with connective prose, not an essay with illustrations.

## Section-by-section

### 1. tl;dr block

One sentence stating the reframe, then the get-it block in a code/link block. No greeting, no windup.

> tl;dr make your agent converse visually instead of in walls of prose.
> `npx skills add humanlayer/skills --skill show-me`

Ours: one sentence + the skill's tryhamster.com link or "add [skill] from your library in Hamster." Optionally one qualifier line after ("Lighter and faster than HTML, good enough for most dev-work shaped problems" was dex's). The get-it block appears three times total: here, in the proposal, and in the closer.

`[IMG-01 — portrait or square: hero shot of the skill's OUTPUT. The result, not the invocation. The reader should want this before reading a word of explanation.]`

### 2. the pain, socially proven

H2 naming the problem plainly ("Coding agents are pretty much unreadable"). Then 3-4 embedded posts from the source pack, each introduced by a one-line attribution that establishes credibility:

> The former CEO of reddit:
> [embedded post]
> Mario Zechner, creator of pi:
> [embedded post]

If prior art exists (a crude community fix), it goes here: embed the post, credit the popularizer AND the originator ("Dillon Mulroy even popularized a skill from @backnotprop..."), and quote the workaround's contents in a blockquote. The crude fix proves demand.

Zero words about the solution in this section. The pain sells itself.

### 3. the personal stake

Short, emotional H2 ("i am so sick of this"). Three or four lines of prose, each its own paragraph, tracing the consequence chain in Eyal's voice. This is where the hamster-content consequence-chain rules apply: observable problem → where the cost lands → the line that stings ("its 'soul' has been flushed out in the RL dungeon" was dex's).

`[IMG-02 — portrait or square: the problem happening to YOU. A real screenshot of the pain in your own workflow. "here's a response i got recently. this happens multiple times a day."]`

### 4. the proposal

H2: "my proposal: [name]" or just the skill name. Contents, in order:

- One or two sentences announcing it ("We've been playing with internal tools to make this better... publishing them in a skill we call show-me")
- The get-it block, second appearance
- Alternate access path if one exists (dex had the brew tap; ours might be "or run it inside Hamster where it reads your team's context")
- Intellectual grounding: a talk, essay, or idea it's inspired by. Link it, summarize in 2-3 bullets, and pull one quotable line into a blockquote ("Just as an axe must fit the human hand to be useful, software must fit the human mind to be useful")
- Bold `/command` + one line of what it does

`[IMG-03 — wide banner: the command being invoked]`
`[IMG-04 — portrait: what came back]`

One or two sentences on the highest-value use case, linking supporting material if it exists.

### 5. what's inside

H2 "What's inside", then a lowercase sub-heading per component of the skill. Per component:

- 1-2 sentences: what it is, when it earns its place. Not a feature list; a "here's when you reach for this."
- `[IMG-nn]` or a real code block showing it. Code blocks render in X longform; use them when the component IS text (types, pseudocode, a prompt).
- If a component's pattern came from someone else, embed their original post right there and credit them by name. Dex embedded Dillon's call-stack post and Tanishq's AST tool under the components they inspired. Credit at the point of use, not in a footer.

Component count: whatever the skill actually has, typically 4-9. Every component gets a visual or code block. No component gets more than 2 sentences of prose.

### 6. other inspiration

Optional H2. Hat tips to adjacent work with a visual ("I also wanna hat tip @mattpocockuk for the html explainers... very good"). One or two max. Generosity here is strategy: the people you credit share the article.

### 7. go try it

H2 "go try it". Contents:

- Get-it block, third appearance
- Invocation instructions: what to point it at ("Point it at a route, service, feature, pull request, or current topic")
- Two example prompts in blockquotes, verbatim things the reader can paste:

> this is too much content. show me.

- CTA: tag @usehamster or @eyaltoledano with results or customizations, "let's riff"
- `[IMG-FINAL — wide: closing GIF or screen recording of the skill doing its thing]`

### 8. (third-party mode only) running it in Hamster

When the article covers someone else's skill, add a short section before "go try it": what changes when the skill runs with your team's context in Hamster, and if a companion routine exists, one line teasing it ("we also run this on a schedule; that article is next"). Two or three sentences plus one visual. This is the only section where Hamster is the subject, and it is additive: the skill is great, here is where it compounds.

## Format conventions

- **Get-it block appears 3x**: tl;dr, proposal, closer.
- **Visual density**: the reference piece ran ~16 images, 6 embedded posts, 5 code blocks, 1 closing GIF across 8 sections. Match the density, not the exact count. If a claim has no visual, either capture one or cut the claim.
- **Prose ceiling**: 3 sentences between any two visuals. If you wrote a paragraph, you are explaining instead of showing.
- **Blockquotes** for: quoted workaround contents, the grounding quote, example invocation prompts.
- **Embedded posts**: X posts embed natively in X longform. Reddit or off-platform finds get quoted as text with a link.
- **Headers**: lowercase, casual, short. "what's inside" not "What's Inside: A Component Breakdown."
- **Links**: link the grounding talk, the skill page, credited people's handles, and supporting deep-dives. Nothing else.

## Voice (compact, in case this skill travels without hamster-content)

Full rules live in the `hamster-content` skill; read them if available. The floor:

- No em dashes anywhere. No "not X but Y" constructions. No staccato dramatic rhythm. No corporate filler.
- Lowercase throughout on X, including headers.
- No "nobody talks about X" openers or closers. No "here's the truth about."
- Never invent product mechanics, commands, or scenarios. Never fabricate quotes or engagement numbers. Never cite exact follower counts.
- Consequence chain in the personal-stake section: trace where the cost lands on a real person in a real workflow moment, in 3 sentences not 5 paragraphs.
- State what we built as fact, not pitch. The CTA is implicit until the closer.
- Credit generously, by name, at the point of use.

## Pre-delivery checklist

1. Does the pain section sell the problem entirely through other people's words?
2. Is every product claim grounded in the skill's actual SKILL.md or docs? Zero invented mechanics?
3. Get-it block present 3x, and is it the REAL path (or a flagged placeholder), not an invented command?
4. Does every component in "what's inside" have a visual or code block?
5. Is anyone whose pattern appears credited at the point of use, with their post embedded where possible?
6. Any prose run over 3 sentences between visuals?
7. Two verbatim, pasteable example prompts in the closer?
8. Voice pass: em dashes, "not X but Y", preachy rhythm, invented numbers — all absent?
9. Shot list complete: every [IMG-nn] slot numbered with description and orientation?
10. Gaps list honest: every claim without a source or capturable visual flagged?