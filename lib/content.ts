/**
 * Content master — transcribed from "website final master doc.docx"
 * (Version: 20 August 2026).
 *
 * DEVELOPER NOTE from the doc: this content is FROZEN. Do not add marketing
 * claims, extra sections or duplicate copy. Wording changes go through a
 * controlled content revision, not ad-hoc edits here.
 */

export const SITE = {
  brand: "GeneticxCare",
  legalEntity: "R114D Private Limited",
  positioning: "Integrated Clinical Genetics & Genomics",
  phase: "Telangana & Andhra Pradesh",
  url: "https://geneticxcare.com",
  phone: "+91 7013592834",
  phoneHref: "+917013592834",
  emails: {
    care: "care@geneticxcare.com",
    professionals: "professionals@geneticxcare.com",
    info: "info@geneticxcare.com",
    privacy: "privacy@geneticxcare.com",
  },
  address: {
    lines: [
      "R114D Private Limited",
      "Oyster Complex, Greenlands Road,",
      "Somajiguda, Begumpet,",
      "Hyderabad, Telangana – 500016, India",
    ],
    city: "Hyderabad, Telangana, India",
  },
  /**
   * Correction doc, Contact §5: weekday hours only. The separate
   * Saturday–Sunday & Public Holidays operational paragraph is removed.
   */
  hours: {
    weekday: "Monday – Friday: 10:00 AM – 5:00 PM IST",
    note: "Consultation enquiries and routine scheduling are primarily handled during these hours. Responses outside these hours may be delayed.",
  },
  whatsapp: "https://wa.me/917013592834",
  legalUpdated: "20 August 2026",
} as const;

/**
 * Official social profiles.
 */
export const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/geneticxcare" },
  { label: "YouTube", href: "https://www.youtube.com/@geneticxcare" },
  { label: "Instagram", href: "https://www.instagram.com/geneticxcare/" },
] as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Consultation", href: "/consultation" },
  { label: "Regional Program", href: "/regional-program" },
  { label: "Healthcare Professionals", href: "/healthcare-professionals" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Header navigation — deliberately condensed to 6 top-level items so the bar
 * stays uncrowded. Regional Program and Healthcare Professionals remain
 * dedicated pages (doc §18) and are surfaced here plus in the footer; they are
 * grouped under "Consultation" because the doc's own IA presents online
 * consultation and the regional program together as "Access to Genetics Care".
 */
export const HEADER_NAV: ReadonlyArray<{
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string; blurb: string }>;
}> = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Consultation",
    href: "/consultation",
    children: [
      {
        label: "Online Consultation",
        href: "/consultation",
        blurb: "Genetic counseling delivered remotely where appropriate.",
      },
      {
        label: "Regional Program",
        href: "/regional-program",
        blurb: "Genetics consultation through participating institutions.",
      },
    ],
  },
  { label: "For Professionals", href: "/healthcare-professionals" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_NAV = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Medical & Genetics Disclaimer", href: "/medical-genetics-disclaimer" },
] as const;

/* ------------------------------------------------------------------ *
 * Shared: services + approach (used on Home and Services)
 * ------------------------------------------------------------------ */

export const SERVICES = [
  {
    id: "genetic-counseling",
    title: "Genetic Counseling",
    // Correction doc, Home §5: no use of the word "condition" in this blurb.
    homeBlurb:
      "Understand genetic and familial risks, family history and genetic testing options.",
    // Correction doc, Services §2.
    full:
      "A structured counseling process to assess genetic and familial risk, discuss relevant genetic findings and testing options, and support informed healthcare decisions.",
  },
  {
    id: "genetic-risk-assessment",
    title: "Genetic Risk Assessment",
    homeBlurb:
      "Review personal and family history to understand possible genetic or familial risk.",
    full:
      "Review personal and family history to understand possible genetic or familial risk.",
  },
  {
    id: "genetic-testing-guidance",
    title: "Genetic Testing Guidance",
    homeBlurb:
      "Understand whether testing may be appropriate, what different tests can and cannot tell you, and how testing can be arranged when needed.",
    full:
      "Understand whether testing may be appropriate, what different tests can and cannot tell you, and how testing can be arranged when needed.",
  },
  {
    id: "genetic-report-discussion",
    title: "Genetic Report Discussion",
    homeBlurb:
      "Support in understanding and discussing genetic and genomic laboratory reports in the context of personal and family information.",
    full:
      "Support in understanding and discussing genetic and genomic laboratory reports in the context of personal and family information.",
  },
  {
    id: "genetic-health-guidance",
    title: "Genetic Health Guidance",
    homeBlurb:
      "Health education and care-navigation support when genetics or family history may be relevant.",
    full:
      "Health education and care-navigation support when genetics or family history may be relevant.",
  },
  {
    id: "care-navigation",
    title: "Care Navigation",
    homeBlurb:
      "Guidance toward appropriate healthcare professionals, specialist evaluation, diagnostic services or other healthcare support when required.",
    full:
      "Guidance toward appropriate healthcare professionals, specialist evaluation, diagnostic services or other healthcare support when required.",
  },
] as const;

