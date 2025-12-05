import { connectDB } from "@/lib/mongodb";
import Profissional from "@/models/profissional";
import { NextResponse } from "next/server";

// Criar novo profissional
export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const novoProfissional = await Profissional.create(data);
    return NextResponse.json(novoProfissional);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Listar todos profissionais
export async function GET() {
  try {
    await connectDB();
    const profissionais = await Profissional.find();
    return NextResponse.json(profissionais);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}