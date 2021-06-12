import express from "express";
import {
  authUsers,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} from "../controllers/userControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/login", authUsers);
userRouter.get("/", protect, admin, getUsers);
userRouter.post("/", registerUser);
userRouter.get("/profile", protect, getUserProfile);
userRouter.put("/profile", protect, updateUserProfile);

export default userRouter;
