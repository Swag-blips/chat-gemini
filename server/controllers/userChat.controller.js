import UserChats from "../models/UserChat.model.js";

export const getUserChat = async (req, res) => {
  const userId = req.auth.userId;

  try {
    const userChat = await UserChats.findOne({ userId });

    if (!userChat) {
      return res.status(404).json({ error: "User chats not found" });
    }

    res.status(200).json(userChat.chats);
  } catch (error) {
    console.error(`error from getUserChat, ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
