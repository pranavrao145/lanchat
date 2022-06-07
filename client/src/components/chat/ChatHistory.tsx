import React from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import ChatMessage from "./ChatMessage";

const ChatHistory = () => {
  const messages: string[] = useSelector((state: any) => state.messages);

  return (
    <React.Fragment>
      <div className="scrollable h-87">
        <div className="section py-4">
          <div className="container">
            {messages.map((message: string) => (
              <ChatMessage message={message} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatHistory;
