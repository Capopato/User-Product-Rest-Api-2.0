import { Request, Response, NextFunction } from "express";
import userModel from "../models/user.model";
import mongoose from "mongoose";

/** Create user */
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordCheck = req.body.passwordCheck;
  const dateCreated = new Date();

  const user = new userModel({
    id: new mongoose.Types.ObjectId(),
    name,
    email,
    password,
    passwordCheck,
    dateCreated,
  });

  try {
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const readUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const readAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const all = await userModel.find();
    res.status(200).json({ all });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  try {
    let user = await userModel.findById(userId);
    if (user) {
      user.set(req.body);
      user.save();
      res.status(200).json({ user });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  try {
    const deleteUser = await userModel.findByIdAndDelete(userId);
    if (deleteUser) {
      res.status(200).send("Delete successful");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userModel.deleteMany();
    res.status(200).send("All users are deleted");
  } catch (error) {
    res.status(500).json({ error });
  }
};
