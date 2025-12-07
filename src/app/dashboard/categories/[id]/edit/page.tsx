import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/db";
import JobCategory from "@/models/job-category";
import CategoryForm from "@/components/CategoryForm";
import { Types } from "mongoose";
import DashboardContent from "@/components/molecules/dashboardContent";

interface Params {
  params: Promise<{ id: string }>; // Next.js 15 usa Promise
}

export default async function EditCategoryPage({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  await dbConnect();

  console.log("ID recebido na URL:", id);

  let category;
  try {
    // Converte o id para ObjectId para evitar problemas de tipo
    category = await JobCategory.findOne({
      _id: new Types.ObjectId(id),
      userId: (session.user as any).id,
    }).lean();
  } catch (error) {
    redirect("/dashboard/categories");
  }

  if (!category) redirect("/dashboard/categories");

  return (
    <DashboardContent>
      <div className="bg-white p-8 rounded-lg flex max-w-full flex-auto flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Editar Categoria</h1>
          <CategoryForm
            initialData={{
              id: id,
              name: category.name,
              description: category.description || "",
            }}
          />
        </div>
      </div>
    </DashboardContent>
  );
}
