# Examples: Analyzing SEO Waterfall Charts for Page Performance

## Example: Diagnosing a Slow LCP on an E-commerce Product Page

**Scenario:**

An e-commerce site's product pages have an LCP of 4.8 seconds in Google Search Console field data. The development team claims the pages are fast because they load quickly on their machines. You need to diagnose the actual bottleneck using a waterfall analysis.

**Walkthrough:**

Run a WebPageTest analysis from a US East location on a 4G Mobile connection. The waterfall reveals the following chain:

1. HTML document: TTFB of 380ms, download 120ms (500ms total — acceptable)
2. Main CSS bundle (285KB): starts at 500ms, render-blocking, finishes at 1,400ms
3. jQuery + main.js (180KB): synchronous, starts at 500ms, finishes at 1,600ms — blocks rendering
4. Google Tag Manager: starts at 1,600ms, spawns 8 additional third-party requests
5. Hero product image (LCP element): starts at 2,200ms — browser didn't discover it until JavaScript executed because the image URL is dynamically injected by a React component
6. Product image finishes downloading at 4,200ms — that's effectively our LCP

The diagnosis is clear: the LCP image has a three-step dependency chain (HTML → JS → image discovery → image download). The fix priority:
- Add `<link rel="preload" as="image" href="/product-hero.webp">` to the HTML `<head>` so the browser discovers the image immediately — this alone eliminates ~1,800ms of delay
- Defer Google Tag Manager with `async` and move it below the fold script
- Split the CSS bundle to inline critical above-fold styles (~15KB) and async-load the rest

After these changes, the waterfall shows the LCP image starting at 500ms instead of 2,200ms, and the new LCP is 2.1 seconds — passing the Core Web Vitals threshold.

## Example: Identifying Third-Party Script Bloat on a Content Publisher's Article Pages

**Scenario:**

A news publisher's article pages score 38 on Lighthouse Performance. They've already optimized images and enabled a CDN. The team is stuck and doesn't know what's causing the remaining slowness.

**Walkthrough:**

Open Chrome DevTools Network tab, disable cache, throttle to Fast 3G, and load a typical article page. Sort the waterfall by 'Domain' in the filter bar to count unique third-party origins.

The waterfall reveals 47 third-party requests across 18 different domains — ad networks, analytics, social widgets, consent management, and A/B testing tools. Each new domain requires its own DNS lookup (50-150ms) and TLS handshake (100-200ms). Total third-party transfer size: 1.8MB.

Critically, 3 of these scripts are loaded synchronously in the `<head>` before any content renders: a consent management platform (CMP), an A/B testing script, and a header bidding wrapper. Together, they add 2.4 seconds before Start Render.

The optimization plan, executed in [Waterfall methodology](https://tryhamster.com/methods/waterfall) phases:
- Phase 1: Move the A/B testing script to async loading, accepting a slight flash risk for a 900ms Start Render improvement
- Phase 2: Lazy-load social sharing widgets and comment sections so they only load when scrolled into view — removing 12 requests
- Phase 3: Consolidate analytics into a single server-side pipeline, eliminating 6 client-side tracking scripts
- Phase 4: Work with the ad ops team to implement lazy-loaded ad slots for below-fold positions

The post-optimization waterfall shows 23 requests from 8 domains, with Start Render dropping from 3.8s to 1.4s. Lighthouse jumps to 72.
