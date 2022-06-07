import React from "react";
import "./Chat.css";

interface IChatMessageProps {
  message: string;
}

interface IChatMessageState {}

class ChatMessage extends React.Component<
  IChatMessageProps,
  IChatMessageState
> {
  render() {
    return (
      <React.Fragment>
        <div className="box">{this.props.message}</div>
      </React.Fragment>
    );
  }
}

export default ChatMessage;
