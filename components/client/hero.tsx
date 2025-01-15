import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="hero-container w-full text-center h-fit flex flex-col pt-32 gap-4 justify-center items-center">
        <div className="tagline px-4 py-1.5 text-sm font-semibold bg-[#F4F4F5] rounded-2xl">
          ✨ Your code snippet companion
        </div>
        <h1 className="text-7xl w-4/6 text-center font-bold">
          Manage your code snippets with ease
        </h1>
        <p className="text-gray-500 w-3/6 text-xl text-center tracking-wide leading-8">
          Organize, edit and share your code snippets. Built with modern tech
          stack for developers who love clean and efficient solutions.
        </p>

        <div className="buttons-container mt-3 flex flex-row items-center gap-5">
          <Button className="px-7 py-6">Get Started</Button>
          <Button variant="outline" className="px-7 py-6">
            Learn More
          </Button>
        </div>

        <span className="mt-5 text-sm text-gray-500">
          No credit card required.
          <span className="text-black font-medium"> Free plan available</span>
        </span>
      </div>
    </>
  );
};

export default Hero;
