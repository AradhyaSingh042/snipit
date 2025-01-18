import { IconType } from "react-icons/lib";
import { CodingLanguage } from "./type";

export interface themeSlice {
  darkMode: boolean;
  setDarkMode: (state: boolean) => void;
}

export interface snippetSlice {
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
}

export interface tagSlice {
  name: string;
  setName: (value: string) => void;
}

export interface SidebarMenuItem {
  title: string;
  url: string;
  icon: IconType;
}

export interface SnippetCardProps {
  title: string;
  description: string;
  language: string;
  code: string;
  createdAt: Date;
  tags: Array<{
    id: string;
    name: string;
  }>;
}

export interface CodeSnippetBlockProps {
  code: string;
  language: string;
}