"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/api/axios";
import { useSarsStore } from "@/lib/store/useSarsStore";
import { ApiError } from "@/lib/api/types";

// Remove custom ApiError type definition and use the imported one
export function SarsAnalysisPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [sequenceInput, setSequenceInput] = useState<string>("");
  const [isSampleFileUsed, setIsSampleFileUsed] = useState(false);
  const { setResults, setActiveTab } = useSarsStore();

  const predictMutation = useMutation({
    mutationFn: async (data: FormData | { sequence: string }) => {
      let response;

      if (data instanceof FormData) {
        response = await axiosInstance.post("/predictSarsClassificationMutations/predictFile", data, {
          headers: {
              'Content-Type': 'multipart/form-data' 
          }
        });
      } else {
        console.log("Sending sequence data:", data);
        const payload = 'sequence' in data ? data : { sequence: data as unknown as string };
        response = await axiosInstance.post("/predictSarsClassificationMutations/predictSequence", payload);
      }

      // Check if response exists and has data
      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Prediction completed successfully!");
      // Update state after ensuring data exists
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

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    setIsSampleFileUsed(false);
  };

  const handleSampleTextInput = async () => {
    try {
      const response = await fetch("/sample_sequence.fasta");
      const text = await response.text();
      setSequenceInput(text);
    } catch (_error) {
      console.error(_error);
      toast.error("Failed to load sample sequence.");
    }
  };

  const handleSampleFileDownload = () => {
    const link = document.createElement("a");
    link.href = "/sample_sequence.fasta";
    link.download = "sample_sequence.fasta";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setFiles([]);
    setIsSampleFileUsed(true);
  };

  const handlePredict = () => {
    if (files.length === 0 && !sequenceInput.trim()) {
      toast.error("Please upload a file or enter a sequence");
      return;
    }
    
    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file) => formData.append("file", file));
  
      console.log("📂 FormData before sending:");
      for (const pair of formData.entries()) {
          console.log(`${pair[0]}:`, pair[1]);
      }
  
      predictMutation.mutate(formData);
    } else {
      predictMutation.mutate({ sequence: sequenceInput.trim() });
    }
  };
  
  return (
    <div className="max-w-full mx-auto bg-white dark:bg-[rgba(2,31,53,0.8)] shadow-xl rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Section: Upload */}
          <div className="lg:col-span-2">
            <div className="bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] h-[calc(100vh-12.5rem)]">
              <h3 className="text-lg text-left font-semibold text-[#123265] dark:text-white mb-4">
                Upload Sequence File
              </h3>
              <div className="border-2 border-dashed border-[rgba(2,31,53,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-lg bg-gray-50 dark:bg-[rgba(2,31,53,0.3)] transition-all hover:border-[rgba(2,31,53,0.4)] h-[calc(100%-4rem)]">
                <FileUpload onChange={handleFileUpload} />
              </div>
              {isSampleFileUsed && (
                <p className="text-sm text-[#123265] dark:text-gray-400 mt-2">Using sample sequence file.</p>
              )}
            </div>
          </div>

          {/* Right Section: Input and Guidelines */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sequence Input */}
            <div className="bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
              <h3 className="text-lg text-left font-semibold text-[#123265] dark:text-white mb-4">
                Input Sequence
              </h3>
              <Input
                type="textarea"
                value={sequenceInput}
                onChange={(e) => setSequenceInput(e.target.value)}
                placeholder="Paste your DNA sequence here..."
                className="min-h-[120px] resize-none bg-white dark:bg-[rgba(2,31,53,0.2)] border-[rgba(2,31,53,0.2)]"
              />
              <div className="flex flex-wrap gap-3 mt-4">
                <Button
                  onClick={handleSampleTextInput}
                  className="bg-[rgba(2,31,53,0.1)] hover:bg-[rgba(2,31,53,0.15)] text-[#123265] dark:bg-[rgba(255,255,255,0.1)] dark:text-white"
                  size="sm"
                >
                  Use Sample Sequence
                </Button>
                <Button
                  onClick={handleSampleFileDownload}
                  className="bg-[#123265] hover:bg-[rgba(2,31,53,0.9)] text-white"
                  size="sm"
                >
                  Download Sample Sequence File
                </Button>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
              <h3 className="text-lg text-left font-semibold text-[#123265] dark:text-white mb-4">
                Guidelines
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                    <span className="text-sm font-medium text-[#123265] dark:text-white">1</span>
                  </div>
                  <p className="text-[rgba(2,31,53,0.8)] dark:text-gray-300">
                    Upload a DNA sequence file or enter sequence text
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                    <span className="text-sm font-medium text-[#123265] dark:text-white">2</span>
                  </div>
                  <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300">
                    Note: Model is trained on sequences of length 30,255 so the sequence is preprocessed accordingly
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              onClick={handlePredict} 
              className="w-full bg-[#123265] hover:bg-[rgba(2,31,53,0.9)] text-white rounded-md transition-all disabled:bg-[rgba(2,31,53,0.6)]"
              disabled={predictMutation.isPending || (!files.length && !sequenceInput)}
              size="default"
            >
              {predictMutation.isPending ? "Processing Request..." : "Submit for Analysis"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
