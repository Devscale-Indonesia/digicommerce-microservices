import express from "express";
import { orderController } from "../controllers/orderController";

export const orderRouter = express.Router();

orderRouter.get("/", orderController.getOrderHistory);
orderRouter.get("/", orderController.addPermissionToProduct);
