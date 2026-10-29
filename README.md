# Adya Expo Designs — V6 Immersive Portfolio

A complete multi-page **Next.js 15 + TypeScript + Tailwind CSS 4** website. Premium white and light-blue aesthetic, pale-blue raised cards, fine motion, responsive layouts and a visual portfolio based on the 48-page company profile supplied by Adya.

## Start the website

```bash
npm install
npm run dev
# Open http://localhost:3000
```

For production:

```bash
npm run typecheck
npm run build
npm run start
```

Next.js dependencies require an internet connection for the initial `npm install`. This archive contains the source and images, not `node_modules`.

## What's new in V6

- **43 source-page portfolio entries**: all visual project pages 8–47, plus additional showcase imagery from pages 1, 5 and 6. Includes **two event-focused** spreads (pages 14–15).
- **9 deeply described service areas**, each with its own page, inclusion cards, recommended use cases, execution sequence, related portfolio examples and interactive FAQs.
- **173 optimized WebP images** cropped from the user-supplied company profile. Each project references its original PDF page and offers a four-image gallery with thumbnail switching and enlarged viewing.
- **Projects explorer**: category, industry and text filters, A–Z vs source order, switchable grid/list views and empty states.
- **Enhanced service directory**: visual editorial cards, pastel gradients, step-by-step planning guide and contact path.
- **Sitewide interactivity**: on-scroll reveals, animated hero gallery, brand-name marquee, dynamic reading progress, back-to-top, hover depth and accessible reduced-motion handling.
- **Mobile-first refinements**: fluid columns, 320px-safe layouts, tappable filters, swipe-aware image gallery and compact card layouts.
- Additional existing pages: Home, About, Manufacturing, Industries, Locations, Agency Partners, Contact and FAQs, plus metadata, sitemap and robots handling.

## Routes

| Page | Path |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Individual services (9) | `/services/[slug]` |
| Portfolio / project explorer | `/projects` |
| Individual projects (43) | `/projects/[slug]` |
| Manufacturing | `/manufacturing` |
| Industries | `/industries` |
| Locations | `/locations` |
| Agency partners | `/partners` |
| FAQs | `/faq` |
| Contact / quote form | `/contact` |
| Inquiry server route | `/api/inquiry` |

## Portfolio fidelity and status labels

The visual references in the PDF do not contain verified event dates, venues, stall sizes, fees, signed-client status or measured results. None have been invented. Project evidence labels are:

- **Completed installation**: on-site photographs are displayed on the source page.
- **Event installation**: event photos shown on source page.
- **Design concept**: rendered / visualized booth idea; **not proof of installation**.
- **Mixed documentation**: source page contains both renderings and installation/build photography.

Some entries have descriptive titles where brand identification is not clear. Cover/service-page images (pages 1, 5 and 6) are included as examples, not claimed to be distinct paid commissions. The client-logo collage comes directly from PDF page 7.

Website copy describing owned machinery, warehouse, skilled labour, two operational hubs (Delhi and Bengaluru), and pan-India availability is **user-provided company information**, not independently audited.

All project images are profile-page extracts. For publication, obtain the original full-resolution photos/renders and clearance to display each logo or client reference.

## Where to update content

- `lib/data.ts`: all project entries and services. New entries automatically show up in project filters, service cards and the sitemap.
- `public/images/portfolio/`: page-referenced PDF imagery.
- `components/ProjectExplorer.tsx`: project filters, layouts and sorting.
- `components/GalleryViewer.tsx`: full project galleries.
- `components/HomeMotion.tsx`: hero slideshow and brand marquee.
- `components/ExperienceExtras.tsx`: reading progress and service FAQs.
- `app/globals.css`: design system and responsive rules.
- `components/SiteShell.tsx`: navigation and footer.

## Enquiry setup (not live by default)

The existing `/api/inquiry` route needs a configured email sender before it can deliver leads. The form must not imply that inquiries have been received without API success. Copy `.env.example` to `.env.local`, configure the provider and a verified sender, and test end-to-end. Add rate limiting, bot protection and an appropriate privacy notice before public launch. The form currently provides an email-draft fallback if the API is not configured.

## Run / QA notes

- Source TypeScript/TSX syntax and CSS are statically validated.
- All referenced extracted portfolio images are checked to exist and decode.
- A full Next.js build and browser testing still need to be run on a machine able to install dependencies. The registry was inaccessible in the build environment.

The UI is built around the content supplied by Adya's company profile; it does not assert independently verified client outcomes.
