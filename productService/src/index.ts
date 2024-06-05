import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => console.log("connected to mongo"))
  .catch(() => console.error("Monggo connection error"));

const app = express();

// app.use("/product");

app.get("/", (req, res) => res.json({ message: "Hello World!" }));

app.listen(8003, "0.0.0.0", () => {
  console.log("Server running at http://localhost:8003");
});
