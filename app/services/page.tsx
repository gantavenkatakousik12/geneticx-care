import Link from "next/link";
import { AREAS_WE_SUPPORT, SERVICES } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import { CTABand, InfoCard, Notice, PageHero, Section, SectionHead } from "@/components/ui";

export const metadata = {
  title: "Genetics & Genomics Services",
  description:
    "Genetic counseling, risk assessment, testing guidance, report discussion and healthcare navigation for individuals, families and healthcare professionals.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Genetics & Genomics Services"
        lead="GeneticxCare provides genetics and genomics services for individuals, families and healthcare professionals."
        extra="Our work includes counseling, risk assessment, testing guidance, report discussion and healthcare navigation based on the individual's circumstances."
        image={IMAGES.genomics}
      />

      {/* Our Services — anchor targets for the Home page "Explore Service" links */}
      <Section>
        <SectionHead eyebrow="Our Services" title="What GeneticxCare provides" align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <InfoCard key={s.id} id={s.id} title={s.title} body={s.full} />
          ))}
        </div>
      </Section>

      {/* Areas We Support */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Areas We Support"
          title="Where genetics may be relevant"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS_WE_SUPPORT.map((a) => (
            <article key={a.title} className="card h-full">
              <h3 className="text-[16.5px] text-forest-900">{a.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Healthcare professional support — deliberately short (doc note) */}
      <Section>
        <div className="rounded-[var(--radius-xl2)] bg-forest-800 px-7 py-10 md:px-12 md:py-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow-onDark">Healthcare Professional Support</span>
              <p className="mt-4 text-pretty text-[18px] leading-relaxed text-white">
                GeneticxCare provides genetics-focused support to doctors,
                hospitals and healthcare institutions.
              </p>
            </div>
            <Link href="/healthcare-professionals" className="btn btn-gold shrink-0">
              For Healthcare Professionals <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Important Information */}
      <Section tone="paper">
        <SectionHead eyebrow="Important Information" title="What our services do and do not include" />
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          <Notice tone="warn">
            <p>
              Not every health concern has a genetic cause, and genetic testing
              is not necessary for every person.
            </p>
            <p className="mt-3">
              GeneticxCare&apos;s services do not replace medical examination,
              diagnosis, treatment or emergency care. When a physical
              examination, medical evaluation or specialist intervention is
              required, we may recommend consultation with the appropriate
              healthcare professional or institution.
            </p>
          </Notice>

          <Notice title="Prenatal Services" tone="warn">
            <p>
              Prenatal genetic services are provided through appropriate
              registered healthcare institutions and qualified professionals.
            </p>
            <p className="mt-3">
              GeneticxCare does not provide independent online prenatal
              diagnostic services. All prenatal services are subject to
              applicable legal, regulatory and clinical requirements.
            </p>
          </Notice>
        </div>
      </Section>

      <CTABand
        title="Not sure which service is appropriate?"
        body="Submit an enquiry and GeneticxCare will guide you regarding the next step."
        primary={{ label: "Book a Consultation", href: "/consultation#book" }}
        secondary={{ label: "Send an Enquiry", href: "/contact#enquiry" }}
      />
    </>
  );
}
