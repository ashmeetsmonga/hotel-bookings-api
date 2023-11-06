import { HotelModel } from "../db/modals/Hotel";
import { Request, Response } from "express";

export const getHotels = async (req: Request, res: Response) => {
  const hotels = await HotelModel.find({});
  return res.status(200).json(hotels);
};
