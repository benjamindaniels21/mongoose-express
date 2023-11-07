const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("mongo connected!!");
  })
  .catch((err) => {
    console.log("mongo error!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dog", (req, res) => {
  res.send("WOOF!");
});

app.listen(5000, () => {
  console.log("app is listening on port 3000");
});
