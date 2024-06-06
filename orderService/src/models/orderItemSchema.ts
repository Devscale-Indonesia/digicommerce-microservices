import { Schema, model } from "mongoose";
import { Order } from "./orderSchema";

const orderItemSchema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: "Order" },
  product_id: String,
  quantity: Number,
  price: Number,
  isPermitted: Boolean,
});

export const orderItem = model("orderItem", orderItemSchema);
