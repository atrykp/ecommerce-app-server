const express = require("express");
const cors = require("cors");

const products = require("./data/products");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id);

  res.json(product);
});

app.listen(5000, console.log("Server running on port 5000"));
