"use client";

import { FaCode } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import SignUpForm from "../forms/signup-form";
import { handleSocialSignOn } from "@/lib/user";
import Link from "next/link";

const SignUpBox = () => {
  return (
    <>
      <div className="auth-container w-full flex justify-center">
        <div className="auth-box w-full md:w-3/12 pt-6 flex flex-col items-center gap-3">
          <div className="logo-container w-10 h-10 flex justify-center items-center rounded-md border border-gray-400 scale-95">
            <FaCode className="scale-150 dark:text-slate-100" />
          </div>
          <h4 className="font-semibold text-2xl tracking-wide">
            Create your account
          </h4>
          <span className="flex flex-row gap-1.5 -mt-3 text-sm items-center text-gray-600">
            Already have an account?
            <Link href={"/auth/signin"}>
              <Button variant="link" className="py-0 px-0">
                Sign in
              </Button>
            </Link>
          </span>

          <SignUpForm />

          <div className="divider w-full px-8 md:px-4 flex justify-center items-center gap-1 mt-2 mb-2">
            <Separator className="w-1/2" />
            <span className="tracking-wide text-gray-500 text-xs">OR</span>
            <Separator className="w-1/2" />
          </div>

          <div className="social-container px-5 md:px-0 w-full flex flex-col space-y-4">
            <Button
              className="w-full py-5 flex flex-row items-center gap-4"
              variant="outline"
              onClick={(e) => handleSocialSignOn("github")}
            >
              <SiGithub className="scale-110" /> Sign up with Github
            </Button>
            <Button
              className="w-full py-5 flex flex-row items-center gap-4"
              variant="outline"
              onClick={(e) => handleSocialSignOn("google")}
            >
              <FcGoogle className="scale-110" /> Sign up with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpBox;
