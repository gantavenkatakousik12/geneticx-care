import LegalPage from "@/components/LegalPage";
import { TERMS } from "@/lib/legal";

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your access to and use of the GeneticxCare website, its content, communication channels and services.",
  alternates: { canonical: "/terms-of-use" },
};

export default function Page() {
  return <LegalPage doc={TERMS} path="/terms-of-use" />;
}
