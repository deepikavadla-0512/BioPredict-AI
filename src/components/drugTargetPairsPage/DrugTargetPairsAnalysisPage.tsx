"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/api/axios";
import { ApiError } from "@/lib/api/types";
import { useDrugTargetStore } from "@/lib/store/useDrugTargetStore";

export function DrugTargetPairsAnalysisPage() {
  const [compoundInput, setCompoundInput] = useState<string>("");
  const [sequenceInput, setSequenceInput] = useState<string>("");
  const { setResults, setActiveTab } = useDrugTargetStore();

  const analyseDrugTargetPairs = useMutation({
    mutationFn: async (data: { compound_smiles: string; target_sequence: string }) => {
      const formattedData = {
        compound_smiles: data.compound_smiles,
        target_sequence: data.target_sequence // Changed from consequences to consequence
      };

      const response = await axiosInstance.post("/drugTargetPairAnalysis", formattedData);
      
      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Prediction completed successfully!");
      if (data) {
        setResults(data);
        setActiveTab("results");
      }
    },
    onError: (error: ApiError) => {
      toast.error(
        error.message || 
        "Failed to process prediction"
      );      
      console.error("Error details:", error);
    },
  });

  const handleSampleInput = () => {
    setCompoundInput("C#Cc1cccc(Nc2ncnc3cc(OCCOC)c(OCCOC)cc23)c1");
    setSequenceInput("MAAVILESIFLKRSQQKKKTSPLNFKKRLFLLTVHKLSYYEYDFERGRRGSKKGSIDVEKITCVETVVPEKNPPPERQIPRRGEESSEMEQISIIERFPYPFQVVYDEGPLYVFSPTEELRKRWIHQLKNVIRYNSDLVQKYHPCFWIDGQYLCCSQTAKNAMGCQILENRNGSLKPGSSHRKTKKPLPPTPEEDQILKKPLPPEPAAAPVSTSELKKVVALYDYMPMNANDLQLRKGDEYFILEESNLPWWRARDKNGQEGYIPSNYVTEAEDSIEMYEWYSKHMTRSQAEQLLKQEGKEGGFIVRDSSKAGKYTVSVFAKSTGDPQGVIRHYVVCSTPQSQYYLAARNCLVNDQGVVKVSDFGLSRYVLDDEYTSSVGSKFPVRWSPPEVLMYSKFSSKSDIWAFGVLMWEIYSLGKMPYERFTNSETAEHIAQGLRLYRPHLASEKVYTIMYSCWHEKADERPTFKILLSNILDVMDEES");
  };

  const handlePredict = () => {
    if (!compoundInput.trim() || !sequenceInput.trim()) {
      toast.error("Please fill in both fields");
      return;
    }
    
    const data = {
      compound_smiles: compoundInput.trim(),
      target_sequence: sequenceInput.trim()
    };

    analyseDrugTargetPairs.mutate(data);
  };
  
  return (
    <div className="max-w-full mx-auto bg-white dark:bg-[#123265] shadow-lg rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {/* Left Section: Input Fields */}
          <div className="lg:col-span-4">
            <div className="bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] h-[280px] flex flex-col">
              <h3 className="text-lg text-left font-semibold text-[#123265] dark:text-white mb-4">
                Input Details
              </h3>
              <div className="space-y-4 flex-grow">
                <div>
                  <label className="block text-left text-sm font-medium text-[#123265] dark:text-gray-300 mb-2">
                    Compund
                  </label>
                  <Input
                    value={compoundInput}
                    onChange={(e) => setCompoundInput(e.target.value)}
                    placeholder="Enter Compund"
                    className="bg-white dark:bg-[rgba(2,31,53,0.2)] border-[rgba(2,31,53,0.2)]"
                  />
                </div>
                <div>
                  <label className="block text-left text-sm font-medium text-[#123265] dark:text-gray-300 mb-2">
                    Target Sequence
                  </label>
                  <Input
                    value={sequenceInput}
                    onChange={(e) => setSequenceInput(e.target.value)}
                    placeholder="Enter Sequence"
                    className="bg-white dark:bg-[rgba(2,31,53,0.2)] border-[rgba(2,31,53,0.2)]"
                  />
                </div>
                <div className="mt-auto">
                  <Button
                    onClick={handleSampleInput}
                    className="w-full bg-[rgba(2,31,53,0.1)] hover:bg-[rgba(2,31,53,0.15)] text-[#123265] dark:bg-[rgba(255,255,255,0.1)] dark:text-white"
                  >
                    Use Sample Input
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Guidelines */}
          <div className="lg:col-span-3">
            <div className="h-[280px] flex flex-col">
              <div className="bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-4 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex-grow">
                <h3 className="text-lg text-left font-semibold text-[#123265] dark:text-white mb-4">
                  Guidelines
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                      <span className="text-sm font-medium text-[#123265] dark:text-white">1</span>
                    </div>
                    <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300">
                      Enter the compound in the smiles format
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                      <span className="text-sm font-medium text-[#123265] dark:text-white">2</span>
                    </div>
                    <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300">
                      Enter the target sequence
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                      <span className="text-sm font-medium text-[#123265] dark:text-white">3</span>
                    </div>
                    <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300">
                      You can use the sample input for testing
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                onClick={handlePredict} 
                className="w-full mt-3 bg-[#123265] hover:bg-[rgba(2,31,53,0.9)] text-white rounded-md transition-all disabled:bg-[rgba(2,31,53,0.6)]"
                disabled={analyseDrugTargetPairs.isPending || (!compoundInput || !sequenceInput)}
                size="default"
              >
                {analyseDrugTargetPairs.isPending ? "Processing..." : "Submit Analysis"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}