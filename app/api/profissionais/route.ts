import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Profissional from "@/models/profissional";
import { authMiddleware } from "@/lib/authMiddleware";

export async function GET(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const profissionais = await Profissional.find();
  return NextResponse.json(profissionais);
}

export async function POST(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const data = await req.json();
  const novoProfissional = await Profissional.create(data);
  return NextResponse.json(novoProfissional);
}

export async function PATCH(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const { id, ...rest } = await req.json();
  const profissional = await Profissional.findByIdAndUpdate(id, rest, { new: true });
  return NextResponse.json(profissional);
}

export async function DELETE(req: NextRequest) {
  const middlewareResponse = authMiddleware(req);
  if (middlewareResponse) return middlewareResponse;

  await connectDB();
  const { id } = await req.json();
  await Profissional.findByIdAndDelete(id);
  return NextResponse.json({ message: "Profissional deletado" });
}