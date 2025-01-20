'use client'

import { FiLogOut } from "react-icons/fi"
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"

const LogoutButton = () => {
  const handleLogout = async () => {
    await authClient.signOut();
  }

  return (
    <SidebarMenuItem className="w-full py-1">
      <Link href={'/auth/signin'}>
        <SidebarMenuButton
          className="flex pl-4 space-x-2 py-5 tracking-wide font-medium text-black"
          onClick={handleLogout}
        >
          <FiLogOut />
          <span>Logout</span>
        </SidebarMenuButton>
      </Link>

    </SidebarMenuItem>
  )
}

export default LogoutButton