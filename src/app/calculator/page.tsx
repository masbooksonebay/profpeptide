"use client";
import { useState } from "react";

export default function CalculatorPage() {
  const [vialMg, setVialMg] = useState<number>(5);
  const [bacteriostaticMl, setBacteriostaticMl] = useState<number>(2);
  const [desiredMcg, setDesiredMcg] = useState<number>(250);

  const concentration = vialMg > 0 && bacteriostaticMl > 0
    ? (vialMg * 1000) / bacteriostaticMl
    : 0;
  const drawUnits = concentration > 0 && desiredMcg > 0
    ? ((desiredMcg / concentration) * 100).toFixed(2)
    : "0";
  const drawMl = concentration > 0 && desiredMcg > 0
    ? (desiredMcg / concentration).toFixed(3)
    : "0";

  return (
    <div className="section max-w-2xl">
      <span className="tag mb-3 inline-block">Research Tool</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Dosage Calculator</h1>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-lg">
        Calculate exactly how many units to draw on an insulin syringe for a given peptide dose.
        Enter your vial size, bacteriostatic water volume, and target dose.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-8 text-xs text-amber-800">
        <strong>Research use only.</strong> This calculator is for educational purposes.
        Always verify calculations independently before research use.
      </div>
      <div className="card space-y-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Vial size (mg)</label>
          <input
            type="number" min={0} step={0.5} value={vialMg}
            onChange={(e) => setVialMg(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377] focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">e.g. 5 for a 5mg vial</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Bacteriostatic water added (mL)</label>
          <input
            type="number" min={0} step={0.1} value={bacteriostaticMl}
            onChange={(e) => setBacteriostaticMl(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377] focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">e.g. 2 for 2mL of BW</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Desired dose (mcg)</label>
          <input
            type="number" min={0} step={25} value={desiredMcg}
            onChange={(e) => setDesiredMcg(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377] focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">e.g. 250 for 250mcg</p>
        </div>
      </div>
      <div className="bg-[#f0fafa] border border-[#d0eeef] rounded-xl p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Results</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Concentration</p>
            <p className="text-2xl font-bold text-[#0D7377]">{concentration.toFixed(0)}</p>
            <p className="text-xs text-gray-400">mcg / mL</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Draw volume</p>
            <p className="text-2xl font-bold text-[#0D7377]">{drawMl}</p>
            <p className="text-xs text-gray-400">mL</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-100 col-span-2">
            <p className="text-xs text-gray-500 mb-1">Insulin syringe units (U-100)</p>
            <p className="text-2xl font-bold text-[#0D7377]">{drawUnits} units</p>
            <p className="text-xs text-gray-400">On a 100-unit insulin syringe</p>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-500 space-y-1">
        <p><strong className="text-gray-700">How it works:</strong></p>
        <p>Concentration = (Vial mg × 1000) ÷ mL of water added</p>
        <p>Draw volume (mL) = Desired dose (mcg) ÷ Concentration (mcg/mL)</p>
        <p>Syringe units = Draw volume × 100</p>
      </div>
    </div>
  );
}