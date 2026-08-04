import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";
import {
  supplementCategories as categories,
  supplementsForCategory,
  supplementCount,
} from "@/data/supplements";

export const metadata = {
  alternates: { canonical: "/supplements" },
  title: `Supplement Library — ${supplementCount} Natural Supplement Profiles | Prof. Peptide`,
  description: `Browse ${supplementCount} natural supplement profiles covering metabolic health, recovery, cognition, longevity, sleep, and more. Evidence-based and independently researched.`,
};

export default function SupplementsPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const visibleCategories = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Supplements" }])} />
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Supplement Library</h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-lg leading-relaxed">
          Evidence-based supplement profiles organized by category. Click any supplement to read the
          full profile including uses, benefits, and research.
        </p>
        {filter && (
          <Link href="/supplements" className="text-xs text-[#3A759F] hover:underline mt-2 inline-block">
            &larr; Show all categories
          </Link>
        )}
      </div>
      <div className="space-y-10">
        {visibleCategories.map((cat) => {
          const items = supplementsForCategory(cat.slug);
          return (
            <div key={cat.slug}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
                <CategoryIcon name={cat.name} /> {cat.name}
              </h2>
              <ul className="space-y-2">
                {items.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/supplements/${s.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#16181B] dark:text-slate-200 hover:text-[#3A759F] transition-all duration-150 hover:scale-105 origin-left group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-[#3A759F] transition-colors flex-shrink-0" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
