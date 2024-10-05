import Chat from "../models/Chat.model.js";
import UserChats from "../models/UserChat.model.js";

export const createChat = async (req, res) => {
  const userId = req.auth.userId;
  const { text } = req.body;

  try {
    const newChat = new Chat({
      userId,
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    const userChats = await UserChats.find({ userId });
    console.log(userChats);

    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId,
        chats: [
          {
            _id: savedChat._id,
            title: text.substring(0, 40),
          },
        ],
      });

      console.log("new user chats ", newUserChats);
      await newUserChats.save();
      res.status(201).json({ message: newChat._id });
    } else {
      await UserChats.updateOne(
        { userId },
        {
          $push: {
            chats: {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          },
        }
      );
      res.status(201).json({ id: savedChat._id });
    }
  } catch (error) {
    console.error(`error from createChat Controller ${error.message} `);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getChat = async (req, res) => {
  const userId = req.auth.userId;
  const _id = req.params.id;

  try {
    const chat = await Chat.findOne({ _id, userId });
    res.status(200).json(chat);
  } catch (error) {
    console.error(`an error occured ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
