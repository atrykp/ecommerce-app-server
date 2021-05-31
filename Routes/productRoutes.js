import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);

export default productRouter;
