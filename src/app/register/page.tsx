'use client';

import { registerUser } from "../actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import  Button  from "@/components/atoms/button";
import { Input } from "@/components/ui/input";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/atoms/logo";

export default function RegisterPage() {
  const router = useRouter();

  async function clientAction(formData: FormData) {
    const result = await registerUser(formData);
    if (result?.error) {
      alert(result.error);
    } else {
      alert("Conta criada! Faça login.");
      router.push("/login");
    }
  }

  return (
 <div className="h-screen flex">
      {/* Lado esquerdo: imagem centralizada */}
      <div className="hidden md:flex w-2/3 bg-gray-50 justify-center items-center">
        <div className="relative w-2/3 h-2/3">
          <Image
            src="/images/register.svg"
            alt="Login"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Lado direito: formulário de login */}
      <div className="flex w-full md:w-1/3 justify-center items-center bg-white">
        <div className="w-4/5 max-w-md p-8">
          <Link href="/" className="flex mb-10">
            <Logo size="lg" />
          </Link>

          <h2 className="text-2xl font-bold mb-8">Criar uma nova conta</h2>         

<form action={clientAction} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                name="name" 
                type="text" 
                placeholder="Nome" 
                required 
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                name="password" 
                type="password" 
                placeholder="Senha" 
                required 
                className="pl-10"
              />
            </div> 

            <Button className="w-full" type="submit">
              <UserPlus className="mr-2 h-4 w-4" />
              Continuar
            </Button>
          </form>          

          <div className="mt-8 text-center text-sm font-medium">
            Já tem conta? <Link href="/login" className="text-(--main-color) hover:underline">Faça Login</Link>            
          </div>
        </div>
      </div>
    </div>
  );
}


