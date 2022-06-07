import React, { useState } from "react";
import "./Chat.css";
import ChatMessage from "./ChatMessage";

const ChatHistory = () => {
  const [messages] = useState([]);

  return (
    <React.Fragment>
      <div className="scrollable h-87">
        <div className="section py-4">
          <div className="container">
            {messages.map((message) => (
              <ChatMessage message={message} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatHistory;
