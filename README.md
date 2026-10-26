# Advisor Landing Template

A reusable, single-page website starter for financial advisors, insurance agents, real estate agents, and small business owners. It uses Next.js App Router, TypeScript, Tailwind CSS, and a static export that works with Cloudflare Pages.

## Start locally

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it yours

Edit `src/config/site.ts` to update the client name, title, brand, colors, biography, services, testimonials, gallery images, booking link, contact details, social links, and footer note. The page sections read from this file so each client can get a separate repository with one content pass. Update `public/favicon.svg` if you change the monogram.

Replace the sample photo URLs and `profileImageAlt` with client-approved images and accurate descriptions. You can use image files in `public/` with paths such as `/images/profile.jpg`. The template uses standard `<img>` elements so image delivery stays compatible with static export.

The two testimonial entries are marked as sample content. Replace them with real, approved quotes or remove the entries before publishing. Review the general-information note in the footer for the client's industry and jurisdiction.

Colors are set in `site.colors`. The layout adapts to those accent, ink, and paper values. Update the title and search description in `site.ts` to customize page metadata.

## Build the static site

```bash
npm run build
```

Next.js writes the static site to `out/`. This template does not use server actions, API routes, middleware, or runtime image optimization. Booking uses the external scheduling URL in the config. Contact links use `mailto:` and `tel:`.

## Deploy to Cloudflare Pages

1. Create a new GitHub repository for the client and push this project to its `main` branch.
2. In Cloudflare, open **Workers & Pages**, choose **Create application**, then **Pages** and **Import an existing Git repository**.
3. Select the client repository.
4. Choose **Next.js (Static HTML Export)** as the framework preset. Use build command `npm run build` and build directory `out`.
5. Deploy. Later commits to the connected branch trigger a new Pages build.

Keep each client's repository and Cloudflare project separate. Do not put client secrets in this static site. Anything bundled into a static export is public.

## Make a new client repository

Create a new GitHub repository, copy this template into it, customize `src/config/site.ts`, replace sample images and quotes, review every external link, then build and deploy the new repository. This keeps each client's content and release history independent.

## Project structure

```text
src/
  app/
    globals.css     Design system and responsive layout
    layout.tsx      SEO metadata and document shell
    page.tsx        Reusable landing page sections
  config/
    site.ts         Client content, branding, links, and images
```

## Accessibility and customization

- Semantic sections, headings, descriptive image alt text, and a skip link
- Keyboard-visible focus styles and a native mobile disclosure menu
- Responsive layouts and reduced-motion support
- No paid packages, third-party icon libraries, or runtime services

## Official setup references

- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Cloudflare Pages static Next.js export](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

## License

Add the license that fits your business before sharing or reselling client copies.
