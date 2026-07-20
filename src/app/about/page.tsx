import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/about",
  title: "About Prof. Peptide — Peptide Research Consolidated",
  description:
    "Prof. Peptide consolidates peptide research from scattered sources into structured profiles, hands-on guides, a verified vendor catalog, and a native iOS app.",
  ogTitle: "About Prof. Peptide",
  ogDescription: "Peptide research consolidated. One source, structured.",
  useDefaultOgImage: false,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Prof. Peptide",
          description:
            "Prof. Peptide consolidates peptide research from scattered sources into structured profiles, hands-on guides, a verified vendor catalog, and a native iOS app.",
          url: "https://profpeptide.com/about",
          datePublished: "2026-05-18",
          dateModified: "2026-05-18",
          publisher: {
            "@type": "Organization",
            name: "Prof. Peptide",
            url: "https://profpeptide.com",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://profpeptide.com" },
            { "@type": "ListItem", position: 2, name: "About" },
          ],
        }}
      />
      <div className="section max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">About Prof. Peptide</h1>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">Last reviewed: May 18, 2026</p>

        <p className="text-xl font-medium text-[#16181B] dark:text-slate-100 leading-relaxed mb-10">
          Peptide research consolidated. One source, structured.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">
              The problem we built this to fix
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Peptide research lives in three difficult places: scattered Reddit threads, vendor product pages, and dense PubMed papers. Each has fragments &mdash; but no single source brings them together with the structure researchers actually need.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mt-3">
              Prof. Peptide is built to fix that.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">
              What you&rsquo;ll find here
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold">Structured peptide profiles</span> covering mechanism, reported research findings, dosing protocols, side effects, half-life, storage, and current studies &mdash; same canonical structure on every page so once you know how to read one profile, you can read them all.
              </li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold">Hands-on{" "}
                  <Link href="/guides" className="text-[#3A759F] hover:underline">guides</Link>
                </span>{" "}
                for the practical questions: dose math, injection technique, reconstitution, units (mg/mcg/IU), storage.
              </li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold">A verified{" "}
                  <Link href="/coupons" className="text-[#3A759F] hover:underline">vendor catalog</Link>
                </span>{" "}
                with affiliate codes &mdash; every vendor reviewed for COA transparency, third-party testing, and reliable fulfillment.
              </li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold">A native{" "}
                  <Link href="/app" className="text-[#3A759F] hover:underline">iOS app</Link>
                </span>{" "}
                for dose calculations and compound lookups on the go.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">How we work</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Profiles are sourced from peer-reviewed research and primary vendor documentation. Citations are linked where applicable. Pages are dated and refreshed as new research lands. Where the data isn&rsquo;t clear, we say so &mdash; rather than padding with personal protocols dressed up as facts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Affiliate disclosure</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Prof. Peptide is supported by affiliate commissions from the vendors we list. The codes on this site (PROFPEPTIDE, PROF10, and others) give you a discount and pay us a commission when used. Vendors are selected and ranked based on verified COA transparency, purity standards, and fulfillment reliability &mdash; independently of commission rates.
            </p>
          </section>
        </div>

        <div className="mt-10 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          For educational and research purposes only. Not medical advice. Not for human use.
        </div>

        <PageDisclaimer />
      </div>
    </>
  );
}
