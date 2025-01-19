import { IoIosArrowRoundBack } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ThemeDropdown from "../client-side/theme-dropdown";

const AuthBar = () => {
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
            <ThemeDropdown />
          </div>
        </nav>
      </header>
      <Separator className="dark:bg-[#27272A]" />
    </>
  );
};

export default AuthBar;
