import React from "react";
import "./Chat.css";
import NewPrompt from "../../components/newPrompts/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

const Chat = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", id],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/chats/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      console.log(data);
      return data;
    },
  });
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          {isPending
            ? "loading"
            : error
            ? "Something went wrong "
            : data?.history?.map((message, indx) => (
                <>
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height="300"
                      width="400"
                      transformation={[{ height: 300, width: 400 }]}
                      loading="lazy"
                      lgip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div
                    className={
                      message.role === "user" ? "message user" : "message"
                    }
                    key={indx}
                  >
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                </>
              ))}

          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default Chat;
