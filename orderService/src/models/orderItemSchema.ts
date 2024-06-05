import { Schema, model } from "mongoose";

const orderItemSchema = new Schema({
  order_id: String,
  product_id: String,
  quantity: Number,
  price: Number,
});

export const orderItem = model("orderItem", orderItemSchema);
