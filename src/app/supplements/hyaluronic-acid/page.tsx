import Link from "next/link";

export const metadata = {
  title: "Hyaluronic Acid — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Hyaluronic acid supplement profile covering skin hydration, 6L water binding per gram, wrinkle reduction, joint lubrication, and dosage.",
};

export default function HyaluronicAcidPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Hyaluronic Acid</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: HA, sodium hyaluronate, hyaluronan</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The moisture magnet your skin is literally made of</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Hyaluronic acid (HA) is a naturally occurring glycosaminoglycan — a long-chain sugar molecule — found throughout the body, with the highest concentrations in the skin, joints, and eyes. In the skin, HA is distributed throughout the dermis and epidermis where it binds and retains water with extraordinary capacity — a single gram of hyaluronic acid can hold up to 6 liters of water. This water-binding property is the foundation of skin hydration, plumpness, and the cushioning of the dermal matrix. Like collagen, HA declines with age — levels in the skin drop dramatically after age 40, contributing to dryness, loss of volume, and the sunken appearance of aging skin. Hyaluronic acid fillers are one of the most popular cosmetic procedures in the world — injecting HA directly into the dermis to restore volume. But oral and topical HA supplementation offers a non-invasive alternative with growing clinical evidence — oral HA has been shown to increase skin moisture content, reduce wrinkle depth, and improve skin elasticity in multiple RCTs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Exceptional skin hydration — binds up to 6 liters of water per gram",
              "Reduces wrinkle depth and skin roughness",
              "Improves skin elasticity and suppleness",
              "Supports joint lubrication and comfort",
              "Accelerates wound healing",
              "Reduces eye dryness",
              "Synergistic with collagen for comprehensive skin support",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Water Retention — HA's defining property is its extraordinary capacity to bind and retain water molecules. In the dermis, HA forms a gel-like matrix that holds water, maintaining skin volume, turgor, and the plump appearance associated with youthful skin.",
              "CD44 Receptor Signaling — HA binds to CD44 receptors on keratinocytes and fibroblasts, stimulating cell proliferation, migration, and extracellular matrix production — contributing to skin repair and regeneration beyond simple hydration.",
              "Joint Lubrication — HA is a primary component of synovial fluid — the lubricant in joints. Oral HA supplementation increases synovial fluid HA concentration, reducing friction and joint discomfort.",
              "Wound Healing — HA creates a moist wound environment that facilitates cell migration, reduces inflammation, and accelerates re-epithelialization — making it valuable in both topical wound care and oral supplementation for skin repair.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            A double-blind RCT by Kawada et al. found oral HA (120mg daily for 12 weeks) significantly improved skin moisture content and reduced wrinkle scores vs. placebo in 60 volunteers. A 2017 RCT found low-molecular-weight oral HA (120mg daily for 12 weeks) significantly improved skin luster, suppleness, and reduced wrinkle depth. Joint research is robust — multiple RCTs confirm oral HA reduces knee joint pain and improves function in osteoarthritis patients. A 2021 meta-analysis of oral HA for skin confirmed significant improvements in skin hydration and elasticity across multiple trials.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 120–240mg daily for skin benefits",
              "Molecular weight matters: Low molecular weight HA (under 50kDa) may be better absorbed orally; high molecular weight HA is better for joint applications",
              "Timing: Can be taken any time with or without food",
              "Topical HA: Effective for surface hydration; oral HA works systemically for deeper dermal effects — both can be used together",
              "Duration: 8–12 weeks minimum to assess skin improvements",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Excellent safety profile — HA is a naturally occurring body compound. Rare reports of mild GI discomfort. People with cancer or a history of cancer should consult a healthcare provider — HA&apos;s role in cell proliferation and the CD44 receptor may be relevant in oncological contexts. Generally considered very safe for healthy adults.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/collagen-peptides" className="text-[#0891b2] hover:underline">Collagen Peptides</Link> | <Link href="/supplements/vitamin-c" className="text-[#0891b2] hover:underline">Vitamin C</Link> | <Link href="/supplements/biotin" className="text-[#0891b2] hover:underline">Biotin</Link> | <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu peptide</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Kawada C, et al. Ingested hyaluronan moisturizes dry skin. Nutr J. 2014.",
              "Oe M, et al. Oral hyaluronan relieves wrinkles: a double-blinded, placebo-controlled study over a 12-week period. Clin Cosmet Investig Dermatol. 2017.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Hydration", "Wrinkles", "Joints", "6L per Gram"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=hyaluronic+acid+supplement&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
