const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());

app.use("/api/students", studentRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => console.log("DB Connection Error:", err));
