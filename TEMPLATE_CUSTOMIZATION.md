# Template customization

## One-file setup

`src/config/site.ts` is the source of truth for the site content. It includes:

- Name, title, brand, logo, portrait, and image description
- Theme, font choice, and optional color overrides
- About story, experience, mission, and credentials
- Services with a small built-in icon set
- Client benefits and verified accomplishments
- Approved testimonials and gallery images
- Email, phone, location, Messenger, WhatsApp, Facebook, and LinkedIn
- Google Calendar, Calendly, and Messenger booking URLs
- SEO title, description, canonical URL, share image, and favicon
- A visibility flag for every optional section

The typed `SiteConfig` contract catches missing fields. `validateSiteConfig` checks essential values and hex colors at build time.

## Themes

Set `site.theme` to one of these values:

- `executive` uses a deep wine hero, ivory surfaces, restrained rose accents, and an editorial display face.
- `minimal` uses cool white surfaces, blue accents, simple corners, and clean typography.
- `small-business` uses warm paper colors, clay accents, soft corners, and friendly type.

Set `site.colors` only for colors that need a custom override. Set `site.font` to `editorial`, `modern`, or `friendly` when the theme's default font needs an override.

## Optional content

- A testimonial renders only if `approved` is true. The section stays hidden when there are no approved items.
- A gallery stays hidden when its list is empty.
- Accomplishments stay hidden when the list is empty.
- Set a `sections` flag to `false` to hide a section and its navigation link.
- Icons use `shield`, `compass`, `home`, `spark`, `chart`, or `heart`.

## Images and metadata

Place client-owned or properly licensed images in `public/images/`. Use descriptive alt text. Do not copy images or logos from a reference site. The included portrait and social card are original placeholders.

Set `seo.canonicalUrl` after a domain is chosen. Set `seo.openGraphImage` to a client-approved share image. The project emits a canonical link, Open Graph and X card metadata, `robots.txt`, and `sitemap.xml` from this config. The JSON-LD person record uses the profile fields in the same file.

## Contact and booking

Booking buttons prefer Calendly, then Google Calendar, then Messenger, and finally the contact email. Add only links the client owns or approves. The contact form opens a prefilled email draft on the visitor device. It does not transmit or store inquiry details. To collect submissions online, add an approved form provider and revise the privacy notice first.

## Finance and insurance content

Use accurate titles and credentials. Do not promise investment returns, coverage, eligibility, or approval. Add a disclosure suited to the client's role, license, products, and jurisdiction. Ask the client to approve it before publishing.
