import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/methodology",
  title: "Editorial Standards & Methodology | Prof. Peptide",
  description:
    "How Prof. Peptide researches, reviews, and verifies: primary-source citations, human editorial review before publishing, and vendor verification criteria.",
  ogTitle: "Editorial Standards & Methodology",
  ogDescription: "How Prof. Peptide researches, reviews, and verifies its content.",
  useDefaultOgImage: false,
});

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Editorial Standards & Methodology",
          description:
            "How Prof. Peptide researches, reviews, and verifies its peptide profiles, guides, and vendor evaluations.",
          url: "https://profpeptide.com/methodology",
          publisher: { "@type": "Organization", name: "Prof. Peptide", url: "https://profpeptide.com" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://profpeptide.com" },
            { "@type": "ListItem", position: 2, name: "Methodology" },
          ],
        }}
      />
      <div className="section max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Editorial Standards &amp; Methodology</h1>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">Last reviewed: June 2026</p>

        <p className="text-xl font-medium text-[#1e2d3d] dark:text-slate-100 leading-relaxed mb-10">
          How we research, review, and verify what we publish &mdash; described honestly, not aspirationally.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">How we research</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Our peptide profiles are built from primary sources &mdash; peer-reviewed literature indexed on PubMed and PMC, published clinical-trial data, and FDA drug labels &mdash; rather than secondhand summaries. Each profile carries its own citations: specific claims such as mechanism, half-life, and pharmacokinetics are attributed to named studies, and every profile ends with a linked References section pointing back to the original sources.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mt-3">
              Where the evidence is preclinical, limited, or contested, we say so plainly instead of padding the gap with personal protocols dressed up as facts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">How we verify</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Every page is reviewed by the Prof. Peptide editorial team before it is published &mdash; a human read for accuracy against the cited sources, not an automated pass. The &ldquo;Last reviewed&rdquo; date shown on our profiles and guides is literal: it marks when a person last checked that page against the current evidence, not merely when it first went live.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">How we evaluate vendors</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Vendors earn a place in our{" "}
              <Link href="/best-peptide-vendors" className="text-[#3A759F] hover:underline">vetted catalog</Link>{" "}
              against the same verifiable criteria: third-party laboratory testing with published Certificates of Analysis, documented purity standards, transparent shipping, responsive customer service, and a positive reputation in the research community. We describe each vendor by its own verified differentiator rather than borrowing another supplier&rsquo;s credentials.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mt-3">
              Prof. Peptide may earn affiliate commissions when you use our discount codes or buy through our links. Those affiliate relationships do not determine vendor inclusion, ranking, or verification &mdash; see our full{" "}
              <Link href="/disclaimer" className="text-[#3A759F] hover:underline">disclaimer</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Research-use-only stance</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              All content on Prof. Peptide is provided for educational and research purposes only. The compounds we profile are described as research-use-only materials; nothing on this site is medical advice, diagnosis, or a treatment recommendation. We frame compounds in the context of the published research, not as products for human use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">How we keep content current</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              We review and update pages as new evidence emerges &mdash; new studies, FDA label changes, and regulatory shifts &mdash; rather than on a fixed calendar. Developments we consider material are tracked on our{" "}
              <Link href="/news" className="text-[#3A759F] hover:underline">news beat</Link>, and the relevant profiles are revisited and re-dated when the underlying evidence changes.
            </p>
          </section>
        </div>

        <div className="mt-10 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          For educational and research purposes only. Not medical advice. Not for human use.
        </div>
      </div>
    </>
  );
}
