import mongoose, { Document, Schema, mongo } from "mongoose";

export interface productModel extends Document {
  title: string;
  description: string;
  price: number;
  prodYear: number;
}

const productSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    prodYear: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<productModel>("product", productSchema);
