import Link from "next/link";

export const metadata = {
  title: "Biotin Supplement Profile | Prof. Peptide",
  description:
    "Biotin (vitamin B7) supplement profile — hair and nail support, keratin infrastructure, deficiency correction, lab test interference, dosing, and references.",
};

export default function BiotinPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Biotin</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Vitamin B7, vitamin H, coenzyme R</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The B vitamin behind stronger hair, nails, and healthy skin</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Biotin (vitamin B7) is a water-soluble B vitamin that serves as an essential cofactor for carboxylase enzymes involved in fatty acid synthesis, amino acid metabolism, and gluconeogenesis. It is well established that severe biotin deficiency causes hair loss, brittle nails, and skin rash — the three conditions for which biotin supplementation is most commonly marketed. However, in individuals without deficiency, the evidence for biotin supplementation&apos;s cosmetic benefits is considerably weaker than the marketing suggests. True biotin deficiency is relatively rare in healthy adults eating a balanced diet, but certain populations are at elevated risk: pregnant women (increased biotin catabolism), people who regularly consume raw egg whites (which contain avidin — a biotin-binding protein), those taking certain anticonvulsant medications, and people with biotinidase deficiency. For these populations, biotin supplementation can produce meaningful improvements in hair, nail, and skin health. For replete individuals, benefits are modest at best.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">✨ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Corrects biotin-deficiency-related hair loss and thinning",
              "Strengthens brittle nails — best evidence in nail brittleness",
              "Supports healthy skin barrier function",
              "Essential for keratin infrastructure (the protein of hair and nails)",
              "Supports fatty acid synthesis for skin lipid production",
              "Required for amino acid metabolism supporting tissue repair",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Carboxylase Cofactor — Biotin activates five carboxylase enzymes: acetyl-CoA carboxylase (fatty acid synthesis), pyruvate carboxylase (gluconeogenesis), propionyl-CoA carboxylase (amino acid metabolism), methylcrotonyl-CoA carboxylase (leucine metabolism), and 3-methylglutaconyl-CoA hydratase. These enzymes are fundamental to lipid, amino acid, and glucose metabolism.",
              "Keratin Support — Biotin supports the production of keratin — the structural protein that makes up hair, nails, and the outer skin layer. This is the mechanistic basis for biotin's role in hair and nail health, though the pathway is indirect rather than a direct keratin precursor.",
              "Fatty Acid Synthesis — Through acetyl-CoA carboxylase activation, biotin supports the synthesis of long-chain fatty acids that are incorporated into skin cell membranes, maintaining the skin's barrier function and moisture retention.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nail brittleness has the strongest evidence — a Swiss study found biotin (2.5mg daily) significantly improved nail plate thickness in women with brittle nails, with 91% reporting improvement. A follow-up study confirmed increased nail firmness and reduced splitting. Hair loss evidence is primarily in deficiency states or specific conditions — a systematic review found most positive hair loss studies involved individuals with underlying biotin deficiency or related conditions. For healthy individuals with adequate biotin intake, evidence for cosmetic benefit is limited. The widespread marketing of biotin for hair growth in non-deficient individuals is not well supported by current RCT evidence.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical supplement dose: 2.5–10mg (2500–10,000mcg) daily",
              "Dietary adequacy: Most adults get 30–70mcg from diet — supplement doses are vastly higher than dietary intake",
              "Duration: Nail improvements typically seen after 3–6 months of consistent use",
              "Note: High biotin supplementation interferes with thyroid function lab tests and troponin tests — inform your doctor before blood tests if supplementing",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Extremely safe — water-soluble and excess excreted. No established upper tolerable limit due to low toxicity. The main safety concern is lab test interference — high biotin doses (above 5mg) can cause falsely elevated or falsely low results on immunoassay-based laboratory tests including thyroid hormones, vitamin D, and cardiac troponin. Always disclose biotin supplementation to healthcare providers before blood testing. Rare reports of acne with very high dose biotin supplementation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/collagen-peptides" className="text-[#0D7377] hover:underline">Collagen Peptides</Link> | <Link href="/supplements/hyaluronic-acid" className="text-[#0D7377] hover:underline">Hyaluronic Acid</Link> | <Link href="/supplements/vitamin-c" className="text-[#0D7377] hover:underline">Vitamin C</Link> | <Link href="/supplements/zinc" className="text-[#0D7377] hover:underline">Zinc</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Colombo VE, et al. Treatment of brittle fingernails and onychoschizia with biotin: scanning electron microscopy. J Am Acad Dermatol. 1990.",
              "Patel DP, et al. A Review of the Use of Biotin for Hair Loss. Skin Appendage Disord. 2017.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Nails", "Hair", "Keratin", "B Vitamin"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
