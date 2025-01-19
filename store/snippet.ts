import { SnippetSlice, TagSlice, ThemeSlice } from "@/types/interface";
import { boolean } from "zod";
import { create, StateCreator } from "zustand";

const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  darkMode: false,
  setDarkMode: (state) => set(() => ({ darkMode: state })),
});

const createSnippetSlice: StateCreator<SnippetSlice> = (set) => ({
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
  isFavorite: false,
  setIsFavorite: () =>
    set((state) => {
      const newValue = !state.isFavorite;
      return { ...state, isFavorite: newValue };
    }),
});

const createTagSlice: StateCreator<TagSlice> = (set) => ({
  name: "",
  setName: (value) => set((state) => ({ name: value })),
});

export const useSnippetStore = create<ThemeSlice & SnippetSlice & TagSlice>(
  (...a) => ({
    ...createThemeSlice(...a),
    ...createSnippetSlice(...a),
    ...createTagSlice(...a),
  })
);
