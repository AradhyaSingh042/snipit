import { IconType } from "react-icons/lib";

export interface themeSlice {
  darkMode: boolean;
  setDarkMode: (state: boolean) => void;
}

export interface SidebarMenuItem {
  title: string;
  url: string;
  icon: IconType;
}
