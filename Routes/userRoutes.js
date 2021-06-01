import express from "express";
import { authUsers, getUserProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/login", authUsers);
userRouter.get("/profile", protect, getUserProfile);

export default userRouter;
