import { Request, Response } from "express";
import { Order } from "../models/orderSchema";
import { orderItem } from "../models/orderItemSchema";

export const orderController = {
  addPermissionToProduct: async (req: Request, res: Response) => {},

  getOrderHistory: async (req: Request, res: Response) => {
    const allOrderHistory = await Order.find();

    return res.status(200).json({
      message: "Successfully get all order history!",
      data: allOrderHistory,
    });

    // const allOrderHistory = await Order.find;
    // return res.json(allOrderHistory);
  },
};
