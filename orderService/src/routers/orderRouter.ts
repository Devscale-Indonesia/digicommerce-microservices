import express from "express";
import { orderController } from "../controllers/orderController";

export const orderRouter = express.Router();

orderRouter.post("/", orderController.createDummyOrder);
