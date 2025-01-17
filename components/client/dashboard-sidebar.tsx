import { FaCode } from "react-icons/fa6";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { quickSand } from "@/lib/fonts";
import { Separator } from "../ui/separator";
import { sidebarLanguages, sidebarQuickLinks } from "@/lib/sidebar";
import { FiLogOut } from "react-icons/fi";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const DashboardSidebar = () => {
  const handleLogOut = async () => {
    "use server";
    await auth.api.signOut({
      headers: await headers(),
    });

    redirect("/auth/signin");
  };

  return (
    <aside className="sidebar-container">
      <Sidebar>
        <SidebarHeader className="bg-white">
          <SidebarMenu>
            <SidebarMenuItem className="w-full flex flex-row items-center pl-3 py-2 space-x-3">
              <FaCode className="scale-125 dark:text-slate-100 text-black" />
              <span
                className={`sidebar-header-item font-semibold text-xl tracking-wide text-black ${quickSand.className}`}
              >
                Snipit
              </span>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <Separator />

        <SidebarContent className="bg-white pt-4">
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold text-gray-400 tracking-wider">
              Quick Links
            </SidebarGroupLabel>
            <SidebarGroupContent className="pt-1">
              <SidebarMenu>
                {sidebarQuickLinks.map((item, index) => {
                  return (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton className="flex py-5 space-x-2 font-medium pl-3 tracking-wide text-zinc-700">
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="font-bold text-gray-400 tracking-wider">
              Languages
            </SidebarGroupLabel>
            <SidebarGroupContent className="pt-1">
              <SidebarMenu>
                {sidebarLanguages.map((item, index) => {
                  return (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton className="flex py-5 space-x-2 pl-3 font-medium tracking-wide text-zinc-700">
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <Separator />
        <SidebarFooter className="bg-white">
          <SidebarMenu>
            <SidebarMenuItem className="w-full py-1">
              <SidebarMenuButton
                className="flex pl-4 space-x-2 py-5 tracking-wide font-medium text-black"
                onClick={handleLogOut}
              >
                <FiLogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </aside>
  );
};

export default DashboardSidebar;
