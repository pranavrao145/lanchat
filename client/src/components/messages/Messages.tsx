import React from "react";
import { connect, sendMessage } from "../../api/socket";
import MessageHistory from "./MessageHistory";
import "./Messages.css";

interface IMessagesProps {}
interface IMessagesState {
  message: string;
}

class Messages extends React.Component<IMessagesProps, IMessagesState> {
  constructor(props: IMessagesProps) {
    super(props);

    connect();

    this.state = {
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    sendMessage(this.state.message);
  }

  render() {
    return (
      <React.Fragment>
        <MessageHistory />
        <div className="box stick-to-bottom fullwidth">
          <div className="field">
            <form onSubmit={this.handleSubmit}>
              <div className="columns is-mobile is-tablet is-desktop">
                <div className="column is-9-mobile is-10-tablet is-11-desktop">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Enter a message"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <button className="button is-link">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Messages;
