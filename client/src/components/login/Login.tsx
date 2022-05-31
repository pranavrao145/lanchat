import React from "react";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
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
                <a className="button is-fullwidth is-link" href="#">
                  Submit
                </a>
              </div>
            </div>
          </div>
          <div className="column is-one-fifth"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
