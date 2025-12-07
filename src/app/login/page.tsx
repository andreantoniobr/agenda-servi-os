"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import Logo from "@/components/atoms/logo";
import Button from "@/components/atoms/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LogIn, Mail, Lock, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) {
      setError("Email ou senha inválidos");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="h-screen flex">
      {/* Lado esquerdo: imagem centralizada */}
      <div className="hidden md:flex w-2/3 bg-gray-50 justify-center items-center">
        <div className="relative w-2/3 h-2/3">
          <Image
            src="/images/login.svg"
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

          <h2 className="text-2xl font-bold mb-8">Entre na sua conta</h2>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </form>

          <div className="mt-8 text-center text-sm font-medium">
            Não tem conta?{" "}
            <Link
              href="/register"
              className="text-(--main-color) hover:underline"
            >
              Inscreva-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
