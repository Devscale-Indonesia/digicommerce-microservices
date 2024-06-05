import express from "express";
import {
  handleCreateOrder,
  handleGetOrder,
  handleEditOrder,
  handleDeleteOrder,
} from "../controllers/order.controller";
export const orderRouter = express();

// declare router
orderRouter.get("/orders", handleGetOrder);
orderRouter.post("/orders", handleCreateOrder);
orderRouter.patch("/orders/:id", handleEditOrder);
orderRouter.delete("/orders/:id", handleDeleteOrder);
