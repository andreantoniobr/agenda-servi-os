'use server'

import dbConnect from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import JobCategory from "@/models/job-category";

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) return { error: "Todos os campos são obrigatórios!" };

  await dbConnect();

  // Verifica se já existe
  const existingUser = await User.findOne({ email });
  if (existingUser) return { error: "Email já cadastrado" };

  // Cria hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashedPassword });
  return { success: true };
}


export async function addCategory(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) return { error: "Não autorizado" };

  const name = formData.get("name")?.toString().trim();
  const description = formData.get("description")?.toString().trim() || "";

  if (!name) return { error: "O nome da categoria é obrigatório." };

  await dbConnect();

  try {
    await JobCategory.create({
      name,
      description,
      userId: (session.user as any).id,
    });

    // Atualiza a lista de categorias no dashboard
    revalidatePath("/dashboard/categories");

    return { success: true };
  } catch (error: any) {    
    return { error: "Erro ao criar categoria." };
  }
}


export async function deleteCategory(formData: FormData) {
  const id = formData.get("id");

  if (!id) return { error: "ID não fornecido" };

  await dbConnect();  
  await JobCategory.findByIdAndDelete(id);
  revalidatePath("/dashboard/categories");

  return { success: true };
}

export async function updateCategory(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) return { error: "Não autorizado" };

  const id = formData.get("id");
  const name = formData.get("name");
  const description = formData.get("description");

  if (!id || !name) return { error: "ID e nome são obrigatórios" };

  await dbConnect();

  // Verifica se a categoria pertence ao usuário logado
  const category = await JobCategory.findOne({ _id: id, userId: (session.user as any).id });
  if (!category) return { error: "Categoria não encontrada ou não autorizada" };

  await JobCategory.findByIdAndUpdate(id, { name, description });
  revalidatePath("/dashboard/categories");

  return { success: true };
}
