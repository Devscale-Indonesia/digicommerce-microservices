import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const PORT = 8005;
const app = express();

// handling plugin
app.use(cors());

app.get("/", (req, res) => res.json({ message: "Hello World!" }));

app.listen(PORT);
