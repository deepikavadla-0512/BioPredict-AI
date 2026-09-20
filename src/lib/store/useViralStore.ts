import { create } from "zustand";

interface ViralResult {
  disease_name: string;
  probability: number;
  mutated_patterns: Array<{
    pattern: string;
    position: number;
    significance: string;
  }>;
}

interface ViralStore {
  results: ViralResult | null; 
  setResults: (data: ViralResult) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useViralStore = create<ViralStore>((set) => ({
  results: null,
  setResults: (data) => set({ results: data }),
  activeTab: "analysis", 
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
