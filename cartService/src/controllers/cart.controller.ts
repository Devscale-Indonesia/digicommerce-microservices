import type { Request, Response } from "express";

// crud
export function handleCreateCart(req: Request, res: Response) {
  return res.send("Hello this is add Cart");
}

export function handleGetCart(req: Request, res: Response) {
  return res.send("Hello this is GetCart");
}

export function handleEditCart(req: Request, res: Response) {
  return res.send("Hello this is EditCart");
}

export function handleDeleteCart(req: Request, res: Response) {
  return res.send("Hello this is Delete/Remove Cart");
}
