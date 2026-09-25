# Examples: Crafting Reusable Prompt Templates in LangChain

## Support ticket tagging

**Scenario:**

Illustrative scenario: a support team wants each incoming ticket tagged with up to five product-area keywords so tickets route to the right queue.

**Walkthrough:**

The developer writes a contract: keywords must come from a fixed list of product areas, lowercase, one per line, and an empty result when nothing matches. The template body holds those rules plus the allowed list as a configuration variable, with `{ticket_text}` as the only per-call variable wrapped in start and end markers. Testing on a labeled sample of ten tickets shows the model inventing areas not on the list, so the developer adds the rule 'return only items from the allowed list' and a parser that rejects anything else. After the change, invented areas disappear from the sample and off-list output raises a visible error instead of misrouting a ticket.

## One template, two content teams

**Scenario:**

Illustrative scenario: a blog team and a documentation team both need SEO keyword extraction but define good keywords differently.

**Walkthrough:**

Instead of two copied prompts, the developer keeps one template with `{domain_definition}`, `{examples}` and `{max_keywords}` as configuration variables and `{article_text}` as the per-call variable. A small builder fills the configuration values for each team, producing two ready-to-run templates from a single source file. When the documentation team reports duplicate keywords with different casing, the developer adds a lowercase rule to the shared body. Both teams get the fix at once, and each team's labeled sample is rerun to confirm neither regressed.

## Extraction inside a research agent

**Scenario:**

Illustrative scenario: an agent searches for papers with a tool and must extract keywords from each abstract it retrieves before deciding what to search next.

**Walkthrough:**

The developer starts from the ReAct pattern, keeping `{input}` for the research question and ending the prompt on the scratchpad variable so the runtime can append thoughts and tool observations. Extraction rules and the output format sit in the fixed body so they apply on every loop iteration. With verbose tracing on, the developer notices the model extracting keywords from the question itself rather than from retrieved abstracts. Adding an explicit instruction to extract only from tool observations fixes the behavior, confirmed by rereading the traced prompts on the next run.
