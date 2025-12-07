import {
  FiUser,
  FiCalendar,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import Appointments from "@/components/molecules/appointments";
import DashboardContent from "@/components/molecules/dashboardContent";
import UserCountCard from "@/components/atoms/userCountCard";
import AppointmentsCountCard from "@/components/atoms/appointmentsCountCard";

export default function DashboardPage() {
  return (
    <>
      <div className="p-4 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <UserCountCard />

          {/* Card 2 */}
          <AppointmentsCountCard />

          {/* Card 3 */}
          <div className="bg-linear-to-tr from-yellow-400 to-yellow-600 text-white p-6 rounded-xl">
            <div className="flex items-center mb-2">
              <FiCheckCircle size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Confirmados</h2>
            </div>
            <p className="text-2xl font-bold">8</p>
          </div>

          {/* Card 4 */}
          <div className="bg-linear-to-tr from-red-400 to-red-600 text-white p-6 rounded-xl">
            <div className="flex items-center mb-2">
              <FiAlertCircle size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Pendentes</h2>
            </div>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>
      </div>

      <DashboardContent>
        <Appointments />
      </DashboardContent>
    </>
  );
}
