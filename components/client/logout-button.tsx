"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/signin");
        },
      },
    });
  };
  return <Button onClick={handleLogOut}>Logout</Button>;
};

export default LogoutButton;
