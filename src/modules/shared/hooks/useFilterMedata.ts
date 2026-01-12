import { create } from "zustand";

interface FilterMetadataStore {
  data: string[];
  setData: (data?: string[]) => void;
}

export const useFilterMedata = create<FilterMetadataStore>()((set) => ({
  data: [],
  setData: (d) => set({ data: d }),
}));
