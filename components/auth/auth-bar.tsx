"use client";

import { IoIosArrowRoundBack } from "react-icons/io";
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
import Link from "next/link";

const AuthBar = () => {
  const { darkMode, setDarkMode } = useSnippetStore();
  useTheme();

  return (
    <>
      <header className="w-full flex justify-center dark:bg-zinc-900">
        <nav className="w-11/12 flex justify-between items-center py-4">
          <div className="left-container">
            <Link href="/" className="flex flex-row items-center gap-2.5">
              <IoIosArrowRoundBack className="scale-150 dark:text-slate-100 text-black" />
              <h3 className="font-medium tracking-wider dark:text-slate-100 capitalize">
                Back
              </h3>
            </Link>
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
          </div>
        </nav>
      </header>
      <Separator className="dark:bg-[#27272A]" />
    </>
  );
};

export default AuthBar;
