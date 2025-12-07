"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/atoms/button";
import { Plus, Save } from "lucide-react";
import { addCategory } from "@/app/actions"; // sua Server Action

interface CategoryFormProps {
  initialData?: {
    name: string;
    description?: string;
  };
}

export default function CategoryForm({ initialData }: CategoryFormProps) {
  const ref = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData) {
    const result = await addCategory(formData);

    if (result?.error) {
      alert(result.error);
    } else {
      ref.current?.reset(); // limpa formulário
      alert("Categoria salva com sucesso!");
    }
  }

  return (
    <form
      ref={ref}
      action={clientAction}
      className="flex flex-col gap-4"
    >
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

      <Button variant="primary" type="submit" className="flex-1">
        {initialData ? (
          <Save className="mr-2 h-4 w-4" />
        ) : (
          <Plus className="mr-2 h-4 w-4" />
        )}
        {initialData ? "Salvar alterações" : "Adicionar categoria"}
      </Button>
    </form>
  );
}
