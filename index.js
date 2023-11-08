const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("mongo connected!!");
  })
  .catch((err) => {
    console.log("mongo error!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  // console.log(products);
  res.render("products/index", { products });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send("details page");
  console.log(product);
});

app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
