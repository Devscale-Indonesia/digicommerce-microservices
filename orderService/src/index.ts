import express from "express";

const app = express();

console.log("Hello");

app.get("/", (req, res) => res.json({ message: "Hello ini Arifa" }));

app.listen(8006);
