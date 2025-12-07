import mongoose, { Schema, Document, models, model } from "mongoose";
import { IUser } from "./user"; 
import { IJobCategory } from "./job-category";

export interface IJob extends Document {
  professional: mongoose.Types.ObjectId | IUser;
  title: string;
  description?: string;
  category?: mongoose.Types.ObjectId | IJobCategory;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    professional: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 150,
    },
    description: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "JobCategory",
      default: null,
    },
    price: {
      type: Number,
    },
  },
  {
    collection: "jobs",
    timestamps: true,
  }
);

export default models.Job || model<IJob>("Job", JobSchema);
