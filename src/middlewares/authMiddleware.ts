import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { JWTRequest } from "types";

export const authMiddleware = async (req: JWTRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(400).json({ msg: "Token not found/Invalid token" });

  const token = (authHeader as string).split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;

  req.userId = decodedToken.userId;
  next();
};
