import express from "express";
import { orderItemController } from "../controllers/orderItemController";

export const orderItemRouter = express.Router();

orderItemRouter.post("/", orderItemController.createDummyOrderItem);
orderItemRouter.get("/", orderItemController.getOrderHistory);
orderItemRouter.patch("/:id", orderItemController.addPermissionToProduct);
