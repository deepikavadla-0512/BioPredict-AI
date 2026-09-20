"use client";
import React from "react";
import { DrugTargetPairsAnalysisPage } from "@/components/drugTargetPairsPage/DrugTargetPairsAnalysisPage"; 
import { DrugTargetPairsModelInfoPage } from "@/components/drugTargetPairsPage/DrugTargetPairsModelInfoPage";
import { DrugTargetPairsResultsPage } from "@/components/drugTargetPairsPage/DrugTargetPairsResultsPage";
import { useDrugTargetStore } from "@/lib/store/useDrugTargetStore";

export function DrugTargetPairsPrediction() {
  const { activeTab, setActiveTab } = useDrugTargetStore();
  
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[#123265]">
      <div className="w-full px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#123265] dark:text-white mb-4">
            Binding Affinity Prediction and Explainability for Drug Target Pairs
          </h1>
          <p className="text-lg md:text-xl text-[rgba(2,31,53,0.8)] dark:text-gray-300">
            Official Platform for predicting the binding affinity and explaining the reasons behind the predictions
          </p>
          <div className="min-h-screen w-full bg-gray-50 dark:bg-[#123265]">
            <div className="max-w-full mx-auto px-4 py-8">
              <div className="bg-[#123265] text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
                <h2 className="text-xl font-semibold">Drug Target Pairs Analysis</h2>
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
              {activeTab === "analysis" && <DrugTargetPairsAnalysisPage />}
              {activeTab === "model Info" && <DrugTargetPairsModelInfoPage />}
              {activeTab === "results" && <DrugTargetPairsResultsPage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}