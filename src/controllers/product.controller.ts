import { Request, Response, NextFunction } from "express";
import productModel from "../models/product.model";
import mongoose from "mongoose";
import userModel from "../models/user.model";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  const title: string = req.body.title;
  const description: string = req.body.description;
  const prodYear: Number = req.body.prodYear;
  const price: Number = req.body.price;

  const product = new productModel({
    id: new mongoose.Types.ObjectId(),
    title,
    description,
    prodYear,
    price,
  });

  try {
    product.save();
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const readProduct = async (req: Request, res: Response, next: NextFunction) => {
  /** get productId from param*/
  const productId: string = req.params.productId;

  try {
    const product = await productModel.findById(productId);
    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const readAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allProducts = await productModel.find();
    res.status(200).json({ allProducts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId;
  try {
    const product = await productModel.findById(productId);
    if (product) {
      product.set(req.body);
      product.save();
      res.status(200).json({ product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId;

  try {
    const deleteProduct = await productModel.findByIdAndDelete(productId);
    if (deleteProduct) {
      res.status(200).send("Delete successful");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteAllProd = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const all = await productModel.deleteMany();
    res.status(200).send("All products are deleted.");
  } catch (error) {
    res.status(500).json({ error });
  }
};
