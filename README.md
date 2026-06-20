# Tidebreak Creative — Agency Website

A multi-page static website built for Vercel.

## Pages

- `index.html` — Home (hero, problem/approach/result, all 4 pillars with proof, stats, contact)
- `services.html` — Services (the 4 pillars explained, engagement process)
- `intelligence.html` — Market Intelligence deep-dive (the Tideline Score, sample data visuals)
- `work.html` — Work (anonymized dermatology practice case study, process)
- `contact.html` — Contact

## Vercel Deploy Settings

- Framework Preset: `Other`
- Build Command: leave blank
- Output Directory: `./`

## Email

The site uses: `rob@tidebreakcreative.com`

Search for `rob@tidebreakcreative.com` across all files to update if needed. You'll want to
set up this inbox (or swap in your real one) before launch — it's referenced in `mailto:` links
on the homepage and contact page.

## Brand

- **Agency name:** Tidebreak Creative
- **Founder:** Rob Putaro
- **Proprietary system name:** Tideline Score — the clinic market-opportunity score described
  on the Market Intelligence page. This was coined for this build; rename freely if you'd
  rather use something else, just search-and-replace "Tideline Score" across the HTML files.

## Headshot

`assets/headshot.jpg` is your real photo, resized and compressed for web use (was 2MB,
now ~26KB at 440×550). To replace it, save a new image at the same path and re-deploy.

## Design Notes

This version moves away from the prior dark-earthy/bark palette toward a Southern
California coastal identity:

- **Palette:** deep marine ink, warm sand, Pacific teal, sea-glass green ("the break"),
  and a sunset clay accent used sparingly
- **Type:** Fraunces (display serif) + Inter (body/UI) + JetBrains Mono (data labels,
  used throughout the Market Intelligence sections to make numbers read like instrument
  data rather than editorial prose)
- **Signature element:** the "breakline" — a horizontal line in the hero that visibly
  breaks/steps down, echoing the agency name and the before/after framing of the work
- Each of the 4 services gets its own distinct visual proof (carousel mockup,
  browser/website mockup, data-map + device-adoption chart, treatment-journey rail)
  rather than 4 identical icon cards

## Motion

Beyond the original fade-up-on-scroll reveal, this version adds:

- **Directional slide-ins** (`.reveal-left` / `.reveal-right`) — content slides in from
  off-screen rather than just fading up. Used to alternate left/right between the 4
  services so they read as distinct, independent offers rather than one repeating block.
- **Scale-in reveals** (`.reveal-scale`) — proof cards (carousels, browser mockups, data
  panels) start slightly smaller and scale up to full size as they enter view.
- **Continuous parallax** (`data-parallax` attribute) — the hero breakline drifts at a
  different rate than the rest of the page as you scroll, for a sense of depth.
- **Scroll-driven drift/zoom** (`data-drift` attribute) — used on stat numbers and case
  study metrics; each one starts small/faded and grows to full size and opacity as it
  crosses into view, independent of its neighbors.
- All motion respects `prefers-reduced-motion` and falls back to a static, fully-visible
  state with no animation.

## Positioning: standalone services, not a bundle

Per a copy review pass, the site no longer frames the 4 services as one connected
system you need to buy into together. Each service (Content & Social, Website Systems,
Market Intelligence, Patient Education Infrastructure) is positioned as something a
clinic can hire Tidebreak for on its own. Combining them is presented as a bonus, not
a requirement. If you add new sections later, keep this framing — avoid language like
"one system," "connected pillars," or "the full ecosystem" on any client-facing page.

## What I Would NOT Change (per Rob's brief)

Keep these — they're the differentiator:
- Tideline Score
- Market Intelligence page
- 6,800+ clinic database references
- Competitive analysis angle
- Device adoption tracking
- Opportunity reports

## Data Disclosure

The market intelligence visuals (saturation map, device adoption bars, Tideline Score)
on the homepage and `intelligence.html` are illustrative samples for demonstration —
not pulled from a live data feed. Swap in real chart data/screenshots from your actual
clinic database before this goes live, especially anywhere a prospective client could
reasonably expect to see their own market reflected.

## Case Study Disclosure

The dermatology case study on `work.html` is anonymized ("a dermatology practice") per
your direction — no real clinic name, logo, or specific identifying content is used.
If you get sign-off to use the real name/screenshots later, swap in the specifics and
consider adding a testimonial quote with attribution.

## Editing Copy

For simple copy edits, open the relevant HTML file and search for the visible sentence.
Then edit, commit, and push to `main`.

## Contact Button

The primary contact CTA is a `mailto:` link in `contact.html` and `index.html`.
