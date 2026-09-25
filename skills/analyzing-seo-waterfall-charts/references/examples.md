# Examples: Analyzing SEO Waterfall Charts for Page Load Speed

## A hero image discovered late

**Scenario:**

Illustrative scenario: a recipe site's article template fails LCP in field data on mobile. The LCP element is the large photo at the top of each article.

**Walkthrough:**

The analyst captures an uncached, throttled waterfall. The HTML arrives quickly, but the hero photo does not start downloading until well after a large JavaScript bundle has finished, because a carousel script inserts the image into the page. The photo's own download is short. Almost all of the LCP time is resource load delay.

The fix is to put the first image in the HTML as a normal image element with `fetchpriority="high"` and let the carousel take over after render. The new waterfall shows the photo starting alongside the stylesheet. The team records the release date and watches field LCP over the following weeks.

## A stylesheet chain on a category page

**Scenario:**

Illustrative scenario: an online shop's category pages show a blank screen for a noticeable moment on mid-range phones. Start Render in WebPageTest comes much later than the HTML response.

**Walkthrough:**

The waterfall shows the main stylesheet loading, and only after it finishes, a second stylesheet and a web font that the first one imports. Both sit before Start Render. The chain adds two round trips before anything can paint.

The team inlines the small amount of CSS needed for the top of the page, loads the rest without blocking render, and moves the font reference into the HTML with a preload hint. The follow-up waterfall shows all three requests starting together and Start Render moving earlier. They apply the same change to the shared template so every category page benefits.

## Slow server response hiding behind a fast front end

**Scenario:**

Illustrative scenario: a news site has already deferred its scripts and optimized its images, yet LCP is still poor on article pages.

**Walkthrough:**

The analyst opens the timing breakdown of the HTML document and finds that most of the time is in the Waiting segment, the time to first byte. Every other request starts late simply because the HTML arrives late. No amount of front-end work would fix this.

The finding goes to the platform team with the waterfall attached. They discover that article pages are rendered on every request instead of being served from cache. Once caching is fixed, the whole waterfall shifts left, and the front-end fixes made earlier finally show their effect.
