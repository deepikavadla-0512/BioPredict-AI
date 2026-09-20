import { create } from 'zustand';

interface PredictionResult {
  [key: string]: string | number | Array<string | number | Record<string, unknown>>; // Adjust based on actual structure
}

interface SpliceState {
  results: PredictionResult | null; // Replace `any` with `PredictionResult | null`
  modelType: "donor" | "acceptor";
  sequenceInput: string;
  files: File[];
  isSampleFileUsed: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setResults: (results: PredictionResult | null) => void; // Replace `any` with `PredictionResult | null`
  setModelType: (type: "donor" | "acceptor") => void;
  setSequenceInput: (input: string) => void;
  setFiles: (files: File[]) => void;
  setIsSampleFileUsed: (used: boolean) => void;
  resetState: () => void;
}

export const useSpliceStore = create<SpliceState>((set) => ({
  results: null,
  modelType: "acceptor",
  sequenceInput: "",
  files: [],
  isSampleFileUsed: false,
  setResults: (results) => set({ results }),
  setModelType: (type) => set({ modelType: type }),
  setSequenceInput: (input) => set({ sequenceInput: input }),
  setFiles: (files) => set({ files }),
  activeTab: 'analysis',
  setActiveTab: (tab) => set({ activeTab: tab }),
  setIsSampleFileUsed: (used) => set({ isSampleFileUsed: used }),
  resetState: () => set({
    results: null,
    modelType: "acceptor",
    sequenceInput: "",
    files: [],
    isSampleFileUsed: false,
  }),
}));