/**
 * Legal page content — transcribed in full from the master doc
 * (§15 Privacy Policy, §16 Terms of Use, §17 Medical & Genetics Disclaimer).
 *
 * Each section is { h, p[] } and optionally { list[] }. Rendered by
 * components/LegalPage.tsx.
 */

export type LegalSection = {
  h: string;
  p?: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  intro: string[];
  sections: LegalSection[];
};

/* ------------------------------------------------------------------ */

export const PRIVACY: LegalDoc = {
  title: "Privacy Policy",
  intro: [
    "GeneticxCare is a healthcare brand operated by R114D Private Limited.",
    "We respect the privacy of individuals who visit our website, contact us, request a consultation or use our services.",
    "This Privacy Policy explains how GeneticxCare collects, uses, stores and shares personal information in connection with our website, communications and services.",
    "GeneticxCare seeks to handle personal data in accordance with applicable laws of India, including the Digital Personal Data Protection Act, 2023 and applicable requirements that are in force from time to time.",
  ],
  sections: [
    {
      h: "1. Information We Collect",
      p: [
        "The information we collect depends on how you interact with GeneticxCare and the service you request. We aim to collect information that is relevant and reasonably necessary for the purpose for which it is collected.",
        "Contact Information may include: name; mobile number; email address; age or date of birth, where relevant; city or location; relationship to the person receiving the service, where relevant.",
        "Health and Genetic Information may include: personal medical history; family medical history; developmental history; reproductive history; cancer history; medical reports; laboratory reports; genetic reports; genetic test results; other health information relevant to the requested service.",
        "Consultation and Service Information may include consultation enquiries, appointment details, service-related communications, referral information, information required to provide or coordinate the requested service, and follow-up information.",
        "Documents and Reports may include medical reports, genetic reports, laboratory reports, referral documents, family-history information and other documents relevant to the requested service. Please avoid providing unnecessary medical or genetic information through general enquiry channels.",
        "Payment Information: where payment is required, relevant transaction information may be processed. Where payment is handled through an external provider, that provider may process payment-related information according to its own terms and privacy practices. GeneticxCare does not require full payment-card credentials through a general enquiry form.",
      ],
    },
    {
      h: "2. How We Receive Information",
      p: [
        "GeneticxCare may receive information through website enquiry forms; official GeneticxCare email; WhatsApp Business; telephone communication, where provided; online or in-person consultation; direct communication with authorized GeneticxCare representatives; and healthcare professionals or institutions where relevant to a requested service.",
        "Information may be used to understand and respond to an enquiry, communicate, schedule a consultation and provide or arrange the requested service.",
      ],
    },
    {
      h: "3. Website Enquiries and Google Workspace",
      p: [
        "Website enquiries may be received through the official GeneticxCare Google Workspace account used for business communication. Access to business email accounts is restricted to authorized persons who require access for legitimate business or service-related purposes.",
        "GeneticxCare may use technology and service providers necessary for website hosting, email, security, communication and related business operations. Third-party technology providers may process information according to their applicable terms, privacy practices and contractual arrangements.",
      ],
    },
    {
      h: "4. WhatsApp Business",
      p: [
        "GeneticxCare may use WhatsApp Business for general enquiries, initial intake, appointment communication, service-related communication, follow-up communication and healthcare coordination where appropriate.",
        "WhatsApp is an independent third-party communication platform and is subject to its own terms and privacy practices. Individuals are requested not to send unnecessary medical, genetic or other sensitive information through general WhatsApp enquiries. Where detailed information is required, GeneticxCare may provide an appropriate method for submitting documents or information.",
      ],
    },
    {
      h: "5. Information Collected Through the Website",
      p: [
        "Depending on the technologies used on the website, certain technical information may be collected automatically by the website, hosting provider, security tools, analytics tools or other technical service providers. This may include IP address, browser type, device information, operating system, pages visited, date and time of access, technical logs, website performance information and security-related information.",
        "Such information may be used for website operation, security, troubleshooting, performance monitoring, website improvement and prevention of misuse or unauthorized activity. The actual information collected depends on technologies and third-party services implemented on the website.",
      ],
    },
    {
      h: "6. How We Use Information",
      p: [
        "GeneticxCare may use personal information for responding to enquiries; consultation services; genetics assessment; genetic testing guidance; genetic report discussion; genetic health guidance; healthcare coordination; genetic testing coordination; administration including appointments, payments, communications, service requests, service records and follow-up; security; and legal and regulatory purposes.",
      ],
    },
    {
      h: "7. Health and Genetic Information",
      p: [
        "GeneticxCare recognizes that health and genetic information requires particular care. Where health or genetic information is provided for a genetics-related service, GeneticxCare will process such information only for relevant purposes permitted under applicable law.",
        "We aim to limit collection and use to information reasonably necessary for the requested service. You do not need to provide detailed medical or genetic information merely to browse the website. For general enquiries, provide only information reasonably necessary to help us understand your request.",
      ],
    },
    {
      h: "8. Consent and Lawful Processing",
      p: [
        "Where consent is required, GeneticxCare will seek consent in a clear manner for a specified purpose. Personal data may also be processed where otherwise permitted or required under applicable law.",
        "Where GeneticxCare relies on consent, the consent requested will relate to the purpose communicated at collection. Where a separate clinical, testing or service-specific consent is required, that consent may be obtained separately.",
      ],
    },
    {
      h: "9. Website Enquiry Consent",
      p: [
        "Where an enquiry form requires consent, the form may include: “I consent to GeneticxCare contacting me regarding my enquiry and processing the information I provide for this purpose in accordance with the Privacy Policy.”",
        "The Privacy Policy should be accessible from the enquiry form. The consent checkbox should not be pre-selected.",
      ],
    },
    {
      h: "10. Withdrawal of Consent",
      p: [
        "Where processing is based on consent, you may withdraw your consent through an appropriate mechanism provided by GeneticxCare, subject to applicable law. Withdrawal does not affect lawfulness of processing carried out before withdrawal.",
        "Withdrawal may affect our ability to continue providing a service where information is necessary for that service or where continued processing is otherwise permitted or required by law.",
      ],
    },
    {
      h: "11. Sharing of Personal Information",
      p: [
        "GeneticxCare does not sell personal information as a business activity. Where reasonably necessary and permitted under applicable law, information may be shared with relevant parties involved in providing or supporting the requested service, including healthcare professionals; hospitals and healthcare institutions; independent diagnostic laboratories; technology and service providers for hosting, email, cloud and technical services, security, communication, payment, appointment management and other necessary functions; and government or legal authorities where disclosure is required or permitted under applicable law.",
        "We aim to share only information reasonably necessary for the relevant purpose.",
      ],
    },
    {
      h: "12. Healthcare and Diagnostic Coordination",
      p: [
        "GeneticxCare may work with healthcare professionals, hospitals, healthcare institutions and independent diagnostic laboratories in connection with requested services. Where genetic testing is requested or considered appropriate, GeneticxCare may coordinate sample collection arrangements and transfer of specimens to an independent diagnostic laboratory, where applicable. Relevant information may be shared where reasonably necessary and subject to applicable law.",
        "GeneticxCare does not perform genetic laboratory testing or independently issue genetic laboratory reports. Testing, laboratory analysis and reporting are performed by the respective diagnostic laboratory.",
      ],
    },
    {
      h: "13. Children's Information",
      p: [
        "GeneticxCare may provide genetics-related services involving children. Where applicable, processing of a child's personal data will be carried out in accordance with applicable law. Parents or lawful guardians should provide information concerning a child only where they are authorized to do so. GeneticxCare will not intentionally use children's personal data for purposes prohibited under applicable law.",
      ],
    },
    {
      h: "14. Data Security",
      p: [
        "GeneticxCare takes reasonable measures appropriate to the nature of the personal information it handles to protect personal information from unauthorized access, misuse, loss, alteration or disclosure. Measures may include access controls, account authentication, restricted access, password protection, administrative safeguards and appropriate technical safeguards.",
        "Access to health and genetic information is intended to be limited to authorized persons who require access for an appropriate purpose. No electronic system, communication channel or method of storage can be guaranteed completely secure.",
      ],
    },
    {
      h: "15. Data Retention",
      p: [
        "GeneticxCare may retain personal information for as long as reasonably necessary for providing requested services, responding to enquiries, maintaining appropriate service or business records, completing administrative processes, complying with legal and regulatory requirements, resolving disputes and protecting legitimate interests where applicable.",
        "Retention varies by information type, purpose, nature of service and applicable requirements. When information is no longer required, GeneticxCare will take reasonable steps to delete, anonymize or otherwise dispose of it, subject to applicable requirements.",
      ],
    },
    {
      h: "16. Your Rights",
      p: [
        "Subject to applicable law and provisions in force at the relevant time, individuals may have rights concerning personal data, including access to information about personal data being processed, correction of inaccurate or incomplete personal data, erasure where applicable, withdrawal of consent where processing is based on consent, grievance redressal and other rights available under applicable law.",
        "Requests may be made using the privacy contact details. Identity verification may be required.",
      ],
    },
    {
      h: "17. Privacy and Grievance Contact",
      p: [
        "GeneticxCare, a healthcare brand operated by R114D Private Limited. Email: privacy@geneticxcare.com with the subject “Privacy / Data Protection Request”. Privacy-related requests and grievances may be submitted using this address.",
      ],
    },
    {
      h: "18. Information About Other People",
      p: [
        "You may provide GeneticxCare with information about family members where relevant to a genetics-related service. You should provide another person's personal, medical or genetic information only where authorized or otherwise permitted to do so. This is particularly relevant when providing family medical or genetic history.",
      ],
    },
    {
      h: "19. Third-Party Services",
      p: [
        "Our website and services may involve communication platforms, payment providers, website and hosting providers, technology providers, healthcare professionals, hospitals and healthcare institutions, diagnostic laboratories and other service providers involved in delivering or supporting the requested service. These organizations may have their own terms, privacy policies and data-handling practices.",
      ],
    },
    {
      h: "20. Communications",
      p: [
        "We may use your contact information to communicate with you regarding your enquiry, consultation arrangements, requested services, follow-up relating to your service and administrative matters. We will not use your information for unrelated promotional communications where consent or another lawful basis is required.",
      ],
    },
    {
      h: "21. Accuracy of Information",
      p: [
        "You are encouraged to provide information that is accurate and complete to the best of your knowledge. If you identify an error in personal information provided to GeneticxCare, you may contact us to request correction where applicable.",
      ],
    },
    {
      h: "22. Changes to This Privacy Policy",
      p: [
        "GeneticxCare may update this Privacy Policy to reflect changes in services, technology, data-processing practices, applicable laws or data-protection requirements. The latest version will be published with an updated Last Updated date. Where required by applicable law, GeneticxCare will provide additional notice or obtain consent for relevant changes.",
      ],
    },
    {
      h: "23. Applicable Law",
      p: [
        "This Privacy Policy is intended to operate in accordance with applicable laws and regulations of India. Nothing in this Privacy Policy is intended to limit any rights or protections available to individuals under applicable law.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const TERMS: LegalDoc = {
  title: "Terms of Use",
  intro: [
    "Welcome to GeneticxCare, a healthcare brand operated by R114D Private Limited.",
    "These Terms of Use govern your access to and use of the GeneticxCare website, its content, communication channels and services.",
    "By accessing or using the GeneticxCare website or requesting our services, you agree to these Terms to the extent applicable to your use of the website or services.",
    "If you do not agree with these Terms, please do not use the website or request services through it.",
  ],
  sections: [
    {
      h: "1. Nature of GeneticxCare Services",
      p: [
        "GeneticxCare provides genetics-focused and healthcare-support services, which may include genetic counseling, genetic risk assessment, genetic testing guidance, genetic report discussion, genetic health guidance, healthcare navigation and support, and genetics-focused support for healthcare professionals and institutions.",
        "Services may be provided through online consultations and in-person consultations through participating healthcare institutions under the Regional Consultation Program, where available.",
        "GeneticxCare's services support understanding of genetic information, assessment of possible genetic or familial factors, counseling, testing guidance and appropriate healthcare decision-making. GeneticxCare does not represent its services as a replacement for all medical or specialist care. Where physical examination, medical diagnosis, treatment or specialist intervention is required, GeneticxCare may recommend an appropriate healthcare professional or institution.",
      ],
    },
    {
      h: "2. Medical and Genetics Information",
      p: [
        "Information provided through the website is for general educational and healthcare-support purposes. It should not be treated as a medical diagnosis, substitute for physical examination, prescription, treatment plan, emergency medical care, or substitute for appropriate care from a qualified healthcare professional.",
        "Genetic counseling may help individuals and families understand genetic information, inherited risks, testing options and implications. It does not guarantee a diagnosis, test result, treatment outcome or health outcome.",
      ],
    },
    {
      h: "3. Online Consultation",
      p: [
        "Online genetic counseling may be provided where remote consultation is appropriate. Suitability may depend on the nature of concern, information available, clinical complexity, medical records, need for physical examination, specialist evaluation and other circumstances.",
        "GeneticxCare may recommend in-person consultation or referral. Online consultation does not replace physical assessment, immediate medical attention or emergency care. Technical problems may affect the consultation experience.",
      ],
    },
    {
      h: "4. Regional Consultation Program",
      p: [
        "GeneticxCare may facilitate genetics-focused consultations through participating hospitals, healthcare institutions or other appropriate healthcare settings. Availability depends on participating institutions, location, professional and appointment availability, nature of service, and legal, regulatory and clinical requirements.",
        "GeneticxCare may work collaboratively with institutions while maintaining its role as a genetics-focused service provider. Independent medical diagnosis, treatment or other clinical services remain the responsibility of the relevant institution or professional.",
      ],
    },
    {
      h: "5. Prenatal Genetic Services",
      p: [
        "Prenatal genetic services provided through GeneticxCare are conducted through appropriate registered healthcare institutions and qualified professionals, where applicable. GeneticxCare does not provide independent online prenatal diagnostic services.",
        "Prenatal diagnostic activities are subject to applicable legal, regulatory and clinical requirements. Scope and availability depend on participating institution, professionals and nature of service.",
      ],
    },
    {
      h: "6. Genetic Testing and Diagnostic Coordination",
      p: [
        "GeneticxCare may provide information and guidance concerning genetic testing, including whether testing may be relevant, test categories, potential benefits and limitations, possible implications, testing processes and follow-up.",
        "Where appropriate, GeneticxCare may assist with testing coordination, including sample collection arrangements, specimen transfer to an independent diagnostic laboratory and supporting communication.",
        "GeneticxCare does not perform genetic laboratory testing or independently issue genetic laboratory reports. Testing, laboratory analysis and reporting are performed by the respective independent diagnostic laboratory. GeneticxCare does not guarantee a definitive diagnosis or clinically useful result.",
      ],
    },
    {
      h: "7. Genetic Report Discussion",
      p: [
        "GeneticxCare may provide discussion and interpretation support concerning existing genetic or genomic laboratory reports in the context of personal and family information. Usefulness depends on report quality, completeness of clinical information, family history and current scientific knowledge.",
        "Further review of available genomic data may be considered when clinically relevant. Such review is not routine for every report and may require separate consent or service arrangements.",
      ],
    },
    {
      h: "8. Third-Party Services",
      p: [
        "GeneticxCare may work with or refer individuals to hospitals, healthcare professionals, healthcare institutions, independent diagnostic laboratories, technology providers, payment providers, communication providers and other relevant service providers.",
        "Third-party services are generally subject to their own terms, policies and professional responsibilities. GeneticxCare does not control independent third-party services and does not assume responsibility for matters solely within their control.",
      ],
    },
    {
      h: "9. Service User Responsibilities",
      p: [
        "Users are expected to provide accurate and complete information, relevant medical and family history when requested, material information relevant to consultation, accurate contact information, and to follow reasonable service instructions.",
        "Users must not knowingly provide false, misleading or fraudulent information and should respect privacy, safety and the professional environment of GeneticxCare personnel and participating institutions.",
      ],
    },
    {
      h: "10. Website Information",
      p: [
        "GeneticxCare aims to provide accurate and useful information. Website content may be updated, scientific and clinical knowledge may develop, information may not apply to every individual, and content should not be interpreted as personalized medical advice unless provided as part of an appropriate consultation.",
        "GeneticxCare does not guarantee that every piece of website information will always be complete, current or error-free.",
      ],
    },
    {
      h: "11. Intellectual Property",
      p: [
        "Unless otherwise stated, website text, logos, branding, graphics, images, design, educational materials, original written content and other materials are owned by or used by GeneticxCare / R114D Private Limited or authorized licensors.",
        "Users may access content for personal and informational purposes. Without prior written permission, users must not copy substantial portions, reproduce or republish proprietary content, modify or distribute materials commercially, use branding or logos without authorization, or represent GeneticxCare materials as their own. Nothing transfers ownership of intellectual property.",
      ],
    },
    {
      h: "12. Privacy",
      p: [
        "Use of the website and services may involve collection and processing of personal information. Such information is handled according to the GeneticxCare Privacy Policy. Users should review the Privacy Policy before submitting personal, medical or genetic information. Separate clinical, testing or service-specific consent will be obtained where required.",
      ],
    },
    {
      h: "13. Payments and Service-Specific Terms",
      p: [
        "Where a GeneticxCare service involves a fee, applicable fee and payment terms will be communicated before service. Certain services may have additional terms, consent requirements or arrangements. Where a third-party provider separately charges, that provider's fees and terms may apply.",
      ],
    },
    {
      h: "14. Limitations and Disclaimers",
      p: [
        "To the extent permitted by applicable law, GeneticxCare does not guarantee a particular diagnosis, genetic test result, treatment outcome, health outcome, identification of every genetic condition or underlying cause, a definitive answer from every genetic test, or uninterrupted website or online service availability.",
        "Genetic information has limitations, including cases where the cause is not identifiable through available testing or knowledge. GeneticxCare is not responsible for outcomes arising from inaccurate, incomplete or misleading information provided by a service user. Nothing excludes liability that cannot lawfully be excluded or limited.",
      ],
    },
    {
      h: "15. Emergency Care",
      p: [
        "GeneticxCare is not an emergency medical service. Website, email, WhatsApp and online consultation services should not be used for emergencies or situations requiring immediate medical attention. Seek care from an appropriate emergency medical service or healthcare facility.",
      ],
    },
    {
      h: "16. Changes to These Terms",
      p: [
        "GeneticxCare may update these Terms to reflect changes in services, technology, applicable laws or regulations or operational practices. The latest version will be published with an updated Last Updated date. Separate agreements or service-specific consents may continue to govern relevant services.",
      ],
    },
    {
      h: "17. Applicable Law",
      p: [
        "These Terms are intended to be governed by and interpreted in accordance with applicable laws of India. Any dispute will be subject to the jurisdiction of courts having appropriate jurisdiction under applicable law.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const DISCLAIMER: LegalDoc = {
  title: "Medical & Genetics Disclaimer",
  intro: [
    "GeneticxCare is a healthcare brand operated by R114D Private Limited.",
    "GeneticxCare provides genetics-focused counseling, assessment, testing guidance, genetic report discussion, genetic health guidance and related healthcare-support services.",
    "This Medical & Genetics Disclaimer explains the general limitations of information and services provided through the GeneticxCare website and related communication channels.",
  ],
  sections: [
    {
      h: "1. General Information",
      p: [
        "Information published on the GeneticxCare website is intended primarily for educational, informational and healthcare-support purposes. Website information is not intended to replace an individualized consultation with an appropriately qualified healthcare professional. Medical and genetic information can vary considerably between individuals.",
      ],
    },
    {
      h: "2. Genetic Counseling",
      p: [
        "Genetic counseling may help individuals and families understand personal and family health history, assess possible genetic or familial factors, understand genetic conditions, consider genetic testing options, understand benefits and limitations of testing, understand genetic information and laboratory reports, consider implications for family members and make informed healthcare decisions.",
        "It does not guarantee a particular diagnosis, genetic test result, treatment recommendation or health outcome. Usefulness may depend on accuracy and completeness of information.",
      ],
    },
    {
      h: "3. Genetic Risk Assessment",
      p: [
        "Genetic risk assessment may identify a possible increased, reduced or uncertain likelihood of a genetic or familial condition. It is not a guarantee that a condition will or will not occur.",
        "Risk may be influenced by family history, personal medical history, genetic factors, environmental factors, lifestyle, age and other clinical factors, and information not yet known. A family history alone may not establish a genetic diagnosis. Where appropriate, further clinical evaluation, testing or another professional consultation may be recommended.",
      ],
    },
    {
      h: "4. Genetic Testing",
      p: [
        "Genetic testing has limitations. A test may identify a variant, support diagnosis, help assess genetic risk, provide information relevant to family members, or provide no definitive explanation.",
        "A negative test does not necessarily exclude a genetic cause. A positive test does not necessarily mean a person will develop a condition or that treatment will be effective. Interpretation depends on test, technology, quality and scope, clinical information, family history, current knowledge and qualified professional interpretation. GeneticxCare does not guarantee identification of an underlying cause.",
      ],
    },
    {
      h: "5. Genetic Test Reports",
      p: [
        "Genetic test results should be considered in the appropriate clinical context. A finding should not be interpreted solely from its presence or absence in a report.",
        "Interpretation may require clinical features, family history, inheritance pattern, laboratory findings, variant classification, current evidence and other clinical information. Discussion with a treating physician, medical geneticist, specialist or other qualified healthcare professional may be recommended.",
      ],
    },
    {
      h: "6. Further Genomic Data Review",
      p: [
        "In some cases, an existing genomic dataset may warrant further review when additional analysis could be clinically relevant. Such review is not routine for every genetic report or genomic dataset. It may require separate consent and service arrangements. Additional findings cannot be guaranteed.",
      ],
    },
    {
      h: "7. Medical Diagnosis and Treatment",
      p: [
        "GeneticxCare's genetics-focused services do not automatically constitute a complete medical diagnosis or treatment service. Where diagnosis, physical examination, prescription, treatment or specialist intervention is required, an appropriately qualified healthcare professional may be recommended.",
        "GeneticxCare does not encourage individuals to start, stop or change prescribed medication or treatment solely on the basis of information from the website or general communication channels.",
      ],
    },
    {
      h: "8. Online Consultation",
      p: [
        "Online genetic counseling may be appropriate for many situations but has limitations and may not provide physical examination, direct clinical observation, immediate diagnostic testing, emergency assessment or all information available in person. GeneticxCare may recommend in-person consultation where required.",
      ],
    },
    {
      h: "9. Regional Consultation Program",
      p: [
        "GeneticxCare may provide or facilitate genetics-focused consultations through the Regional Consultation Program at participating healthcare institutions or appropriate locations. Availability and scope vary by location, institution, professional availability, clinical requirements and nature of concern.",
        "Independent medical diagnosis or treatment remains the responsibility of the relevant professional or institution.",
      ],
    },
    {
      h: "10. Prenatal Genetic Services",
      p: [
        "Prenatal genetic services provided through GeneticxCare are conducted through appropriate registered healthcare institutions and qualified professionals, where applicable. GeneticxCare does not provide independent online prenatal diagnostic services.",
        "Prenatal diagnostic activities are subject to applicable legal, regulatory and clinical requirements. GeneticxCare does not provide or support sex selection or sex determination services. Scope depends on participating institution, professionals and requirements.",
      ],
    },
    {
      h: "11. Genetic Testing and Third-Party Laboratories",
      p: [
        "Where genetic testing is performed by an independent diagnostic laboratory or healthcare provider, that laboratory or provider is responsible for testing, laboratory analysis and laboratory reporting within its services.",
        "GeneticxCare may assist with test selection guidance, pre-test counseling, testing coordination, report discussion and post-test counseling. The test methodology, laboratory processes and report remain the responsibility of the diagnostic provider.",
      ],
    },
    {
      h: "12. Health Guidance",
      p: [
        "GeneticxCare may provide health education and healthcare-navigation support where genetics, family history or inherited risk may be relevant. Such guidance supports informed healthcare decisions and is not a substitute for individualized medical evaluation where required.",
      ],
    },
    {
      h: "13. Emergency Situations",
      p: [
        "GeneticxCare is not an emergency medical service. Do not use the website, email, WhatsApp or online consultation service for emergencies or situations requiring immediate medical attention. Seek care from an appropriate emergency medical service or healthcare facility.",
      ],
    },
    {
      h: "14. Information Provided by Users",
      p: [
        "Accuracy and usefulness of genetics-related assessment may depend on information provided. Individuals should provide accurate and complete information to the best of their knowledge, including personal medical history, family history, previous diagnoses, laboratory reports, genetic results, developmental history and other relevant information. Incomplete or inaccurate information may affect assessment, counseling or interpretation.",
      ],
    },
    {
      h: "15. Family and Genetic Information",
      p: [
        "Genetic information may have implications beyond the individual and may be relevant to biological relatives. However, genetic information does not always predict another family member's health outcome. Family members may have different genetic, medical and environmental factors.",
        "Individuals should not make significant healthcare decisions for another person solely on information obtained from GeneticxCare without appropriate professional evaluation.",
      ],
    },
    {
      h: "16. Limitations of Current Genetic Knowledge",
      p: [
        "Genetic science continues to develop. Not all genetic conditions are understood, not all disease-causing variants are known, and not all genetic variants can be interpreted with certainty.",
        "Individuals may receive a confirmed diagnosis, possible or suspected diagnosis, uncertain finding or no definitive genetic explanation. Absence of a genetic explanation does not necessarily mean a condition has no genetic contribution.",
      ],
    },
    {
      h: "17. Variants of Uncertain Significance",
      p: [
        "A Variant of Uncertain Significance means that available scientific evidence may not currently allow determination of clinical significance. A VUS should not generally be treated as confirmation of genetic disease. Interpretation may change as scientific knowledge develops. Where appropriate, individuals may be advised regarding follow-up or future reinterpretation.",
      ],
    },
    {
      h: "18. No Guarantee of Outcome",
      p: [
        "GeneticxCare does not guarantee a particular diagnosis, positive or negative genetic test result, identification of a genetic cause, treatment outcome, prevention of a genetic condition, reproductive outcome or specific health outcome. Healthcare and genetics involve uncertainty and outcomes vary.",
      ],
    },
    {
      h: "19. Website and Digital Communications",
      p: [
        "GeneticxCare makes reasonable efforts to provide useful and accurate information. However, information may change, become outdated, be general rather than individualized, or not apply to every clinical situation. GeneticxCare does not guarantee that every website page or general communication contains the most recent scientific or clinical information.",
      ],
    },
    {
      h: "20. Third-Party Information",
      p: [
        "GeneticxCare may provide links or references to external healthcare organizations, diagnostic providers, professional resources or websites for convenience and reference. GeneticxCare does not necessarily endorse or guarantee their accuracy, completeness or reliability. Users should independently evaluate third-party information and seek professional advice where required.",
      ],
    },
    {
      h: "21. No Self-Diagnosis",
      p: [
        "Information from the GeneticxCare website, social media, email, WhatsApp or general communication channels should not be used for self-diagnosis. Individuals should not start or stop medication, change prescribed treatment, make major reproductive decisions, make surgical decisions or other significant healthcare decisions solely on general information from these channels.",
      ],
    },
    {
      h: "22. Professional Judgment",
      p: [
        "Genetic counseling and genetics-related assessment involve professional judgment. Recommendations may vary depending on clinical information, family history, available testing, scientific evidence, professional guidance and individual circumstances. Where appropriate, GeneticxCare may recommend another qualified healthcare professional.",
      ],
    },
    {
      h: "23. Changes to This Disclaimer",
      p: [
        "GeneticxCare may update this Disclaimer to reflect changes in services, clinical practice, scientific knowledge, technology or applicable laws and regulations. The latest version will be published with an updated Last Updated date.",
      ],
    },
  ],
};
