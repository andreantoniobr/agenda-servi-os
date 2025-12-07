import { Schema, models, model, Document } from "mongoose";

export interface IJobCategory extends Document {
  name: string;
  description?: string;
  userId: Schema.Types.ObjectId;
}

const JobCategorySchema = new Schema<IJobCategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    collection: "job_categories",
    timestamps: true,
  }
);

export default models.JobCategory || model<IJobCategory>("JobCategory", JobCategorySchema);
