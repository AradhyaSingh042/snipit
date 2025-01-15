import React from "react";
import { FaCode } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { IoSunnyOutline } from "react-icons/io5";
import { quickSand } from "@/app/layout";

const Navbar = () => {
  return (
    <>
      <header className="w-full flex justify-center">
        <nav className="w-11/12 flex justify-between items-center py-3">
          <div className="left-container flex flex-row items-center gap-3">
            <FaCode className="scale-150" />
            <h3
              className={`font-bold text-lg tracking-wide capitalize ${quickSand.className}`}
            >
              Snipit
            </h3>
          </div>

          <div className="right-container flex flex-row gap-3 items-center">
            <IoSunnyOutline />
            <Button variant="ghost">Sign in</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>
      <Separator />
    </>
  );
};

export default Navbar;
