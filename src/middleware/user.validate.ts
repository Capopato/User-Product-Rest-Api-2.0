import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateUser = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  };
};

export const validateUserSchema = {
  create: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    passwordCheck: Joi.string().valid(Joi.ref("password")).required(),
  }),
  update: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
