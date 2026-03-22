import Sidebar from "@/components/layout/Sidebar";
import { AuthProvider } from "@/lib/hooks/useAuth";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
        <Sidebar />
        <main className="flex-1 min-h-screen pb-16 md:pb-0">{children}</main>
      </div>
    </AuthProvider>
  );
}
