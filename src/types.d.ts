import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface JWTRequest extends Request {
  userId: string;
}

export interface DecodedToken extends JwtPayload {
  userId: string;
  email: string;
}
