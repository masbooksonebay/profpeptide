import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { articles } from "@/data/news";

export const metadata = {
  alternates: { canonical: "/news" },
  title: "News — Peptide Research & Regulatory Updates | Prof. Peptide",
  description:
    "Latest news on peptide research, FDA regulatory changes, and supplement industry developments. Independent reporting from Prof. Peptide.",
  // No images here: the /news hub's OG image is supplied by this segment's opengraph-image.tsx /
  // twitter-image.tsx (the content-generic vial card). An explicit image here would win over the
  // file route (and this one was also wrongly declared 1024x1024). The news ARTICLES keep their
  // own og-image.png overrides — they stay on the tile under the chosen scope.
  openGraph: {
    title: "News — Peptide Research & Regulatory Updates",
    description: "Latest news on peptide research, FDA regulatory changes, and supplement industry developments.",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
};

export default function NewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "News" }])} />
      <div className="section max-w-3xl">
        <span className="tag mb-3 inline-block">Latest Updates</span>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">News</h1>
        <p className="text-lg text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
          Peptide research updates, regulatory changes, and industry developments.
        </p>

        {/*
          Newest article shows its full summary; older articles collapse into
          accordions (headline + date always visible, summary behind a chevron).
          Built with native <details>/<summary> ON PURPOSE: the collapsed excerpt
          stays in the server-rendered HTML, so every summary is crawlable. Do NOT
          swap this for a `{open && (<div>…</div>)}` pattern — that omits the text
          from the initial HTML and hides it from search engines.
        */}
        <div className="space-y-6">
          {articles.map((a, i) =>
            i === 0 ? (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="block border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] hover:shadow-md transition-all group"
              >
                <p className="text-xs text-gray-400 dark:text-slate-500 mb-1">{a.date}</p>
                <h2 className="text-base font-semibold text-[#16181B] dark:text-slate-100 group-hover:text-[#3A759F] transition-colors mb-2">
                  {a.title}
                </h2>
                <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed">{a.excerpt}</p>
                <span className="text-xs font-medium text-[#3A759F] mt-3 inline-block">Read more &rarr;</span>
              </Link>
            ) : (
              <details
                key={a.slug}
                className="group block border border-gray-100 dark:border-slate-700 rounded-xl hover:border-[#3A759F] transition-all"
              >
                <summary className="cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                  <p className="text-xs text-gray-400 dark:text-slate-500 mb-1">{a.date}</p>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-base font-semibold text-[#16181B] dark:text-slate-100 group-hover:text-[#3A759F] transition-colors">
                      {a.title}
                    </h2>
                    <svg
                      className="w-4 h-4 mt-1 flex-shrink-0 text-[#3A759F] transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed">{a.excerpt}</p>
                  <Link
                    href={`/news/${a.slug}`}
                    className="text-xs font-medium text-[#3A759F] mt-3 inline-block hover:underline"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </details>
            ),
          )}
        </div>
      </div>
    </>
  );
}
