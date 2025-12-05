import mongoose, { Schema, models } from "mongoose";

const AgendamentoSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descricao: { type: String },
    data: { type: String, required: true },
    horario: { type: String, required: true },
    usuarioId: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Agendamento ||
  mongoose.model("Agendamento", AgendamentoSchema);