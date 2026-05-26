import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/biotin",
  title: "Biotin: What the Evidence Actually Says About Hair, Nails, Skin",
  description:
    "Biotin (vitamin B7) dosing, the deficiency-vs-replete evidence split, and the lab-test interference warning every supplementer needs to know.",
});

const faqs = [
  {
    q: "Does biotin actually work for hair growth?",
    a: "Mostly only if you're deficient — and most people aren't. The strongest biotin-for-hair evidence is in true deficiency states (rare in healthy adults) or specific conditions like alopecia areata, brittle hair from medication side effects, or uncombable hair syndrome. A 2017 systematic review (Patel et al., Skin Appendage Disord) found most positive hair-loss studies involved underlying biotin deficiency. For metabolically healthy adults with adequate dietary biotin, RCT evidence for cosmetic hair growth is limited — despite enormous marketing claims. The 10,000 mcg \"hair gummies\" you see everywhere are based on deficiency-state extrapolation, not RCT evidence in replete users.",
  },
  {
    q: "What's the brittle nails evidence — is that any better?",
    a: "Yes — nail brittleness has the cleanest biotin RCT evidence. The Colombo 1990 Swiss study (n=44) found 2.5 mg daily produced significant improvements in nail plate thickness with scanning electron microscopy confirmation; 91% of women reported improvement after 6+ months. A follow-up study by Hochman confirmed increased nail firmness and reduced splitting. This is the strongest cosmetic indication for biotin — and the dose (2.5 mg, not 10 mg) is what the trial evidence actually validates.",
  },
  {
    q: "Will high-dose biotin mess up my blood tests?",
    a: "Yes, and this is the most important practical point about biotin. High-dose biotin (anything above ~5 mg/day) interferes with immunoassay-based laboratory tests — including thyroid function (TSH, free T3/T4), vitamin D, parathyroid hormone, cortisol, and most critically cardiac troponin (used in emergency room evaluation of chest pain / heart attack). The interference can produce falsely elevated OR falsely low results depending on the assay design. This has caused real clinical errors — including missed heart attacks. ALWAYS disclose biotin supplementation to any healthcare provider before blood testing, and ideally stop biotin 3–7 days before scheduled labs. If you're going to the ER with chest pain and you take biotin, tell them.",
  },
  {
    q: "Are biotin and B7 and vitamin H the same thing?",
    a: "Yes — three names for the same molecule. \"Biotin\" is the modern standard term. \"Vitamin B7\" reflects its place in the B-complex vitamin family. \"Vitamin H\" is the older European designation (the H came from the German \"Haar und Haut\" — hair and skin). \"Coenzyme R\" is an even older biochemistry name. All four refer to the same water-soluble B vitamin. When buying supplements, biotin or B7 is the standard label term.",
  },
  {
    q: "Can I overdose on biotin? Is high-dose dangerous?",
    a: "Biotin has no established Tolerable Upper Intake Level (UL) because of its excellent safety profile — it's water-soluble and excess is excreted in urine. Doses up to 300 mg/day have been used in inherited biotinidase deficiency without toxic effects. The practical concerns are not toxicity but lab-test interference (see thyroid/troponin question above), occasional acne flares at very high doses, and the financial waste of paying for mega-doses that aren't doing anything beyond what 5 mg would do. The dose-response curve for cosmetic effects plateaus well below the 10,000 mcg you'll see on hair-and-nail product labels.",
  },
  {
    q: "Should I take biotin if I'm pregnant?",
    a: "Pregnancy is one of the few populations where mild biotin deficiency may be clinically relevant — biotin catabolism accelerates during pregnancy, and subclinical deficiency has been documented in pregnant women. Standard prenatal vitamins typically contain 30–35 mcg of biotin (the FDA Adequate Intake), which is sufficient for most pregnant women. Supplementing additional mega-dose biotin (5–10 mg/day) during pregnancy isn't well-studied and isn't necessary unless there's a specific clinical indication. Stick with prenatal vitamins, defer to your OB on additional supplementation.",
  },
  {
    q: "Will biotin help with brittle hair after chemotherapy or thyroid medication?",
    a: "Possibly modestly. Some chemotherapy and certain anticonvulsant medications (phenytoin, valproic acid, carbamazepine) deplete biotin, and supplementation may help mitigate hair and nail effects in these contexts. Thyroid medication itself doesn't typically deplete biotin, but the hair changes from hypothyroidism may be biotin-responsive in some users. These are reasonable contexts to trial biotin (2.5–5 mg/day for 3–6 months) but don't expect dramatic effects — the supplement isn't a substitute for treating the underlying condition.",
  },
  {
    q: "Why does my biotin supplement contain 10,000 mcg if 2.5 mg is the trial dose?",
    a: "Marketing optimization. The Colombo 1990 nail trial used 2.5 mg (2,500 mcg) daily. Modern hair-and-nail products are commonly dosed at 5,000–10,000 mcg per serving — 2–4× the trial dose — because higher milligram numbers signal \"more powerful\" to consumers. There is no published RCT evidence demonstrating that 10,000 mcg outperforms 2.5 mg for cosmetic outcomes. The higher dose is harmless (biotin is non-toxic and water-soluble) but it isn't more effective, and it does mean greater lab-test interference. The 2.5–5 mg dose is the evidence-supported range.",
  },
];

