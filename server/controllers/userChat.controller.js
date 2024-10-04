import UserChats from "../models/UserChat.model.js";

export const getUserChat = async (req, res) => {
  const userId = req.auth.userId;

  try {
    const userChats = UserChats.find({ userId });

    res.status(200).json(userChats[0].chats);
  } catch (error) {
    console.error(`error from getUserChat, ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
