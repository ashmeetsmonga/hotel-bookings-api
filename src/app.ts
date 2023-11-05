import { connectDB } from "./db/connectDB";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}...`);
  await connectDB(process.env.DATABASE_URL);
  console.log("DB Connected");
});
