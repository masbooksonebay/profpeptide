import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/guides/peptide-research-basics",
  title: "Peptide Research Basics — A Practical Primer | Prof. Peptide",
  description:
    "What research peptides are, how they signal at receptors, why doses are measured in micrograms, and what third-party quality testing actually verifies.",
  ogTitle: "Peptide Research Basics",
  ogDescription:
    "What peptides are, how they signal, why doses are so small, and what quality verification means in the research context.",
  useDefaultOgImage: false,
});

const sections = [
  {
    id: "what-are-peptides",
    title: "What are research peptides?",
    intro:
      "Peptides are short chains of amino acids &mdash; typically 2 to 50 residues long &mdash; that the body uses as signaling molecules. They sit between single amino acids and full proteins on the size spectrum: shorter and more targeted than a protein, longer and more structurally specific than a single amino acid. In the research context, &ldquo;peptide&rdquo; usually means a synthetic version of an endogenous signaling peptide, or a designed analog of one.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The arbitrary cutoff between &ldquo;peptide&rdquo; and &ldquo;protein&rdquo; is around 50 amino acids, though it varies by convention. Insulin (51 amino acids) is usually classified as a protein; the GLP-1 receptor agonists ({" "}
          <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>
          {" "}~31 residues,{" "}
          <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>
          {" "}~39 residues) are firmly in peptide territory. What separates peptides from proteins functionally is structural complexity &mdash; peptides typically lack the elaborate folded tertiary structure that defines a protein.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">GH-axis secretagogues.</span> Stimulate endogenous growth hormone release.{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>,{" "}
            <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
            are the most-studied examples.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">GLP-class metabolic peptides.</span> Incretin-receptor agonists for weight loss and glycemic control.{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>,{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>{" "}
            are the canonical mono-, dual-, and triple-agonist examples.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Healing and repair peptides.</span> Tissue-recovery and anti-inflammatory effects.{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>, and copper peptides like GHK-Cu are the headline compounds.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cognitive peptides.</span> Neurotrophic and cognitive-modulating compounds.{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>,{" "}
            <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
            are the most-referenced.
          </li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research interest has expanded sharply over the last decade because peptides occupy a useful design space &mdash; specific enough to target one receptor system cleanly, but small enough to manufacture synthetically at scale. The success of the GLP-1 class as a weight-loss therapy is the highest-profile example, but the broader research literature spans dozens of compounds across these categories.
        </p>
      </div>
    ),
  },
  {
    id: "receptor-signaling",
    title: "How do peptides signal at the receptor level?",
    intro:
      "Peptides work by binding to specific cell-surface receptors &mdash; usually G-protein-coupled receptors (GPCRs) or tyrosine kinase receptors. The binding event causes the receptor to change shape, which triggers a cascade of intracellular signaling steps. The key feature of this cascade is amplification: one peptide molecule binding to one receptor can produce thousands of downstream biochemical changes inside the cell.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Binding.</span> The peptide docks into a receptor&rsquo;s binding pocket via a precise shape match. Different peptides bind different receptors; small changes in peptide sequence can dramatically change which receptor it binds.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Conformational change.</span> Binding mechanically deforms the receptor, exposing or activating sites on its intracellular side.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cascade activation.</span> The activated receptor triggers second-messenger systems (cAMP, IP3, calcium release) which in turn activate dozens of downstream enzymes and transcription factors.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Amplification.</span> Each step in the cascade multiplies the signal. A single hormone-receptor interaction can ultimately cause the synthesis of thousands of new protein molecules inside the cell.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Why this matters for dosing.</span> Because of cascade amplification, peptides produce systemic, measurable effects at nanogram-to-microgram quantities &mdash; orders of magnitude smaller than traditional small-molecule drugs, which usually have to occupy receptors in bulk (or block enzymes directly) and therefore need milligram-to-gram doses. A typical ibuprofen dose is 400 mg; a typical{" "}
          <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
          dose is 200&ndash;300 mcg &mdash; roughly 2,000 times less mass, achieving its effect through receptor-mediated amplification rather than mass-action chemistry.
        </p>
      </div>
    ),
  },
  {
    id: "why-mcg-doses",
    title: "Why are peptide doses measured in micrograms instead of milligrams?",
    intro:
      "Peptide doses are measured in micrograms because peptides bind their receptors at extremely low concentrations and rely on signaling amplification to produce physiological effects. The body&rsquo;s own peptide hormones circulate in picogram-per-millilitre concentrations &mdash; orders of magnitude below the milligram doses typical of small-molecule drugs &mdash; so external doses are calibrated to match or modestly exceed those endogenous levels.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Receptor affinity.</span> Peptides typically have sub-nanomolar binding affinities for their target receptors, meaning very small concentrations saturate receptor occupancy.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Endogenous reference.</span> Native growth hormone circulates around 1&ndash;10 ng/mL. Native GLP-1 circulates around 5&ndash;50 pg/mL between meals. External peptide doses are calibrated to produce comparable plasma levels.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Signaling amplification.</span> One receptor binding event triggers a downstream cascade that can produce thousands of protein-synthesis or enzyme-activation events &mdash; covered in the prior section. A microgram-scale dose is biochemically equivalent to a much larger dose of a non-amplifying compound.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Practical implication.</span> Typical research doses span 100&ndash;500 mcg for GH-axis peptides and healing peptides; the GLP-1 class runs higher (single-digit mg weekly), still small in absolute terms. Precise measurement tools matter &mdash; a 0.3 or 0.5 mL insulin syringe is the standard, since 2&ndash;10 unit draws need to land cleanly on a tick mark.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          The practical dose math &mdash; how a 10 mg vial reconstituted to a given volume yields a specific mcg-per-unit conversion &mdash; lives in the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique guide</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "mg-mcg-iu",
    title: "What is the difference between mg, mcg, and IU?",
    intro:
      "Three units appear repeatedly in peptide research literature: milligrams (mg), micrograms (mcg), and International Units (IU). The first two are pure mass measurements separated by a factor of 1,000. IU is an activity-based measurement used for a handful of peptides where biological activity, not mass, is the meaningful dosing unit.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">mg (milligram).</span> 1/1,000 of a gram. Vial sizes are usually labelled in mg (5 mg, 10 mg, 15 mg).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">mcg (microgram).</span> 1/1,000 of a milligram, 1/1,000,000 of a gram. Most peptide doses are in mcg.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IU (International Unit).</span> An activity-based unit, defined per-compound by the WHO. The conversion between IU and mg is compound-specific &mdash; there is no universal &ldquo;X mg = Y IU&rdquo; rule. HCG, HGH, and insulin are the peptides most commonly dosed in IU.</li>
        </ol>
        <div className="overflow-x-auto -mx-4 sm:mx-0 pt-2">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Typical dose unit</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Common research range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">Ipamorelin</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">mcg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">200&ndash;300 mcg per dose</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">CJC-1295</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">mcg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">100&ndash;300 mcg per dose</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">BPC-157</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">mcg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">250&ndash;500 mcg per dose</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">Semaglutide</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">0.25&ndash;2.4 mg weekly</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">Tirzepatide</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">2.5&ndash;15 mg weekly</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">Retatrutide</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">2&ndash;12 mg weekly</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">HCG</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">IU</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">250&ndash;1,500 IU per dose</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">HGH (human growth hormone)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">IU</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1&ndash;4 IU daily (≈ 0.33&ndash;1.3 mg)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Why this matters.</span> Misreading mg as mcg (or vice versa) is a 1,000&times; dosing error &mdash; the single most consequential mistake in peptide research. Always verify the unit on the vial label, in the protocol, and in your dose calculation. If the number in the protocol seems implausibly large or small for the compound, recheck the unit before drawing.
        </p>
      </div>
    ),
  },
  {
    id: "bacteriostatic-water",
    title: "What is bacteriostatic water and why is it used?",
    intro:
      "Bacteriostatic water is sterile water containing 0.9% benzyl alcohol as a preservative. The preservative inhibits bacterial growth in multi-dose vials over a 28-day in-use window, which is the standard shelf life for a reconstituted peptide vial that&rsquo;s accessed multiple times across a research cycle.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Bacteriostatic water (BAC water).</span> Sterile water + 0.9% benzyl alcohol. Supports multi-puncture vials for up to 28 days when refrigerated. The default for peptide reconstitution.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sterile water for injection (SWFI).</span> Sterile water with no preservative. Single-use only &mdash; once the vial is punctured, anything not immediately injected must be discarded.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Why BAC water is standard.</span> Peptide vials are typically reconstituted once and drawn from repeatedly across a weeks-long protocol. SWFI would force discarding the entire vial after a single draw, which is wasteful and impractical for compounds dosed several times per week.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exceptions.</span> A small number of peptides are incompatible with benzyl alcohol &mdash; manufacturers will specify SWFI in the product literature if so. Default to BAC water unless the specific peptide&rsquo;s documentation says otherwise.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          For the actual reconstitution math &mdash; how the water volume you choose determines mcg-per-unit on the syringe &mdash; see the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique guide</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "storage",
    title: "How should reconstituted peptides be stored?",
    intro:
      "Lyophilized (freeze-dried powder) peptides are remarkably stable &mdash; most can sit at room temperature for weeks and refrigerated for years. The clock starts the moment water is added. Once reconstituted, peptides are vulnerable to heat, light, repeated freeze-thaw cycles, and microbial growth, and need to be treated with the care below.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lyophilized (powder) storage.</span> Room temperature acceptable for short periods; refrigerated (2&ndash;8&deg;C) for long-term. Most lyophilized peptides remain stable for 2+ years refrigerated, longer frozen.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstituted (liquid) storage.</span> Refrigerate at 2&ndash;8&deg;C. Use within ~28 days &mdash; the in-use shelf life that benzyl alcohol&rsquo;s bacteriostatic activity supports.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Freezing reconstituted peptides.</span> Generally avoided for short-acting peptides &mdash; freeze-thaw cycles mechanically disrupt peptide structure and degrade activity. Acceptable for some long-acting peptides (the GLP-1 class tolerates a single freeze well) for extended storage beyond the 28-day in-use window.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Light exposure.</span> Most peptides are light-sensitive in solution. Vendors ship in opaque or amber vials; keep them that way and store in the original container. Avoid leaving reconstituted vials on counters in direct light.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Temperature shocks.</span> Move vials directly from fridge to draw site and back; don&rsquo;t leave them out for long sessions. Repeated warming and cooling accelerates degradation more than a steady mid-range temperature would.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Visual inspection.</span> A properly reconstituted peptide solution is clear and colorless. Cloudiness, particulates, or color change indicates degradation or contamination &mdash; discard the vial.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "cycling",
    title: "What is cycling and why is it part of peptide research?",
    intro:
      "Cycling means alternating periods of peptide administration with washout periods where no peptide is used. The purpose is to prevent receptor desensitization &mdash; the gradual loss of receptor responsiveness that can occur when receptors are continuously stimulated. Cycling patterns vary widely across peptide classes because the underlying receptor biology differs.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Receptor desensitization (tachyphylaxis).</span> When a receptor is stimulated continuously, the cell often responds by reducing receptor surface expression, uncoupling the receptor from its downstream signaling machinery, or both. The end result is that the same external dose produces a smaller physiological effect over time. A washout period lets receptor expression and coupling return to baseline.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">GH-axis secretagogues</span> (
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>,{" "}
            <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>
            ). Often researched in 5-on/2-off or 8-on/4-off patterns. The ghrelin and GHRH receptors desensitize meaningfully with continuous use, so periodic washouts are standard.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">GLP-1 class metabolic peptides</span> (
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>,{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>
            ). Continuous weekly dosing is the standard in published Phase 3 trials. Receptor desensitization at therapeutic doses is less of an issue than in the GH-axis class, and trial protocols run multi-year continuous administration without scheduled washouts.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Healing and repair peptides</span> (
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>
            ). Typically researched in 4&ndash;6 week active protocols followed by an off period of similar length. The cycle structure here is less about receptor desensitization (mechanism is incompletely characterized) and more about matching the duration of tissue-repair use cases.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Why patterns vary.</span> Cycling is receptor-biology-driven, not a universal rule. The right pattern depends on the specific receptor system, the peptide&rsquo;s half-life, and the goal of the protocol. Default to the cycling pattern referenced in the peptide&rsquo;s published research literature.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "third-party-testing",
    title: "What does third-party testing actually verify?",
    intro:
      "Third-party testing means independent laboratory verification that what&rsquo;s in the vial matches what&rsquo;s on the label. Two analytical techniques dominate the field: HPLC for purity quantification, and mass spectrometry for structural identity. Together they answer the two core questions: is this the right molecule, and is it pure enough to be usable?",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">HPLC (High-Performance Liquid Chromatography).</span> Separates the contents of a sample into individual components by chemical behavior, then quantifies each. Reports the percentage of the named peptide vs everything else &mdash; the purity figure (e.g. &ldquo;99.2%&rdquo;).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mass spectrometry.</span> Measures the exact molecular weight of the dominant component. Confirms that the molecule present matches the expected structure of the named peptide. Catches mislabeling, substitution, and synthesis errors that HPLC alone might miss.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Certificate of Analysis (COA).</span> The document summarizing test results for a specific batch &mdash; including peptide identity, purity, water content, sometimes endotoxin and microbial limits. A reputable vendor publishes the COA for each batch and ties it to a lot number on the vial.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">What &ge;99% purity means.</span> 99% or more of the dry mass in the vial is the named peptide. The remaining 1% is typically synthesis byproducts, residual solvents, or trace water. Most research peptides target 98&ndash;99% as the practical floor; pharmaceutical-grade typically exceeds 99%.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Independent lab vs in-house testing.</span> Independent labs &mdash; Janoshik Analytical, Colmaric Analyticals, and a handful of others &mdash; provide third-party verification: the lab is not the vendor, has no commercial incentive to inflate results, and signs the COA in its own name. In-house testing is performed by the vendor themselves; it&rsquo;s informative but carries the conflict of interest.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Why publicly accessible COAs matter.</span> A vendor that posts COAs publicly &mdash; with batch numbers traceable to the vial in hand &mdash; allows researchers to verify quality before purchase and audit it after. A vendor that claims testing without publishing the documents is asking for trust without offering verification.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "resources",
    title: "Where can I learn more?",
    intro:
      "This guide covers the conceptual foundations &mdash; what peptides are, how they signal, why doses look the way they do, and how quality is verified. For hands-on mechanics (syringe sizing, reconstitution math, injection technique) and for compound-specific protocols, see the resources below.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Hands-on dose math and injection mechanics.</span>{" "}
            <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">Insulin syringes and injection technique</Link>{" "}
            &mdash; reading insulin syringes, choosing barrel sizes, converting units to mcg, subcutaneous technique, and site rotation.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Compound-specific research profiles.</span> Most-referenced profiles for protocol context:{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>,{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>,{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Vendor codes.</span>{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">Verified discount codes</Link>{" "}
            from vetted research peptide vendors with current pricing references.
          </li>
        </ol>
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: stripEntities(s.title) }));

function stripEntities(s: string): string {
  return s
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&apos;/g, "'");
}

export default function PeptideResearchBasicsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Peptide Research Basics",
          description:
            "What peptides are, how they signal, why doses are so small, and what quality verification actually means in the research context.",
          url: "https://profpeptide.com/guides/peptide-research-basics",
          datePublished: "2026-05-18",
          dateModified: "2026-05-18",
          publisher: {
            "@type": "Organization",
            name: "Prof. Peptide",
            url: "https://profpeptide.com",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://profpeptide.com" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://profpeptide.com/guides" },
            { "@type": "ListItem", position: 3, name: "Peptide Research Basics" },
          ],
        }}
      />
      <div className="section max-w-3xl">
        <Link href="/guides" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          Back to Guides
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">
            Peptide Research Basics
          </h1>
          <span className="tag">Guide</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Last reviewed: May 18, 2026</p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
          What peptides are, how they signal, why doses are so small, and what quality verification actually means in the research context.
        </p>

        <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Topic:</span> Foundational concepts in peptide research
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Audience:</span> Researchers new to peptides
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Reading time:</span> 10–12 minutes
          </p>
        </div>

        <PageTOC sections={tocSections} />

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-20">
              <h2
                className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              {s.intro && (
                <p
                  className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: s.intro }}
                />
              )}
              {s.node && s.node}
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          For educational and research purposes only. Not medical advice. Not for human use.
        </div>

        <PageDisclaimer />
      </div>
    </>
  );
}
