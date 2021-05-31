import express from "express";
import { authUsers } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/login", authUsers);

export default userRouter;
