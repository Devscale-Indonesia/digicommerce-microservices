import express from "express";
import {
  handleCreateCart,
  handleGetCart,
  handleDeleteCart,
} from "../controllers/cart.controller";
export const cartRouter = express();

// declare router
cartRouter.get("/cart", handleGetCart);
cartRouter.post("/cart", handleCreateCart);
cartRouter.delete("/cart/:id", handleDeleteCart);
