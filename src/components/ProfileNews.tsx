import Link from "next/link";
import type { NewsArticle } from "@/data/news";

// The "In the News" list for a peptide profile. It is rendered inside a profile
// section whose title ("In the News") and top divider come from the profile's
// generic section renderer, so this component returns only the list of cards.
// The caller guards on articlesForPeptide(slug).length before adding the section,
// so `articles` is non-empty here; the guard below is a defensive fallback.
//
// Placed BELOW the studies array on purpose: peer-reviewed studies and PP's own
// regulatory commentary are different kinds of source, and a section beneath the
// literature (rather than interleaved) keeps that distinction clear and degrades
// to nothing on the profiles with no matching coverage.
export default function ProfileNews({ articles }: { articles: NewsArticle[] }) {
  if (articles.length === 0) return null;
  return (
    <div className="space-y-3">
      {articles.map((a) => (
        <Link
          key={a.slug}
          href={`/news/${a.slug}`}
          className="block border border-gray-100 dark:border-slate-700 rounded-xl p-4 hover:border-[#3A759F] transition-colors group"
        >
          <p className="text-xs text-gray-400 dark:text-slate-500 mb-1">{a.date}</p>
          <p className="text-lg font-medium text-[#16181B] dark:text-slate-100 group-hover:text-[#3A759F] transition-colors leading-snug">
            {a.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
