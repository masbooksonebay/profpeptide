import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { glossarySections } from "@/data/glossary";

export const metadata = buildPageMetadata({
  path: "/glossary",
  title: "Peptide & Supplement Research Glossary | Prof. Peptide",
  description:
    "Key terms and definitions for researchers exploring peptides and natural supplements. Alphabetical glossary covering reconstitution, dosing, peptide science, and more.",
  // Defer OG image to this segment's opengraph-image.tsx (page-specific card).
  useDefaultOgImage: false,
});

// Terms live in the single-source data module (src/data/glossary.ts) so the derived
// search index can index each term without a second copy drifting out of sync.
const sections = glossarySections;

export default function GlossaryPage() {
  const allTerms = sections.flatMap((s) => s.terms);
  return (
    <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "name": "Peptide & Supplement Research Glossary",
      "url": "https://profpeptide.com/glossary",
      "hasDefinedTerm": allTerms.map(([term, def]) => ({
        "@type": "DefinedTerm",
        "name": term,
        "description": def,
      })),
    }} />
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Reference</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">
        Peptide &amp; Supplement Research Glossary
      </h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
        Key terms and definitions for researchers exploring peptides and natural supplements.
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.letter}>
            <h2 className="text-lg font-bold text-[#3A759F] mb-3 pb-2 border-b border-gray-100 dark:border-slate-800">
              {s.letter}
            </h2>
            <dl className="space-y-3">
              {s.terms.map(([term, def]) => (
                <div key={term}>
                  <dt className="text-sm font-semibold text-[#16181B] dark:text-slate-100">
                    {term}
                  </dt>
                  <dd className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mt-0.5">
                    {def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">See Also</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/peptides" className="text-sm text-[#3A759F] hover:underline">Peptide Library</Link>
          <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline">Supplement Library</Link>
          <Link href="/calculator" className="text-sm text-[#3A759F] hover:underline">Dosage Calculator</Link>
          <Link href="/faq" className="text-sm text-[#3A759F] hover:underline">FAQ</Link>
          <Link href="/compare" className="text-sm text-[#3A759F] hover:underline">Comparisons</Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mt-8">
        This glossary is for educational and research purposes only. Nothing on this page constitutes medical advice. Not for human use.
      </p>
    </div>
    </>
  );
}
