import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { updateAppointment, deleteAppointment } from "@/actions/appointment";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";
import Button from "@/components/atoms/button";
import EditButton from "@/components/atoms/editButtom";
import DeleteButton from "@/components/atoms/deleteButtom";

export default async function AppointmentsDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  await dbConnect();
 
  const appointments = await Appointment.find({ userId: (session.user as any).id }).lean();

  return (
    <div className="overflow-hidden rounded-xl bg-white sm:col-span-12">
      <div className="px-6 pt-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Agendamentos</h2>
            <h3 className="text-sm font-medium text-slate-500">
              {appointments.length
                ? `Total de ${appointments.length} agendamentos`
                : "Gerencie seus agendamentos aqui"}
            </h3>
          </div>
          <Button variant="outline" to="/dashboard/appointments/new">
            Novo Agendamento
          </Button>
        </div>
      </div>

      <div className="p-6">
        {/* Tabela de agendamentos */}
        <div className="min-w-full overflow-x-auto rounded-sm">
          <table className="min-w-full align-middle text-sm">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Título
                </th>
                <th className="hidden px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell">
                  Descrição
                </th>
                <th className="px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell">
                  Data
                </th>
                <th className="px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell">
                  Hora
                </th>
                <th className="px-3 py-2 text-end text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>        
              {appointments.map((appointment, index) => (
                <tr
                  key={appointment._id.toString()}
                  className={`hover:bg-(--third-color) ${index % 2 === 1 ? "bg-(--second-color)" : ""}`}
                >
                  <td className="p-3 text-start font-medium">
                    {appointment.title}
                    <div className="text-xs text-slate-500 mt-1 md:hidden">
                      {appointment.description || "Sem descrição"}
                    </div>
                  </td>
                  <td className="hidden p-3 text-slate-600 md:table-cell">
                    {appointment.description || "Sem descrição"}
                  </td>
                  <td className="hidden p-3 text-slate-600 md:table-cell">
                    {appointment.date}
                  </td>
                  <td className="hidden p-3 text-slate-600 md:table-cell">
                    {appointment.time}
                  </td>
                  <td className="p-3 text-end">
                    <div className="flex justify-end space-x-2">
                      <EditButton id={appointment._id.toString()}  basePath="/dashboard/appointments/" />
                      <DeleteButton id={appointment._id.toString()} action={deleteAppointment} />                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {appointments.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              Nenhum agendamento encontrado. Crie seu primeiro agendamento!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
