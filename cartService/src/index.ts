import express, { Router } from "express";
import dotenv from "dotenv";
// import cors from "cors";
// import { orderRouter } from "./routes/order.router";
// import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const PORT = 8005;
const app = express();

// handling plugin
// app.use(cors());

// bukan lagi api client, tp api dari api gateway
// forward
// app.use("/api/orders"), createProxyMiddleware({
//   target: "*",
//   changeOrigin: true,
// })

// test route
app.use("/", orderRouter => console.log("hai ini routes"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
