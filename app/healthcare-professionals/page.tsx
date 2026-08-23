import Image from "next/image";
import {
  COMMON_SITUATIONS,
  INSTITUTIONAL_INTEREST,
  INSTITUTIONAL_SERVICES,
  PROFESSIONAL_REGARDING,
  SITE,
  WHY_INSTITUTIONS,
} from "@/lib/content";
import { IMAGES } from "@/lib/images";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import { CheckList, Notice, PageHero, Section, SectionHead } from "@/components/ui";

export const metadata = {
  title: "Genetics Support for Healthcare Professionals",
  description:
    "Helping healthcare teams integrate genetics into patient care. Genetics support for doctors, hospitals and healthcare institutions.",
  alternates: { canonical: "/healthcare-professionals" },
};

/* Doc §11 — must stay separate from the patient consultation form. */
const CASE_FIELDS: readonly Field[] = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { name: "designation", label: "Designation", type: "text", required: true },
  { name: "organization", label: "Hospital / Clinic / Organization", type: "text" },
  { name: "mobile", label: "Mobile Number", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", required: true, autoComplete: "email" },
  { name: "city", label: "City / Location", type: "text", required: true },
  {
    name: "regarding",
    label: "I am contacting GeneticxCare regarding",
    type: "select",
    options: PROFESSIONAL_REGARDING,
    required: true,
  },
  {
    name: "requirement",
    label: "Briefly describe the requirement",
    type: "textarea",
    required: true,
    errorMsg: "Please describe the requirement.",
  },
  {
    name: "document",
    label: "Upload Relevant Document",
    type: "file",
    hint: "Optional. Documents are transmitted securely and are never exposed publicly.",
  },
];

/* Doc §12 — institutional collaboration. */
const INSTITUTIONAL_FIELDS: readonly Field[] = [
  { name: "organization", label: "Organization / Hospital Name", type: "text", required: true },
  { name: "name", label: "Contact Person", type: "text", required: true, autoComplete: "name" },
  { name: "designation", label: "Designation", type: "text", required: true },
  { name: "mobile", label: "Mobile Number", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", required: true, autoComplete: "email" },
  { name: "city", label: "City / Location", type: "text", required: true },
  {
    name: "areaOfInterest",
    label: "Area of Interest",
    type: "select",
    options: INSTITUTIONAL_INTEREST,
    required: true,
  },
  {
    name: "requirement",
    label: "Tell us about your requirement",
    type: "textarea",
    required: true,
    errorMsg: "Please tell us about your requirement.",
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Healthcare Professionals"
        title="Genetics Support for Healthcare Professionals"
        lead="Helping healthcare teams integrate genetics into patient care."
        extra="GeneticxCare can support doctors and healthcare teams when a patient's history raises a possible genetic concern."
        image={IMAGES.professionals}
      />

      {/* Common situations */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead eyebrow="Common Situations Include" title="When genetics input may help" />
          <div className="lg:pt-2">
            <CheckList items={COMMON_SITUATIONS} columns={2} />
          </div>
        </div>
      </Section>

      {/* Case enquiry form */}
      <Section id="case-enquiry">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Professional Enquiry"
              title="Share your genetics-related requirement"
              lead="We will review the information provided and guide you regarding the appropriate genetics support."
            />
            <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-navy-50 p-6">
              <p className="text-[14.5px] leading-relaxed text-ink-soft">
                Professional and institutional enquiries can also be sent to{" "}
                <a
                  href={`mailto:${SITE.emails.professionals}`}
                  className="font-semibold text-navy-700 underline underline-offset-2"
                >
                  {SITE.emails.professionals}
                </a>
                .
              </p>
            </div>
          </div>

          <EnquiryForm
            kind="professional"
            fields={CASE_FIELDS}
            fallbackEmail={SITE.emails.professionals}
          />
        </div>
      </Section>

      {/*
        Institutional Collaboration — correction doc, Healthcare Professionals
        §4–§9. This is the single destination for detailed institutional
        collaboration; the Regional Program page links here rather than
        duplicating the form.
      */}
      <Section id="collaborate" tone="paper">
        <SectionHead
          eyebrow="Institutional Collaboration"
          title="Integrating Genetics Into Your Healthcare Pathway"
          lead="GeneticxCare can work with hospitals, clinics and healthcare institutions as an external genetics partner, supporting appropriate cases and helping integrate genetics into existing clinical pathways."
        />

        {/* Doc §9 — this image is used with this section only. */}
        <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-[var(--radius-xl2)]">
          <Image
            src={IMAGES.institutional.src}
            alt={IMAGES.institutional.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1160px"
            className="object-cover"
          />
        </div>

        {/* Doc §5 */}
        <h3 className="mt-14 text-[22px] text-navy-900 md:text-[26px]">
          Why Institutions Work With GeneticxCare
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {WHY_INSTITUTIONS.map((w) => (
            <article key={w.title} className="card h-full">
              <h4 className="text-[17px] text-navy-900">{w.title}</h4>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{w.body}</p>
            </article>
          ))}
        </div>

        {/* Doc §6 — order is fixed. */}
        <h3 className="mt-14 text-[22px] text-navy-900 md:text-[26px]">Services may include</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INSTITUTIONAL_SERVICES.map((s) => (
            <div key={s} className="card card-soft text-[15px] font-medium text-navy-900">
              {s}
            </div>
          ))}
        </div>

        {/* Doc §7 — immediately before the institutional enquiry form. */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <Notice>
              The scope of support can be tailored to the institution&apos;s
              needs, clinical pathways and the nature of cases encountered.
            </Notice>
            <div className="mt-6 rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <p className="text-[14.5px] leading-relaxed text-ink-soft">
                Institutional enquiries can also be sent to{" "}
                <a
                  href={`mailto:${SITE.emails.professionals}`}
                  className="font-semibold text-navy-700 underline underline-offset-2"
                >
                  {SITE.emails.professionals}
                </a>
                .
              </p>
            </div>
          </div>

          <EnquiryForm
            kind="institutional"
            fields={INSTITUTIONAL_FIELDS}
            fallbackEmail={SITE.emails.professionals}
          />
        </div>
      </Section>
    </>
  );
}
