import type { Request, Response } from "express";

export function handleGetCart(req: Request, res: Response) {
  return res.send("Hello this is get carts");
}

// Add
export function handleCreateCart(req: Request, res: Response) {
  return res.send("Hello this is create cart");
}

// Remove
export function handleDeleteCart(req: Request, res: Response) {
  return res.send("Hello this is delete cart");
}
