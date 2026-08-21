import LegalPage from "@/components/LegalPage";
import { PRIVACY } from "@/lib/legal";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How GeneticxCare collects, uses, stores and shares personal, health and genetic information in connection with our website, communications and services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <LegalPage doc={PRIVACY} path="/privacy-policy" />;
}
