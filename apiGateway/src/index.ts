import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  })
);

app.use(
  "/api/users",
  createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
  })
);

app.use(
  "/api/products",
  createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true,
  })
);

app.use(
  "/api/search",
  createProxyMiddleware({
    target: "http://localhost:8004",
    changeOrigin: true,
  })
);

app.use(
  "/api/carts",
  createProxyMiddleware({
    target: "http://localhost:8005",
    changeOrigin: true,
  })
);

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: "http://localhost:8006",
    changeOrigin: true,
  })
);

app.use(
  "/api/reviews",
  createProxyMiddleware({
    target: "http://localhost:8007",
    changeOrigin: true,
  })
);


app.listen(5500, "0.0.0.0", () => {
  console.log("Server running at http://localhost:5500");
});
