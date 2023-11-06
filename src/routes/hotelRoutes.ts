import { getHotels } from "../controllers/hotelController";
import express from "express";

const router = express.Router();

router.route("/").get(getHotels);

export default router;
