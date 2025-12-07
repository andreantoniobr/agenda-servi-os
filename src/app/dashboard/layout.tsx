// layout.tsx ou DashboardLayout.tsx
import type { ReactNode } from 'react';
import DashboardFooter from "@/components/molecules/dashboardFooter";
import DashboardHeader from "@/components/molecules/dashboardHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login"); // garante que só usuários logados acessam

  return (
    <div className="flex min-h-screen w-full min-w-[320px] flex-col bg-(--second-color)">
      <DashboardHeader userName={session.user?.name ?? undefined} />
      <div className="flex-1">
        {children}
      </div>
      <DashboardFooter />
    </div>
  );
}
