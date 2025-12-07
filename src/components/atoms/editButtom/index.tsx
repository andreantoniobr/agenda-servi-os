"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { FaPencilAlt } from "react-icons/fa";

interface EditButtonProps {
  id: string;
  basePath?: string; // caminho base para a edição, ex: "/dashboard/categories"
  children?: ReactNode;
}

export default function EditButton({
  id,
  basePath = "/dashboard/categories",
  children,
}: EditButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${basePath}/${id}/edit`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-blue-600 hover:bg-blue-700 hover:text-blue-50 p-2 rounded flex items-center justify-center"
    >
      {children || <FaPencilAlt className="h-4 w-4" />}
    </button>
  );
}
