import { FaCode } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { MdFavorite } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { SidebarMenuItem } from "@/types/interface";

import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export const sidebarQuickLinks: Array<SidebarMenuItem> = [
  {
    title: "Snippets",
    url: "#",
    icon: FaCode,
  },
  {
    title: "Overview",
    url: "#",
    icon: SiSimpleanalytics,
  },
  {
    title: "Favorites",
    url: "#",
    icon: MdFavorite,
  },
  {
    title: "Trash",
    url: "#",
    icon: FaTrashAlt,
  },
  {
    title: "Tags",
    url: "#",
    icon: IoPricetags,
  },
];

export const sidebarLanguages: Array<SidebarMenuItem> = [
  {
    title: "Javascript",
    url: "#",
    icon: SiJavascript,
  },

  {
    title: "Python",
    url: "#",
    icon: SiPython,
  },

  {
    title: "Typescript",
    url: "#",
    icon: SiTypescript,
  },
];
