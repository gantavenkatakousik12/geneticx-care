# GeneticxCare — Website

Integrated Clinical Genetics & Genomics. Operated by R114D Private Limited.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**, implementing
the approved content master (`website final master doc.docx`, v20 August 2026).

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3100
npm run build    # production build + typecheck
```

> Do not run `npm run build` while `npm run dev` is running — they share `.next`
> and the dev server will start serving a broken/unstyled page. Stop dev first.

### Enquiry-form email

Form submissions email the correct GeneticxCare Google Workspace mailbox
(doc §13). Copy `.env.example` to `.env.local` and fill in SMTP credentials:

```bash
cp .env.example .env.local
```

Routing (server-side only, never exposed to the browser):

| Form | Mailbox |
|---|---|
| Book Consultation | care@geneticxcare.com |
| General Enquiry | info@geneticxcare.com |
| Healthcare Professional / Case | professionals@geneticxcare.com |
| Institutional Collaboration | professionals@geneticxcare.com |

Until SMTP is configured, submissions return a failure state and the UI shows
the published fallback address — deliberately, so an enquiry is never silently
lost.

---

## Structure

```
app/
  page.tsx                        Home
  about/  services/  consultation/
  regional-program/  healthcare-professionals/
  faq/  contact/
  privacy-policy/  terms-of-use/  medical-genetics-disclaimer/
  api/enquiry/route.ts            Form handler + SMTP routing
  sitemap.ts  robots.ts  not-found.tsx
components/
  Header  Footer  ui  Accordion  EnquiryForm  LegalPage
lib/
  content.ts   All page copy (single source of truth)
  legal.ts     Privacy / Terms / Disclaimer in full
  images.ts    Image assets + mapping notes
```

Content lives in `lib/`, not in the pages. The doc places content under a
**content freeze**, so wording changes should be made there as a controlled
revision.

---

## Implementation status vs. the master doc

All 19 handoff-checklist items are addressed:

| Doc requirement | Status |
|---|---|
| All 8 main pages | ✅ Home, About, Services, Consultation, Regional Program, Healthcare Professionals, FAQ, Contact |
| Privacy / Terms / Disclaimer in full | ✅ Complete text, separate pages, visible Last Updated |
| Main navigation matches structure | ✅ Condensed to 6 items; Regional Program & Healthcare Professionals remain dedicated pages (nav + footer) |
| Footer legal links on every page | ✅ Global footer |
| Three separate enquiry forms | ✅ Consultation, Professional/Case, Institutional — plus the §9 general enquiry form |
| Form email routing | ✅ Server-side table, per-form mailbox |
| Success and failure states | ✅ Both, with fallback address on failure |
| Consent not preselected | ✅ Unchecked; blocks submit until ticked |
| Responsive layouts | ✅ Mobile-first |
| FAQ accordion accessible | ✅ Button + `aria-expanded` / `aria-controls`, keyboard operable |
| Correspondence office labeled non-clinical | ✅ Highlighted callout on Contact + footer notice |
| No unapproved marketing claims | ✅ No invented stats or testimonials |
| No unnecessary service subpages | ✅ Services anchor to `#section` on one page |
| SEO metadata | ✅ Per-page title/description, canonicals, sitemap, robots, Organization + FAQPage JSON-LD |
| Accessibility | ✅ Skip link, focus rings, labelled fields, inline errors, reduced-motion support |

Prenatal, "not a clinic", "we do not perform testing" and emergency-care
limitations are carried through verbatim from the doc.

### Deliberate deviations

- **Navigation condensed** from 8 to 6 top-level items (client request: the bar
  was overcrowded). Regional Program and Healthcare Professionals are still
  dedicated pages, reachable from the header dropdown and the footer — not
  hidden under Services.
- **Structured data** is `Organization`, not `LocalBusiness`. The doc says to use
  it "only where technically and legally appropriate", and the correspondence
  address is explicitly not a patient-facing facility.
- **Social links** omitted from the footer until official profile URLs are
  finalized (doc §14).

---

## Image assets — action needed

The supplied Unsplash URLs are placeholders; the doc refers to finalized assets
to be supplied separately. Several supplied URLs **do not match their labels**,
so each was mapped to the slot it genuinely fits (see `lib/images.ts`):

| Supplied label | What it actually shows | Action taken |
|---|---|---|
| DNA / Genotyping Laboratory | A **hotel bedroom** | Excluded — unusable |
| Consultation — Healthcare Discussion | Stethoscope + loose tablets | Excluded — pill imagery is off-message |
| Healthcare Professionals — Collaboration | Empty operating theatre | Reused as the institutional-facility image |
| Home Hero — Genetic Counseling | Plastic brain model | Moved to the professionals page |
| Regional — Doctor & Patient | Solo studio portrait, no patient | Used on About |

Replace these once the finalized assets arrive.

### Logo

`public/logo-mark.png` is cropped from the client-supplied artwork. The original
contains the wordmark **"Niranjan"** and an Om symbol — a different brand name —
which were cropped out so the mark sits beside the GeneticxCare name. It is a
photographic illustration rather than a vector logo; a proper SVG is
recommended before launch.

---

© R114D Private Limited.
