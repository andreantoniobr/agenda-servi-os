"use client";

import { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/usuarios", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Senha"
        type="password"
        onChange={(e) => setForm({ ...form, senha: e.target.value })}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}