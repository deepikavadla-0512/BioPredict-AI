import { create } from "zustand";

interface PathogenicityResult {
  prediction: string;
  spdi: string;
  consequences: string[];
}

interface PathogenicityStore {
  results: PathogenicityResult | null; // Store API results
  setResults: (data: PathogenicityResult) => void; // Function to update results
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const usePathogenicityStore = create<PathogenicityStore>((set) => ({
  results: null,
  setResults: (data) => set({ results: data }),
  activeTab: "analysis",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));