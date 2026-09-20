"use client";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/api/axios";
import { useSpliceStore } from "@/lib/store/useSpliceStore";
import { AxiosError } from "axios";

export function SpliceAnalysisPage() {
  const {
    results,
    modelType,
    sequenceInput,
    files,
    isSampleFileUsed,
    setResults,
    setModelType,
    setSequenceInput,
    setFiles,
    setIsSampleFileUsed,
  } = useSpliceStore();

  const predictMutation = useMutation({
    mutationFn: async (data: FormData | { sequence: string }) => {
      let response;
  
      if (data instanceof FormData) {
        response = await axiosInstance.post(
          `/spliceSitePrediction/${modelType}/predictFile`,
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        const payload =
          "sequence" in data ? data : { sequence: data as unknown as string };
        response = await axiosInstance.post(
          `/spliceSitePrediction/${modelType}/predictSequence`,
          payload
        );
      }
  
      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }
  
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Prediction completed successfully!");
      if (data) {
        setResults(data);
      }
    },
    onError: (error: AxiosError) => { // Specify AxiosError type
      toast.error(
        (error.response?.data as { message?: string })?.message ||
          (error.response?.data as { error?: string })?.error ||
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
      const response = await fetch("/spliceSample.csv");
      const text = await response.text();
      setSequenceInput(text);
    } catch (error) {
      toast.error("Failed to load sample sequence.");
      console.log(error);
    }
  };

  const handleSampleFileDownload = () => {
    const link = document.createElement("a");
    link.href = "/spliceSample.csv";
    link.download = "spliceSample.csv";
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

      predictMutation.mutate(formData);
    } else {
      predictMutation.mutate({ sequence: sequenceInput.trim() });
    }
  };
const formatPredictionValue = (value: unknown) => {
  if (typeof value === "number") {
    const isPositive = value === 1;
    const result = modelType === "acceptor" 
      ? (isPositive ? "Acceptor" : "Not Acceptor")
      : (isPositive ? "Donor" : "Not Donor");
    
    return {
      text: result,
      isPositive
    };
  } else if (typeof value === "string") {
    return { text: value, isPositive: null };
  }
  return { text: String(value), isPositive: null };
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
                <p className="text-sm text-[#123265] dark:text-gray-400 mt-2">
                  Using sample sequence file.
                </p>
              )}
            </div>
          </div>

          {/* Right Section: Input and Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Model Dropdown */}
            <div className="mb-4 flex flex-row justify-around">
              <label className="block text-left text-sm text-[#123265] font-medium mb-2">Select Model</label>
                <select
                  value={modelType}
                  onChange={(e) => {
                    setModelType(e.target.value as "donor" | "acceptor");
                    setResults(null);
                  }}
                  className="w-full p-2 border rounded-md bg-white dark:[#123265] dark:border-slate-700"
                >
                  <option value="acceptor">Acceptor</option>
                  <option value="donor">Donor</option>
                </select>
            </div>

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
                <Button onClick={handleSampleTextInput} className="bg-gray-200 hover:bg-gray dark:bg-gray-700 text-gray-800 dark:text-white">
                  Use Sample Sequence
                </Button>
                <Button onClick={handleSampleFileDownload} className="bg-[#123265] text-white">
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
                  <p className="text-[#123265] dark:text-gray-300">
                    Upload a DNA sequence file (CSV format) or enter sequence text.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                    <span className="text-sm font-medium text-[#123265] dark:text-white">2</span>
                  </div>
                  <p className="text-[#123265] text-left dark:text-gray-300">
                    Select either donor or acceptor model based on your analysis type.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handlePredict}
              className="w-full bg-[#123265] text-white rounded-md transition-all disabled:bg-gray-400"
              disabled={predictMutation.isPending || (!files.length && !sequenceInput)}
            >
              {predictMutation.isPending ? "Processing Request..." : "Submit for Analysis"}
            </Button>
{/* Results Section */}
{results && (
  <div className="mt-6 bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-gray-300 dark:border-gray-600">
    <h3 className="text-lg font-semibold text-[#123265] dark:text-white mb-4">
      Prediction Results
    </h3>
    <div className="space-y-4">
      {Object.entries(results).map(([key, value]) => (
        <div key={key} className="flex flex-col">
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm text-gray-900 dark:text-gray-100">
            {Array.isArray(value) && typeof value[0] === "object" ? (
              <table className="w-full table-auto">
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    {Object.keys(value[0]).map((header, index) => (
                      <th key={index} className="px-4 py-2 text-left">
                        {header.charAt(0).toUpperCase() + header.slice(1).replace(/_/g, " ")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {value.map((item, index) => (
                    <tr key={index}>
                      {Object.entries(item).map(([itemKey, itemValue]) => {
                        const result = itemKey.toLowerCase().includes("sequence")
                          ? { text: `Sequence ${index + 1}`, isPositive: null }
                          : formatPredictionValue(Number(itemValue));
                        return (
                          <td key={itemKey} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                            <span className={`px-3 py-1 rounded-full font-medium ${
                              result.isPositive === null ? '' :
                              result.isPositive
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {result.text}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : Array.isArray(value) ? (
              <table className="w-full table-auto">
                <tbody>
                  <tr>
                    {value.map((cellValue, index) => {
                      const result = typeof cellValue === "string" && cellValue.length > 10
                        ? { text: `Sequence ${index + 1}`, isPositive: null }
                        : formatPredictionValue(Number(cellValue));
                      return (
                        <td key={index} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className={`px-3 py-1 rounded-full font-medium ${
                            result.isPositive === null ? '' :
                            result.isPositive
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {result.text}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            ) : (
              <span className={`px-3 py-1 rounded-full font-medium ${
                formatPredictionValue(Number(value)).isPositive
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {formatPredictionValue(Number(value)).text}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </div>
        </div>
      </div>
    </div>
  );
}