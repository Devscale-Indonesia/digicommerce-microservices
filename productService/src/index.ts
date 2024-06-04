import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ message: "Hello World!" }));

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running at http://localhost:3000");
});
