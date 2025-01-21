import { create } from "zustand";

interface DataStoreProps {
  filter: string;
  setFilter: (value: string) => void;
}

export const useDataStore = create<DataStoreProps>((set) => ({
  filter: "",
  setFilter: (value) => set((state) => ({ ...state, filter: value })),
}));
