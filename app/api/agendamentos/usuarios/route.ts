import { connectDB } from "@/lib/mongodb";
import Usuario from "@/models/usuario";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();
    const novoUsuario = await Usuario.create(data);

    return NextResponse.json(novoUsuario);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const usuarios = await Usuario.find();
    return NextResponse.json(usuarios);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}