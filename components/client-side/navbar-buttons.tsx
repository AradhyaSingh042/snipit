"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const NavbarButtons = () => {
  return (
    <>
      <Link href="/auth/signin">
        <Button
          variant="ghost"
          className="dark:text-slate-100 dark:hover:bg-zinc-800"
        >
          Sign in
        </Button>
      </Link>

      <Link href="/auth/signup">
        <Button className="dark:bg-slate-100 dark:text-black">
          Get Started
        </Button>
      </Link>
    </>
  );
};

export default NavbarButtons;
