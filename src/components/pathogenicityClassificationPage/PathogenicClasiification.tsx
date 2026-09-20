"use client";
import React from "react";
import { PathogenicityAnalysisPage } from "@/components/pathogenicityClassificationPage/PathogenicityAnalysisPage";
import { PathogenicityModelInfoPage } from "@/components/pathogenicityClassificationPage/PathogenicityModelInfoPage";
import { PathogenicityResultsPage } from "@/components/pathogenicityClassificationPage/PathogenicityResultsPage"; 
import { usePathogenicityStore } from "@/lib/store/usePathogenicityStore";

export function PathogenicClassification() {
  const { activeTab, setActiveTab } = usePathogenicityStore();
  
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[#123265]">
      <div className="w-full px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#123265] dark:text-white mb-4">
            MECP2 SNV Pathogenicity Classifier
          </h1>
          <p className="text-lg md:text-xl text-[rgba(2,31,53,0.8)] dark:text-gray-300">
            Official Platform for Single Nucleotide Variant (SNV) Pathogenicity Classification
          </p>
          <div className="min-h-screen w-full bg-gray-50 dark:bg-[#123265]">
            <div className="max-w-full mx-auto px-4 py-8">
              <div className="bg-[#123265] text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
                <h2 className="text-xl font-semibold">SNV Analysis Tool</h2>
                <div className="flex space-x-4">
                  {["analysis", "model Info", "results"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded ${
                        activeTab === tab ? "bg-[rgba(255,255,255,0.1)]" : "hover:bg-[#123265]"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              {activeTab === "analysis" && <PathogenicityAnalysisPage />}
              {activeTab === "model Info" && <PathogenicityModelInfoPage />}
              {activeTab === "results" && <PathogenicityResultsPage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}