import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {}

function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-(--second-color) text-gray-500 w-full p-3 mb-2 rounded-lg focus:outline-none focus:bg-(--third-color) text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };
