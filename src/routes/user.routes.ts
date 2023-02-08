import express from "express";
import { createUser, deleteAllUsers, deleteUser, readAllUsers, readUser, updateUser } from "../controllers/user.controller";
import { Request, Response } from "express";
import { validateUser, validateUserSchema } from "../middleware/user.validate";

const userRoutes = express.Router();

userRoutes.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).send("ok");
});

userRoutes.post("/create", validateUser(validateUserSchema.create), createUser);
userRoutes.get("/find/:userId", readUser);
userRoutes.get("/find-all", readAllUsers);
userRoutes.put("/update/:userId", validateUser(validateUserSchema.update), updateUser);
userRoutes.delete("/delete/:userId", deleteUser);
userRoutes.delete("/delete-all", deleteAllUsers);

export default userRoutes;
