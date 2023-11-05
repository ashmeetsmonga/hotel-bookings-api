import { NextFunction } from "express";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
});

UserSchema.pre("save", async function (next: NextFunction) {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

export const UserModel = mongoose.model("User", UserSchema);
