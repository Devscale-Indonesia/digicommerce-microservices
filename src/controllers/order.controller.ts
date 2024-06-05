import type { Request, Response } from "express";

// crud
export function handleCreateOrder(req: Request, res: Response) {
  return res.send("Hello this is add order");
}

export function handleGetOrder(req: Request, res: Response) {
  return res.send("Hello this is GetOrder");
}

export function handleEditOrder(req: Request, res: Response) {
  return res.send("Hello this is EditOrder");
}

export function handleDeleteOrder(req: Request, res: Response) {
  return res.send("Hello this is Delete/Remove Order");
}
