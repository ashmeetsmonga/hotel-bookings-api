import { JWTRequest } from "types";
import { RoomModel } from "../db/modals/Room";
import { Request, Response } from "express";

export const createRoom = async (req: JWTRequest, res: Response) => {
  const { noOfPeople, price, hotel } = req.body;
  if (!noOfPeople || !price || !hotel) return res.status(400).json({ msg: "Please provide noOfPeople, price & hotel" });

  const room = await RoomModel.create({ noOfPeople, price, hotel, createdBy: req.userId });
  return res.status(201).json(room);
};