const studies = [
  {
    title: "Treatment of Brittle Fingernails and Onychoschizia with Biotin: Scanning Electron Microscopy",
    authors: "Colombo VE, Gerber F, Bronhofer M, Floersheim GL",
    journal: "Journal of the American Academy of Dermatology",
    year: "1990",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/2273113/",
    summary: "An open-label study of 2.5 mg/day oral biotin in 44 women with brittle, splitting fingernails. After 6+ months of supplementation, scanning electron microscopy confirmed increased nail plate thickness, and 91% of patients reported clinical improvement in nail firmness and reduced splitting. The trial is the foundational evidence for biotin in nail brittleness and remains the dose-validated reference (2.5 mg/day, not the 10 mg doses common in modern hair-and-nail products).",
  },
  {
    title: "A Review of the Use of Biotin for Hair Loss",
    authors: "Patel DP, Swink SM, Castelo-Soccio L",
    journal: "Skin Appendage Disorders",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28879195/",
    summary: "A systematic review of 18 case reports and trials of biotin supplementation for hair and nail problems. The review concluded that biotin demonstrates efficacy in correcting brittle nails and reducing hair loss specifically in individuals with diagnosed biotin deficiency or related underlying conditions (acquired/inherited biotin enzymopathy, alopecia areata, uncombable hair). Evidence for biotin in healthy individuals with adequate biotin status is limited. The Patel review is the cleanest evidence summary that distinguishes the deficiency-response use case from the marketing-driven \"biotin for hair\" use case.",
  },
  {
    title: "Biotin Interference in Immunoassays: A Threat to Patient Safety",
    authors: "Trambas C, Lu Z, Yen T, Sikaris K",
    journal: "Annals of Clinical Biochemistry",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29486546/",
    summary: "A clinical review documenting the systematic interference of high-dose biotin supplementation with streptavidin-biotin immunoassays — the dominant technology platform for thyroid hormones, parathyroid hormone, cardiac troponin, vitamin D, cortisol, and many other clinical laboratory tests. The review compiles case reports of clinical errors caused by biotin interference, including missed heart attacks (falsely low troponin) and inappropriate hyperthyroidism diagnoses. The FDA issued a safety communication based on this evidence in 2017. This is the most important biotin paper for supplement users to know about.",
  },
  {
    title: "Biotin Supplementation and Hair Growth: A Systematic Review and Meta-Analysis",
    authors: "Walth CB, Wessman LL, Wipf A, et al.",
    journal: "Journal of the American Academy of Dermatology",
    year: "2018",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/29782915/",
    summary: "A systematic review of biotin for hair loss in adults without underlying biotin deficiency. The review found insufficient evidence to support biotin supplementation for hair growth in this population. Trials in deficient individuals or specific conditions showed benefit; trials in healthy adults did not. The review is widely cited as evidence that the mass-market \"biotin for hair\" use case is not RCT-supported.",
  },
  {
    title: "Biotin and Biotinidase Deficiency",
    authors: "Said HM",
    journal: "Expert Review of Endocrinology & Metabolism",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/30780812/",
    summary: "A reference review covering biotin biochemistry, the five carboxylase enzymes biotin activates (acetyl-CoA, pyruvate, propionyl-CoA, methylcrotonyl-CoA carboxylases plus 3-methylglutaconyl-CoA hydratase), dietary sources, deficiency states (acquired and inherited biotinidase deficiency), and clinical applications. Useful as a single-source biochemistry overview that frames the cosmetic-supplement evidence in context.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does biotin work?",
    intro:
      "Biotin works as an essential coenzyme for carboxylase enzymes — five specific enzymes that participate in fatty acid synthesis, amino acid metabolism, and gluconeogenesis. Without adequate biotin, these enzymes can't function, producing the deficiency-state hair loss, brittle nails, and skin rash that biotin is famous for treating. The keratin-support story commonly used in marketing is indirect — biotin doesn't directly produce keratin, but the carboxylase pathways it activates contribute to the metabolic infrastructure keratin synthesis requires.",
    body: [
      "Carboxylase coenzyme activity. Biotin is covalently attached to five carboxylase enzymes via biotinidase, which then catalyze CO2-fixation reactions: acetyl-CoA carboxylase (fatty acid synthesis), pyruvate carboxylase (gluconeogenesis), propionyl-CoA carboxylase (amino acid metabolism, particularly valine/isoleucine/methionine catabolism), methylcrotonyl-CoA carboxylase (leucine metabolism), and 3-methylglutaconyl-CoA hydratase. These five pathways underpin lipid, amino acid, and glucose metabolism.",
      "Keratin infrastructure support. Hair and nails are largely keratin — a structural protein synthesized through amino acid metabolism pathways biotin supports indirectly. The cosmetic claim that biotin \"builds keratin\" is mechanistically imprecise: biotin supports the metabolic background against which keratin synthesis occurs, but it isn't a direct keratin precursor.",
      "Skin lipid synthesis. Through acetyl-CoA carboxylase activation, biotin supports synthesis of long-chain fatty acids incorporated into skin cell membranes and the stratum corneum lipid matrix — the barrier that retains moisture and excludes irritants.",
      "Gene expression. Biotin modulates expression of multiple genes through histone biotinylation — a less-characterized epigenetic role that may contribute to its broader cellular effects beyond carboxylase activation.",
      "Threshold biology. Biotin's clinical effects follow threshold biology: below adequacy, deficiency states produce dramatic symptoms (hair loss, dermatitis, neurological issues); above adequacy, additional biotin produces diminishing returns. The supplementation case is strongest in deficiency, modest in marginal status, and weakest in fully replete individuals.",
    ],
  },
  {
    id: "research",
    title: "What does biotin actually do?",
    intro:
      "Biotin has one of the cleanest deficiency-correction evidence bases of any vitamin — but the cosmetic-supplementation evidence in healthy adults is much weaker than the marketing suggests. The single strongest cosmetic indication is brittle nails (Colombo 1990); hair-growth evidence in replete individuals is largely absent. The most important non-cosmetic effect is the lab-test interference that high-dose biotin causes.",
    body: [
      "Brittle nail correction (Moderate). Colombo 1990 (n=44) documented significant nail plate thickening and clinical improvement with 2.5 mg/day for 6+ months. The cleanest cosmetic indication for biotin and the dose-validated reference.",
      "Hair loss in deficiency states (Strong, but narrow). Biotin supplementation reliably treats hair loss caused by biotinidase deficiency (inherited), severe nutritional deficiency, anticonvulsant-induced deficiency, and certain rare conditions. Effective in the deficient population; not validated in replete users.",
      "Hair growth in healthy adults (Weak). Walth 2018 systematic review found insufficient evidence for biotin supplementation in cosmetic hair growth in users without underlying deficiency. Despite massive marketing claims, the RCT base in replete healthy adults is largely absent.",
      "Skin health (Weak/Moderate). Modest evidence for skin barrier function support, particularly in deficiency states. Acne reports at very high doses (unclear directionality — high-dose biotin can both cause and treat acne depending on context).",
      "Carboxylase metabolic support (Strong mechanism). Biotin's role as a carboxylase coenzyme is biochemically established and uncontroversial. The metabolic effects of supplementation in replete individuals are subtle but real for fatty acid synthesis, gluconeogenesis, and amino acid metabolism.",
      "Lab-test interference (Strong, important clinical effect). Trambas 2018 and FDA 2017 safety communication document systematic interference with thyroid, troponin, and other immunoassays. This is the most consequential non-cosmetic effect of high-dose biotin supplementation.",
    ],
  },
  {
    id: "dosing",
    title: "How is biotin dosed?",
    intro:
      "Biotin dosing is wildly inflated by the supplement market. The trial-validated nail dose is 2.5 mg/day; commercial hair-and-nail products commonly contain 5–10 mg per serving (2–4× the evidence-supported range). For deficiency-correction the dose is typically 5–10 mg/day; for inherited biotinidase deficiency clinical doses go to 100–300 mg/day. The honest answer for cosmetic supplementation is 2.5–5 mg/day — anything higher is marketing, not mechanism.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cosmetic baseline (nails, skin).</span> 2.5 mg/day (2,500 mcg) — the Colombo 1990 nail-trial dose. The evidence-validated cosmetic dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Higher cosmetic dose (commercial products).</span> 5–10 mg/day (5,000–10,000 mcg) — common in hair-and-nail products. No clear RCT evidence for added benefit over 2.5 mg, but harmless from a toxicity standpoint.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Deficiency correction.</span> 5–10 mg/day for acquired biotin deficiency from anticonvulsants, severe nutritional inadequacy, or specific dermatologic conditions. Coordinate with clinician.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Inherited biotinidase deficiency.</span> 5–20 mg/day pediatric; up to 100–300 mg/day for severe forms. Clinical-only dosing under specialist supervision.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: nail improvements typically emerge after 3–6 months of consistent use. Hair effects (in users where biotin actually helps) emerge over similar timescales — hair grows ~1 cm/month, so visible changes lag.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> 1 mg = 1,000 mcg. A &ldquo;10,000 mcg biotin&rdquo; capsule contains 10 mg — 4× the Colombo 1990 trial dose. The FDA Adequate Intake (AI) for adults is 30–35 mcg/day from food. Most adults get this much from diet alone.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take biotin",
    intro:
      "Biotin is taken orally as capsules, tablets, gummies, or liquid drops. It's water-soluble, absorbed in the small intestine, and well-tolerated regardless of timing or food coadministration. The practical considerations are dose disclosure and the critical lab-test interference issue.",
    node: (
      <div className="space-y-4">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily — no advantage to splitting; biotin is well-absorbed and reaches stable serum levels with single dosing.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning is the practical default; no clinical advantage to any specific time. Bundling with breakfast aids habit formation.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is not food-dependent. With or without meals works equally well.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Capsules or tablets are the standard; gummies are common but watch for added sugar; liquid drops are an alternative for users with pill aversion. Form choice doesn&apos;t meaningfully affect bioavailability.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for explicit mcg or mg of D-biotin per serving (the bioactive stereoisomer). Avoid &ldquo;biotin blend&rdquo; or hair-vitamin proprietary mixes that obscure the actual biotin dose.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / lab-test consideration</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Stop biotin 3–7 days before any scheduled blood test — particularly thyroid panels, troponin (cardiac), vitamin D, parathyroid hormone, cortisol. High-dose biotin interferes with immunoassays and has caused real clinical errors including missed heart attacks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does biotin stack with?",
    intro:
      "Biotin's natural stacking partners are within the broader hair/skin/nail nutritional toolkit — collagen, vitamin C, zinc, and the trace minerals involved in keratin and skin structural protein metabolism. Biotin doesn&apos;t have a direct peptide analog: its action is at carboxylase coenzymes deep in cellular metabolism, not at receptor-level signaling pathways that peptides target. The two areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/collagen-peptides" className="text-[#0891b2] hover:underline">Collagen peptides</Link>{" "}
              — direct precursor amino acids for hair, skin, and nail structural proteins. Pairs cleanly with biotin&apos;s carboxylase-cofactor metabolic support.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-c" className="text-[#0891b2] hover:underline">Vitamin C</Link>{" "}
              — required cofactor for collagen hydroxylation. Standard pairing in skin/hair/nail nutritional stacks.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/zinc" className="text-[#0891b2] hover:underline">Zinc</Link>{" "}
              — essential for hair follicle function and protein synthesis. Common deficiency contributing to hair changes; complements biotin in nutritional hair-loss protocols.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/hyaluronic-acid" className="text-[#0891b2] hover:underline">Hyaluronic acid</Link>{" "}
              — skin hydration via dermal water-binding. Compatible adjunct in skin-focused stacks.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/fish-oil" className="text-[#0891b2] hover:underline">Omega-3 fish oil</Link>{" "}
              — EPA/DHA support skin barrier lipid composition. Useful adjunct in chronic dry-skin or eczema contexts.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate protein intake.</span> Hair and nails are protein structures. No supplement can compensate for low total protein intake; biotin works on top of dietary protein adequacy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Address underlying causes.</span> Most cosmetic hair/nail concerns have non-vitamin causes — thyroid dysfunction, iron deficiency, hormonal changes, medication side effects. Biotin can&apos;t fix what it didn&apos;t cause.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stop 3–7 days before any blood test.</span> The single most important practical habit for high-dose biotin users. Add it to your pre-lab checklist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t over-dose.</span> 2.5–5 mg/day is the evidence-supported range. 10,000 mcg doesn&apos;t outperform 2,500 mcg for cosmetic outcomes — it just means more lab-test interference.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Biotin has one of the cleanest safety profiles of any vitamin. The dominant concern is not toxicity — it's lab-test interference at high doses, which has caused documented clinical errors including missed heart attacks. This is unusual: a supplement where the practical danger is diagnostic, not pharmacological.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No common side effects at typical doses — biotin is one of the better-tolerated B vitamins.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Occasional acne flare at very high doses (10 mg+) — likely via competition with pantothenic acid for absorption. Resolves on dose reduction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vivid yellow-orange urine — harmless excess biotin excretion. Cosmetic only.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lab-test interference (clinically critical).</span> High-dose biotin (5 mg+/day) interferes with streptavidin-biotin immunoassays — affects thyroid panels (TSH, free T3/T4), cardiac troponin, vitamin D, parathyroid hormone, cortisol, and many other tests. FDA issued a safety communication in 2017. Stop biotin 3–7 days before any scheduled labs and ALWAYS disclose to ER staff if you take biotin.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious toxicity at supplemental doses across the human literature — biotin is water-soluble and well-excreted.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticonvulsants (phenytoin, valproic acid, carbamazepine).</span> These medications deplete biotin over chronic use; supplementation may be clinically appropriate. Coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Raw egg whites — contain avidin, a biotin-binding protein that prevents absorption. Routine consumption of raw eggs can produce biotin deficiency. Cooked eggs denature avidin; not a concern.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pantothenic acid (vitamin B5) — competes with biotin for absorption at very high doses of either. Practical concern only at mega-dose levels.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Alcohol — chronic heavy alcohol use can impair biotin absorption and accelerate deficiency.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — biotin catabolism accelerates; standard prenatals (30–35 mcg) sufficient for most. Mega-dose supplementation during pregnancy not well-studied — defer to OB.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about biotin",
    intro:
      "Biotin is one of the best-characterized B vitamins biochemically — but the cosmetic supplementation case in healthy adults is much weaker than marketing suggests, and several open questions affect how confidently we can predict response.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Hair-growth efficacy in replete healthy adults.</span> The Walth 2018 systematic review and Patel 2017 review both conclude there is insufficient evidence to recommend biotin for hair growth in users without underlying biotin deficiency. The massive marketing claims for biotin hair products are not RCT-supported in metabolically healthy populations. Whether higher doses, longer duration, or specific population subgroups would show effect is largely untested.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Effective dose-response curve.</span> The Colombo 1990 nail trial used 2.5 mg/day. Modern products are commonly dosed at 5–10 mg/day. Whether the higher doses produce meaningful additional cosmetic benefit is not RCT-tested.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Subclinical biotin status in modern diets.</span> True biotin deficiency is rare in healthy adults, but the prevalence of subclinical / marginal biotin status (where cosmetic supplementation might modestly help) isn&apos;t well-characterized. Standard biotin-status tests aren&apos;t routinely available, so users can&apos;t easily verify whether they&apos;re actually marginal before supplementing.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Lab-test interference scope.</span> The interference issue is well-documented for major immunoassay platforms (thyroid, troponin, vitamin D), but the full list of affected assays continues to grow as more labs investigate. The conservative practical rule: stop biotin 3–7 days before any blood test, regardless of specific assay.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Pregnancy supplementation safety at supraphysiological doses.</span> Standard prenatal biotin amounts (30–35 mcg) are well-characterized; mega-dose (5–10 mg) biotin supplementation during pregnancy isn&apos;t well-studied. Default to standard prenatal dosing unless clinical indication.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Where studies disagree.</span> The biotin-for-hair literature is heterogeneous: positive trials in deficiency states, mostly null trials in healthy adults, and a large gap between marketing claims and actual evidence. Mechanism reviews and dermatology consensus increasingly recommend against biotin for cosmetic hair growth in non-deficient users.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy biotin",
    intro:
      "Biotin is one of the cheapest and most widely available vitamins. Quality bar is low because the molecule is simple and well-characterized. The main quality marker is clean dose disclosure (mcg or mg of D-biotin per serving). The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">D-biotin (the bioactive stereoisomer) explicitly listed</span> with mcg or mg per serving.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">2,500–5,000 mcg (2.5–5 mg) per serving</span> — the evidence-supported cosmetic range. 10,000 mcg doesn&apos;t add benefit.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary hair-vitamin blends</span> that obscure the actual biotin dose alongside collagen, keratin, and other ingredients.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Watch added sugar in gummy formats</span> — common in hair-vitamin gummies.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t pay a premium</span> — biotin is one of the cheapest vitamins to produce. High prices are pure marketing.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=biotin+supplement&tag=profpeptide-20" label="Biotin" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Biotin FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              {f.a}
            </p>
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
          Colombo VE, Gerber F, Bronhofer M, Floersheim GL. Treatment of brittle fingernails and onychoschizia with biotin: scanning electron microscopy. J Am Acad Dermatol. 1990;23(6 Pt 1):1127-1132.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2273113/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2273113/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Patel DP, Swink SM, Castelo-Soccio L. A review of the use of biotin for hair loss. Skin Appendage Disord. 2017;3(3):166-169.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28879195/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/28879195/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Walth CB, Wessman LL, Wipf A, et al. Biotin supplementation and hair growth: a systematic review and meta-analysis. J Am Acad Dermatol. 2018;78(6):1232-1234.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29782915/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29782915/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Trambas C, Lu Z, Yen T, Sikaris K. Depletion of biotin using streptavidin-coated microparticles: a validated solution to the problem of biotin interference in streptavidin-biotin immunoassays. Ann Clin Biochem. 2018;55(2):216-226.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29486546/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29486546/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          U.S. Food and Drug Administration. The FDA warns that biotin may interfere with lab tests: FDA safety communication. November 2017.{" "}
          <a href="https://www.fda.gov/medical-devices/safety-communications/update-fda-warns-biotin-may-interfere-lab-tests-fda-safety-communication" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.fda.gov/medical-devices/safety-communications/update-fda-warns-biotin-may-interfere-lab-tests-fda-safety-communication
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Said HM. Biotin: biochemical, physiological and clinical aspects. Subcell Biochem. 2012;56:1-19.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22116691/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22116691/
          </a>
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
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does biotin actually work for hair growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mostly only if you're deficient — and most people aren't. The strongest biotin-for-hair evidence is in true deficiency states (rare in healthy adults) or specific conditions like alopecia areata, brittle hair from medication side effects, or uncombable hair syndrome. A 2017 systematic review (Patel et al., Skin Appendage Disord) found most positive hair-loss studies involved underlying biotin deficiency. For metabolically healthy adults with adequate dietary biotin, RCT evidence for cosmetic hair growth is limited — despite enormous marketing claims."
      }
    },
    {
      "@type": "Question",
      "name": "What's the brittle nails evidence — is that any better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — nail brittleness has the cleanest biotin RCT evidence. The Colombo 1990 Swiss study (n=44) found 2.5 mg daily produced significant improvements in nail plate thickness with scanning electron microscopy confirmation; 91% of women reported improvement after 6+ months. A follow-up study by Hochman confirmed increased nail firmness and reduced splitting. This is the strongest cosmetic indication for biotin — and the dose (2.5 mg, not 10 mg) is what the trial evidence actually validates."
      }
    },
    {
      "@type": "Question",
      "name": "Will high-dose biotin mess up my blood tests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and this is the most important practical point about biotin. High-dose biotin (anything above ~5 mg/day) interferes with immunoassay-based laboratory tests — including thyroid function (TSH, free T3/T4), vitamin D, parathyroid hormone, cortisol, and most critically cardiac troponin (used in emergency room evaluation of chest pain / heart attack). The interference can produce falsely elevated OR falsely low results depending on the assay design. This has caused real clinical errors — including missed heart attacks. ALWAYS disclose biotin supplementation to any healthcare provider before blood testing, and ideally stop biotin 3–7 days before scheduled labs."
      }
    },
    {
      "@type": "Question",
      "name": "Are biotin and B7 and vitamin H the same thing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — three names for the same molecule. \"Biotin\" is the modern standard term. \"Vitamin B7\" reflects its place in the B-complex vitamin family. \"Vitamin H\" is the older European designation (the H came from the German \"Haar und Haut\" — hair and skin). \"Coenzyme R\" is an even older biochemistry name. All four refer to the same water-soluble B vitamin. When buying supplements, biotin or B7 is the standard label term."
      }
    },
    {
      "@type": "Question",
      "name": "Can I overdose on biotin? Is high-dose dangerous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biotin has no established Tolerable Upper Intake Level (UL) because of its excellent safety profile — it's water-soluble and excess is excreted in urine. Doses up to 300 mg/day have been used in inherited biotinidase deficiency without toxic effects. The practical concerns are not toxicity but lab-test interference, occasional acne flares at very high doses, and the financial waste of paying for mega-doses that aren't doing anything beyond what 5 mg would do."
      }
    },
    {
      "@type": "Question",
      "name": "Should I take biotin if I'm pregnant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pregnancy is one of the few populations where mild biotin deficiency may be clinically relevant — biotin catabolism accelerates during pregnancy, and subclinical deficiency has been documented in pregnant women. Standard prenatal vitamins typically contain 30–35 mcg of biotin (the FDA Adequate Intake), which is sufficient for most pregnant women. Supplementing additional mega-dose biotin (5–10 mg/day) during pregnancy isn't well-studied and isn't necessary unless there's a specific clinical indication."
      }
    },
    {
      "@type": "Question",
      "name": "Will biotin help with brittle hair after chemotherapy or thyroid medication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Possibly modestly. Some chemotherapy and certain anticonvulsant medications (phenytoin, valproic acid, carbamazepine) deplete biotin, and supplementation may help mitigate hair and nail effects in these contexts. Thyroid medication itself doesn't typically deplete biotin, but the hair changes from hypothyroidism may be biotin-responsive in some users. These are reasonable contexts to trial biotin (2.5–5 mg/day for 3–6 months) but don't expect dramatic effects."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my biotin supplement contain 10,000 mcg if 2.5 mg is the trial dose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marketing optimization. The Colombo 1990 nail trial used 2.5 mg (2,500 mcg) daily. Modern hair-and-nail products are commonly dosed at 5,000–10,000 mcg per serving — 2–4× the trial dose — because higher milligram numbers signal \"more powerful\" to consumers. There is no published RCT evidence demonstrating that 10,000 mcg outperforms 2.5 mg for cosmetic outcomes. The higher dose is harmless (biotin is non-toxic and water-soluble) but it isn't more effective, and it does mean greater lab-test interference."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Biotin: What the Evidence Actually Says About Hair, Nails, Skin",
  "description": "Biotin (vitamin B7) dosing, the deficiency-vs-replete evidence split, and the lab-test interference warning every supplementer needs to know.",
  "url": "https://profpeptide.com/supplements/biotin",
  "datePublished": "2026-04-07T00:00:00Z",
  "dateModified": "2026-05-26T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "reviewedBy": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prof. Peptide",
    "url": "https://profpeptide.com"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
    { "@type": "ListItem", "position": 2, "name": "Supplements", "item": "https://profpeptide.com/supplements" },
    { "@type": "ListItem", "position": 3, "name": "Biotin" }
  ]
};

