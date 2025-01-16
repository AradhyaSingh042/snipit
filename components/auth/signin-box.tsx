import { Link } from "lucide-react";
import { FaCode } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

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
            <Button variant="link" className="py-0 px-0">
              Sign up
            </Button>
          </span>

          <form className="w-full mt-4 flex flex-col space-y-5 px-5 md:px-0">
            <div className="field-1 flex flex-col space-y-2">
              <Label htmlFor="email" className="tracking-wide">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>

            <div className="field-2 flex flex-col space-y-2">
              <Label htmlFor="password" className="tracking-wide">
                Password
              </Label>
              <Input id="password" type="password" />
            </div>

            <Button type="submit">Continue</Button>
          </form>

          <div className="divider w-full px-8 md:px-4 flex justify-center items-center gap-1 mt-2 mb-2">
            <Separator className="w-1/2" />
            <span className="tracking-wide text-gray-500 text-xs">OR</span>
            <Separator className="w-1/2" />
          </div>

          <div className="social-container px-5 md:px-0 w-full flex flex-col space-y-4">
            <Button
              className="w-full py-5 flex flex-row items-center gap-4"
              variant="outline"
            >
              <SiGithub className="scale-110" /> Login with Github
            </Button>
            <Button
              className="w-full py-5 flex flex-row items-center gap-4"
              variant="outline"
            >
              <FcGoogle className="scale-110" /> Login with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInBox;
