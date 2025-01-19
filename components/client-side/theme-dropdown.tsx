"use client";

import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import { useSnippetStore } from "@/store/snippet";

const ThemeDropdown = () => {
  const { darkMode, setDarkMode } = useSnippetStore();
  useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none focus:outline-none">
        <span>
          {darkMode ? (
            <FiMoon className="scale-110 text-slate-100" />
          ) : (
            <IoSunnyOutline className="scale-110" />
          )}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(e) => setDarkMode(false)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => setDarkMode(true)}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeDropdown;
