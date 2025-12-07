"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";
import { revalidatePath } from "next/cache";

export async function addAppointment(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) return { error: "Não autorizado" };

  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim() || "";
  const date = formData.get("date")?.toString().trim();
  const time = formData.get("time")?.toString().trim();
  const userId = formData.get("userId")?.toString();

  if (!title) return { error: "O título do agendamento é obrigatório." };
  if (!date) return { error: "A data é obrigatória." };
  if (!time) return { error: "O horário é obrigatório." };
  if (!userId) return { error: "Usuário não informado." };

  await dbConnect();

  try {
    await Appointment.create({
      title,
      description,
      date,
      time,
      userId,
    });

    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    // Trata erro de duplicidade ou outros erros do Mongoose
    return { error: "Erro ao criar agendamento." };
  }
}

export async function updateAppointment(id: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) return { error: "Não autorizado" };

  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim() || "";
  const date = formData.get("date")?.toString().trim();
  const time = formData.get("time")?.toString().trim();

  if (!id || !title || !date || !time) return { error: "Todos os campos obrigatórios devem ser preenchidos" };

  await dbConnect();

  // Verifica se o agendamento pertence ao usuário logado
  const appointment = await Appointment.findOne({ _id: id, userId: (session.user as any).id });
  if (!appointment) return { error: "Agendamento não encontrado ou não autorizado" };

  await Appointment.findByIdAndUpdate(id, { title, description, date, time });
  revalidatePath("/dashboard");

  return { success: true };
}

export async function deleteAppointment(formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) return { error: "ID não fornecido" };

  await dbConnect();
  await Appointment.findByIdAndDelete(id);
  revalidatePath("/dashboard");

  return { success: true };
}
