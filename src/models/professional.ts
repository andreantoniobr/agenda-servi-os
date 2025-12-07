import { Schema, models, model } from "mongoose";

const ProfessionalSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
    collection: "professionals",
  }
);

const Professional =
  models.Professional || model("Professional", ProfessionalSchema);

export default Professional;
