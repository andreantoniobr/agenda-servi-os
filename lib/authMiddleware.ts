import { NextRequest, NextResponse } from "next/server";

export function authMiddleware(req: NextRequest) {
  const token = req.headers.get("authorization"); // exemplo usando token no header

  if (!token) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  // Opcional: validar token JWT aqui
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return NextResponse.next();
}