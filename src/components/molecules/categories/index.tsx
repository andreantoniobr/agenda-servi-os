import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { updateCategory, deleteCategory } from "@/app/actions";
import dbConnect from "@/lib/db";
import JobCategory from "@/models/job-category";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import Button from "@/components/atoms/button";
import EditButton from "@/components/atoms/editButtom";
import DeleteButton from "@/components/atoms/deleteButtom";

export default async function CategoriesDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  await dbConnect();

  // Pega as categorias do usuário logado
  const categories = await JobCategory.find({ userId: (session.user as any).id }).lean();

  return (
    <div className="overflow-hidden rounded-xl bg-white sm:col-span-12">
      <div className="px-6 pt-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Categorias</h2>
            <h3 className="text-sm font-medium text-slate-500">
              {categories.length
                ? `Total de ${categories.length} categorias`
                : "Gerencie suas categorias aqui"}
            </h3>
          </div>
          <Button variant="outline" to="/dashboard/categories/new">
            Nova Categoria
          </Button>
        </div>
      </div>

      <div className="p-6">
        {/* Tabela de categorias */}
        <div className="min-w-full overflow-x-auto rounded-sm">
          <table className="min-w-full align-middle text-sm">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Nome
                </th>
                <th className="hidden px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell">
                  Descrição
                </th>
                <th className="px-3 py-2 text-end text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>        
          


              {categories.map((category, index) => (
                <tr
                  key={category._id.toString()}
                  className={`hover:bg-(--third-color) ${index % 2 === 1 ? "bg-(--second-color)" : ""}`}
                >
                  <td className="p-3 text-start font-medium">
                    {category.name}
                    <div className="text-xs text-slate-500 mt-1 md:hidden">
                      {category.description || "Sem descrição"}
                    </div>
                  </td>
                  <td className="hidden p-3 text-slate-600 md:table-cell">
                    {category.description || "Sem descrição"}
                  </td>
                  <td className="p-3 text-end">
                    <div className="flex justify-end space-x-2">
                      <EditButton id={category._id.toString()} />
                      <DeleteButton id={category._id.toString()} action={deleteCategory} />                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          
          {categories.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              Nenhuma categoria encontrada. Crie sua primeira categoria!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
