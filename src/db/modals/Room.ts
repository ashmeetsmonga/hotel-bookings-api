import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  noOfPeople: { type: Number, required: true },
  price: { type: Number, required: true },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const RoomModel = mongoose.model("Room", RoomSchema);
