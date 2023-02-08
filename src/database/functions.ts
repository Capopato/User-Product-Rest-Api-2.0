import userModel from "../models/user.model";
import { v4 as uuidv4 } from "uuid";

export const getUser = async (email: string) => {
  const user = await userModel.find({ email: email });
  return user;
};

export const createSession = async (email: string) => {
  const sessionId = uuidv4();
};
