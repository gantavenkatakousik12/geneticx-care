import { FAQS } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Accordion from "@/components/Accordion";
import { CTABand, PageHero, Section } from "@/components/ui";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about genetic counseling, genetic testing, results, reports and how GeneticxCare works alongside your healthcare professionals.",
  alternates: { canonical: "/faq" },
};

/** FAQPage structured data — mirrors the approved question set exactly. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        lead="Common questions about genetic counseling, testing, results and how GeneticxCare works with your healthcare team."
        image={IMAGES.faq}
      />

      <Section>
        <Accordion items={FAQS} />
      </Section>

      <CTABand
        title="Still have a question?"
        body="If you are unsure which service is appropriate, submit an enquiry and GeneticxCare will guide you regarding the next step."
        primary={{ label: "Book a Consultation", href: "/consultation#book" }}
        secondary={{ label: "Contact GeneticxCare", href: "/contact" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
