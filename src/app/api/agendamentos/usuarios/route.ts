import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/src/lib/mongodb";
import Usuario from "@/src/models/usuario";
import { authMiddleware } from "@/src/lib/authMiddleware";

// GET – listar usuários (protegido)
export async function GET(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const usuarios = await Usuario.find();
  return NextResponse.json(usuarios);
}

// POST – criar usuário
export async function POST(req: NextRequest) {
  await connectDB();
  const data = await req.json();
  const novoUsuario = await Usuario.create(data);
  return NextResponse.json(novoUsuario);
}

// PATCH – atualizar usuário (protegido)
export async function PATCH(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const { id, ...rest } = await req.json();
  const usuario = await Usuario.findByIdAndUpdate(id, rest, { new: true });
  return NextResponse.json(usuario);
}

// DELETE – remover usuário (protegido)
export async function DELETE(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const { id } = await req.json();
  await Usuario.findByIdAndDelete(id);
  return NextResponse.json({ message: "Usuário deletado" });
}