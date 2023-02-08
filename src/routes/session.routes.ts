import express from "express";

const sessionRoutes = express.Router();

sessionRoutes.get("/find");
sessionRoutes.get("/find-all");
sessionRoutes.post("/create");
sessionRoutes.put("/update");
sessionRoutes.delete("/delete");

export default sessionRoutes;
