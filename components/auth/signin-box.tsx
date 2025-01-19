import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import SignInForm from "../forms/signin-form";
import SocialSigninButtons from "../client-side/social-signin-buttons";

const SignInBox = () => {
  return (
    <>
      <div className="auth-container w-full flex justify-center">
        <div className="auth-box w-full md:w-3/12 pt-6 flex flex-col items-center gap-3">
          <div className="logo-container w-10 h-10 flex justify-center items-center rounded-md border border-gray-400 scale-95">
            <FaCode className="scale-150 dark:text-slate-100" />
          </div>
          <h4 className="font-semibold text-2xl tracking-wide">
            Log in to Snipit
          </h4>
          <span className="flex flex-row gap-1.5 -mt-3 text-sm items-center text-gray-600">
            Don&apos;t have an account?
            <Link href="/auth/signup">
              <Button variant="link" className="py-0 px-0">
                Sign up
              </Button>
            </Link>
          </span>

          <SignInForm />

          <div className="divider w-full px-8 md:px-4 flex justify-center items-center gap-1 mt-2 mb-2">
            <Separator className="w-1/2" />
            <span className="tracking-wide text-gray-500 text-xs">OR</span>
            <Separator className="w-1/2" />
          </div>

          <div className="social-container px-5 md:px-0 w-full flex flex-col space-y-4">
            <SocialSigninButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInBox;
