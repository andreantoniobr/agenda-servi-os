// src/components/dashboard/UserCountCard.tsx
import { FiUser } from "react-icons/fi";
import dbConnect from "@/lib/db";
import User from "@/models/user"; // Modelo de usuário
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function UserCountCard() {
  // Protege a rota
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  // Conecta ao MongoDB
  await dbConnect();

  // Conta todos os usuários cadastrados
  const userCount = await User.countDocuments().exec();

  return (
    <div className="bg-linear-to-tr from-blue-400 to-blue-600 text-white p-6 rounded-xl">
      <div className="flex items-center mb-2">
        <FiUser size={24} className="mr-2" />
        <h2 className="text-xl font-semibold">Usuários</h2>
      </div>
      <p className="text-2xl font-bold">{userCount}</p>
    </div>
  );
}
