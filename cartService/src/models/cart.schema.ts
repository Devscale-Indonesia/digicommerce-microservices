import { Schema, model } from "mongoose";
// import { INote } from "../types/entity";

const cartSchema = new Schema({
  user_id: String,
  quantity: Number,
  price: String,
});

export const Cart = model("Cart", cartSchema);
