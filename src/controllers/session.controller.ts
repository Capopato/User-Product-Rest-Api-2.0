import { Request, Response, NextFunction } from "express";
import { getUser } from "../database/functions";

/** Create/start a session */
const loginSession = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = getUser(email);
  /** MAKE A PASSWORD CHECK */
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
};

/** Logout from session */
const logoutSession = (req: Request, res: Response, next: NextFunction) => {};
