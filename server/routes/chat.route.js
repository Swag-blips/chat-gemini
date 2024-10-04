import express from "express";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import { createChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", ClerkExpressWithAuth(), createChat);

export default router;
