import {
  AREA_OF_INTEREST_CONSULT,
  CONSULTATION_PROCESS,
  CONTACTING_AS_PATIENT,
  ONLINE_SUITABLE_FOR,
  SITE,
} from "@/lib/content";
import { IMAGES } from "@/lib/images";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import { CheckList, Notice, PageHero, Section, SectionHead, StepCard } from "@/components/ui";

export const metadata = {
  title: "Genetic Consultation",
  description:
    "Professional genetics support through online consultation and in-person consultation via participating healthcare institutions.",
  alternates: { canonical: "/consultation" },
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
    options: CONTACTING_AS_PATIENT,
    required: true,
  },
  {
    name: "areaOfInterest",
    label: "Area of Interest",
    type: "select",
    options: AREA_OF_INTEREST_CONSULT,
  },
  {
    name: "enquiry",
    label: "Briefly describe your enquiry",
    type: "textarea",
    required: true,
  },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Genetic Consultation"
        lead="Professional genetics support, wherever appropriate."
        extra="GeneticxCare provides genetic counseling and related services through online consultation and in-person consultation through participating healthcare institutions."
        image={IMAGES.onlineConsult}
      />

      {/* Online consultation */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            eyebrow="Online Genetic Consultation"
            title="Online consultation may be suitable for concerns such as:"
          />
          <div className="lg:pt-2">
            <CheckList items={ONLINE_SUITABLE_FOR} columns={2} />

            <div className="mt-9 grid gap-4">
              <Notice>
                Some cases require physical examination, additional clinical
                information or specialist assessment and may therefore be
                directed to an in-person setting.
              </Notice>
              <Notice tone="warn">
                Prenatal genetic services are handled through appropriate
                registered healthcare institutions and are not provided as
                independent online prenatal diagnostic services.
              </Notice>
            </div>
          </div>
        </div>
      </Section>

      {/* Consultation process */}
      <Section tone="paper">
        <SectionHead eyebrow="Consultation Process" title="How a consultation works" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONSULTATION_PROCESS.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </Section>

      {/* Booking form */}
      <Section id="book">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Book a Consultation"
              title="Tell us briefly about your concern."
              lead="GeneticxCare will review your enquiry and guide you regarding the appropriate consultation pathway."
            />
            <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-forest-50 p-6">
              <h3 className="text-[16px] text-forest-900">Prefer to email?</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Consultation enquiries can also be sent to{" "}
                <a
                  href={`mailto:${SITE.emails.care}`}
                  className="font-semibold text-forest-700 underline underline-offset-2"
                >
                  {SITE.emails.care}
                </a>
                .
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                {SITE.hours.weekday}. New consultation appointments are
                generally scheduled Monday–Friday.
              </p>
            </div>
          </div>

          <EnquiryForm
            kind="consultation"
            fields={FIELDS}
            fallbackEmail={SITE.emails.care}
            note="Please provide only information relevant to your enquiry. Avoid sharing unnecessary sensitive medical or genetic information at this initial stage."
          />
        </div>
      </Section>
    </>
  );
}
