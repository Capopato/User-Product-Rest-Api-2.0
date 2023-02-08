import mongoose from "mongoose";
import express, { urlencoded } from "express";
import config from "./config/config";
import productRoutes from "./routes/product.routes";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";

const app = express();

mongoose
  .set("strictQuery", true)
  .connect(config.mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
    startServer();
  })
  .catch((error) => {
    console.log(error);
  });

const startServer = () => {
  /** set api rules */
  app.use(express.json());
  app.use(urlencoded({ extended: false }));
  app.use("/product", productRoutes);
  app.use("/session", sessionRoutes);
  app.use("/user", userRoutes);

  app.get("/healthcheck", (res, req) => {});

  app.listen(config.PORT, () => console.log(`Server is connected to port: ${config.PORT}`));
};
