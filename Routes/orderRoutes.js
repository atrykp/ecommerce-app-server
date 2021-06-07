import express from "express";
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/", protect, addOrderItems);
userRouter.get("/:id", protect, getOrderById);

export default userRouter;
