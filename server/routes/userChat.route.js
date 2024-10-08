import express from "express";
import { getUserChat } from "../controllers/userChat.controller.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = express.Router();

router.get("/", ClerkExpressRequireAuth(), getUserChat);

export default router;
