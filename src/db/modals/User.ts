import { NextFunction } from "express";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

interface IUser {
  email: string;
  password: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const UserSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
});

UserSchema.pre("save", async function (next: NextFunction) {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const isMatch = await bcryptjs.compare(candidatePassword, this.password);
  return isMatch;
};

export const UserModel = mongoose.model("User", UserSchema);
