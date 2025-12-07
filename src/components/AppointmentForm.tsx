"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/atoms/button";
import { Plus, Save } from "lucide-react";
import { addAppointment, updateAppointment } from "@/actions/appointment";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface AppointmentFormProps {
  initialData?: {
    id: string;
    title: string;
    description?: string;
    date: string;
    time: string;
  };
  userId: string; // obrigatório para criar a appointment
}

export default function AppointmentForm({ initialData, userId }: AppointmentFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function clientAction(formData: FormData) {
    // adicionar userId ao formData
    formData.set("userId", userId);

    let result;

    if (initialData?.id) {
      // Editar appointment existente
      result = await updateAppointment(initialData.id, formData);
    } else {
      // Criar nova appointment
      result = await addAppointment(formData);
    }

    if (result?.error) {
      alert(result.error);
    } else {
      ref.current?.reset();
      alert("Agendamento salvo com sucesso!");
      redirect("/dashboard");
    }
  }

  return (
    <form ref={ref} action={clientAction} className="flex flex-col gap-4">
      <Input
        name="title"
        placeholder="Título do agendamento"
        defaultValue={initialData?.title}
        required
      />

      <Input
        name="description"
        placeholder="Descrição (opcional)"
        defaultValue={initialData?.description}
      />

      <Input
        name="date"
        type="date"
        placeholder="Data"
        defaultValue={initialData?.date}
        required
      />

      <Input
        name="time"
        type="time"
        placeholder="Hora"
        defaultValue={initialData?.time}
        required
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
