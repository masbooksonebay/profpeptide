import type { ReactNode } from "react";

/**
 * A visible, dated correction / editor's note for a news article. Renders at the TOP of the article
 * body (after the H1, before the intro) as a distinct callout — NOT a silent edit. A correction is a
 * public record and stays permanently once added.
 *
 * Reusable infrastructure for the news beat, which produces corrections by design (regulatory claims
 * shift). `label` defaults to "Correction"; pass "Editor's note" or "Update" for a non-error change.
 *
 * Convention:
 *   <ArticleCorrection date="August 19, 2026">
 *     An earlier version said X. That was inaccurate: {the correct fact}. The article has been corrected.
 *   </ArticleCorrection>
 * When you add one, also bump the article's JSON-LD `dateModified` to the correction date.
 */
export default function ArticleCorrection({
  date,
  label = "Correction",
  children,
}: {
  date: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div
      role="note"
      aria-label={`${label} — ${date}`}
      className="mb-6 rounded-lg border-l-4 border-[#3A759F] bg-[#3A759F]/5 dark:bg-[#3A759F]/10 px-4 py-3"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-[#3A759F] mb-1">
        {label} &middot; {date}
      </p>
      <div className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{children}</div>
    </div>
  );
}
