import { Schema, model } from "mongoose";

const orderItemSchema = new Schema({
  name: {},
  quantity: {},
  product: {},
  price: {},
});
const orderSchema = new Schema({
  user: {},
  orderItems: [orderItemSchema],
  total_amount: {},
});

export const Order = model("Order", orderSchema);
