# Advisor Landing Template

An independent, static landing-page template for financial advisers, insurance agents, property professionals, local businesses, and independent professionals. The visual direction takes cues from the reference page's editorial typography, cream surfaces, deep red hero, portrait focus, clear navigation, and visible appointment action. All code and sample artwork here are independently maintained. No Carole photos, copy, logos, or production assets are included.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS 4
- Static export to `out/` for Cloudflare Pages
- No database, server routes, account system, paid package, or runtime image service
- Inline SVG icons and local placeholder artwork

## Run and build

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Open `http://localhost:3000`. The static build lands in `out/`.

## Customize a client site

Edit `src/config/site.ts` for identity, biography, services, colors, theme, contact details, booking links, social links, SEO, privacy link, and section visibility. Add approved images under `public/images/` and point the config to those files. Follow `CLIENT_SETUP.md` and `TEMPLATE_CUSTOMIZATION.md` for the full handoff.

Available themes are `executive`, `minimal`, and `small-business`. Change `theme` in the config. Set `colors` to override selected theme colors. The testimonial section appears only when at least one item has `approved: true`. The gallery appears only when it has approved images.

The initial profile is an example. It has no real client reviews or achievements. The sample privacy page is not ready for client launch until its data flows and retention details are confirmed.

## Separate client repositories

Set this master repository as a GitHub template. For each client, use GitHub's **Use this template** action to create a new repository. Each repository gets its own Git history, config, approved media, and Cloudflare project. Never put several client sites in one production repository.

## Cloudflare Pages

Use `npm run build` as the build command and `out` as the output directory. Read `CLOUDFLARE_DEPLOYMENT.md` before connecting a repository or domain. This build uses static Next.js export and does not need a Worker runtime.

## Project map

```text
src/
  app/                 Page, metadata, robots, sitemap, privacy page
  components/Sections.tsx
  config/site.ts       Client content, theme, and section flags
public/
  favicon.svg
  og-card.svg
  images/profile-placeholder.svg
CLIENT_SETUP.md
TEMPLATE_CUSTOMIZATION.md
CLOUDFLARE_DEPLOYMENT.md
```

## License

Choose and add a license that matches your commercial use before creating client copies or distributing this template.
