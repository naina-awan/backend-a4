const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(4000, () => {
      console.log("Blog API running on port 4000");
    });
  })
  .catch((err) => console.log("DB Error:", err));
