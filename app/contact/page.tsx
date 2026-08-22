import {
  AREA_OF_INTEREST_GENERAL,
  CONTACTING_AS_GENERAL,
  PREFERRED_CONTACT,
  SITE,
} from "@/lib/content";
import { IMAGES } from "@/lib/images";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import { Notice, PageHero, Section, SectionHead, WhatsAppIcon } from "@/components/ui";

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
  {
    name: "enquiry",
    label: "Briefly describe your enquiry",
    type: "textarea",
    required: true,
    errorMsg: "Please describe your enquiry.",
  },
  /*
    Correction doc, Contact §10: the "Upload a Report" field is removed
    completely and replaced by the "Information at the Initial Enquiry Stage"
    note rendered beside the form.
    Correction doc, Contact §11: Preferred Method of Contact keeps Email and
    WhatsApp only — the Phone option is removed.
  */
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
        image={IMAGES.contact}
      />

      {/* Channels */}
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {CHANNELS.map((c) => (
            <article key={c.email} className="card flex h-full flex-col">
              <h2 className="text-[17px] text-navy-900">{c.title}</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{c.body}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-5 font-display text-[14.5px] font-semibold text-navy-700 underline underline-offset-2 hover:text-navy-900"
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
          {/*
            Correction doc, Contact §3: the number stays visible as an official
            contact detail, but it is deliberately NOT a tel: link — §19 says
            do not add a direct-call CTA.
          */}
          <article className="card">
            <h2 className="text-[17px] text-navy-900">Phone</h2>
            <p className="mt-3 font-display text-[20px] font-bold text-navy-800">
              {SITE.phone}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Phone communication is available by arrangement for existing
              enquiries and appointments. For new enquiries, please use WhatsApp
              Business, email or the online enquiry form.
            </p>
          </article>

          {/* Correction doc, Contact §4. */}
          <article className="card">
            <h2 className="text-[17px] text-navy-900">WhatsApp Business</h2>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-3"
            >
              <WhatsAppIcon />
              Message GeneticxCare on WhatsApp <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
              WhatsApp may be used for new enquiries, consultation-related
              communication, appointment coordination and follow-up where
              appropriate. Please avoid sending detailed medical or genetic
              information through WhatsApp unless specifically requested.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              WhatsApp is a communication channel and does not replace a formal
              consultation or clinical consent process where one is required.
            </p>
          </article>

          {/* Correction doc, Contact §5 — weekday hours only. */}
          <article className="card">
            <h2 className="text-[17px] text-navy-900">Working Hours</h2>
            <p className="mt-3 font-display text-[15px] font-semibold text-navy-800">
              {SITE.hours.weekday}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              {SITE.hours.note}
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
          {/*
            Correction doc, Contact §7: the word "business" is removed here and
            everywhere else in the site copy.
          */}
          <SectionHead eyebrow="Correspondence Office" title="Correspondence address" />
          <div>
            <address className="not-italic text-[16px] leading-relaxed text-ink">
              {SITE.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="mt-6 rounded-[var(--radius-card)] border-2 border-amber-500 bg-amber-100/60 p-6">
              <p className="font-display text-[15.5px] font-bold text-navy-900">
                This is not a patient-facing clinical facility.
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                This is the correspondence office address of {SITE.legalEntity}.
                It is used for official correspondence, administrative and
                corporate matters. No direct patient consultations or walk-in
                appointments are conducted at this address. Please do not visit
                the correspondence office for consultation services.
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

      {/* Correction doc, Contact §8 — new section, sits before the form. */}
      <Section tone="paper" className="!pb-0">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <SectionHead eyebrow="What happens next" title="How we respond to your enquiry" />
          <p className="text-pretty text-[16px] leading-relaxed text-ink-soft lg:pt-2">
            Every enquiry is reviewed by the GeneticxCare team to understand the
            nature of your concern and determine the most appropriate next step.
            Depending on the enquiry, we may respond by email or WhatsApp,
            contact you by phone for clarification, recommend an online
            consultation, or guide you to a suitable regional consultation
            location where available.
          </p>
        </div>
      </Section>

      {/* General enquiry form */}
      <Section id="enquiry" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Send an Enquiry"
              title="Not sure which service is appropriate?"
              lead="If you are unsure which service is appropriate, you can submit a general enquiry and GeneticxCare will guide you regarding the next step."
            />
            {/* Correction doc, Contact §10 — replaces the removed upload field. */}
            <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <h3 className="text-[16px] text-navy-900">
                Information at the Initial Enquiry Stage
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                No medical reports or records are required at the initial
                enquiry stage. If any document is relevant to assessing your
                enquiry, our team will advise you on what is required and how to
                share it.
              </p>
            </div>
          </div>
          <EnquiryForm
            kind="general"
            fields={FIELDS}
            fallbackEmail={SITE.emails.info}
            contactNote="Please provide accurate contact details so our team can reach you if further clarification is required."
            note="Please provide only information relevant to your enquiry. Avoid sharing unnecessary sensitive medical or genetic information at this initial stage."
          />
        </div>
      </Section>
    </>
  );
}
