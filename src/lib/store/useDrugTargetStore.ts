import { create } from "zustand";

interface DrugTargetResult {
  affinity: string;
  explanation_graph: string; // base64 string
}

interface DrugTargetStore {
  results: DrugTargetResult | null;
  setResults: (data: DrugTargetResult) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useDrugTargetStore = create<DrugTargetStore>((set) => ({
  results: null,
  setResults: (data) => set({ results: data }),
  activeTab: "analysis",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));