import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Agendamento from "@/models/agendamento";
import { authMiddleware } from "@/lib/authMiddleware";

// GET – listar agendamentos (protegido)
export async function GET(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const agendamentos = await Agendamento.find();
  return NextResponse.json(agendamentos);
}

// POST – criar agendamento (protegido)
export async function POST(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const data = await req.json();
  const novoAgendamento = await Agendamento.create(data);
  return NextResponse.json(novoAgendamento);
}

// PATCH – atualizar agendamento (protegido)
export async function PATCH(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const { id, ...rest } = await req.json();
  const agendamento = await Agendamento.findByIdAndUpdate(id, rest, { new: true });
  return NextResponse.json(agendamento);
}

// DELETE – remover agendamento (protegido)
export async function DELETE(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const { id } = await req.json();
  await Agendamento.findByIdAndDelete(id);
  return NextResponse.json({ message: "Agendamento deletado" });
}