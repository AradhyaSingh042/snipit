"use client";

import { SidebarMenuButton } from "../ui/sidebar";
import { FiLogOut } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

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

  return (
    <SidebarMenuButton className="flex pl-4 space-x-2 py-5 tracking-wide text-black">
      <FiLogOut />
      <span onClick={handleLogOut}>Logout</span>
    </SidebarMenuButton>
  );
};

export default LogoutButton;
