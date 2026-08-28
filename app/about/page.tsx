import Image from "next/image";
import { APPROACH_ABOUT, CLINICAL_NETWORK, SITE } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import { CTABand, PageHero, Section, SectionHead } from "@/components/ui";

export const metadata = {
  title: "About GeneticxCare",
  description:
    "Making clinical genetics more accessible, understandable and connected to healthcare. GeneticxCare is operated by R114D Private Limited.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About GeneticxCare"
        lead="Making clinical genetics more accessible, understandable and connected to healthcare."
        image={IMAGES.aboutBridge}
      />

      {/* Our Purpose */}
      <Section>
        {/*
          Correction doc, About §2: the standalone heading sentence
          "Genetics is increasingly relevant across healthcare." is removed
          because the opening paragraph already says it. "Our Purpose" is the
          section heading so the document outline stays intact.

          The label sits above the prose on the same left rail and at the same
          measure as every other section on this page — it was previously a
          two-column grid that pushed the paragraphs almost half the page to
          the right of every other section.
        */}
        <h2 className="eyebrow">Our Purpose</h2>
        <div className="mt-5 max-w-2xl">
          <p className="text-pretty text-[16.5px] leading-relaxed text-ink-soft">
            Genetics is increasingly relevant across healthcare, yet access to
            genetics expertise remains limited in many communities.
          </p>
          <p className="mt-4 text-pretty text-[16.5px] leading-relaxed text-ink-soft">
            GeneticxCare was established to help bring genetics-focused
            expertise into appropriate healthcare pathways, supporting
            individuals, families and healthcare teams through genetic
            counseling, assessment and genomic support.
          </p>
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="paper">
        <div className="grid items-start gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
          {/* Approved Founder & Director portrait */}
          <div className="overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-paper max-w-sm">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={IMAGES.director.src}
                alt={IMAGES.director.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6">
              <p className="font-display text-[15px] font-semibold text-navy-900">
                Founder &amp; Director
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                Certified Genetic Counselor practising in clinical genetics and
                genomics.
              </p>
              <dl className="mt-5 space-y-2.5 border-t border-line-soft pt-4 text-[13.5px]">
                <div>
                  <dt className="text-ink-faint">Qualifications</dt>
                  <dd className="font-semibold text-navy-900">M.Sc. | PGMGC | BGC-INDIA</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Operating region</dt>
                  <dd className="font-semibold text-navy-900">Telangana &amp; Andhra Pradesh</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 text-[28px] text-navy-900 md:text-[34px]">
              Ravikanth Dabbeta
            </h2>
            <p className="mt-2 font-display text-[15px] font-semibold text-navy-700">
              M.Sc. | PGMGC | BGC-INDIA
            </p>
            <p className="mt-1 text-[15px] text-ink-soft">
              Certified Genetic Counselor
              <br />
              Founder &amp; Director, GeneticxCare
            </p>

            <p className="mt-6 text-pretty text-[16px] leading-relaxed text-ink-soft">
              GeneticxCare was founded with the aim of making genetics more
              accessible, understandable and responsibly integrated into
              healthcare.
            </p>
            <p className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-soft">
              The organization operates through a collaborative care model,
              connecting genetics expertise with appropriate healthcare
              professionals, diagnostic services and participating healthcare
              institutions according to the needs of each case.
            </p>
          </div>
        </div>
      </Section>

      {/* Clinical & Professional Network */}
      <Section>
        <SectionHead
          eyebrow="Clinical & Professional Network"
          title="Genetics-focused care, delivered collaboratively"
          lead="GeneticxCare works with qualified professionals and healthcare organizations to support genetics-focused care according to individual and clinical requirements."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLINICAL_NETWORK.map((item) => (
            <li key={item} className="card card-soft text-[15px] font-medium text-navy-900">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          The professionals and organizations involved depend on the nature of
          the case and the healthcare pathway required.
        </p>
      </Section>

      {/* Our Approach */}
      <Section tone="paper">
        <SectionHead title="How we work" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH_ABOUT.map((a) => (
            <article key={a.title} className="card h-full">
              <h3 className="text-[17px] text-navy-900">{a.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[var(--radius-xl2)] bg-navy-900 p-9 md:p-11">
            <span className="eyebrow eyebrow-onDark">Our Vision</span>
            <p className="mt-5 text-balance font-display text-[22px] font-semibold leading-snug text-white md:text-[26px]">
              A healthcare system where genetics is accessible whenever it is
              clinically relevant.
            </p>
          </div>
          <div className="rounded-[var(--radius-xl2)] border border-line bg-paper p-9 md:p-11">
            <span className="eyebrow">Our Mission</span>
            <p className="mt-5 text-balance font-display text-[22px] font-semibold leading-snug text-navy-900 md:text-[26px]">
              To make genetics understandable, accessible and responsibly
              integrated into healthcare.
            </p>
          </div>
        </div>
      </Section>

      {/* Legal entity note */}
      <Section tone="paper" className="!py-12">
        <p className="max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
          GeneticxCare is a healthcare brand operated by{" "}
          <strong className="font-semibold text-ink">{SITE.legalEntity}</strong>. Phase 1
          operations cover {SITE.phase}.
        </p>
      </Section>

      <CTABand
        title="Have a question about genetics?"
        body="GeneticxCare can help you understand the next step."
        primary={{ label: "Book a Consultation", href: "/consultation#book" }}
        secondary={{ label: "Contact GeneticxCare", href: "/contact" }}
      />
    </>
  );
}
