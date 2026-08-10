import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { supplementCategories, supplementsForCategory, supplementCount } from "@/data/supplements";
import { buildPageMetadata } from "@/lib/seo";
import { HubCategoryBrowser } from "@/components/HubCategoryBrowser";

export const metadata = buildPageMetadata({
  path: "/supplements",
  title: `Supplement Library — ${supplementCount} Natural Supplement Profiles | Prof. Peptide`,
  description: `Browse ${supplementCount} natural supplement profiles covering metabolic health, recovery, cognition, longevity, sleep, and more. Evidence-based and independently researched.`,
  // No own opengraph-image.tsx — defer to the inherited root card (no explicit images here).
  useDefaultOgImage: false,
});

// Flattened, serializable category data for the client browser. Category filtering happens on the
// client (see HubCategoryBrowser); this page reads no searchParams, so it prerenders ○ static.
const categories = supplementCategories.map((c) => ({
  slug: c.slug,
  name: c.name,
  items: supplementsForCategory(c.slug),
}));

export default function SupplementsPage() {
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
        </div>
        <HubCategoryBrowser categories={categories} hrefPrefix="/supplements" variant="supplements" />
      </div>
    </>
  );
}
