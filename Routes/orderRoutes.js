import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/", protect, addOrderItems);
userRouter.get("/myorders", protect, getMyOrders);
userRouter.get("/:id", protect, getOrderById);
userRouter.put("/:id/pay", protect, updateOrderToPaid);

export default userRouter;
