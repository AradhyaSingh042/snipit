"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useSnippetStore } from "@/store/snippet";
import { useTheme } from "@/hooks/use-theme";
import { IoSearch } from "react-icons/io5";
import SnippetSheet from "./snippet-sheet";
import { authClient } from "@/lib/auth-client";

const DashboardNavbar = () => {
  const { darkMode, setDarkMode } = useSnippetStore();
  useTheme();

  const { data: session } = authClient.useSession();

  return (
    <>
      <div className="dashboard-nav-container px-4 py-4 w-full flex flexrow justify-between items-center">
        <div className="left-container flex flex-row items-center w-1/2 pl-2">
          <Avatar>
            <AvatarImage src={session?.user.image as string} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="user-container flex flex-col ml-3">
            <h5 className="text-base font-medium">{session?.user.name}</h5>
            <span className="text-xs tracking-wide text-gray-500">
              {session?.user.email}
            </span>
          </div>
          <div className="search-container relative flex w-full ml-8">
            <IoSearch className="absolute top-2.5 left-2 text-gray-500 scale-110" />
            <Input placeholder="Search a snippet..." className="w-full pl-8" />
          </div>
        </div>
        <div className="right-container flex flex-row space-x-6 items-center mr-6">
          <SnippetSheet />
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
      </div>
    </>
  );
};

export default DashboardNavbar;
