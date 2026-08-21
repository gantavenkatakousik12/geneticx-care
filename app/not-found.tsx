import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-canvas py-24">
      <div className="wrap-narrow text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 text-[32px] text-forest-900 md:text-[40px]">
          This page could not be found
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
          The page you are looking for may have moved. You can return to the
          homepage or contact GeneticxCare for help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-green">Back to Home</Link>
          <Link href="/contact" className="btn btn-outline">Contact GeneticxCare</Link>
        </div>
      </div>
    </section>
  );
}
