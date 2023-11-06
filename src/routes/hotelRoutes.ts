import { authMiddleware } from "../middlewares/authMiddleware";
import { createHotel, getHotels } from "../controllers/hotelController";
import express from "express";

const router = express.Router();

router.route("/").get(getHotels).post(authMiddleware, createHotel);

export default router;
