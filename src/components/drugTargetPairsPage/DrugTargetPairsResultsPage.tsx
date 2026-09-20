import React from "react";
import { useDrugTargetStore } from "@/lib/store/useDrugTargetStore";
import { Button } from "@/components/ui/button";

export function DrugTargetPairsResultsPage() {
  const { results, setActiveTab } = useDrugTargetStore();

  if (!results) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white dark:bg-[#123265] rounded-lg border-2 border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-[#123265] dark:text-white mb-4">
            No Analysis Results Available
          </h2>
          <div className="bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg mb-6">
            <p className="text-[rgba(2,31,53,0.8)] dark:text-gray-300 mb-4">
              To view MECP2 SNV pathogenicity analysis results, please complete the following steps:
            </p>
            <ol className="text-left space-y-3 text-[rgba(2,31,53,0.7)] dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#123265] dark:text-white">1.</span>
                Navigate to the Analysis section
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#123265] dark:text-white">2.</span>
                Enter SPDI and molecular consequence
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#123265] dark:text-white">3.</span>
                Submit for analysis
              </li>
            </ol>
          </div>
          <Button
            onClick={() => setActiveTab("analysis")}
            className="bg-[#123265] hover:bg-[rgba(2,31,53,0.9)] text-white px-6 py-2 rounded"
          >
            Go to Analysis Section
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white dark:bg-[#123265] rounded-lg border-2 border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-bold text-[#123265] dark:text-white mb-2">
          Drug-Target Pair Analysis Results
        </h2>
        <p className="text-[rgba(2,31,53,0.7)] dark:text-gray-400">
          Analysis completed successfully. Please review the detailed findings below.
        </p>
      </div>

      {/* Affinity Score */}
      <div className="mb-8 p-6 bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(2,31,53,0.3)] rounded-lg border-l-4 border-[#123265]">
        <h3 className="text-xl font-semibold text-[#123265] dark:text-white mb-2 text-left">
          Binding Affinity Score
        </h3>
        <p className="text-3xl font-bold text-[#123265] dark:text-white">
          {results.affinity}
        </p>
      </div>

      {/* Explanation Graph */}
      <div className="space-y-4">
        <div className="bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(2,31,53,0.3)] rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#123265] dark:text-white mb-4 text-left">
            Interaction Graph
          </h3>
          <div className="bg-white dark:bg-[rgba(2,31,53,0.2)] p-4 rounded-lg">
            <img 
              src={`data:image/png;base64,${results.explanation_graph}`}
              alt="Drug-Target Interaction Graph"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Summary Box */}
        <div className="bg-[rgba(2,31,53,0.02)] dark:bg-[rgba(2,31,53,0.2)] p-4 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
          <p className="text-[rgba(2,31,53,0.7)] dark:text-gray-400 text-sm">
            <strong>Note:</strong> The graph above visualizes the predicted interactions between the drug and target molecules. Lower affinity scores indicate stronger binding.
          </p>
        </div>
      </div>
    </div>
  );
}