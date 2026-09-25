# Examples: Designing FAQ-Based Site Architecture for SEO

## Converting a single FAQ page into answer pages

**Scenario:**

A software company has one long FAQ page with dozens of collapsed questions about billing, setup and security, and none of them show up as answers in search.

**Walkthrough:**

Illustrative scenario: the team exports the FAQ page's questions and finds about 40 entries, with roughly 10 that are duplicate phrasings. After merging, 30 distinct questions remain, and each becomes its own page under a question heading with a short answer at the top. The original FAQ page is kept as a hub that lists the questions by theme and links to each answer page. FAQ schema moves from the hub to the individual pages, generated from the same heading and answer fields.

Every new page links to the company's About page as its entity home, completing the structure.

## Fixing markup drift on an answer site

**Scenario:**

A publisher has answer-first pages, but its FAQ markup was written separately by a developer and no longer matches what editors have since changed on the pages.

**Walkthrough:**

The team audits a sample of pages and compares the question and answer in the markup with the visible heading and opening lines. Many pages show the old wording in the schema and updated wording on screen. They restructure the content model so the question and short answer are named fields. The page template and the schema are both rendered from those fields, so an editor's change updates both at once.

After rollout, the team adds a markup validation check to the publishing workflow so drift cannot return unnoticed.

## Building an entity home for a consultancy

**Scenario:**

A small consultancy publishes useful answer pages under several authors, but the site has no page that clearly states who the firm is or what it specialises in.

**Walkthrough:**

The firm chooses its About page as the entity home and rewrites it to state plainly who it is, what it does and which subjects it answers questions about. It adds a publisher block to the answer page template that links to the About page. The team reviews existing answer pages for claims of expertise that the About page does not support and either removes them or adds the relevant background to the About page. New question areas are added to the entity home before pages in that area are published.

The answer pages now read as one firm's body of work rather than scattered posts.
