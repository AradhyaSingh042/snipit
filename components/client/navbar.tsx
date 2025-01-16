"use client";

import { FaCode } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
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
import { quickSand } from "@/lib/fonts";

const Navbar = () => {
  const { darkMode, setDarkMode } = useSnippetStore();
  useTheme();

  return (
    <>
      <header className="w-full flex justify-center dark:bg-zinc-900">
        <nav className="w-11/12 flex justify-between items-center py-3">
          <div className="left-container flex flex-row items-center gap-3">
            <FaCode className="scale-150 dark:text-slate-100" />
            <h3
              className={`font-bold text-lg tracking-wide dark:text-slate-100 capitalize ${quickSand.className}`}
            >
              Snipit
            </h3>
          </div>

          <div className="right-container flex flex-row gap-3 items-center">
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
            <Button variant="ghost" className="dark:text-slate-100 dark:hover:bg-zinc-800">
              Sign in
            </Button>
            <Button className="dark:bg-slate-100 dark:text-black">
              Get Started
            </Button>
          </div>
        </nav>
      </header>
      <Separator className="dark:bg-[#27272A]" />
    </>
  );
};

export default Navbar;
