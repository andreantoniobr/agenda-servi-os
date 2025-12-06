import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Usuario from "@/models/usuario";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  await connectDB();

  const { email, senha } = await req.json();

  if (!email || !senha) {
    return NextResponse.json(
      { error: "Email e senha obrigatórios" },
      { status: 400 }
    );
  }

  const usuario = await Usuario.findOne({ email }).lean();
  if (!usuario) {
    return NextResponse.json(
      { error: "Usuário não encontrado" },
      { status: 404 }
    );
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    return NextResponse.json(
      { error: "Senha incorreta" },
      { status: 401 }
    );
  }

  // Gerar token JWT
  const token = signToken({ id: usuario._id.toString(), email: usuario.email });

  return NextResponse.json({
    message: "Login realizado com sucesso",
    usuario: {
      id: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
    },
    token, // envia o token para o front-end
  });
}