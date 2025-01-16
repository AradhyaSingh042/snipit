import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LogoutButton from "@/components/client/logout-button";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/signin");
  }

  const username = session.user?.name || "Guest";

  return (
    <>
      <div className="dashboard-container w-full h-full bg-slate-200 overflow-x-hidden flex justify-center items-center">
        <div className="session-container flex flex-col gap-3">
          <span>Hello, {username}</span>
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
