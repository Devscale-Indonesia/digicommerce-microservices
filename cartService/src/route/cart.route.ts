import express from "express";
import {
  handleCreateCart,
  handleGetCart,
  handleEditCart,
  handleDeleteCart,
} from "../controllers/cart.controller";
export const cartRouter = express();

// declare router
cartRouter.get("/carts", handleGetCart);
cartRouter.post("/carts", handleCreateCart);
cartRouter.patch("/carts/:id", handleEditCart);
cartRouter.delete("/carts/:id", handleDeleteCart);
