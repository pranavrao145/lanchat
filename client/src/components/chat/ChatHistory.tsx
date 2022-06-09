import React from "react";
import { useSelector } from "react-redux";
import { IChatMessage } from "../../api/message";
import "./Chat.css";
import ChatMessage from "./ChatMessage";

const ChatHistory = () => {
  const messages: IChatMessage[] = useSelector((state: any) => state.messages);

  return (
    <React.Fragment>
      <div className="scrollable h-87">
        <div className="section py-4">
          <div className="container">
            {messages.map((message: IChatMessage) => (
              <ChatMessage username={message.username} message={message.text} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatHistory;
