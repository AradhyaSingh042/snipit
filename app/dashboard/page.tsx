import DashboardNavbar from "@/components/client/dashboard.navbar";
import Snippet from "@/components/quick-links/snippet";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <>
      <div className="dashboard-container w-full h-full bg-white overflow-x-hidden">
        <DashboardNavbar />
        <Snippet />
      </div>
    </>
  );
};

export default Dashboard;
