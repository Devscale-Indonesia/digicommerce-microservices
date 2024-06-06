import { Request, Response } from "express";
import { Order } from "../models/orderSchema";
import { orderItem } from "../models/orderItemSchema";

export const orderController = {
  createDummyOrder: async (req: Request, res: Response) => {
    const { user_id, total_amount, status } = req.body;

    const createOrder = new Order({
      user_id,
      total_amount,
      status,
      created_at : new Date(),
      updated_at : new Date(),
    });

    const saved = await createOrder.save();

    return res.json({ message: "good!", data: saved });
  },
};
