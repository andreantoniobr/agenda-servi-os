"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  to?: string; 
  variant?: "primary" | "secondary" | "white" | "outline";
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  to,
  variant = "primary",
  icon,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;

    if (to) {
      router.push(to); // Navega se tiver 'to'
    } else if (onClick) {
      onClick(); // Executa função normal
    }
  };

  const baseClasses =
    "inline-flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-(--buttons-color) hover:bg-(--buttons-hover-color) text-white focus:ring-blue-500",
    secondary:
      "text-gray-700 hover:bg-(--buttons-hover-color) hover:text-white focus:ring-blue-500",
    white:
      "bg-white hover:bg-(--buttons-color) hover:text-white text-gray-900",
    outline:
      "bg-transparent text-gray-700 border border-gray-300 hover:bg-(--buttons-hover-color) hover:border-(--buttons-hover-color) hover:text-white focus:ring-blue-500",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
