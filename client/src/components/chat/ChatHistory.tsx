import React from "react";
import "./Chat.css";
import ChatMessage from "./ChatMessage";

interface IChatHistoryProps {}

interface IChatHistoryState {
  messages: string[];
}

class ChatHistory extends React.Component<
  IChatHistoryProps,
  IChatHistoryState
> {
  constructor(props: IChatHistoryProps) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="scrollable h-87">
          <div className="section py-4">
            <div className="container">
              {this.state.messages.map((message) => (
                <ChatMessage message={message} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatHistory;
