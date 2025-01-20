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
import { sidebarLanguages } from "@/lib/sidebar";
import SidebarQuickLinks from "../client-side/sidebar-quick-links";
import LogoutButton from "../client-side/logout-button";

const DashboardSidebar = () => {
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
              <SidebarQuickLinks />
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="font-bold text-gray-400 tracking-wider">
              Languages
            </SidebarGroupLabel>
            <SidebarGroupContent className="pt-1">
              <SidebarMenu>
                {sidebarLanguages.map((item) => {
                  return (
                    <SidebarMenuItem key={item.id}>
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
            <LogoutButton />
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </aside>
  );
};



export default DashboardSidebar;
