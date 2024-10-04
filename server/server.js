import express from "express";
import ImageKit from "imagekit";
import cors from "cors";
import dotenv from "dotenv";
import connectToMongo from "./db/Connect.js";
import chatRoutes from "./routes/chat.route.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});
app.use(express.json());
app.use("/api/chat", chatRoutes);

app.use("/api/upload", async (req, res) => {
  try {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
  connectToMongo();
});
