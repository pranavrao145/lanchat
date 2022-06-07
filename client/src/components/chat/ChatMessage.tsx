import React from "react";
import "./Chat.css";

interface IChatMessageProps {
  message: string;
}

const ChatMessage = (props: IChatMessageProps) => {
  return (
    <React.Fragment>
      <div className="box">{props.message}</div>
    </React.Fragment>
  );
};

export default ChatMessage;
