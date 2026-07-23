import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/ghrp-6",
  title: "GHRP-6 — The Original GH Secretagogue, Mechanism, Dosage, Appetite, Side Effects | Prof. Peptide",
  description:
    "GHRP-6 research profile: the first growth-hormone-releasing peptide, ghrelin-receptor mechanism, strong appetite effect, dosing, cortisol caveat, CJC-1295 stack, FAQ.",
});

const faqs = [
  {
    q: "How is GHRP-6 different from GHRP-2 and Ipamorelin?",
    a: (
      <>
        GHRP-6 is the original growth-hormone-releasing peptide and the least selective of the three. It produces the strongest appetite response (it most closely mimics ghrelin) and raises cortisol, prolactin, and ACTH along with GH.{" "}
        <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>{" "}
        is a more potent, somewhat cleaner GH releaser, and{" "}
        <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}
        is the most selective (GH-only). GHRP-6 is chosen when the intense hunger effect is wanted or as the classic reference compound.
      </>
    ),
  },
  {
    q: "Why does GHRP-6 make me so hungry?",
    a: "That is its defining feature. GHRP-6 activates the ghrelin receptor and, through it, the appetite-driving NPY/AgRP neurons in the hypothalamus — the same circuitry the hunger hormone ghrelin uses. Intense hunger typically appears 15–30 minutes after a dose. It is the strongest appetite effect of the common GHRPs and is why GHRP-6 is studied in appetite-loss and cachexia research.",
  },
  {
    q: "Does GHRP-6 raise cortisol?",
    a: "Yes, more than GHRP-2 and much more than ipamorelin. GHRP-6 raises cortisol, prolactin, and ACTH alongside GH — a consequence of its low selectivity. This is the main reason many long-term protocols favor GHRP-2 or ipamorelin instead, reserving GHRP-6 for its appetite effect or short research use.",
  },
  {
    q: "Should I stack GHRP-6 with CJC-1295?",
    a: (
      <>
        Yes — the standard pairing. GHRP-6 hits the ghrelin receptor while{" "}
        <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
        hits the GHRH receptor, producing a larger combined GH pulse than either alone. Stacking GHRP-6 with another ghrelin-receptor agonist (GHRP-2, hexarelin, ipamorelin, MK-677) is redundant.
      </>
    ),
  },
  {
    q: "How quickly does GHRP-6 work?",
    a: "The GH pulse and the hunger both appear fast — within roughly 15–30 minutes of a subcutaneous dose. IGF-1 rises over days of consistent dosing, and body-composition effects build over weeks. The plasma half-life is short (roughly 15–30 minutes), so timing matters more than blood levels.",
  },
  {
    q: "Where can I buy GHRP-6?",
    a: (
      <>
        GHRP-6 is sold by specialty research-peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">Verified Discount Codes &rarr;</Link>.
      </>
    ),
  },
];

