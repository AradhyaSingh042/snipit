"use client";

import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { handleSocialSignOn } from "@/lib/user";
import { Button } from "../ui/button";

const SocialSignupButtons = () => {
  return (
    <>
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
    </>
  );
};

export default SocialSignupButtons;
