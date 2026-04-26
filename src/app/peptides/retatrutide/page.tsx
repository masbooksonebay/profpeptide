import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/retatrutide" },
  title: "Retatrutide — Research Profile, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Retatrutide (LY3437943) research profile: mechanism, Phase 3 TRIUMPH trial results, dosing protocol, side effects, FAQ, and current regulatory status.",
};

const faqs = [
  {
    q: "Is retatrutide FDA-approved?",
    a: "No. Retatrutide is investigational and not approved by the FDA, EMA, or any major regulatory body. It is in Phase 3 clinical trials as of April 2026, with potential approval in 2027 or 2028.",
  },
  {
    q: "How does retatrutide compare to semaglutide and tirzepatide?",
    a: "Semaglutide activates one receptor (GLP-1). Tirzepatide activates two (GLP-1 + GIP). Retatrutide activates three (GLP-1 + GIP + glucagon). Trial weight loss has been progressively higher with each: semaglutide around 15%, tirzepatide around 22%, retatrutide around 28.7% at the highest doses. Retatrutide also has a unique side effect — dysesthesia (skin sensation changes) — that doesn't appear with the other two.",
  },
  {
    q: "How long does retatrutide take to work?",
    a: "Most users notice reduced appetite within 1–2 weeks. Modest weight loss appears by week 4. Significant weight loss accumulates over the dose-escalation phase. Average weight loss was about 17% by week 24, 24% by week 48, and 28.7% by week 68 in trials.",
  },
  {
    q: "Does retatrutide cause muscle loss?",
    a: "Like all GLP-1-class drugs, retatrutide can cause loss of lean muscle alongside fat loss, especially during rapid weight reduction. Resistance training and adequate protein intake (typically 1.2–1.6 g/kg body weight per day) significantly reduce muscle loss.",
  },
  {
    q: "What is dysesthesia and should I be concerned?",
    a: "Dysesthesia means abnormal skin sensations — tingling, burning, or pins-and-needles feeling. It was reported in about 21% of participants at the 12 mg dose in TRIUMPH-4. The effects were generally mild and rarely led to discontinuation. It's specific to retatrutide and not seen with semaglutide or tirzepatide. The mechanism is not fully understood but is thought to relate to glucagon-receptor activity.",
  },
  {
    q: "What happens if I stop retatrutide?",
    a: "Long-term data on what happens after stopping is still limited. Based on data from semaglutide and tirzepatide, partial weight regain is expected after discontinuation. The TRIUMPH-6 trial is studying maintenance strategies including dose reduction; results are expected in 2026.",
  },
  {
    q: "Can I drink alcohol on retatrutide?",
    a: "Alcohol compounds nausea and dehydration. Most users find it best to avoid alcohol for at least 48 hours after each weekly injection, when medication levels peak. Alcohol also increases hypoglycemia risk in users with type 2 diabetes.",
  },
  {
    q: "Where can I get retatrutide?",
    a: (
      <>
        Retatrutide is investigational and not available by prescription. Research-grade product is sold by peptide vendors for laboratory use only. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GLP-1 Receptor Activation [1] — Retatrutide activates the GLP-1 receptor, which slows stomach emptying, reduces appetite, and improves insulin release in response to food. This is the same pathway used by semaglutide (Ozempic, Wegovy).",
      "GIP Receptor Activation [1] — The peptide also activates the GIP receptor, which enhances insulin signaling and supports fat metabolism. Adding GIP to GLP-1 activation is what made tirzepatide (Mounjaro, Zepbound) more effective than semaglutide.",
      "Glucagon Receptor Activation [1][2] — Retatrutide adds a third receptor — glucagon — which increases the body's energy expenditure and encourages fat oxidation. This is the mechanism that distinguishes retatrutide from all other approved GLP-1-class drugs and explains the larger weight loss seen in trials.",
      "Combined Triple-Agonist Effect [2] — The three receptors work together to reduce appetite, slow digestion, improve insulin response, and burn more fat at rest. The dose-response curve in trials suggests retatrutide produces continued weight loss even at the 68-week mark, suggesting a plateau may not have been reached.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Obesity and Weight Management [1][3] — The TRIUMPH Phase 3 program is testing retatrutide across multiple obesity populations. TRIUMPH-4 (Dec 2025) reported 28.7% average weight loss at the 12 mg dose over 68 weeks in adults with obesity and knee osteoarthritis.",
      "Type 2 Diabetes [4] — TRANSCEND-T2D-1 (Mar 2026) reported 2.0% A1C reduction and 16.8% weight loss at 12 mg over 40 weeks in people with type 2 diabetes.",
      "Knee Osteoarthritis [3] — TRIUMPH-4 also reported significant reductions in knee osteoarthritis pain (44-point improvement on the WOMAC pain subscale), suggesting weight loss may translate to functional improvements in joint disease.",
      "Cardiovascular Risk [5] — TRIUMPH-3 is an ongoing cardiovascular outcomes trial in patients with established cardiovascular disease. Results are expected in 2027 or later.",
      "Fatty Liver Disease (MASH) [6] — Phase 2 data showed significant reductions in liver fat and improvements in insulin sensitivity. A dedicated MASH Phase 3 trial is underway.",
      "Sleep Apnea [5] — Phase 2 data showed a 42% reduction in the apnea-hypopnea index. A dedicated obstructive sleep apnea Phase 3 trial is in the TRIUMPH program.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Retatrutide effects build gradually over weeks and months. In trials, most participants noticed reduced appetite within the first 1–2 weeks of starting. Modest weight loss (about 2–3% of body weight) typically appeared by week 4 at the 2 mg starting dose. Significant weight loss accumulated over the dose-escalation phase as the dose was increased every 4 weeks. By 24 weeks, average weight loss was around 17%; by 48 weeks, around 24%; and by 68 weeks (TRIUMPH-4), around 28.7% at the highest dose. The weight-loss curve was still declining at the end of the longest trials, suggesting full effects may take longer than 68 weeks to plateau.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Retatrutide is administered as a once-weekly subcutaneous injection. Trials use a stepwise dose-escalation protocol, starting low and increasing every 4 weeks to allow the body to adapt and minimize gastrointestinal side effects. The slow titration is critical — Phase 2 data showed that participants who started at 4 mg instead of 2 mg had significantly higher rates of GI side effects.
        </p>
        <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard escalation schedule (Phase 3 TRIUMPH protocol):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 1–4: 2 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 5–8: 4 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 9–12: 6 mg once weekly (TRIUMPH-3+ protocol)</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 13–16: 9 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 17+: 12 mg once weekly (maintenance, max dose tested)</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Phase 2 trials tested doses from 0.5 mg to 12 mg weekly. Phase 3 (TRIUMPH-4) tested 9 mg and 12 mg as maintenance doses, with full Phase 3 results pending for the 4 mg lower-dose maintenance arm. Half-life is approximately 6 days, supporting once-weekly dosing with steady state reached in 4–5 weeks at each dose level.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          If side effects are difficult to tolerate at any step, holding at the current dose for an additional 4 weeks is standard practice and does not appear to reduce long-term outcomes. Some users in research settings split doses into 2–3 smaller injections per week to reduce side effects, though this is not the protocol used in clinical trials.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Retatrutide is not FDA-approved and is investigational. Dosing protocols outside of clinical trials are derived from trial data and user reports — there are no approved retail dosing standards.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nausea — most common, especially during dose escalation; affected up to 60% at 12 mg in Phase 2</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Diarrhea — affected 15–33% of users at higher doses</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Constipation — affected 11–25% of users</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vomiting — affected 21–26% of users at higher doses</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Decreased appetite — expected effect, but can be excessive in some users</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection site reactions — mild redness or irritation in up to 8% of users</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Dysesthesia — abnormal skin sensations including tingling, burning, or prickling. Reported in about 21% of participants at 12 mg in TRIUMPH-4. Specific to retatrutide and not seen with semaglutide or tirzepatide.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increased heart rate — average increase of 5–10 beats per minute, peaking around week 24 and then declining</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache and fatigue — typically mild, common in the 48–72 hours after injection</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild liver enzyme elevations — transient ALT increases in about 1% of users</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Pancreatitis — about 0.4% in Phase 2 trials. Symptoms: severe abdominal pain radiating to the back, persistent vomiting, fever</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Gallbladder problems — about 1.1% in trials. Symptoms: severe pain in upper right abdomen, jaundice, fever</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare. Symptoms: difficulty breathing, swelling of face/throat, hives. Seek emergency care.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Heart rhythm changes — slightly more common with retatrutide (about 6% vs 3% placebo)</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most side effects are mild to moderate and improve as the body adapts. Discontinuation due to side effects ranged from 6% to 16% in Phase 2 trials, with most discontinuations during the escalation phase. The serious adverse event rate was 4% — the same as placebo.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin), once weekly. Common injection sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.",
      "Time of day: Any time, but consistent. Many users inject in the morning or before bed depending on side-effect timing.",
      "With or without food: Either is fine.",
      "Site rotation: Use a different site each week to reduce localized irritation. Stay at least 1 inch from previous injection sites.",
      "Missed dose: If less than 5 days late, take as soon as remembered. If more than 5 days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.",
      "Alcohol: Avoid for at least 48 hours after injection — alcohol compounds nausea and dehydration.",
      "Hydration: Drink water consistently. The medication blunts thirst signals, so set a daily water target rather than waiting for thirst.",
      "Eating pattern: Small meals every 3–4 hours rather than waiting for hunger, which is suppressed. Empty-stomach nausea is the most common trigger for vomiting.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Standalone use — most common. Retatrutide's triple-agonist effect is strong enough that stacking with other GLP-1-class peptides is unnecessary and can compound side effects.",
      "Metformin — commonly used together in type 2 diabetes for additive blood-sugar control. Standard practice in clinical settings.",
      "Resistance training + adequate protein — recommended to preserve lean muscle mass during rapid weight loss. Without this, GLP-1-class drugs can cause significant muscle loss alongside fat loss.",
      "Avoid stacking with other GLP-1 agonists (semaglutide, tirzepatide). Combining incretin-based drugs significantly increases GI side effects without proportional benefit.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and sulfonylureas — risk of hypoglycemia (low blood sugar) increases when retatrutide is combined with insulin, glipizide, glyburide, or other blood-sugar-lowering drugs. Dose adjustment is typically needed.",
      "Oral medications — retatrutide slows stomach emptying, which can affect the absorption of oral medications. Particularly relevant for medications with a narrow therapeutic window (warfarin, levothyroxine, certain antibiotics).",
      "Birth control pills — slowed gastric emptying may reduce absorption. Some manufacturers recommend backup contraception during the first 4 weeks of treatment and 4 weeks after each dose increase.",
      "GLP-1 agonists (semaglutide, tirzepatide, liraglutide) — should not be combined.",
      "Alcohol — compounds nausea, dehydration, and hypoglycemia risk.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C (refrigerated). Stable for the manufacturer's stated shelf life when sealed.",
      "Reconstituted solution: Store at 2–8°C. Most research-grade preparations are stable for 28–30 days after reconstitution; check vendor's product specifications.",
      "Reconstitution: Use bacteriostatic water for injection (BAC water) at the volume specified by the dose calculator. Swirl gently — do not shake.",
      "Do not freeze. Freezing damages the peptide and renders it inactive.",
      "Protect from light — store in the original container or a light-protective container.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Retatrutide is an investigational drug and is NOT approved by the FDA, EMA, or any major regulatory body. As of April 2026, it is in Phase 3 clinical trials. Eli Lilly's Phase 3 TRIUMPH program is expected to complete additional readouts throughout 2026, with regulatory submission to the FDA targeted for late 2026 and potential approval in 2027 or 2028.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data beyond 72 weeks does not yet exist — all current trials are 48 to 68 weeks. Cardiovascular outcomes trial (TRIUMPH-3) results are not expected until 2027 or later. The dysesthesia signal observed in Phase 3 (about 21% at 12 mg) is unique to retatrutide and is being monitored closely.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Retatrutide is not currently a scheduled controlled substance in the US, but it is also not approved for human use. Research-grade product is sold in a regulatory gray area, typically labeled &ldquo;for research use only, not for human consumption.&rdquo; The World Anti-Doping Agency prohibits all GLP-1-class drugs in sport. Legal status varies by country.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Jastreboff AM, Kaplan LM, Frías JP, et al. Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial. N Engl J Med. 2023;389:514-526.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2301972"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2301972
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Coskun T, Urva S, Roell WC, et al. LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss. Cell Metab. 2022;34(9):1234-1247.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/35987205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/35987205/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Eli Lilly. Lilly&apos;s triple agonist, retatrutide, delivered weight loss of up to an average of 71.2 lbs along with substantial relief from osteoarthritis pain in first successful Phase 3 trial (TRIUMPH-4). December 11, 2025.{" "}
          <a
            href="https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-weight-loss-average"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-weight-loss-average
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Eli Lilly. TRANSCEND-T2D-1 Phase 3 Topline Results. March 19, 2026.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Eli Lilly. TRIUMPH Phase 3 Clinical Trial Program.{" "}
          <a
            href="https://www.lilly.com/discovery/clinical-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.lilly.com/discovery/clinical-development
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sanyal AJ, Kaplan LM, Frías JP, et al. Retatrutide for adults with metabolic dysfunction-associated steatotic liver disease: a Phase 2 trial. Nat Med. 2024;30:1235-1244.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/38509328/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/38509328/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function RetatrutidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Retatrutide","description":"Retatrutide (LY3437943) research profile: mechanism, Phase 3 TRIUMPH trial results, dosing protocol, side effects, FAQ, and current regulatory status.","url":"https://profpeptide.com/peptides/retatrutide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Retatrutide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Retatrutide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Investigational</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: LY3437943, Triple Hormone Receptor Agonist, GIP/GLP-1/Glucagon Triple Agonist
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Retatrutide is an investigational peptide being studied for weight loss and type 2 diabetes. Unlike most weight-loss drugs that target one or two hormone receptors, retatrutide activates three at once — GLP-1, GIP, and glucagon. In Phase 3 trials, it has produced some of the largest weight reductions ever recorded for an obesity drug.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Significant weight loss (up to 28.7% in Phase 3 trials at the highest dose)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Better blood sugar control in people with type 2 diabetes</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced appetite and slower stomach emptying</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Lower blood pressure and improved cholesterol</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduction in knee osteoarthritis pain (TRIUMPH-4 trial)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in fatty liver markers in early trials</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Clinical trial protocols start at 2 mg once weekly by subcutaneous injection, then escalate every 4 weeks (typically 2 mg → 4 mg → 6 mg → 9 mg → 12 mg per the TRIUMPH-3+ schedule) up to a maintenance dose between 8 mg and 12 mg weekly. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for the full titration schedule and additional details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Retatrutide is investigational and not FDA-approved. PP maintains a vetted list of peptide vendors with verified discount codes for research-grade peptides. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.node && s.node}
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Weight Loss", "Metabolic Health", "Triple Agonist", "Investigational"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>


      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Tirzepatide</Link>
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide</Link>
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/retatrutide-vs-tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide vs Tirzepatide &rarr;</Link>
        <Link href="/compare/retatrutide-vs-semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide vs Semaglutide &rarr;</Link>
        <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide vs Retatrutide &rarr;</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=metabolic+weight+loss+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
