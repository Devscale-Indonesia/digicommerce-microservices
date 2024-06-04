import express from "express";

const app = express();
console.log("Hei");

app.get("/", (req, res) => res.json({ message: "Hello!" }));

app.listen(8004);