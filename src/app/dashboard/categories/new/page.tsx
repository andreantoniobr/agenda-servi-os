import CategoryForm from "@/components/CategoryForm";
import DashboardContent from "@/components/molecules/dashboardContent";

export default function NewCategoryPage() {
  return (
    <DashboardContent>
      <div className="bg-white p-8 rounded-lg flex max-w-full flex-auto flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Nova Categoria</h1>
          <CategoryForm />
        </div>
      </div>
    </DashboardContent>
  );
}
