import { themeSlice } from "@/types/interface";
import { create, StateCreator } from "zustand";

const createThemeSlice: StateCreator<themeSlice> = (set) => ({
  darkMode: false,
  setDarkMode: (state) => set(() => ({ darkMode: state })),
});

export const useSnippetStore = create<themeSlice>((...a) => ({
  ...createThemeSlice(...a),
}));
