import express from "express";
import {
  authUsers,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/login", authUsers);
userRouter.post("/", registerUser);
userRouter.get("/profile", protect, getUserProfile);
userRouter.put("/profile", protect, updateUserProfile);

export default userRouter;
