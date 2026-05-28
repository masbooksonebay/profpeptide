import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/l-arginine",
  title: "L-Arginine: NO Precursor, GH Secretagogue, Why Citrulline Wins",
  description:
    "L-arginine dosing (3–9 g), the first-pass metabolism ceiling that limits oral bioavailability, why L-citrulline now leads NO research, and the GH-at-rest mechanism.",
});

const faqs = [
  {
    q: "Should I take L-arginine or L-citrulline for nitric oxide?",
    a: (
      <>
        For raising plasma arginine and nitric oxide, take{" "}
        <Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}
        — not L-arginine. The reason is counterintuitive but well-documented: oral L-arginine undergoes extensive first-pass metabolism in the intestine (by arginase) and liver before reaching systemic circulation, so a large proportion of an oral dose never makes it to the bloodstream. L-citrulline is absorbed efficiently, escapes hepatic arginase, and is converted to arginine in the kidneys — producing higher and longer-lasting plasma arginine levels than equimolar L-arginine. Schwedhelm 2008 and Moinard 2008 are the foundational pharmacokinetic studies. Contemporary nitric oxide research has largely shifted to L-citrulline for this reason. L-arginine remains relevant for its growth hormone secretagogue effect, wound healing, and specific clinical contexts — but for pre-workout NO/pump or chronic vascular support, citrulline is the better tool.
      </>
    ),
  },
  {
    q: "Does L-arginine actually raise growth hormone?",
    a: "Yes, but the effect is context-dependent. Intravenous arginine reliably produces a large GH spike — this is the basis of the arginine GH stimulation test used clinically to diagnose adult GH deficiency. Oral arginine produces a more modest GH response: doses of 5–9 g at rest or before sleep increase resting GH levels (Kanaley 2008 review). The catch: arginine taken around exercise tends to blunt the exercise-induced GH spike rather than enhance it — the natural exercise GH response is already near-maximal, and arginine can interfere rather than add. Practical implication: if you're using arginine for GH support, take it pre-bed on an empty stomach, not pre-workout.",
  },
  {
    q: "How much L-arginine should I take?",
    a: "Depends on the goal. For GH support at rest: 3–9 g pre-bed on empty stomach. For cardiovascular/blood pressure support: 3–6 g daily in divided doses. For male fertility support (sperm parameters): 5–10 g daily for 1–3 months. For wound healing under medical supervision: 6–20 g daily. For erectile dysfunction: typically 5 g daily, though L-citrulline at 1.5–3 g is now preferred. Higher doses produce more GI distress with diminishing returns due to the absorption ceiling. Split divided doses (3 × 2 g rather than 1 × 6 g) reduces GI side effects.",
  },
  {
    q: "Will L-arginine give me a better pump in the gym?",
    a: "Probably not — and this is one of the more durable supplement-marketing/research divergences. Pre-workout supplements have featured L-arginine for decades because the NO-precursor mechanism is biologically real, but the bioavailability ceiling means that a typical 1–3 g pre-workout dose produces only modest plasma arginine increases. RCTs of acute oral L-arginine on resistance exercise performance and pump have largely been null or weakly positive. L-citrulline at 6–8 g (or citrulline malate at 8 g) produces measurable improvements in resistance exercise volume and perceived pump. If your pre-workout includes L-arginine for pump effects, swap to L-citrulline.",
  },
  {
    q: "Can L-arginine help with erectile dysfunction?",
    a: "Modestly, and again L-citrulline is now preferred. The NO/cGMP pathway underlying erectile function is well-characterized — PDE5 inhibitors (sildenafil, tadalafil) work by preserving cGMP downstream. L-arginine works upstream by supplying NOS substrate. Older trials at 5 g/day showed modest ED improvements. The Cormio 2011 L-citrulline trial (1.5 g/day) showed comparable or better results at much lower doses due to citrulline's pharmacokinetic advantage. For users targeting ED through the NO pathway, citrulline is the more efficient tool. Arginine remains relevant in some combination products (e.g., pine bark extract/Pycnogenol + arginine — Stanislavov 2008).",
  },
  {
    q: "Is L-arginine safe? Any major contraindications?",
    a: "Generally safe at typical supplemental doses. Two important contraindications: (1) Recent myocardial infarction — the VINTAGE-MI trial found increased post-MI mortality with L-arginine supplementation; do not take L-arginine after recent heart attack without cardiology supervision. (2) Active herpes simplex outbreaks — arginine is required for HSV viral replication, and lysine competes with arginine for transport into cells; arginine supplementation may worsen herpes outbreaks in susceptible users. Other watch-list items: modest blood pressure reduction (additive with antihypertensives), GI distress at high doses, potential allergic reactions, and rare reports of pancreatitis at very high doses. Coordinate with prescribing clinician if on blood pressure or anticoagulant medication.",
  },
  {
    q: "Can I stack L-arginine with GH peptides like sermorelin?",
    a: (
      <>
        Yes — and the stack has a long history in GH-support protocols. GHRH-analog peptides like{" "}
        <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">sermorelin</Link>{" "}
        and{" "}
        <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
        stimulate GH release by acting on the GHRH receptor; arginine works through a complementary mechanism by inhibiting somatostatin (the GH brake). The combination is the classical &quot;double-stimulus&quot; approach used in clinical GH stimulation testing. For at-home protocols targeting endogenous GH support, taking 3–9 g L-arginine pre-bed on empty stomach complements GHRH-class peptide injection timing. Note: this is for users specifically targeting GH/IGF-1 support; not relevant for general health users.
      </>
    ),
  },
  {
    q: "Why does the body convert citrulline to arginine but oral arginine doesn't work as well?",
    a: "This is the elegant counterintuitive pharmacology at the heart of the NO supplementation field. Oral L-arginine encounters intestinal arginase (the enzyme that breaks arginine down to ornithine and urea) immediately upon absorption, and any surviving arginine then encounters hepatic arginase on first pass. By the time arginine reaches systemic circulation, much of an oral dose is gone. L-citrulline is not a substrate for arginase — it passes through intestine and liver intact, reaches the kidneys, and is converted to arginine by argininosuccinate synthetase/lyase enzymes that work outside the first-pass arginase exposure. Counterintuitively, supplementing the precursor (citrulline) raises plasma arginine more than supplementing arginine itself. This is the central reason contemporary NO research uses citrulline.",
  },
];

