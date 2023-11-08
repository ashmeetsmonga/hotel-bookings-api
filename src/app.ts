import "express-async-errors";

import { connectDB } from "./db/connectDB";
import dotenv from "dotenv";
import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import userRouter from "./routes/userRoutes";
import hotelRouter from "./routes/hotelRoutes";
import roomRouter from "./routes/roomRoutes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(400).json({ msg: "Something went wrong, please try after some time" });
  next();
});

app.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}...`);
  await connectDB(process.env.DATABASE_URL);
  console.log("DB Connected");
});
