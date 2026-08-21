import {
  COMMON_SITUATIONS,
  INSTITUTIONAL_INTEREST,
  INSTITUTIONAL_SERVICES,
  PROFESSIONAL_REGARDING,
  SITE,
} from "@/lib/content";
import { IMAGES } from "@/lib/images";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import { CheckList, PageHero, Section, SectionHead } from "@/components/ui";

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
  { name: "requirement", label: "Briefly describe the requirement", type: "textarea", required: true },
  {
    name: "report",
    label: "Upload Relevant Report",
    type: "file",
    hint: "Optional. Reports are transmitted securely and are never exposed publicly.",
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
  { name: "requirement", label: "Tell us about your requirement", type: "textarea", required: true },
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

      {/* Institutions */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead
            eyebrow="Hospitals & Healthcare Institutions"
            title="Genetics support within existing clinical pathways"
            lead="GeneticxCare can collaborate with healthcare institutions to provide genetics support within existing clinical pathways."
          />
          <div className="lg:pt-2">
            <p className="mb-5 font-display text-[15px] font-semibold text-forest-900">
              Services may include:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {INSTITUTIONAL_SERVICES.map((s) => (
                <div key={s} className="card card-soft text-[15px] font-medium text-forest-900">
                  {s}
                </div>
              ))}
            </div>
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
            <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-forest-50 p-6">
              <p className="text-[14.5px] leading-relaxed text-ink-soft">
                Professional and institutional enquiries can also be sent to{" "}
                <a
                  href={`mailto:${SITE.emails.professionals}`}
                  className="font-semibold text-forest-700 underline underline-offset-2"
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

      {/* Institutional collaboration */}
      <Section id="collaborate" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Institutional Collaboration"
              title="Discuss Institutional Collaboration"
              lead="Tell us about your organization's requirement and how GeneticxCare may support your healthcare pathway."
            />
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              GeneticxCare may provide genetics services as an external
              professional support partner under an institutional arrangement.
            </p>
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
