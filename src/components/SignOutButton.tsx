'use client'
import { signOut } from "next-auth/react";

import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="group flex w-full gap-2 rounded-sm px-3 py-2 text-sm hover:bg-slate-100"
    >
      <LogOut className="h-4 w-4" />
      Sair
    </button>
  );
}

