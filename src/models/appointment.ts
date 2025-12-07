import { Schema, models, model } from "mongoose";

const AppointmentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String, required: true },
    time: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "appointments",
  }
);

const Appointment =
  models.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;



