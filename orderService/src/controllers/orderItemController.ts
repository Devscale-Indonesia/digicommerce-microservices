import { Request, Response } from "express";
import { Order } from "../models/orderSchema";
import { orderItem } from "../models/orderItemSchema";

export const orderItemController = {
  createDummyOrderItem: async (req: Request, res: Response) => {
    const { order_id, product_id, quantity, price } = req.body;

    const createOrderItem = new orderItem({
      order_id,
      product_id,
      quantity,
      price,
      isPermitted: false,
    });

    const saved = await createOrderItem.save();
    return res.json({ message: "good!", data: saved });
  },

  addPermissionToProduct: async (req: Request, res: Response) => {
    const { id } = req.params;

    // console.log(id);
    const addPermisson = await orderItem.findByIdAndUpdate(id, {
      isPermitted: true,
    });
    return res.json(addPermisson);
  },

  getOrderHistory: async (req: Request, res: Response) => {
    const allOrderHistory = await orderItem.find();

    return res.status(200).json({
      message: "Successfully get all order history!",
      data: allOrderHistory,
    });
  },
};
