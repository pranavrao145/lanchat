import React from "react";
import MessageHistory from "./MessageHistory";
import "./Messages.css";

class Messages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MessageHistory />
        <div className="box stick-to-bottom fullwidth">
          <div className="field">
            <div className="columns is-mobile is-tablet is-desktop">
              <div className="column is-9-mobile is-10-tablet is-11-desktop">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter a message"
                  />
                </div>
              </div>
              <div className="column">
                <a className="button is-link" href="#">
                  Send
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Messages;
