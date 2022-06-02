import React from "react";
import { connect, sendMessage } from "../../api/socket";

class Login extends React.Component {
  constructor(props: any) {
    super(props);
    connect();
  }

  sendTestMessage() {
    sendMessage("This is a test message.");
  }

  render() {
    return (
      <React.Fragment>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-fifth"></div>
              <div className="column">
                <div className="box">
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Enter username"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button
                      className="button is-fullwidth is-link"
                      onClick={this.sendTestMessage}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="column is-one-fifth"></div>
            </div>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
