import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: Intl, required: true },
  noOfRooms: { type: Intl, required: true },
  createdBy: { type: String, required: true },
});

export const HotelModel = mongoose.model("Hotel", HotelSchema);
