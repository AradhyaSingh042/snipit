import { useSnippetStore } from "@/store/snippet";
import { useEffect } from "react";

export const useTheme = () => {
  const { darkMode } = useSnippetStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
};
