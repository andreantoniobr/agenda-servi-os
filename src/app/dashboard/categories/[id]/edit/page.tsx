import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/db";
import JobCategory from "@/models/job-category";
import CategoryForm from "@/components/CategoryForm";
import { Types } from "mongoose";

interface Params {
  params: { id: string };
}

export default async function EditCategoryPage({ params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  await dbConnect();

  let category;
  try {
    // Converte o id para ObjectId para evitar problemas de tipo
    category = await JobCategory.findOne({
      _id: new Types.ObjectId(params.id),
      userId: (session.user as any).id,
    }).lean();
  } catch (error) {
    redirect("/dashboard/categories"); // Se id inválido, volta para a lista
  }

  if (!category) redirect("/dashboard/categories"); // Se não existir, volta para a lista

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Categoria</h1>
      <CategoryForm
        initialData={{
          name: category.name,
          description: category.description || "",
        }}
      />
    </div>
  );
}
