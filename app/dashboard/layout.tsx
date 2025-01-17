import DashboardSidebar from "@/components/client/dashboard-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true} open={true}>
      <DashboardSidebar />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
