import { snippetSlice, tagSlice, themeSlice } from "@/types/interface";
import { create, StateCreator } from "zustand";

const createThemeSlice: StateCreator<themeSlice> = (set) => ({
  darkMode: false,
  setDarkMode: (state) => set(() => ({ darkMode: state })),
});

const createSnippetSlice: StateCreator<snippetSlice> = (set) => ({
  title: "",
  setTitle: (value) => set((state) => ({ ...state, title: value })),
  tags: [],
  setTags: (tag) =>
    set((state) => {
      const newTags = state.tags;
      newTags.push({
        name: tag,
      });
      return {
        ...state,
        tags: newTags,
      };
    }),
  description: "",
  setDescription: (value) => set((state) => ({ ...state, description: value })),
  language: "javascript",
  setLanguage: (value) => set((state) => ({ ...state, language: value })),
  code: "",
  setCode: (value) => set((state) => ({ ...state, code: value })),
});

const createTagSlice: StateCreator<tagSlice> = (set) => ({
  name: "",
  setName: (value) => set((state) => ({ name: value })),
});

export const useSnippetStore = create<themeSlice & snippetSlice & tagSlice>(
  (...a) => ({
    ...createThemeSlice(...a),
    ...createSnippetSlice(...a),
    ...createTagSlice(...a),
  })
);
