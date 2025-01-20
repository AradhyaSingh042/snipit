'use client'

import { sidebarQuickLinks } from "@/lib/sidebar";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";

const SidebarQuickLinks = () => {

  return <>
    <SidebarMenu>
      {sidebarQuickLinks.map((item, index) => {
        return (
          <SidebarMenuItem key={index}>
            <Link href={item.url} prefetch={true}>
              <SidebarMenuButton className="flex py-5 space-x-2 font-medium pl-3 tracking-wide text-zinc-700">
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  </>
}

export default SidebarQuickLinks