import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/nmn-vs-nr-vs-niacin" },
  title: "NMN vs NR vs Niacin — NAD+ Precursor Comparison | Prof. Peptide",
  description: "NMN vs NR vs Niacin — how each raises NAD+, what the research shows, cost differences, side effects, and which is best for longevity.",
};

const rows = [
  ["Pathway to NAD+", "NMNAT (NMN adenylyltransferase \u2014 the enzyme that converts NMN to NAD+) enzymes (may convert to NR first)", "NRK (nicotinamide riboside kinase \u2014 the enzyme that converts NR to NMN) pathway \u2014 enters cells directly, converts to NMN then NAD+", "Preiss-Handler pathway (the 3-step process niacin uses to become NAD+)"],
  ["Efficacy (Human Data)", "Significantly raises whole-blood NAD+", "Significantly raises whole-blood NAD+", "Raises NAD+ \u2014 some n=1 data suggests comparable potency per mg"],
  ["Head-to-Head", "NMN and NR comparable \u2014 2026 Nature Metabolism RCT (n=65)", "NMN and NR comparable \u2014 same trial", "NAM (nicotinamide) only transient effect in same trial"],
  ["Flush", "None", "None", "Yes \u2014 \u201Cniacin flush\u201D common at effective doses"],
  ["Cholesterol Effects", "Not demonstrated", "Not demonstrated", "Raises HDL, lowers LDL/triglycerides \u2014 FDA-approved for dyslipidemia"],
  ["Cellular Entry", "Debated \u2014 may require conversion to NR first", "Direct cellular entry via transporters", "Indirect \u2014 multiple conversion steps"],
  ["Human Trial Volume", "20+ clinical studies", "40+ clinical studies \u2014 more established", "Decades of data as supplement and medication"],
  ["Regulatory Status", "FDA reviewing as potential drug ingredient", "GRAS (Generally Recognized As Safe \u2014 FDA designation for established supplements) status \u2014 well-established supplement", "Long-established supplement and medication"],
  ["Cost", "$50\u2013150/month", "$30\u201380/month", "$5\u201315/month"],
  ["Best For", "Those prioritizing convenience, no flush", "Best-studied NAD+ precursor, no flush", "Budget-conscious, also want cholesterol benefits"],
];

export default function NMNvsNRvsNiacinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NMN vs NR vs Niacin — NAD+ Precursor Comparison","description":"NMN vs NR vs Niacin — how each raises NAD+, what the research shows, cost differences, side effects, and which is best for longevity.","url":"https://profpeptide.com/compare/nmn-vs-nr-vs-niacin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"NMN vs NR vs Niacin — NAD+ Precursor Comparison"}]}} />
    <div className="section max-w-5xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">NMN vs NR vs Niacin &mdash; NAD+ Precursor Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">All three raise NAD+ levels but through different pathways, at vastly different costs, and with different side effect profiles. A 2026 head-to-head human clinical trial in Nature Metabolism found NMN and NR comparable in raising blood NAD+, while nicotinamide (NAM) produced only a transient effect. Here&apos;s how all three compare.</p>

      <div className="mb-8 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Why three pathways to the same destination</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every cell. It declines with age &mdash; by some estimates 50% by age 50 &mdash; and falling NAD+ levels are linked to mitochondrial dysfunction, cellular energy decline, and DNA repair impairment.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          You can&apos;t supplement NAD+ directly because it&apos;s too large to enter cells efficiently. Instead, you supplement a precursor &mdash; a smaller molecule the body converts into NAD+ through one of several biochemical pathways.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          NMN (nicotinamide mononucleotide) is one step away from NAD+ &mdash; converted by NMNAT enzymes. Some research suggests NMN may need to convert to NR first before entering cells, which is debated.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          NR (nicotinamide riboside) is two steps away from NAD+ &mdash; enters cells directly via NRK transporters, then converts to NMN, then to NAD+.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          Niacin (nicotinic acid, vitamin B3) is three steps away &mdash; enters via the older Preiss-Handler pathway. It&apos;s the cheapest, most established route, but causes flushing at effective doses.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          All three raise NAD+ effectively in human studies. The 2026 Nature Metabolism head-to-head trial (n=65) found NMN and NR comparable; nicotinamide (a different B3 form, NAM) only produced transient effects. The choice comes down to cost, flush tolerance, and secondary effects (niacin has cholesterol benefits the others don&apos;t).
        </p>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
            <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/5"></th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700">NMN</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700">NR</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700">Niacin</th>
          </tr></thead>
          <tbody>{rows.map(([label, a, b, c], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
              <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{c}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Which one is right for you?</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
          All three raise NAD+ effectively. The choice depends on what else you want from the supplement, how much you&apos;re willing to spend, and whether you can tolerate the niacin flush.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Best evidence base, no flush, willing to pay more</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              NR has the strongest human trial volume (40+ clinical studies) and is the best-studied NAD+ precursor. No flushing, well-tolerated, GRAS status. The premium for cost is real but justified by evidence depth. Niagen by ChromaDex is the most-researched commercial form.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Cost-conscious, can manage the flush</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Niacin raises NAD+ at roughly 1% the cost of NMN or NR. The flush (warmth, redness, tingling) is benign and decreases with consistent use. Extended-release forms reduce flushing but have separate liver-stress concerns at high doses. For budget-focused NAD+ raising plus cholesterol benefits (raises HDL, lowers LDL/triglycerides), niacin is the rational choice.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">David Sinclair fan, prioritizing latest research</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              NMN gets the most attention in longevity media because of David Sinclair&apos;s advocacy. Animal data is broad and impressive. The 2026 head-to-head trial showed NMN comparable to NR in raising blood NAD+, validating its efficacy. The trade-off is the highest cost of the three and uncertain regulatory future (FDA reviewing as potential drug ingredient).
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Want secondary cholesterol benefits</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Only niacin has FDA-approved cholesterol effects (originally a prescription cholesterol medication before statins took over). Patients managing both NAD+ levels AND lipid profile have a clear winner here &mdash; niacin does both at minimal cost.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Stack approach (some researchers do all three)</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              A minority of longevity researchers cycle or combine precursors on the theory that different pathways may produce different downstream effects (sirtuin activation, PARP activation, methylation effects). This is speculative &mdash; no research confirms additive benefit from combining precursors. Most data supports picking one.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">NR has the strongest human trial base and is generally considered the best-studied option. <Link href="/supplements/nmn" className="text-[#0891b2] hover:underline">NMN</Link> is comparable in efficacy but costs more and has a more uncertain regulatory future. Niacin raises <Link href="/supplements/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link> at ~1% of the cost but causes flushing and has different downstream effects. All three effectively raise NAD+ &mdash; the choice comes down to budget, flush tolerance, and secondary goals.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Why don&apos;t I just supplement NAD+ directly?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              NAD+ is too large to efficiently cross cell membranes when taken orally. Most oral NAD+ supplements break down in digestion or fail to raise intracellular NAD+ levels. IV NAD+ infusions bypass this but are expensive ($200&ndash;800 per session) and short-lived. Precursors like NMN, NR, and niacin are the practical way to raise cellular NAD+.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How much does each raise NAD+ in humans?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              All three produce significant elevation in whole-blood NAD+ &mdash; typically 40&ndash;100% increases in clinical trials. The 2026 Nature Metabolism head-to-head trial (n=65) compared NMN vs NR vs nicotinamide (NAM, a different B3 form): NMN and NR were comparable in raising blood NAD+; nicotinamide only produced transient effects. Niacin wasn&apos;t included in that specific trial, but separate studies confirm comparable potency per mg in n=1 self-experiments.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">What causes the niacin flush and is it safe?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Flushing happens because niacin activates GPR109A receptors on skin cells, releasing prostaglandins that dilate blood vessels. The result is warmth, redness, and tingling, usually starting 15&ndash;30 minutes after dose. It&apos;s benign, peaks at 30&ndash;60 minutes, and decreases dramatically with consistent dosing as the receptors desensitize. Taking niacin with food or starting at low doses (50&ndash;100mg) reduces severity.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Are there side effects beyond the niacin flush?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              NMN and NR have minimal documented side effects &mdash; typically mild GI complaints. Niacin at high doses (&gt;1.5g/day) can cause liver enzyme elevation, particularly with extended-release forms. All three are generally well-tolerated at typical supplement doses (250&ndash;500mg NMN, 250&ndash;1000mg NR, 500&ndash;1500mg niacin).
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How long until I see effects?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Blood NAD+ levels rise within days of starting any precursor. Subjective effects (energy, sleep quality, exercise recovery) are highly variable &mdash; some people report changes within 2 weeks, others see no subjective difference. The longevity-relevant downstream effects (mitochondrial function, sirtuin activation) are slow-building and likely require months to years of consistent supplementation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Should I get bloodwork?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              For NMN and NR, bloodwork is mostly optional &mdash; they&apos;re generally safe and effects are subtle. For niacin at higher doses, baseline + 3-month liver enzyme panel (ALT, AST) is recommended. Cholesterol panels at baseline + 3 months also useful if cholesterol benefits matter to you.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <Link href="/supplements/nmn" className="btn-primary text-sm">NMN Profile</Link>
        <Link href="/supplements/nad-plus" className="btn-outline text-sm">NAD+ Profile</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
