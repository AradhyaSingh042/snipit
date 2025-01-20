import DashboardSidebar from "@/components/client/dashboard-sidebar";
import DashboardNavbar from "@/components/client/dashboard.navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <SidebarProvider defaultOpen={true} open={true}>
      <DashboardSidebar />
      <main className="w-full">
        <div className="dashboard-container w-full h-full bg-white overflow-x-hidden">
          <DashboardNavbar />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
