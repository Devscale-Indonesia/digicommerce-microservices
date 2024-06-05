import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { cartRouter } from "./routes/cart.router";

dotenv.config();

const PORT = 8005;
const app = express();

// handling plugin
app.use(cors());

// test route
app.use("/", (res, req) => console.log("hai ini routes"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
