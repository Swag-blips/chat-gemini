import express from "express";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import { createChat, getChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", ClerkExpressWithAuth(), createChat);
router.get("/:id", ClerkExpressWithAuth(), getChat);

export default router;
