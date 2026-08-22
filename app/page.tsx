import Image from "next/image";
import Link from "next/link";
import {
  APPROACH_HOME,
  HOW_IT_WORKS,
  SERVICES,
  WHO_WE_SUPPORT,
} from "@/lib/content";
import { IMAGES } from "@/lib/images";
import { CTABand, InfoCard, Section, SectionHead, StepCard } from "@/components/ui";

export const metadata = {
  title: "GeneticxCare | Integrated Clinical Genetics & Genomics",
  description:
    "GeneticxCare provides genetic counseling, risk assessment and genomic support for individuals, families and healthcare professionals.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="bg-canvas pt-6 pb-4 md:pt-10">
        <div className="wrap">
          <div className="overflow-hidden rounded-[var(--radius-xl2)] bg-navy-900">
            <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
              <div className="px-7 py-12 md:px-12 md:py-16 lg:py-20">
                {/*
                  Correction doc, Home §1: the hierarchy is reversed. The first
                  line is the institutional positioning label; the headline is
                  the memorable brand statement.
                */}
                <span className="eyebrow eyebrow-onDark">
                  Integrated Clinical Genetics &amp; Genomics
                </span>

                <h1 className="mt-6 text-balance text-[34px] leading-[1.06] text-white md:text-[52px]">
                  Bringing genetics closer to healthcare.
                </h1>

                <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-navy-200">
                  GeneticxCare provides genetic counseling, risk assessment and
                  genomic support for individuals, families and healthcare
                  professionals.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/consultation#book" className="btn btn-accent">
                    Book a Consultation <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/healthcare-professionals" className="btn btn-ghostLight">
                    For Professionals
                  </Link>
                </div>

                <ul className="mt-10 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {SERVICES.map((s) => (
                    <li
                      key={s.id}
                      className="flex items-center gap-2.5 text-[14.5px] text-navy-200"
                    >
                      <span aria-hidden="true" className="text-teal-500">
                        ✓
                      </span>
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src={IMAGES.homeHero.src}
                  alt={IMAGES.homeHero.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Introduction ---------------- */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[var(--radius-xl2)] lg:order-1">
            <Image
              src={IMAGES.services.src}
              alt={IMAGES.services.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow">Introduction</span>
            <h2 className="mt-4 text-balance text-[28px] text-navy-900 md:text-[38px]">
              Genetics is part of healthcare.
            </h2>
            <p className="mt-5 text-pretty text-[16px] leading-relaxed text-ink-soft">
              Many health conditions may involve genetic or familial factors.
              Understanding those factors can help individuals and families make
              better-informed healthcare decisions.
            </p>
            <p className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-soft">
              GeneticxCare brings clinical genetics and genomic expertise closer
              to patients and healthcare teams through a patient-centered and
              collaborative approach.
            </p>
            <Link href="/about" className="link-arrow mt-7">
              About GeneticxCare <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ---------------- Our Services ---------------- */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Our Services"
          title="Genetics and genomics support built around your circumstances"
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <InfoCard
              key={s.id}
              title={s.title}
              body={s.homeBlurb}
              href={`/services#${s.id}`}
            />
          ))}
        </div>
      </Section>

      {/* ---------------- Who We Support ---------------- */}
      <Section>
        <SectionHead
          eyebrow="Who We Support"
          title="Genetics support for people, couples and clinical teams"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_WE_SUPPORT.map((w) => (
            <article key={w.title} className="card card-soft h-full">
              <h3 className="text-[17px] text-navy-900">{w.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{w.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------------- How GeneticxCare Works ---------------- */}
      <Section tone="paper">
        <SectionHead
          eyebrow="How GeneticxCare Works"
          title="A clear pathway from your first concern to the next step"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </Section>

      {/* ---------------- Access to Genetics Care ---------------- */}
      <Section>
        <SectionHead
          eyebrow="Access to Genetics Care"
          title="Genetics support, closer to you."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Online Genetic Consultation",
              body: "Genetic counseling can be provided online when the nature of the case allows meaningful assessment through remote consultation.",
              href: "/consultation",
              label: "Explore Online Consultation",
              // Doc §10: subtle digital/remote-care visual, not another
              // doctor-and-patient consultation photograph.
              image: IMAGES.homeOnline,
            },
            {
              title: "Regional Consultation Program",
              body: "GeneticxCare works with participating healthcare institutions to bring genetics consultation closer to patients and healthcare teams in regional locations.",
              href: "/regional-program",
              label: "Explore Regional Program",
              // Doc §10: the approved regional-access visual.
              image: IMAGES.homeRegional,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="text-[20px] text-navy-900">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
                <Link href={item.href} className="link-arrow mt-5">
                  {item.label} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------------- Our Approach ---------------- */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Our Approach"
          title="How we work with patients and healthcare teams"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH_HOME.map((a) => (
            <article key={a.title} className="card h-full">
              <h3 className="text-[17px] text-navy-900">{a.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------------- Closing CTA ---------------- */}
      <CTABand
        title="Have a question about genetics?"
        body="Whether you are seeking genetic counseling, discussing a genetic report or looking for genetics support for your patients, GeneticxCare can help you understand the next step."
        primary={{ label: "Book a Consultation", href: "/consultation#book" }}
        secondary={{ label: "Contact GeneticxCare", href: "/contact" }}
      />
    </>
  );
}
