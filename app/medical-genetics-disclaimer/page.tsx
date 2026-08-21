import LegalPage from "@/components/LegalPage";
import { DISCLAIMER } from "@/lib/legal";

export const metadata = {
  title: "Medical & Genetics Disclaimer",
  description:
    "The general limitations of the information and genetics services provided through the GeneticxCare website and related communication channels.",
  alternates: { canonical: "/medical-genetics-disclaimer" },
};

export default function Page() {
  return <LegalPage doc={DISCLAIMER} path="/medical-genetics-disclaimer" />;
}
