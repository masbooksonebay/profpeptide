import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { peptideCategories, profileCount } from "@/data/peptideCategories";
import { buildPageMetadata } from "@/lib/seo";
import { HubCategoryBrowser } from "@/components/HubCategoryBrowser";

export const metadata = buildPageMetadata({
  path: "/peptides",
  title: `Peptide Library — ${profileCount} Research Peptide Profiles | Prof. Peptide`,
  description: `Browse ${profileCount} research peptide profiles organized by category. Mechanisms, research summaries, dosage guidance, and safety information for each compound.`,
  // Defer OG image to this segment's opengraph-image.tsx (page-specific card).
  useDefaultOgImage: false,
});

// Flattened, serializable category data for the client browser. Category filtering happens on the
// client (see HubCategoryBrowser); this page reads no searchParams, so it prerenders ○ static.
const categories = peptideCategories.map((c) => ({ slug: c.slug, name: c.name, items: c.peptides }));

export default function PeptidesPage() {
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
        </div>
        <HubCategoryBrowser categories={categories} hrefPrefix="/peptides" variant="peptides" />
      </div>
    </>
  );
}
