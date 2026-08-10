import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";
import { peptideCategories, profileCount } from "@/data/peptideCategories";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides",
  title: `Peptide Library — ${profileCount} Research Peptide Profiles | Prof. Peptide`,
  description: `Browse ${profileCount} research peptide profiles organized by category. Mechanisms, research summaries, dosage guidance, and safety information for each compound.`,
  // Defer OG image to this segment's opengraph-image.tsx (page-specific card).
  useDefaultOgImage: false,
});

const categories = peptideCategories;

export default function PeptidesPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const filtered = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Peptides" }])} />
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
            {/* Bolder, darker section header — shares the /prices header system */}
            <h2 className="text-lg font-bold text-[#16181B] dark:text-slate-100 mb-3 pb-2 border-b-2 border-[#D9DEE4] dark:border-slate-700 flex items-center gap-2">
              <CategoryIcon name={cat.name} /> {cat.name}
            </h2>
            {/* One separation style: a thin rule between each entry (divide-y). */}
            <ul className="divide-y divide-gray-100 dark:divide-slate-800">
              {cat.peptides.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="flex items-center gap-2 py-2.5 text-sm font-medium text-[#16181B] dark:text-slate-200 hover:text-[#3A759F] transition-colors group"
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
