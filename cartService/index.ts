import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { cartRouter } from "./routes/cart.router";
// import { createProxyMiddleware } from "http-proxy-middleware";
const PORT = 8005;

dotenv.config();

const app = express();

// app.use(
//   "/api/products",
//   createProxyMiddleware({
//     target: "http://localhost:8003",
//     changeOrigin: true,
//   })
// );


// handling plugin
app.use(cors());

// test route
app.use("/", (res, req) => console.log("hai ini routes"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
