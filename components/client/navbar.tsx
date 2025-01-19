import { FaCode } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { quickSand } from "@/lib/fonts";
import ThemeDropdown from "../client-side/theme-dropdown";
import NavbarButtons from "../client-side/navbar-buttons";

const Navbar = () => {
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
            <ThemeDropdown />
            <NavbarButtons />
          </div>
        </nav>
      </header>
      <Separator className="dark:bg-[#27272A]" />
    </>
  );
};

export default Navbar;
