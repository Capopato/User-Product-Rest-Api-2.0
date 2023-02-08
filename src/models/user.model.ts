import mongoose, { Document, Schema } from "mongoose";

export interface userModel extends Document {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  dateCreated: Date;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    passwordCheck: { type: String, required: true },
    dateCreated: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<userModel>("user", userSchema);
