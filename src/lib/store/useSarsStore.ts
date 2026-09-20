import { create } from "zustand";

export interface NucleotideMutation {
  Position: number;
  Reference: string;
  Mutated: string;
}

export interface CodonMutation {
  Codon_Position: number;
  Reference_Codon: string;
  Mutated_Codon: string;
  Mutation_Type: string;
}

export interface SarsResult {
  variant: string;
  mutations: NucleotideMutation[];
  codon_wise_mutations: CodonMutation[];
}

interface SarsStore {
  results: SarsResult | null;
  setResults: (data: SarsResult) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useSarsStore = create<SarsStore>((set) => ({
  results: null,
  setResults: (data) => set({ results: data }),
  activeTab: "analysis",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));