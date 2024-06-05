import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello from auth service." });
});

app.listen(8001);
