import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";
import { peptideCategories } from "@/data/peptideCategories";

export const metadata = {
  alternates: { canonical: "/peptides" },
  title: "Peptide Library — 54 Research Peptide Profiles | Prof. Peptide",
  description:
    "Browse 54 research peptide profiles organized by category. Mechanisms, research summaries, dosage guidance, and safety information for each compound.",
};

const categories = peptideCategories;

export default function PeptidesPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const filtered = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides"}]}} />
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Peptide Library</h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-lg leading-relaxed">
          Research profiles organized by category. Click any peptide to read the full profile including mechanism of action, key research findings, and references.
        </p>
        {filter && (
          <Link href="/peptides" className="text-xs text-[#3A759F] hover:underline mt-2 inline-block">
            &larr; Show all categories
          </Link>
        )}
      </div>

      <div className="space-y-10">
        {filtered.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
              <CategoryIcon name={cat.name} /> {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.peptides.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#16181B] dark:text-slate-200 hover:text-[#3A759F] transition-all duration-150 hover:scale-105 origin-left group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-[#3A759F] transition-colors flex-shrink-0" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            {cat.slug === "bioregulators" && (
              <Link href="/bioregulators" className="text-sm text-[#3A759F] hover:underline mt-3 inline-block">
                Read the bioregulator guide &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
