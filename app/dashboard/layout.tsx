'use client'

import DashboardSidebar from "@/components/client/dashboard-sidebar";
import DashboardNavbar from "@/components/client/dashboard.navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const router = useRouter()
  const {
    data: session,
    isPending,
  } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/signin")
    }
  }, [session, isPending, router])

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span>Authenticating...</span>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider defaultOpen={true} open={true}>
        <DashboardSidebar />
        <main className="w-full">
          <div className="dashboard-container w-full h-full bg-white overflow-x-hidden">
            <DashboardNavbar />
            {children}
          </div>
        </main>
      </SidebarProvider>
    </QueryClientProvider>

  );
}
