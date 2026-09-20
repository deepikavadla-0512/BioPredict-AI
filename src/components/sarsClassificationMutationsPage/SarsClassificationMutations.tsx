"use client";
import React from "react";
import { SarsAnalysisPage } from "./SarsAnalysisPage";
import { SarsModelInfoPage } from "./SarsModelInfoPage";
import { SarsResultsPage } from "./SarsResultsPage";
import { useSarsStore } from "@/lib/store/useSarsStore";

export function SarsClassificationMutations() {
  const { activeTab, setActiveTab } = useSarsStore();
  
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[rgba(2,31,53,0.95)]">
      <div className="w-full px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#123265] dark:text-white mb-4">
            SARS-CoV2 Variant Analysis Portal
          </h1>
          <p className="text-lg md:text-xl text-[rgba(2,31,53,0.8)] dark:text-gray-300">
            Official Platform for Variants Classification and Mutations Prediction
          </p>
          <div className="min-h-screen w-full bg-gray-50 dark:bg-[rgba(2,31,53,0.95)]">
            <div className="max-w-full mx-auto px-4 py-8">
              <div className="bg-[#123265] text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
                <h2 className="text-xl font-semibold">Sequence Analysis Tool</h2>
                <div className="flex space-x-4">
                  {["analysis", "model Info", "results"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded ${
                        activeTab === tab ? "bg-[rgba(255,255,255,0.1)]" : "hover:bg-[rgba(255,255,255,0.1)]"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              {activeTab === "analysis" && <SarsAnalysisPage />}
              {activeTab === "model Info" && <SarsModelInfoPage />}
              {activeTab === "results" && <SarsResultsPage />}
            </div>
          </div>
        </div>
      </div>
    </div>
)};
