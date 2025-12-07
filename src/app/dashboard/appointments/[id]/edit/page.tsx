import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/db";
import AppointmentForm from "@/components/AppointmentForm";
import Appointment from "@/models/appointment";
import { Types } from "mongoose";
import DashboardContent from "@/components/molecules/dashboardContent";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function EditAppointmentPage({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  await dbConnect();

  console.log("ID recebido na URL:", id);

  let appointment;
  try {
    // Converte o id para ObjectId para evitar problemas de tipo
    appointment = await Appointment.findOne({
      _id: new Types.ObjectId(id),
      userId: (session.user as any).id,
    }).lean();
  } catch (error) {
    redirect("/dashboard");
  }

  if (!appointment) redirect("/dashboard");

  return (
    <DashboardContent>
      <div className="bg-white p-8 rounded-lg flex max-w-full flex-auto flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Editar Agendamento</h1>
          <AppointmentForm
            userId={(session.user as any).id}
            initialData={{
              id: id,
              title: appointment.title,
              description: appointment.description || "",
              date: appointment.date,
              time: appointment.time,
            }}
          />
        </div>
      </div>
    </DashboardContent>
  );
}
