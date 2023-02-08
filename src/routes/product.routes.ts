import express from "express";
import { createProduct, readProduct, updateProduct, readAllProducts, deleteProduct, deleteAllProd } from "../controllers/product.controller";
import { validateProduct, validateProductSchema } from "../middleware/product.validate";

const productRoutes = express.Router();

productRoutes.post("/create", validateProduct(validateProductSchema.create), createProduct);
productRoutes.get("/find/:productId", readProduct);
productRoutes.get("/find-all", readAllProducts);
productRoutes.put("/update/:productId", validateProduct(validateProductSchema.create), updateProduct);
productRoutes.delete("/delete/:productId", deleteProduct);
productRoutes.delete("/delete-all", deleteAllProd);

export default productRoutes;
