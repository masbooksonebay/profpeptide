import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/bpc-157-vs-tb-500" },
  title: "BPC-157 vs TB-500 — How These Recovery Peptides Differ | Prof. Peptide",
  description:
    "BPC-157 vs TB-500 comparison — mechanism of action, research differences, tissue targets, and how to choose between these two recovery peptides.",
};

const rows = [
  ["Origin", "Derived from human gastric juice (15 amino acids)", "Synthetic fragment of Thymosin Beta-4 (naturally occurring protein)"],
  ["Primary Mechanism", "NO system modulation, EGR-1 (early growth response protein 1 \u2014 a transcription factor that triggers tissue repair gene expression) upregulation, growth factor signaling", "Actin sequestration, cell migration, M1\u2192M2 macrophage polarization (immune cells switching from inflammatory mode to healing mode)"],
  ["Strongest Research Area", "Gut/GI healing \u2014 origin is gastric biology", "Systemic wound healing and cardiac regeneration"],
  ["Tendon Research", "Very strong \u2014 EGR-1 pathway is tendon-specific", "Good \u2014 tenocyte (tendon cell) migration and collagen organization"],
  ["Gut Research", "Dominant \u2014 most extensively studied application", "Minimal GI-specific data"],
  ["Cardiac Research", "Present but secondary", "Strongest \u2014 landmark Nature paper on epicardial progenitor cell (heart tissue stem cell) activation"],
  ["CNS/Neuroprotection", "Extensive \u2014 dopaminergic/serotonergic modulation, nerve crush recovery", "Present \u2014 oligodendrocyte (CNS cells that build the myelin insulation around nerves) differentiation, remyelination (MS research interest)"],
  ["Anti-inflammatory", "Yes \u2014 via NO and cytokine normalization", "Yes \u2014 via macrophage polarization"],
  ["Scope", "Primarily local at injury site", "Systemic \u2014 works across multiple tissues simultaneously"],
  ["Human Trials", "Limited \u2014 mostly animal models", "Limited \u2014 mostly animal models (corneal healing human trial exists)"],
];

