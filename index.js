import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRouter from "./Routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
