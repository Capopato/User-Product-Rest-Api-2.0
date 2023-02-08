import Joi, { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

export const validateProduct = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  };
};

export const validateProductSchema = {
  create: Joi.object({
    title: Joi.string().required().min(5).max(25),
    description: Joi.string().required().min(10).max(250),
    price: Joi.number().required().min(1).max(999),
    prodYear: Joi.number().required().min(1950).max(2023),
  }),
  update: Joi.object({
    title: Joi.string().required().min(5).max(25),
    description: Joi.string().required().min(10).max(250),
    price: Joi.number().required().min(1).max(999),
    prodYear: Joi.number().required().min(1950).max(2023),
  }),
};