export const APPROACH_HOME = [
  {
    title: "Patient-centered",
    body: "We consider the individual, their family and their healthcare needs not just a test result.",
  },
  {
    title: "Evidence-informed",
    body: "Our approach is based on established principles of clinical genetics and available scientific evidence.",
  },
  {
    title: "Collaborative",
    body: "Genetics is most useful when it works alongside appropriate medical and specialist care.",
  },
  {
    title: "Responsible",
    body: "We do not promote unnecessary genetic testing or promise outcomes that genetic testing cannot provide.",
  },
] as const;

export const APPROACH_ABOUT = [
  {
    title: "Patient-centered",
    body: "Every individual and family has a different history. We consider the person and their circumstances, not simply a test result.",
  },
  {
    title: "Evidence-informed",
    body: "We use established principles of clinical genetics and relevant scientific evidence to guide our approach.",
  },
  {
    title: "Collaborative",
    body: "Genetics works best when integrated with appropriate medical and specialist care.",
  },
  {
    title: "Responsible",
    body: "We do not promote unnecessary genetic testing or promise outcomes that genetic testing cannot provide.",
  },
] as const;

export const WHO_WE_SUPPORT = [
  {
    title: "Individuals & Families",
    body: "For people with genetic concerns, family history or questions about genetic testing.",
  },
  {
    // Correction doc, Home §7.
    title: "Couples",
    body: "For preconception, carrier screening, infertility and other reproductive genetics concerns.",
  },
  {
    title: "Healthcare Professionals",
    body: "Genetics support for doctors and clinical teams managing patients with possible genetic conditions.",
  },
  {
    title: "Hospitals & Healthcare Institutions",
    body: "Genetics services and professional support through institutional collaboration.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Understand",
    body: "We begin with your concern, medical history and relevant family history.",
  },
  {
    step: "02",
    title: "Assess",
    body: "We review the information to understand whether genetics may be relevant.",
  },
  {
    step: "03",
    title: "Explain",
    body: "We discuss the genetic considerations, testing options and what they may mean for you.",
  },
  {
    step: "04",
    title: "Guide",
    body: "When needed, we guide you toward the appropriate diagnostic service, specialist or healthcare pathway.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Services page — areas we support
 * ------------------------------------------------------------------ */

export const AREAS_WE_SUPPORT = [
  {
    title: "Reproductive Genetics & Fertility",
    body: "Preconception, carrier-risk, infertility and reproductive genetic concerns.",
  },
  {
    title: "Prenatal Genetics",
    body: "Genetic counseling and testing-related support during pregnancy through appropriate registered healthcare institutions.",
  },
  {
    title: "Pediatric & Developmental Genetics",
    body: "Developmental concerns, congenital differences and suspected inherited conditions.",
  },
  {
    title: "Cancer Genetics",
    body: "Personal and family cancer patterns that may indicate hereditary cancer risk.",
  },
  {
    title: "Neurogenetics",
    body: "Neurological, developmental and neuromuscular conditions with possible genetic involvement.",
  },
  {
    // Correction doc, Services §9.
    title: "Cytogenetics & Chromosomal Conditions",
    body: "Chromosomal abnormalities, cytogenetic findings and their clinical or familial implications.",
  },
  {
    title: "Rare & Inherited Conditions",
    body: "Rare, inherited and undiagnosed conditions where genetics may provide useful information.",
  },
  {
    title: "Familial Health Conditions",
    body: "Cardiac, renal, hematological and other health conditions where family history suggests a possible genetic contribution.",
  },
  {
    title: "Pharmacogenomics",
    body: "Genetic information relating to individual responses to selected medicines.",
  },
  {
    // Correction doc, Services §11: "Evidence-based" removed.
    title: "Nutrigenomics & Genomic Health",
    body: "Genomic education relating to selected nutrition and health considerations.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Consultation page
 * ------------------------------------------------------------------ */

export const ONLINE_SUITABLE_FOR = [
  "Family history assessment",
  "Genetic risk assessment",
  "Pedigree discussion",
  "Genetic testing counseling",
  "Pre-test counseling",
  "Post-test counseling",
  "Genetic report discussion",
  "Preconception counseling",
  "Infertility-related genetic concerns",
  "Follow-up counseling",
] as const;

export const CONSULTATION_PROCESS = [
  { step: "01", title: "Submit Your Enquiry", body: "Tell us about your concern." },
  {
    // Correction doc, Consultation §6.
    step: "02",
    title: "Initial Review",
    body: "We review the information to determine the appropriate consultation pathway.",
  },
  {
    step: "03",
    title: "Consultation",
    body: "A genetic counselor reviews your history, family information and concerns.",
  },
  {
    step: "04",
    title: "Next Steps",
    body: "You may receive guidance regarding genetic evaluation, testing, specialist care or follow-up.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Healthcare professionals page
 * ------------------------------------------------------------------ */

export const COMMON_SITUATIONS = [
  "Strong family history",
  "Early-onset disease",
  "Consanguinity",
  "Congenital anomalies",
  "Developmental concerns",
  "Suspected inherited conditions",
  "Hereditary cancer patterns",
  "Reproductive genetic concerns",
  "Existing genetic reports",
  "Unexplained or unusual clinical presentations",
] as const;

/**
 * Correction doc, Healthcare Professionals §5 — "Why Institutions Work With
 * GeneticxCare". Belongs to the Institutional Collaboration section only.
 */
export const WHY_INSTITUTIONS = [
  {
    title: "Extend Genetics Expertise",
    body: "Access dedicated genetics support when an institution does not have in-house genetics expertise available for every case.",
  },
  {
    title: "Support Existing Clinical Teams",
    body: "Provide genetics-focused assessment, counseling, testing pathway support and report discussion alongside the institution's existing clinical care.",
  },
  {
    title: "Coordinate the Genetics Pathway",
    body: "Help connect appropriate cases with genetic counseling, diagnostic services, specialist evaluation and follow-up when required.",
  },
  {
    title: "Support Regional Access",
    body: "Where appropriate, GeneticxCare can also support regional consultation initiatives in collaboration with participating healthcare institutions.",
  },
] as const;

export const INSTITUTIONAL_SERVICES = [
  "Genetic counseling",
  "Genetics case assessment",
  "Genetic risk assessment",
  "Testing pathway support",
  "Patient and family education",
  "Genetics education for healthcare teams",
  "Report discussion",
  "Referral and care coordination",
] as const;

export const CLINICAL_NETWORK = [
  "Genetic counselors",
  "Medical geneticists and other clinical specialists",
  "Other healthcare professionals",
  "Independent diagnostic laboratories",
  "Participating hospitals and healthcare institutions",
  "Honorary advisors",
] as const;

/* ------------------------------------------------------------------ *
 * FAQ — complete approved set (doc section 7)
 * ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "What is genetic counseling?",
    a: "Genetic counseling helps individuals and families understand genetic conditions, inherited risks, family history, genetic testing and the possible implications of genetic information.",
  },
  {
    q: "Do I need a genetic test before genetic counseling?",
    a: "No. Genetic counseling can help determine whether genetic testing may be useful.",
  },
  {
    q: "Who can benefit from genetic counseling?",
    a: "People with a significant family history, suspected inherited conditions, early-onset disease, developmental concerns, hereditary cancer concerns or reproductive genetic questions may benefit.",
  },
  {
    q: "Can genetic counseling be done online?",
    a: "Yes. Online counseling is available for cases that can be appropriately assessed remotely.",
  },
  {
    q: "What happens during a genetic consultation?",
    a: "Your personal and family history may be reviewed, relevant genetic concerns discussed and possible next steps explained.",
  },
  {
    q: "Does a genetic counselor perform a physical examination?",
    a: "Genetic counseling primarily involves history-taking, pedigree assessment, risk assessment and counseling. Physical examination, when necessary, is performed by an appropriate healthcare professional.",
  },
  {
    q: "What is genetic testing?",
    a: "Genetic testing examines DNA or chromosomes for specific genetic changes that may help answer a clinical question.",
  },
  {
    q: "What is WES?",
    a: "Whole Exome Sequencing examines most protein-coding regions of the genome. Its usefulness depends on the clinical question and the information available.",
  },
  {
    // Correction doc, FAQ §1A.
    q: "What is carrier screening?",
    a: "Carrier screening looks for certain genetic variants that may affect the chance of passing a genetic condition to a child.",
  },
  {
    q: "What does a positive genetic result mean?",
    a: "A positive result may identify a genetic finding relevant to the clinical question. Its meaning depends on the specific variant and clinical context.",
  },
  {
    q: "What does a negative result mean?",
    a: "A negative result does not necessarily rule out a genetic contribution to a condition.",
  },
  {
    q: "What is a VUS?",
    a: "A Variant of Uncertain Significance is a genetic finding whose clinical significance cannot currently be determined with sufficient certainty.",
  },
  {
    q: "Can children receive genetic counseling?",
    a: "Yes. Genetic counseling can be provided for children where appropriate, with the involvement and consent of a parent or lawful guardian as required.",
  },
  {
    q: "Can couples consult before pregnancy?",
    a: "Yes. Preconception counseling can help couples understand family history, carrier risk and other reproductive genetic considerations.",
  },
  {
    q: "Can GeneticxCare help with infertility?",
    a: "Genetics can sometimes contribute to infertility or reproductive problems. GeneticxCare can help assess whether a genetic evaluation may be relevant and guide the next steps.",
  },
  {
    q: "Can GeneticxCare help with cancer genetics?",
    a: "Yes. Personal and family cancer history can be assessed to determine whether hereditary cancer evaluation may be appropriate.",
  },
  {
    q: "Can GeneticxCare help with developmental concerns?",
    a: "Yes. Genetic counseling can help determine whether a child's developmental history warrants genetic evaluation.",
  },
  {
    // Correction doc, FAQ §1B.
    q: "Does GeneticxCare prescribe medicines?",
    a: "No. GeneticxCare does not prescribe medicines or replace treatment provided by your treating healthcare professional.",
  },
  {
    q: "Does GeneticxCare replace my doctor?",
    a: "No. GeneticxCare works alongside appropriate healthcare professionals and healthcare institutions.",
  },
  {
    q: "Does GeneticxCare perform genetic tests?",
    a: "No. Genetic laboratory testing is performed by independent diagnostic laboratories. GeneticxCare may provide testing guidance and, when needed, coordinate sample collection and transfer to the laboratory.",
  },
  {
    q: "Is testing coordination included in genetic counseling?",
    a: "Testing coordination is an additional service and may involve a separate charge when sample collection, transportation or laboratory coordination is required.",
  },
  {
    q: "Will genetic testing always find the cause?",
    a: "No. A genetic test may produce a positive, negative, uncertain or inconclusive result.",
  },
  {
    q: "Is my information confidential?",
    a: "GeneticxCare takes privacy seriously and handles personal, health and genetic information in accordance with its Privacy Policy and applicable law.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Form option sets (doc sections 9–12)
 * ------------------------------------------------------------------ */

export const CONTACTING_AS_GENERAL = [
  "Individual / Patient",
  "Parent / Guardian",
  "Couple",
  "Doctor / Healthcare Professional",
  "Hospital / Healthcare Institution",
  "Other",
] as const;

export const CONTACTING_AS_PATIENT = [
  "Individual / Patient",
  "Parent / Guardian",
  "Couple",
  "Other",
] as const;

export const AREA_OF_INTEREST_GENERAL = [
  "Genetic Counseling",
  "Genetic Risk Assessment",
  "Genetic Testing Guidance",
  "Genetic Report Discussion",
  "Reproductive Genetics",
  "Pediatric / Developmental Genetics",
  "Cancer Genetics",
  "Neurogenetics",
  "Rare / Inherited Conditions",
  "Familial Health Conditions",
  "Pharmacogenomics",
  "Nutrigenomics & Genomic Health",
  "Regional Consultation",
  "Healthcare / Institutional Collaboration",
  "Other",
] as const;

export const AREA_OF_INTEREST_CONSULT = [
  "Genetic Counseling",
  "Genetic Risk Assessment",
  "Genetic Testing Guidance",
  "Genetic Report Discussion",
  "Reproductive Genetics",
  "Pediatric / Developmental Genetics",
  "Cancer Genetics",
  "Neurogenetics",
  "Rare / Inherited Conditions",
  "Familial Health Conditions",
  "Pharmacogenomics",
  "Nutrigenomics & Genomic Health",
  "Regional Consultation",
  "Other",
] as const;

export const PROFESSIONAL_REGARDING = [
  "A patient / case",
  "Genetic testing guidance",
  "Genetic report discussion",
  "Genetic counseling support",
  "Genetics-focused case assessment",
  "Reproductive genetics",
  "Other",
] as const;

/** Correction doc, Healthcare Professionals §8 — exact approved option set. */
export const INSTITUTIONAL_INTEREST = [
  "Genetics support for clinical cases",
  "Institutional genetics service support",
  "Genetic counseling access",
  "Genetic testing pathway support",
  "Genetics education / professional training",
  "Regional Consultation Program",
  "Other institutional requirement",
] as const;

/** Correction doc, Contact §11 — the Phone option is removed. */
export const PREFERRED_CONTACT = ["Email", "WhatsApp"] as const;

export const CONSENT_TEXT =
  "I consent to GeneticxCare contacting me regarding my enquiry and processing the information I provide for this purpose in accordance with the Privacy Policy.";
