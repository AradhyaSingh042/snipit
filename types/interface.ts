import { IconType } from "react-icons/lib";
import { CodingLanguage } from "./type";

export interface ThemeSlice {
  darkMode: boolean;
  setDarkMode: (state: boolean) => void;
}

export interface SnippetSlice {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  tags: Array<{
    name: string;
  }>;
  setTags: (tag: string) => void;
  language: CodingLanguage;
  setLanguage: (value: CodingLanguage) => void;
  code: string;
  setCode: (value: string) => void;
  isFavorite: boolean;
  setIsFavorite: () => void;
}

export interface TagSlice {
  name: string;
  setName: (value: string) => void;
}

export interface SidebarMenuItem {
  id: number;
  title: string;
  url: string;
  icon: IconType;
}

export interface SnippetCardProps {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  createdAt: Date;
  tags: Array<{
    id: string;
    name: string;
  }>;
  isFavorite: boolean;
  isDeleted: boolean;
}

export interface SnippetData {
  title: string;
  tags: Array<{
    name: string;
  }>;
  description: string;
  language: string;
  code: string;
}

export interface CodeSnippetBlockProps {
  code: string;
  language: string;
}
