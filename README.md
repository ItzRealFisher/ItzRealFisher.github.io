# ItzFisher v3

A static personal portfolio, developer hub and promotion directory built with Vite, React, TypeScript and Tailwind CSS. It is designed to stay useful when projects are dormant.

## Development

```bash
npm ci
npm run dev
```

The development server binds to `http://127.0.0.1:5173`. Run `npm run typecheck`, `npm run lint`, `npm run build`, and `npm test` before publishing changes.

## Content configuration

- `src/data/profile.ts` controls identity and short biography.
- `src/data/projects.ts` controls projects, project status, technologies, source, web, download and documentation URLs. Omit any URL to hide its button.
- `src/data/socials.ts` controls social landing pages. Set `verified: true` and `url` before an outbound destination becomes active. Candidate URLs deliberately remain inactive.
- `src/data/promotions.ts` controls contributions and third-party placements. Promotions can be disabled, prioritised, dated, marked featured, and disclosed as sponsored when appropriate.

Each configured project and social/promotion landing page is rendered through reusable components. Add a configured route to `scripts/generate-static-routes.mjs` when adding a new public slug so the production output gets an individual HTML document and metadata.

## Build and deployment

`npm run build` writes Vite assets to `dist`, creates route-specific `index.html` files, a 404 page, and an XML sitemap. `public/CNAME` is copied to the output and retains the `www.itzfisher.org` custom domain. The existing GitHub Actions workflow is intentionally manual (`workflow_dispatch`) and deploys the `dist` directory to GitHub Pages.

Do not push, merge, or deploy until the work has been reviewed.

## Public v3 preview

The production site remains the committed `main` branch. v3 is built from `rebuild/v3` and is published separately at `https://www.itzfisher.org/preview/`.

```bash
npm run build          # production-style v3 build at dist/ (for eventual promotion)
npm run build:preview  # preview build at dist-preview/ with /preview/ assets and URLs
npm run test:preview-output
```

The preview build creates individual nested HTML files, canonical URLs below `/preview/`, `noindex, nofollow, noarchive` metadata, and a small in-site preview banner linking to the live root website.

The manual Pages workflow checks out `main` into `production/`, builds/tests it, then checks out `rebuild/v3` into `preview-source/`, builds/tests it, and uploads one artifact with production at `/` and v3 at `/preview/`. The root CNAME comes only from production; the preview CNAME is removed during assembly.

To publish after approval: first commit and push only `.github/workflows/deploy.yml` to `main` (GitHub only exposes manual workflows from the default branch; this changes no website files). Then commit and push the reviewed v3 changes to `rebuild/v3`, open **Actions → Build production and v3 preview → Run workflow** from `main`, and run it. The workflow always uses remote `main` for the root and remote `rebuild/v3` for the preview. No v3 merge is needed for preview publishing.

To remove the preview, delete the preview-source checkout/build/copy steps in the workflow and redeploy. To promote v3, merge or otherwise replace `main` only after review, then simplify the workflow to deploy `main/dist` at the root.

## Known limitations

The public GitHub API is unauthenticated and can rate-limit; the developer hub handles timeout/failure but does not cache between page loads. WeedFlix and WeedTunes need official URLs/logos/descriptions before an external button or asset can be shown. Several historical and newer project entries intentionally have `Unknown` status because release/maintenance information is unavailable.
