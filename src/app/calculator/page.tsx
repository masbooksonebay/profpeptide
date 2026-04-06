"use client";

import { useState } from "react";

export default function CalculatorPage() {
      const [vialMg, setVialMg] = useState("");
      const [waterMl, setWaterMl] = useState("");
      const [doseMcg, setDoseMcg] = useState("");

  const concentration =
          vialMg && waterMl ? (parseFloat(vialMg) * 1000) / parseFloat(waterMl) : null;
      const volumeUl =
              concentration && doseMcg
          ? (parseFloat(doseMcg) / concentration) * 1000
                : null;
      const volumeMl =
              concentration && doseMcg ? parseFloat(doseMcg) / concentration : null;

  return (
          <div className="section max-w-xl">
                <div className="mb-8">
                        <span className="tag mb-3 inline-block">Research Tool</span>span>
                        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Dosage Calculator</h1>h1>
                        <p className="text-gray-500 text-sm leading-relaxed">
                                  Calculate reconstitution volumes for lyophilised peptide vials. Enter
                                  your vial size, bacteriostatic water volume, and desired dose.
                        </p>p>
                </div>div>
          
                <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
                        <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                              Vial size (mg)
                                  </label>label>
                                  <input
                                                  type="number"
                                                  value={vialMg}
                                                  onChange={(e) => setVialMg(e.target.value)}
                                                  placeholder="e.g. 5"
                                                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                                />
                        </div>div>
                        <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                              Bacteriostatic water (mL)
                                  </label>label>
                                  <input
                                                  type="number"
                                                  value={waterMl}
                                                  onChange={(e) => setWaterMl(e.target.value)}
                                                  placeholder="e.g. 2"
                                                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                                />
                        </div>div>
                        <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                              Desired dose (mcg)
                                  </label>label>
                                  <input
                                                  type="number"
                                                  value={doseMcg}
                                                  onChange={(e) => setDoseMcg(e.target.value)}
                                                  placeholder="e.g. 250"
                                                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                                />
                        </div>div>
                    {concentration !== null && (
                        <div className="border-t border-gray-100 pt-5 space-y-3">
                                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Results</h2>h2>
                                    <div className="flex justify-between text-sm">
                                                  <span className="text-gray-500">Concentration</span>span>
                                                  <span className="font-medium">{concentration.toFixed(2)} mcg/mL</span>span>
                                    </div>div>
                            {volumeMl !== null && (
                                          <div className="flex justify-between text-sm">
                                                          <span className="text-gray-500">Draw volume</span>span>
                                                          <span className="font-medium">{volumeMl.toFixed(3)} mL</span>span>
                                          </div>div>
                                    )}
                            {volumeUl !== null && (
                                          <div className="flex justify-between text-sm">
                                                          <span className="text-gray-500">Draw volume (U-100 syringe)</span>span>
                                                          <span className="font-medium">{volumeUl.toFixed(1)} IU</span>span>
                                          </div>div>
                                    )}
                        </div>div>
                        )}
                </div>div>
          </div>div>
        );
}</div>
