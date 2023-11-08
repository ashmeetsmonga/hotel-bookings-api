import { authMiddleware } from "../middlewares/authMiddleware";
import { createRoom } from "../controllers/roomController";
import express from "express";

const router = express.Router();

router.route("/").post(authMiddleware, createRoom);

export default router;
