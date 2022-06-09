import React from "react";
import "./Chat.css";

interface IChatMessageProps {
  username: string;
  message: string;
}

const ChatMessage = (props: IChatMessageProps) => {
  return (
    <React.Fragment>
      <div className="box">
        <div className="block">
          <strong>{props.username}: </strong>
          {props.message}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatMessage;
