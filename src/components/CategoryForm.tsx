"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/atoms/button";
import { Plus, Save } from "lucide-react";
import { updateCategory, addCategory } from "@/app/actions"; // sua Server Action
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface CategoryFormProps {
  initialData?: {
    id: string;
    name: string;
    description?: string;
  };
}

export default function CategoryForm({ initialData }: CategoryFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function clientAction(formData: FormData) {
    let result;

    if (initialData?.id) {
      // Editar categoria existente
      result = await updateCategory(initialData.id, formData);
    } else {
      // Criar nova categoria
      result = await addCategory(formData);
    }

    if (result?.error) {
      alert(result.error);
    } else {
      ref.current?.reset();

      alert("Categoria salva com sucesso!");
      redirect("/dashboard/categories");
    }
  }

  return (
    <form ref={ref} action={clientAction} className="flex flex-col gap-4">
      <Input
        name="name"
        placeholder="Nome da categoria"
        defaultValue={initialData?.name}
        required
      />

      <Input
        name="description"
        placeholder="Descrição (opcional)"
        defaultValue={initialData?.description}
      />

      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          type="button"
          className="px-6"
          onClick={() => router.back()}
        >
          Cancelar
        </Button>

        <Button
          variant="primary"
          type="submit"
          className="px-6"
        >
          {initialData ? (
            <Save className="mr-2 h-4 w-4" />
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          {initialData ? "Salvar" : "Adicionar"}
        </Button>
      </div>
    </form>
  );
}
