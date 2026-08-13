# DAMIT Real Estate Consultants

DAMIT Real Estate Consultants is a responsive real-estate website for property discovery, services, company information, and enquiry handoff through WhatsApp. The application is built with **Next.js App Router**, **React**, **TypeScript**, **Tailwind CSS v4**, and **Vitest**.

## Local development

Install dependencies with `pnpm install`, then start the development server with `pnpm dev`. The site is available at `http://localhost:3000` by default.

| Command | Purpose |
|---|---|
| `pnpm dev` | Start the Next.js development server. |
| `pnpm test` | Run the unit tests for property filters and WhatsApp enquiries. |
| `pnpm check` | Run the strict TypeScript check. |
| `pnpm build` | Produce a production Next.js build. |
| `pnpm start` | Serve the production build. |
| `pnpm format` | Format the repository with Prettier. |

## Application structure

The App Router lives under `app/`. The top-level page components are kept in `app/site.tsx` as a client component because the navigation, filters, and enquiry form require browser interaction. Route files compose those components into the public URLs below.

| Route | Purpose |
|---|---|
| `/` | Homepage with hero search, featured properties, approach section, and enquiry call to action. |
| `/properties` | Filterable sample property collection. |
| `/properties/[id]` | Property detail page with dynamic metadata and enquiry actions. |
| `/services` | DAMIT service overview. |
| `/about` | Company profile and differentiators. |
| `/contact` | Contact details and WhatsApp enquiry form. |
| `/sitemap.xml` | Generated sitemap for static routes and property detail pages. |
| `/robots.txt` | Crawler rules pointing to the generated sitemap. |

Pure business logic is separated into `app/lib/propertyFilters.ts` and `app/lib/enquiry.ts`. Their tests live beside them and currently cover **11 assertions across two test files**.

## Environment configuration

Copy `.env.example` to `.env.local` for local configuration. `NEXT_PUBLIC_SITE_URL` controls canonical URLs and social metadata. The storage proxy uses `BUILT_IN_FORGE_API_URL` and `BUILT_IN_FORGE_API_KEY` on the server only; these values must never be prefixed with `NEXT_PUBLIC_` or exposed to the browser.

The route `app/manus-storage/[...key]/route.ts` preserves the existing `/manus-storage/...` image paths by requesting a signed URL from the configured storage service and returning a temporary redirect. Without the server-side storage variables, the route returns a clear configuration error rather than exposing credentials or silently serving a broken response.

## Deployment notes

Use a Node.js runtime compatible with the installed Next.js version, set the variables from `.env.example` in the deployment environment, and run `pnpm build` followed by `pnpm start` for a self-hosted deployment. The production build has been verified with the public routes, dynamic property route, sitemap, robots policy, unit tests, and strict TypeScript checking.
