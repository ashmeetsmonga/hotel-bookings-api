import { UserModel } from "../db/modals/User";
import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).json({ msg: "Please provide email & password" });

  const user = await UserModel.findOne({ email });
  if (user)
    return res.status(400).json({ msg: "User with email already exists" });

  const newUser = await UserModel.create({ email, password });
  return res.status(201).json(newUser);
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).json({ msg: "Please provide email & password" });

  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) return res.status(404).json({ msg: "Invalid credentials" });

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect)
    return res.status(404).json({ msg: "Invalid credentials" });

  return res.status(200).json(user);
};
