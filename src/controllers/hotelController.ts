import { HotelModel } from "../db/modals/Hotel";
import { Request, Response } from "express";

export const getHotels = async (req: Request, res: Response) => {
  const hotels = await HotelModel.find({});
  return res.status(200).json(hotels);
};

export const createHotel = async (req: Request, res: Response) => {
  const { name, city, state, country, zipCode, noOfRooms } = req.body;
  if (!name || !city || !state || !country || !zipCode || !noOfRooms)
    return res.status(400).json({
      msg: "Please provide name, city, state, country, zipCode & noOfRooms",
    });

  const hotel = await HotelModel.find({ where: { name } });
  if (hotel) return res.status(400).json({ msg: "Hotel with provided name already exists" });

  const newHotel = await HotelModel.create({ name, city, state, country, zipCode, noOfRooms });
  return res.status(201).json(newHotel);
};