const studies = [
  {
    title: "Growth Hormone, Arginine and Exercise",
    authors: "Kanaley JA",
    journal: "Current Opinion in Clinical Nutrition and Metabolic Care",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18090659/",
    summary: "A comprehensive review of arginine's GH-stimulating effect at rest and during exercise. Intravenous arginine produces robust GH release (basis of the clinical arginine stimulation test). Oral arginine at 5–9 g elevates resting GH levels — most pronounced at rest and pre-sleep. The review's key practical finding: arginine taken before or during exercise tends to blunt the natural exercise-induced GH response rather than enhance it. Kanaley 2008 is the most-cited single-source reference for the somatostatin-inhibition mechanism and the rest-versus-exercise dosing distinction.",
  },
  {
    title: "Pharmacokinetic and Pharmacodynamic Properties of Oral L-citrulline and L-arginine: Impact on Nitric Oxide Metabolism",
    authors: "Schwedhelm E, Maas R, Freese R, et al.",
    journal: "British Journal of Clinical Pharmacology",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17919250/",
    summary: "A pharmacokinetic crossover study comparing oral L-arginine vs L-citrulline supplementation in healthy volunteers. L-citrulline produced higher and longer-lasting plasma arginine elevations than equimolar L-arginine. The mechanism — citrulline escapes first-pass arginase metabolism that degrades a substantial proportion of oral arginine before it reaches systemic circulation. Schwedhelm 2008 is the foundational pharmacokinetic reference for why citrulline is now preferred over arginine for NO-targeting applications.",
  },
  {
    title: "L-Arginine in the Management of Cardiovascular Diseases",
    authors: "Bode-Böger SM, et al.",
    journal: "Vascular Health and Risk Management",
    year: "2007",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17760236/",
    summary: "A review of L-arginine's cardiovascular applications — endothelial function, blood pressure, and pre-/post-surgical use. Documents the modest but reproducible blood pressure reduction from chronic oral arginine (2–3 mmHg systolic in meta-analysis). Reviews the somewhat disappointing translation of mechanism plausibility to hard cardiovascular outcomes in large trials (notably VINTAGE-MI's adverse signal post-MI). Framing reference for honest assessment of arginine's cardiovascular evidence base.",
  },
  {
    title: "L-Arginine Therapy in Acute Myocardial Infarction: The Vascular Interaction with Age in Myocardial Infarction (VINTAGE-MI) Randomized Clinical Trial",
    authors: "Schulman SP, Becker LC, Kass DA, et al.",
    journal: "JAMA",
    year: "2006",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/16403930/",
    summary: "A double-blind RCT of L-arginine (9 g/day) vs placebo in 153 patients post-acute myocardial infarction. The trial was terminated early — VINTAGE-MI found higher mortality in the arginine arm (8.6% vs 0% in placebo) over 6 months of follow-up. This is the foundational safety contraindication: do not initiate L-arginine supplementation after recent MI. The mechanism for the adverse signal isn't fully characterized but may involve adverse interactions with NO signaling in the post-infarct myocardium.",
  },
  {
    title: "Oral L-Citrulline Supplementation Improves Erection Hardness in Men with Mild Erectile Dysfunction",
    authors: "Cormio L, De Siati M, Lorusso F, et al.",
    journal: "Urology",
    year: "2011",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/21195829/",
    summary: "A single-blind RCT of L-citrulline (1.5 g/day) for 1 month in 24 men with mild erectile dysfunction. 50% of the citrulline group reported improved erection hardness vs 8.3% of placebo controls. Included for context on this page because Cormio 2011 is the central reason contemporary ED-via-NO supplementation uses citrulline rather than arginine — equivalent or better results at a much lower dose due to citrulline's pharmacokinetic advantage.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does L-arginine work?",
    intro:
      "L-arginine works through four mechanisms: as the direct substrate for nitric oxide synthase (NOS) producing NO, as a somatostatin inhibitor stimulating pituitary GH release, as a urea cycle intermediate supporting nitrogen clearance, and as a conditionally essential amino acid for immune cells and healing tissue. The practical effect of all four is limited by oral arginine's poor bioavailability — first-pass intestinal and hepatic arginase metabolism degrades a substantial proportion before it reaches systemic circulation.",
    body: [
      "Nitric oxide substrate. L-arginine is the direct substrate for endothelial, neuronal, and inducible nitric oxide synthases (eNOS, nNOS, iNOS). NOS converts arginine to citrulline plus nitric oxide (NO). NO produced in vascular endothelium activates guanylyl cyclase in adjacent smooth muscle, raising cGMP, which causes vasodilation. This is the same downstream pathway that PDE5 inhibitors (sildenafil, tadalafil) target — they preserve cGMP by blocking its breakdown.",
      "First-pass bioavailability ceiling. Oral L-arginine encounters arginase (the enzyme that hydrolyzes arginine to ornithine and urea) in the intestine and liver before reaching systemic circulation. A substantial proportion of an oral dose is lost to first-pass metabolism. This is why L-citrulline — which is not a substrate for arginase, passes through gut and liver intact, and is converted to arginine in the kidneys — raises plasma arginine more effectively than oral arginine itself. Schwedhelm 2008 is the foundational pharmacokinetic comparison.",
      "Growth hormone secretagogue (somatostatin inhibition). Arginine stimulates GH release from anterior pituitary somatotrophs by inhibiting somatostatin — the hormone that normally suppresses GH release. The effect is most pronounced at rest and pre-sleep (when somatostatin tone is otherwise high) and is the basis of the clinical arginine GH stimulation test. Oral arginine at 5–9 g produces modest GH elevation at rest; pre-exercise dosing tends to blunt rather than enhance the exercise-induced GH spike.",
      "Urea cycle intermediate. Arginine is a key intermediate in the urea cycle — the pathway that converts toxic ammonia to urea for renal excretion. This supports nitrogen balance during high-protein diets and is clinically relevant in inherited urea cycle disorders (where arginine supplementation is a standard treatment).",
      "Conditionally essential during stress. Under normal conditions, healthy adults synthesize sufficient arginine. During surgery, burns, sepsis, and major injury, arginine demand rises sharply — rapidly dividing immune cells (lymphocytes, macrophages) and healing tissue have high arginine requirements for proliferation and collagen synthesis. This is the basis for clinical immunonutrition formulas (Impact, Oxepa) used in surgical and ICU contexts.",
      "Polyamine biosynthesis. Arginine is a precursor (via ornithine) to polyamines (putrescine, spermidine, spermine) — small molecules required for cell proliferation, DNA replication, and protein synthesis. This is mechanistically relevant for wound healing, immune cell expansion, and cancer biology (where polyamine production is often upregulated).",
      "Sperm function support. Arginine is concentrated in seminal fluid and is required for sperm production and motility. Clinical trials of L-arginine supplementation in oligospermia (5–10 g/day over 1–3 months) document modest improvements in sperm count and motility — though the literature is mixed.",
    ],
  },
  {
    id: "research",
    title: "What does L-arginine actually do?",
    intro:
      "L-arginine has been studied for over 70 years across cardiovascular, endocrine, surgical, fertility, and erectile dysfunction applications. The honest summary: mechanism plausibility is strong across all of these, but clinical-outcome translation is constrained by oral bioavailability — which is why contemporary NO research has shifted to L-citrulline. Arginine remains evidence-supported for GH stimulation at rest, modest blood pressure reduction, surgical immunonutrition, and select fertility applications.",
    body: [
      "Growth hormone elevation at rest (Moderate). Kanaley 2008 review and underlying trials document oral arginine at 5–9 g elevates resting GH levels. IV arginine produces robust GH spikes (clinical stimulation test). Critical caveat: pre-exercise arginine tends to blunt rather than enhance exercise-induced GH — take it pre-bed/at-rest, not pre-workout.",
      "Blood pressure reduction (Moderate). Meta-analyses of oral arginine supplementation (3–6 g/day) document modest blood pressure reductions of approximately 2–5 mmHg systolic and 2–3 mmHg diastolic — most pronounced in hypertensive populations.",
      "Erectile dysfunction (Modest — L-citrulline now preferred). Older RCTs of 5 g/day L-arginine in mild ED documented modest improvements. The Cormio 2011 L-citrulline trial at 1.5 g/day produced comparable or better results — citrulline's pharmacokinetic advantage means it works at much lower doses. Pre-workout-style ED protocols using arginine alone have largely been replaced by citrulline.",
      "Surgical and ICU immunonutrition (Strong in specific clinical contexts). Arginine-containing immunonutrition formulas (Impact, Oxepa) are standard in upper-GI and head-and-neck surgical recovery — reducing infectious complications and length of stay. The clinical evidence is strong but this is for specific high-risk surgical populations, not general supplementation.",
      "Wound healing (Moderate in surgical and pressure-ulcer contexts). Clinical trials in diabetic foot ulcers, pressure ulcers, and post-surgical wound healing document improved healing with arginine supplementation (typically 8–12 g/day in combination with vitamin C, zinc, and glutamine). Mechanism is conditionally-essential support of rapid collagen synthesis.",
      "Male fertility (Modest, mixed). Several trials at 5–10 g/day for 1–3 months document improvements in sperm count and motility in oligospermic men. The evidence base is smaller than for clomiphene or hormonal interventions.",
      "Pre-eclampsia and pregnancy hypertension (Moderate). Several trials document blood pressure improvements in women with pre-existing hypertension during pregnancy and modest reductions in pre-eclampsia incidence with arginine supplementation — typically under obstetric supervision.",
      "Post-MI cardiovascular outcomes (Negative — VINTAGE-MI). The VINTAGE-MI trial (Schulman 2006) terminated early due to higher mortality in the arginine arm (8.6% vs 0% placebo) in patients within 30 days of myocardial infarction. This is a foundational safety contraindication — do not initiate L-arginine supplementation post-recent MI.",
      "Exercise performance (Weak — L-citrulline preferred). Acute pre-workout L-arginine has been studied extensively for resistance exercise performance, blood flow, and pump effects — results have been largely null or weakly positive at typical doses (1–6 g). L-citrulline at 6–8 g produces measurable improvements where arginine doesn't, due to the bioavailability difference.",
    ],
  },
  {
    id: "dosing",
    title: "How is L-arginine dosed?",
    intro:
      "L-arginine dosing depends on the goal and is constrained by the absorption ceiling and GI tolerance. For GH support at rest, 3–9 g pre-bed on empty stomach is the studied range. For cardiovascular/blood pressure support, 3–6 g daily in divided doses. For wound healing or surgical contexts, higher clinical doses under supervision. For NO-mediated effects (ED, exercise pump), L-citrulline is now preferred at much lower doses.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">GH support at rest.</span> 3–9 g pre-bed on empty stomach. The somatostatin-inhibition mechanism works best when baseline somatostatin tone is high (rest/sleep). Do not take pre-exercise — it blunts the natural exercise GH spike.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular / blood pressure.</span> 3–6 g daily in 2–3 divided doses. Effect on systolic BP is approximately 2–5 mmHg in hypertensive populations.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Erectile dysfunction.</span> 5 g/day historically — but{" "}<Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline at 1.5–3 g</Link>{" "}now produces equivalent or better results at lower doses. Most modern ED-via-NO protocols use citrulline.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Male fertility.</span> 5–10 g/day for 1–3 months for sperm parameter support. Most useful as adjunct in oligospermia workups.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Wound healing / surgical immunonutrition.</span> 6–20 g/day, typically in combination with vitamin C, zinc, and glutamine, under clinical supervision. Pre- and post-surgical immunonutrition formulas (Impact, Oxepa) deliver this.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exercise / pump.</span> Not recommended — use{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#0891b2] hover:underline">L-citrulline malate at 6–8 g</Link>{" "}instead. Pre-workout arginine at typical 1–3 g doses produces only modest plasma arginine elevations due to first-pass metabolism.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: GH-elevation effect is acute (1–3 hours post-dose). Blood pressure effect builds over 2–4 weeks. Wound healing and fertility effects require 4–12 weeks. Split high doses across 2–3 servings to reduce GI distress — single large doses approach the absorption ceiling and cause more diarrhea.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Form note.</span> L-arginine HCl is the most common form. Arginine alpha-ketoglutarate (AAKG) and arginine ethyl ester (AEE) are pre-workout marketing variants that don&apos;t reliably improve plasma arginine outcomes vs basic L-arginine HCl. The bioavailability ceiling is set by intestinal/hepatic arginase, not by salt form — no form fixes that.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take L-arginine",
    intro:
      "L-arginine is taken orally as powder or capsules. The practical considerations are empty-stomach timing for GH support, dose-splitting to reduce GI side effects, and the herpes-outbreak caveat for susceptible users. For NO-targeting applications (pump, ED), the more efficient choice is L-citrulline.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For GH support: 1× daily pre-bed. For cardiovascular: 2–3× daily in divided doses to reduce GI distress and maintain steadier plasma levels.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For GH effect: pre-bed on empty stomach (somatostatin tone is high at rest, so arginine&apos;s somatostatin-inhibition has biggest effect). For BP: spread across day. Do NOT take pre-workout for performance — use{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#0891b2] hover:underline">L-citrulline malate</Link>{" "}instead.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For GH support: empty stomach (food blunts the GH response). For BP/cardiovascular: with or without food per tolerance. Splitting doses reduces GI distress.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">L-arginine HCl is the standard form and the basis of clinical trial dosing. AAKG, AEE, and similar marketing variants don&apos;t fix the underlying bioavailability ceiling — no salt form bypasses intestinal arginase.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pharmaceutical-grade L-arginine HCl from cGMP-certified facility. Third-party tested for purity (heavy metals). Reputable brands: Now Foods, Thorne, Pure Encapsulations, Bulk Supplements.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling required — chronic daily use is the trial-validated norm. Store in cool dry conditions; powder is hygroscopic and will clump in humid environments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does L-arginine stack with?",
    intro:
      "L-arginine pairs naturally with growth hormone-support tools (other GH secretagogues, GHRH-class peptides) and surgical immunonutrition co-supplements. For NO-targeting stacks, L-citrulline is the better foundation. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-arginine pairs naturally with the GH-secretagogue peptide cluster via the &quot;double-stimulus&quot; mechanism — arginine inhibits somatostatin (the GH brake) while GHRH-class peptides activate the GHRH receptor (the GH accelerator). The combination is the classical approach used in clinical GH stimulation testing.{" "}
            <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
            (GHRH 1-29) and{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
            (long-acting GHRH analog) are commonly stacked with pre-bed arginine for endogenous GH support protocols.{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
            (GHRP/ghrelin-mimetic) is often added — the GHRP + GHRH + arginine triple stack produces the most robust GH response of these combinations. Note: this is a goal-specific stack for users targeting GH/IGF-1 support, not general health.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}
              — for NO/vascular targeting, citrulline is the more efficient tool due to first-pass arginase escape. Most contemporary NO-research protocols use citrulline alone rather than arginine. If using both, citrulline does the NO-elevation work; arginine adds the GH-secretagogue effect.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              L-ornithine — partner amino acid in the urea cycle; ornithine + arginine pre-bed is a traditional GH-support combination with modest evidence for synergistic GH release.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glutamine" className="text-[#0891b2] hover:underline">Glutamine</Link>{" "}
              — surgical immunonutrition partner. Standard clinical immunonutrition formulas (Impact, Oxepa) combine arginine, glutamine, omega-3s, and antioxidant micronutrients.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-c" className="text-[#0891b2] hover:underline">Vitamin C</Link>{" "}
              and{" "}
              <Link href="/supplements/zinc" className="text-[#0891b2] hover:underline">zinc</Link>{" "}
              — wound healing co-factors. Arginine drives collagen substrate availability; vitamin C is the collagen-hydroxylation cofactor; zinc supports tissue repair more broadly.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Pycnogenol (pine bark extract) — Stanislavov 2008 trial documented additive ED improvements with Pycnogenol + L-arginine combination.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Lysine — competes with arginine for transport in herpes-susceptible users. If you have HSV history and want arginine for other reasons, balancing with lysine supplementation is a partial mitigation.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Take pre-bed on empty stomach for GH support.</span> Somatostatin tone is high at rest, making this the window where arginine&apos;s mechanism produces the largest GH effect.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid pre-workout dosing for performance.</span> Arginine blunts rather than enhances the natural exercise GH spike. For pre-workout pump/NO, use{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#0891b2] hover:underline">L-citrulline malate</Link>.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Split divided doses.</span> Single doses above 5–6 g often cause GI distress due to absorption ceiling overflow. 2–3 × 2–3 g across the day is better tolerated than 1 × 6–9 g.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate dietary protein.</span> 0.8–1.2 g/kg dietary protein provides ~5–6 g endogenous arginine from food. Supplementation is additive to this baseline, not corrective for deficient diet.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-op washout.</span> Stop arginine 1–2 weeks before scheduled surgery — modest antihypertensive effect can complicate intraoperative management.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Post-MI hold.</span> Do not start arginine supplementation in the 30 days post-myocardial infarction without cardiology supervision (VINTAGE-MI adverse signal).</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "L-arginine is generally well-tolerated at typical doses. The main practical considerations are GI distress at higher doses (split dosing helps), modest blood pressure reduction (additive with antihypertensives), the herpes-outbreak caveat for HSV-susceptible users, and the post-MI contraindication from VINTAGE-MI.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">GI distress — nausea, diarrhea, bloating at higher doses (5+ g single dose). Splitting doses resolves most cases.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild blood pressure reduction — generally favorable but relevant for users on antihypertensives.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses in healthy adults (outside the post-MI population).</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Herpes simplex outbreak risk.</span> HSV viral replication requires arginine; lysine competes with arginine for cellular transport. Arginine supplementation may precipitate or worsen outbreaks in users with HSV-1/HSV-2 history. Lysine co-supplementation is a partial mitigation if arginine is needed for other reasons.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Post-MI mortality signal (VINTAGE-MI).</span> Do not initiate arginine supplementation within 30 days of myocardial infarction without cardiology supervision.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Electrolyte shifts at very high doses.</span> Doses above 20 g/day in clinical contexts have been associated with mild electrolyte imbalances.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Rare allergic reactions — uncommon but documented.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Rare reports of pancreatitis at very high doses (case reports, not RCT-level evidence).</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antihypertensive medications.</span> Additive BP-lowering effect. Monitor during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">PDE5 inhibitors (sildenafil, tadalafil).</span> Additive vasodilation. Generally well-tolerated but coordinate with prescriber for users on combination protocols.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants and antiplatelets.</span> Modest theoretical bleeding risk via NO-mediated platelet inhibition. Generally tolerated; monitor for unusual bruising.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Nitrate medications (nitroglycerin, isosorbide). Additive vasodilation — coordinate with cardiologist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insulin and oral hypoglycemics — modest improvement in insulin sensitivity may require diabetes medication adjustment in long-term users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — generally safe under obstetric supervision; arginine has been studied in pregnancy hypertension and pre-eclampsia.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about L-arginine",
    intro:
      "L-arginine has been studied for decades but several questions remain — particularly around its bioavailability ceiling, why some trials succeed and others fail, and where it sits in the modern NO-research landscape now that L-citrulline has emerged as the more efficient tool.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Bioavailability ceiling and individual variability.</span> First-pass intestinal and hepatic arginase activity varies substantially between individuals. Why some users respond well to oral arginine while others see minimal plasma elevation isn&apos;t fully characterized — could be enzyme polymorphisms, gut microbiome differences, or both. Plasma arginine measurement is the practical individual-response check but isn&apos;t commonly available retail.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">VINTAGE-MI mechanism.</span> The reason arginine supplementation increased post-MI mortality isn&apos;t fully understood. Hypotheses include adverse NO signaling in the infarct zone, oxidative stress amplification, or interactions with concurrent CV medications. The trial was terminated early so the mechanism question wasn&apos;t fully investigated — but the safety signal is robust.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Exercise GH blunting mechanism.</span> Why pre-exercise arginine reduces rather than enhances the natural exercise GH spike is mechanistically interesting but not fully resolved. Possibly involves negative feedback from the rest-induced GH elevation. Practical implication is clear (don&apos;t take pre-workout for GH), but the physiology is incomplete.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term safety in healthy adults.</span> Most arginine RCTs are weeks-to-months in duration. Very long-term (years) safety data in healthy supplement users at 3–9 g/day is more limited than for foundational vitamins.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Aging and arginine status.</span> Endothelial NOS function declines with age; whether older adults are functionally arginine-deficient (and therefore better responders) isn&apos;t precisely characterized. Some trials suggest older adults respond better to arginine BP effects than younger adults.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cancer biology interaction.</span> Some tumors are arginine auxotrophs (require external arginine) — and arginine-deprivation therapy is an active oncology research area. Whether supplemental arginine is contraindicated in active cancer patients is context-dependent; coordinate with oncology.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy L-arginine",
    intro:
      "L-arginine is widely available as pharmaceutical-grade powder or capsules. Quality is more uniform than in botanical supplements — the active ingredient is a defined amino acid. Cost varies several-fold between brands with negligible quality difference. Powder is more cost-efficient at therapeutic doses than capsules.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">L-arginine HCl pharmaceutical grade</span> — the form used in most clinical trials. Avoid marketing-driven AAKG, AEE, and similar — they don&apos;t fix the absorption ceiling.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity</span> — heavy metals, microbial contamination. USP, NSF, or ConsumerLab certifications add confidence.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder for therapeutic doses</span> — 3–9 g/day is much cheaper and more flexible from powder than from capsules. Pre-bed mixing with water is the standard delivery.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Now Foods, Thorne, Pure Encapsulations, Bulk Supplements, NutraBio. Brand premium is mostly QC and testing transparency, not active ingredient differences.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reasonable serving size disclosure</span> — read the label for grams of L-arginine per scoop. Some products dilute with fillers or use small scoops.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For NO/pump/ED goals: consider switching to{" "}<Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}instead</span> — much better pharmacokinetics for the NO pathway.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;NO booster&quot; proprietary blends</span> — these usually combine small doses of arginine, AAKG, beet powder, and stim ingredients without delivering trial-validated doses of any single component.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=l-arginine+powder+pharmaceutical+grade&tag=profpeptide-20" label="L-Arginine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "L-Arginine FAQ",
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
          Kanaley JA. Growth hormone, arginine and exercise. Curr Opin Clin Nutr Metab Care. 2008;11(1):50-54.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18090659/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18090659/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Schwedhelm E, Maas R, Freese R, et al. Pharmacokinetic and pharmacodynamic properties of oral L-citrulline and L-arginine: impact on nitric oxide metabolism. Br J Clin Pharmacol. 2008;65(1):51-59.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17919250/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17919250/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bode-Böger SM, Scalera F, Ignarro LJ. The L-arginine paradox: importance of the L-arginine/asymmetrical dimethylarginine ratio. Pharmacol Ther. 2007;114(3):295-306.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17482266/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17482266/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Schulman SP, Becker LC, Kass DA, et al. L-arginine therapy in acute myocardial infarction: the Vascular Interaction with Age in Myocardial Infarction (VINTAGE-MI) randomized clinical trial. JAMA. 2006;295(1):58-64.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16403930/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16403930/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cormio L, De Siati M, Lorusso F, et al. Oral L-citrulline supplementation improves erection hardness in men with mild erectile dysfunction. Urology. 2011;77(1):119-122.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21195829/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21195829/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Moinard C, Nicolis I, Neveux N, Darquy S, Bénazeth S, Cynober L. Dose-ranging effects of citrulline administration on plasma amino acids and hormonal patterns in healthy subjects: the Citrudose pharmacokinetic study. Br J Nutr. 2008;99(4):855-862.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17953788/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17953788/
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
      "name": "Should I take L-arginine or L-citrulline for nitric oxide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For raising plasma arginine and nitric oxide, take L-citrulline — not L-arginine. Oral L-arginine undergoes extensive first-pass metabolism in the intestine (by arginase) and liver before reaching systemic circulation. L-citrulline is absorbed efficiently, escapes hepatic arginase, and is converted to arginine in the kidneys — producing higher and longer-lasting plasma arginine levels than equimolar L-arginine. Contemporary nitric oxide research has largely shifted to L-citrulline for this reason."
      }
    },
    {
      "@type": "Question",
      "name": "Does L-arginine actually raise growth hormone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but context-dependent. Intravenous arginine reliably produces a large GH spike. Oral arginine at 5–9 g at rest or before sleep increases resting GH levels (Kanaley 2008 review). Critical caveat: arginine taken around exercise tends to blunt the exercise-induced GH spike rather than enhance it. Take pre-bed on empty stomach for GH support, not pre-workout."
      }
    },
    {
      "@type": "Question",
      "name": "How much L-arginine should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For GH support at rest: 3–9 g pre-bed on empty stomach. For cardiovascular/blood pressure support: 3–6 g daily in divided doses. For male fertility support: 5–10 g daily for 1–3 months. For wound healing under medical supervision: 6–20 g daily. Split divided doses (3 × 2 g rather than 1 × 6 g) reduces GI side effects."
      }
    },
    {
      "@type": "Question",
      "name": "Is L-arginine safe? Any major contraindications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally safe at typical supplemental doses. Two important contraindications: (1) Recent myocardial infarction — VINTAGE-MI trial found increased post-MI mortality with L-arginine supplementation; do not take L-arginine after recent heart attack without cardiology supervision. (2) Active herpes simplex outbreaks — arginine is required for HSV viral replication. Other considerations: modest blood pressure reduction (additive with antihypertensives), GI distress at high doses."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L-Arginine: NO Precursor, GH Secretagogue, Why Citrulline Wins",
  "description": "L-arginine dosing (3–9 g), the first-pass metabolism ceiling that limits oral bioavailability, why L-citrulline now leads NO research, and the GH-at-rest mechanism.",
  "url": "https://profpeptide.com/supplements/l-arginine",
  "datePublished": "2026-04-12T00:00:00Z",
  "dateModified": "2026-05-27T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "L-Arginine" }
  ]
};

export default function LArgininePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">L-Arginine</h1>
        <span className="tag">Growth Hormone Support</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 27, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Arginine, L-arginine HCl, arginine alpha-ketoglutarate (AAKG), arginine ethyl ester (AEE)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Semi-essential amino acid / nitric oxide synthase substrate / growth hormone secretagogue (somatostatin-inhibition mechanism) / urea cycle intermediate / conditionally essential during surgical and metabolic stress
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate (GH stimulation at rest — Kanaley 2008; blood pressure reduction; surgical immunonutrition). Modest (erectile dysfunction — L-citrulline now preferred per Cormio 2011; male fertility). Negative (post-MI cardiovascular outcomes — VINTAGE-MI 2006). Constrained throughout by first-pass intestinal/hepatic arginase that limits oral bioavailability — Schwedhelm 2008 documents L-citrulline raises plasma arginine more effectively than equimolar L-arginine. Contemporary NO research has largely shifted to L-citrulline.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is L-arginine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-arginine is a semi-essential amino acid found in red meat, poultry, fish, dairy, nuts, and seeds — sufficient in healthy adults from dietary protein but conditionally essential during surgery, burns, sepsis, and major injury. It serves four biological roles relevant to supplementation: it is the direct substrate for nitric oxide synthase (the enzyme that produces NO, the signaling molecule driving vasodilation); it stimulates growth hormone release from the pituitary by inhibiting somatostatin (the GH brake); it is a urea cycle intermediate supporting nitrogen clearance; and it supplies rapidly dividing immune cells and healing tissue with substrate for proliferation and collagen synthesis. The central practical caveat: oral arginine encounters intestinal and hepatic arginase before reaching systemic circulation, so a substantial proportion of an oral dose is degraded on first pass.{" "}
            <Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}
            — which escapes first-pass arginase and is converted to arginine in the kidneys — raises plasma arginine more effectively than oral arginine itself (Schwedhelm 2008). Contemporary NO research has largely shifted to L-citrulline for this reason. L-arginine remains evidence-supported for GH stimulation at rest (Kanaley 2008), modest blood pressure reduction, surgical immunonutrition, and wound healing — but not for exercise performance or post-MI cardiovascular outcomes (VINTAGE-MI 2006 documented a mortality signal).
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Growth hormone elevation at rest (3–9 g pre-bed; Kanaley 2008 review)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest blood pressure reduction (~2–5 mmHg systolic; meta-analyses)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Surgical immunonutrition support (Impact, Oxepa-type formulas)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Wound healing in diabetic foot ulcer and pressure ulcer populations</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Male fertility support (sperm parameter improvements in oligospermia)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest erectile dysfunction support (L-citrulline at lower doses now preferred)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Adjunct in pre-eclampsia / pregnancy hypertension under obstetric supervision</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Clinical GH stimulation testing (IV arginine for adult GH deficiency diagnosis)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 3–9 g pre-bed on empty stomach for GH support; 3–6 g daily in divided doses for cardiovascular/BP support; 5–10 g daily for fertility; 6–20 g daily under clinical supervision for wound healing. Split single doses above 5 g into 2–3 servings to reduce GI distress. L-arginine HCl is the standard form. Do NOT take pre-workout — it blunts exercise GH and underperforms L-citrulline for NO/pump.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Post-MI mortality signal (VINTAGE-MI — do not initiate within 30 days of heart attack without cardiology supervision); herpes outbreak risk in HSV-susceptible users (lysine competes with arginine); GI distress at higher doses (split dosing helps); additive blood-pressure reduction with antihypertensives; first-pass arginase metabolism ceiling — for NO/vascular goals,{" "}<Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}is the more efficient tool.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=l-arginine+powder+pharmaceutical+grade&tag=profpeptide-20" label="L-Arginine" />
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
        {["Nitric Oxide", "Growth Hormone", "First-Pass Metabolism", "Cardiovascular", "Wound Healing", "VINTAGE-MI"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/l-citrulline" className="text-sm font-medium text-[#0891b2] hover:underline">L-Citrulline</Link>
          <Link href="/supplements/l-citrulline-malate" className="text-sm font-medium text-[#0891b2] hover:underline">L-Citrulline Malate</Link>
          <Link href="/supplements/glutamine" className="text-sm font-medium text-[#0891b2] hover:underline">Glutamine</Link>
          <Link href="/supplements/vitamin-c" className="text-sm font-medium text-[#0891b2] hover:underline">Vitamin C</Link>
          <Link href="/supplements/zinc" className="text-sm font-medium text-[#0891b2] hover:underline">Zinc</Link>
          <Link href="/supplements/ashwagandha" className="text-sm font-medium text-[#0891b2] hover:underline">Ashwagandha</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="L-Arginine" pagePath="/supplements/l-arginine" />
    </div>
    </>
  );
}
