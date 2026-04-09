import Link from "next/link";

export const metadata = {
  title: "Fenugreek — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Fenugreek supplement profile covering aromatase inhibition, testosterone support, blood glucose regulation, Testofen extract, and dosage.",
};

export default function FenugreekPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Fenugreek</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Trigonella foenum-graecum, methi, Testofen, fenugreek seed extract</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The ancient spice that supports testosterone and sexual vitality</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Fenugreek (Trigonella foenum-graecum) is an annual plant native to the Mediterranean, Middle East, and South Asia — where its seeds have been used for millennia as both a culinary spice and a medicinal herb for conditions ranging from digestive issues to low libido. In modern sports nutrition and men&apos;s health research, fenugreek has emerged as one of the better-evidenced natural testosterone-supporting herbs — with its primary mechanism involving inhibition of enzymes that convert testosterone to estrogen (aromatase) and to dihydrotestosterone (5-alpha reductase). The key bioactive compounds responsible for these effects are steroidal saponins — particularly furostanolic saponins — concentrated in the seed. Testofen (a patented fenugreek extract standardized to 50% fenugreek saponins) has been used in the majority of quality human trials. Beyond testosterone support, fenugreek has significant blood sugar lowering effects — its soluble fiber content slows glucose absorption, and its 4-hydroxyisoleucine amino acid stimulates insulin secretion — making it a dual-action supplement relevant for both sexual health and metabolic function.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">❤️ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Supports free and total testosterone levels","Inhibits aromatase and 5-alpha reductase","Improves sexual desire and libido in men","Significant blood glucose lowering effects","Improves insulin sensitivity","Supports milk production in breastfeeding women","Anti-inflammatory and antioxidant properties"].map((b) => (<p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Aromatase Inhibition — Fenugreek's steroidal saponins inhibit aromatase — the enzyme that converts testosterone to estradiol (estrogen). By reducing this conversion, fenugreek maintains higher free testosterone levels and reduces the relative estrogen load — shifting the testosterone-to-estrogen ratio in favor of male hormonal health.","5-Alpha Reductase Inhibition — Fenugreek also inhibits 5-alpha reductase — the enzyme that converts testosterone to dihydrotestosterone (DHT). While DHT is important for some functions, excessive conversion reduces available testosterone. This dual enzyme inhibition helps preserve bioavailable testosterone.","SHBG Effects — Some research suggests fenugreek may reduce sex hormone-binding globulin, increasing the proportion of free testosterone available for biological activity.","Blood Glucose Regulation — Fenugreek's soluble fiber (galactomannan) slows gastric emptying and glucose absorption, while its unique amino acid 4-hydroxyisoleucine directly stimulates insulin secretion from pancreatic beta cells — producing significant blood glucose lowering effects that have been consistently demonstrated in clinical trials."].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">A 2011 double-blind RCT by Steels et al. found 600mg Testofen daily for 6 weeks significantly improved sexual function scores, libido, and quality of life in healthy men aged 25–52, with significant increases in free testosterone. A 2016 RCT by Maheshwari et al. found fenugreek extract significantly increased total and free testosterone and improved sexual function in men with below-normal testosterone. Blood sugar research is robust — a Cochrane-reviewed meta-analysis found fenugreek significantly reduced fasting blood glucose and HbA1c in type 2 diabetic patients. A study in healthy men found fenugreek maintained testosterone levels that declined in the placebo group during an 8-week resistance training program.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 500–600mg of standardized extract (Testofen or equivalent, standardized to 50% fenugreek saponins) daily","Blood sugar benefit: 5–10g of fenugreek seed powder with meals — significantly higher than extract doses","Timing: With meals — reduces GI side effects and leverages blood sugar benefits with carbohydrate-containing meals","Duration: Testosterone and libido benefits typically seen within 4–8 weeks","Forms: Standardized extract (for hormonal effects) vs. seed powder (better for blood sugar) — choose based on primary goal"].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Generally well tolerated. Most common side effects are GI — bloating, gas, and loose stools — particularly with seed powder at higher doses. A distinctive maple syrup odor in sweat and urine is common and harmless. May cause hypoglycemia when combined with diabetes medications — monitor blood glucose. Not recommended during pregnancy in medicinal doses — has traditional use as a uterine stimulant. People with hormone-sensitive conditions should consult a healthcare provider. May interact with blood thinners due to mild anticoagulant properties.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/tongkat-ali" className="text-[#0D7377] hover:underline">Tongkat Ali</Link> | <Link href="/supplements/maca-root" className="text-[#0D7377] hover:underline">Maca Root</Link> | <Link href="/supplements/ashwagandha" className="text-[#0D7377] hover:underline">Ashwagandha</Link> | <Link href="/supplements/zinc" className="text-[#0D7377] hover:underline">Zinc</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Steels E, et al. Physiological aspects of male libido enhanced by standardized Trigonella foenum-graecum extract and mineral formulation. Phytother Res. 2011.","Neelakantan N, et al. Effect of fenugreek (Trigonella foenum-graecum L.) intake on glycemia: a meta-analysis of clinical trials. Nutr J. 2014."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Testosterone", "Aromatase", "Blood Sugar", "Testofen"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=fenugreek+supplement&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
