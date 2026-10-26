# Cloudflare Pages deployment

This is a static Next.js export. It does not use server actions, API routes, middleware, authentication, database access, or runtime image optimization.

## GitHub connection

1. Create a separate GitHub repository from the template for the client.
2. In Cloudflare, open **Workers & Pages**, select **Create application**, then **Pages** and **Connect to Git**.
3. Authorize access to only the client's repository where possible.
4. Select the client repository and production branch, normally `main`.

## Build settings

| Setting | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `22`, pinned in `.nvmrc` |

Next.js writes HTML, CSS, JavaScript, metadata routes, and assets to `out/`. The project has no server runtime. It uses `trailingSlash: true` and `images.unoptimized: true` for the static export.

## Preview and production

Pull requests and non-production branches receive preview deployments when enabled in Pages. Review a preview before merging to the configured production branch. A merge or push to that branch starts a new build and deployment. Check the build log and the deployed site's mobile layout, metadata, links, image loading, privacy page, and disclosures.

## Custom domain and SSL

Add the domain under the Pages project custom-domain settings. Follow the DNS records Cloudflare shows for the chosen zone. Wait for domain verification and certificate issuance, then check both HTTPS and the `www` or apex hostname you intend to use. Do not change a client's registrar records until the client approves the change.

## Environment variables and secrets

This static site needs no environment variable and has no server secrets. Client content in `src/config/site.ts` and assets in `public/` are public after deployment. Never put tokens, passwords, private inquiry details, or API keys there. A browser-visible `NEXT_PUBLIC_*` value is public too.

## Troubleshooting

- Build fails before export: run `npm ci`, `npm run typecheck`, then `npm run build` locally with Node.js 22.
- A route or asset is missing: check its path and letter case. Confirm the file appears under `out/`.
- A route returns a 404: keep Next.js `output: "export"` enabled and review the exported trailing-slash route. Do not add a Worker for a static page.
- A social preview is blank: set the public domain in `seo.canonicalUrl`, set the share image path, rebuild, then test the metadata at the deployed URL.
- A custom domain is pending: review DNS, domain verification, and certificate status in Cloudflare.
