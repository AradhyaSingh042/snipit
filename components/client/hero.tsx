import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero-container dark:bg-zinc-900 w-full text-center h-fit flex flex-col pt-32 gap-4 justify-center items-center">
        <div className="tagline px-4 py-1.5 text-sm font-semibold bg-[#F4F4F5] dark:bg-zinc-700 rounded-2xl dark:text-slate-100">
          ✨ Your code snippet companion
        </div>
        <h1 className="text-7xl w-4/6 dark:text-slate-100 text-center font-bold">
          Manage your code snippets with ease
        </h1>
        <p className="text-gray-500 dark:text-gray-400 w-3/6 text-xl text-center tracking-wide leading-8">
          Organize, edit and share your code snippets. Built with modern tech
          stack for developers who love clean and efficient solutions.
        </p>

        <div className="buttons-container mt-3 flex flex-row items-center gap-5">
          <Link href="/auth/signup">
            <Button className="px-7 py-6 dark:bg-slate-100 dark:text-black">
              Get Started
            </Button>
          </Link>

          <a href="https://github.com/AradhyaSingh042/snipit" target="_blank">
            <Button
              variant="outline"
              className="px-7 py-6 dark:bg-zinc-700 dark:border-none dark:text-slate-100"
            >
              Learn More
            </Button>
          </a>
        </div>

        <span className="mt-5 text-sm text-gray-500 dark:text-gray-400">
          No credit card required.
          <span className="text-black dark:text-slate-100 font-medium">
            {" "}
            Free plan available
          </span>
        </span>
      </div>
    </>
  );
};

export default Hero;
