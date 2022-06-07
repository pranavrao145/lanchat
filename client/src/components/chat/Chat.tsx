import React from "react";
import { connect, sendMessage } from "../../api/socket";
import ChatHistory from "./ChatHistory";
import "./Chat.css";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

interface IChatProps {}
interface IChatState {
  message: string;
  allowed: boolean;
}

class Chat extends React.Component<IChatProps, IChatState> {
  constructor(props: IChatProps) {
    super(props);

    this.state = {
      message: "",
      allowed: true,
    };

    connect();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (!Cookies.get("username")) {
      this.setState({
        message: "",
        allowed: false,
      });
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    sendMessage(this.state.message);
  }

  render() {
    return this.state.allowed ? (
      <React.Fragment>
        <ChatHistory />
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
    ) : (
      <Navigate to="/" />
    );
  }
}

export default Chat;
