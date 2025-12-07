"use client";

import { ReactNode } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface DeleteButtonProps {
  id: string;
  action: (formData: FormData) => Promise<any>;
  children?: ReactNode;
  confirmMessage?: string;
}

export default function DeleteButton({
  id,
  action,
  children,
  confirmMessage = "Tem certeza que deseja excluir este item?",
}: DeleteButtonProps) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-red-600 hover:bg-red-700 hover:text-red-50 p-2 rounded"
        onClick={(e) => {
          if (!confirm(confirmMessage)) {
            e.preventDefault();
          }
        }}
      >
        {children || <FaRegTrashAlt className="h-4 w-4" />}
      </button>
    </form>
  );
}
