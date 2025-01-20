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
    id: 1,
    title: "Snippets",
    url: "/dashboard/snippet",
    icon: FaCode,
  },
  {
    id: 2,
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: SiSimpleanalytics,
  },
  {
    id: 3,
    title: "Favorites",
    url: "/dashboard/favorite",
    icon: MdFavorite,
  },
  {
    id: 4,
    title: "Trash",
    url: "/dashboard/trash",
    icon: FaTrashAlt,
  },
  {
    id: 5,
    title: "Tags",
    url: "/dashboard/snippet",
    icon: IoPricetags,
  },
];

export const sidebarLanguages: Array<SidebarMenuItem> = [
  {
    id: 1,
    title: "Javascript",
    url: "#",
    icon: SiJavascript,
  },

  {
    id: 2,
    title: "Python",
    url: "#",
    icon: SiPython,
  },

  {
    id: 3,
    title: "Typescript",
    url: "#",
    icon: SiTypescript,
  },
];
