import { fetchTags } from "@/actions/action";
import { create } from "zustand";

interface DataStoreProps {
  currentTags: Array<{
    id: string;
    name: string;
  }>;
  setCurrentTags: () => Promise<void>;
}

export const useDataStore = create<DataStoreProps>((set) => ({
  currentTags: [],
  setCurrentTags: async () => {
    const tags = await fetchTags();
    set((state) => ({ ...state, currentTags: tags }));
  },
}));
