# FAQ: Writing Anti-Slop Design Review Rules for Taste Skill

## What counts as slop?

Patterns that show no decision was made: default gradients, the same layout repeated section after section, placeholder names and brands, decorative labels that carry no information, and fake screenshots. The Taste Skill default lists many of these under "AI tells." Your own list should come from what your agent actually produces, since models and prompts differ.

## Why write bans instead of describing good design?

Descriptions of good design are hard to check and easy for a model to satisfy loosely. A named ban with a replacement gives the agent a clear boundary and gives the reviewer something to search for. Keep positive guidance too, but let the bans carry the enforcement.

## How many rules should the list have?

As many as your evidence supports and no more. Each rule takes space in the agent's context and competes for attention. Order them by how often the pattern appears and move rarely triggered rules to a linked reference file.

## Should rules ever allow the banned pattern?

Yes, when the brief genuinely calls for it. Taste Skill allows a centered hero for manifesto-style launches and a purple palette when the brand is purple. Writing the override into the rule stops the agent from either ignoring the brief or breaking the rule without saying so.

## Does a pre-flight checklist replace human review?

No. It removes the most common patterns before a person looks, so review time goes to judgment calls instead of repeated comments. Keep a human review for customer-facing work and feed anything that slips through back into the rules.
