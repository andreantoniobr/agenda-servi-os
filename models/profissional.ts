import mongoose, { Schema, Document } from "mongoose";

export interface IProfissional extends Document {
  nome: string;
  email: string;
  telefone: string;
  categoria: string;
  descricao?: string;
  criadoEm: Date;
}

const ProfissionalSchema = new Schema<IProfissional>(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    categoria: { type: String, required: true },
    descricao: { type: String },
    criadoEm: { type: Date, default: Date.now },
  },
  { collection: "profissionais" }
);

export default mongoose.models.Profissional ||
  mongoose.model<IProfissional>("Profissional", ProfissionalSchema);