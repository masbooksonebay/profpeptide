import Link from "next/link";

export const metadata = {
  title: "Berberine Supplement Profile | Prof. Peptide",
  description:
    "Berberine supplement profile — AMPK activation, blood sugar regulation, metformin comparison, lipid metabolism, dosing, and references.",
};

export default function BerberinePage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/supplements"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        &larr; Back to Supplement Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Berberine 🔥</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Berberine HCl, berberine hydrochloride</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The plant-based metabolic powerhouse often compared to metformin</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Berberine is a bioactive isoquinoline alkaloid extracted from several plants including Berberis vulgaris (barberry), Coptis chinensis (goldenseal), and Phellodendron amurense. It has been used in traditional Chinese medicine for thousands of years — originally for gastrointestinal infections — and has emerged as one of the most extensively researched natural compounds for metabolic health. It is often called &quot;nature&apos;s metformin&quot; because its mechanisms and clinical effects closely parallel those of the leading diabetes medication, and a landmark clinical study found berberine&apos;s hypoglycemic effect to be similar to metformin in newly diagnosed type 2 diabetic patients. Berberine activates AMPK — the master metabolic switch — producing downstream effects on blood sugar regulation, lipid metabolism, insulin sensitivity, and fat storage. It is one of the few supplements with a substantial body of randomized controlled trial evidence supporting its efficacy.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">✨ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "🔥 Blood sugar regulation and HbA1c reduction",
              "💊 Comparable efficacy to metformin in clinical studies",
              "📉 LDL cholesterol and triglyceride reduction",
              "⚖️ Weight and waist circumference reduction",
              "🦠 Gut microbiome modulation",
              "❤️ Cardiovascular risk factor improvement",
              "🛡️ Anti-inflammatory and antioxidant effects",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "AMPK Activation — Berberine's primary mechanism is activation of AMP-activated protein kinase (AMPK) — the master regulator of cellular energy metabolism. AMPK activation mimics the metabolic effects of exercise and caloric restriction, improving glucose uptake in peripheral tissues, reducing fat synthesis, and enhancing mitochondrial function.",
              "Insulin Sensitization — Berberine enhances insulin sensitivity by improving GLUT4 translocation to the cell surface, allowing more efficient glucose uptake into muscle and fat cells independent of insulin signaling.",
              "Gluconeogenesis Inhibition — Berberine reduces hepatic glucose production by inhibiting PEPCK and G6Pase — the key enzymes responsible for glucose synthesis in the liver. This is the same mechanism by which metformin reduces fasting blood glucose.",
              "Lipid Metabolism — Berberine upregulates LDL receptor expression in the liver, increasing clearance of LDL cholesterol from the bloodstream. It also inhibits triglyceride synthesis and promotes fat oxidation.",
              "Gut Microbiome Modulation — Berberine modulates gut microbiota composition, reducing harmful bacteria and increasing beneficial species. This contributes to improved metabolic parameters and reduced systemic inflammation.",
              "GLP-1 Induction — Berberine induces secretion of glucagon-like peptide-1 (GLP-1) from intestinal L cells — the same pathway targeted by semaglutide and tirzepatide — contributing to improved insulin secretion and appetite regulation.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A landmark pilot RCT compared berberine to metformin (0.5g three times daily) in 36 newly diagnosed type 2 diabetic patients over 3 months. Berberine produced comparable HbA1c reduction (from 9.5% to 7.5%) and similar improvements in fasting blood glucose and postprandial glucose. A meta-analysis of 37 RCTs involving 3,048 patients found berberine significantly reduced fasting plasma glucose by 0.82 mmol/L, HbA1c by 0.63%, and 2-hour postprandial blood glucose by 1.16 mmol/L. A 2025 systematic review confirmed berberine&apos;s comprehensive benefits across metabolic syndrome components including blood pressure, lipids, and insulin resistance. In weight loss research, berberine reduced body weight and waist circumference across multiple human trials, with mechanisms including adipocyte differentiation inhibition and gut microbiome modulation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "💊 Typical dose: 500mg taken 2–3 times daily with meals",
              "⏱️ Timing: With or immediately before meals to blunt post-meal blood sugar spikes",
              "📅 Duration: Benefits accumulate over 4–12 weeks of consistent use",
              "⚠️ Note: Berberine has a short half-life — divided dosing throughout the day maintains consistent blood levels",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Generally well tolerated. Most common side effects are gastrointestinal — nausea, constipation, diarrhea — occurring in approximately 35% of users, typically mild and transient. May interact with medications metabolized by CYP enzymes. Important: May potentiate blood glucose lowering effects of diabetes medications — consult a healthcare provider before combining with metformin or other diabetes drugs. Not recommended during pregnancy. May affect bilirubin metabolism in newborns.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            <Link href="/supplements/alpha-lipoic-acid" className="text-[#0D7377] hover:underline">Alpha Lipoic Acid</Link> | <Link href="/supplements/chromium" className="text-[#0D7377] hover:underline">Chromium</Link> | <Link href="/supplements/magnesium" className="text-[#0D7377] hover:underline">Magnesium</Link> — Berberine pairs well with these for comprehensive metabolic support.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "PMC. Efficacy of Berberine in Patients with Type 2 Diabetes. https://pmc.ncbi.nlm.nih.gov/articles/PMC2410097/",
              "PMC. Berberine activates AMP-activated protein kinase with beneficial metabolic effects. https://pubmed.ncbi.nlm.nih.gov/16873688/",
              "PMC. Efficacy and safety of berberine on components of metabolic syndrome — meta-analysis. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12307485/",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Metabolic", "Blood Sugar", "AMPK", "Evidence-Based"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