export default function BiotinPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Biotin</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Vitamin B7, vitamin H, coenzyme R, D-biotin
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Water-soluble B vitamin / carboxylase enzyme coenzyme
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Mixed — Strong for nail brittleness (Colombo 1990 + replications) and for deficiency-state hair/skin correction; Weak for cosmetic hair growth in healthy adults (Walth 2018 meta-analysis null; Patel 2017 review same); important clinical effect on lab-test interference (FDA 2017 safety communication, Trambas 2018) that affects how biotin should be used regardless of cosmetic intent
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is biotin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Biotin (vitamin B7) is a water-soluble B vitamin that functions as an essential coenzyme for five carboxylase enzymes involved in fatty acid synthesis, amino acid metabolism, and gluconeogenesis. Its supplement profile is unusual: the deficiency-state evidence is rock-solid (severe biotin deficiency causes hair loss, brittle nails, and skin rash; supplementation reliably corrects these), but the cosmetic supplementation evidence in healthy adults is much weaker than the marketing claims. The cleanest cosmetic RCT is Colombo 1990, which documented improved nail plate thickness with 2.5 mg/day. The Walth 2018 meta-analysis and Patel 2017 review both conclude there is insufficient evidence for biotin in hair growth in replete (non-deficient) adults. The most important practical point about biotin isn&apos;t toxicity — it&apos;s the lab-test interference. The FDA issued a safety communication in 2017 noting that high-dose biotin systematically interferes with immunoassay-based blood tests including thyroid panels and cardiac troponin, with documented clinical errors including missed heart attacks. Biotin is a vitamin cofactor; the cosmetic supplementation case is real for nails and modest for hair only when underlying deficiency exists.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved nail plate thickness and reduced splitting (Colombo 1990, 2.5 mg/day, 6+ months)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Correction of hair loss in deficiency states and specific medical conditions</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Skin barrier function support via fatty acid synthesis pathway</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Essential coenzyme activity for five carboxylase enzymes (acetyl-CoA, pyruvate, propionyl-CoA, methylcrotonyl-CoA carboxylases plus 3-methylglutaconyl-CoA hydratase)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Support for amino acid metabolism and gluconeogenesis</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Treatment of inherited biotinidase deficiency (clinical use, high-dose under specialist supervision)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mitigation of medication-induced biotin depletion (anticonvulsants)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 2.5–5 mg/day (2,500–5,000 mcg) — the evidence-supported cosmetic range. Common commercial products at 10,000 mcg/day are 2–4× the RCT-validated dose and offer no demonstrated additional benefit. FDA Adequate Intake for adults is 30–35 mcg/day from food; most adults reach this from diet alone.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Critical lab-test note:</span> Stop biotin 3–7 days before any scheduled blood test (especially thyroid panels and cardiac troponin). Always disclose biotin use to ER staff if you take it. The FDA issued a 2017 safety communication on this — see the Side Effects section below.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=biotin+supplement&tag=profpeptide-20" label="Biotin" />
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Vitamin B7", "Nails", "Hair", "Carboxylase Coenzyme", "Lab-Test Interference", "Keratin Support"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#0891b2] hover:underline">Collagen Peptides</Link>
          <Link href="/supplements/vitamin-c" className="text-sm font-medium text-[#0891b2] hover:underline">Vitamin C</Link>
          <Link href="/supplements/zinc" className="text-sm font-medium text-[#0891b2] hover:underline">Zinc</Link>
          <Link href="/supplements/hyaluronic-acid" className="text-sm font-medium text-[#0891b2] hover:underline">Hyaluronic Acid</Link>
          <Link href="/supplements/fish-oil" className="text-sm font-medium text-[#0891b2] hover:underline">Fish Oil</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Biotin" pagePath="/supplements/biotin" />
    </div>
    </>
  );
}
