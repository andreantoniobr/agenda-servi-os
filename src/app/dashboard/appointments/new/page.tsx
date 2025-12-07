import AppointmentForm from "@/components/AppointmentForm";
import DashboardContent from "@/components/molecules/dashboardContent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function NewAppointmentPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <DashboardContent>
      <div className="bg-white p-8 rounded-lg flex max-w-full flex-auto flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Novo Agendamento</h1>
          <AppointmentForm userId={(session.user as any).id} />
        </div>
      </div>
    </DashboardContent>
  );
}