const studies = [
  {
    title: "On the in vitro and in vivo activity of a new synthetic hexapeptide that acts on the pituitary to specifically release growth hormone",
    authors: "Bowers CY, Momany FA, Reynolds GA, Hong A",
    journal: "Endocrinology / PubMed",
    year: "1984",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/6714155/",
    summary: "The founding paper of the entire GHRP class — it introduced the hexapeptide His-D-Trp-Ala-Trp-D-Phe-Lys-NH2 (GHRP-6) and showed it releases GH specifically, without releasing LH, FSH, TSH, or prolactin in the assay, across multiple species. Every later GH secretagogue (GHRP-2, hexarelin, ipamorelin, MK-677) descends from this discovery, which is why GHRP-6 is treated as the reference compound of the class.",
  },
  {
    title: "Intranasal administration of GHRP (His-D-Trp-Ala-Trp-D-Phe-LysNH2) increased plasma GH and IGF-I levels in normal men",
    authors: "Hayashi S, Okimura Y, Bowers CY, Chihara K, et al.",
    journal: "Endocrinol Jpn / PubMed",
    year: "1991",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/1915110/",
    summary: "A human study showing that GHRP-6 stimulates GH secretion and raises IGF-1 in healthy men, with repeated dosing producing sustained IGF-1 elevation — an early demonstration that the GH pulse translates into a downstream anabolic signal in people, not just in cell and animal models.",
  },
  {
    title: "Ghrelin is a growth-hormone-releasing acylated peptide from stomach",
    authors: "Kojima M, Hosoda H, Date Y, et al.",
    journal: "Nature / PubMed",
    year: "1999",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10604470/",
    summary: "The identification of ghrelin as the natural endogenous ligand of the growth-hormone-secretagogue receptor (GHSR-1a) — the receptor GHRP-6 had been activating for 15 years before its natural hormone was found. This paper explains why GHRP-6 both releases GH and drives hunger: it is a synthetic mimic of the body's own hunger-and-GH hormone.",
  },
  {
    title: "The Safety and Efficacy of Growth Hormone Secretagogues",
    authors: "Sigalos JT, Pastuszak AW",
    journal: "Sex Med Rev / PubMed",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28400207/",
    summary: "A clinical review of the GH-secretagogue class that places GHRP-6 in context: robust GH release but the least selective of the group, with appetite, cortisol, and prolactin effects. It is candid about the thin long-term human safety data across the class — a useful evidence-honest anchor for GHRP-6's real standing.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does GHRP-6 work?",
    intro:
      "GHRP-6 is the original synthetic growth-hormone-releasing peptide. It activates the ghrelin/GH-secretagogue receptor (GHSR-1a) on pituitary somatotrophs and, importantly, on the appetite-driving neurons of the hypothalamus. This dual site of action is why GHRP-6 both releases a pulse of GH and produces strong hunger. It is the least selective of the common GHRPs — it also raises cortisol, prolactin, and ACTH.",
    body: [
      "GHSR-1a receptor activation [1][3]. GHRP-6 (His-D-Trp-Ala-Trp-D-Phe-Lys-NH2) binds the ghrelin receptor on somatotrophs and hypothalamic neurons. Ghrelin, identified in 1999, is the endogenous ligand for this receptor [3]; GHRP-6 is the synthetic peptide that revealed the receptor's existence 15 years earlier [1].",
      "Calcium/PLC signaling. Receptor activation couples to Gq/11 → phospholipase-C → IP3 → intracellular calcium rise in somatotrophs, triggering GH release — a pathway distinct from the Gs/cAMP route used by GHRH analogs, which is the basis of GHRP + GHRH synergy.",
      "Appetite via NPY/AgRP neurons. GHRP-6 activates orexigenic NPY/AgRP neurons in the hypothalamic arcuate nucleus — the same circuit ghrelin uses. This produces the strong, fast hunger (15–30 minutes) that distinguishes GHRP-6 from the more GH-selective GHRPs.",
      "GH release + somatostatin suppression [2]. GHRP-6 amplifies pulsatile GH secretion and blunts somatostatin tone; in humans it raises GH and, with repeated dosing, IGF-1 [2].",
      "Low selectivity. Beyond GH, GHRP-6 raises cortisol, prolactin, and ACTH more than GHRP-2 and far more than ipamorelin — the trade-off for being the most ghrelin-like of the group.",
    ],
  },
  {
    id: "research",
    title: "What is GHRP-6 used for?",
    intro:
      "GHRP-6's research legacy is foundational — it established the GH-secretagogue field (Bowers, 1984) and has human data on GH/IGF-1 elevation. Its distinctive appetite effect makes it a tool in cachexia and appetite-loss research. Body-composition and anti-aging uses are extrapolated from GH physiology, not controlled GHRP-6 trials. It is not FDA-approved.",
    body: [
      "GH stimulation [1][2]. GHRP-6 reliably releases GH in cell, animal, and human studies — the original demonstration that a small synthetic peptide could specifically provoke GH.",
      "IGF-1 elevation [2]. Repeated dosing raises IGF-1 in humans, the anabolic signal behind body-composition and recovery research.",
      "Appetite / cachexia research. GHRP-6's strong ghrelin-like hunger effect makes it a research tool for conditions of appetite loss and wasting.",
      "Cardiac and cytoprotective signals. Like other GHRPs, GHRP-6 shows cytoprotective effects in preclinical models via GH-secretagogue-receptor and related pathways — an area more developed for hexarelin.",
      "Limited long-term human data [4]. As the class review notes, controlled long-term efficacy and safety trials of GHRP-6 are lacking; most non-research use is off-label.",
    ],
  },
  {
    id: "timeline",
    title: "How long does GHRP-6 take to work?",
    intro:
      "GHRP-6 acts fast on both GH and appetite, with physical changes building over weeks. The GH pulse and hunger appear within roughly 15–30 minutes; IGF-1 rises over days of consistent dosing, and body-composition effects over 8–12 weeks.",
    content:
      "The GH pulse and the hunger both appear within about 15–30 minutes of a subcutaneous dose — the appetite effect is more noticeable with GHRP-6 than with any other common GHRP. IGF-1 rises within days of consistent dosing, and body-composition changes build over 8–12 weeks. The plasma half-life is short (roughly 15–30 minutes), so each dose is a discrete pulse; bedtime dosing and an empty stomach matter more than sustained blood levels. The appetite response often diminishes somewhat over weeks of use.",
  },
  {
    id: "dosing",
    title: "How is GHRP-6 dosed?",
    intro:
      "GHRP-6 is given by subcutaneous injection, commonly 100–300 mcg per dose, once to three times daily, on an empty stomach. Bedtime is common; the strong appetite spike is a practical consideration for timing. It is usually combined with a GHRH analog for a larger GH pulse.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard dose.</span> 100–300 mcg subcutaneously per injection, on an empty stomach.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing around hunger.</span> Many users dose before a planned meal (to leverage the appetite effect) or at bedtime (to sleep through it).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Multiple daily dosing.</span> 100–200 mcg 2–3× daily for sustained effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Saturation caveat.</span> Beyond roughly 1 mcg/kg, extra GHRP-6 adds cortisol and prolactin rather than GH.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–12 weeks on, with time off; usually run with a GHRH analog.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          GHRP-6 is typically stacked with{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          for dual-pathway GH release; the pre-blended{" "}
          <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
          uses the same principle with ipamorelin.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is GHRP-6 administered?",
    intro: (
      <>
        GHRP-6 is given as a subcutaneous injection using a small insulin syringe, on an empty stomach so food-driven insulin does not blunt the GH response. Plan for a strong hunger spike 15–30 minutes after dosing. For syringe mechanics and units-vs-mcg conversion, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime or pre-meal, depending on whether you want to use or avoid the appetite spike. Empty stomach in all cases.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Empty stomach required (2+ hours after eating, ~30 min before next meal) — insulin blunts GH release.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Rotate sites each injection; stay at least 1 inch from the previous site.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Appetite spike.</span> Expect pronounced hunger 15–30 minutes after dosing — the strongest of the common GHRPs.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume the next scheduled dose; do not double up.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 8–12 weeks on, with time off.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> GHRP-6&apos;s short half-life makes each dose a discrete GH pulse. The two practical variables are an empty stomach (insulin blunts GH) and how you handle the hunger — GHRP-6&apos;s appetite effect is strong enough that timing is often built around it. Dose size has a ceiling; more than ~1 mcg/kg mostly adds cortisol and prolactin.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–3× daily during the cycle</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime or pre-meal &mdash; built around the appetite spike</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach required &mdash; 2+ hours after eating, 30+ min before next meal</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">~15–30 minutes (plasma)</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-pulse effect &mdash; each dose triggers a discrete GH pulse plus a hunger window</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> GHRP-6 research vials are typically 5 mg. Because doses are small (100–300 mcg), 2 mL or 3 mL reconstitution gives more precise unit draws. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">200 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">300 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">500 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit delivers 50 mcg at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL. For a primer on reading insulin syringes, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does GHRP-6 stack well with?",
    intro:
      "GHRP-6's canonical pairing is a GHRH analog (CJC-1295 or sermorelin) — different receptor, synergistic GH pulse. It does NOT stack usefully with other ghrelin-receptor agonists (GHRP-2, hexarelin, ipamorelin, MK-677) — redundant. Recovery peptides pair cleanly.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CJC-1295 / sermorelin (GHRH analogs).</span>{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          or{" "}
          <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>{" "}
          activate the GHRH receptor for dual-pathway synergy. The{" "}
          <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
          uses this principle.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Recovery peptides.</span> BPC-157 and TB-500 pair cleanly for tissue repair during a GH-driven block.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other ghrelin-receptor agonists.</span>{" "}
          <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>,{" "}
          <Link href="/peptides/hexarelin" className="text-[#3A759F] hover:underline">Hexarelin</Link>,{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, and{" "}
          <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>{" "}
          hit the same receptor &mdash; combining is redundant.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Exercise-induced GH release adds to the GHRP-6 pulse.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of GHRP-6?",
    intro:
      "GHRP-6's signature side effect is strong hunger. Because it is the least selective GHRP, it also raises cortisol, prolactin, and ACTH more than the others, and produces the usual GH-related water retention. Long-term controlled human safety data is limited.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (most users)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Strong appetite spike.</span> The defining effect &mdash; intense hunger 15–30 minutes after dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Mild redness or irritation, usually brief.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild water retention / tingling.</span> GH-related; often eases with lower doses.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (moderate)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cortisol / prolactin rise.</span> Larger than GHRP-2; can cause lethargy or, at higher doses, prolactin-related effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache or flushing.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reduced insulin sensitivity.</span> Sustained GH elevation can modestly raise fasting glucose.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Serious (rare)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term human safety data is limited.</span> Most controlled studies are short-duration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor-growth risk.</span> GH/IGF-1 elevation could accelerate a pre-existing malignancy; contraindicated with active cancer.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Because it is the least selective GHRP, GHRP-6 is often reserved for its appetite effect or short research use, with GHRP-2 or ipamorelin preferred for cleaner long-term GH stimulation. Monitor IGF-1 and glucose with sustained use.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does GHRP-6 interact with other drugs?",
    intro:
      "GHRP-6's interactions are mainly redundancy with other ghrelin-receptor agonists and blunting by insulin/steroids. No major pharmacokinetic drug-drug interactions are reported.",
    body: [
      "Insulin and corticosteroids. Both blunt GH release; time dosing away from meals and steroid administration.",
      "Other ghrelin-receptor agonists (GHRP-2, hexarelin, ipamorelin, MK-677). Redundant via the same receptor; no additive GH benefit.",
      "Direct human growth hormone (HGH). Generally unnecessary to combine — GHRP-6 stimulates endogenous GH; exogenous HGH bypasses regulatory feedback.",
      "No significant drug-drug pharmacokinetic interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "How should GHRP-6 be stored?",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of GHRP-6 research?",
    intro:
      "GHRP-6 is historically important and well characterized on GH release, but it is not FDA-approved for any use and is the least selective of the common GHRPs. Body-composition and anti-aging claims rest on GH physiology, not controlled GHRP-6 trials. It is WADA-prohibited in sport.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GHRP-6 is not FDA-approved for any therapeutic use. Its historical role — establishing the GH-secretagogue field — does not translate into approved indications, and its low selectivity (appetite, cortisol, prolactin) makes it less suited to long-term use than newer secretagogues.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Evidence for body-composition, recovery, and anti-aging use is extrapolated from GH/IGF-1 physiology and clinical observation rather than controlled long-term trials of GHRP-6 itself.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits GHRP-6 in sport under Section S2 (peptide hormones/secretagogues). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source GHRP-6",
    intro:
      "GHRP-6 is sold only as a research-grade peptide. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "swiss-chems", note: "Deep growth-hormone bench" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">See all {activeVendorCount} verified vendors &rarr;</Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "GHRP-6 FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">{f.q}</h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "references",
    title: "References",
    node: (
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bowers CY, Momany FA, Reynolds GA, Hong A. On the in vitro and in vivo activity of a new synthetic hexapeptide that acts on the pituitary to specifically release growth hormone. Endocrinology. 1984;114(5):1537-45.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/6714155/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/6714155/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hayashi S, Okimura Y, Yagi H, et al. Intranasal administration of His-D-Trp-Ala-Trp-D-Phe-LysNH2 (growth hormone releasing peptide) increased plasma growth hormone and insulin-like growth factor-I levels in normal men. Endocrinol Jpn. 1991;38(1):15-21.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/1915110/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/1915110/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kojima M, Hosoda H, Date Y, et al. Ghrelin is a growth-hormone-releasing acylated peptide from stomach. Nature. 1999;402(6762):656-60.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10604470/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/10604470/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sigalos JT, Pastuszak AW. The Safety and Efficacy of Growth Hormone Secretagogues. Sex Med Rev. 2018;6(1):45-53.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28400207/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/28400207/</a>
        </li>
      </ol>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = [
  { id: "overview", title: "What is GHRP-6?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function GHRP6Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GHRP-6","description":"GHRP-6 research profile: the first growth-hormone-releasing peptide, ghrelin-receptor mechanism, strong appetite effect, dosing, cortisol caveat, CJC-1295 stack, FAQ.","url":"https://profpeptide.com/peptides/ghrp-6","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GHRP-6"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/peptides" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">GHRP-6</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">Last reviewed: July 21, 2026</p>

      {/* Quick Facts — key facts already present on this page, in a scannable grid */}
      <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100 mb-3">
            Quick Facts
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">What it is</dt>
              <dd className="text-base text-[#16181B] dark:text-slate-100">A lab-made peptide that signals the pituitary to release the body&apos;s own growth hormone &mdash; the original growth-hormone-releasing peptide, known for its signature intense hunger (via the ghrelin/NPY/AgRP appetite circuit) and a notable rise in cortisol and prolactin.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous injection or intranasal spray, on an empty stomach</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">~15&ndash;30 minutes (plasma)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">100&ndash;300 mcg, one to three times daily, in 8&ndash;12 week cycles</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not FDA-approved &mdash; research use only.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is GHRP-6?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            GHRP-6 (Growth Hormone Releasing Peptide-6; developmental code SKF-110679; sequence His-D-Trp-Ala-Trp-D-Phe-Lys-NH2) is the original growth-hormone-releasing peptide, described by Bowers and colleagues in 1984 — the discovery that launched the entire GH-secretagogue field. It activates the ghrelin receptor (GHSR-1a) to release a pulse of growth hormone, and because it strongly engages the same appetite circuitry as ghrelin, it produces the most pronounced hunger of the common GHRPs. It is the least selective of the group, also raising cortisol and prolactin — which is why{" "}
            <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>{" "}
            and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}
            are often preferred for cleaner, long-term GH stimulation. Most research pairs it with a GHRH analog such as{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Reported benefits:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pulsatile GH release via the ghrelin receptor (the founding GHRP)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Strong appetite stimulation &mdash; useful in appetite-loss and cachexia research</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Raises IGF-1 downstream of GH; supports lean mass (extrapolated)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergizes with GHRH analogs (CJC-1295/sermorelin) for a larger GH pulse</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Preclinical cytoprotective signals shared with the GHRP class</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caveat: least selective &mdash; notable cortisol/prolactin rise and hunger</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Most protocols use 100–300 mcg subcutaneously, 1–3 times daily, on an empty stomach. Timing is often built around the strong appetite spike. Beyond ~1 mcg/kg, extra dose adds cortisol, not GH.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">Verified Discount Codes &rarr;</Link> for current options.
          </p>
        </div>
      </div>

      {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12">
            <h2 className="section-heading mb-3">{s.title}</h2>
            {s.intro && (<p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">{s.intro}</p>)}
            {s.node && s.node}
            {s.content && (<p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>)}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (<li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
              </ol>
            )}
          </div>
        ))}

      <div className="flex flex-wrap gap-2 mt-8">
        {["Growth Hormone", "GHRP", "GHSR Agonist", "Research-Grade"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/ghrp-2" className="text-sm font-medium text-[#3A759F] hover:underline">GHRP-2</Link>
        <Link href="/peptides/hexarelin" className="text-sm font-medium text-[#3A759F] hover:underline">Hexarelin</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#3A759F] hover:underline">MK-677</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#3A759F] hover:underline">GH Stack</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.</p>
        <Link href="/calculator" className="btn-primary text-sm">Open Calculator</Link>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="GHRP-6" pagePath="/peptides/ghrp-6" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
