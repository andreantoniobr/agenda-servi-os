import { FiCalendar } from "react-icons/fi";
import dbConnect from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Appointment from "@/models/appointment";

export default async function AppointmentsCountCard() {
  // Protege a rota
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  // Conecta ao MongoDB
  await dbConnect();

  // Conta todos os usuários cadastrados
  const appointmentsCount = await Appointment.countDocuments().exec();

  return (
    <div className="bg-linear-to-tr from-green-400 to-green-600 text-white p-6 rounded-xl">
      <div className="flex items-center mb-2">
        <FiCalendar size={24} className="mr-2" />
        <h2 className="text-xl font-semibold">Agendamentos</h2>
      </div>
      <p className="text-2xl font-bold">{appointmentsCount}</p>
    </div>
  );
}
