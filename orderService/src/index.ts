import express from "express";

import { orderRouter } from "./routers/orderRouter";

const app = express();

app.use("/orders", orderRouter);


console.log("Hello");

app.get("/", (req, res) => res.json({ message: "Hello ini Arifa" }));

app.listen(8006);
