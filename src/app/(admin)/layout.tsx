// src/app/(admin)/layout.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    // Login route lives under this route group; render it without admin chrome.
    // Access to protected /admin pages is enforced in middleware.ts.
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-stone-100 overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader user={session.user as { name: string; email: string }} />
        <main
          className="flex-1 overflow-y-auto p-6"
          style={{
            background:
              "radial-gradient(circle at 20% 0%, rgba(201,153,58,0.08), transparent 35%), #f5f5f4",
          }}
        >
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
