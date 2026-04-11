import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "News — Peptide Research & Regulatory Updates | Prof. Peptide",
  description:
    "Latest news on peptide research, FDA regulatory changes, and supplement industry developments. Independent reporting from Prof. Peptide.",
  openGraph: {
    title: "News — Peptide Research & Regulatory Updates",
    description: "Latest news on peptide research, FDA regulatory changes, and supplement industry developments.",
    images: [{ url: "https://www.profpeptide.com/pp-icon.png", width: 1024, height: 1024, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["https://www.profpeptide.com/pp-icon.png"],
  },
};

const articles = [
  {
    title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
    slug: "rfk-peptide-ban-2026",
    date: "April 10, 2026",
    excerpt:
      "HHS Secretary Robert F. Kennedy Jr. announced that 14 of 19 previously restricted peptides will be moved off the FDA\u2019s \u201Cdo not compound\u201D list \u2014 the largest regulatory reversal in U.S. peptide history.",
  },
];

export default function NewsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News" },
        ],
      }} />
      <div className="section max-w-3xl">
        <span className="tag mb-3 inline-block">Latest Updates</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">News</h1>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
          Peptide research updates, regulatory changes, and industry developments.
        </p>

        <div className="space-y-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/news/${a.slug}`}
              className="block border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] hover:shadow-md transition-all group"
            >
              <p className="text-xs text-gray-400 dark:text-slate-500 mb-1">{a.date}</p>
              <h2 className="text-base font-semibold text-[#1e2d3d] dark:text-slate-100 group-hover:text-[#0891b2] transition-colors mb-2">
                {a.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{a.excerpt}</p>
              <span className="text-xs font-medium text-[#0891b2] mt-3 inline-block">Read more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
