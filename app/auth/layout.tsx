import AuthBar from "@/components/auth/auth-bar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-page w-full h-full bg-white overflow-x-hidden">
      <AuthBar />
      {children}
    </div>
  );
}
