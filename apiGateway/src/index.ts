import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api/products",
  createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true,
  })
);

app.listen(5500, "0.0.0.0", () => {
  console.log("Server running at http://localhost:5500, go!!!");
});
