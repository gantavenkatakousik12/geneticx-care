import {
  AREA_OF_INTEREST_GENERAL,
  CONTACTING_AS_GENERAL,
  PREFERRED_CONTACT,
  SITE,
} from "@/lib/content";
import { IMAGES } from "@/lib/images";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import { Notice, PageHero, Section, SectionHead } from "@/components/ui";

export const metadata = {
  title: "Contact GeneticxCare",
  description:
    "Contact GeneticxCare for genetic counseling, professional genetics support or information about working with us.",
  alternates: { canonical: "/contact" },
};

const FIELDS: readonly Field[] = [
  { name: "name", label: "Full Name", type: "text", required: true, autoComplete: "name" },
  { name: "mobile", label: "Mobile Number", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { name: "city", label: "City / Location", type: "text", required: true, autoComplete: "address-level2" },
  {
    name: "contactingAs",
    label: "I am contacting you as",
    type: "select",
    options: CONTACTING_AS_GENERAL,
    required: true,
  },
  { name: "areaOfInterest", label: "Area of Interest", type: "select", options: AREA_OF_INTEREST_GENERAL },
  { name: "enquiry", label: "Briefly describe your enquiry", type: "textarea", required: true },
  {
    name: "report",
    label: "Upload a Report",
    type: "file",
    hint: "Optional. Files are transmitted securely and are never exposed publicly.",
  },
  {
    name: "preferredContact",
    label: "Preferred Method of Contact",
    type: "radio",
    options: PREFERRED_CONTACT,
  },
];

const CHANNELS = [
  {
    title: "Individuals & Families",
    body: "For genetic counseling, genetic risk assessment, genetic testing guidance, genetic report discussion and related enquiries.",
    email: SITE.emails.care,
  },
  {
    title: "Healthcare Professionals & Institutions",
    body: "For doctors, healthcare professionals, hospitals and healthcare institutions seeking genetics-focused support, case discussion or collaboration.",
    email: SITE.emails.professionals,
  },
  {
    title: "General Enquiries",
    body: "For general information about GeneticxCare, our services or website.",
    email: SITE.emails.info,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with GeneticxCare"
        lead="Whether you are seeking genetic counseling, professional genetics support or information about working with GeneticxCare, you can reach us through the appropriate channel below."
        image={IMAGES.humanCare}
      />

      {/* Channels */}
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {CHANNELS.map((c) => (
            <article key={c.email} className="card flex h-full flex-col">
              <h2 className="text-[17px] text-forest-900">{c.title}</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{c.body}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-5 font-display text-[14.5px] font-semibold text-forest-700 underline underline-offset-2 hover:text-forest-900"
              >
                {c.email}
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* Phone / WhatsApp / Hours */}
      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card">
            <h2 className="text-[17px] text-forest-900">Phone</h2>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="mt-3 block font-display text-[20px] font-bold text-forest-800"
            >
              {SITE.phone}
            </a>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Phone communication is available where appropriate.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              <strong className="font-semibold text-ink">
                For general enquiries, please do not call.
              </strong>{" "}
              To help us review and respond to your request appropriately,
              please use the relevant email address or the online enquiry form.
              For consultation-related matters, email or the consultation
              enquiry form is preferred.
            </p>
          </article>

          <article className="card">
            <h2 className="text-[17px] text-forest-900">WhatsApp Business</h2>
            <a
              href={`https://wa.me/${SITE.phoneHref.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-3"
            >
              Message GeneticxCare on WhatsApp <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
              WhatsApp Business may be used for consultation-related
              communication, appointment coordination and follow-up where
              appropriate.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Please avoid sending detailed medical or genetic information
              through a general WhatsApp enquiry. GeneticxCare will guide you
              regarding the appropriate method for providing information when
              required.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              We respond as soon as reasonably possible, depending on enquiry
              volume and ongoing consultations and operational work. WhatsApp is
              a communication channel and does not replace a formal consultation
              or clinical consent process where one is required.
            </p>
          </article>

          <article className="card">
            <h2 className="text-[17px] text-forest-900">Working Hours</h2>
            <p className="mt-3 font-display text-[15px] font-semibold text-forest-800">
              {SITE.hours.weekday}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              New consultation enquiries and routine consultation scheduling are
              primarily handled during these hours.
            </p>
            <p className="mt-4 font-display text-[15px] font-semibold text-forest-800">
              {SITE.hours.weekend}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              Operational work and service coordination. New consultation
              appointments are generally scheduled Monday–Friday. Time-sensitive
              service-related matters may be reviewed on a case-by-case basis,
              subject to availability and clinical appropriateness.
            </p>
          </article>
        </div>

        <div className="mt-6">
          <Notice tone="warn">
            GeneticxCare is not an emergency medical service. For a medical
            emergency, please seek immediate care from an appropriate emergency
            medical facility.
          </Notice>
        </div>
      </Section>

      {/* Correspondence office — must NOT read as a clinic (doc note). */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <SectionHead eyebrow="Correspondence Office" title="Business address" />
          <div>
            <address className="not-italic text-[16px] leading-relaxed text-ink">
              {SITE.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="mt-6 rounded-[var(--radius-card)] border-2 border-gold-500 bg-gold-100/50 p-6">
              <p className="font-display text-[15.5px] font-bold text-forest-900">
                This is not a patient-facing clinical facility.
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                This is the correspondence and business office address of{" "}
                {SITE.legalEntity}. It is used for official correspondence,
                administrative, corporate and other business matters. No direct
                patient consultations or walk-in appointments are conducted at
                this address. Please do not visit the correspondence office for
                consultation services.
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                GeneticxCare provides consultations through online consultation
                and participating healthcare institutions under its Regional
                Consultation Program, as applicable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* General enquiry form */}
      <Section id="enquiry" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <SectionHead
            eyebrow="Send an Enquiry"
            title="Not sure which service is appropriate?"
            lead="If you are unsure which service is appropriate, you can submit a general enquiry and GeneticxCare will guide you regarding the next step."
          />
          <EnquiryForm
            kind="general"
            fields={FIELDS}
            fallbackEmail={SITE.emails.info}
            note="Please provide only information relevant to your enquiry. Avoid sharing unnecessary sensitive medical or genetic information at this initial stage."
          />
        </div>
      </Section>
    </>
  );
}
