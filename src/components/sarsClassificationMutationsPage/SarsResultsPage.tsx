import React, { useState } from "react";
import { useSarsStore, type SarsResult, type NucleotideMutation, type CodonMutation } from "@/lib/store/useSarsStore";
import { Button } from "@/components/ui/button";

// Add variant mapping
const variantMapping: { [key: string]: string } = {
  "B.1.1.7": "Alpha (B.1.1.7)",
  "B.1.351": "Beta (B.1.351)",
  "P.1": "Gamma (P.1)",
  "B.1.617.2": "Delta (B.1.617.2)",
  "B.1.1.529": "Omicron (B.1.1.529)"
};

export function SarsResultsPage() {
  const results = useSarsStore((state) => state.results) as SarsResult | null;
  const setActiveTab = useSarsStore((state) => state.setActiveTab);

  const [mutationTab, setMutationTab] = useState('nucleotide');  // Add this line

  // Function to get display name for variant
  const getVariantDisplayName = (variant: string) => {
    return variantMapping[variant] || variant;
  };

  if (!results) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white dark:bg-[rgba(2,31,53,0.8)] rounded-lg border-2 border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-[#123265] dark:text-white mb-4">
            No Analysis Results Available
          </h2>
          <div className="bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg mb-6">
            <p className="text-[rgba(2,31,53,0.8)] dark:text-gray-300 mb-4">
              To view SARS-CoV-2 variant analysis results, please complete the following steps:
            </p>
            <ol className="text-left space-y-3 text-[rgba(2,31,53,0.7)] dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#123265] dark:text-white">1.</span>
                Navigate to the Analysis section
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#123265] dark:text-white">2.</span>
                Upload a FASTA file or input your sequence
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
    <div className="p-8 bg-white dark:bg-[rgba(2,31,53,0.8)] rounded-lg border-2 border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-bold text-[#123265] dark:text-white mb-2">
          SARS-CoV-2 Analysis Results
        </h2>
        <p className="text-[rgba(2,31,53,0.7)] dark:text-gray-400">
          Analysis completed successfully. Please review the detailed findings below.
        </p>
      </div>

      {/* Variant Information */}
      <div className="mb-8 p-6 bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(2,31,53,0.3)] rounded-lg border-l-4 border-[#123265]">
        <h3 className="text-xl font-semibold text-[#123265] dark:text-white mb-2 text-left">
          Identified Variant
        </h3>\
        <p className="text-3xl font-bold text-[#123265] dark:text-gray-200 text-left">
          {getVariantDisplayName(results.variant)}
        </p>
      </div>

      {/* Mutations Section */}
      <div className="space-y-4">
        {/* Mutation Tabs */}
        <div className="flex space-x-4 border-b border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
          <button
            onClick={() => setMutationTab('nucleotide')}
            className={`px-4 py-2 text-lg font-medium border-b-2 transition-colors ${
              mutationTab === 'nucleotide'
                ? 'border-[#123265] text-[#123265] dark:border-white dark:text-white'
                : 'border-transparent text-[rgba(2,31,53,0.6)] dark:text-gray-400 hover:text-[rgba(2,31,53,0.8)] dark:hover:text-gray-300'
            }`}
          >
            Nucleotide-wise Mutations
          </button>
          <button
            onClick={() => setMutationTab('codon')}
            className={`px-4 py-2 text-lg font-medium border-b-2 transition-colors ${
              mutationTab === 'codon'
                ? 'border-[#123265] text-[#123265] dark:border-white dark:text-white'
                : 'border-transparent text-[rgba(2,31,53,0.6)] dark:text-gray-400 hover:text-[rgba(2,31,53,0.8)] dark:hover:text-gray-300'
            }`}
          >
            Codon-wise Mutations
          </button>
        </div>

        {/* Mutation Tables */}
        <div className="bg-[rgba(2,31,53,0.05)] dark:bg-[rgba(2,31,53,0.3)] rounded-lg p-6">
          {mutationTab === 'nucleotide' ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#123265] text-white">
                    <th className="px-4 py-3 text-center">Position</th>
                    <th className="px-4 py-3 text-center">Reference</th>
                    <th className="px-4 py-3 text-center">Mutation</th>
                    <th className="px-4 py-3 text-center">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {results.mutations.map((mutation: NucleotideMutation, index: number) => (
                    <tr 
                      key={index}
                      className={`
                        ${index % 2 === 0 ? 'bg-white dark:bg-[rgba(2,31,53,0.2)]' : 'bg-[rgba(2,31,53,0.02)] dark:bg-[rgba(2,31,53,0.25)]'}
                        hover:bg-[rgba(2,31,53,0.1)] dark:hover:bg-[rgba(2,31,53,0.35)]
                        transition-colors
                      `}
                    >
                      <td className="px-4 py-3 text-[rgba(2,31,53,0.8)] dark:text-gray-300 font-medium text-center">
                        {mutation.Position}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                          {mutation.Reference}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
                          {mutation.Mutated}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[rgba(2,31,53,0.8)] dark:text-gray-300 text-center">
                        {mutation.Reference} → {mutation.Mutated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#123265] text-white">
                    <th className="px-4 py-3 text-center">Position</th>
                    <th className="px-4 py-3 text-center">Reference Codon</th>
                    <th className="px-4 py-3 text-center">Mutated Codon</th>
                    <th className="px-4 py-3 text-center">Change</th>
                    <th className="px-4 py-3 text-center">Mutation Type</th>
                  </tr>
                </thead>
                <tbody>
                  {results.codon_wise_mutations.map((mutation: CodonMutation, index: number) => (
                    <tr 
                      key={index}
                      className={`
                        ${index % 2 === 0 ? 'bg-white dark:bg-[rgba(2,31,53,0.2)]' : 'bg-[rgba(2,31,53,0.02)] dark:bg-[rgba(2,31,53,0.25)]'}
                        hover:bg-[rgba(2,31,53,0.1)] dark:hover:bg-[rgba(2,31,53,0.35)]
                        transition-colors
                      `}
                    >
                      <td className="px-4 py-3 text-[rgba(2,31,53,0.8)] dark:text-gray-300 font-medium text-center">
                        {mutation.Codon_Position}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded font-mono">
                          {mutation.Reference_Codon}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded font-mono">
                          {mutation.Mutated_Codon}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[rgba(2,31,53,0.8)] dark:text-gray-300 text-center font-mono">
                        {mutation.Reference_Codon} → {mutation.Mutated_Codon}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2 py-1 rounded font-medium ${
                          mutation.Mutation_Type === 'Nonsense' 
                            ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                            : mutation.Mutation_Type === 'Missense'
                            ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                            : mutation.Mutation_Type === 'Silent'
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                        }`}>
                          {mutation.Mutation_Type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary Box */}
        <div className="bg-[rgba(2,31,53,0.02)] dark:bg-[rgba(2,31,53,0.2)] p-4 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
          <p className="text-[rgba(2,31,53,0.7)] dark:text-gray-400 text-sm">
            <strong>Note:</strong> The analysis shows both nucleotide-level and codon-level mutations. 
            Codon mutations represent changes in groups of three nucleotides that code for amino acids in the viral genome.
          </p>
        </div>
      </div>
    </div>
  );
}
