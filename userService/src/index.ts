import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from user service." });
});

app.listen(8002);