export default function BPC157vsTB500Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"BPC-157 vs TB-500 — How These Recovery Peptides Differ","description":"BPC-157 vs TB-500 comparison — mechanism of action, research differences, tissue targets, and how to choose between these two recovery peptides.","url":"https://profpeptide.com/compare/bpc-157-vs-tb-500","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"BPC-157 vs TB-500 — How These Recovery Peptides Differ"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">BPC-157 vs TB-500 &mdash; Recovery Peptide Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">BPC-157 and TB-500 are the two most researched tissue repair peptides in the field. They&apos;re frequently used together and often compared &mdash; but they work through fundamentally different mechanisms and have distinct research profiles. This page breaks down the key differences.</p>

      <div className="bg-[#0891b2]/10 border border-[#0891b2]/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-[#1e2d3d] dark:text-slate-100 mb-2"><strong><Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>:</strong> Local repair specialist &mdash; strongest in gut, tendon, and CNS research</p>
        <p className="text-sm text-[#1e2d3d] dark:text-slate-100 mb-2"><strong><Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>:</strong> Systemic healing specialist &mdash; strongest in cardiac, wound healing, and cell migration research</p>
        <p className="text-sm text-[#1e2d3d] dark:text-slate-100"><strong>Together:</strong> Complementary &mdash; most researchers studying both use them in combination (the <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>)</p>
      </div>

      <div className="mb-8 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Why these two are usually compared</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          BPC-157 and TB-500 are both research peptides studied for tissue repair, both work through pathways the body uses naturally for healing, and both are commonly stacked together. That&apos;s why they&apos;re constantly compared. But their mechanisms are completely different.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          BPC-157 (body protection compound, 15 amino acids) works locally at injury sites by activating nitric oxide signaling and the EGR-1 transcription factor &mdash; both of which trigger growth factor release and tissue repair. This makes it the go-to for site-specific damage like a torn tendon or inflamed gut.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          TB-500 (a fragment of Thymosin Beta-4, 17 amino acids) works systemically by binding free actin in cells, which triggers cell migration, blood vessel formation, and macrophage polarization toward healing modes. This makes it the go-to for whole-body tissue repair like systemic recovery or cardiac applications.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The reason they stack well: their mechanisms don&apos;t overlap. BPC-157 amplifies repair AT the damage site; TB-500 mobilizes repair cells TO the damage site. Together they can address both sides of the healing process.
        </p>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b]">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">BPC-157</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">TB-500</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
                <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Which one is right for you?</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
          Both are research peptides &mdash; neither is FDA-approved for human use. Application choice depends on the type of recovery you&apos;re studying.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Site-specific injury research (tendon, ligament, gut)</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              BPC-157 has the strongest research base for localized tissue damage. Animal studies on tendon healing, gut ulcers, and ligament tears consistently show its EGR-1-mediated mechanism delivers strong site-specific recovery. If your interest is a specific injured tissue, BPC-157 is the more direct match.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Systemic recovery, cardiac research, or whole-body wound healing</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              TB-500&apos;s actin-binding mechanism is body-wide, making it more relevant for systemic applications. The strongest single piece of TB-500 evidence is a Nature paper on epicardial progenitor cell activation in cardiac tissue. Systemic wound healing models also favor TB-500.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Maximum tissue repair coverage (the Wolverine Stack)</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              The most-researched protocol uses both together &mdash; known informally as the <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>. Their non-overlapping mechanisms produce additive (not redundant) effects. Local + systemic. Most researchers studying both peptides use them in combination.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Neuroprotection or CNS research</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              BPC-157 has stronger CNS data &mdash; dopaminergic and serotonergic system modulation, nerve crush recovery models. TB-500 has CNS evidence too (oligodendrocyte differentiation, multiple sclerosis interest), but BPC-157 is more directly studied for neuroprotection.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link> is the local repair specialist &mdash; strongest for gut, tendon, and CNS research. <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link> is the systemic healing specialist &mdash; strongest for cardiac, wound healing, and cell migration research. Their non-overlapping mechanisms make them ideal stack partners (the <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>), which is how most serious research uses them. Neither is FDA-approved for human use; both are sold as research peptides.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Is BPC-157 or TB-500 FDA-approved?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Neither is FDA-approved. The FDA classified both as bulk drug substances in late 2023 &mdash; meaning licensed compounding pharmacies cannot legally compound them for human use. Both are sold as &ldquo;research peptides&rdquo; for laboratory use only. No legal pathway currently exists to use either one in humans in the US.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Are they on the WADA prohibited list?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Both BPC-157 and TB-500 are on the WADA prohibited list under section S0 (Non-Approved Substances). Tested athletes in any WADA-affiliated sport should not use either peptide. Detection methods exist for both compounds.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Why are they so often stacked together?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Their mechanisms don&apos;t overlap. BPC-157 amplifies repair AT injury sites through local growth factor signaling. TB-500 mobilizes repair cells TO injury sites through systemic cell migration. Together they address both sides of the healing process &mdash; supply and activation. Most research using both peptides uses them in combination.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">What dosing is typically used?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Research protocols vary. Common animal-model dosing translates to roughly 250&ndash;500 mcg of each peptide once or twice daily for BPC-157, and 2&ndash;2.5 mg of TB-500 once or twice weekly. Stack protocols typically use both at standard individual doses. Always verify Certificate of Analysis on any research peptide product.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How long does each take to show effects?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              BPC-157&apos;s effect onset is faster &mdash; local tissue repair begins within days of starting protocol in animal models. TB-500&apos;s systemic effect builds more gradually over 2&ndash;4 weeks. Stack protocols typically run 4&ndash;8 weeks for combined effect.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Which one has more side effects?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Both have notably clean side effect profiles in research. BPC-157 has documented mild GI effects in some users. TB-500 has documented mild fatigue or &ldquo;flu-like&rdquo; symptoms during initial dosing. Neither has been associated with serious adverse events at standard research doses, though long-term safety is not formally characterized.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/peptides/bpc-157" className="btn-primary text-sm">BPC-157 Profile</Link>
        <Link href="/peptides/tb-500" className="btn-outline text-sm">TB-500 Profile</Link>
        <Link href="/peptides/wolverine-stack" className="btn-outline text-sm">Wolverine Stack</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice. Not for human use.</p>
    </div>
    </>
  );
}
