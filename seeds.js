const Product = require("./models/product");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("mongo connected!!");
  })
  .catch((err) => {
    console.log("mongo error!!");
    console.log(err);
  });

const p = new Product({
  name: "Grapefruit",
  price: 1.99,
  category: "fruit",
});

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });
