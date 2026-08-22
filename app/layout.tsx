import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, SOCIAL } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} | ${SITE.positioning}`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "GeneticxCare provides genetic counseling, risk assessment and genomic support for individuals, families and healthcare professionals.",
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    locale: "en_IN",
    url: SITE.url,
  },
  robots: { index: true, follow: true },
};

/**
 * Organization structured data. Kept factual and limited to information the
 * master doc publishes — no clinic/LocalBusiness markup, because the
 * correspondence address is explicitly not a patient-facing facility.
 */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.brand,
  url: SITE.url,
  legalName: SITE.legalEntity,
  description: SITE.positioning,
  logo: `${SITE.url}/images/logo-wordmark.png`,
  email: SITE.emails.info,
  telephone: SITE.phone,
  /** Official profiles supplied in the correction doc. */
  sameAs: SOCIAL.map((s) => s.href),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oyster Complex, Greenlands Road, Somajiguda, Begumpet",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500016",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
