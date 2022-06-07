import React, { useEffect } from "react";
import { connect, sendMessage } from "../../api/socket";
import ChatHistory from "./ChatHistory";
import "./Chat.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendMessage(message);
  };

  useEffect(() => {
    if (!Cookies.get("username")) {
      navigate("/");
    }

    connect();
  }, []);

  return (
    <React.Fragment>
      <ChatHistory />
      <div className="box stick-to-bottom fullwidth">
        <div className="field">
          <form onSubmit={handleSubmit}>
            <div className="columns is-mobile is-tablet is-desktop">
              <div className="column is-9-mobile is-10-tablet is-11-desktop">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter a message"
                      onChange={handleChange}
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
};

export default Chat;
